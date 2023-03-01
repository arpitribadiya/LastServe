
# LastServe

Restaurants that have leftover food will update their public posting on our website each night with how much food is still available. Anyone in need of food can do so by setting up a time slot and coming to pick up their meal for that evening. By doing this, food waste in restaurants will be reduced and people won't go to bed hungry.

* *Date Created*: 25 Feb 2023
* *Last Modification Date*: 28 Feb 2023
* *Git URL*: https://git.cs.dal.ca/ribadiya/csci_5709_web_group6.git
* *Deployed Project URL*: https://last-serve.netlify.app/

## Authors

* [Arpit Ribadiya](ar304626@dal.ca) - *(Full Stack Developer)*
* [Jay Kania](jy440982@dal.ca) - *(Full Stack Developer)*
* [Lav Patel](lv842182@dal.ca) - *(Full Stack Developer)*
* [Neha Karkhanis](nh601176@dal.ca) - *(Full Stack Developer)*
* [Viraj Joshi](viraj.joshi@dal.ca) - *(Full Stack Developer)*


## Getting Started

### Prerequisites

To have a local copy of this project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
1. To install all required package and dependecncy in local run below commnad:- 
npm install

2. To start project in local run below commnad:-
npm start

3. To login as User, use below credentials on login page
username = "abc@gmail.com"
password = "12345678"

4. To login as Restaurant, use below credentials on login page
username = "xyz@gmail.com"
password = "12345678"

```

## Built With

* [Reactjs](https://reactjs.org/) - The web framework used.
* [npm](https://www.npmjs.com/) - Dependency Management.
* [Visual Studio Code](https://code.visualstudio.com/) - Source-code editor.
* [GitLab](https://about.gitlab.com/) - Source Code Repository
* [Netlify](https://app.netlify.com/) - Online Platform used for web application deployment.
* [Toastify](https://www.npmjs.com/package/react-toastify) -react library to display short livedalerts on web pages.
* [react datatables](https://react-data-table-component.netlify.app/?path=/story/getting-started-intro--page) -react library to display data in tables format.

## Sources Used

### SignupRestaurant.js

*Lines 31, 157

```
const navigate = useNavigate();
navigate('/approvalPending');

```

The code above was created by adapting the code in [bobbyhadz](https://bobbyhadz.com/blog/react-redirect-after-form-submit) as shown below: 

```
const navigate = useNavigate();

const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/contacts');
  };

```

The code in [bobbyhadz](https://bobbyhadz.com/blog/react-redirect-after-form-submit) was implemented to route user to contacts page when he submit form. The code was used because somewhat similar requirement was there like on submitting form wanted to redirect user on other page. The code was modified by just using required navigate function with actual page routing which was ApprovalPending page in our case.



### App.js

*Lines 27 - 29*

```
<BrowserRouter>
      <Route path="/signupRestaurant" element={<SignupRestaurant />} />
       <Route path="/approvalPending" element={<RestaurantApprovalPending />} />
       <Route path="/restaurantSideBar" element={<RestaurantSideBar />} />
  </BrowserRouter>

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

### src/components/RestaurantVolunteer/RestaurantVolunteer.jsx

*Lines 136 - 142*

```
    <div class="dashboard-content">
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    </div>


```

The code above was created by adapting the code in [React Datatable documentation ](https://jbetancur.github.io/react-data-table-component/?path=/docs/pagination-basic--basic&globals=outline:true) as shown below: 

```

() => <DataTable title="Movie List" columns={columns} data={data} pagination />


```

- <!---How---> The code in [React Datatable documentation ](https://jbetancur.github.io/react-data-table-component/?path=/docs/pagination-basic--basic&globals=outline:true) was implemented by jbetancur
- <!---Why---> [React Datatable documentation ](https://jbetancur.github.io/react-data-table-component/?path=/docs/pagination-basic--basic&globals=outline:true)'s Code was used to use the library and create the pagination in the tables used
- <!---How---> [React Datatable documentation ](https://jbetancur.github.io/react-data-table-component/?path=/docs/pagination-basic--basic&globals=outline:true) Code was modified by using different Data and columns and using the tags separately rather than a function.


