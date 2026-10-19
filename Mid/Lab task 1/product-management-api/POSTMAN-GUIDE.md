# Capture real Postman screenshots

Keep the API running. Import Lab-Task-1.postman_collection.json in Postman.
Open the Products group and send requests individually in the listed order.
Do not take these screenshots from a browser, Swagger, or a collection runner.
Each screenshot must show the method, full URL, response status, and response
body. For POST and PATCH, show Body > raw > JSON alongside the response.
The generated ID is saved automatically by the first POST's Post-response script.

| Order | Request | Save screenshot as |
| --- | --- | --- |
| 1 | POST first product | screenshots/01-create.png |
| 2 | POST second product | No required screenshot; send this before GET all |
| 3 | GET all; show at least two products | screenshots/02-get-all.png |
| 4 | GET first product by its generated ID | screenshots/03-get-by-id.png |
| 5 | PATCH first product with the provided price and quantity | screenshots/04-update.png |
| 6 | GET first product again; show updated values | screenshots/05-confirm-update.png |
| 7 | DELETE first product | screenshots/06-delete.png |
| 8 | GET all; first product absent, second still present | screenshots/07-confirm-delete.png |

For the by-ID requests, replace {{productId}} in the visible URL with the
actual UUID returned by the first POST before taking the screenshot. Likewise
replace {{baseUrl}} with http://localhost:5000 so the full URL is readable.
Use Windows Snipping Tool (Win+Shift+S), save each capture using the exact
filename above, and place it in this project's screenshots folder.

Test the Employees group in the same order. Its requests include all seven
required employee fields. The update request demonstrates partial updates.
Optional employee evidence can use the same filenames in screenshots/employees/.

The supplied ZIP contains no screenshot evidence. You must capture the actual
responses from your running application. Do not expose your real .env or passwords.
Fill in SL, name, ID, and section in README.md before pushing to GitHub.
