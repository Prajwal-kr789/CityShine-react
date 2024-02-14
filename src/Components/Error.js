// import { useRouteError } from "react-router-dom";

const Error = () =>{

    // const err = useRouteError();
    return(
        <div className=' p-4 bg-slate-100 text-center justify-center mt-20'>
            <h2 className='font-bold text-5xl text-blue-500 '>Oops!!..</h2>
            <h3 className='text-2xl my-7'>Something Went Wrong!!..</h3>
            <h4  className='font-semibold  text-xl'>Status   Error : Page 404</h4>
    </div>
    )
}

export default Error;