import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () =>{

    const[customer, setCustomer ] = useState([]);


    useEffect(() =>{
//  console.log('hello');
 loadcustomerData();
 
    }, [])
    const loadcustomerData = async() =>{
        const result = await axios.get("http://localhost:3005/customer");
        setCustomer(result.data);
        


    };
    return(
        
            <div className="container py-4">
                <h1>Customer Data</h1>
                <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
  
      {customer.map((customerss, index) => ( 
    <tr>
      <td scope="row">{index + 1}</td>
      <td>{customerss.name}</td>
      <td>{customerss.username}</td>
      <td>{customerss.email}</td>
      <td>{customerss.phone}</td>
      <td><Link className='btn btn-sm btn-primary mr-5'>View</Link>
      <Link className='btn btn-sm btn-success mr-5'>Edit</Link>
      <Link className='btn btn-sm btn-danger mr-5'>Delete</Link></td>
    </tr>
  ))}
  </tbody>
</table>
            </div>
       
    );
};
export default Home; 