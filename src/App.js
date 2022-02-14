import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/home-page/home-page';
import Header from './components/header/header.component';
import AboutPage from './pages/about/about-page.component';
import Footer from './components/footer/footer.component'

import { GlobalProvider } from './GlobalContext';
import './App.css';

export const ResInfoContext = React.createContext()

const sayHello = () => {
  console.log('HELLO')
}
// THIS IS A TEST
// THIS IS TEST 2
const App = () => {

  const location = useLocation()

  return (
    <div className="App">
      <GlobalProvider>
        <Header/>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path='/' component={HomePage}/>
              <Route path='/about' component={AboutPage}/>
            </Switch>
          </AnimatePresence>
        <Footer/>
      </GlobalProvider>
    </div>
  );
}

export default App;
