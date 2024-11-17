"use client";
import { CONTACT } from "@/constants";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";

// const Contact = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-20">
//       <h1 className="my-20 text-center text-4xl">
//         Contact
//         <span className="text-neutral-500"> Us</span>
//       </h1>
//       <div className="text-center tracking-tighter">
//         <p className=" my-4">{CONTACT.address}</p>
//         <p className=" my-4">{CONTACT.phoneNo}</p>
//         <p className=" my-4 underline">{CONTACT.email}</p>
//       </div>
//     </div>
//   );
// };

interface FormData {
  email: string;
  subject: string;
  message: string;
}

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: FormData) => {
    const formObject = {
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
      setIsSending(true);
      const response = await emailjs.send(
        serviceId,
        templateId,
        formObject,
        publicKey
      );
      if (response.status === 200) {
        toast.success("Email sent successfully");
        setIsSending(false);
      }
    } catch (error) {
      // console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again later.");
      setIsSending(false);
    }
  };

  return (
    <div className="py-16 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-around flex-col sm:flex-row mb-4">
        <div>
          <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/70">
            Get in <span className="text-orange-400">touch</span>
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="md:text-7xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
          >
            {CONTACT.email}
          </a>
        </div>
        {/* address and phone */}
        <div className="text-white/70 mt-12">
          <div>
            <p className=" text-lg mb-1">Phone No</p>
            <a
              href={CONTACT.phoneNo}
              className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
            >
              {CONTACT.phoneNo}
            </a>
          </div>

          <div>
            <p className=" text-lg mb-1">Address</p>
            <p>Plot - 17, Line - L, Room - 2, Road - 9</p>
            <p>Baiganwadi, Govandi, Mumbai</p>
            <p>Maharashtra, India</p>
            <p>Pin Code 400043</p>
          </div>
        </div>
      </div>
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[1200px] mx-auto flex flex-wrap justify-between"
      >
        {/* email and subject */}
        <div className="w-full md:w-[48%] space-y-6">
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Email <span className="text-red-500 text-sm font-medium">*</span>
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="your@example.com"
              className=" w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-medium pt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Subject{" "}
              <span className="text-red-500 text-sm font-medium">*</span>
            </label>
            <input
              {...register("subject")}
              type="text"
              id="subject"
              placeholder="what is this about??"
              className=" w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm font-medium pt-2">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>
        {/* message */}
        <div className="w-full md:w-[48%] mt-6 md:mt-0">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Message <span className="text-red-500 text-sm font-medium">*</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={8}
            placeholder="Your message here ..."
            className="w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          {errors.message && (
            <p className="text-red-500 text-sm font-medium pt-2">
              {errors.message.message}
            </p>
          )}
        </div>
        {/* button */}
        <div className="w-full md:w-[48%] mt-6 md:mt-4 md:text-right">
          <button
            type="submit"
            className="inline-block h-16 px-16 bg-transparent border border-gray-400 text-gray-400 font-medium rounded-lg hover:bg-white/70 hover:text-black hover:font-bold"
          >
            {isSending ? "Sending..." : "Submit →"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
