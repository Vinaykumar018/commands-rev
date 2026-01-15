import React from 'react';
import { useState, useEffect } from 'react';

const FormSecurity = () => {
  const [formData, setFormData] = useState({password:""})
  const [suggestion, setSuggestion] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function togglePassword(){
    setShowPassword(prev => !prev);
  }

  useEffect(() => {

    if(formData.password==""){
     setSuggestion("")
     return;
    }
   

    const id=setTimeout(() => {
      

      if (formData.password.length < 8) {
        setSuggestion("password should have atleast 8 characters")
        return



      }
      if (/^[A-Za-z]+$/.test(formData.password)) {
        setSuggestion("Weak Passsowrd : only contains letters")
        return


      }
      if (/^[A-Za-z0-9]+$/.test(formData.password)) {
        setSuggestion("Medium Passsowrd : only contains letters and numbers")
        return


      }
      if (/^(?=.*[A-Za-z]).+$/.test(formData.password)) {
        setSuggestion("Strong Passsowrd : contians letters and number and special character")



      }




    }, 1000)


    return ()=>clearTimeout(id)


  }, [formData.password])
  function handleSubmit() {

    if(formData.password===formData.confirmpassword){


    }

  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div >
          <input type={showPassword?"text":"password"} name="password" placeholder='please enter your password' onChange={handleChange} />
          <span onClick={togglePassword} style={{ cursor: "pointer" }}>
  {showPassword ? "🙈" : "👁️"}
</span>
          <span>
            {suggestion&& suggestion}
          </span>
        </div>
        <div>
          <input type="password" name="confirmpassword" placeholder='please enter your confirmpassword ' onChange={handleChange} />
        </div>

        <button type="submit" disabled={formData.password.length<8 || formData.password!==formData.confirmpassword ? true :false}>Submit</button>

{console.log(formData)}

      </form>



    </div>
  );
}

export default FormSecurity;
