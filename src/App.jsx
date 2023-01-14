import React from 'react'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import Footer from './Footer'
import NavBar from './NavBar'
import Skills from './Skills'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutme' element={<AboutMe />} />
                    <Route path='/contacts' element={<Contact/>} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
