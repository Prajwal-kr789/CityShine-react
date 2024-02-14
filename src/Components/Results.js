import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Results = () =>{

    useEffect(()=>{
        AOS.init({duration:700})
    })

    return(
        <div className="flex flex-col items-center justify-center h-screen">
               <img src="https://cdn2.iconfinder.com/data/icons/minimal-style-collection-pack-01/256/success.png"  alt="Success symbol" className="mix-blend-color-burn rounded-full border-4 border-white p-2" data-aos="flip-left"/>
               <h2 className="font-bold text-blue-600 text-xl" data-aos="fade-in" data-aos-delay="800">Thank you for the Submission</h2>
               <div className="flex flex-row mt-6 ">
                  <Link to="/">  <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" data-aos="fade-right" data-aos-delay="200">Go back to home</button></Link>
                   <Link to="/Complain"> <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" data-aos="fade-left" data-aos-delay="200">Submit another</button></Link>
                </div>
        </div>
    )
}


export default Results;