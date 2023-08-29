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
                   title="The Lean Startup"
                   price={29.99}
                   image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpghttps://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                   rating={4}
                />
                <Product
                   id="123457" 
                   title="The Lean Startup"
                   price={529.99}
                   image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpghttps://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                   rating={3}
                />
            </div>

            <div className='home__row'>
                <Product 
                   id="123458"
                   title="The Lean Startup"
                   price={999.99}
                   image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpghttps://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                   rating={4}
                />
                <Product 
                   id="123459"
                   title="The Lean Startup"
                   price={349.99}
                   image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpghttps://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                   rating={5}
                />
                <Product 
                   id="123460"
                   title="The Lean Startup"
                   price={5999.99}
                   image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpghttps://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                   rating={4}
                />
                
            </div>

            <div className='home__row'>
            <Product 
                   id="123461"
                   title="The Lean Startup"
                   price={29.99}
                   image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpghttps://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                   rating={5}
                />
            </div>

        </div>    
    </div>
  )
}

export default Home