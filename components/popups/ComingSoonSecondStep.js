import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "zod";
import { useFormData } from "../../context";
import ContactUsMail from "../../mailer/contact-us-mail";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


export default function ComingSoonSecondStep({ setStep, step, handleClose }) {
  const { subscribeData, setSubscribeValues } = useFormData();
  const [option, setOption] = useState([]);
  const [cities, setCitis] = useState([]);
  const registerSchema = object({
    email: string().nonempty("Email is required").email("Email is invalid"),
  });
  let router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    // resolver: zodResolver(registerSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [ipaddress, setIpaddress] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.db-ip.com/v2/free/self`)
      .then((res) => setIpaddress(res?.data.ipAddress));
  }, []);

  const onSubmit = (data) => {
    let postData = {
      fullname: data.name,
      phone: data.phone,
      companyname: data.companyname ? data.companyname : "NA",
      location: `${data.country.value} - ${data.city.value}`,
      type: data.type.value === "Other" ? data.typeother : data.type.value,
      email: subscribeData.email,
      source: "subscribe",
      ipaddress : ipaddress
    };
    setIsLoading(true);
    localStorage.setItem("demo", JSON.stringify(postData));
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/manage-web-service/v1/create-demo`,
        postData
      )
      .then((res) => {
        setIsLoading(false);
        if (res?.data?.status) {
          try {
            axios
              .post(
                `https://api-in.hiringplug.com/manage-mail-service/v1/add-wa-number`,
                {
                  wanumber: data.phone,
                  acctype: "EMPR",
                }
              )
              .then(() => {
                  axios.post(
                    `https://api-in.hiringplug.com/manage-mail-service/v1/send-custom-sms`,
                    {
                      mobile: [data.phone],
                      wamessage: "Hello",
                      subject: "SUBJECT",
                    }
                  );
                
              });
          } catch (err) {
            console.log(err);
          }

          ContactUsMail(postData.email, postData.fullname, "");
          router.push("/thankyou");
        } else {
          alert("Something went wrong");
        }
      });
  };
  // console.log(subscribeData , "subscribeData")
  useEffect(() => {
    if (watch("country")?.value) {
      axios
        .get(
          `https://countriesnow.space/api/v0.1/countries/cities/q?country=${
            watch("country")?.value ? watch("country")?.value : ""
          }`
        )
        .then((res) => {
          setCitis(res.data.data);
          console.log(res.data.data);
        });
    }
  }, [watch("country")]);

  useEffect(() => {
    const get = async () => {
      await axios
        .get(`https://countriesnow.space/api/v0.1/countries/flag/unicode`)
        .then((r) => {
          setOption(r.data.data);
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
      className={`${step === 2 ? "content-w show-w  p-8" : "content-w"}
    flex  font-primary w-full items-start flex-col  justify-center gap-3`}
    >
      <p className="text-[30px] w-full text-left">One step ahead</p>
      <Controller
        name={"name"}
        control={control}
        rules={{
          required: "required field",
        }}
        render={({ field: { onChange, value } }) => (
          <TextField
            error={!!errors["name"]}
            helperText={errors["name"] ? errors["name"].message : ""}
            label="Enter your fullname"
            variant="outlined"
            className="w-full"
            onChange={onChange}
            value={value}
          />
        )}
      />
      {/* <Controller
        name={"phone"}
        control={control}
        rules={{
          required: "required field",
        }}
        render={({ field: { onChange, value } }) => (
          <TextField
            type="number"
            error={!!errors["phone"]}
            helperText={errors["phone"] ? errors["phone"].message : ""}
            label="Phone no"
            variant="outlined"
            className="w-full"
            onChange={onChange}
            value={value}
          />
        )}
      /> */}

<Controller
              control={control}
              name="phone"
              rules={{ required: true }}
              render={({ field: { ref, ...field } }) => (
                <PhoneInput
                  {...field}
                  inputExtraProps={{
                    ref,
                    required: true,
                    autoFocus: true,
                  }}
                  enableSearch={true}
                  country={"ca"}
                  countryCodeEditable={false}
                  specialLabel={"Player Mobile Number"}
                  className="w-full"
                  inputStyle={{width : '100%' , height : "55px" , fontSize : "16px" , color : "gray" , paddingLeft : "60px"}}
                  containerStyle={{width : '100%' , height : "55px"}}
                  buttonStyle={{padding : '0 5px' , height : "55px"}}
                />
              )}
            />

      <Controller
        control={control}
        name="type"
        rules={{
          required: "required field",
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            id="combo-box-demo-2"
            options={[
              { label: "An Employer", value: "Employer" },
              { label: "A Recruitment Firm", value: "Recuritment" },
              {
                label: "An Independent Recruiter",
                value: "Independent Recuritement",
              },
              {
                label: "Business colloboration",
                value: "Business colloboration",
              },
              {
                label: "I am seeking employment",
                value: "I am seeking employment",
              },
              { label: "Other", value: "Other" },
            ]}
            getOptionLabel={(option) => option.label}
            value={value}
            onChange={(event, selectedOptions) => onChange(selectedOptions)}
            className="w-full"
            renderInput={(params) => (
              <TextField
                error={!!errors["type"]}
                helperText={errors["type"] ? errors["type"].message : ""}
                {...params}
                label="I'm"
              />
            )}
          />
        )}
      />

      {watch("type")?.value === "Other" ? (
        <Controller
          name={"typeother"}
          control={control}
          rules={{
            required: "required field",
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              error={!!errors["typeother"]}
              helperText={
                errors["typeother"] ? errors["typeother"].message : ""
              }
              label="Please specify"
              variant="outlined"
              className="w-full"
              onChange={onChange}
              value={value}
            />
          )}
        />
      ) : (
        ""
      )}

      <div className="w-full flex items-center justify-center gap-2">
        <Controller
          control={control}
          name="country"
          rules={{
            required: "required field",
          }}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              disablePortal
              options={option.map((data) => {
                return {
                  label: `${data.unicodeFlag} ${data.name}`,
                  value: data.name,
                };
              })}
              value={value}
              onChange={(event, item) => {
                onChange(item);
              }}
              className="w-full"
              renderInput={(params) => (
                <TextField
                  onChange={onChange}
                  error={!!errors["country"]}
                  helperText={
                    errors["country"] ? errors["country"].message : ""
                  }
                  {...params}
                  label="Country"
                />
              )}
            />
          )}
        />

        <Controller
          control={control}
          name="city"
          rules={{
            required: "required field",
          }}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              disablePortal
              options={cities.map((data) => {
                return {
                  label: data,
                  value: data,
                };
              })}
              value={value}
              onChange={(event, item) => {
                onChange(item);
              }}
              className="w-full"
              renderInput={(params) => (
                <TextField
                  onChange={onChange}
                  error={!!errors["city"]}
                  helperText={errors["city"] ? errors["city"].message : ""}
                  {...params}
                  label="City"
                />
              )}
            />
          )}
        />
      </div>
      <Controller
        name={"companyname"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            error={!!errors["companyname"]}
            helperText={
              errors["companyname"] ? errors["companyname"].message : ""
            }
            label=" Company / entity name"
            variant="outlined"
            className="w-full"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <div className="w-full flex items-center justify-between gap-2">
        <p
          onClick={handleClose}
          className="relative text-gray-600 transition duration-300 group-hover:text-white text-center ease cursor-pointer"
        >
          Skip
        </p>
          <button
            variant="contained"
            className="bg-green-600 h-[53px] whitespace-nowrap px-10 rounded-sm  md:px-20 hover:bg-green-600 text-white"
            type="submit"
          >
            {isLoading ? "Please wait..." : "Submit"}
          </button>
       
      </div>
    </form>
  );
}
