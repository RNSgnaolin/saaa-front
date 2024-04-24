# San Andreas Aviation Administration
![Badge in Development](https://img.shields.io/badge/status-in_development-red)
![Last Commit](https://img.shields.io/github/last-commit/RNSgnaolin/saaa-api)

The front-end counterpart of the [REST API](https://github.com/RNSgnaolin/saaa-api) created in Spring Boot for portfolio purposes.

## 🛠️ Technologies

* HTML
* CSS
* JavaScript
* Fetch API

## ✔️ Deployment
⚠️ **Still in development. Many functionalities may not be implemented.**

Deployment for development purposes used Live Server in VSCode. The REST API must be running to fetch any data, otherwise certain fields will look blank or not return any data at all.

Make sure that the running API's url is properly set on [request.js](https://github.com/RNSgnaolin/saaa-front/blob/main/scripts/request.js) via `const url = your_localhost_url`.

Given this front-end is purely to display information set on the REST API, an empty database may give underwhelming results. To properly verify the displayed information, fill the database with dummy information.
