
import './App.css'
import '@shopify/polaris/build/esm/styles.css';
import HomePage from './pages/HomePage';
import {Routes ,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

    return (
      <div>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>

      <Route exact path='/' element={<HomePage/>}/>
      

      </Routes>
      </BrowserRouter>
      </Provider>
      </div>
      );
      
      
  
}

export default App
