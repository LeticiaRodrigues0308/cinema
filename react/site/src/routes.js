import { BrowserRouter, Switch, Route } from 'react-router-dom';


import SelectMovie from './pages/selectMovie';
import Home from './pages/home';
import PurchaseCompleted from './pages/purchaseCompleted/index';
import ticketDate from './pages/ticketDate/index';
// import LanguageMovie from './pages/languageMovie';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/select" component={SelectMovie} />
                <Route path="/purchase-completed" component={PurchaseCompleted} />
                <Route path="/ticketDate" component={ticketDate} />
                {/* <Route path="/languageMovie" component={LanguageMovie}/> */}
            </Switch>
        </BrowserRouter> 
    )
}
