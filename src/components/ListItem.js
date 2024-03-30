import React from 'react'


const ListItem = ({name,image,age,email,id}) => {
  return (
    <div>
      <article className="person" key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age} years</p>
          </div>
        </article>
    </div>
  )
}

export default ListItem;
