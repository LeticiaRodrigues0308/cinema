import { BrowserRouter, Switch, Route } from 'react-router-dom';


import SelectMovie from './pages/selectMovie';

import PurchaseCompleted from './pages/purchaseCompleted/index';




<BrowserRouter>
    <Switch>
        <Route path="/select" exact={true} component={SelectMovie} />
        <Route path="/purchase-completed" component={PurchaseCompleted} />
    </Switch>
</BrowserRouter>