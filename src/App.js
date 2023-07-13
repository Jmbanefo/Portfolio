import React, {useState} from "react";
import Header from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Contact";
import Page from './components/Portfolio';

function App() {

  const [pages] = useState([
    {name: 'About Me'}, {name: 'Portfolio'}, {name: 'Contact'}, {name: 'Resume'}

  ])

const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Navbar pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Navbar>
      <Header/>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;