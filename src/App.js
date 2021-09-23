import { useState } from "react";
import{Table}from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";

function App() {
  const[users,setusers]=useState([])
  return (
    <div className="App">
  <Table striped bordered hover>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</Table>
    </div>
  );
}

export default App;
