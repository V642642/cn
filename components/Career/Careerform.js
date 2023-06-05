import axios from "axios";
import React, { useState } from "react";
import CareerPopUp from "../popups/CareerPopUp";

import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Controller, useForm } from "react-hook-form";
import { any, object, record, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import CareerMail from "../../mailer/career-mail";

export default function Careerform() {
  const [open, setOpen] = useState(false);
  //  let File = React.useRef()
  const registerSchema = object({
    firstname: string()
      .nonempty("Name is required")
      .max(32, "Name must be less than 100 characters"),
    lastname: string()
      .max(32, "Name must be less than 100 characters")
      .optional(),
    email: string().nonempty("Email is required").email("Email is invalid"),
    phone: string("Not a valid phone number")
      .min(10, "Phone number must be greater than 10 characters")
      .max(15, "Phone number must be less than 15 characters"),
    qualification: string(),
    plan: string(),
    resume: z.any().refine((files) => files?.length == 1, "Image is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
    control,
    watch,
    reset
  } = useForm({ mode: "onChange", resolver: zodResolver(registerSchema) });

  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("phone", data.phone);
    formData.append("plan", data.plan);
    formData.append("qualification", data.qualification);
    formData.append(
      "resume",
      data.resume.hasOwnProperty(0) ? data?.resume[0] : ""
    );
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/manage-web-service/v1/create-career`,
        formData
      )
      .then((res) => {
        console.log(res);
        if (res?.data?.status) {
          CareerMail(data.email ,data.firstname, data.lastname ? data.lastname : '')
          setOpen(true);
          reset()
        }
      });
  };

  console.log(watch("resume"));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-2 xl:w-5/12 lg:w-6/12 py-20 md:w-10/12 font-primary  flex items-center justify-center flex-col gap-2"
    >
      <CareerPopUp open={open} setOpen={setOpen} />
      <div className="w-full font-primary gap-4 md:w-11/12 flex items-start justify-center flex-col">
        <label className="w-full relative flex items-start justify-center flex-col">
          <Controller
            name={"firstname"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={!!errors["firstname"]}
                helperText={
                  errors["firstname"] ? errors["firstname"].message : ""
                }
                label="First Name"
                variant="outlined"
                onChange={onChange}
                value={value}
                className="w-full"
              />
            )}
          />
        </label>
        <label className="w-full flex items-start justify-center flex-col">
          <Controller
            name={"lastname"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={!!errors["lastname"]}
                helperText={
                  errors["lastname"] ? errors["lastname"].message : ""
                }
                label="Last Name"
                variant="outlined"
                onChange={onChange}
                value={value}
                className="w-full"
              />
            )}
          />
        </label>
        <label className="w-full relative flex items-start justify-center flex-col">
          <Controller
            name={"qualification"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={!!errors["qualification"]}
                helperText={
                  errors["qualification"] ? errors["qualification"].message : ""
                }
                label="What do you bring to the
                        table ?"
                variant="outlined"
                onChange={onChange}
                value={value}
                multiline
                rows={4}
                className="w-full"
              />
            )}
          />
        </label>
        <label className="w-full flex items-start justify-center flex-col">
          <Controller
            name={"plan"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={!!errors["plan"]}
                helperText={errors["plan"] ? errors["plan"].message : ""}
                label="How do you plan to
                        contribute ?"
                variant="outlined"
                onChange={onChange}
                value={value}
                multiline
                rows={4}
                className="w-full"
              />
            )}
          />
        </label>
        <label className="w-full relative flex items-start justify-center flex-col">
          <Controller
            name={"email"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={!!errors["email"]}
                helperText={errors["email"] ? errors["email"].message : ""}
                label="Email"
                variant="outlined"
                onChange={onChange}
                value={value}
                className="w-full"
              />
            )}
          />
        </label>
        <label className="w-full relative flex items-start justify-center flex-col">
          <Controller
            name={"phone"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={!!errors["phone"]}
                helperText={errors["phone"] ? errors["phone"].message : ""}
                label="Contact Number"
                variant="outlined"
                onChange={onChange}
                value={value}
                type="number"
                className="w-full"
              />
            )}
          />
        </label>
        <label className="w-full flex items-center justify-start flex-row">
          <Button
            error={!!errors["resume"]}
            variant="contained"
            className={` ${
              !!errors["resume"]
                ? "bg-red-500 hover:bg-red-500"
                : "bg-[#00a63f] hover:bg-[#00a63f]"
            } `}
            component="label"
          >
            Upload your resume
            <input hidden name="resume" {...register("resume")} type="file" />
          </Button>
          <p className="ml-3">
            {watch("resume")?.hasOwnProperty(0) ? watch("resume")[0]?.name : ""}
          </p>
        </label>
        <button
          variant="contained"
          className="bg-[#00a63f]  py-2 rounded-md hover:bg-[#00a63f] text-white w-full"
          // endIcon={<SendIcon />}
          type="submit"
          disabled={isSubmitting}
        >
         {isSubmitting ? "Submitting...." : <>Submit Application <SendIcon /></>} 
        </button>

        <p className="text-[10px] text-gray-700">
          By submitting your information, you agree to Hiringplug
          <a className="underline">Terms of Service</a> and
          <a className="underline">Privacy Policy</a>. You can opt out anytime.
        </p>
      </div>
    </form>
  );
}
