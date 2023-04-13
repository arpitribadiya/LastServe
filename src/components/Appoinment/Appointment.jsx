import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
import {Helmet} from"react-helmet"

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.res_id) {
      navigate("/home");
    }
  });

  return (
    <StyledAppointment>
            <Helmet>
        <meta charSet="utf-8"/>
        <title>Order Free Food</title>
        <description>Book an appointment to collect donated food from restaurant</description>
      </Helmet>
      <Sidebar activeRoute="home" />
      <StyledAppointmentCardWrapper>
        <AppointmentCard data={location.state.data} />
      </StyledAppointmentCardWrapper>
    </StyledAppointment>
  );
};

const StyledAppointment = styled.div``;

const StyledAppointmentCardWrapper = styled.div`
  margin-left: 30%;
  width: 50%;
  padding: 5rem;
`;

export default Appointment;
