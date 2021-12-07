import React,{useState,useEffect} from "react"
import axios from "axios"
import './App.css';
import UserList from "./UserList";
import Header from "./header";

function App() {
  const [listOfUSer,setListOfUSer] = useState([])
  const FetchData = async () =>{
    const Api = "https://jsonplaceholder.typicode.com/users"
    const response = await axios.get(Api)
    setListOfUSer(response.data)
  }
  useEffect(()=>{
    FetchData()
  },[])
  return (
    <div className="App">
      <Header/>
      <div className={"user-lists"}>
      {listOfUSer.map((el) => 
      <UserList key={el.id} email={el.email} name={el.name} phone={el.phone} user={el.username} />)}
      </div>
      </div>
    // </div>
  );
}

export default App;