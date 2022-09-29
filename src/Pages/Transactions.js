import { faAppleAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Transactions.css";
const Transactions = () => {
  return (
    <div className="bg-[#E8F2EE] ">
      <div className="hidden lg:flex transactions py-32 my-24 px-16  justify-between">
        <div className="transactions1 mb-8">
          <h1>Send & receive</h1>
          <h1>money instantly</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>sed do eiusmod tempor incididunt ut labore et.</p>

          <div className="pt-8 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Malesuada Ipsum</h5>
          </div>
          <div className="pt-4 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Vestibulum</h5>
          </div>
          <div className="pt-4 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Parturient Lorem</h5>
          </div>
        </div>

        <div className="transactions2 hidden lg:flex flex-col items-start">
          <div className="apple">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Apple</p>
                <h6>Macbook</h6>
              </div>
            </div>
            <h6 className="font-bold">-999€</h6>
          </div>
          <div className="apple">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Amazon</p>
                <h6>Electronics</h6>
              </div>
            </div>
            <h6 className="font-bold">-49€</h6>
          </div>
          <div className="apple">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Twitter</p>
                <h6>Ads</h6>
              </div>
            </div>
            <h6 className="font-bold">-29€</h6>
          </div>
          <div className="apple">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Microsoft</p>
                <h6>Office Suite</h6>
              </div>
            </div>
            <h6 className="font-bold">-149€</h6>
          </div>
          <div className="apple">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Dropbox</p>
                <h6>Cloud</h6>
              </div>
            </div>
            <h6 className="font-bold">-14€</h6>
          </div>
          <div className="apple">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Paypal</p>
                <h6>Shopping</h6>
              </div>
            </div>
            <h6 className="font-bold">-200€</h6>
          </div>
        </div>
      </div>

      <div className=" bg-[#E8F2EE] py-32 my-24 lg:hidden flex flex-col items-center gap-8 px-4">
        <div className="transactions1 mb-8 w-full">
          <h1>Send & receive</h1>
          <h1>money instantly</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>sed do eiusmod tempor incididunt ut labore et.</p>

          <div className="pt-8 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Malesuada Ipsum</h5>
          </div>
          <div className="pt-4 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Vestibulum</h5>
          </div>
          <div className="pt-4 flex items-center gap-2">
            <FontAwesomeIcon
              className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
              icon={faCheck}
            ></FontAwesomeIcon>
            <h5>Parturient Lorem</h5>
          </div>
        </div>

        <div className="transactions2 lg:hidden grid grid-cols-1 place-content-center w-full px-12">
          <div className="apple w-full">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Apple</p>
                <h6>Macbook</h6>
              </div>
            </div>
            <h6 className="font-bold">-999€</h6>
          </div>
          <div className="apple w-full">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Amazon</p>
                <h6>Electronics</h6>
              </div>
            </div>
            <h6 className="font-bold">-49€</h6>
          </div>
          <div className="apple w-full">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Twitter</p>
                <h6>Ads</h6>
              </div>
            </div>
            <h6 className="font-bold">-29€</h6>
          </div>
          <div className="apple w-full">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Microsoft</p>
                <h6>Office Suite</h6>
              </div>
            </div>
            <h6 className="font-bold">-149€</h6>
          </div>
          <div className="apple w-full">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Dropbox</p>
                <h6>Cloud</h6>
              </div>
            </div>
            <h6 className="font-bold">-14€</h6>
          </div>
          <div className="apple w-full">
            <div className="flex gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 p-2 text-xl rounded-full bg-[#5BB5A2] text-[#E8F2FE]"
                icon={faAppleAlt}
              ></FontAwesomeIcon>
              <div>
                <p className="font-bold">Paypal</p>
                <h6>Shopping</h6>
              </div>
            </div>
            <h6 className="font-bold">-200€</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
