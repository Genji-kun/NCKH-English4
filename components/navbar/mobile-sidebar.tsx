import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Sidebar } from 'lucide-react';

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition flex items-center justify-center">
                <Sidebar />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;