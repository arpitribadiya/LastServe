import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.state?.res_id);
    if (!location.state?.res_id) {
      navigate("/home");
    }
  });

  return (
    <StyledAppointment>
      <Sidebar activeRoute="home" />
      <StyledAppointmentCardWrapper>
        <AppointmentCard />
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
