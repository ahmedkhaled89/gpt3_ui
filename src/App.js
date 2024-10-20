import {
  Features,
  Blog,
  Header,
  WhatGPT3,
  Possibility,
  Footer,
} from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
