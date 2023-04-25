import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
import { Helmet } from "react-helmet";
import ProfileNavbar from "../Landing/ProfileNavbar";
import MobileSidebar from "../Sidebar/MobileSidebar";

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileMenu, setProfileMenu] = useState(false);

  useEffect(() => {
    if (!location.state?.res_id) {
      navigate("/home");
    }
  });

  return (
    <StyledAppointment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order Free Food</title>
        <description>
          Book an appointment to collect donated food from restaurant
        </description>
      </Helmet>
      <Sidebar activeRoute="home" />
      <ProfileNavbar setProfileMenu={setProfileMenu} />
      {profileMenu ? <MobileSidebar setProfileMenu={setProfileMenu} /> : null}
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
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default Appointment;
