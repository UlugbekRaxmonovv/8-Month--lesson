import {useState,ChangeEvent} from 'react';
import './Contact.css'
import Footer from '../../components/Footer/Footer';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";


interface Contact{
  username: string,  
  email: string, 
  message:string }

let initialState:Contact= {
  username: '',
  email: '',
  message: ''
}

const Contact = () => {
  const [contact, setContact] = useState<Contact>(initialState);

  const HandelSubmit = (e: ChangeEvent<HTMLInputElement> )=>{
    let {value,name} = e.target
    setContact({...contact, [name]: value})

  }
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(contact)
  }

  
    return (
        <div>
          <div className=" contact_all container">
            <div className="contact">
<h1>Contact us</h1>
<p>Send for us your request and we will get in touch with you as soon as possible</p>

<div className="phone">
<div className="phone_all">
<div className="fon">
<FaPhoneVolume />
</div>
<span>+380 98 782 82 23</span>
</div>
<div className="phone_all">
<div className="fon">
<MdOutgoingMail/>
</div>
<span>+380 98 782 82 23</span>
</div>
</div>
            </div>

            <div className="contact">
              <form className="form" onSubmit={handelSubmit}>
             <label htmlFor="">Name</label> <br />
             <input type="text"  onChange={HandelSubmit}  name='username' placeholder='Your name'/> <br />

             <label htmlFor="">E-mail</label> <br />
             <input type="text"  onChange={HandelSubmit} name='email'  placeholder='Your email'/> <br />
             <label htmlFor="">Message</label> <br />
             <textarea  placeholder='Your message' name='message'>
                
             </textarea>
             <div className="btn">
                <div className="btn_all">
                    <button>Send request</button>
                </div>
                <div className="btn_all">
                  <p>By sending request you agree to out Pivacy&Policy</p>
                </div>
             </div>
              </form>
            </div>
          </div>
          <Footer/>
            
        </div>
    );
}

export default Contact;
