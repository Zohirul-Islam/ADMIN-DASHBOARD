import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import {BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import SalesOverviewCharts from '../components/SalesOverviewCharts'
import CatagoryDistributionCharts from '../components/CatagoryDistributionCharts'
function OverviewPage() {
  return (
    <div className='flex-1 overflow-auto z-10 relative'>
      <Header title="Overview"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div 
        className='grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial ={{opacity:0,y:20}}
        animate ={{opacity:1,y:0}}
        transition={{duration:1}}
        >
          <StatCard title = "Total Sales" icon ={Zap} color ="#6366F1" value ="$12,345"/>
          <StatCard title = "New Users" icon ={Users} color ="#8B5CF6" value ="$1,345"/>
          <StatCard title = "Total Products" icon ={ShoppingBag} color ="#6366F1" value ="345"/>
          <StatCard title = "Conversion Rate" icon ={BarChart2} color ="#10Be981" value ="34.5%"/>
        </motion.div>
        {/* chart section start */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <SalesOverviewCharts/>
            <CatagoryDistributionCharts/>
            
        </section>
        {/* chart section ends */}
      </main>
    </div>
  )
}

export default OverviewPage