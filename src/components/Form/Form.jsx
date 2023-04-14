import React, { useState } from "react";
import validation from './validation';

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [property]: value});
        validation({...userData, [property]: value}, errors, setErrors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input name="email" value={userData.email} onChange={handleChange} type="text" placeholder="Ingresa tu email..." />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input name="password" value={userData.password} onChange={handleChange} type="text" placeholder="Password" />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    )
}