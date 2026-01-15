import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Task1PAGE = () => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  function handleChange(e) {
    setFormData((prev =>
      ({ ...prev, [e.target.name]: e.target.value })
    ))
  }


  useEffect(() => {
    if (!formData.email) {
     
      setErrors({})
      return
    }
    const id=setTimeout(() => {
    

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
        setErrors({ email: "please enter proper email" })

      } else {
        setErrors({})
      }


    }, 1000)

    return()=>clearTimeout(id)


  }, [formData.email])

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.email && !errors.email) {

      try {

        


        setIsSubmitting(true)
        let ValidEmail = formData.email.trim();
        const data = await axios.post("https://jsonplaceholder.typicode.com/posts", { ...formData, email: ValidEmail })
        if(data){
          setFormData({})
          setErrors({})
          setIsSubmitting(false)
        }

      }

      catch (error) {




      }

    }
  }

  console.log(errors,formData)


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} value={formData.email || ""} />
        {errors.email && <div>
          {errors.email}</div>}

          <button type="submit" disabled={isSubmitting || errors.email}>Submit</button>
      </form>

    </div>
  );
}

export default Task1PAGE;
