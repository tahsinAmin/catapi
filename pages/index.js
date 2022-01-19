import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Container from "components/Container";

const fruits = ["Apple", "Orange", "Grape", "Lemon", "Lima", "Blueberry"];

export default function Home() {
  const [selectedFruit, setSelectedFruit] = useState("Apple");

  return <Container>
    <Listbox as='div' value={selectedFruit} onChange={setSelectedFruit}>
      
    </Listbox>
  </Container>
