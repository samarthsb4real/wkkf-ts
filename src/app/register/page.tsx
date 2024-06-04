"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Register() {
  const [alertMessage, setAlertMessage] = useState(""); // Ensure useState() is imported

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      Name: formData.get("fName"),
      Surname: formData.get("lName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      place: formData.get("place"),
      image: formData.get("image"),
      pdf: formData.get("pdf"),
      option: formData.get("option"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        "service_5i403ay",
        "template_f3gnx9e",
        data,
        "2fsyDqjLtv-tMi7GP"
      );
      setAlertMessage("Email sent successfully");
      console.log("Email sent successfully");
    } catch (error) {
      setAlertMessage("Failed to send email");
      console.error("Email sending failed", error);
    }
  };

  return (
    <div className="container mx-auto p-12 w-1/2 min-h-screen align-center">
    <title>Register / Sign-in</title>
      <h1 className="text-4xl font-bold mb-12">Register / Sign-in</h1>

      <div className="container text-left mx-auto p-8 border w-auto rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div>
              <label
                htmlFor="fName"
                className="block text-sm font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="fName"
                name="fName"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="mb-4 ml-12 w-full ">
              <label
                htmlFor="lName"
                className="block text-sm font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lName"
                name="lName"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="mb-4 mr-12">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="flex">
          <div className="mb-4 w-1/3">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className=" mb-4 ml-24 w-full">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Place
            </label>
            <input
              type="tel"
              id="place"
              name="place"
              className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your City/Town name"
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="file-input w-full max-w-xs border-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pdf" className="block text-sm font-semibold mb-2">
              Upload PDF
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept=".pdf"
              className="file-input w-full max-w-xs border-white"
            />
          </div>
          <div className="mb-4">
            <span className="block text-sm font-semibold mb-2">
              Gender
            </span>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Address
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div className="mb-4">
          <div className="mb-4">
            {alertMessage && (
              <div
                role="alert"
                className={`alert ${
                  alertMessage.includes("success")
                    ? "alert-success"
                    : "alert-error"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                {alertMessage}
              </div>
            )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
