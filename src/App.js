import React from 'react'
import GlobalStyle from './Themes/globalStyles'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/WhyChooseSection'
import ThirdSection from './Components/LatestArticle'
import Contacts from './Components/Contact'
import NavigationBar from './Components/NavigationBar'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <NavigationBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Contacts />
    </div>
  )
}

export default App
