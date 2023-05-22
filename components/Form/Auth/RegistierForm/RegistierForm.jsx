import styles from './RegistierForm.module.scss';

export default function RegistierForm({changeFormTypeFunc}) {
    function submitRegistrationForm() {
        return 0;
    }
    
  return (
    <div className={styles.form__container}>
        <h2>Register</h2>
        <form onSubmit={submitRegistrationForm}>
            <label className={`${styles['full-w-label']}`}>
                Full Name :
                <input type="text" name="" id="" required/>
            </label>
            <label className={`${styles['full-w-label']}`}>
                Eamil :
                <input type="email" name="" id="" required/>
            </label>
            <label className={`${styles['full-w-label']}`}>
                Password :
                <input type="email" name="" id="" required/>
            </label>
            <label className={`${styles['full-w-label']}`}>
                Selete Account Type :
                <select>
                    <option value="customer">Customer</option>
                    <option value="landlord">Landlord</option>
                    <option value="agent">Agent</option>
                </select>
            </label>
            <button type="submit" className={`${styles['full-w-label']}`}>Submit</button>
        </form>
        <p className={styles['more-actions']}>Already Registiered? <span onClick={()=>changeFormTypeFunc('login')}>Login</span></p>
    </div>
  )
}
