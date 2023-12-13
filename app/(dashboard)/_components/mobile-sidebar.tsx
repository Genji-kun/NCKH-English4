import { Menu } from 'lucide-react';
import React from 'react';
import {
    Sheet, SheetTrigger, SheetContent
} from "@/components/ui/sheet";
import Sidebar from './sidebar';

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition flex items-center justify-center">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;