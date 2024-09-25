/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

const FormComponent = ({ onSubmit }) =>{
    const [formData, setFormData] = useState({
        name: '',
        age:'',
        email:''
    });


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" >
        <form onSubmit={handleSubmit} className="w-50 p-4 border rounded" style={{ width: '700%', height: '80%', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <div className="form-group mb-3">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange}/>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" className="form-control" value={formData.age} onChange={handleChange}/>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange}/>
            </div>

    <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
        </form>
    </div>

    );
};

export default FormComponent;
