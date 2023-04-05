import { useState } from 'react'
import { Button } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import styles from './style';


function App() {

  return (
      <section className='w-full bg-cream relative overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                <Route path="/kontakt" element={<ContactPage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </section>
  )
}

export default App
