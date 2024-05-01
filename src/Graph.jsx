import styles from './styles.module.css'
import React from "react";
import { NavLink } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function App() {
   const storedData = localStorage.getItem('Monthslists');
   let userData = JSON.parse(storedData);
  console.log(userData);

  return (
    <div className={styles.barchart}>
      <div className={styles.nav}>
        <article className={styles.right}>
          <NavLink to="/" className={styles.links}>Home</NavLink>
          <NavLink to="/graph" className={styles.links}>Graph</NavLink>
          
        </article>
      </div>
      <h1>Bar chart</h1>
      <BarChart
        width={800}
        height={500}
        data={userData} 
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="count"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="rgb(30, 184, 184)" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
}


