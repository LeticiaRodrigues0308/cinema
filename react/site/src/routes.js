import { BrowserRouter, Switch, Route } from 'react-router-dom';


import SelectMovie from './pages/selectMovie';




<BrowserRouter>
    <Switch>
        <Route path="/select" exact={true} component={SelectMovie} />
    </Switch>
</BrowserRouter>