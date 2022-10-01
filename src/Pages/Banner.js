import React from 'react';
import './Banner.css'
import cards from '../images/cards.png'
import vector from '../images/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';


const Banner = () => {
    return (
        <div>
            <div className='hidden lg:flex justify-between items-center text-left my-28 px-40 banner'>
            <div className=''>
            <h1>Banking</h1>
            <h1 className='pb-4'>starts here.</h1>
            <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p className='content pb-2'>elit, sed do eiusmod tempor incididunt ut labore</p>
            
            <div className='flex justify-between pb-4'>
            <div>
            <div className='pt-8 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>Instant Transfer</h5>
            </div>
            <div className='pt-4 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>Saving accounts</h5>
            </div>
            </div>

            <div>
            <div className='pt-8 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>Payments worldwide</h5>
            </div>
            <div className='pt-4 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>100% mobile banking</h5>
            </div>
            </div>
            </div>

            <div className='py-16 flex items-center gap-8'>
            <a class="btn bg-[#5BB5A2] text-white border-none hover:bg-[#E8F2EE] hover:text-[#5BB5A2]">Open Account</a>
            <p className='text-xl text-[#5BB5A2]'>Compare Cards <FontAwesomeIcon className='pl-2' icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
        </div>

        <div className='cards mb-16'>
            <img className='' src={cards} alt=""/>
            
        </div>
        </div>

        <div className='lg:hidden grid grid-cols-1 gap-8 items-center text-left px-8 my-28 banner'>
            <div className=''>
            <h1>Banking</h1>
            <h1 className='pb-4'>starts here.</h1>
            <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p className='content pb-2'>elit, sed do eiusmod tempor incididunt ut labore</p>
            
            <div className='flex justify-between pb-4'>
            <div>
            <div className='pt-8 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>Instant Transfer</h5>
            </div>
            <div className='pt-4 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>Saving accounts</h5>
            </div>
            </div>

            <div>
            <div className='pt-8 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>Payments worldwide</h5>
            </div>
            <div className='pt-4 flex items-center gap-2'>
                <p><FontAwesomeIcon className='w-4 h-4 p-2 rounded-full bg-[#E8F2FE] text-[#5BB5A2]' icon={faCheck}></FontAwesomeIcon></p>
                <h5 className='text-xl'>100% mobile banking</h5>
            </div>
            </div>
            </div>

            <div className='py-16 flex items-center gap-8'>
            <a class="btn bg-[#5BB5A2] text-white border-none hover:bg-[#E8F2EE] hover:text-[#5BB5A2]">Open Account</a>
            <p className='text-xl text-[#5BB5A2]'>Compare Cards <FontAwesomeIcon className='pl-2' icon={faArrowRight}></FontAwesomeIcon></p>
            </div>
        </div>

        <div className='cards mb-16'>
            <img className='' src={cards} alt=""/>
            
        </div>
        </div>
        </div>
    );
};

export default Banner;