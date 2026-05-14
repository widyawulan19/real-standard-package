import React from 'react'
import '../Styles/WelcomeLight.css'
import { IoChevronForwardOutline,IoChatbubbleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import img from '../Assets/logo.png'

function WelcomeLight() {

    // state 
    const navigate = useNavigate();

    // FUNCTION 
    const navigateToMenu = () =>{
        navigate('/menu-list')
    }

  return (
    <div className='welcome-light-container'>

        <div className="light-title">
            <h1>BORCELLE</h1>
            <h4>COFFEE SHOP</h4>
        </div>

        <div className="light-image">
            <img src={img} alt="" />
        </div>

        <div className="light-btn">
            <button onClick={navigateToMenu}>
                Discover Our Menu
                <IoChevronForwardOutline/>
            </button>

            <div className="light-footer">
                <p>CREATE BY LUMINOUS.ID</p>
            </div>
            
        </div>

        
    </div>
  )
}

export default WelcomeLight