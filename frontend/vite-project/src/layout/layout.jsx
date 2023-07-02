import React from 'react';

import header from "../components/Header/header";
import footer from '../components/Footer/footer';
import routers from "../routes/Routers";

const layout = () => {
  return <>
    <Header />
    <main>
      <Routers />
    </main>
    <Footer />
  </>
  );
};

export default layout
