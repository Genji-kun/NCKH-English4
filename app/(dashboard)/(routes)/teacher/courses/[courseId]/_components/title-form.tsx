"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Pencil, X } from "lucide-react";
import { useState } from "react";

interface TitleFormProps {
    initialData: {
        title: string
    }
    courseId: string
}

const courseSchema = z.object({
    title: z.string().min(1, {
        message: "Tiêu đề không được bỏ trống"
    }),
    description: z.string().min(1, {
        message: "Nội dung không được bỏ trống"
    })

})

const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
    const [isEditing, setIsEditing] = useState(false);


    const form = useForm<z.infer<typeof courseSchema>>({
        resolver: zodResolver(courseSchema),
        defaultValues: initialData
    });

    const { isSubmitting, isValid } = form.formState;
    const router = useRouter();

    const toggleEdit = () => setIsEditing((current) => !current);

    const updateCourse = async (values: z.infer<typeof courseSchema>) => {
        try {
            const res = await axios.post("/api/courses", values);
            router.push(`/teacher/courses/${res.data.id}`);
            toast.success("Tạo khóa học thành công")
        } catch {
            toast.error("Đã có lỗi xảy ra, vui lòng thử lại");
        }

    }

    return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Tiêu đề
                <Button variant="ghost" onClick={toggleEdit}>
                    {isEditing && (
                        <>
                            <X></X>
                            Hủy
                        </>
                    )}
                    {!isEditing && (
                        <>
                            <Pencil className="h-4 w-4 mr-2" />
                            Chỉnh sửa
                        </>
                    )}

                </Button>
            </div>
        </div>
    );
};

export default TitleForm;