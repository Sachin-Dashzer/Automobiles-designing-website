import React, { useEffect, useState } from 'react';
import carImg from '../../assets/c1.png';
import carImg2 from '../../assets/c2.png';
import carImg3 from '../../assets/c4.png';

const HeroBanner = () => {
    const [carActive, setCarActive] = useState(0);

    const cars = [
        { name: 'LEONARDO X', discription: 'DO THE THINGS YOU LIKE', img: carImg, color: '#8a251e' },
        { name: 'ZINDAGO R51', discription: 'GIVE THE BEST', img: carImg2, color: '#2c2c2c' },
        { name: 'XANZIRO 007', discription: 'ANYTHING ANYWHERE !', img: carImg3, color: '#5eae38' }
    ];

    const nextCar = () => {
        setCarActive((prev) => (prev + 1) % cars.length);
    };

    const prevCar = () => {
        setCarActive((prev) => (prev - 1 + cars.length) % cars.length);
    };

    useEffect(() => {
        const interval = setInterval(nextCar, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="heroBanner h-[680px] w-full pt-20 transition-all duration-[1s] ease-in-out overflow-hidden"
            style={{ backgroundColor: cars[carActive].color }}
        >
            <div className="bannerContainer px-16 pt-24 relative">
                <div className="bannerTexts absolute w-1/2 z-50 pl-12">
                    <div className=' relative h-36 overflow-hidden'>
                        {cars.map((car, index) => (
                            <div
                                key={index}
                                className={`bannertextBox absolute left-0 transition-all mt-4 duration-[1s] ease-in-out ${carActive === index ? 'top-0 opacity-100' : 'top-full opacity-0'
                                    }`}
                            >
                                <h3 className="text-7xl tracking-widest font-thin">{car.name}</h3>
                                <p className="text-2xl mt-3 tracking-widest font-thin">{car.discription}</p>
                            </div>
                        ))}
                    </div>


                    <div className="bannerBtns  mt-4">
                        <button className="px-8 py-3 cursor-pointer mr-6 bg-black hover:bg-red-50 hover:text-black rounded-sm transition-all duration-500 ease-in-out"><a href="#" className="font-2xl font-normal ">Buy Now</a></button>
                        <button className="px-8 py-3 cursor-pointer bg-white hover:bg-black  text-black hover:text-white rounded-sm transition-all duration-500 ease-in-out"><a href="#" className="font-2xl font-normal">View Details</a></button>
                    </div>
                </div>

                <div className="bannerImages absolute top-14 left-0 w-full">
                    <div className="bannerImgContainer relative w-full h-[450px] flex justify-end pr-32">
                        {cars.map((car, index) => (
                            <div
                                key={index}
                                className={`BannerImg w-3/5 h-[450px] absolute transition-all duration-[1s] ease-in-out ${carActive === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    }`}
                            >
                                <img src={car.img} alt={`${car.name}`} />
                            </div>
                        ))}

                        <div className="dropBtns absolute z-20">
                            <div className="dropBtnBox relative w-full h-full">
                                <button
                                    onClick={prevCar}
                                    className="absolute bottom-[-25px] left-[58%] z-50 bg-white text-black cursor-pointer rounded-full w-14 h-14 text-xl"
                                >
                                    <i className="fa-solid fa-angle-left"></i>
                                </button>
                                <button
                                    onClick={nextCar}
                                    className="absolute bottom-[-21px] right-[30%] z-50 bg-white text-black cursor-pointer rounded-full w-14 h-14 text-xl"
                                >
                                    <i className="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
