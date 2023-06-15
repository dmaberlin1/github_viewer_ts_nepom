import React from 'react';
import './App.css';
import Container from "./components/Container/Container";
import TheHeader from "./components/TheHeader/TheHeader";
import Search from "./components/Search/Search";
import UserCard from "./components/UserCard/UserCard";
import {defaultUser} from "./mock";

function App() {
  return (
    <Container>
    <TheHeader></TheHeader>
      <Search hasError={true} onSubmit={()=>{}}></Search>
      <UserCard {...defaultUser}/>
    </Container>
  );
}

export default App;
