<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Assignment 3


* *Date Created*: 20 March 2023
* *Last Modification Date*: 31 March 2023
* *group backend gitlab repo  URL*: https://git.cs.dal.ca/vjoshi/csci_5709_group6_backend/-/tree/main
* *group frontend gitlab repo URL*: https://git.cs.dal.ca/ribadiya/csci_5709_web_group6/-/tree/main


* *Deployed frontend URL*: https://lastserve-a3.netlify.app/
* *Deployed backend URL*: https://csci5709-a3-backend.onrender.com

## Authors
* [Lav patel](lv842182@dal.ca) - *Developer*
* [Viraj Joshi](viraj.joshi@dal.ca) 
* [Arpit Ribadiya](ar304626@dal.ca)
* [Neha Karkhanis](nh601176@dal.ca) 
* [Jay Kania](jy440982@dal.ca)

* *link to application*: https://lastserve-a3.netlify.app/


# Feature developed
* Restaurant order management system
The following feature is developed for management of orders by a restuarant manager
To test the following functionality 
* Go to https://lastserve-a3.netlify.app/
* Click on login
* Click on login restaurant
* Use the email: aaa@gmail.com password:1234567890
* Restuarant dashboard page is displayed

## Tasks in the feature 
### View orders by user, their timeslots, and items
* Click on orders on the restaurant overview page
* Search for an order number in active or pastorder by name or ordernumber
* Click on ordernumber table header to sort the table based on the header selected
* Click on pagination to see other orders

### Change order status from pending to packed and picked
* Click on orders on the restaurant overview page
* In the active orders click on packed or picked button to change the status of the order 

### View volunteers their availiblity , and phone number to help with orders
* Click on Volunteers on the restaurant overview page.
* Click on name, Availiblity table header to sort the table based on the header selected
* Click on pagination to see other volunteers

### files created by lav in backend
* controller/restaurantOrdersController.js
* controller/restaurantVolunteerController.js
* routes/restaurantOrders.js
* routes/restaurantVolunteers.js

### files updated by lav in frontend
* src/components/RestaurantOrders/RestaurantOrders.jsx
* src/components/RestaurantVolunteers/RestaurantVolunteers.jsx

## Feature Developed by Viraj

* User Profile Management 

## Tasks 

* User Registration
* User Login 
* User Password Reset 
* User View Profile Details
* User Edit Profile Details 
* User Logout

## Created files for Frontend by Viraj

* src/components/Login/Login.jsx
* src/components/Signup/Signup.jsx
* src/components/SignupModal/SignupModal.jsx
* src/components/UserProfile/UserProfile.jsx
* src/components/UserDetails/UserDetails.jsx
* src/components/EditUserDetails/EditUserDetails.jsx
* src/components/EditUserDetails/EditUserDetailsModal.jsx

## Created files for Backend by Viraj

* db/conn.js
* routes/users.js
* controller/user_controller.js
* server.js

## Feature developed by Arpit

* Restaurant Profile Management

## Tasks of Restaurant Profile Management

* Restaurant registration
* Restaurant login
* View restaurant profile.
* Update restaurant profile.

## Created files for Frontend by Arpit

* UpdateRestaurantProfile.jsx
* SignupRestaurant.jsx
* RestaurantProfile.jsx
* RestaurantLogin.jsx

## Created files for Backend by Arpit

* restaurantController.js
* restaurants.js
* Server.js

## Feature developed by Neha

* Volunteer sign up for LastServe

## Tasks of Volunteer sign up
* Volunteer registration
* Volunteer Email check

## Created files for Backend by Neha

* volunteerController.js
* volunteers.js
* Server.js

### User Order management

- Tasks Under this feature
  - View all active donors with timings and items offered.
  - Filter through all active donors based on location, restaurant name and type of food.
  - Appointment slot booking for pickup.
  - Email of confirmed order once an appointment is booked.
## Files Created by jay Kania

- Files Created (Frontend)

  - Home.jsx
  - Landing.jsx
  - Navbar.jsx
  - Footer.jsx
  - RestaurantCard.jsx
  - Subscription.jsx
  - Sidebar.jsx
  - Posts.jsx
  - Post.jsx
  - Filters.jsx
  - Appointment.jsx
  - AppointmentCard.jsx
  - AppointmentForm.jsx
  - index.css

- Files Created (Backend)

  - posts.js
  - subscription.js
  - postsController.js
  - subscriptionController.js
