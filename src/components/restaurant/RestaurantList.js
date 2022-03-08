import React from 'react';
class RestaurantList extends React.Component{
    constructor(){
        super();
        this.state={
            list:null
        }
    }
    componentDidMount(){
        fetch('http://localhost:3009/list').then((response)=>{
            response.json().then((result)=> {
                console.table(result)
                this.setState({list:result})
            })
        })
    }
    render(){
        return(
            <div className='container mt-5'><h2>Restaurant List</h2>
            
          {
              
              this.state.list?
              <table className="table table-dark">
              <thead>
                <tr>
             
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                 
                </tr>
              </thead>
              <tbody>

                  {this.state.list.map((item, i) =>
                   <tr>
                   <td>{item.name}</td>
                   <td>{item.username}</td>
                   <td>{item.email}</td>
                   <td>{item.phone? item.phone: 'not data'}</td>
                 </tr>
                  
                  )}
 </tbody>
</table>
              :<p>Please wait....</p>
          }
            </div>
        )
    }
}
export default RestaurantList;