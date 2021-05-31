import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Articles from './components/Articles'

import ConteoState from './context/ConteoState'
import BlogState from './context/BlogState'

function App() {
  return (
    <>
    <BlogState>
      <ConteoState>


        <Header />
        <Main />
        <Articles />

      </ConteoState>
    </BlogState>
    </>
  );
}

export default App;
