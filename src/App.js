import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home-page/home-page';
import Header from './components/header/header.component';
import AboutPage from './pages/about/about-page.component';

import './App.css';




const App = () => {

 
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
      </Switch>
    </div>
  );
}

export default App;
