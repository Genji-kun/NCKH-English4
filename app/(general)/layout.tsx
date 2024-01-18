import Navbar from '@/components/ui/navbar';
import React from 'react';

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            {children}
        </div>
    );
};

export default GeneralLayout;