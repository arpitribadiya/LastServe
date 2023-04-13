import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ActivePosts() {
  const [activePosts, setActivePosts] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = async (e) => {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/posts/getPostById/` + e
    );
    if (result.status === 200) {
      navigate("/updatePost", { state: result.data.post });
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
    navigate("/createPost");
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
          onClick={(e) => handleButtonClick(row._id)}
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
      <button onClick={handleClick}>Create Post</button>
      <div class="dashboard-content">
        <div class="table-heading">
          <h1>Active Posts</h1>
        </div>
        <DataTable columns={activePostsColumns} data={activePosts} pagination />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  min-height: 100vh;
  .dashboard-content {
    position: relative;
    height: 400px;
    left: 0;
    padding-left: 12px;
    padding-right: 12px;
    right: 0px;
    top: 50px;
  }
  .koyePV {
    font-size: 22px;
  }
  .kMJmMa {
    font-size: 20px;
  }
  .table-heading {
    display: flex;
    justify-content: space-between;
  }
  .table-heading h3 {
    margin: 12px;
    width: 50%;
  }
  .search-bar {
    width: 30%;
    float: right;
    margin: 12px;
  }
  .search-bar input {
    width: auto;
    float: right;
  }
  .button-packed {
    background-color: yellow;
    color: black;
  }
  .button-picked {
    background-color: green;
    color: white;
  }
`;

export default ActivePosts;
