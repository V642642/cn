import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function OTPVerification({ setStep, step }) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onOTPSubmit = (data) => {
    let  delreqid  = localStorage.getItem('delreqid') ? localStorage.getItem('delreqid') : ''


    const postData = {
      delreqid : delreqid,
      providedotp : data.providedotp
    }
    setStep(3);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/manage-web-service/v1/verify-otp/${delreqid}`,
        postData
      )
      .then((res) => {
        console.log(res);
        if (res?.data?.status) {
          // setOpen(true);
          // reset()
        }
      });
  };

  return (
    <form 
      onSubmit={handleSubmit(onOTPSubmit)}
      className={`${
        step === 2 ? "content-w show-w " : "content-w"
      } flex font-primary flex-col w-full  items-center justify-center relative gap-3`}
    >
      <p className="text-[22px] select-none text-center w-full  font-medium">
        Please enter the One-Time Password to verify your account
      </p>
      <p className="text-[16px] select-none text-center text-gray-600 w-full font-semibold">
        A One-Time Password has been sent to your email
      </p>

      <Stack
        spacing={2}
        direction="column"
        width="100"
        className="w-full sm:w-10/12"
      >
        <Controller
          name={"providedotp"}
          control={control}
          rules={{required : true}}
          render={({ field: { onChange, value } }) => (
            <MuiOtpInput
              error={!!errors["providedotp"]}
              helperText={
                errors["providedotp"] ? errors["providedotp"].message : ""
              }
              length={5}
              onChange={onChange}
              value={value}
              type="number"
              
            />
          )}
        />     
      </Stack>
      <Button
          variant="contained"
          className="bg-green-600 hover:bg-green-600 text-white"
          type="submit"
        //   onClick={onOTPSubmit}
        >
          validate
        </Button>
      <p className="w-full text-center sm:w-10/12">Resend One-Time Password</p>
    </form>
  );
}
