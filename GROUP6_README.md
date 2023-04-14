# Group 6 Project 


* *Date Created*: 9th March 2023
* *Last Modification Date*: 10th March 2023
* *group backend gitlab repo  URL*: https://git.cs.dal.ca/vjoshi/csci_5709_group6_backend/-/tree/main
* *group frontend gitlab repo URL*: https://git.cs.dal.ca/ribadiya/csci_5709_web_group6/-/tree/main


* *Deployed frontend URL*: https://lastserve-a3.netlify.app/
* *Deployed backend URL*: https://csci5709-a3-backend.onrender.com

## Authors
* [Lav patel](lv842182@dal.ca) - *MERN Stack Developer*
* [Viraj Joshi](viraj.joshi@dal.ca) - *MERN Stack Developer*
* [Arpit Ribadiya](ar304626@dal.ca) - *MERN Stack Developer*
* [Neha Karkhanis](nh601176@dal.ca) - *MERN Stack Developer*
* [Jay Kania](jy440982@dal.ca) - *MERN Stack Developer*

* *Link to application*: https://lastserve-a3.netlify.app/


# Features Developed by Lav Patel

Restaurant order management 
The following feature is developed for management of orders by a restuarant manager
To test the following functionality 
* Go to https://lastserve-a3.netlify.app/
* Click on login
* Click on login restaurant
* Use the email: aaa@gmail.com password:1234567890
* Restuarant dashboard page is displayed

Admin Content Moderation 


## Tasks in the feature 
* View orders by user, their timeslots, and items
* Change order status from pending to packed and picked
* View volunteers their availiblity , and phone number to help with orders

## Tasks in the feature
* Admin Dashboard visualization
* Delete posts
* Approve restaurants


### Files created by Lav Patel in backend
* controller/restaurantOrdersController.js
* controller/restaurantVolunteerController.js
* controller/AdminController.js
* routes/admin.js
* routes/restaurantOrders.js
* routes/restaurantVolunteers.js

### Files updated by Lav Patel in frontend
* src/components/RestaurantOrders/RestaurantOrders.jsx
* src/components/RestaurantVolunteers/RestaurantVolunteers.jsx
* src/components/Admin/AdminLogin.jsx
* src/components/Admin/AdminSidebar.jsx
* src/components/AdminOverview/AdminOverview.jsx
* src/components/AdminPosts/AdminPosts.jsx

# Features Developed by Viraj Joshi

* User Profile Management 
* User Order History Management

## Tasks in the feature

* User Registration
* User Login - Existing user credentials - virajj260@gmail.com / Test@123
* User Password Reset 
* User View Profile Details
* User Edit Profile Details 
* User Logout



## Tasks in the feature

* View user order history 
* Cancel active orders

## Files created by Viraj Joshi in frontend 

* src/components/Signup/Signup.jsx
* src/components/SignupModal/SignupModal.jsx
* src/components/Login/Login.jsx
* src/components/PasswordReset/PasswordReset.jsx
* src/components/NewPassword/NewPassword.jsx
* src/components/NewPassword/NewPassModal.jsx
* src/components/UserProfile/UserProfile.jsx
* src/components/UserDetails/UserDetails.jsx
* src/components/EditUserDetails/EditUserDetails.jsx
* src/components/EditUserDetails/EditUserDetailsModal.jsx
* src/components/UserOrders/UserOrders.jsx


## Files created by Viraj Joshi in backend 

* db/conn.js
* routes/users.js
* controller/user_controller.js
* server.js

# Features developed by Arpit Ribadiya

* Restaurant Profile Management
* Food Donation Post Management

## Tasks in the feature

* Restaurant registration
* Restaurant login
* View restaurant profile.
* Update restaurant profile

## Tasks in the feature
* Create Post
* Edit Post
* View Post

## Files created by Arpit Ribadiya in frontend

* UpdateRestaurantProfile.jsx
* SignupRestaurant.jsx
* RestaurantProfile.jsx
* RestaurantLogin.jsx
* ActivePosts.jsx
* PastPosts.jsx
* CreatePost.jsx
* EditPost.jsx
* ViewPost.jsx

## Files created/updated by Arpit Ribadiya in backend

* restaurantController.js
* restaurants.js
* Server.js (updated)
* postsController.js
* posts.js

# Features developed by Neha Karkhanis

* Volunteer sign up for LastServe

