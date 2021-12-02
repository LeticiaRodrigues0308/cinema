import { BrowserRouter, Switch, Route } from 'react-router-dom';


import SelectMovie from './pages/selectMovie';
import Home from './pages/home';
import PurchaseCompleted from './pages/purchaseCompleted/index';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/select" component={SelectMovie} />
                <Route path="/purchase-completed" component={PurchaseCompleted} />
            </Switch>
        </BrowserRouter>
    )
}
