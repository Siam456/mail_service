Email Services Server Documentation

Introduction:

This is ready api backend for an Email services built with node.js, express.

Tech and Packages we use in this project:

    1. Node.js framework Express.js.
    2. Dotenv for use environment variable.
    3. Nodemon for run on dev server.
    4. Cors and Body parser
    5. Nodemailer for send email

Getting Started & Installation:

For getting started with the server you have to follow the below procedure. First navigate to the email_services directory.

Step 1 : Configure your .env file:

Within the project directory you'll find a .env.example file just rename it as .env and paste your EMAIL and EMAIL_PASS.

Step 2 : Running the project:

    ⦁	First npm install for install all packages latest version.
    ⦁	npm run start:dev for run in development mode.

Folder Structure & Customization:

⦁ In index.js file you will find declared api endpoint for email route.

⦁ /config : This folder contain auth for sendEmail and createTransporter.

⦁ /models: /.

⦁ /routes: This folder contain email route.

⦁ /controller: This folder contain email route controller function.

⦁ /utils : /.

Configuration & Deployment:

We use heroku for hosting this server if you want to hosting on heroku just follow their documentation, You can also hosting this any other hosting services.
