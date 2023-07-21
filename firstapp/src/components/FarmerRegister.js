import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function FarmerRegister() {

  const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const[usernameerr,setusernameerr]=useState("");
      const[passerr,setpasserr]=useState("")
    
      const clickedsubmit=(data)=>{
        axios.post("http://localhost:3500/farmer-api/register",data)
        .then(res=>{
            if(res.data.message=="User registered"){
                 navigate("/farmerlogin")
                 setusernameerr("")
                 setpasserr("")
            }
            else{
                if(res.data.message=="username already exists.Please rename") setusernameerr(res.data.message)
                else setpasserr(res.data.message)
            }
        })
        .catch((err)=>{
            console.log("err in creating user", err);
            console.log("err.request:", err.request);
            console.log("err.response:", err.response);
        })
      }

      
  return (
    <div className="flex flex-wrap h-[800px] m-[30px] shadow-lg">
    <div className="w-[40%] flex flex-col bg-[#5655c6] rounded-tl-xl rounded-bl-xl justify-center p-[15px] align-center text-center">
      <h1 className="text-white  ">Welcome Back!</h1>
      <h6 className="text-white font-thin">
        To keep connected with us please
      </h6>
      <h6 className="text-white font-thin">login with your personal info</h6>
      <div>
        <button className="border border-1 border-white rounded-3xl text-white mt-[20px] w-[100px] py-2 px-3 cursor-pointer">
        <Link  to="/farmerlogin" className='text-white text-decoration-none '>SIGN IN</Link>        </button>
      </div>
    </div>
    <div className="w-[60%] flex flex-col rounded-tr-xl rounded-br-xl justify-center text-center align-middle">
      <h1 className="text-[#5655c6]">Create Account</h1>
      <h6 className="font-sm text-[grey] pt-[15px] pb-[20px]">
        or use your email for registration:
      </h6>
      <form onSubmit={handleSubmit(clickedsubmit)}>
        <div className="flex flex-col gap-y-3 ml-[250px]">
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
          ></input>
          {errors.name?.type=="required" && <h6 className="text-[red] text-sm font-thin ">*username is required</h6>}
          {usernameerr.length>0 &&  <h6 className="text-[red] text-sm font-thin ">*{usernameerr}</h6>}
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Email"
            type="text"
            {...register("email", { required: true })}
          ></input>
          {errors.email?.type=="required" && <h6 className="text-[red] text-sm font-thin ">*email is required</h6>}
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          ></input>
          {errors.password?.type=="required" && <h6 className="text-[red] text-sm font-thin ">*password is required</h6>}
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Repeat Password"
            type="repeatpassword"
            {...register("repeatpassword", { required: true })}
          ></input>
          {errors.repeatpassword?.type=="required" && <h6 className="text-[red] text-sm font-thin ">*repeat password is required</h6>}
          {passerr.length>0 && <h6 className="text-[red] text-sm font-thin ">*{passerr}</h6>}
        </div>
        <div>
          <button className="border border-1 border-[#5655c6] w-[100px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer"
          type="submit">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default FarmerRegister