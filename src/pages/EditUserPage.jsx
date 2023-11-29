import React, {useState, useEffect} from 'react'
import axios from "axios";
import UserForm from '../components/UserForm'
import { useNavigate, useParams } from "react-router-dom";
import { API_URL_USER } from "../utils/urls/index";
import Loading from '../components/Loading';

function EditUserPage() {
  const { id } = useParams();
  const [user, setUser] = useState();
  let test;
  const navigate = useNavigate();

  const loadData = () => {
    axios
      .get(API_URL_USER + id)
      .then((res) => {
        console.log(res)
        setUser(res.data);
        test = res.data;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = (data) =>{
    const newUser = {...data, "id":id}
    axios.put(API_URL_USER, newUser)
      .then((res) => {
        navigate('/')
      }).catch(err => console.log(err));
  }

  return (
    user? <UserForm handleSubmit={data => handleSubmit(data)} user={user}/> : <Loading/>
  )
}

export default EditUserPage;
