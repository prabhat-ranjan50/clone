import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

            <img className='home__image'src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
            
            <div className='home__row'>
                <Product 
                   id="123456"
                   title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses (Lean Guides with Scrum, Sprint, Kanban, DSDM, XP & Crystal)"
                   price={29.99}
                   image="https://m.media-amazon.com/images/I/612l41qnTAL._AC_UY327_FMwebp_QL65_.jpg"
                   rating={4}
                />
                <Product
                   id="123457" 
                   title="MuscleBlaze High Protein Muesli, Dark Chocolate & Cranberry, 18 g Protein, with Probiotics, Superseeds, Raisins & Almond, Ready to Eat Healthy Snack, 1 kg"
                   price={529.99}
                   image="https://m.media-amazon.com/images/I/71oVN-BZAWL._AC_SY240_.jpg"
                   rating={3}
                />
            </div>

            <div className='home__row'>
                <Product 
                   id="123458"
                   title="Jaipan JPMG0023 750W Mixer Grinder, Silver And Blue, standard"
                   price={999.99}
                   image="https://m.media-amazon.com/images/I/4193mwtpCKL._SX300_SY300_QL70_FMwebp_.jpg"
                   rating={4}
                />
                <Product 
                   id="123459"
                   title="Zureni Bucket Quick Spin Mop with 2 Microfiber Wet Dry Mophead Floor Cleaning pocha Extendable Handle Removable Wringer 360° Floor Cleaner"
                   price={349.99}
                   image="https://m.media-amazon.com/images/I/61gUQE7BWQL._AC_UL480_QL65_.jpg"
                   rating={5}
                />
                <Product 
                   id="123460"
                   title="Campus Sutra Men's Black and Blue Ombre Dri-Fit Activewear T-Shirt Regular Fit for Casual Wear | Structured T-Shirt Crafted with Comfort Fit and High-Performance for Everyday Wear"
                   price={5999.99}
                   image="https://m.media-amazon.com/images/I/71oa-XhppaL._AC_UL600_FMwebp_QL65_.jpg"
                   rating={4}
                />
                
            </div>

            <div className='home__row'>
            <Product 
                   id="123461"
                   title="VW 80 cm(32 inches) Linux Series Frameless HD Ready Smart LED TV VW32C2 (Black)"
                   price={29.99}
                   image="https://m.media-amazon.com/images/I/81wxS8abrgL._AC_UY327_FMwebp_QL65_.jpg"
                   rating={5}
                />
            </div>

        </div>    
    </div>
  )
}

export default Home