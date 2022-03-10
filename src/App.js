import { useState } from 'react';

function App() {
  const [name, setName] = useState('Yiğit');
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(['Ahmet', 'Murat']);
  const [address, setAddress] = useState({ title: 'Istanbul', zip: 34765 });

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName('Ahmet')}>Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>
      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <br />

      <button onClick={() => setFriends([...friends, 'Ayşe'])}>
        Add new friend
      </button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br />

      <button onClick={() => setAddress({ title: 'Izmir', zip: 35130 })}>
        Change address
      </button>
      <button onClick={() => setAddress({ ...address, title: 'Izmir' })}>
        Change title
      </button>
      <button onClick={() => setAddress({ ...address, zip: 35130 })}>
        Change zip
      </button>
    </div>
  );
}

export default App;
