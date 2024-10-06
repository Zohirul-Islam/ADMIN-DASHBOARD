import { div } from 'framer-motion/client';
import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const sidebarItem = [
    {
        name:"Overview",
        icon:BarChart2,
        color:"#6366f1",
        href:'/'
    },
    {
        name:"Products",
        icon:ShoppingBag,
        color:"#8B5CF6",
        href:'/products'
    },
    {
        name:"Users",
        icon:Users,
        color:"#EC4899",
        href:'/users'
    },
    {
        name:"Sales",
        icon:DollarSign,
        color:"#10B981",
        href:'/sales'
    },
    {
        name:"Orders",
        icon:ShoppingCart,
        color:"#F59E0B",
        href:'/orders'
    },
    {
        name:"Analitics",
        icon:TrendingUp,
        color:"#6366f1",
        href:'/analitics'
    },
    {
        name:"Settings",
        icon:Settings,
        color:"#6EE787",
        href:'/settings'
    },
]
function Sidebar() {
    const [openSidebar,setOpenSidebar] = useState(true);
  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${openSidebar ? 'w-64':'w-20'}`}
    animate ={{width:openSidebar ? 256:80}}
    >
    <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale: 0.9}}
        onClick={()=>setOpenSidebar(!openSidebar)}
        className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
        >
            <Menu size={24}/>
        </motion.button>
        <nav className='mt-8 flex-grow'>
            {
                sidebarItem.map(item=>(
                    <Link key={item.href} to={item.href}>
                        <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                            <item.icon size={20} style={{color:item.color,minWidth:"20px"}}/>
                            <AnimatePresence>
                                {
                                    openSidebar && (
                                        <motion.span 
                                        className='ml-4 whitespace-nowrap'
                                        initial={{opacity:0,width:0}}
                                        animate={{opacity:1,width:"auto"}}
                                        exit={{opacity:0,width:0}}
                                        transition={{duration:0.2,delay:0.3}}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )
                                }
                            </AnimatePresence>
                        </motion.div>
                    </Link>
                ))
            }
        </nav>
    </div>
    </motion.div>
  )
}

export default Sidebar