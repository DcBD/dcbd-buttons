import React from 'react'

import { Button, ButtonPrimary, ButtonSecondary, ButtonSuccess, ButtonDanger } from 'dcbd-buttons'


import 'dcbd-buttons/dist/index.css'


const App = () => {
  
 

  return (
    <div>

      <h1>
        Default button
      </h1>
      <Button text="Default button" variety="default" classNames={[]} />
      <ButtonPrimary />
      <ButtonSecondary />
      <ButtonSuccess />
      <ButtonDanger />
      <div>

      </div>
  
    </div>


  )
}

export default App
