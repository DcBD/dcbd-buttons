import React from 'react'

import { Button, ButtonPrimary, ButtonSecondary, ButtonSuccess, ButtonDanger } from 'dcbd-buttons'


import 'dcbd-buttons/dist/index.css'


const App = () => {



  return (
    <div>

      <div>
        <h1>
          Default button
        </h1>

        <div>
          <Button text="Default button" variety="default" classNames={[]} />
          <ButtonPrimary />
          <ButtonSecondary />
          <ButtonSuccess />
          <ButtonDanger />
        </div>

        <h2>
            Different sizes
        </h2>
        <div>
          <ButtonDanger text='Button - lg' size='lg' />
          <ButtonSuccess text='Button - md' size='md' />
          <ButtonSecondary text='Button - sm' size='sm'/>
          <ButtonPrimary text='Button - xs' size='xs'/>
          


        </div>
      </div>




      <div>

      </div>

    </div>


  )
}

export default App
