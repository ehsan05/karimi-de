import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Layout from './layouts/Layout'



const routes = [
    { 
        path: '/', 
        element: <Layout />, 
            children: [ 
                { index: true, element: <Home />},
                { path: 'about', element: <About />},
                { path: 'projects', element: <Projects />},
                { path: 'contact', element: <Contact />}]}
            
]

function AppRoutes() {
    return useRoutes(routes)
} 


export default function App(){

    return (
      
             <div id='app'>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </div>
    )
}