"use client";
import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { cn } from "@/utils/cn";
import { NextPage } from "next";

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

const Home: NextPage = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
        Registration Form
      </h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <form className="my-8" onSubmit={handleSubmit}>
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 my-4">
          Dojo Details
        </h2>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="org-name">Name of the Organisation</Label>
          <Input
            id="org-name"
            placeholder="Enter your Organisation's name"
            type="string"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="pr-style">Present Style</Label>
          <Input
            id="pr-style"
            placeholder="Enter your Present Style"
            type="string"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">No. of Dojo Operating</Label>
          <Input
            id="phone"
            placeholder="Enter your No. of Dojo Operating"
            type="number"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="num-students">No. of Students</Label>
          <Input
            id="num-students"
            placeholder="Enter your No. of Students"
            type="number"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="bb">No. of Black Belts</Label>
          <Input
            id="bb"
            placeholder="Enter your No. of Black Belts"
            type="number"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="police-record">Do you have a Police record?</Label>
          <div>
            <label className="inline-flex items-center mx-2">
              <input
                type="radio"
                name="record"
                value="yes"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="record"
                value="no"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="police-record">
            Is your organisation registered?
          </Label>
          <div>
            <label className="inline-flex items-center mx-2">
              <input
                type="radio"
                name="registered"
                value="yes"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="registered"
                value="no"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
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
  );
};
