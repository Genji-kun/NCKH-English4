import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import "./navbar-style.css";

const NavbarRoutes = () => {
    return (
        <div className="nav-routes">
            <Link href="">
                <Button variant="ghost">Home</Button>
            </Link>
            <Link href="">
                <Button variant="ghost">Courses</Button>
            </Link>
            <Link href="">
                <Button variant="ghost">Forum</Button>
            </Link>
            <Link href="">
                <Button >Login</Button>
            </Link>
        </div>
    );
};

export default NavbarRoutes;