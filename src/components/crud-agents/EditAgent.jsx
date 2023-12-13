import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'


const editAgent = ({onClose, id}) => {

const [fullname, setFullName] = useState("")
const [description, setDescription] = useState("")
const [business, setBusiness] = useState("")
const [phone, setPhone] = useState("");

const handleClear = () => {
  setFullName("");
  setDescription("");
  setBusiness("");
  setPhone("");
}

const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
const token = localStorage.getItem("token");


const fetchEditAgent = async () => {
  const req =  await axios.get(`${baseUrl}/api/v1/agents/${id}/edit`, {
    headers: {
      "Content-Type":" application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
}

useEffect(() => {
fetchEditAgent();
}, [])

const editAgent = async () => {
  const req = await axios.put(`${baseUrl}/api/v1/agents/${id}`, {
    headers: {
      "Content-Type":" application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })

  if(req.status === 200) {
    alert("Agent is Updated");
    onClose()
  } else {
   console.log(errors);
  }

}
    
  

  const {
    register,
    formState: {errors},
    handleSubmit,

  } = useForm ();

  return (
    <div className='absolute left-0 right-0 top-0 bottom-0  bg-black bg-opacity-40'>
    <div className='flex justify-center my-36'>
    <form onSubmit={handleSubmit(editAgent)} className="max-w-xl m-1 p-10  bg-white rounded shadow-xl">
        <div className='flex justify-between items-center mb-5'>
         <h2 className="font-bold">Add New Agent</h2>
         <button onClick={onClose}  className="bg-blue-600 w-20 h-9 justify-center text-white rounded-md ">close</button>
       </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-00" htmlFor="cus_name">Full Name</label>
      <input {...register("fullname", {required: true} )} className="w-full px-2 pr-36 py-2 text-gray-700 bg-gray-200 rounded"  type="text" required placeholder="fullname" aria-label="Name"/>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" htmlFor="cus_email">Description</label>
      <input {...register("description", {required: true} )} className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"  type="text" required placeholder="description" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" htmlFor="cus_email">Business</label>
      <input {...register("business", {required: true} )} className="w-full px-2 py-2 text-gray-700 bg-gray-200 border-blue-500 rounded"  type="text" required placeholder="business" aria-label="Email"/>
    </div>
    <div className="mt-2">
      <label className=" text-sm block text-gray-600" htmlFor="cus_email">Phone</label>
      <input {...register("phone", {required: true} )} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"  type="text" required placeholder="phone" aria-label="Email"/>
    </div>

    <div className="mt-4 flex justify-between">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-blue-600 rounded" type="submit">Submit</button>
      <button onClick={handleClear} className="px-4 py-1 text-white font-light tracking-wider bg-red-600 rounded" type="submit">Clear</button>
    </div>
  </form>
    </div>
    </div>
  )
}

export default editAgent