import React from 'react'
import axios from "axios";
import UserForm from '../components/UserForm'
import { useNavigate } from "react-router-dom";
import { API_URL_USER } from "../utils/urls/index";

function CreateUserPage() {
  const navigate = useNavigate();

  const handleSubmit = (data) =>{
    axios.post(API_URL_USER, data)
      .then((res) => {
        navigate('/')
      }).catch(err => console.log(err));
  }

  return (
    <UserForm handleSubmit={data => handleSubmit(data)}/>
  )
}

export default CreateUserPage