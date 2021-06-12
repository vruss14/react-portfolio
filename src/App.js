import React from "react";
import ContentContainer from "./components/ContentContainer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer"
import Small from "./components/Small"
 
function App() {
  return (
    <div>
      <ContentContainer>
        <Header />
        <Main>
          <About />
          <Project />
        </Main>
        <Footer />
      </ContentContainer>
      <Small />
    </div>


  );
}

export default App;
