import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Base({children}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/> 
    </>
  )
}

export default Base
