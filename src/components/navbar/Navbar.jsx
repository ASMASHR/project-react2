import './Navbar.css';
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import close_btn from '../../assets/close_btn_white.svg';
import act_icon from '../../assets/act_icon.svg';
import hamburger_btn from '../../assets/hamburger_btn.svg';
function Navbar(){
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    return (
    <div className={'navbar '+ (click && 'isOpen')}>
        <div className='nav-container'>
            <Link to='/' className='nav-logo'>
                <img src={act_icon} className={"logo " +(click && "active")} alt="logo" />
            </Link>
            <div className={'menu'} onClick={handleClick}>
                <img src={hamburger_btn} className={click && "active"} alt="logo" />

            </div>
        </div>
        <div className={'nav-menu '+(!click && "closed-menu")}>
           <nav className="components">
                <Link to='/' >
                    home
                </Link>
                <Link to='/' >
                    Expositions
                </Link>
            </nav>
            <div className='btn-close'onClick={handleClick}>
            <img src={close_btn} className={"close-btn " +(!click && "active")} alt="logo" />
        </div>

        </div>

    </div>
    );
}
export default Navbar;
