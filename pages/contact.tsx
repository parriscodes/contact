import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { validate } from "../utils/validate";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css'

// const faqs = [
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Portugal?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Japan?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Italy?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about English Muffins?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

const Contact: NextPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    const isError = Object.keys(errors).length;
    if (isError && isError > 0) {
      setErrors(errors);
      return;
    }
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setValues({ name: "", message: "", email: "" })
        toast.success("Your message was sent!");
      }
    } catch (error) {
      toast.error("An unexpected error occurred while sending, please try again. If this problem persists, please email us directly.");
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <Head>
        <title>LandSeaAir Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Announcement */}
      <Announcement />
      {/* Navbar Section */}
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* Header Section */}
        <div className="py-24 bg-white sm:py-32">
          <div className="max-w-md pl-4 pr-8 mx-auto sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl leading-normal text-center text-gray-500">
              Fill out the form below and one of our customer support
              representatives will get back to you shortly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.875 } }}
        viewport={{ once: true }}
        className="relative pb-32 bg-white"
        aria-labelledby="contact-heading"
      >
        <div className="absolute w-full bg-white h-1/2" aria-hidden="true" />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative px-6 py-10 overflow-hidden bg-gradient-to-b from-emerald-500 to-[#027d46] sm:px-10 xl:p-12">
                {/* Decorative angle backgrounds */}
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Contact information
                </h3>
                <p className="max-w-3xl mt-6 text-base text-emerald-50">
                  Reach out and receive a response in 24 hours or less.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-emerald-50">
                    <PhoneIcon
                      className="flex-shrink-0 w-6 h-6 text-emerald-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (910) 707-0904</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-emerald-50">
                    <EnvelopeIcon
                      className="flex-shrink-0 w-6 h-6 text-emerald-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">dispatch@landseaair-nc.com</span>
                  </dd>
                </dl>
              </div>
              <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-warm-gray-900">
                  Send us a message
                </h3>
                {/* form insert below */}
                <form
                  className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  onSubmit={handleSubmit}
                >
                  <Input
                    error={!!errors.name}
                    errorMessage={errors.name}
                    value={values.name}
                    onChange={onChange}
                    id="name"
                    name="name"
                    placeholder="Adam"
                    label="First name *"
                  />
                  
                  <Input
                    error={!!errors.email}
                    errorMessage={errors.email}
                    value={values.email}
                    onChange={onChange}
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    label="Email *"
                  />
                  
                 
                  <div className="sm:col-span-2">
                    <Textarea
                      error={!!errors.message}
                      errorMessage={errors.message}
                      value={values.message}
                      onChange={onChange}
                      id="message"
                      name="message"
                      placeholder="Please leave your message here."
                      label="Message *"
                    />
                  </div>

                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-[#027d46] hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#027d46] sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                  <ToastContainer position="bottom-center" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
