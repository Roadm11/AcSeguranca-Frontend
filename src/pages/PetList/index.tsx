import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PetItem, { Pet } from '../../components/PetItem';

import api from '../../services/api';

import'./styles.css';

interface InterfacePet {
    _id: string;
    name: string;
    animal: string;
};

function PetList() {
    const [pets, setPets] = useState<InterfacePet[]>([] || null);

    useEffect(() => {
        api.get('pets').then(response => {
            setPets(response.data);
        });
    }, [pets]);

    return (
        <div id="page-pet-list" className="container">
            <main>
                {pets.map((pet: Pet) => {
                    return <PetItem key={pet._id} pet={pet} />
                })}
            </main>

            <Link to="/create">Cadastrar novo animal</Link>
        </div>
    )
}

export default PetList;