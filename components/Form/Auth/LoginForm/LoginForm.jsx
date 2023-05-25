import { useState } from 'react';
import styles from './LoginForm.module.scss';
import { toast } from 'react-toastify';


export default function LoginForm({changeFormTypeFunc}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = async (url, formData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(formData)
      })
      
      const responseData = await response.json();
      
      if(responseData.success) return toast.success("Loged In Successfully");
      return toast.error(responseData.message)

    } catch (error) {
      toast.error(error.message);
    }
  };
  
  function submitLoginForm() {
    event.preventDefault();
    console.log('post reg form func');
    const url = `${process.env.API_BASE}/user/login`;
    submitForm(url, {email, password});
  }
  return (
    <div className={styles.form__container}>
        <h2>Login</h2>
        <form onSubmit={submitLoginForm}>
            <label className={`${styles['full-w-label']}`}>
                Eamil :
                <input type="email" name="email" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label className={`${styles['full-w-label']}`}>
                Password :
                <input type="password" name="password" id="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type="submit" className={`${styles['full-w-label']}`}>Submit</button>
        </form>
        <p className={styles['more-actions']}>Not Registered yet? <span onClick={()=>changeFormTypeFunc('register')}>Register</span></p>
    </div>
  )
}
