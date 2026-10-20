# Lab Task 1: Product and Employee Management

| Detail | Value |
| --- | --- |
| SL | 30 |
| Name | Naimul Hassan |
| Student ID | 23-54173-3 |
| Section | E |

A NestJS API for creating, viewing, updating, and deleting products and employees using PostgreSQL and TypeORM.

## Database setup

Start PostgreSQL and create the database:

```sql
CREATE DATABASE user_management_lab;
```

Copy `.env.example` to `.env` and enter your PostgreSQL connection details. Keep your existing `.env` if it is already configured.

## Run the project

Install dependencies:

```powershell
pnpm.cmd install
```

Create the database tables and start the server:

```powershell
pnpm.cmd run migration:run
pnpm.cmd run start:dev
```

Base URL: `http://localhost:5000`

## Endpoints

| Method | Endpoint |
| --- | --- |
| POST | /products |
| GET | /products |
| GET | /products/:id |
| PATCH | /products/:id |
| DELETE | /products/:id |
| POST | /employees |
| GET | /employees |
| GET | /employees/:id |
| PATCH | /employees/:id |
| DELETE | /employees/:id |

## Screenshots

Postman screenshots are included in the `screenshots` folder.