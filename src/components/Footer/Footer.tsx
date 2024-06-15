
import './Footer.css'
import rasm from '../../assets/img/logo.png'
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footir_all">
                        <div className="footir_row">
                            <p>ALL PRODUCTS</p>
                        </div>
                        <div className="footir_row">
                        <div className="span"></div>
                        </div>
                        <div className="footir_row">
                            <p>ABOUT SEEDRA</p>
                        </div>
                        <div className="footir_row">
                        <div className="span"></div>

                        </div>
                        <div className="footir_row">
                          <p>OUR BLOG</p>
                        </div>
                        <div className="footir_row">
                         <img src={rasm} alt="" />
                        </div>
                        <div className="footr_row">
                            <p>Terms&Conditions</p>
                        </div>
                        <div className="footir_row">
                        <div className="span"></div>

                        </div>
                        <div className="footir_row">
                           <p>Privacy Policy</p>
                        </div>
                        
                        

                    </div>
                    <div className="br"></div>
                    <div className="p3">
                    <div className="footir_bottom">
                        <div className="footir_lift">
                        <BiLogoInstagramAlt />
                        </div>
                        <div className="footir_lift">
                        <FaFacebook />
                        </div>
                    </div>
                       <p>All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
