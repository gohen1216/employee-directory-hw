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
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  
  {users.map(value=>{return <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>})}
</Table>
    </div>
  );
}

export default App;
