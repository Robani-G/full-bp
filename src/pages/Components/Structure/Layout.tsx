import {FC, ReactElement} from 'react'
import Footer from './Footer';
import Header from './Header';
interface Layoutprop{
    children:ReactElement;
}

const Layout:FC<Layoutprop>=({children})=> {
  return (
    <>
    <div className='container mx-auto'>
    <Header/>
    {children}
    <Footer/>
    </div>
   
    </>
    
  )
}

export default Layout;