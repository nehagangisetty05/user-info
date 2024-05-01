import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
    let [state, setState] = useState({
        name : "",
        email : "",
        password : "",
        gender : ""
    })

    let [date] = useState(new Date());

    let navigate = useNavigate();

    let {name, email, password, gender} = state;

    let handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]:value})
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        if(name && email && password && gender) {
            const user = {
                ...state, 
                date:date.toLocaleDateString('en-GB')
            };
            axios.post("http://localhost:3001/user", user).then((res) => {
                console.log(res);
                navigate("/")
                toast.success("Registration successfull !!!")
            }).catch(()=>{
                console.log("data not fetched..");
            })
        }
        else {
            console.log("fill the form");
        }
    }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <form onSubmit={handleSubmit} className={styles.loginright}>
            <h1>User Registration</h1>
            <div>
                <label>User Name<span>* : </span></label>
                <input value={name} name='name' onChange={handleChange}></input>
            </div>
        
            <div>
                <label>Email<span>* : </span></label>
                <input value={email} name='email' onChange={handleChange}></input>
            </div>
        
            <div>
                <label>Password<span>* : </span></label>
                <input type='password' name='password' value={password} onChange={ handleChange}></input>
            </div>
        
            <div>
                <label>Gender : </label>
                <input type='radio' checked = {gender === 'male'} onChange={ handleChange } name='gender' value="male"></input> <label>Male</label>
                <input type='radio' checked = {gender === 'female'} onChange={ handleChange } name='gender' value="female"></input> <label>Female</label>
            </div>

            <div className={styles.loginnavigate}>
                <button type='submit'>Register</button>
            </div>
        
        </form>
        
        <div className={styles.loginleft}>
        {/* {date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()} */}
        </div>
      </div>
    </div>
  )
}

export default Register
