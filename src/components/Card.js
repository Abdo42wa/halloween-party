import React from 'react'

const Card = ({user}) => {
    return (
        <div className='card-container'>
        <img alt={user.name} src={`https://robohash.org/${user.id}?set=set2`} />
        <h2> {user.name}</h2>
        <p> {user.email}</p>
    </div>
    )
}

export default Card
