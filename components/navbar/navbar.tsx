import React from 'react';
import MobileSidebar from './mobile-sidebar';
import NavbarRoutes from './navbar-routes';
import NavbarLogo from './navbar-logo';

const Navbar = () => {
    return (
        <div className="p-4 border-b h-[80px] shadow-sm fixed inset-x-0 bg-white">
            <div className="flex h-full items-center">
                <NavbarLogo />
                <MobileSidebar />
                <NavbarRoutes />
            </div>
        </div>
    );
};

export default Navbar;