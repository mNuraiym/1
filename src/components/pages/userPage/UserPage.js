import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { UsersBlock } from '../../navBar/usersBlock/UsersBlock';



export const UserPage = () => {
    const [User, setUser] = useState([]);
    const navigate = useNavigate();
    const goToBack = () => {
      navigate(-1);
    };

const url = "https://jsonplaceholder.typicode.com/users";

useEffect(() => {
  axios
    .get(url)
    .then((resp) => resp.data)
    .then((data) => setUser(data));
}, []);


return (
    <>
        <button onClick={goToBack}>back</button>
        <h1>UserPage</h1>
        {User.map((item, index) => (
        <UsersBlock item={item} key={index} />
        ))}
    </>
    );
}