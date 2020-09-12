import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import api from '../../services/api';

import'./styles.css';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [animal, setAnimal] = useState('');

    
    function handleUpdatePet(e: FormEvent){
        e.preventDefault();

        api.put('pets', {
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
        <div id="page-teacher-form" className="container">
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
                            Cadastrar Pet
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;