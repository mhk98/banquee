import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import app from "../images/app-icon.png";
import "./Notifications.css";

const Notifications = () => {
  return (
    <div>
      <div className="hidden lg:flex mx-16 my-20 notifications  flex-row justify-between items-center">
        <div>
          <div className="notification1">
            <h5>Notifications</h5>
            <h2>Stay notified</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
            <p>amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Exercitation veniam consequat sunt nostrud amet.</p>
          </div>

          <div className="pt-8 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Malesuada Ipsum</h5>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Vestibulum</h5>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Parturient Lorem</h5>
          </div>
          <div className="flex items-center gap-2 text-[#5BB5A2] mt-8">
            <p>Compare Cards</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </div>
        </div>

        <div className="banko-main">
          <div className="banko">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>You payment of 49€ has been processed!</h6>
            </div>
          </div>
          <div className="banko">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>You got a new support message!</h6>
            </div>
          </div>
          <div className="banko">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>You payment was declined!</h6>
            </div>
          </div>
          <div className="banko">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>Please verify your payment of 99€!</h6>
            </div>
          </div>
          <div className="banko">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>New account statistics are available!</h6>
            </div>
          </div>
        </div>
      </div>

      <div className=" notifications lg:hidden grid grid-cols-1 px-4 gap-8 mx-auto">
        <div>
          <div className="notification1">
            <h5>Notifications</h5>
            <h2>Stay notified</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
            <p>amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Exercitation veniam consequat sunt nostrud amet.</p>
          </div>

          <div className="pt-8 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Malesuada Ipsum</h5>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Vestibulum</h5>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full text-[#5BB5A2] bg-[#E8F2EE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Parturient Lorem</h5>
          </div>
          <div className="flex items-center gap-2 text-[#5BB5A2] mt-8">
            <p>Compare Cards</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </div>
        </div>

        <div className="banko-main1 w-full">
          <div className="banko1 w-full">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>You payment of 49€ has been processed!</h6>
            </div>
          </div>
          <div className="banko1 w-full">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>You got a new support message!</h6>
            </div>
          </div>
          <div className="banko1 w-full">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>You payment was declined!</h6>
            </div>
          </div>
          <div className="banko1 w-full">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>Please verify your payment of 99€!</h6>
            </div>
          </div>
          <div className="banko1 w-full">
            <img src={app} alt="" />
            <div className="text-left">
              <p className="font-bold">Banko.</p>
              <h6>New account statistics are available!</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
