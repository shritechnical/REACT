import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserDocument extends Component{
    Upload(e){
        console.warn(e.target.files);
        const files = e.target.files;
        const FormData =new FormData();
        FormData.append('img',files[0]);
        fetch('F:/xampp7.4/htdocs/projectreact/public/documentStore',
        {
            method:"Post",
            body:FormData
        }).then((resp) => {
            resp.json().then((result)=>{
                console.warn("result". result)
            })
        })
    }

render(){
    return(      
    <div className='container mt-5'>
    <h2>Upload Docoment</h2>
    <input type='file' onChange={(e)=> this.Upload(e)} name='img' />
    </div> 
    )
}
}
export default UserDocument;