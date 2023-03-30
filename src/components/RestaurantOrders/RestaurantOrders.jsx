import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import DataTable from 'react-data-table-component';
import axios from 'axios';

function RestaurantOrders() {
    const [activeOrders, setActiveOrders] = useState([]);
    const [pastOrders, setPastOrders] = useState([]);
    const [pastOrdersPending, setPastOrdersPending] = useState(true);
    const [activeOrdersPending, setActiveOrdersPending] = useState(true);
    const[updateOrders,setUpdateOrders]=useState(false)
    const email=window.localStorage.getItem("email");

	useEffect(() => {
    const getActiveOrders=async () => {
    const result = await axios.get('http://localhost:5000/restaurantorders/activeorders', {headers:{ email: email}});
    if(result.status===200){
      setActiveOrders(result.data)
      setActiveOrdersPending(false)
      setUpdateOrders(false)
    }
  }
  getActiveOrders();

	},[updateOrders]);

  useEffect(() => {
    const getPastOrders=async () => {
      const result = await axios.get('http://localhost:5000/restaurantorders/pastorders', {headers:{ email: email}});
      if(result.status===200){
        setPastOrders(result.data)
        setPastOrdersPending(false)
        setUpdateOrders(false)
      }

    }
    getPastOrders();

	}, [updateOrders]);

	const handleButtonClickPacked = (e) => {
		
        let orderNumber=e.currentTarget.parentNode.parentNode.firstChild.firstChild.innerText;
        let link='http://localhost:5000/restaurantorders/changeorderstatus/'+orderNumber;
        const changeStatus =async () => {
        const result = await axios.post(link,{status:"packed"}, {headers:{ email: email}});
        let error=true
        let message=""
        console.log(result.status)
        if (result.status!=204){
          message="status for the order "+orderNumber+" could not be set to packed, please try again in some time" 
        }
        else{
          message="status for the order "+orderNumber+" changed to packed" 
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
	const handleButtonClickPicked = (e) => {
		
    let orderNumber=e.currentTarget.parentNode.parentNode.firstChild.firstChild.innerText;
    let link='http://localhost:5000/restaurantorders/changeorderstatus/'+orderNumber;
    const changeStatus =async () => {
    const result = await axios.post(link,{status:"picked"}, {headers:{ email: email}});
    let error=true
    let message=""
    if (result.status!=204){
      message="status for the order "+orderNumber+" could not be set to picked, please try again in some time" 
    }
    else{
      message="status for the order "+orderNumber+" changed to picked" 
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
  changeStatus();
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
        { cell: () => <button class="button-packed" onClick={handleButtonClickPacked}>Packed</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },
        { cell: () => <button class="button-picked" onClick={handleButtonClickPicked}>Picked</button>,
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
     const activeOrdesData=[

      {
        id: 1,
        orderNumber: 'adfe7454-29ff-4cbb-b6d0-e82154fa3ed3',
        name: 'Bradd Pitt',
        items:'Donuts:2',
        pickupTime:'8 pm',
        status:'packed',	
           
      },
      {
        id: 2,
        orderNumber: '8720e8c6-0f24-4b71-8ca8-646f20438308',
        name: 'Tom',
        items:'wraps:1',
        pickupTime:'8:10 pm',
        status:'pending',
        changeStatus:''
      },
      {
        id: 3,
        orderNumber: 'adfe7454-29ff-4cbb-b6d0-e82154fa3ed3',
        name: 'Bradd Pitt',
        items:'Donuts:2',
        pickupTime:'8 pm',
        status:'packed',
        changeStatus:''
      },
      {
        id: 4,
        orderNumber: '8720e8c6-0f24-4b71-8ca8-646f20438308',
        name: 'Tom',
        items:'wraps:1',
        pickupTime:'8:10 pm',
        status:'pending',
        changeStatus:''
      },
      {
        id: 5,
        orderNumber: 'adfe7454-29ff-4cbb-b6d0-e82154fa3ed3',
        name: 'Bradd Pitt',
        items:'Donuts:2',
        pickupTime:'8 pm',
        status:'packed',
        changeStatus:''
      },
      {
        id: 6,
        orderNumber: '8720e8c6-0f24-4b71-8ca8-646f20438308',
        name: 'Tom',
        items:'wraps:1',
        pickupTime:'8:10 pm',
        status:'pending',
        changeStatus:''
      }
    ]
    return (
        <StyledDiv>
            <ToastContainer/>
    <DashboardHeader heading="Orders"/>
    <div class="dashboard-content">
      <div class="table-heading">
        <h3>Active Orders</h3>
        <div class="search-bar">
          <input type="text" placeholder='search' name='activeOrderSearch' id="activeOrderSearch"></input>
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
          <input type="text" placeholder='search' name='pastOrderSearch' id="pastOrderSearch"></input>
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