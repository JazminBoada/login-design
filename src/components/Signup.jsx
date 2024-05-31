import React from "react";
import palm_img from "../assets/img/palm.jpg";
import logo from "../assets/img/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";

const Signup = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center lg:flex-row">
      {/* Formulario*/}
      <div className="w-1/2 h-screen flex flex-col justify-center items-center">
        <header className="relative md:right-3/4 lg:right-20 lg:bottom-5 ">
          <img src={logo} className="w-32 lg:w-52" alt="logo" />
        </header>
        <section>
          <h1 className="text-4xl md:text-6xl xl:text-7xl lg:mb-2">
            Hello there.
          </h1>
          <p className="text-sm mb-8 xl:text-lg">
            You need an account to continue.
          </p>

          <form className="flex flex-col space-y-8 lg:w-full">
            <div className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Name"
                className=" outline-none border-b-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="md:text-lg outline-none border-b-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="md:text-lg outline-none border-b-2"
              />
              <input
                type="password"
                placeholder="Repeat Password"
                className="md:text-lg outline-none border-b-2"
              />
            </div>
            <button className=" bg-custom text-white border-2 border-solid border-custom hover:bg-white hover:text-custom text-lg w-64 md:w-80 h-10 rounded-full transition-colors duration-300 ease-in-out lg:w-full">
              Sign up
            </button>
          </form>

          <p className="text-center text-lg m-1">or</p>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl pb-2">
            <BsGoogle className="border border-solid border-custom  rounded-md inline-flex justify-center items-center p-1 m-0.75 w-8 h-8 text-custom transition-colors duration-300 ease-in-out hover:text-white hover:bg-custom lg:w-10 lg:h-10 cursor-pointer" />
            <BsFacebook className="border border-solid border-custom  rounded-md inline-flex justify-center items-center p-1 m-0.75 w-8 h-8 text-custom transition-colors duration-300 ease-in-out hover:text-white hover:bg-custom lg:w-10 lg:h-10 cursor-pointer" />
          </div>
        </section>
        <div className="text-center my-2 md:mt-8 w-full">
          <p className="text-xs lg:text-lg">
            By signing up, you agree to the
            <a href="/" className="text-custom">
              {" "}
              Terms & Conditions.
            </a>
          </p>
        </div>
      </div>

      {/* Imagen*/}
      <div className="hidden sm:block lg:w-1/2 lg:h-screen w-full overflow-hidden">
        <img src={palm_img} className="w-full h-full object-cover" alt="Palm" />
      </div>
    </div>
  );
};

export default Signup;
