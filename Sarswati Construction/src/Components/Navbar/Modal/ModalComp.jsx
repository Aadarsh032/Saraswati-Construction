import React, { useState } from 'react'





const ModalComp = () => {



  const [queryDetails, setQueryDetails] = useState({

    uid: "sarswati",
    name: "",
    email: "",
    phone: "",
    purpose: "",
    city: "RANCHI",
    state: "JH",
    message: ""

  })

  const changeHandler = (event) => {
    setQueryDetails({ ...queryDetails, [event.target.name]: event.target.value })
    console.log(queryDetails);
  }

  const Send_Query = async (event) => {

    event.preventDefault();
    let query = queryDetails;
    const urlEncodedData = new URLSearchParams(query).toString();

    try {
      const response = await fetch('https://theroguepixxel.com/waapi/contact_submission', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: urlEncodedData,
      });

      alert('We have received your message, We will get back to you soon.');
      window.location.reload(); 
    } catch (error) {
      alert('Message not Delivered.Please Contact: 062002 91302');
    }

  }



  return (

    <>
      <form onSubmit={Send_Query} className=' contact-form flex flex-col gap-5 w-3/4 m-auto  max-md:w-[90%] max-md:gap-2 max-sm:gap-1 ' >
        <div className='contact-form1 flex w-full  justify-between gap-5 max-md:flex-col max-md:gap-2 max-sm:gap-1 '>
          <div className=' flex flex-col w-[45%]  gap-5 max-md:w-full max-md:gap-2 max-sm:gap-1 ' >
            <p className='text-4xl text-white max-md:text-2xl max-sm:text-base max-sm:text-black ' >Name <sup >*</sup>  </p><input type="text" placeholder='Your Name' value={queryDetails.name} name='name' onChange={changeHandler} required className='border-2 h-14 rounded-xl max-md:h-11 max-sm:h-8 ' />
          </div>
          <div className='flex flex-col w-[45%] gap-5 max-md:w-full max-md:gap-2 max-sm:gap-1'>
            <p className='text-4xl text-white max-md:text-2xl max-sm:text-base max-sm:text-black '>Phone No. <sup>*</sup>  </p> <input type="tel"  value={queryDetails.phone} name='phone' onChange={changeHandler} required minLength="10" maxLength="10" pattern="[0-9]{10,15}" placeholder="Your Phone Number" className='border-2 h-14 rounded-xl max-md:h-11 max-sm:h-8 ' />
          </div>
        </div>

        <div className='contact-form2 flex w-full  justify-between gap-5 max-md:flex-col max-md:gap-2 max-sm:gap-1 '>
          <div className=' flex flex-col w-[45%] gap-5 max-md:w-full max-md:gap-2 max-sm:gap-1 ' >
            <p className='text-4xl text-white max-md:text-2xl max-sm:text-base max-sm:text-black '>Email Id <sup>*</sup>  </p><input type="email" placeholder='Your Email Id' value={queryDetails.email} name='email' onChange={changeHandler} required className='border-2 h-14 rounded-xl max-md:h-11 max-sm:h-8 ' />
          </div>
          <div className=' flex flex-col w-[45%] gap-5 max-md:w-full max-md:gap-2 max-sm:gap-1 ' >
            <p className='text-4xl text-white max-md:text-2xl max-sm:text-base max-sm:text-black '>Purpose<sup>*</sup> </p> <input type="text" placeholder='Purpose' value={queryDetails.purpose} name='purpose' onChange={changeHandler} required className='border-2 h-14 rounded-xl max-md:h-11 max-sm:h-8 ' />
          </div>
        </div>

        <p className='text-4xl text-white max-md:text-2xl max-sm:text-base max-sm:text-black '> Your Message <sup>*</sup> </p>
        <textarea name="message" id="message-box" rows="8" placeholder='Type Your Message' value={queryDetails.message} onChange={changeHandler} required className='border-2 max-sm: h-28 rounded-xl   '   ></textarea>

        <button type='submit'  className='w-fit h-50 m-auto text-[#DF7F8E] bg-white font-bold px-7 py-1 rounded-3xl text-4xl mt-5 max-sm:text-xl max-sm:mt-1 max-sm:px-5 '>Submit</button>
      </form>
    </>
  )
}

export default ModalComp


