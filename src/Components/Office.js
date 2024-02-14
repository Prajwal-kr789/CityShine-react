import { useEffect, useState } from "react";
import Showdata from "./Showdata";
import Mockdata from '../Utils/Mockdata.json'
import { Link } from "react-router-dom";

const Office = () =>{

    const [dropdown,setdropdown] = useState(false)
    const [btnall,setbtnall] = useState("All");
    const [username,setusername] = useState('');
    const [userpassword,setuserpassword] = useState('');
    const [validuser,setvaliduser] = useState(false);
    const [invaliduser,setinvaliduser] = useState(false);


    const handlesubmit = (e) =>{
        e.preventDefault();

       

        if (username === "username" && userpassword === "password") {
            setvaliduser(true);
          } else {
            setvaliduser(false);
          }
          console.log("Valid" , validuser)
     }

    return(

        <>
    

           {  !validuser  && <div className="bg-gray-700 md:w-5/12 lg:w-3/12 rounded-2xl mx-auto ">
            
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-28" >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9 text-blue-500 mx-auto">
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
</svg>


                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">Office login</h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Username</label>
                    <div className="mt-2">
                    <input id="email" name="email"  type="text" onChange={(e) =>{setusername(e.target.value)}} autoComplete="email" required className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
        <div className="mt-28">
            <h2 className="text-3xl text-center text-green-600 font-bold">Office Login</h2>
            <div className="mt-6 text-center">
            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" data-aos="fade-right" onClick={()=>{setbtnall("All")}}>All</button>
            
            <button className="inline-flex ml-3 items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" data-aos="fade-right" onClick={()=>{setbtnall("Pending")}}>Pending</button>
            
            <button className="inline-flex ml-3 items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" data-aos="fade-left" onClick={()=>{setbtnall("Completed")}}>Completed</button>
            
        
        <button className="inline-flex ml-3 items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" data-aos="fade-left" onClick={()=>{dropdown == false ? setdropdown(true) : setdropdown(false)}}>Departments ⬇️</button>
            <div className={`w-40 mt-2  relative ${dropdown?"block" : "hidden"} bg-gray-200   flex flex-col px-4 py-2 text-center rounded-xl`}>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold">Muncipality</span>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold">Bescom</span>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold">Water</span>
                <span className="hover:bg-gray-300 rounded-xl p-2 cursor-pointer font-semibold">Home</span>
            </div>
            
    </div>
    <div>
            <hr className="h-3 mt-4 border-t-4 border-gray-400" data-aos="fade-in"/>
            </div>
            <div className="relative overflow-x-auto flex items-center  justify-center sm:rounded-lg mt-20" data-aos="fade-in">
    <table className="w-10/12 text-sm text-left shadow-2xl rounded-xl text-center rtl:text-right  text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase h-16 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 w-4/12">
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
            
            btnall === "All" ?  Mockdata.mockdaata.mainobj.map((res,index)=>  <Showdata tabledata={res} index={index}/>) : "No data Available"
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
    }

    </>
    )
}
export default Office;