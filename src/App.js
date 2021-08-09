import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const nayok=['api','naki','saki']
  const nayok=[{id:1,name:'nimi',age:23},
               {id:2,name:'hini',age:56},
              {id:3,name:'gubu',age:34}]
              console.log(nayok);
  
  const [users,setUsers]=useState([])            

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])            
  return (
    <div className="App">
      <header className="App-header">
      {/* {nayok.map((person)=>{
        return(<div>
          <p>{person}</p>
          </div>)
      })} */}

      {users.map((user)=>{
        return(<>
        <User user={user} />
        </>)
      })}

      {nayok.map((person)=>{
        const{id,name,age}=person;
        const personStyle={
          border:'2px solid red',
          margin:'4px',
          width:'200px'
        }
        return(
        // <div key={id} style={personStyle}>
        //   <h5>{name}</h5>
        //   <p>{age}</p>
        // </div>
        <div>
          {/* <Person key={person.id}{...person}/> */}
          <Person person={person} />
        </div>
        )

      })}
        
      </header>
    </div>
  );
}

function User(props){
  console.log(props)
  return(<>
   <div key={props.user.id}>
     <p>{props.user.name}</p>
   </div>
  </>)
}

function Person(props){
  // console.log(props);
   const personStyle={
          border:'2px solid red',
          margin:'4px',
          width:'200px'
        }
  return (<>
  <div style={personStyle}>
    <h5>{props.person.name}</h5>
    <p>{props.person.age}</p>
  </div>
  </>) 
}

export default App;
