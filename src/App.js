import "./App.css";

import User from "./components/User";

const friends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Mehmet" },
  { id: 3, name: "Murat" },
];

function App() {
  return (
    <>
      <User
        name="Yiğit"
        surname="Yüre"
        age={25}
        isLoggedIn={true}
        friends={friends}
        address={{ title: "Izmir", zip: 35000 }}
      />
    </>
  );
}

export default App;
