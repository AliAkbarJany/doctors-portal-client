import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    // 75(8)....
    const [user] =useAuthState(auth)
    console.log(user)
    const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold text-purple-500'>Welcome To my DASHBOARD</h2>
                <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    {admin && <li><Link to='/dashboard/users'>ALL Users</Link></li>}
                    {/* <li><Link to='/dashboard/users'>ALL Users</Link></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;