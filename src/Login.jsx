import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let [state, setState] = useState({
        name : "",
        password : ""
    })
    let [date] = useState(new Date());

    let navigate = useNavigate();

    let {name, password} = state;

    let handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]:value})
    }
    let [MonthsList]=useState([
        {month:"Jan",count:2},
        {month:"feb",count:5},
        {month:"mar",count:1},
        {month:"apr",count:2},
        {month:"may",count:6},
        {month:"jun",count:2},
        {month:"jul",count:0},
        {month:"aug",count:6},
        {month:"sep",count:3},
        {month:"oct",count:7},
        {month:"nov",count:0},
        {month:"dec",count:9}
    ])

    const storedDatainitCheck = localStorage.getItem('Monthslists');
    if(storedDatainitCheck==null){
        localStorage.setItem("Monthslists",JSON.stringify(MonthsList));
    }

    function updateLocalstrg(){
    
    const storedData = localStorage.getItem('Monthslists');
    if(storedData){ 
        let userData = JSON.parse(storedData);
        console.log(userData);
        function updatemnthCount(mnt,n){
            let updateData=userData.map((data)=>{
                if(data.month==mnt){
                    return {...data,"count":n+1}
                }
                else{
                    return data;
                }
            });
            localStorage.setItem("Monthslists",JSON.stringify(updateData));
        }
        switch(date.getMonth()){
            case 0:
                let n0=userData[3].count;
                updatemnthCount("apr",n0);break;
            case 1:
                let n1=userData[3].count;
                updatemnthCount("apr",n1);break;
            case 2:
                let n2=userData[3].count;
                updatemnthCount("apr",n2);break;
            case 3:
                let n3=userData[3].count;
                updatemnthCount("apr",n3);break;
            case 4:
                let n4=userData[3].count;
                updatemnthCount("apr",n4);break;
            case 5:
                let n5=userData[3].count;
                updatemnthCount("apr",n5);break;
            case 6:
                let n6=userData[3].count;
                updatemnthCount("apr",n6);break;
            case 7:
                let n7=userData[3].count;
                updatemnthCount("apr",n7);break;
            case 8:
                let n8=userData[3].count;
                updatemnthCount("apr",n8);break;
            case 9:
                let n9=userData[3].count;
                updatemnthCount("apr",n9);break;
            case 10:
                let n10=userData[3].count;
                updatemnthCount("apr",n10);break;
            case 11:
                let n11=userData[3].count;
                updatemnthCount("apr",n11);break;
            default:console.log("invalid date");break;
        }
        console.log(userData);
    }
    else{
        localStorage.setItem("Monthslists",JSON.stringify(MonthsList));
    }
}
       //localStorage.removeItem('Monthslists');

    
    

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get("http://localhost:3001/user");
            const userData = response.data;

            const user = userData.find((user) => user.name === name && user.password === password);

            if(user) {
                if(user.name === 'admin'){
                    navigate('/home')
                } else {
                   const resp={...user,"date":date.toLocaleDateString('en-GB')}
                    axios.put(`http://localhost:3001/user/${user.id}`,resp)
                    updateLocalstrg();
                    navigate(`/userdetails/${user.id}`);
                }
                
            } else {
                console.log("invalid username and password");
            }
        } catch (err) {
            console.error('Error' , err.message);
        }
    }

  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
            <div className={styles.loginleft}>

            </div>
            <form className={styles.loginright} onSubmit={handleSubmit}>
                    <h1>User Login</h1>
                    <div>
                        <label>User Name<span>* </span> : </label>
                        <input name='name' value={name} onChange={handleChange}></input>
                    </div>
                            
                    <div>
                        <label>Password<span>* </span> : </label>
                        <input type='password' name='password' value={password} onChange={handleChange}></input>
                    </div>
                    <div className={styles.loginnavigate}>
                        <button type='submit' >Login</button>
                        <Link to={'/register'} className={styles.btn}>Register</Link>
                    </div>
                    
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