## Tasks in the feature
* Volunteer registration
* Volunteer Email check

## Files created by Neha Karkhanis in frontend

* SignupVolunteer.jsx
* DonationsAmount.jsx
* DonationForm.jsx
* DonationFinal.jsx

## Files created/updated by Neha Karkhanis in  backend

* volunteerController.js
* volunteers.js
* Server.js (Updated)
* donationController.js
* donation.js

# Features developed by Jay Kania 

* Subscription Management
* User Order management

## Tasks in the feature 
* Subscribe to Restaurants
* Unsubscribe to Restaurants

## Tasks in the feature
* View all active donors with timings and items offered.
* Filter posts based on location, restaurant name and type of food.
* Appointment slot booking for pickup.
* Email of confirmed order once an appointment is booked.

## Files created by Jay Kania in frotend 
* Home.jsx
* Landing.jsx
* Navbar.jsx
* Footer.jsx
* RestaurantCard.jsx
* Subscription.jsx
* Sidebar.jsx
* Posts.jsx
* Post.jsx
* Filters.jsx
* Appointment.jsx
* AppointmentCard.jsx
* AppointmentForm.jsx
* index.css
* MobileNavbar.jsx
* MobileSidebar.jsx
* ProfileDetailsNavbar.jsx
* ProfileNavbar.jsx

## Files created by Jay Kania in backend 
* posts.js
* subscription.js
* postsController.js
* subscriptionController.js


# Prerequisites

To have a local copy of the FrontEnd part of the assignment up and running on your local machine, you will first need to checkout the main branch and 
then install the dependencies by running the following commands in the root folder

```
Download all the packages and their dependencies - npm install
Run the web application - npm start

```

To have a local copy of the Backend part of the assignment up and running on your local machine, you will first need to need to checkout the main branch and 
then install the dependencies by running the following commands

```
Create enviroment file (.env) to set DB URL, Port & Gmail password - 
atlas_uri=mongodb+srv://admin:admin123@lastserve.thlcj4e.mongodb.net/?retryWrites=true&w=majority
PORT=5000 
gmail_pass=<secret application password>
Download all the packages and their dependencies - npm install
Run the web application - npm start

```

## Deployment 

The project is deployed on Netlify at URL - https://lastserve-a3.netlify.app/

## Built With
* [Reactjs](https://reactjs.org/) - The web framework used to build the web app.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - Styling the web app. 
* [Nodejs](https://nodejs.org/en) - Open source, cross-platform runtime environment for executing JavaScript code. 
* [MongoDb](https://www.mongodb.com/) - MongoDB is an cross-platform document-oriented No-SQL database.
* [Thunder Client](https://www.thunderclient.com/) - Lightweight Rest Client for Testing APIs.
* [Netlify](https://www.netlify.com/) - Used to deploy the application on web.
* [Render](https://render.com/) - Used to deploy the application on web.
* [Visual Studio](https://code.visualstudio.com/) - Code editor. 

# Sources Used in backend

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

### db/conn.js

*Lines 16-28*

```
client = new MongoClient("mongodb+srv://admin:admin123@tutorials.zi8tcpb.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

try {
      // Connect to MongoDB cluster
      await client.connect();

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


### controller/user_controller.js

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


### controller/user_controller.js

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

### Volunteer.js

*Lines 45 to 47*

```

 const checkEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+_+[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

```

The above code has been adapted from https://stackoverflow.com shown below

```

function validate(form_id,email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.forms[form_id].elements[email].value;
   if(reg.test(address) == false) {
      alert('Invalid Email Address');
      return false;
   }
}

```

The code in https://stackoverflow.com was implemented to validate an entered email id.
By putting the regex in a variable called "checkEmail," the same code has been updated to fit the purpose.




# Sources Used in frontend

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


### src/components/Login/Login.jsx

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

### src/components/SignupModal/SignuModal.jsx

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

The code in [netlify](https://answers.netlify.com/t/netlify-page-not-found-when-sharing-react-router-dom-based-links/11744) was used to resolved issue which we were facing while deploying the application on netlify. I was able to deploy my application however, routing was not working properly (Note:- It was working properly on local). To resolve this,  added this code which is provided by Netlify itself.



### volunteerController.js

Some form styling has also been referenced from Neha Karkhani's Assignment-1, Assignment-2 and Tutorials. 
