# Assignment 3

* *Date Created*: 22 MAR 2023
* *Last Modification Date*: 31 MAR 2023
* *Git URL for Frontend*: <https://git.cs.dal.ca/ribadiya/csci_5709_web_group6/-/tree/viraj>
* *Git URL for Backend*: <https://git.cs.dal.ca/vjoshi/csci_5709_group6_backend/-/tree/viraj>

## Authors

* [Viraj Joshi](viraj.joshi@dal.ca) 


## Feature Developed 

* User Profile Management 

## Tasks 

* User Registration
* User Login 
* User Password Reset 
* User View Profile Details
* User Edit Profile Details 
* User Logout

## Created files for Frontend 

* src/components/Login/Login.jsx
* src/components/Signup/Signup.jsx
* src/components/SignupModal/SignupModal.jsx
* src/components/UserProfile/UserProfile.jsx
* src/components/UserDetails/UserDetails.jsx
* src/components/EditUserDetails/EditUserDetails.jsx
* src/components/EditUserDetails/EditUserDetailsModal.jsx
* src/components/NewPassword/NewPassword.jsx
* src/components/NewPassword/NewPassModal.jsx
* src/components/PasswordReset/PasswordReset.jsx

## Created files for Backend 

* db/conn.js
* routes/users.js
* controller/user_controller.js
* server.js

### Prerequisites

To have a local copy of the FrontEnd part of the assignment up and running on your local machine, you will first need to install the dependencies by running the following commands

```
Download all the packages and their dependencies - npm install
Run the web application - npm start

```

To have a local copy of the Backend part of the assignment up and running on your local machine, you will first need to install the dependencies by running the following commands

```

Create enviroment file (.env) to set DB URL, Port & Gmail password - 
atlas_uri=mongodb+srv://admin:admin123@lastserve.thlcj4e.mongodb.net/?retryWrites=true&w=majority
PORT=5000 
gmail_pass=<your password>
Download all the packages and their dependencies - npm install
Run the web application - npm start

```

## Deployment

The developed feature is deployed on Netlify at URL - https://lastserve-a3.netlify.app/

## Built With
* [Reactjs](https://reactjs.org/) - The web framework used to build the web app.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - Styling the web app. 
* [Nodejs](https://nodejs.org/en) - Open source, cross-platform runtime environment for executing JavaScript code. 
* [Thunder Client](https://www.thunderclient.com/) - Lightweight Rest Client for Testing APIs.
* [Netlify](https://www.netlify.com/) - Used to deploy the application on web.
* [Render](https://render.com/) - Used to deploy the application on web.
* [Visual Studio](https://code.visualstudio.com/) - Code editor. 


## Sources Used in Backend

### CSCI_5709_GROUP6_BACKEND/db/conn.js

*Lines 16-28*

```
client = new MongoClient("mongodb+srv://admin:admin123@tutorials.zi8tcpb.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

try {
      // Connect to MongoDB cluster
      await client.connect();

      console.log('Connected to MongoDB');

      // Return reference to database object
      return client.db('tutorial7');
    } catch (err) {
        console.error(err);
    }

```

The code above was created by adapting the code in [MongoDB](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database) as shown below: 

```
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

```

The code in [Mongodb](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database) was implemented to connect to a MongoDB database using Node.js.
The code is used to connect to a cluster hosted on MongoDB Atlas.
The code was modified to create a singleton pattern to ensure DB object is created only once and by retun a db object connected to the database tutorial7 on the hosted cluster in MongoDB Atlas.


### CSCI_5709_GROUP6_BACKEND/controller/user_controller.js

*Lines 148-163*

```

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'virajj60@gmail.com', //Password reset key would from this email address
            pass: process.env.gmail_pass
            }
    });

    const mailOptions = {
        from: 'virajj60@gmail.com',
        to: request.params.email,
        subject: 'LastServe Password Reset Key',
        text: `Your generated key is ${key}. Please use this key to reset your password.`
    };

    const info = await transporter.sendMail(mailOptions);

```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/nodejs/nodejs_email.asp) as shown below: 

```

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

```
The code in [w3schools](https://www.w3schools.com/nodejs/nodejs_email.asp) was implemented to send an email using Node.js.
The code is used to send a password reset key to the user.
The code was modified by adding a sender's email and the application password generated using the account settings option on GMAIL to the trasporter method. The text field in 'mailOptions' was modified to send a randomly genrated alphanumeric key of size 8 to the user.


### CSCI_5709_GROUP6_BACKEND/controller/user_controller.js

*Lines 51-52*

```
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(request.body.password, salt, async function (err, password_hash) {

        });
    });

```

The code above was created by adapting the code in [npm.js](https://www.npmjs.com/package/bcrypt) as shown below: 


```

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});

```

The code in [npm.js](https://www.npmjs.com/package/bcrypt) was implemented to hash a plaintext message.
The code is used to hash a plaintext password before storing it in the database.
The code was modified by adding a saltRound of 10, hashing the password received in the request body and storing it in a string named 'hashedPassword' to be used later. 


## Sources Used in Frontend


### CSCI_5709_WEB_GROUP6/src/components/Login/Login.jsx

*Lines 26*

```
const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

```

The code above was created by adapting the code in [w3resource](https://www.w3resource.com/javascript/form/email-validation.php) as shown below: 

```
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

```

The code in [w3resource](lihttps://www.w3resource.com/javascript/form/email-validation.phpnk) was implemented to validate an email using a regular expression.
The code was used to validate the entered email address.
The code was modified by setting the regular expression in a variable 'validEmail' and match it with the state value using the test function. 

## CSCI_5709_WEB_GROUP6/src/components/SignupModal/SignuModal.jsx

*Lines 30-35* 

```
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);

```
The code above was created by adapting the code in [Medium.com](https://codesandbox.io/s/magical-christian-qxtdm?from-embed) as shown below: 

```
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

```

The code in [Medium.com](https://codesandbox.io/s/magical-christian-qxtdm?from-embed) was implemented style the modal 
The code was referred to style the modal contents.
The code was modified by remove the css properties that were already known to me or were not needed for the purpose of simply displaying a success message. 

