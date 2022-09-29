import React from "react";
import banquee from "../images/banquee..png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer class="footer p-10 text-slate-300 my-8 border-t-2 border-[#E8E8E8]">
      <div>
        <img src={banquee} alt="" />
      </div>

      <div>
        <span class=" text-2xl text-black mb-4 heading">About</span>
        <a class="link nav link-hover">Features</a>
        <a class="link nav link-hover">Pricing</a>
        <a class="link nav link-hover">Support</a>
      </div>
      <div>
        <span class=" text-2xl text-black mb-4 heading">Blog</span>
        <a class="link nav link-hover">Products</a>
        <a class="link nav link-hover">Technology</a>
        <a class="link nav link-hover">Crypto</a>
      </div>
      <div>
        <span class=" text-2xl text-black mb-4 heading">Webflow</span>
        <a class="link nav link-hover">Styleguide</a>
        <a class="link nav link-hover">Licensing</a>
        <a class="link nav link-hover">Changelog</a>
      </div>
      <div>
        <span class=" text-2xl text-black mb-4 heading">Social Media</span>
        <a class="link nav link-hover">Twitter</a>
        <a class="link nav link-hover">Facebook</a>
        <a class="link nav link-hover">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
