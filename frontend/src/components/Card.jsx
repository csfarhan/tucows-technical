import React from 'react'
import {Container} from 'react-bootstrap'

const Card = ({id, name, food, handleDelete}) => {
  return (
    <div style={{display:'flex', width: '300px', padding:'10px'}}>
        <div className="card w-100">
            <div className="card-body">
                <div>
                    <ul>
                        Name: {name}
                        <br/>
                        Favourite Food: {food}
                    </ul>
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default Card;
