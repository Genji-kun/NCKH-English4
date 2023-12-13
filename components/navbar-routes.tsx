"use client";
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

const NavbarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");


    return (
        <div className="flex gap-x-4 ml-auto items-center">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                    <Button size="sm" variant="ghost">
                        <LogOut className="w-4 h-4 mr-2" />
                        Quay lại
                    </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm" variant="ghost">
                        Chế độ giảng viên
                    </Button>
                </Link>
            )}
            <UserButton />
        </div>
    );
};

export default NavbarRoutes;