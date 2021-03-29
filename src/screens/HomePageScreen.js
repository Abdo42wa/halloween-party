import axios from 'axios'
import React,{useEffect,useState} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchComponent';

const HomePageScreen = () => {
    const [users,setUsers] =useState([]);
    const [search,setSearch] = useState('');
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data);
        })

        
        
    },[])

    const handelChange = e => {
        setSearch(e.target.value)
        
    }
    const filteredUser = users.filter(user => 
        user.name.toLowerCase().includes(search.toLocaleLowerCase())    
    )
    
    return (
        <div>
        <h1>Halloween Party</h1>
        <SearchBox 
                placeholder ='Search user' 
                value={search}
                handelChange={handelChange} 
                />
            <CardList users={filteredUser} />
            {filteredUser.length === 0 && <h1 style={{color: 'red'}}>No such user exist :(</h1>}
        </div>
    )
}

export default HomePageScreen
