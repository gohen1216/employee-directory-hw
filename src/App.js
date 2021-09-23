import { useEffect, useState } from "react";
import{Table}from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import api from"./utils/API"
function App() {
  const[users,setusers]=useState([])
  useEffect(()=>{
  api.search().then(res=>{
    console.log (res)
    setusers(res.data.results)
  })
  })
  return (
    <div className="App">
  <Table striped bordered hover>
  <tr>
    <th>First</th>
    <th>Last</th>
    <th>Email</th>
    <th>Locations</th>
  </tr>
  
  {users.map(value=>{return <tr>
    <td>{value.name.first}</td>
    <td>{value.name.last}</td>
    <td>{value.email}</td>
    <td>{value.location.city}</td>
  </tr>})}
</Table>
    </div>
  );
}

export default App;
