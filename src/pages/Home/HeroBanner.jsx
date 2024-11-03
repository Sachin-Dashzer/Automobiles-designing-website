import React, { useEffect } from 'react'
import { useState } from 'react'
import carImg from '../../assets/c1.png'
import carImg2 from '../../assets/c2.png'
import carImg3 from '../../assets/c4.png'

const HeroBanner = () => {


    const [carActive, setcarActive] = useState(0)
    // const [carColor, setcarColor] = useState('red')

    const cars = [
        {
            name: 'car1',
            img: carImg,
            color: '#8a251e'
        },
        {
            name: 'car2',
            img: carImg2,
            color: '#2c2c2c'
        },
        {
            name: 'car3',
            img: carImg3,
            color: '#5eae38'
        }
    ];



    

    const nextCar = () => {
        if (carActive >= 2) {
            setcarActive(0)
        } else {
            setcarActive(() => carActive + 1)
        }


    }
    

    const prevCar = () => {
        if (carActive <= 0) {
            setcarActive(() => cars.length - 1)
        } else {
            setcarActive(() => carActive - 1)
        }
        
        

    }



    return (
        <>


            <section className="heroBanner h-[700px] w-full pt-20 transition-all duration-[1s] ease-in-out " style={{ backgroundColor: `${cars[carActive].color}` }}>

                <div className="bannerContainer px-16 pt-20 relative">

                    <div className="bannerTexts relative h-16 overflow-hidden">

                        {
                            cars.map((car, index) => {
                                return (
                                    <div key={index} className={`bannertextBox absolute left-12 transition-all duration-[1s] ease-in-out ${carActive == index ? 'top-0 opacity-100' : 'top-full opacity-0'}`}>
                                        <h3 className="text-5xl font-thin">{car.name}</h3>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="bannerImages absolute top-20 left-0 w-full">

                        <div className="bannerImgContainer relative w-full h-[450px] flex justify-center">

                            {
                                cars.map((car, index) => {
                                    return (
                                        <div key={index} className={`BannerImg w-3/5 mx-auto h-[450px] absolute transition-all duration-[1s] ease-in-out ${carActive == index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                                            <img src={car.img} alt="" />
                                        </div>
                                    )
                                })
                            }


                            <div className="dropBtns absolute z-40">
                                <div className="dropBtnBox relative w-full h-full">
                                    <button onClick={prevCar} className=" absolute bottom-[-25px] left-[58%] z-50 bg-white text-black cursor-pointer rounded-full w-14 h-14 text-xl"><i className="fa-solid fa-angle-left"></i></button>
                                    <button onClick={nextCar} className="absolute bottom-[-21px] right-[30%] z-50 bg-white text-black cursor-pointer rounded-full w-14 h-14 text-xl"><i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>












            </section>





        </>
    )
}

export default HeroBanner
