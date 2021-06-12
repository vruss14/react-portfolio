import React from "react";
import ContentContainer from "./components/ContentContainer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
 
function App() {
  return (
    <ContentContainer>
      <Header />
      <Main>
        <About />
      </Main>
    </ContentContainer>

  );
}

export default App;
