import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormData } from "../../../context";
import ContactUsMail from "../../../mailer/contact-us-mail";

export default function SecondStep() {
  const { data: Data } = useFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "all" });
  const [option, setOption] = useState([]);
  const [cities, setCitis] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ipaddress, setIpaddress] = useState("");
  console.log(cities);
  console.log(option)
  useEffect(() => {
    axios
      .get(`https://api.db-ip.com/v2/free/self`)
      .then((res) => setIpaddress(res?.data.ipAddress));
  }, []);

  console.log(watch("country"))

  useEffect(() => {
    if (watch("country")) {
      axios
        .get(
          `https://countriesnow.space/api/v0.1/countries/cities/q?country=${
            watch("country") ? watch("country") : ""
          }`
        )
        .then((res) => {
          setCitis(res.data.data);
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



  let router = useRouter();
 

  const onSubmit = (data) => {
    let postData = {
      type: data.type === "Other" ? data.typeother : data.type,
      companyname: data.companyname,
      enquiry: data.enquiry,
      email: Data.email,
      fullname: Data.fullname,
      phone: `+${Data.phone}`,
      location: `${data.country}-${data.location}`,
      source: "request a demo",
      ipaddress: ipaddress,
    };
    setIsLoading(true);
    localStorage.setItem("demo", JSON.stringify(postData));
    // router.push("/thankyou");
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
                  wanumber: Data.phone,
                  acctype: "EMPR",
                }
              )
              .then((res) => {
                if (res?.data.status) {
                  axios.post(
                    `https://api-in.hiringplug.com/manage-mail-service/v1/send-custom-sms`,

                    {
                      mobile: [Data.phone],
                      wamessage: "Hello",
                      subject: "SUBJECT",
                    }
                  );
                }
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full font-primary gap-4 md:w-11/12 flex items-start justify-center flex-col"
    >
      <p className="text-[25px] font-medium">STEP 2 OUT OF 2</p>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800 ">
          <span className="text-red-800 ">*</span> I&apos;m :
        </p>

        <select
          name="type"
          {...register("type", { required: true })}
          className="h-10 px-2 w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
        >
          <option value="">I&apos;m</option>
          <option value="Employer">An Employer</option>
          <option value="Recuritment">A Recruitment Firm</option>
          <option value="Independent Recuritement">
            An Independent Recruiter
          </option>
          <option value="I am seeking employment">
            I am seeking employment
          </option>
          <option value="Business colloboration">Business colloboration</option>
          <option value="Other">Other</option>
        </select>
      </label>
      {watch("type") === "Other" ? (
        <label className="w-full flex items-start justify-center flex-col">
          <input
            type="text"
            name="typeother"
            {...register("typeother", { required: true })}
            placeholder="Please specify"
            className="h-10 px-2 text-[14px] w-full outline-green-900 border border-gray-400 rounded-[3px]"
          />
        </label>
      ) : (
        <></>
      )}

      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800 ">
          <span className="text-red-800 ">*</span> Country :
        </p>

        <select
          name="country"
          {...register("country", { required: true })}
          className="h-10 px-2 w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
        >
          <option value="">--Select--</option>
         {option?.map(data => (
          <option key={data.name} value={data.name}>{`${data.name} ${data.unicodeFlag} `}</option>
         ))}
        </select>
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800 ">
          <span className="text-red-800 ">*</span> City :
        </p>

        <select
          name="location"
          {...register("location", { required: true })}
          className="h-10 px-2 w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
        >
          <option value="">--Select--</option>
         {cities?.map(data => (
          <option key={data} value={data}>{data}</option>
         ))}
        </select>
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800">
          <span className="text-red-800">*</span> Company/entity Name :
        </p>
        <input
          type="text"
          name="companyname"
          placeholder="Company/entity name"
          {...register("companyname", { required: true })}
          className="h-10 px-2 text-[14px] w-full outline-green-900 border border-gray-400 rounded-[3px]"
        />
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800">
          <span
            title="Please share some information about yourself and your specific queries, if any to help us prepare better for the interaction"
            className="text-red-800"
          ></span>{" "}
          How can we help ? :
        </p>
        <textarea
          name="enquiry"
          {...register("enquiry")}
          rows="5"
          placeholder="Please share some information about yourself and your specific queries, if any to help us prepare better for the interaction"
          className="p-2 text-[14px] w-full outline-green-900 border border-gray-400 rounded-[3px]"
        />
      </label>
      <button
        type="submit"
        className={`${
          isLoading ? "bg-green-400" : "bg-[#00a63f]"
        } w-full  h-10 text-white text-[15px] rounded-[4px]`}
      >
        {isLoading ? "Please wait..." : "Get Started"}
      </button>
      {/* <p className="text-[10px] text-gray-700">
        By submitting your information, you agree to Hiringplug
        <a className="underline">Terms of Service</a> and
        <a className="underline">Privacy Policy</a>. You can opt out anytime.
      </p> */}
    </form>
  );
}
