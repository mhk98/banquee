import React from 'react';
import banquee from '../images/banquee..png'
import'./Header.css'

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100 px-16">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Features</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Compare
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Support</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Compare
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a class='text-[#5BB5A2] mb-2'>Login</a></li>
    <li><a class="btn bg-[#5BB5A2] text-white border-none hover:bg-[#E8F2EE] hover:text-[#5BB5A2]">Open Account</a></li>
      </ul>
    </div>
    <img src={banquee} alt="" />
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Features</a></li>
      <li tabindex="0">
        <a>
          Compare
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Support</a></li>
      <li tabindex="0">
        <a>
          Blog
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="navbar-end hidden lg:flex gap-8 ">
    <a class='text-[#5BB5A2] text-xl '>Login</a>
    <a class="btn bg-[#5BB5A2] text-white border-none hover:bg-[#E8F2EE] hover:text-[#5BB5A2]">Open Account</a>
  </div>
</div>
        </div>
    );
};

export default Header;