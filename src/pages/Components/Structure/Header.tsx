import Link from 'next/link';
import React, { FC, useState } from 'react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/solid'
import { useSession, signIn, signOut } from "next-auth/react"



type navprop={
    title:string;
    Path:string;
    

}
const navlink:((navprop)&{id:number}) []=[
    {id:1, title:"Home",Path:"./#"},
    {id:2, title:"Docs",Path:"./#"},
    {id:3, title:"About us",Path:"./components/main/structure/about"},
    {id:4, title:"Contact Us",Path:"./components/main/structure/Contact"},

   
]
const Navlinks:FC<navprop>=({title,Path})=>{
    return(
        <Link className='text-gray-700 font-sans py-4 border-b-2
 hover:text-black' href={`${Path}`}>{title}</Link>
    )

}


function Header() {
    const [toggle, setToggle] = useState(false);
    const { data: session } = useSession()
    return (
    <nav className='flex  justify-between items-center  p-6 '>
      <div>
      
<a href="#" className="-m-1.5 p-1.5">
      <h1 className='font-bold'>[Logo]</h1>
      </a>
      </div>
        <ul className='hidden sm:flex space-x-4  font-semibold'>
            {navlink.map((nav)=>(
                <Navlinks
                key={nav.id}
                title={nav.title}
                Path={nav.Path}
                />
            ))}
           
        </ul>
        <div className='sm:hidden  '>
           {toggle?<button onClick={()=>setToggle((prev)=>!prev)} className="border borrder-2"><XMarkIcon className="h-7 w-7" /> </button>:<button onClick={()=>setToggle((prev)=>!prev)}><Bars3Icon className='w-7 h-7'/></button>}
           <div className={`${toggle?'flex':'hidden'}
     p-6 bg-white
      absolute top-20 right-0 mx-4 my-2 w-full  items-center justify-center  min-w-[140px]   `}
>
<ul className={`list-none flex flex-col font-sans  justify-end items-center p-3 font-semibold `}>
{navlink.map((nav)=>(
           <Navlinks
        key={nav.id}
           Path={nav.Path}
           title={nav.title}
           />
        ))}
</ul>
    </div>
    
        </div>
       
    </nav>
  )
}

export default Header
