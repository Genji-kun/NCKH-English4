import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// req: A form
export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const { title } = await req.json();

        // Check user
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const course = await db.course.create({
            data: {
                userId, title
            }
        });

        return NextResponse.json(course);
    } catch (ex) {
        // Output an error when something wrong while fetching
        console.log("[COURSES]", ex);
        return new NextResponse("Internal Error", { status: 500 });
    }
}