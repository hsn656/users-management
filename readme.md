# User Management API

## Description
In User Management API, users can register then login, see their profile, update it.
admin can login and search in system users.

- users are stored in firestore.
- for the sake of enhanced search, users are stored in algolia also.
- to keep algolia up to date and consistent with firestore we use firebase functions.

## Technology Stack

- express.j
- firebase functions
- firebase firestor
- algolia

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine.
- navigate to the project directory.

```bash 
cd users-management/
```
- install firebase cli following this [docs](https://firebase.google.com/docs/cli)

- then start firebase emulators

```bash
firebase emulators:start
```
- copy the '.env.exmaple' to be '.env' and replace the ALGOLIA values.

```bash 
cp .env-example .env
```

## Notes
- By Default system has one admin user with username: 'hsnAdmin' and password: 'admin1234'
- you can change admin credintials by updating the '.env' file following values: (ADMIN_USERNAME - ADMIN_PASSWORD)
- there is no another way to create admin user.

## Try API Using Postman
1. open postmain
2. press import and browser to the app
3. you will find it "documentaion/User Managment.postman_collection.json"
4. you are ready now, enjoy ^_^


## Contributing
If you're interested in contributing to this project, please follow these guidelines:
1. Fork the repository
2. Make your changes
3. Submit a pull request