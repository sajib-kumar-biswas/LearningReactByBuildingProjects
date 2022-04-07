import React,{useState} from 'react'

import List from './component/List'
import data from './component/Data'
function App() {
  const [people,setPeople] = useState(data);
  return (
    <div className="App">
        <h1>Birthday Remainder</h1>
        <h3>Wish Your Buddies</h3>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button onClick={()=>{setPeople([])}}>clear all</button>
        </section>
    </div>
  );
}

export default App;
