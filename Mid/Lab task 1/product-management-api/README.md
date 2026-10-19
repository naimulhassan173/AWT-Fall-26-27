# Lab Task 1: Product and Employee Management

| Detail | Value |
| --- | --- |
| SL | N/A (not provided by faculty) |
| Name | Naimul Hassan |
| Student ID | 23-54173-3 |
| Section | E |

## Stack and structure

NestJS, TypeScript, PostgreSQL, and TypeORM. Each resource has a DTO, entity,
controller, service, and module. Controllers handle HTTP requests and services
perform all database reads and writes. Data is stored in actual PostgreSQL tables.
IDs are generated UUIDs. The employee password is dummy data for this lab.

## Database setup

Install PostgreSQL and start its service. Use DBeaver or pgAdmin to connect as
postgres. This project can reuse the existing `user_management_lab` database.
For a new installation, run the following SQL once in a connection to postgres:

```sql
CREATE DATABASE user_management_lab;
```

Copy `.env.example` to `.env` and set your local PostgreSQL password. If it
contains a # or spaces, surround the password with double quotes. The default
schema is public and the default API port is 5000. Migrations create the products
and employees tables; TypeORM synchronize is disabled.

## Install and run

Use Node.js 22 or later and pnpm. Open a terminal in this project folder:

```powershell
Copy-Item .env.example .env
# Edit .env with your own local settings before continuing.
pnpm.cmd install
pnpm.cmd build
pnpm.cmd run migration:run
pnpm.cmd start:dev
```

When `.env` already contains your working settings, keep that file instead of
copying over it. On Linux/macOS use `cp` and `pnpm` without `.cmd`.

## Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Behavior |
| --- | --- | --- |
| POST | /products | Save a product |
| GET | /products | Return all products |
| GET | /products/:id | Find one product |
| PATCH | /products/:id | Update specified product fields |
| DELETE | /products/:id | Delete a product |
| POST | /employees | Save an employee |
| GET | /employees | Return all employees |
| GET | /employees/:id | Find one employee |
| PATCH | /employees/:id | Update specified employee fields |
| DELETE | /employees/:id | Delete an employee |

POST returns 201. Successful GET/PATCH/DELETE requests return 200. Unknown
record IDs return 404. Malformed UUIDs and invalid request bodies return 400.
Use Body > raw > JSON in Postman, with numeric values sent as JSON numbers.

Example product:

```json
{"name":"Notebook","category":"Stationery","price":120,"quantity":25}
```

Example employee:

```json
{"name":"Lab Employee","email":"lab@example.com","phone":"01700000000","password":"dummy123","age":25,"yearsOfWorking":3}
```

## Postman evidence and submission

Import `Lab-Task-1.postman_collection.json` into Postman. Use the desktop app
or a desktop agent for local requests. Send the requests in the listed order;
the first POST saves the ID into collection variables automatically.

Follow `POSTMAN-GUIDE.md`. Capture the seven required product screenshots in
`screenshots/`. Employee requests are also included for testing; save additional
employee screenshots in `screenshots/employees/` if desired.

Do not submit until the screenshots and student details are complete. Commit
the complete project under `Mid/Lab task 1/product-management-api` in your course
repository. This uses the folder name from the PDF's final submission instruction.
Submit the link directly to that folder by 20 October 2026, 11:59 AM.
Never commit your real `.env`, node_modules, dist, or the previous source backup.
