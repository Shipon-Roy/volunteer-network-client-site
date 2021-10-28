import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {user} = useAuth();
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proced = window.confirm('Registation Sucessfully')
        if(proced){
            fetch('https://thawing-tundra-98270.herokuapp.com/register', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                reset();
            })
        }
    };
    return (
        <div>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-5">Register as a Volunteer</h3>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Full Name" />
                <input defaultValue={user.email} {...register("email")} placeholder="E-mail" />
                <input type="date" {...register("date")} placeholder="Date" />
                <input {...register("books")} placeholder="Organize books at the library" />
                <input type="submit" value="Register" />
                <p>Already I have a account? <Link to="/login">LogIn</Link></p>
            </form>
        </div>
    );
};

export default Register;