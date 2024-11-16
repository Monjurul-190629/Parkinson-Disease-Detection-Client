import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {



    //console.log(user ? user.role : null)

    const navLink = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/All_jobs">All Jobs</NavLink></li>

           

           
        </>
    );

  


    const handleLogout = () => {
        logOut()
            .then(() => console.log("Log out successful"))
            .catch((error) => console.log(error.message));
    };

    

    return (
        <div className="mx-10 py-1">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-20 mt-3 shadow border-white border-2 rounded-box w-52">
                            <div>
                                {navLink}
                            </div>
                        </ul>
                        <div className="hidden lg:flex justify-center items-center w-[200px]">
                            <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" className="w-16" alt="Logo" />
                            <p className="text-xl md:text-2xl font-bold font-serif">PD</p>
                        </div>
                    </div>
                    <div className="flex lg:hidden justify-center items-center w-[200px] ml-4">
                        <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" className="w-2/3" alt="Logo" />
                        <p className="text-xl md:text-2xl font-bold text-purple-800 font-serif">PD</p>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-5 py-2 items-center space-x-1">
                        {navLink}
                        
                    </ul>
                </div>

                <div className="navbar-end">
                </div>
            </div>
        </div>
    );
};

export default Navbar;
