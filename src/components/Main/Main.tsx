import './Main.css'
import rasm from  '../../assets/img/img.png'
import rasm1 from '../../assets/img/main.png'
import rasm2 from '../../assets/img/main_all.png'
import rasm3 from '../../assets/img/main-all1.png'

const Main = () => {
    return (
        <div>
            <div className="container">
            <img  className='img' src={rasm} alt="" />


            <div className="main">
                <div className="main_all">
                    <h1>Seedra helps to grow fast and efficiant</h1>
                    <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>

<p style={{marginTop:'-20px'}}>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. 
Your easy growing experience is our guarantee
Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>

  <p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </div>
                <div className="main_all">
                    <div className="img">
                        <div className="img_all">
                        <img src={rasm3} alt="" />
                        </div>
                        <img src={rasm2} alt="" />
                    </div>
                </div>
            </div>


            <div className="maina">


            <div className="main_all">
                    <img src={rasm1} alt="" />
                </div>
                <div className="main_all">
                    <h1>Our story</h1>
                    <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>

<p style={{marginTop:'-20px'}}>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. 
Your easy growing experience is our guarantee
Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>

  <p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </div>
               
            </div>
            </div>
        </div>
    );
}

export default Main;
