import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { NavLink, useParams } from 'react-router-dom'

const Userdetails = () => {
  let [state, setState] = useState([])
  let {id} = useParams()

  useEffect(()=>{
    console.log(id);
    axios.get(`http://localhost:3001/user/${id}`).then((res)=>{
      console.log(res.data);
      setState(res.data);
    }).catch(()=>{console.log("Data not found..!");})
  },[])

  return (
    <div className={styles.viewUserContainer}>
      <div className={styles.nav}>
      <article className={styles.right}>
        <NavLink to="/" className={styles.links}>Home</NavLink>
        <NavLink to="/graph" className={styles.links}>Graph</NavLink>
      </article>
    </div>
      <div >
        {state ? (<div key = {state.id} className={styles.userdata}>
            <h4><span>Name : </span>{state.name}</h4>
            <h4><span>Email : </span>{state.email}</h4>
            <h4><span>Password : </span>{state.password}</h4>
            <h4><span>Gender : </span>{state.gender}</h4>
          </div>) : (<p>Loading user details ....</p>)}
      </div>
    </div>
  )
}

export default Userdetails
