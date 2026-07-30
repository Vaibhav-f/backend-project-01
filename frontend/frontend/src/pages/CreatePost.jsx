import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const CreatePost = () => {


const [input, setInput] = useState("")
const navigate = useNavigate()

  const submitHandler = async(e)=>{
    e.preventDefault()
    console.log("click");
   
    

    const formData = new FormData(e.target)
     for (let pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}
     const  res =axios.post("https://backend-project-01-qeb2.onrender.com/create_post",formData)
    .then((res)=>{
      console.log(res);
      setInput("")
        e.target.reset();
      navigate("/feed")
      
    })
  }
  return (
    <div className='flex flex-col justify-center items-center translate-y-52'>
        <section className=' w-85 h-85  border-2 rounded-2xl flex flex-col justify-center items-center'>
            <h1  className='text-4xl font-semibold py-5'>Create-Post</h1>
            <form  
            onSubmit={submitHandler}
            className='flex flex-col gap-3 py-8 '>

                <input className='text-xl ml-13 ' type="file" name='image' accept='image/*' />
                <input
                 value={input}
                  onChange={(e) => setInput(e.target.value) }
                className='placeholder:text-2xl placeholder:px-5 border-2 border-cyan-400  rounded-2xl  w-80 ml-8 py-3 px-8 text-2xl' type="text" name="caption" id="" required placeholder='Caption' />
                <button className='bg-cyan-500 w-40 rounded-2xl h-10 text-2xl ml-13 cursor-pointer' type='submit'>Submit </button>

            </form>
        </section>
    </div>
  )
}

export default CreatePost
