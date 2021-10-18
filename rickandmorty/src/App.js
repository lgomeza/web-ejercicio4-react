import './App.css';
import { CharacterCard } from './components/Card';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => setData(data.results))
  },[])


  return (
    <>
      <h1 className="px-4 pt-1">Rick and Morty</h1>
      <h4 className="px-4">Realizado por: Luis Gómez Amado</h4>
      <Row xs={1} md={3} lg={6} className="g-4 mt-2 px-4">
        {data && data.map((element) => {
          return <Col key={"col-"+element.id.toString()}>
            <CharacterCard
              key={element.id.toString()}
              image={element.image}
              name={element.name}
              gender={element.gender}
              status={element.status}
            />
          </Col>
        })}
      </Row>
    </>
  );
}

export default App;
