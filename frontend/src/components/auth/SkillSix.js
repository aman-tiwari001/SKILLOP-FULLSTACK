import React from "react";
import Nav from "./Nav";
import doodle1 from "../../components/images/doodle-6 1.png";
import doodle2 from "../../components/images/doodle-7 1.png";
import Saly from "../../components/images/Saly-26.png";
import vector from "../../components/images/Vector.png";
import mdi from "../../components/images/mdi_user.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const SkillSix = () => {
  return (
    <div>
      <Nav />
      <img src={doodle1} className="absolute top-[66vh] left-[29vw] z-10" />
      <img src={doodle2} className="absolute right-[19vw] top-[62vh] z-10" />
      <img src={Saly} className="absolute right-[16vw] z-10 top-[18vh]" />
      <div className="flex items-start flex-col ml-[35vh] z-50">
        <h1 className="text-[40px] mb-5 mt-[8vh] font-bold">
          Complete Your Profile
        </h1>
        <div className="flex items-start gap-[10vh] mb-[10vh]">
          <div className="flex items-start justify-center flex-col text-xl gap-8 mt-3 font-normal">
            <span>Personal Information</span>
            <span>Contact Information</span>
            <span>Skills/Interests</span>
            <span>Professional Information</span>
            <span>Cover & Profile Photos</span>
            <span>Additional Information</span>
          </div>

          <div className="flex flex-col justify-center border-[1px] px-10 py-8 w-[40vw] rounded-3xl z-40 bg-white bg-opacity-50 backdrop-blur-[20px]">
            <div>
              <span className="text-lg font-normal mb-2">Cover Photo</span>
              <div className="w-full bg-[#D9D9D96E] h-[30vh] rounded-lg relative flex items-center justify-center">
                <img src={vector} className="absolute " />
                <span className="absolute text-lg font-medium ">UPLOAD</span>
              </div>
              <span className="text-[#5F5F5F]">Recommended Size: </span>
            </div>
            <div className="mt-5">
              <span className="text-lg font-normal mb-4 ">Profile Photo</span>
              <div className=" bg-[#D9D9D96E] h-[22vh] w-[22vh] rounded-full relative flex items-center justify-center">
                {" "}
                <img src={mdi} className="absolute bottom-[5vh]" />
                <span className="absolute text-lg font-medium ">UPLOAD</span>
              </div>
              <span className="text-[#5F5F5F]">Recommended Size: </span>
            </div>

            <div className="flex justify-between w-full items-center">
              <button className="rounded-full border-[2px] border-black h-9 w-9 flex items-center justify-center">
                <FaArrowLeft />
              </button>
              <div className="flex rounded-3xl border-[2px] border-black items-center justify-center px-1.5 py-1.5 gap-2">
                <button className="font-bold ">NEXT</button>
                <span className="rounded-full border-[2px] border-black py-1 px-1">
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSix;