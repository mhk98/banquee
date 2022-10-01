import React from "react";
import logo from "../images/logo.svg";
import logo1 from "../images/logo (1).svg";
import logo2 from "../images/logo (2).svg";
import logo3 from "../images/logo (3).svg";
import logo4 from "../images/logo (4).svg";
import logo5 from "../images/logo (5).svg";
import logo6 from "../images/logo (6).svg";
import logo7 from "../images/logo (7).svg";
import logo8 from "../images/logo (8).svg";
import logo9 from "../images/logo (9).svg";
import "./Tools.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Tools = () => {
  return (
    <div>
      <div className="px-16">
        <div className="px-16">
          <div className="hidden lg:flex gap-4">
            <img src={logo} alt="" />
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
          </div>
          <div className="hidden lg:flex gap-4 mt-4">
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
            <img src={logo7} alt="" />
            <img src={logo8} alt="" />
            <img src={logo9} alt="" />
          </div>
        </div>

        <div className="text-left mt-12 tools hidden lg:flex flex-row items-end px-16">
          <div className="tools1">
            <h5>Tools</h5>
            <h2>Seemless</h2>
            <h2>integration</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
            <p>amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>

          <div className="tools2">
            <div className=" flex items-center gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
                icon={faCheck}
              ></FontAwesomeIcon>
              <h5>Secure and encrypted integration</h5>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
                icon={faCheck}
              ></FontAwesomeIcon>
              <h5>Fully API interface</h5>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
                icon={faCheck}
              ></FontAwesomeIcon>
              <h5>Payments worldwide</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8">
        <div className="my-28 w-full">
          <div className="w-full">
            <div className="lg:hidden grid grid-cols-2 gap-4 w-full">
              <img src={logo} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
            <div className="lg:hidden grid grid-cols-2 gap-4 mt-4 w-full">
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
              <img src={logo6} alt="" />
              <img src={logo7} alt="" />
              <img src={logo8} alt="" />
              <img src={logo9} alt="" />
            </div>
          </div>
        </div>

        <div className="text-left mt-12 tools lg:hidden flex-row items-end">
          <div className="tools1">
            <h5>Tools</h5>
            <h2>Seemless</h2>
            <h2>integration</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
            <p>amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>

          <div className="tools2">
            <div className=" flex items-center gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
                icon={faCheck}
              ></FontAwesomeIcon>
              <h5>Secure and encrypted integration</h5>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
                icon={faCheck}
              ></FontAwesomeIcon>
              <h5>Fully API interface</h5>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
                icon={faCheck}
              ></FontAwesomeIcon>
              <h5>Payments worldwide</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
