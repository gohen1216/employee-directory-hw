import { useEffect, useState } from "react";
import{Table,Form}from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import api from"./utils/API"
function App() {
  const[users,setusers]=useState([])
  const[userinput,setuserinput]=useState("")
  useEffect(()=>{
  api.search().then(res=>{
    console.log (res)
    setusers(res.data.results)
  })
  },[])
  return (
    <div className="App">
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Search by last name</Form.Label>
    <Form.Control value={userinput} onChange={e=>setuserinput(e.target.value)} type="input" placeholder="Enter Cole" />
    <Form.Text className="text-muted">
      search user directory
    </Form.Text>
    <Table striped bordered hover>
  <tr>
    <th>First</th>
    <th>Last</th>
    <th>Email</th>
    <th>Locations</th>
  </tr>
  
  {users.filter(value=>value.name.last.includes(userinput)).map(value=>{return <tr>
    <td>{value.name.first}</td>
    <td>{value.name.last}</td>
    <td>{value.email}</td>
    <td>{value.location.city}</td>
  </tr>})}
</Table>
  </Form.Group>
  </Form>

  
    </div>
  );
}

export default App;
