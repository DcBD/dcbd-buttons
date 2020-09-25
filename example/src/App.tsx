import React from 'react'

import { Button, ButtonPrimary, ButtonSecondary, ButtonSuccess, ButtonDanger } from 'dcbd-buttons'



import 'dcbd-buttons/dist/index.css'


const App = () => {



  return (
    <div style={{ outline: "100px gray solid" }}>




      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div style={{ width: '50vw', minHeight: "100vh", padding: '1rem' }}>

          <div>
            <Button text="Default button" variety="default" classNames={[]} />
            <ButtonPrimary />
            <ButtonSecondary />
            <ButtonSuccess />
            <ButtonDanger />
          </div>

          <div>
            <ButtonDanger text='Button - lg' size='lg' />
            <ButtonSuccess text='Button - md' size='md' />
            <ButtonSecondary text='Button - sm' size='sm' />
            <ButtonPrimary text='Button - xs' size='xs' />
          </div>


          <div>
            <Button text="Default button" type="outlined" variety="default" classNames={[]} />
            <ButtonPrimary type="outlined" />
            <ButtonSecondary type="outlined" />
            <ButtonSuccess type="outlined" />
            <ButtonDanger type="outlined" />
          </div>

          <div>
            <Button text="Text button" type="text" variety="default" classNames={[]} />
          </div>


          <div>
            <Button icon="&#x274C;" text="Leading icon" type="text" variety="default" />
            <Button icon="&#x274C;" text='' type="text" variety="default" />
            <ButtonDanger icon="&#x274C;" text="" type="outlined" />
            <ButtonDanger icon="&#x274C;" text='Button - lg' size='lg' />
          </div>

        </div>

        <div style={{ width: '50vw', minHeight: "100vh", backgroundColor: "#0e0e10", padding: '1rem' }}>

        <div>
            <Button text="Default button" variety="default" classNames={[]} />
            <ButtonPrimary />
            <ButtonSecondary />
            <ButtonSuccess />
            <ButtonDanger />
          </div>

          <div>
            <ButtonDanger text='Button - lg' size='lg' />
            <ButtonSuccess text='Button - md' size='md' />
            <ButtonSecondary text='Button - sm' size='sm' />
            <ButtonPrimary text='Button - xs' size='xs' />
          </div>


          <div>
            <Button text="Default button" type="outlined" variety="default" classNames={[]} />
            <ButtonPrimary type="outlined" />
            <ButtonSecondary type="outlined" />
            <ButtonSuccess type="outlined" />
            <ButtonDanger type="outlined" />
          </div>

          <div>
            <Button text="Text button" type="text" variety="default" classNames={[]} />
          </div>


          <div>
            <Button icon="&#x274C;" text="Leading icon" type="text" variety="default" />
            <Button icon="&#x274C;" text='' type="text" variety="default" />
            <ButtonDanger icon="&#x274C;" text="" type="outlined" />
            <ButtonDanger icon="&#x274C;" text='Button - lg' size='lg' />
          </div>

        </div>
      </div>
    </div >


  )
}

export default App
