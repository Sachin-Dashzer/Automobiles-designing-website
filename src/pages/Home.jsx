import React from 'react'
import { useState } from 'react'

const Home = () => {
 
    const [carActive, setcarActive] = useState(0)



  return (
    <>


        <div className="heroBanner h-[700px] w-full bg-red-600 pt-40 px-16">


            <div className="bannerTexts relative h-16 border-2 overflow-hidden">
                <div className={`bannertextBox absolute left-0 ${carActive == 0 ? 'top-0 opacity-100' : 'top-full opacity-0'}`}>
                    <h3 className="text-5xl font-thin">Car-1</h3>
                </div>
                <div className={`bannertextBox absolute left-0 ${carActive == 1 ? 'top-0 opacity-100' : 'top-full opacity-0'}`}>
                    <h3 className="text-5xl font-thin">Car-2</h3>
                </div>
                <div className={`bannertextBox absolute left-0 ${carActive == 2 ? 'top-0 opacity-100' : 'top-full opacity-0'}`}>
                    <h3 className="text-5xl font-thin">Car-3</h3>
                </div>
            </div>


            <button onClick={()=>{setcarActive(carActive+1)}}>Next</button>


        </div>



    </>
  )
}

export default Home