### Prerequisites for backend

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```

mongodbclient for estasblishing connection and querying mongodb 
express for setting up routes for the rest services
body-parser for parsing json-body and setting json responses
dotenv for fetching and setting environment variables into the nodejs application

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be, assume the marker just acquired a computer

```

npm install 
npm start

```

## Deployment

* Checkout the branch main from the repo provided

* From the root of the directory following command can be run to start the application 

```

npm start

```

## Sources Used in backend

### controller/restaurantVolunteerController.js

*Lines 17*
### controller/restaurantOrdersController.js

*Lines 23*,
*Lines 59*,
*Lines 88*

```
const restaurant = await restaurantsCollection.findOne({ _id: email });


```

The code above was created by adapting the code in [mongodb documentation ](https://www.mongodb.com/docs/realm/sdk/node/examples/query-mongodb/) as shown below: 

```

const venusFlytrap = await plants.findOne({ name: "venus flytrap" });


```

The code in [mongodb documentation ](https://www.mongodb.com/docs/realm/sdk/node/examples/query-mongodb/) as shown below: was implemented by mongodb
[mongodb documentation ](https://www.mongodb.com/docs/realm/sdk/node/examples/query-mongodb/) Code was used to search for a single document in the mongo db 
[mongodb documentation ](https://www.mongodb.com/docs/realm/sdk/node/examples/query-mongodb/) Code was modified by searching  the mongodb database with primary key ("_id") rather then other ky pair of the document

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

### App.js

*Lines 21 - 39*

```
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signupRestaurant" element={<SignupRestaurant />} />
        <Route path="/restaurantLogin" element={<RestaurantLogin />} />
        <Route
          path="/approvalPending"
          element={<RestaurantApprovalPending />}
        />
        <Route path="/restaurantSideBar" element={<RestaurantSideBar />} />
        <Route path="/restaurants" element={<Subscription />} />
        <Route path="/signupVolunteer" element={<SignupVolunteer />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
```

The code above was created by adapting the code in [dev](https://dev.to/emmanuelthecoder/getting-started-with-react-router-19de) as shown below: 

```
<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route path="users" element={<Users/>} />
        <Route path ="posts" element={<Posts />} />
        <Route path="*" element={<h1>Route does not exist</h1>}/>
      </Routes>
  </BrowserRouter>

```

The code in [dev](https://dev.to/emmanuelthecoder/getting-started-with-react-router-19de) was implemented to route user on different pages.The code was used because same functionality was required in application. The code was modified by replacing application component and route at required places.


### _redirects

*Line 1*

```
/* /index.html 200

```

The code above was created by adapting the code in [netlify](https://answers.netlify.com/t/netlify-page-not-found-when-sharing-react-router-dom-based-links/11744) as shown below: 

```
/* /index.html 200

```

The code in [netlify](https://answers.netlify.com/t/netlify-page-not-found-when-sharing-react-router-dom-based-links/11744) was used to resolved issue which I was facing while deploying my application on netlify. I was able to deploy my application however, routing was not working properly (Note:- It was working properly on local). To resolve this I have added this code which is provided by Netlify itself.


### src/components/RestaurantOrders/RestaurantOrders.jsx

*Lines 179 - 188*

```
    const search=(value,searchData)=>{
      let result=[];
      searchData.map((row)=>{
        if (row.name.toUpperCase().startsWith(value.toUpperCase()) || 
        row._id.toUpperCase().startsWith(value.toUpperCase())){
          result.push(row);
        }
      })
      return result
    }


```

The code above was created by adapting the code in [tutorial 4 ](https://git.cs.dal.ca/lpatel/tutorial2/-/blob/tutorial4/src/components/UserProfile.js) as shown below: 

```

  const search=(name,searchArray)=>{
    let searchResult=[]
    searchArray.map((row)=>{
      if (row.name.toUpperCase().startsWith(name.toUpperCase())){
        searchResult.push(row);
      }
      return null
    }


```

The code in [tutorial 4 ](https://git.cs.dal.ca/lpatel/tutorial2/-/blob/tutorial4/src/components/UserProfile.js) was implemented by lav patel
[tutorial 4 ](https://git.cs.dal.ca/lpatel/tutorial2/-/blob/tutorial4/src/components/UserProfile.js)'s Code was to search for a name in array and set another array with the filtered result
[tutorial 4 ](https://git.cs.dal.ca/lpatel/tutorial2/-/blob/tutorial4/src/components/UserProfile.js)'s Code was modified by searching for name as well as order number in the given array 
