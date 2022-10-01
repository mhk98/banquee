import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Saving.css";
import laptop from "../images/laptop.png";
import bicycle from "../images/bicycle.png";
import airplane from "../images/airplane.png";
import camera from "../images/camera.png";
const Saving = () => {
  return (
    <div>
      <div className="hidden lg:flex flex-col saving px-16">
        <div className="savings">
          <div className="saving1">
            <h5>Saving Accounts</h5>
            <h2>Organize your</h2>
            <h2>money the right way</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="flex items-center gap-2 text-[#5BB5A2]">
            <p>All Features</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </div>
        </div>

        <div className="saving2 my-12">
          <div className="laptop-main text-left">
            <div className="laptop">
              <img className="image" src={laptop} alt="" />
            </div>
            <div>
              <h5>New Laptop</h5>
              <p>
                <small>400$</small>
              </p>
            </div>
          </div>
          <div className="laptop-main text-left">
            <div className="bicyle">
              <img className="image" src={bicycle} alt="" />
            </div>
            <div>
              <h5>Dream bike</h5>
              <p>
                <small>200$</small>
              </p>
            </div>
          </div>
          <div className="laptop-main text-left">
            <div className="airplane">
              <img className="image" src={airplane} alt="" />
            </div>
            <div>
              <h5>Holiday</h5>
              <p>
                <small>14000$</small>
              </p>
            </div>
          </div>
          <div className="laptop-main text-left">
            <div className="camera">
              <img className="image" src={camera} alt="" />
            </div>
            <div>
              <h5>Camera</h5>
              <p>
                <small>100$</small>
              </p>
            </div>
          </div>
          <div className="laptop-main text-left">
            <div className="laptop">
              <FontAwesomeIcon
                className="icon w-4 h-4 bg-black rounded-full p-2"
                icon={faPlus}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-1 gap-8 px-8 mx-auto items-center place-content-center">
        <div className="mx-auto">
          <div className="saving1">
            <h5>Saving Accounts</h5>
            <h2>Organize your</h2>
            <h2>money the right way</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="flex items-center mt-4 gap-2 text-[#5BB5A2]">
            <p>All Features</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </div>
        </div>

        <div className="mx-auto">
          <div className="laptop-main text-left">
            <div className="laptop">
              <img className="image" src={laptop} alt="" />
            </div>
            <div>
              <h5>New Laptop</h5>
              <p>
                <small>400$</small>
              </p>
            </div>
          </div>
          <div className="laptop-main text-left">
            <div className="laptop">
              <img className="image " src={bicycle} alt="" />
            </div>
            <div>
              <h5>Dream bike</h5>
              <p>
                <small>200$</small>
              </p>
            </div>
          </div>
          <div className="laptop-main text-left">
            <div className="laptop">
              <img className="image" src={airplane} alt="" />
            </div>
            <div>
              <h5>Holiday</h5>
              <p>
                <small>14000$</small>
              </p>
            </div>
          </div>
          <div className="laptop-main text-left">
            <div className="laptop">
              <img className="image" src={camera} alt="" />
            </div>
            <div>
              <h5>Camera</h5>
              <p>
                <small>300$</small>
              </p>
            </div>
          </div>

          <div className="laptop-main text-left">
            <div className="laptop">
              <FontAwesomeIcon
                className="icon w-4 h-4 bg-black rounded-full p-2"
                icon={faPlus}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saving;
