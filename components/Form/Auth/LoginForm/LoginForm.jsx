import styles from './LoginForm.module.scss';

export default function LoginForm({changeFormTypeFunc}) {
  function submitRegistrationForm() {
    return 0;
  }
  return (
    <div className={styles.form__container}>
        <h2>Login</h2>
        <form onSubmit={submitRegistrationForm}>
            <label className={`${styles['full-w-label']}`}>
                Eamil :
                <input type="email" name="" id="" required/>
            </label>
            <label className={`${styles['full-w-label']}`}>
                Password :
                <input type="email" name="" id="" required/>
            </label>
            <button type="submit" className={`${styles['full-w-label']}`}>Submit</button>
        </form>
        <p className={styles['more-actions']}>Not Registered yet? <span onClick={()=>changeFormTypeFunc('register')}>Register</span></p>
    </div>
  )
}
