import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Inicio() {
  const [todoslospokes, setTodoslospokes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`)
      .then(response => response.json())
      .then(responseData => setTodoslospokes(responseData.results))
      .catch(error => console.error("Error:", error));
  }, []);

  let resultados = todoslospokes;

  if (busqueda.trim().length >= 3 && isNaN(busqueda)) {
    resultados = todoslospokes.filter(pokemon =>
      pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  if (todoslospokes.length === 0) return <p>Cargando...</p>;

  return (
    <>
      <input
        type="text"
        placeholder="Buscar pokemon"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} 
        className="c-buscador"
      />

      {resultados.map((pokemon) => (
        // AQUÍ ESTÁ LA CLAVE: Asegúrate de que las comillas invertidas (`) estén bien puestas.
        <div key={pokemon.name} onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
          <p>{pokemon.url.split('/')[6]}</p>
          <h2>{pokemon.name}</h2>
          <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.url.split('/')[6]}.png`} 
            alt={pokemon.name} 
          />
        </div>
      ))}
    </>
  );
}

export default Inicio;