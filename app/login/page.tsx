"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/app/utils/cn";
import {
  IconBrandGoogle,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Login() {
  const initialvalues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { id, value } = e.target
    setFormValues({ ...formValues, [id]: value })
    validate(id, value)
  }
  const [errors, setErrors] = useState<{

    email?: string;
    password?: string;
  }>({});

  function validate(id: string, value: string) {
    let newErrors = { ...errors };
    switch (id) {

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = !value ? 'Email address cannot be blank' :!emailRegex.test(value) ? 'Invalid email address' : '';
        break;
      case 'password':
        newErrors.password = value.length == 0 ? 'Enter Password' : '';
        break;
      default:
        break;
    }
    setErrors(newErrors)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Object.entries(formValues).forEach(([field, value]) => {
      validate(field, value);
    });
  };
  return (<div className="bg-gradient-to-r from-slate-500 to-slate-800 flex justify-center overflow-auto items-center h-screen" >
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] my-10">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MealBridge
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        The bridge between abundance and need
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="abcd@kpm.com" type="email" value={formValues.email} onChange={handleChange} />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={formValues.password} onChange={handleChange} />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </LabelInputContainer>
        <button
          className="bg-gradient-to-r from-green-600 to-green-900 relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>
        </form>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex gap-4 justify-center items-center">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-fit text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            
          >
            <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Facebook
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-fit text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>

        <p className="text-center mt-4">Doesn't have an account yet? <Link href="./signup" className="text-blue-400">Sign Up</Link></p>
      
    </div>
  </div>
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
