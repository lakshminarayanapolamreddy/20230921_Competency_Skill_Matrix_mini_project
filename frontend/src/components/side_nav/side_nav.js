import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import { json, useNavigate } from 'react-router-dom';
import './side_nav.css';
import { Link } from 'react-router-dom';
// import { FaSignOutAlt } from 'react-icons/fa';

function LearningAndDev() {
  return (
    <div>
      <div className="container">
        <div className="sidenav">
          <div className="logo">
          </div>
          <div className="Dashboard">
            {/* <Link to='#' className='linkstonavigate'></Link> */}
            <br /><br />
            <Link to='/Profile' className='linkstonavigate'>Profile</Link>
            <Link to='#' className='linkstonavigate'>Dashboard</Link>
            <Link to='#' className='linkstonavigate'>Timesheet</Link>
            <Link to='#' className='linkstonavigate'>Projects</Link>
            <Link to='#' className='linkstonavigate'>Leave</Link>
            <Link to='#' className='linkstonavigate'>Work From Home</Link>
            <Link to="#" className='linkstonavigate'>Approvals</Link>
            <Link to='#' className='linkstonavigate'>Survey</Link>
            <Link to='#' className='linkstonavigate'>Service Desk</Link>
            <Link to="#" className='linkstonavigate'>Forms</Link>
            <Link to="#" className='linkstonavigate'>Travel</Link>
            <Link to='#' className='linkstonavigate'>Expenses</Link>
            <Link to='#' className='linkstonavigate'>Settings</Link>
            <Link to='#' className='linkstonavigate'>Control Panel</Link>
            <Link to='#' className='linkstonavigate'>Resourcing</Link>
            <Link to='#' className='linkstonavigate'>Access Control</Link>
            <Link to='/adminTrainingTable' className='linkstonavigate'>L&D</Link>

            <div className='signedout'>
              <p>Logout</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LearningAndDev;

