import "./App.css";
import { useState } from "react";

function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        email: Email,
        password: Password,
      }),
    });
    const data = response.json();
    console.log(data);
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerUser} className="flex flex-col max-w-[40%]">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

export default App;
