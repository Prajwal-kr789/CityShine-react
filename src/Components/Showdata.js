import { Link } from "react-router-dom";
import Enlargeddata from "./Enlargeddata";
import { useState } from "react";

const Showdata = (props) =>{
    const {tabledata,index} = props;
    // console.log(tabledata.length)
    // console.log(tabledata)

    const [enlarge,setenlarge]  = useState(false)


    return(
        <>
        <tbody className="text-gray-900 ">

        <tr className={`odd:bg-white text-gray-950 ${index%2 == 0 ?"odd:dark:bg-gray-200":"dd:dark:bg-gray-100"} even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-black">
                    <img src={tabledata.image} className="w-11/12  rounded-lg m-auto" alt="" />

               <svg xmlns="http://www.w3.org/2000/svg"   onClick={() => {setenlarge(!enlarge)}} className="w-6 h-6 text-current stroke-current hover:cursor-pointer stroke-2 stroke-round fill-none"
  viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
                </th>
                <td className="px-6 py-4 ">
                    {
                        tabledata.location
                    }
                </td>
                <td className="px-6 py-4 ">
                    {
                        tabledata.city
                    }
                </td>
                <td className="px-6 py-4 ">
                    {
                        tabledata.department
                    }
                </td>
                <td className="px-6 py-4 ">
                    {
                        tabledata.isPending ? "🔴Pending" : "🟢Completed"
                    }
                </td>
                <td className="px-6 py-4 ">
                    <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            
        </tbody>

            {
                
                enlarge &&         <div  className="fixed top-0 left-0 w-full h-full rounded-3xl  bg-black bg-opacity-50  flex justify-center items-center z-10">
                <Enlargeddata  image={tabledata.image}  setenlarge={setenlarge} location={tabledata.location} city={tabledata.city} department={tabledata.department} Pending={tabledata.isPending} />
                </div>
            }
        
        

        </>
       
    )
}

export default Showdata;