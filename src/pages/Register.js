import React, { useState } from 'react'

export default function Register() {

  const[username,setusername]=useState('anil');
  const[email,setemail]=useState('anil13@gmail.com');
  const[password,setpassword]=useState('A1234');

  function anil(){

    alert('okkk')
    console.log(username)
    console.log(email)
    console.log(password)

    let payload={

      "username":username,
      "email":email,
      "password":password
    }
    console.log(payload)

    fetch("http://localhost:1337/api/engineers",{

      method:'POST',

      headers:{

        'Content-Type':'application.json',

      },

      body:JSON.stringify(payload)
    }).then((res)=>{

      return res.json();
    }).then((data)=>{

      console.log(data)
      if(data.jwt){

        alert('Registered sucessfully')
      }
    }).catch((err)=>{

      console.log(err)
    })

  }
  return (
    <>
    <h1>Register</h1>
    {username}
    <form>
    
    name:<input type="text" name="username" value={username} onChange={(e)=>{setusername(e.target.value)}} id="username" placeholder='username'/>
    email:<input type="email" name="email" value={email} id="email" onChange={(e)=>{setemail(e.target.value)}} placeholder='email_id'/>
    password:<input type="password" name="password" value={password} id="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder='password'/>
    <input type="button" value="submit" name="submit" id="submit" onClick={anil} />
    </form>
    </>
  )
}
