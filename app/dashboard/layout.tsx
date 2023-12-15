import Navbar from "@/components/navbar/navbar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full">
            <Navbar />
            <main>{children}</main>
        </div >
    )
}