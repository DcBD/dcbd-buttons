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
          <ButtonSecondary text='Button - sm' size='sm' />
          <ButtonPrimary text='Button - xs' size='xs' />
        </div>
        <h2>
          Outlined buttons
        </h2>

        <div>
          <Button text="Default button" type="outlined" variety="default" classNames={[]} />
          <ButtonPrimary type="outlined"/>
          <ButtonSecondary type="outlined"/>
          <ButtonSuccess type="outlined"/>
          <ButtonDanger type="outlined"/>
        </div>

        <h2>
          Text
        </h2>

        <div>
          <Button text="Text button" type="text" variety="default" classNames={[]} />
        </div>

        <h2>
          Icon
        </h2>

        <div>
          <Button icon="&#x274C;" text="Leading icon" type="text" variety="default" />
          <Button icon="&#x274C;" text='' type="text" variety="default" />
          <ButtonDanger icon="&#x274C;" text="" type="outlined"/>
          <ButtonDanger  icon="&#x274C;"  text='Button - lg' size='lg' />
          
        </div>

      </div>




      <div>

      </div>

    </div>


  )
}

export default App
