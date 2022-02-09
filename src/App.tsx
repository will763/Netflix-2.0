import { Fragment } from 'react'
import { CarouselNetFlix } from './components/Carousel'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { GlobalStyle } from './styles/Global'

function App() {

  return (
   <Fragment>
     <GlobalStyle />
     <Header />
     <Main />
     <CarouselNetFlix />
   </Fragment>
  )
}

export default App
