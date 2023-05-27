import React, { useState } from "react";
import SubHeading from "../layout/SubHeading";
import Heading from "../layout/Heading";
import Container from "../layout/Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import "react-phone-number-input/style.css";
import "react-country-dropdown/dist/index.css";
import PhoneInput from "react-phone-number-input";
import { ReactCountryDropdown } from "react-country-dropdown";
import Image from "next/image";

const ContactForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [country, setCountry] = useState("");
  const [value, setValue] = useState();
  const handleSelect = (country) => {
    console.log(country);
    setCountry(country.name);
  };
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("services", data.services);
    formData.append("budget", data.budget);
    formData.append("hireOption", data.hireOption);
    formData.append("websiteURL", data.websiteURL);
    formData.append("file", data.file);
    formData.append("zipcode", data.zipcode);
    formData.append("country", country);
    formData.append("message", data.message);
    console.log(formData);
    try {
      await axios.post("http://localhost:5000/api/v1/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to 'multipart/form-data'
        },
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container>
      <div className="sm:flex justify-between  sm:px-5 xl:px-0 pt-10 sm:pt-16 md:pt-20 lg:pt-24 sm:pl-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full sm:w-3/4 ">
            <div>
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-yellow font-pop font-bold"
                title="Home > Contact us"
              />
              <Heading
                className="text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
                title="You Can Hire Us By Following The Process Below"
              />
            </div>
            <div>
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2"
                title="Name"
              />
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Write your name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            {errors.name && (
              <span className="text-primary">Name is required</span>
            )}
            <div className="mt-5">
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                title="Email"
              />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Write your email"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>{" "}
            {errors.email && (
              <span className="text-red">Email is required</span>
            )}
            <div className="mt-5 w-full sm:flex justify-between   ">
              <div className="w-full">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                  title="Phone Number"
                />
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="w-80% ml-3 p-0">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                  title="Services"
                />
                <div className="form-control  border rounded-md  border-primary text-primary w-full max-w-xs ">
                  <div className="input-group px-4">
                    <select
                      className="select select-bordered"
                      {...register("services")}
                    >
                      <option disabled selected>
                        Any
                      </option>
                      <option> Digital Marketing</option>
                      <option>Web Development</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full sm:flex justify-between   ">
              <div className="w-full">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                  title="Approximate Budget"
                />
                <div className="w-80%   p-0">
                  <div className="form-control  border rounded-md  border-primary text-primary w-full max-w-xs ">
                    <div className="input-group ">
                      <select
                        className="select select-bordered w-full"
                        {...register("budget")}
                      >
                        <option disabled selected>
                          $100-$200
                        </option>
                        <option>$200-$400</option>
                        <option>$400-$600</option>
                        <option>$700-$900</option>
                        <option>$1000+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-60% ">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 ml-3 "
                  title="Hire Us"
                />
                <div className="form-control px-4 ml-3 border rounded-md  border-primary text-primary w-full max-w-xs ">
                  <div className="input-group px-4 ">
                    <select
                      className="select select-bordered"
                      {...register("hireOption")}
                    >
                      <option disabled selected>
                        Hourly
                      </option>
                      <option> Project</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full sm:flex justify-between   ">
              <div className="w-full">
                <SubHeading
                  className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                  title="State/Region"
                />
                <div className="w-80%   p-0">
                  <div className="form-control  border rounded-md  border-primary text-primary w-full max-w-xs ">
                    <ReactCountryDropdown
                      className="country"
                      onSelect={handleSelect}
                      countryCode="BD"
                      {...register("stateRegion")}
                    />
                  </div>
                </div>
              </div>
              <div className="w-60% ">
                <SubHeading
                  className="text-sm ml-3 md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                  title="Zip Code"
                />
                <input
                  type="text"
                  placeholder="***"
                  className="input border rounded-md  h-12 input-primary w-full "
                  {...register("zipcode")}
                />
              </div>
            </div>
            <div className="mt-5 w-full   ">
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                title="Messages"
              />
              <textarea
                className="textarea textarea-primary w-full h-56"
                placeholder="Write us what you want to know"
                {...register("message")}
              ></textarea>
            </div>
            <div className="mt-5 w-full   ">
              <SubHeading
                className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-pop font-bold mb-2 "
                title="Select File"
              />
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs text-primary border-primary "
                {...register("file")}
              />
              <p className="my-4">Or paste website URL</p>
              <input
                type="text"
                placeholder="https://"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("websiteURL")}
              />
            </div>
            <div className="my-9">
              <button
                type="submit"
                className="border-2 bg-primary border-solid text-sm sm:text-base lg:text-lg font-medium font-pop rounded-lg border-primary transition duration-300 ease-in-out text-white px-4 py-1 md:px-6 md:py-2 hover:font-medium hover:bg-white hover:text-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="w-3/4 h-screen sm:pl-6 py-8 sm:py-0">
          <div className="mx-auto sm:mx-0 w-[365px] h-screen sm:w-[345px]  md:w-[365px]   lg:w-[480px]   xl:w-[550px]  relative">
            <Image fill src="/assets/contact.png" alt="partner_image" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
