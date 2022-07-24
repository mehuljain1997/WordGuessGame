# WORD GUESS GAME

#Prerequisites

Install Node.js which includes Node Package Manager.
Install the Angular CLI globally:

```bash
npm install -g @angular/cli
```


## Steps
1. Create a .env file in the Backend folder and pass Admin_Mail & Password value

Admin_Mail = "Admin_Gmail"

Password = "GmailPassword"

Note:- If you have enabled 2-factor authentication on your Google account you can't use your regular password to access Gmail programmatically. You need to generate an app-specific password and use that in place of your actual password.
Steps:
Log in to your Google account Go to My Account > Sign-in & Security > App Passwords (Sign in again to confirm it's you) Scroll down to Select App (in the Password & sign-in method box) and choose Other (custom name) Give this app password a name, e.g. "nodemailer" Choose Generate Copy the long generated password and paste it into your Node.js script instead of your actual Gmail password.

`https://stackoverflow.com/questions/60701936/error-invalid-login-application-specific-password-required`


## Run

```bash
# clone Repo
git clone https://github.com/mehuljain1997/WordGuessGame.git

# Backend
cd WordGuessGame/GuessGame/Backend
npm start

#Frontend
cd WordGuessGame/GuessGame/GuessingWordGame
ng serve

```