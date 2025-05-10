import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PokemonItem from "./PokemonItem"
import PokemonDetail from './PokemonDetail';

export default function PokemonList(){
    const [clicked, setClick] = useState(false);
    return (
      <Router>
        <div className='body'>
            <Link to="/" className="Link">
              <div className="title">
                <span className="h1" onClick={() => setClick(false)}>
                    <b>Pokemon List</b>
                </span>
              </div>
            </Link>
            {clicked ? <PokemonDetail /> : <PokemonItem  setClicked={setClick}/>}
        </div>
      </Router>
    );;
}