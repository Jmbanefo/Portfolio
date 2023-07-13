import React, { useEffect } from 'react';
import '../styles/Navbar.css';




const styles = {
  text: {
    color: "black",
    fontSize: "20px",
  }
}

function Navbar(props) {

  const {

    pages = [],

    setCurrentPage,

    currentPage
  } = props


  useEffect(() => {

    document.title = currentPage.name
  })

  return (

    <nav className="navbar">
      {pages.map((page) =>
      (
        <button style={styles.text} onClick={() =>
          setCurrentPage(page)
        }>{page.name}</button>
      )
      )}
    </nav>

  );
}

export default Navbar;