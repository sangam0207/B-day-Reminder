import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople]=useState(data);
  const click=()=>{
    setPeople([]);
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        
        <List people1={people} />
        <button className='btn' type='button' onClick={click}>Clear All</button>


      </section>
    </main>
  );
}

export default App;
