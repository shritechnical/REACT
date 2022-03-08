import axios from 'axios';
import React,{useState} from 'react';


const AddUsers = () =>{
const[user, setUser] = useState({
  fullname:"",
  username:"",
  email:"",
  phone:""
});
const{fullname ,username, email, phone} = user; 
const onInputChange = e=>{
setUser({...user,[e.target.name]:e.target.value});
};
const onSubmit = async e =>{
  e.preventDefault();
  await axios.post('http://localhost:3005/customer', user);
  alert('data insert');
};
    return(
        <div className='container mt-5'>
         <form onSubmit={e => onSubmit(e)}>
 
  <div className="row mb-4 mt-5">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" name='fullname' value={fullname} onChange={e => onInputChange(e)} />
        <label className="form-label" for="form6Example1">Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" name='username' value={username} onChange={e => onInputChange(e)} />
        <label className="form-label" for="form6Example2">Username</label>
      </div>
    </div>
  </div>


  <div className="form-outline mb-4">
    <input type="email" id="form6Example5" className="form-control" name='email' value={email} onChange={e => onInputChange(e)} />
    <label className="form-label" for="form6Example5">Email</label>
  </div>

  <div className="form-outline mb-4">
    <input type="number" id="form6Example6" className="form-control" name='phone' value={phone} onChange={e => onInputChange(e)} />
    <label className="form-label" for="form6Example6">Phone</label>
  </div>
  <button className="btn btn-primary btn-block mb-4">Place order</button>
</form>
        </div>
    );
};
 export default AddUsers;

