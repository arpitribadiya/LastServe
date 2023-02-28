import React from 'react'
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './RestaurantVolunteers.css';

function RestaurantVolunteers() {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Availability',
            selector: row => row.availability,
            sortable: true,
        },
        {
            name: 'Phone Number',
            selector: row => row.phoneNumber,
        },
    ];
    
    const data = [
        {
            id: 1,
            name: 'jason smith',
            availability: 'Monday to friday 10 am to 10 pm',
            phoneNumber:'012456789',

        },
        {
            id: 2,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 3,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 4,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 5,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 6,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 7,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 8,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 9,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 10,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 11,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 12,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 13,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 14,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 15,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 16,
            name: 'Bradd Pitt',
            availability: 'saturday to sunday 10 am to 10 pm',
            phoneNumber:'012456789',
        },
        {
            id: 17,
            name: 'Jason Stathom',
            availability: 'all day 10 am to 10 pm',
            phoneNumber:'012456789',
        },

    ];
    return (
        <StyledDiv>
    <DashboardHeader heading="Volunteers"/>
    <div class="dashboard-content">
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 20%;
`;

export default RestaurantVolunteers;