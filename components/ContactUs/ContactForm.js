import axios from "axios";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import ContactUsMail from "../../mailer/contact-us-mail";
import { Button, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useFormData } from "../../context";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

export default function ContactForm() {
  const { subscribeData, setSubscribeValues } = useFormData();
  const [option, setOption] = React.useState([]);
  const [cities, setCitis] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  let router = useRouter();
  const [ipaddress, setIpaddress] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`https://api.db-ip.com/v2/free/self`)
      .then((res) => setIpaddress(res?.data.ipAddress));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({ mode: "onChange" });

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  const onSubmit = (data) => {
    let postData = {
      fullname: data.name,
      phone: `+${data.phone}`,
      companyname: data.companyname,
      location: `${data.country.value} - ${data.city.value}`,
      type: data.type.value === "Other" ? data.typeother : data.type.value,
      email: data.email,
      source: "contact-us",
      enquiry: data.enquiry,
      ipaddress: ipaddress,
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
                    wamessage: "Hello from Hiringplug 😇",
                    subject: "Thanks for contacting us",
                  }
                );
              });
          } catch (err) {
            console.log(err);
          }
          router.push("/thankyou");
          ContactUsMail(postData.email, postData.fullname, "");
        } else {
          alert("Something went wrong");
        }
      });
  };
  return (
    <div className="w-full px-2 lg:w-8/12 py-10 md:py-20 flex items-center justify-center flex-col bg-white text-black">
      <div className="w-full  flex items-start justify-center flex-col">
        <p className="text-[30px]">
          <b>Contact US Directly</b>
        </p>
        <p>
          Just fill out the form below and one of our agents will get back to
          you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center justify-center flex-col gap-4 py-6"
      >
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full relative flex items-start justify-center flex-col">
            <Controller
              name={"name"}
              control={control}
              rules={{
                required: "Required field",
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["name"]}
                  helperText={errors["name"] ? errors["name"].message : ""}
                  label="Full name"
                  variant="outlined"
                  className="w-full"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            {/* <Controller
              name={"phone"}
              control={control}
              rules={{
                required: "Required field",
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="number"
                  error={!!errors["name"]}
                  helperText={errors["name"] ? errors["name"].message : ""}
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
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-start justify-center gap-4">
          <label className="w-full relative flex items-start justify-center flex-col">
            <Controller
              control={control}
              name="type"
              rules={{
                required: "Required field",
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
                  onChange={(event, selectedOptions) =>
                    onChange(selectedOptions)
                  }
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
                  required: "Required field",
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
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            <Controller
              name={"email"}
              control={control}
              rules={{
                required: "Email is requied",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors["email"]}
                  helperText={errors["email"] ? errors["email"].message : ""}
                  label="Enter your email address"
                  variant="outlined"
                  className="w-full"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <Controller
            name={"companyname"}
            control={control}
            rules={{
              required: "Required field",
            }}
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
          <Controller
            control={control}
            name="country"
            rules={{
              required: "Required field",
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
                    error={!!errors["country"]}
                    helperText={
                      errors["country"] ? errors["country"].message : ""
                    }
                    onChange={onChange}
                    {...params}
                    label="Country"
                  />
                )}
              />
            )}
          />
        </div>
        <div className="flex items-center justify-start w-full">
          <Controller
            control={control}
            name="city"
            rules={{
              required: "required field",
            }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                className="w-full md:w-[49.5%]"
                error={!!errors["city"]}
                helperText={errors["city"] ? errors["city"].message : ""}
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
                renderInput={(params) => (
                  <TextField
                    error={!!errors["city"]}
                    helperText={errors["city"] ? errors["city"].message : ""}
                    onChange={onChange}
                    {...params}
                    label="City"
                  />
                )}
              />
            )}
          />
        </div>
        <div className="flex items-center justify-start w-full">
          <Controller
            name={"enquiry"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="How can we help ?"
                variant="outlined"
                className="w-full"
                onChange={onChange}
                value={value}
                multiline
                rows={4}
              />
            )}
          />
        </div>
        <div className="w-full flex items-center justify-start">
          <button
            type="submit"
            className="px-4 bg-[#00a63f] h-10 text-white text-[15px] rounded-[4px]"
          >
            {isLoading ? "Please wait..." : "Send Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
