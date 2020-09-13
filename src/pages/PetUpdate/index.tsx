import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import api from '../../services/api';

import'./styles.css';
import { Pet } from '../../components/PetItem';

function PetForm(this: any) {
    const history = useHistory();
    const location = useLocation<Pet>();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [animal, setAnimal] = useState('');

    useEffect(() => {
        const { _id, name, animal } = location.state;

        setId(_id);
        setName(name);
        setAnimal(animal);
    }, [location]);
    
    function handleUpdatePet(e: FormEvent){
        e.preventDefault();

        api.put(`pets/${id}`, {
            name,
            animal
        }).then(() => {
            alert('Edição realizada com sucesso!');
            
            history.push('/');
        }).catch(() => {
            alert('Erro na edição!');
        });
    };

    return (
        <div id="page-pet-form" className="container">
            <PageHeader 
                title='Edição do Pet.'
            />
            <main>
                <form onSubmit={handleUpdatePet}>
                    <fieldset>
                        <legend>Formulário de edição</legend>

                        <Input 
                            name="name" 
                            label="Nome" 
                            value={name} 
                            onChange= {(e) => {setName(e.target.value)}}
                        />
                        <Input 
                            name="animal" 
                            label="Animal" 
                            value={animal} 
                            onChange= {(e) => {setAnimal(e.target.value)}}
                        />
                    </fieldset>
                    <footer>
                        <button type='submit'>
                            Editar Pet
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default PetForm;