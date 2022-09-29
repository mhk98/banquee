import React from "react";
import "./Subnav.css";
const Subnav = () => {
  return (
    <div className=" flex justify-between items-center">
      <div className="subnav2">
        <small className="text-[#5BB5A2]">
          <span className="text-[#8C8C8E]">© Made by</span> Pawel Gola -{" "}
          <span className="text-[#8C8C8E]">Powered by</span> Webflow
        </small>
      </div>

      <div className="subnav1 mr-6">
        <small className="text-[#8C8C8E]">Impressum</small>
        <small className="text-[#8C8C8E]">Datenschutz</small>
      </div>
    </div>
  );
};

export default Subnav;
