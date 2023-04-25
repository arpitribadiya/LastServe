//created by Lav Patel (B00910579)
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import DataTable from 'react-data-table-component';
import axios from 'axios';

function AdminPosts() {
    const [posts, setPosts] = useState([]);
    const [tempPosts, setTempPosts] = useState([]);
    

    const [postsPending, setPostsPending] = useState(true);
    const[updateApplications,setUpdateApplications]=useState(false)
    const email=window.localStorage.getItem("email");

	useEffect(() => {
    const getPosts=async () => {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/posts`, {headers:{ email: email}});
    if(result.status===200){
      setPosts(result.data)
      setTempPosts(result.data)
      setPostsPending(false)
      setUpdateApplications(false)
    }
  }
  getPosts();

	},[updateApplications]);


	const handleButtonClick = (e) => {
		
    let postId=e.currentTarget.parentNode.parentNode.firstChild.firstChild.innerText;
    let link=`${process.env.REACT_APP_BACKEND_URL}/admin/post/`+postId;
    const changeStatus =async () => {
    const result = await axios.delete(link, {headers:{ email: email}});
    let error=true
    let message=""
    if (result.status!=204){
      message="post with the id "+postId+" could not be deleted, please try again in some time" 
    }
    else{
      message="post with the id"+postId+" has been deleted;"
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
      setPostsPending(true)
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
            name: 'Post Id',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Item',
            selector: row => row.Item_name,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.Item_Quantity,
        },
        {
            name: 'Food Type',
            selector: row => row.Food_Type,
        },
        {
            name: 'Restaurant Name',
            selector: row => row.rest_id,
            sortable: true,
        },
        { cell: () => <button class="button-reject" onClick={e => handleButtonClick(e)}>Delete</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },

    ];
    const searchRestaurant=(e)=>{
      if (e.target.value!==""){
        let result=[]
        result=search(e.target.value,tempPosts)
        setPosts(result)
      }
      else{
          setPosts(tempPosts)
      }
    }
    const search=(value,searchData)=>{
      let result=[];
      searchData.map((row)=>{
        if (row.rest_id.toUpperCase().startsWith(value.toUpperCase()) || 
        row._id.toUpperCase().startsWith(value.toUpperCase())){
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
          <input type="text" placeholder='search by postId or email' name='restaurantSearch' onChange={e => searchRestaurant(e)} id="restaurantSearch"></input>
        </div>
      </div>
        <DataTable
            columns={restaurantApplicationColumns}
            data={posts}
            progressPending={postsPending}
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
    background-color:red;
    color:white;
    float:right
}
`;

export default AdminPosts;