import React from 'react';
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        {/* Input Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="mt-1 block bg-white w-full px-3 py-2 border rounded-md outline-none"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

         {/* Input Field */}
         <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 block bg-white w-full px-3 py-2 border rounded-md outline-none"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

         {/* Input Field */}
         <div className="mb-4">
          <label className="block text-sm font-medium">Message</label>
          <input
            type="text"
            placeholder="Enter your message"
            className="mt-1 block bg-white w-full px-3 py-2 border rounded-md outline-none"
            {...register("message", { required: true })}
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
