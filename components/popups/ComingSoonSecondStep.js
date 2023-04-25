import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "zod";
import { useFormData } from "../../context";

export default function ComingSoonSecondStep({ setStep, step }) {
  const { setSubscribeValues } = useFormData();
  const [option, setOption] = useState([]);

  const registerSchema = object({
    email: string().nonempty("Email is required").email("Email is invalid"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setStep(2);
    setSubscribeValues(data);
  };

  useEffect(() => {
    const get = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/all`)
        .then((r) => {
          setOption(r.data);
        })
        .catch((e) => console.log(e));
    };

    get();
  }, []);

  const { palette } = createTheme();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00a63f",
        contrastText: "white",
      },
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${step === 2 ? "content-w show-w  " : "content-w"}
    flex  font-primary w-full items-start flex-col  justify-center gap-3`}
    >
      <p className="text-[30px] w-full text-left">
        One step ahead 
      </p>
      <Controller
        name={"name"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            label="Enter your Name"
            variant="outlined"
            className="w-full"
            onChange={onChange}
            value={value}
          />
        )}
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={option.map((data) => {
          return {
            label: `${data?.flag} ${
              data?.name?.common ? data?.name?.common : data?.name?.official
            }`,
            value: `${
              data?.name?.common ? data?.name?.common : data?.name?.official
            }`,
          };
        })}
        className="w-full"
        renderInput={(params) => <TextField {...params} label="Location" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo-2"
        options={[
          { label: "An Employer", value: "Employer" },
          { label: "A Recruitment Firm", value: "Recuritment" },
          {
            label: "An Independent Recruiter",
            value: "Independent Recuritement",
          },
        ]}
        className="w-full"
        renderInput={(params) => <TextField {...params} label="I'm" />}
      />

      <div className="w-full flex items-center justify-end gap-2">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            className="bg-green-600 h-[53px] whitespace-nowrap  px-5 hover:bg-green-600 text-white"
            type="submit"
            // color="success"
            style={{ BackgroundColor: "#00a63f" }}
          >
            Submit
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            className="bg-green-600 h-[53px] whitespace-nowrap  px-5 hover:bg-green-600 text-white"
            type="submit"
            // color="success"
            style={{ BackgroundColor: "#00a63f" }}
          >
            Skip
          </Button>
        </ThemeProvider>
      </div>
    </form>
  );
}
