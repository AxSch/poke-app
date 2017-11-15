import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

    return (
            <div>
                <div  onClick={() => handleOnClick(id)}
                            style={style} className="poke-cell">
                </div>
                <p className="poke-cell-p">#{id}</p>
            </div>
        );
};

export default PokeCell;