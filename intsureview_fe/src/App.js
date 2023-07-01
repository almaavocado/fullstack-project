import React from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from './components/Footer';
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div className="App">
      <div className="w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
             <Header />
             <Form />
             <Footer />
          </div>
        </div>
      </div>  
     </div>
  );
}

export default App;
