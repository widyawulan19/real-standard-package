import React from 'react'
import '../Styles/MenuList.css'
import headerImg from '../Assets/logo.png'
import { IoIosArrowBack } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import data from '../Data/DataList.json';
import { useNavigate } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";

function MenuList() {
    const navigate = useNavigate();

    const handleNavigateToWelcome = () =>{
        navigate('/')
    }



  return (
    <div className='menu-list-container'>
        <div className="menu-list-header">
            <div className="nav-icon" onClick={handleNavigateToWelcome}>
                <IoIosArrowBack/>
            </div>

            <div className="header-img">
                {/* <img src={headerImg} alt="logo image" /> */}
                <h4>BORCELLE</h4>
                <span>Coffee Shop</span>
            </div>
            
            <div className="nav-icon">
                <IoMenu/>
            </div>
        </div>

        <div className="ml-menu-list">
            <div className="menu-box-list">
                {data.map((menu, index) =>(
                    <div 
                        className={`list-box ${index % 2 === 0 ? "bg-cream" : "bg-brown"}`} 
                        key={index}
                    >

                        <div className="list-header">
                            <h2>{menu.category}</h2>
                            <div className="size-box-label">
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                            </div>
                        </div>

                        
                        {menu.items.map((item, idx) =>(
                            <div className="list-list" key={idx}>
                                <h4>
                                    {item.name}
                                    {item.badge === "popular" && (
                                        <FaRegStar className='star-icon'/>
                                    )}
                                </h4>
                                <div className="size-box">
                                    <p>{item.sizes.S}</p>
                                    <p>{item.sizes.M}</p>
                                    <p>{item.sizes.L}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default MenuList