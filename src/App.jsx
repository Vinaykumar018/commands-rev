import { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Accordion2 from './components/Accordion2';
import Dashboard from './components/Dashboard';
import FormSecurity from './components/FormSecurity';
import Task1PAGE from './Pages/Task1PAGE';
import Task2Page from './Pages/Task2Page';
import { FaRegGrinStars } from "react-icons/fa";
// import { validEmail } from './regex';

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({}); // Object is better for multiple fields
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email Validation Effect
  useEffect(() => {
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: "" }));
      return;
    }

    const timeoutID = setTimeout(() => {
      // Logic: Agar valid HAI toh error hatao, warna dikhao
      const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email);
      setErrors(prev => ({
        ...prev,
        email: isValid ? "" : "Please enter a valid email address"
      }));
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [formData.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Final Trim & Validation before API call
    const finalEmail = formData.email.trim();
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(finalEmail)) {
      setErrors(prev => ({ ...prev, email: "Validation failed before submit" }));
      return;
    }

    // 2. Start Loading
    setIsSubmitting(true);
    
    try {
      console.log("Sending clean data to API:", { ...formData, email: finalEmail });
      // Yahan tumhari API call aayegi (e.g., axios.post)
    } catch (err) {
      console.error("Submit failed");
    } finally {
      setIsSubmitting(false); // Stop Loading
    }
  };

  const arr=["vinay","rohit","shyam"]

  return (
    <div className="app-container">


      {

        arr.map((item)=><h1>
          
         <span><FaRegGrinStars>{item}</FaRegGrinStars></span> 
          </h1>)
        
      }
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" onChange={handleChange} value={formData.name} />
        </div>

        <div>
          <label>Email:</label>
          <input 
            name="email" 
            className={errors.email ? "error-border" : ""} 
            onChange={handleChange} 
            value={formData.email} 
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <button type="submit" disabled={isSubmitting || !!errors.email}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form> */}
      {/* <Accordion></Accordion>
      <Accordion2></Accordion2> */}

     
      {/* <Dashboard></Dashboard> */}
      {/* <FormSecurity></FormSecurity> */}
      {/* <Task1PAGE></Task1PAGE>
      <Task2Page></Task2Page> */}
    </div>


  );
}


export default App;