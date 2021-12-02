import { BrowserRouter, Switch, Route } from 'react-router-dom';


import SelectMovie from './pages/selectMovie';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/select" component={SelectMovie} />
            </Switch>
        </BrowserRouter>
    )
}