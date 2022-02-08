import { Fragment, useState } from 'react'
import { GlobalStyle } from './styles/Global'

function App() {

  return (
   <Fragment>
     <GlobalStyle />
     <div>
       <img src="assets/naruto.jpg" alt="naruto" width={200} height={200} />
     </div>
   </Fragment>
  )
}

export default App
