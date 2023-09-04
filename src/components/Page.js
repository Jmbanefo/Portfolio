import React from 'react'
import PageContent from './PageContent'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Portfolio from './Portfolio'
import '../styles/Page.css';

const styles = {
    sectionStyles: {
      backgroundColor: '#FFFF00',
      width: '150px',
      margin: '30px',
    },
  };





const Page = ({currentPage}) => {

    const renderPage = () => {

        switch(currentPage.name) {
            case "About Me":
                return <About />
            case "Portfolio":
                return <Portfolio />
            case "Contact":
                return <Contact />
            case "Resume":
                return <Resume/>

            default: 
            return <About />
        }
    }

  return (
    <div>
      <h2 style={styles.sectionStyles}>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </div>
  )
}

export default Page