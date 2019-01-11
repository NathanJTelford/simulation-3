import {Switch, Route, Link} from 'react-router-dom';
import dashboard from './components/Dashboard/Dashboard';
import form from './components/Form/Form';
import post from './components/Post/Post';


const routes = ()=> {
    <Switch>
        <Route to="/" component={dashboard} exact />
        <Route to='/form' component={form} />
        <Route to='/post' component={post} />
    </Switch>
}
export default routes;

