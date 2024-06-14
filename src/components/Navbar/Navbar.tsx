import React,{useState} from 'react';
import './Navbar.css'
import rasm from '../../assets/img/logo.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { TbMenuDeep } from "react-icons/tb";
const Navbar = () => {
    const [show, setShow    ] = useState(false);
    return (
        <div>
            <header>
                <div className="container">
                <nav>
                      <img src={rasm} alt="" />
                  <div className="all">
                  <div className="inputt">
                        <div className="input_alll">
                        <CiSearch />
                        </div>
                        <div className="input_alll">
                       <input type="text" placeholder='Search' />
                        </div>
                     </div>
                  </div>
                   <span className={`span_link ${show ? "show" : ""}`}>
                   <ul>
                        <li>
                            <a href="" className="">ALL PRODUCTS</a>
                        </li>
                        <li>
                            <a href="" className="">ABOUT SEEDRA</a>
                        </li>
                        <li>
                            <a href="" className="">OUR BLOG</a>
                        </li>
                        <li>
                            <a href="" className="">CONTACTS</a>
                        </li>
                      </ul>
                      <div className="nav_link">
                      <div className="link">
                      <RiInstagramFill />
                      </div>
                      <div className="link">
                      <FaFacebook />
                      </div>
                      <div className="link">
                     <div className="input">
                        <div className="input_all">
                        <CiSearch />
                        </div>
                        <div className="input_all">
                       <input type="text" placeholder='Search' />
                        </div>
                     </div>
                      </div>
                      <div className="link">
                      <IoMdHeartEmpty  style={{color:'green'}}/>
                      </div>
                      <div className="link">
                      <MdOutlineShoppingCart   style={{color:'green'}}/>
                      </div>
                      </div>
                   </span>
                   {
                    show ?  <TbMenuDeep  className='menu' onClick={() => setShow(!show)} />
                    :
                     <VscChromeClose  className='menu' onClick={() => setShow(!show)}/>  
                   }
                  
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
