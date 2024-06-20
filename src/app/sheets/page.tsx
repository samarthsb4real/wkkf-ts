"use client";

import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/utils/cn";

export default function SignupForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fathername, setFathername] = useState("");
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      firstname,
      lastname,
      fathername,
      dob,
      doj,
      city,
      state,
      country,
      address,
      occupation,
      phone,
      email,
    };

    const url = "https://api.sheety.co/37d435ff7b4f8327a9120c461364df86/wkkfStudentForm/student";
    const body = {
      student: form,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const content = await response.json();
      console.log(content);

      setFirstname("");
      setLastname("");
      setFathername("");
      setDob("");
      setDoj("");
      setCity("");
      setState("");
      setCountry("");
      setAddress("");
      setOccupation("");
      setPhone("");
      setEmail("");

      alert("Data successfully submitted!");

      console.log("Form submitted", form);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <main>
      <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
          Registration Form
        </h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-2">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 ">
              You are registering as a?
            </h2>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="registered-as"
                  value="Student"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Student</span>
              </label>

              <label className="inline-flex items-center mx-4">
                <input
                  type="radio"
                  name="registered-as"
                  value="Mentor"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Mentor</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="registered-as"
                  value="Dojo"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Dojo</span>
              </label>
            </div>
          </LabelInputContainer>

          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 my-4">
            Personal Details
          </h2>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="John"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Doe"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="fathername">Father&apos;s Name</Label>
            <Input
              id="fathername"
              placeholder="Enter your father's full name"
              type="text"
              value={fathername}
              onChange={(e) => setFathername(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="doj">Date of Joining</Label>
            <Input
              id="doj"
              type="date"
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Enter your city name"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              placeholder="Enter your state name"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="Enter your country name"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Enter your present address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              placeholder="Your Occupation"
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              required
              pattern="^\+?[0-9]{10,15}$"
              placeholder="Enter your phone number"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="example@yourmailservice.com"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </main>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
