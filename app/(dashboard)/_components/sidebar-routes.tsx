"use client";
import { BarChart, Compass, Layout, List } from 'lucide-react';
import React from 'react';
import SidebarItem from './sidebar-item';
import { usePathname } from 'next/navigation';

const publicRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Tìm kiếm",
        href: "/search"
    }
];

const teacherRoutes = [
    {
        icon: List,
        label: "Khóa học",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Thống kê",
        href: "/teacher/analytics"
    }
];

const SidebarRoutes = () => {
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("/teacher");
    const routes = isTeacherPage ? teacherRoutes : publicRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => {
                return <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
            })}
        </div>
    );
};

export default SidebarRoutes;