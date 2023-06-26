import { BrowserRouter } from "react-router-dom";
import i18n from './i18n';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useState } from "react";
import LocaleContext from "./context/LocaleContext";

const App = () => {

  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (language) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <BrowserRouter>
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
      </BrowserRouter>
  </LocaleContext.Provider>
  );
}

export default App;