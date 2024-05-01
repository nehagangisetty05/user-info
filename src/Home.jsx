import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  let [state, setState] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/user").then((res)=>{
      setState(res.data.filter((data)=>data.name && data.email && data.gender));
    }).catch(()=>{
      console.log("data not fetched...");
    })
  },[])

  return (
    <div className= {styles.dataMainContainer}>
      <div className={styles.nav}>
        <article className={styles.right}>
          <NavLink to="/" className={styles.links}>Home</NavLink>
          <NavLink to="/graph" className={styles.links}>Graph</NavLink>
        </article>
      </div>
        <h1>Users Data</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {state.map((data, index) => {
              return (
                <tr key={data.id}>
                  <td>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td>{data.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Home
