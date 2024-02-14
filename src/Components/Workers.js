import { useEffect, useState } from "react"
import { image_url1 } from "../Utils/Constants"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Mockdata from '../Utils/Mockdata.json';
import Showdata from "./Showdata";


const Workers = () =>{

     const [dropdown,setdropdown] = useState(false)
     const [btnall,setbtnall] = useState("All")
     const [depart,setdepart] = useState("")
     const [username,setusername] = useState('');
     const [userpassword,setuserpassword] = useState('');
     const [validuser,setvaliduser] = useState(true);

    const handlesubmit = (e) =>{
        e.preventDefault();


        if (username === "username" && userpassword === "password") {
            setvaliduser(true);
          } else {
            setvaliduser(false);
          }
          console.log("Valid" , validuser)
     }

    useEffect(()=>{
        AOS.init({duration:2500})
    },[]);

    return(
        <>
       {  validuser  && <div className="bg-gray-700 sm:w-6/12 md:w-6/12  lg:w-3/12 rounded-2xl mx-auto ">
        
        <div className="flex min-h-full flex-col  justify-center px-6 py-12 lg:px-8 mt-28" >
        <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9 text-blue-500 mx-auto">
  <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd" />
</svg>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">Worker login</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form className="space-y-6" onSubmit={handlesubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Username</label>
                <div className="mt-2">
                <input id="email" name="email" type="text" onChange={(e) =>{setusername(e.target.value)}} autoComplete="email" required className="block w-full  outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300" >Password</label>
                <div className="text-sm">
                    <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
                </div>
                <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" onChange={(e) =>{setuserpassword(e.target.value)}} required className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            </form>
            
                </div>
            </div>
        </div>
}


        {

           validuser &&
         // The main data 
        <div className="mt-28 ">
            <div className="text-center">
                <h2 className="text-4xl font-semibold text-gray-500" data-aos="fade-up" data-aos-delay="4000">Welcome Partners</h2>
                <h3 className="mt-6" data-aos="fade-in" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit neque, modi qui accusamus maxime aliquam eligendi unde amet porro ipsa sapiente consequuntur temporibus quisquam quia numquam! Culpa repudiandae nostrum blanditiis rem voluptatum accusantium totam alias incidunt reiciendis, eos sed officia vitae dignissimos porro dolores. Veniam cupiditate harum minus saepe quibusdam!</h3>
            </div>
            
            <div>
                
            <div className="mt-6 text-center">
            <p className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" data-aos="fade-right" onClick={()=>{setbtnall("All")}} data->All</p>
            
            <p className="inline-flex ml-3 items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setbtnall("Pending")}} data-aos="fade-right">Pending</p>
            
            <p className="inline-flex ml-3 items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setbtnall("Completed")}} data-aos="fade-left">Completed</p>
            
        
        <button className="inline-flex ml-3 items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" data-aos="fade-left" onClick={()=>{dropdown == false ? setdropdown(true) : setdropdown(false)}}>Departments ⬇️</button>
            <div className={`w-40 mt-2  relative ${dropdown?"block" : "hidden"} bg-gray-200   flex flex-col px-4 py-2 text-center rounded-xl`}>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold" >Muncipality</span>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold">Bescom</span>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold">Water</span>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold">Home</span>
            </div>
            <div>
    </div>
            {/* {
                console.log(Mockdata.mockdaata)
            } */}
            <hr className="h-3 mt-4 border-t-4 border-gray-400" data-aos="fade-in"/>
            </div>
<div className="relative overflow-x-auto flex items-center  justify-center sm:rounded-lg mt-20" data-aos="fade-in">
    <table className="w-full sm:w-8/12 md:w-10/12 lg:w-9/12 xl:w-10/12  text-sm text-left shadow-2xl rounded-xl text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase h-16 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 sm:w-1/6 md:w-2/12 lg:w-3/12 xl:w-3/12">
                    Image
                </th>
                <th scope="col" className="px-6 py-3 w-3/12">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    City
                </th>
                <th scope="col" className="px-6 py-3">
                    Department
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        {
            
            btnall === "All" ?  Mockdata.mockdaata.mainobj.map((res,index)=><Showdata tabledata={res} index={index}/>) : "No data Available"
        }
        {
            btnall === "Pending"?Mockdata.mockdaata.mainobj.filter((item) => item.isPending === true).map((res,index)=><Showdata tabledata={res} index={index}/>): "No pending Data!!!..."
        }
        {
            btnall === "Completed"?Mockdata.mockdaata.mainobj.filter((item) => item.isPending === false).map((res,index)=><Showdata tabledata={res} index={index}/>): "No data Available"
        }
    </table>
    </div>
            </div>
            </div>
           
            } 
            </>
    )
}

export default Workers;