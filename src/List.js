import React from 'react';
//people1 is an argument which is equal to people(array of object)define in App.js
const List = ({people1}) => {
  return (
    <>
    {people1.map((person)=>{
      return(
        <article key={person.id} className='person'>
          <img src={person.image} alt={person.name}></img>
           <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
             
           </div>

        </article>
      )

    })}
    </>
  );
};

export default List;
