//created by Lav Patel (B00910579)
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./RestaurantVolunteers.css";

function RestaurantVolunteers() {
  const email=window.localStorage.getItem("email");
  const[VolunteersData,setVolunteers]=useState([]);
  const[volunteerPending,setVolunteerPending]=useState(true);

  useEffect(() => {
    const fetchVolunteersData=async ()=>{
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/restaurant/volunteers`, {headers:{ email: email}});
      if(result.status===200){
        setVolunteers(result.data)
        setVolunteerPending(false)
      }
    }
    fetchVolunteersData();
	},[]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.volunteername,
      sortable: true,
    },
    {
      name: "Availability",
      selector: (row) => row.availibility,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phonenumber,
    },
  ];

  return (
    <StyledDiv>
      <DashboardHeader heading="Volunteers" />
      <div class="dashboard-content">
        <DataTable columns={columns} data={VolunteersData} progressPending={volunteerPending} pagination />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 20%;
`;

export default RestaurantVolunteers;
