import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
const CPUAbout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const data = [
        {
          name: "acdc1",
          price: "100/kg",
          Totalcapacity: "1000kg",
          filledcapacity: "800kg",
          remainingcapacity: "200kg",
          locality: "hyderabad",
        },
        {
          name: "acdc2",
          price: "105/kg",
          Totalcapacity: "100kg",
          filledcapacity: "80kg",
          remainingcapacity: "20kg",
          locality: "miryalaguda",
        },
        {
          name: "acdc3",
          price: "50/kg",
          Totalcapacity: "1100kg",
          filledcapacity: "800kg",
          remainingcapacity: "300kg",
          locality: "suryapet",
        },
        {
          name: "acdc4",
          price: "40/kg",
          Totalcapacity: "1300kg",
          filledcapacity: "1100kg",
          remainingcapacity: "200kg",
          locality: "hyderabad",
        },
        {
          name: "acdc5",
          price: "67/kg",
          Totalcapacity: "1000kg",
          filledcapacity: "800kg",
          remainingcapacity: "200kg",
          locality: "hyderabad",
        },
      ];
    
      const [searchlocality, setsearchlocality] = useState("");
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const clickedsubmit=(data)=>{
        console.log("data")
      }
    
    return (
        <div>
   <button className="border border-1 border-[#8f8ed9] text-[white] bg-[#5655c6] py-2 w-[150px] cursor-pointer rounded-3xl mt-[35px] ml-[20px]" onClick={handleShow}>
        Sell Your Product
      </button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-gray-600">
        <div className="h-[500px]">
        <form onSubmit={handleSubmit(clickedsubmit)}>
        <div className="flex flex-col gap-y-3 ml-[15px]">
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Product Name"
            type="text"
            {...register("ProductName", { required: true })}
          ></input>
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Quantity"
            type="text"
            {...register("Quantity", { required: true })}
          ></input>
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Willing Price"
            type="text"
            {...register("WillingPrice", { required: true })}
          ></input>
          <input
            className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
            placeholder="Locality"
            type="text"
            {...register("Locality", { required: true })}
          ></input>
        </div>
      </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="border border-1 border-[#5655c6] w-[100px] ml-[15px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer"
          onClick={handleClose}>
            Close
          </button>
        <button className="border border-1 border-[#5655c6] w-[150px] ml-[15px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer"
          type="submit">
            Save Changes
          </button>
      </Modal.Footer>
    </Modal>
      <div></div>
      <div className="flex justify-between m-[50px]">
        <div>
          <h2 className="text-[#555c6] font-lg font-bold font-sans">
            List of CPU's :
          </h2>
        </div>
        <div>
          <input
            className="w-[500px] border border-[grey] shadow-lg text-[grey] py-2 rounded-lg pl-[20px] outline-none"
            placeholder="search for locality"
            onChange={(e) => {
              setsearchlocality(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex  justify-center items-center flex-col">
        {data.map((obj) => (
          <div>
            {obj.locality.includes(searchlocality) && (
              <div className="w-[800px] h-[300px] border shadow-lg rounded-xl mb-[30px] relative">
                {
                  <div className="m-[20px]">
                    <h4>
                      <span className="text-[#5655c6]  font-sans pr-[20px]">
                        Name :{" "}
                      </span>
                      <span className="font-sans font-normal ">{obj.name}</span>
                    </h4>
                    <h4>
                      <span className="text-[#5655c6]  font-sans pr-[20px]">
                        Price :{" "}
                      </span>
                      <span className="font-sans font-normal">{obj.price}</span>
                    </h4>
                    <h4>
                      <span className="text-[#5655c6]  font-sans pr-[20px]">
                        Totalcapacity :{" "}
                      </span>
                      <span className="font-sans font-normal">
                        {obj.Totalcapacity}
                      </span>
                    </h4>
                    <h4>
                      <span className="text-[#5655c6]  font-sans pr-[20px]">
                        Filledcapacity :{" "}
                      </span>
                      <span className="font-sans font-normal">
                        {obj.filledcapacity}
                      </span>
                    </h4>
                    <h4>
                      <span className="text-[#5655c6]  font-sans pr-[20px]">
                        Remainingcapacity :{" "}
                      </span>
                      <span className="font-sans font-normal">
                        {obj.remainingcapacity}
                      </span>
                    </h4>
                    <h4>
                      <span className="text-[#5655c6]  font-sans pr-[20px]">
                        Locality :{" "}
                      </span>
                      <span className="font-sans font-normal">
                        {obj.locality}
                      </span>
                    </h4>
                    <div className="absolute right-0 mr-[30px]">
                      <button className="border border-1 border-[#8f8ed9] text-[white] bg-[#5655c6] py-2 w-[100px] cursor-pointer rounded-3xl">
                        DEAL
                      </button>
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        ))}
      </div>        </div>

    );
};

export default CPUAbout;