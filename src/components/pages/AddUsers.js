import React from 'react';


const AddUsers = () =>{

    return(
        <div className='container mt-5'>
         <form>
 
  <div className="row mb-4 mt-5">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" name='name' />
        <label className="form-label" for="form6Example1">Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" />
        <label className="form-label" for="form6Example2">Username</label>
      </div>
    </div>
  </div>


  <div className="form-outline mb-4">
    <input type="email" id="form6Example5" className="form-control" />
    <label className="form-label" for="form6Example5">Email</label>
  </div>

  <div className="form-outline mb-4">
    <input type="number" id="form6Example6" className="form-control" />
    <label className="form-label" for="form6Example6">Phone</label>
  </div>
  <button type="submit" className="btn btn-primary btn-block mb-4">Place order</button>
</form>
        </div>
    );
};
 export default AddUsers;

