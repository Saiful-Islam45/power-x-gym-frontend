import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Homepage/Header/Header';
import Body from './components/Homepage/Body/Body';
import Footer from './components/Homepage/Footer/Footer';
import OurClasses from './components/OurClasses/OurClasses';


function App() {
  return (
    <div>
      {/* <Header/>
      <Body/>
      <Footer/> */}
      <OurClasses/>
    </div>
  );
}

export default App;
