import React, { Component } from 'react'
import './DashboardHeader.css';
import {
    AiOutlineUser,
  } from "react-icons/ai";

class DashboardHeader extends Component {
    render(){
  return (
    <>


      <div className='DashboardHeader'>
            
        <div className='DashboardHeader-heading'>
        <h1>{this.props.heading}</h1>
        </div>
          
            <div className='DashboardHeader-heading DashboardHeader-icons '>
            <AiOutlineUser size={20}/>
            </div>

       
    </div>


    </>
  )
    }
}

export default DashboardHeader