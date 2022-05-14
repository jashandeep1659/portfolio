import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const formSubmitter = (data) => {
        data["detail"] = "nothing";
        console.log(data);
        axios
            .post("http://127.0.0.1:8000/order/", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <section id="contact">
            <Head>
                <title>Contact | Deep Developers</title>
                <meta name="description" content="freelancer web developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="header ">
                <h1>Contact Me</h1>
            </div>
            <form
                onSubmit={handleSubmit(formSubmitter)}
                className="form w-3/4 m-auto mt-6"
            >
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="flex flex-col ">
                        <label htmlFor="name">Name:</label>
                        <input
                            name="name"
                            className="border rounded py-2 px-3"
                            placeholder="john"
                            type="text"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <p className="text-red-500 font-medium">
                                Name is required
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col ">
                        <label htmlFor="email">Email:</label>
                        <input
                            name="email"
                            className="border rounded py-2 px-3"
                            placeholder="abc@xyx.com"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-500 font-medium">
                                Email is required
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email">Budget:</label>
                        <input
                            name="budget"
                            className="border rounded py-2 px-3"
                            placeholder="$45"
                            type="number"
                            {...register("budget", { required: true })}
                        />
                        {errors.budget && (
                            <p className="text-red-500 font-medium">
                                Budget is required
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email">Job Title:</label>
                        <input
                            name="title"
                            className="border rounded py-2 px-3"
                            placeholder="Landing Page"
                            type="text"
                            {...register("title", { required: true })}
                        />
                        {errors.budget && (
                            <p className="text-red-500 font-medium">
                                Title is required
                            </p>
                        )}
                    </div>
                </div>
                <div className="my-3">
                    <label className="block">
                        Detail:{" "}
                        <span className="text-[12px] text-stone-500">
                            (optional)
                        </span>
                    </label>
                    <textarea
                        className="w-full focus:outline-none"
                        rows="5"
                        name="detail"
                    ></textarea>
                </div>
                <button className="dark-button mt-3">Submit</button>
            </form>
            <section id="api">
                <div className="main">
                    <h1>Currently our server is down</h1>
                    <p className="text-[13px] text-center">
                        So you can mail us or message on linkedin.
                    </p>
                    <div className="flex justify-center mt-8 w-full">
                        <Link href="mailto: jashandeep1659@gmail.com">
                            <a target="_blank">
                                <img
                                    className="h-8"
                                    src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg"
                                />
                            </a>
                        </Link>
                        <p className="mx-8">or</p>
                        <Link href="https://www.linkedin.com/in/jashandeep-singh-b35b04214/">
                            <a target="_blank">
                                <img
                                    className="h-8"
                                    src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;
