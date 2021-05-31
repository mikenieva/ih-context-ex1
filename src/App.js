import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Main from './components/Main'


import ConteoState from './context/ConteoState'

function App() {
  return (
    <>
    <ConteoState>
      <Header />
      <Main />
    </ConteoState>
    </>
  );
}

export default App;
