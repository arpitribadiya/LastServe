//created by Lav Patel (B00910579)
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import DataTable from 'react-data-table-component';
import axios from 'axios';

function RestaurantOrders() {
    const [activeOrders, setActiveOrders] = useState([]);
    const [tempActiveOrders, setTempActiveOrders] = useState([]);
    
    const [pastOrders, setPastOrders] = useState([]);
    const [tempPastOrders, setTempPastOrders] = useState([]);
    const [pastOrdersPending, setPastOrdersPending] = useState(true);
    const [activeOrdersPending, setActiveOrdersPending] = useState(true);
    const[updateOrders,setUpdateOrders]=useState(false)
    const email=window.localStorage.getItem("email");

	useEffect(() => {
    const getActiveOrders=async () => {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/restaurantorders/activeorders`, {headers:{ email: email}});
    if(result.status===200){
      setActiveOrders(result.data)
      setTempActiveOrders(result.data)
      setActiveOrdersPending(false)
      setUpdateOrders(false)
    }
  }
  getActiveOrders();

	},[updateOrders]);

  useEffect(() => {
    const getPastOrders=async () => {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/restaurantorders/pastorders`, {headers:{ email: email}});
      if(result.status===200){
        setPastOrders(result.data)
        setTempPastOrders(result.data)
        setPastOrdersPending(false)
        setUpdateOrders(false)
      }

    }
    getPastOrders();

	}, [updateOrders]);

	const handleButtonClick = (e,action) => {
		
    let orderNumber=e.currentTarget.parentNode.parentNode.firstChild.firstChild.innerText;
    let link=`${process.env.REACT_APP_BACKEND_URL}/restaurantorders/changeorderstatus/`+orderNumber;
    const changeStatus =async () => {
    const result = await axios.post(link,{status:action}, {headers:{ email: email}});
    let error=true
    let message=""
    if (result.status!=204){
      message="status for the order "+orderNumber+" could not be set to "+action+" , please try again in some time" 
    }
    else{
      message="status for the order "+orderNumber+" changed to "+action; 
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
      setPastOrdersPending(true)
      setActiveOrdersPending(true)
      setUpdateOrders(true)
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

    const activeOrderColumns = [

        {
            name: 'Order Number',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Items',
            selector: row => row.items,
        },
        {
          name: 'Pickup Time',
          selector: row => row.pickupTime,
          sortable:true
        },
        {
          name: 'Status',
          selector: row => row.status,
          sortable:true
        },
        { cell: () => <button class="button-packed" onClick={e => handleButtonClick(e,'packed')}>Packed</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },
        { cell: () => <button class="button-picked" onClick={e => handleButtonClick(e,'picked')}>Picked</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },

    ];
    const pastOrderColumns = [

        {
            name: 'Order Number',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Items',
            selector: row => row.items,
        },
        {
          name: 'Pickup Time',
          selector: row => row.pickupTime,
          sortable:true
        }

    ];
    const searchOrders=(e,ordertype)=>{
      if (e.target.value!==""){
        let result=[]
        if (ordertype==="active"){
        result=search(e.target.value,tempActiveOrders)
        setActiveOrders(result)
        }else{
          result=search(e.target.value,tempPastOrders)
          setPastOrders(result)
        }

      }
      else{
        if (ordertype==="active"){
          setActiveOrders(tempActiveOrders)
        }else{
          setPastOrders(tempPastOrders)
        }

      }
    }
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
    return (
        <StyledDiv>
            <ToastContainer/>
    <DashboardHeader heading="Orders"/>
    <div class="dashboard-content">
      <div class="table-heading">
        <h3>Active Orders</h3>
        <div class="search-bar">
          <input type="text" placeholder='search' name='activeOrderSearch' onChange={e => searchOrders(e,'active')} id="activeOrderSearch"></input>
        </div>
      </div>
        <DataTable
            columns={activeOrderColumns}
            data={activeOrders}
            progressPending={activeOrdersPending}
            pagination
        />
        <div class="table-heading">
        <h3>Past Orders</h3>
        <div class="search-bar">
          <input type="text" placeholder='search' name='pastOrderSearch' onChange={e => searchOrders(e,'past')} id="pastOrderSearch"></input>
        </div>
      </div>
        <DataTable
            columns={pastOrderColumns}
            data={pastOrders}
            progressPending={pastOrdersPending}
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
    width: 30%;
    float: right;
    margin:12px;
}
.search-bar input{
    width: auto;
    float: right;

}
.button-packed{
    background-color:yellow;
    color:black;
}
.button-picked{
    background-color:green;
    color:white;
}
`;

export default RestaurantOrders;