import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

function AdminOverview() {
  const [overview,setOverview]=useState({})
  const email=window.localStorage.getItem("email");
  useEffect(() => {
    const getRestaurantOverview=async () => {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/overview`, {headers:{ email: email}});
    if(result.status===200){
      setOverview(result.data)
    }
  }
  getRestaurantOverview();

	},{});
  return (
    <StyledDiv>
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <div class="dashboard">
        <DashboardHeader heading="Overview" />
        <div class="dashboard-content">
          <Container>
            <Row>
            <Col md={3} sm={6} xs={12} x>
                {" "}
                <div className="overview-dashboard-tile">
                  <h2 className="heading">Posts</h2>
                  <h2 className="number">{overview.posts}</h2>
                </div>
              </Col>
              <Col md={3} sm={6} xs={12} x>
                {" "}
                <div className="overview-dashboard-tile">
                  <h2 className="heading">Active Posts</h2>
                  <h2 className="number">{overview.activePostCount}</h2>
                </div>
              </Col>
              <Col md={3} sm={6} xs={12}>
                {" "}
                <div className="overview-dashboard-tile">
                  <h2 className="heading">Restaurant Applications</h2>
                  <h2 className="number">{overview.pendingRestaurants}</h2>
                </div>
              </Col>
              <Col md={3} sm={6} xs={12} x>
                {" "}
                <div className="overview-dashboard-tile">
                  <h2 className="heading">Enrolled Restaurants</h2>
                  <h2 className="number">{overview.enrolledRestaurants}</h2>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row>
            <Col md={3} sm={6} xs={12} x>
                {" "}
                <div className="overview-dashboard-tile">
                  <h2 className="heading">Users</h2>
                  <h2 className="number">{overview.enrolledRestaurants}</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 20%;
  .overview-container {
    position: absolute;
    left: 20%;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 80%;
  }
  .overview-top {
    display: flex;
    position: absolute;
    height: 41px;
    left: 0px;
    right: 33px;
    top: 30px;
  }

  .overview-top h4 {
    margin: auto;
  }

  .overview-content {
    position: absolute;
    height: 134px;
    left: 0;
    padding-left: 12px;
    padding-right: 12px;
    right: 0px;
    top: 128px;
  }
  .overview-dashboard-tile {
    width: 100%;
    height: 134px;
    background-color: #dedddd;
    border: 1px solid #dfe0eb;
    border-radius: 8px;
  }

  .overview-dashboard-tile .heading {
    position: relative;
    top: 24px;
    text-align: center;
  }
  .overview-dashboard-tile .number {
    position: relative;
    top: 24px;
    text-align: center;
  }
  .overview-icons {
    float: right;
  }
`;

export default AdminOverview;
