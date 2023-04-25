import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import RestaurantSideBar from "../RestaurantSideBar/RestaurantSideBar";

function RestaurantPosts() {
    const [activePosts, setActivePosts] = useState([]);
    const navigate = useNavigate();
    const [pastPosts, setPastPosts] = useState([]);

    const handleButtonViewClick = async (e) => {

        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/getPostById/` + e);
        if(result.status===200){
            navigate('/restaurantSidebar', { state: {result:result.data.post,page:"viewPost"}});
      }
    };

    useEffect(() => {
        const fetchPastPostData=async ()=>{
            const email=window.localStorage.getItem("email");


              const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/getPastPosts/` + email);
              if(result.status===200){
                setPastPosts(result.data.posts);
            }
        }
        fetchPastPostData();
       
        },[]);

    const pastPostsColumns = [
        {
            name: 'Item Name',
            selector: row => row.Item_name,
            sortable: true,
        },
        {
            name: 'Item Quantity',
            selector: row => row.Item_Quantity,
            sortable: true,
        },
        {
            name: 'Food Type',
            selector: row => row.Food_Type,
        },
        { cell: (row) => <button class="button-picked" onClick={e => handleButtonViewClick(row._id)}>View</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },
    ];
  
    const handleButtonUpdateClick = async (e) => {

      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/posts/getPostById/` + e
      );
      if (result.status === 200) {
        navigate("/restaurantSidebar", { state: {result:result.data.post,page:"updatePost"} });
      }
    };
  
    useEffect(() => {
      const fetchActivePostData = async () => {
        const email = window.localStorage.getItem("email");

        const result = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/posts/getActivePosts/` + email
        );
        if (result.status === 200) {
          setActivePosts(result.data.posts);
        }
      };
      fetchActivePostData();
    }, []);
  
    const handleClick = () => {
        navigate("/restaurantSidebar", { state: { page: 'createPost' } });

    };
  
    const activePostsColumns = [
      {
        name: "Item Name",
        selector: (row) => row.Item_name,
        sortable: true,
      },
      {
        name: "Item Quantity",
        selector: (row) => row.Item_Quantity,
        sortable: true,
      },
      {
        name: "Food Type",
        selector: (row) => row.Food_Type,
      },
      {
        cell: (row) => (
          <button
            class="button-picked"
            onClick={(e) => handleButtonUpdateClick(row._id)}
          >
            Edit
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ];
  
    return (
      <StyledDiv>
    <DashboardHeader heading="Posts"/>
        <div class="dashboard-content">
          <div class="table-heading">
            <h3>Active Posts</h3>
          </div>
          <div class="search-bar">
          <button onClick={handleClick}>Create Post</button>
        </div>
          <DataTable columns={activePostsColumns} data={activePosts} pagination />
        
          <div class="table-heading">
        <h3>Past Orders</h3>
      </div>
        <DataTable
            columns={pastPostsColumns}
            data={pastPosts}
            pagination
        />
        </div>

      </StyledDiv>
    );
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
.search-bar button{
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

export default RestaurantPosts;