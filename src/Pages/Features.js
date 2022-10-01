import {
  faBolt,
  faChartLine,
  faCreditCard,
  faFileShield,
  faMobile,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Features.css";
import app from "../images/app.svg";

const Features = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-between items-center px-16 feature">
        <div className="features text-left">
          <div className="pb-12">
            <h3>One app.</h3>
            <h3>One banking.</h3>
          </div>

          <div className="subfeature">
            <div className="main-transaction mb-8 lg:flex flex-row items-start">
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faBolt}
                ></FontAwesomeIcon>
                <h5 className="content">Instant</h5>
                <h5 className="content">transactions</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faFileShield}
                ></FontAwesomeIcon>
                <h5 className="content">Saving</h5>
                <h5 className="content">accounts</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            <div className="main-transaction mb-8 lg:flex flex-row items-start">
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faMobile}
                ></FontAwesomeIcon>
                <h5 className="content">Mobile</h5>
                <h5 className="content">banking</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faChartLine}
                ></FontAwesomeIcon>
                <h5 className="content">Advanced</h5>
                <h5 className="content">statistics</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            <div className="main-transaction lg:flex flex-row items-start">
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faCreditCard}
                ></FontAwesomeIcon>
                <h5 className="content">Virtual</h5>
                <h5 className="content">cards</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faWifi}
                ></FontAwesomeIcon>
                <h5 className="content">Contactless</h5>
                <h5 className="content">payments</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={app} alt="" />
        </div>
      </div>
      <div className=" lg:hidden items-center gap-8 px-8 feature">
        <div className="features text-left">
          <div className="pb-12">
            <h3>One app.</h3>
            <h3>One banking.</h3>
          </div>

          <div className="subfeature">
            <div className=" mb-8 grid grid-cols-1 gap-8">
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faBolt}
                ></FontAwesomeIcon>
                <h5 className="content">Instant</h5>
                <h5 className="content">transactions</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faFileShield}
                ></FontAwesomeIcon>
                <h5 className="content">Saving</h5>
                <h5 className="content">accounts</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faMobile}
                ></FontAwesomeIcon>
                <h5 className="content">Mobile</h5>
                <h5 className="content">banking</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faChartLine}
                ></FontAwesomeIcon>
                <h5 className="content">Advanced</h5>
                <h5 className="content">statistics</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faCreditCard}
                ></FontAwesomeIcon>
                <h5 className="content">Virtual</h5>
                <h5 className="content">cards</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
              <div className="transaction">
                <FontAwesomeIcon
                  className="w-4 h-4 p-4 text-xl rounded-full bg-[#E8F2FE] text-[#5BB5A2]"
                  icon={faWifi}
                ></FontAwesomeIcon>
                <h5 className="content">Contactless</h5>
                <h5 className="content">payments</h5>
                <p className="description">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div>
          <img src={app} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
