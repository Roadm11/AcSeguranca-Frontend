import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PetList from './pages/PetList';
import PetForm from './pages/PetForm';

function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' exact component={PetList} />
            <Route path='/create' exact component={PetForm} />
            <Route path='/update' exact component={PetList} />
        </BrowserRouter>
    )
}

export default Routes;