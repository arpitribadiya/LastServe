//created by Lav Patel (B00910579)
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import DataTable from 'react-data-table-component';
import axios from 'axios';

function RestaurantApplication() {
    const [restaurantApplications, setRestaurantApplications] = useState([]);
    const [tempRestaurantApplications, setTempRestaurantApplications] = useState([]);
    

    const [restaurantApplicationsPending, setRestaurantApplicationsPending] = useState(true);
    const[updateApplications,setUpdateApplications]=useState(false)
    const email=window.localStorage.getItem("email");

	useEffect(() => {
    const getRestaurantApplications=async () => {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/pendingrestaurantapplications`, {headers:{ email: email}});
    if(result.status===200){
      setRestaurantApplications(result.data)
      setTempRestaurantApplications(result.data)
      setRestaurantApplicationsPending(false)
      setUpdateApplications(false)
    }
  }
  getRestaurantApplications();

	},[updateApplications]);


	const handleButtonClick = (e,action) => {
		
    let restaurantEmail=e.currentTarget.parentNode.parentNode.firstChild.firstChild.innerText;
    let link=`${process.env.REACT_APP_BACKEND_URL}/admin/changerestaurantapplicationstatus/`+restaurantEmail;
    const changeStatus =async () => {
    const result = await axios.post(link,{status:action}, {headers:{ email: email}});
    let error=true
    let message=""
    if (result.status!=204){
      message="status for the order "+restaurantEmail+" could not be set to "+action+" , please try again in some time" 
    }
    else{
      message="status for the order "+restaurantEmail+" changed to "+action; 
      error=false
    }
    if (error){
      toast.error(message, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }else{
      setRestaurantApplicationsPending(true)
      setUpdateApplications(true)
      toast.success(message, {
        position: "top-center",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  changeStatus()
};

    const restaurantApplicationColumns = [

        {
            name: 'Restaurant Email',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
        },
        {
          name: 'Postal Code',
          selector: row => row.postalcode,
          sortable:true
        },
        {
          name: 'Phone Number',
          selector: row => row.phonenumber,
          sortable:true
        },
        { cell: () => <button class="button-approve" onClick={e => handleButtonClick(e,'approved')}>Approve</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },
        { cell: () => <button class="button-reject" onClick={e => handleButtonClick(e,'rejected')}>Reject</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },

    ];
    const searchRestaurant=(e)=>{
      if (e.target.value!==""){
        let result=[]
        result=search(e.target.value,tempRestaurantApplications)
        setRestaurantApplications(result)
      }
      else{
          setRestaurantApplications(tempRestaurantApplications)
      }
    }
    const search=(value,searchData)=>{
      let result=[];
      searchData.map((row)=>{
        if (row._id.toUpperCase().startsWith(value.toUpperCase()) || 
        row.name.toUpperCase().startsWith(value.toUpperCase())){
          result.push(row);
        }
      })
      return result
    }
    return (
        <StyledDiv>
            <ToastContainer/>
    <DashboardHeader heading="Pending Restaurant Applications"/>
    <div class="dashboard-content">
      <div class="table-heading">
        <div class="search-bar">
          <input type="text" placeholder='search by email or name' name='restaurantSearch' onChange={e => searchRestaurant(e)} id="restaurantSearch"></input>
        </div>
      </div>
        <DataTable
            columns={restaurantApplicationColumns}
            data={restaurantApplications}
            progressPending={restaurantApplicationsPending}
            pagination
        />
    </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 20%;
.dashboard-content{
    position: relative;
    height: 134px;
    left: 0;
    padding-left: 12px;
    padding-right: 12px;
    right:0px;
    top: 128px;
    }
  .table-heading{
    display: flex;
    justify-content: space-between;
}
.table-heading h3{
    margin: 12px ;
    width: 50%;
}
.search-bar{
    width: 100%;
    float: right;
    margin:12px;
}
.search-bar input{
    width: auto;
    float: right;

}
.button-approve{
    background-color:yellow;
    color:black;
}
.button-reject{
    background-color:green;
    color:white;
}
`;

export default RestaurantApplication;