import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Complain = () =>{

useEffect(()=>{
    AOS.init({duration:1000})
},[])

    return(
        <>

        {/* // User Authentication */}
        


        {/* the main form */}

        <div className="mt-28  max-w-5xl mx-auto " data-aos="fade-up">
            <h2 className='font-bold text-center md:text-3xl lg:4xl text-green-500'>Benefit Of Complaining</h2>
            <p className=' text-center font-serif  mt-10 md:text-lg lg:xl'>
Complaining to authorities about issues is vital for maintaining a clean city. It serves as a catalyst for prompt action, prompting authorities to address concerns efficiently. Reporting problems ensures accountability, fosters civic engagement, and cultivates a sense of responsibility among citizens and officials alike, leading to a cleaner and healthier urban environment.</p>

            <form className="max-w-lg mx-auto bg-gray-700 shadow-lg shadow-blue-400  mt-10 p-6  rounded-xl ">
            <h2 className='text-center font-bold text-blue-600 text-2xl'>Fill The Form</h2>
            <h3 className='text-center font-bold italic text-1xl text-gray-200'>Upload an image</h3>
                <div className="flex justify-between mt-10">
            <div className="mb-5">
                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name (Optional) : </label>
                <input type="text" id="text" className="bg-gray-100 border outline-none border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." />
            </div>
            <div className="mb-5">
                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location : </label>
                <input type="text" id="text" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            </div>

            

            <label for="departments" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Select the Department</label>
            <select id="departments" className="bg-gray-50 border outline-none hover:cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500">

                

                <option defaultChecked className='text-gray-800 font-semibold bg-slate-200 '>Select the Department</option>
                <option className='text-gray-800 font-semibold bg-slate-220 '>A</option>
                <option className='text-gray-800 font-semibold bg-slate-200 '>B</option>
                <option className='text-gray-800 font-semibold bg-slate-220 '>C</option>
                <option className='text-gray-800 font-semibold bg-slate-200 '>D</option><hr />
                <option className='text-gray-800 font-semibold bg-slate-220 '>Other</option>
            </select>
            
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6" for="user_avatar">Upload file</label>
            <input className="block w-full text-sm text-gray-900 border p-1 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"></div>

            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200 mt-6">Your message (Optional)</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message..."></textarea>
           
            <div className="flex items-center mb-4 max-w-sm mx-auto mt-6">
                <input checked id="checkbox-1" type="checkbox" value=""  className="w-4  h-4 outline-none text-blue-600 bg-gray-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600" />
                <label for="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="/" className="text-blue-500 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>

           <Link to="/Results"> <button type="button" className="flex mx-48 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button></Link>
           
            </form>
            
        </div>

        </>
    )
}
export default Complain;