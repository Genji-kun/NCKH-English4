"use client";

import { ThemeProvider } from '@/components/providers/theme-provider';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main>
                {children}
            </main>
        </ThemeProvider>
    );
};

export default Providers;