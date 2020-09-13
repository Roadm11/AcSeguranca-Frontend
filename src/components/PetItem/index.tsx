import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export interface Pet {
    _id: string,
    name: string,
    animal: string;
}

interface PetItemProps {
    pet: Pet;
}

const PetItem: React.FC<PetItemProps> = ({ pet }) => {
    async function handleDeletePet(id: string) {
        await api.delete(`/pets/${id}`);
    };

    return(
        <article className="pet-item">
            <div>
                <strong>{pet.name}</strong>
                <span>{pet.animal}</span>
            
                <div>
                    <NavLink exact to={{
                        pathname: "/update",
                        state: { pet: pet }
                        }}
                    >
                        Editar
                    </NavLink>
                    <button type="button" onClick={() => handleDeletePet(pet._id)}>Deletar</button>    
                </div>
            </div>
        </article>
    )
}

export default PetItem;