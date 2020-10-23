import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const onHandleSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        fetch('http://localhost:5000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-3 orderList">
                    <Link to="/serviceList"><h4>Service list</h4></Link>
                    <Link to="/addService"><h4>Add Service</h4></Link>
                    <Link to="/makeAdmin"><h4>Make Admin</h4></Link>
                </div>
                <div className="col-md-9 d-flex justify-content-center">
                    <form onSubmit={onHandleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service Title</label>
                            <input type="text" onBlur={handleBlur} class="form-control" name="title" placeholder="Enter Service title name" />
                        </div>
                        <div class="file">
                            <label for="exampleInputPassword1">File</label>
                            <input type="file" onChange={handleFileChange} class="form-control" name="file" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input type="text" onBlur={handleBlur} class="form-control" name="description" placeholder="Description" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;