import React from 'react'
import Chekbox from './Chekbox'
const Form = () => {
  return (
    <form>
      <Chekbox  label={'I read the term of the app'} checked={false}/>
      <Chekbox label={'I accept the term of the app' } checked={false}/>
      <Chekbox label={'I want to get the weekly newsletter'}checked={true}/>
      <Chekbox label={'I want to get sales and offers'} checked={true}/>
    </form>
  )
}

export default Form