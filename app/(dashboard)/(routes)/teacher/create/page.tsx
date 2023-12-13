"use client";

import React from 'react';
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const courseSchema = z.object({
    title: z.string().min(1, {
        message: "Tiêu đề không được bỏ trống",
    }),
});


const CreateCoursePage = () => {
    const form = useForm<z.infer<typeof courseSchema>>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            title: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;
    const router = useRouter();

    const addCourse = async (values: z.infer<typeof courseSchema>) => {
        try {
            const res = await axios.post("/api/course", values);
            router.push(`/teacher/courses/${res.data.id}`);
        } catch {
            toast.error("Something went wrong!!");
        }

    }

    return (
        <div className="max-w-5xl mx-auto flex flex-col  md:justify-center h-full p-6">
            <h1 className="text-2xl font-bold">
                Đặt tên cho khóa học
            </h1>
            <p className="text-sm text-slate-600">Bạn có thể thay đổi thông tin khóa học sau khi tạo.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(addCourse)}
                    className="space-y-8 mt-8"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => {
                            return (<FormItem>
                                <FormLabel>
                                    Tiêu đề khóa học
                                </FormLabel>
                                <FormControl>
                                    <Input disabled={isSubmitting} {...field} />
                                </FormControl>
                                <FormDescription>
                                    Hãy nêu sơ lược về những gì bạn sẽ hướng dẫn trong khóa học này.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>)
                        }}
                    ></FormField>
                    <div className="flex items-center gap-x-2">
                        <Link href="/">
                            <Button type="button" variant="ghost">
                                Hủy
                            </Button>
                        </Link>
                        <Button type="submit" disabled={!isValid || isSubmitting}>
                            Tiếp tục
                        </Button>
                    </div>
                </form>
            </Form >
        </div >
    );
};

export default CreateCoursePage;


