import React from 'react'
import Card from '../components/Card'

const CardList = ({users}) => {
    console.log(users);
    return (
        <div className='card-list'>
                 {users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
     </div> 
    )
}

export default CardList
