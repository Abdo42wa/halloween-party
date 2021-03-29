import axios from 'axios'
import React,{useEffect,useState} from 'react'
import CardList from '../components/CardList'

const HomePageScreen = () => {
    const [users,setUsers] =useState([]);
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data);
        })

        
        
    },[])
    
    return (
        <div>
        <h1>Halloween Party</h1>
      
            <CardList users={users} />
        </div>
    )
}

export default HomePageScreen
