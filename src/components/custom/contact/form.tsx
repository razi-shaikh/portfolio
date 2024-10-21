// import React from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { CONTACT } from "@/constants";

// // interface FormData {
// //   email: string;
// //   subject: string;
// //   message: string;
// // }

// const Contact = () => {
//   // Validation schema
//   const schema = yup.object().shape({
//     email: yup.string().email("Invalid email").required("Email is required"),
//     subject: yup.string().required("Subject is required"),
//     message: yup.string().required("Message is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <div className="py-16 max-w-[1200px] mx-auto">
//       <div className="flex items-center justify-around flex-col md:flex-row mb-4">
//         {/* Email information */}
//         <div>
//           <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/70">
//             Get in <span className="text-orange-400">touch</span>
//           </h2>
//           <a
//             href={`mailto:${CONTACT.email}`}
//             className="md:text-7xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
//           >
//             {CONTACT.email}
//           </a>
//         </div>
//         {/* Address and phone information */}
//         <div className="text-white/70 mt-12">
//           <div>
//             <p className=" text-lg mb-1">Phone No</p>
//             <a
//               href={CONTACT.phoneNo}
//               className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
//             >
//               {CONTACT.phoneNo}
//             </a>
//           </div>
//           <div>
//             <p>Address</p>
//             <p>Plot - 17, Line - L, Room - 2, Road - 9</p>
//             <p>Baiganwadi, Govandi, Mumbai</p>
//             <p>Maharashtra, India</p>
//             <p>Pin Code 400043</p>
//           </div>
//         </div>
//       </div>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="max-w-[1200px] mx-auto flex flex-wrap justify-between"
//       >
//         {/* Email and Subject fields */}
//         <div className="w-full md:w-[48%] space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-400 mb-2"
//             >
//               Email <span className="text-red-500 text-sm font-medium">*</span>
//             </label>
//             <input
//               type="text"
//               id="email"
//               placeholder="your@example.com"
//               className=" w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
//               {...register("email")}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm font-medium pt-2">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label
//               htmlFor="subject"
//               className="block text-sm font-medium text-gray-400 mb-2"
//             >
//               Subject{" "}
//               <span className="text-red-500 text-sm font-medium">*</span>
//             </label>
//             <input
//               type="text"
//               id="subject"
//               placeholder="What is this about?"
//               className=" w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
//               {...register("subject")}
//             />
//             {errors.subject && (
//               <p className="text-red-500 text-sm font-medium pt-2">
//                 {errors.subject.message}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Message field */}
//         <div className="w-full md:w-[48%] mt-6 md:mt-0">
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-gray-400 mb-2"
//           >
//             Message <span className="text-red-500 text-sm font-medium">*</span>
//           </label>
//           <textarea
//             id="message"
//             rows={8}
//             placeholder="Your message here..."
//             className="w-full px-4 py-3 bg-transparent border  border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
//             {...register("message")}
//           />
//           {errors.message && (
//             <p className="text-red-500 text-sm font-medium pt-2">
//               {errors.message.message}
//             </p>
//           )}
//         </div>

//         {/* Submit button */}
//         <div className="w-full md:w-[48%] mt-6 md:mt-4 md:text-right">
//           <button
//             type="submit"
//             className="inline-block h-16 px-16 bg-transparent border border-gray-400 text-gray-400 font-medium rounded-lg hover:bg-white/70 hover:text-black hover:font-bold"
//           >
//             Submit →
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
