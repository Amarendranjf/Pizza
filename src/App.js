import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Home from './screens/Home';
import store from './store';
import { Provider } from 'react-redux';
import Cart from './screens/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
     <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/cart" element = {<Cart/>}/>
        </Routes>
      </Provider>
    </Router>
    </div>
  );
}

export default App;
