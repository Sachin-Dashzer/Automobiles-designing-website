import React from 'react'
import { useState } from 'react'
import carImg from '../../assets/c1.png'
import carImg2 from '../../assets/c2.png'
// import carImg3 from '../../assets/c3.png'
import carImg4 from '../../assets/c4.png'

const HeroBanner = () => {


    const [carActive, setcarActive] = useState(0)
    const [carColor, setcarColor] = useState('red')


    const nextCar = () => {
        if (carActive == 2) {
            setcarActive(0)
        } else {
            setcarActive(carActive + 1)
        }
    }


    return (
        <>


            <section className="heroBanner h-[700px] w-full pt-20" style={{ backgroundColor: `${carColor}` }}>

                <div className="bannerContainer px-16 pt-20 relative">

                    <div className="bannerTexts relative h-16 overflow-hidden">
                        <div className={`bannertextBox absolute left-12 transition-all duration-[1s] ease-in-out ${carActive == 0 ? 'top-0 opacity-100' : 'top-full opacity-0'}`}>
                            <h3 className="text-5xl font-thin">Car-1</h3>
                        </div>
                        <div className={`bannertextBox absolute left-12 transition-all duration-[1s] ease-in-out ${carActive == 1 ? 'top-0 opacity-100' : 'top-full opacity-0'}`}>
                            <h3 className="text-5xl font-thin">Car-2</h3>
                        </div>
                        <div className={`bannertextBox absolute left-12 transition-all duration-[1s] ease-in-out ${carActive == 2 ? 'top-0 opacity-100' : 'top-full opacity-0'}`}>
                            <h3 className="text-5xl font-thin">Car-3</h3>
                        </div>
                    </div>

                    <div className="bannerImages absolute top-20 left-0 w-full">

                        <div className="bannerImgContainer relative w-full h-[450px] flex justify-center">

                            <div className={`BannerImg w-3/5 mx-auto h-[450px] absolute transition-all duration-[1s] ease-in-out  ${carActive == 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                                <img src={carImg} alt="" />
                            </div>
                            <div className={`BannerImg w-3/5 mx-auto h-[450px] absolute transition-all duration-[1s] ease-in-out ${carActive == 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                                <img src={carImg2} alt="" />

                            </div>

                            <div className={`BannerImg w-3/5 mx-auto h-[450px] absolute transition-all duration-[1s] ease-in-out ${carActive == 2 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                                <img src={carImg4} alt="" />

                            </div>
                            <div className="dropBtns absolute">
                                <div className="dropBtnBox relative w-full h-full">
                                    <button className=" absolute bottom-[-30px] left-[55%] w-16 h-16 bg-slate-100"></button>
                                    <button className="absolute bottom-[-27px] right-[30%] w-16 h-16 bg-slate-100"></button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>











                <button onClick={nextCar}>Next</button>

            </section>





        </>
    )
}

export default HeroBanner
