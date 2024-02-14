import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Enlargeddata  = (props) =>{

    const{image, location, department, Pending, city,setenlarge } = props;

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return(
      <div className='flex items-center justify-center mt-20 '>
       
        <div className="mt-2 mb-2 min-w-xl overflow-x-scroll rounded-2xl bg-gray-100 w-full max-w-3xl ">
<div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 ">

  <div class="xl:w-3/6 lg:w-3/5 w-80 md:block hidden" data-aos="fade-right">
    <img class="w-full mt-8" alt="Image of place" src={image} />
  </div>
  
  <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6" data-aos ="fade-up">
  <button className='text-black sm:ml-96 md:ml-48 lg:ml-64 font-bold text-black bg-gray-300 p-2 shadow-md hover:shadow-sm shadow-black rounded-xl text-center' onClick={()=>{setenlarge(false)}}>❌Cancel</button>

    <div class="border-b border-gray-200 pb-6">

      <p class="text-lg leading-none text-center font-bold  text-gray-600 dark:text-rose-400" data-aos="fade-in" data-aos-delay="1000">Department of {department}</p>
    </div>


    <div class="py-4 border-b border-gray-200 flex items-center justify-between">
      <p class="text-base leading-4 text-gray-800 font-bold dark:text-gray-700">Uploaded date : </p>
      <div class="flex items-center justify-center">
        <p class="text-sm leading-none text-gray-600 font-semibold dark:text-gray-600">02-35-65(12:20:65 am)</p>
         <div class="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer"></div>

      </div>
    </div>


    <div class="py-4 border-b border-gray-200 flex items-center justify-between">
      <div class="flex flex-wrap">
      <p class="text-base leading-4 text-gray-800 font-bold dark:text-gray-700">Location : </p>
        <p class="text-md leading-none text-gray-600  leading-5 dark:text-blue-600 mt-6">{location}</p>
        <svg class="text-gray-300 dark:text-white cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>


    <div>

        <input type="file" required  className="w-full cursor-pointer text-gray-200 outline-none py-5 px-2 rounded-xl  bg-slate-400"/>
    
    <button class="dark:bg-white mt-5 shadow-2xl  shadow-red-200 rounded-xl dark:text-gray-900 dark:hover:bg-blue-200   focus:outline-none focus:ring-2 focus:ring-offset-2  text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
      <svg class="mr-3 text-white dark:text-gray-900" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.66699 4.83333V4.84166" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.333 11.5V11.5083" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      Update image
    </button>
    </div>


    <div>

    <div class="mb-6 mt-6">
        <label for="password" class="block mb-2 text-sm  font-bold text-gray-900 dark:text-gray-600">Worker : </label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-400 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white " placeholder="Enter the name..." required/>
    </div>  

  <div class="mb-6">
        <label for="password" class="block mb-2 text-sm  font-bold text-gray-900 dark:text-gray-600">Worker ID : </label>
        
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-400 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white " placeholder="Enter the worker ID..." required/>
        <div>

<div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 hover:cursor-pointer rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-800 mt-3">The work is Completed.</label>
</div>
        </div>
    </div>
      <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-900">Work Code : 8BN321AF2IF0NYA</p>
      <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-900">City : {city}</p>
      <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-900">Status : {Pending ? "🔴Pending" : "🟢Completed"}</p>
      <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-900">Work Completed : 02-35-65(12:20:65 am)</p>
    </div>

    <div>
    </div>
    <div>
    </div>
  </div>
</div>
        </div>
        </div>
    )
}

export default Enlargeddata;