import React from 'react'
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const salesdata =[
  {
    name:"Jul",
    sales:4200
  },
  {
    name:"Aug",
    sales:3800
  },
  {
    name:"Sep",
    sales:4500
  },
  {
    name:"Oct",
    sales:3300
  },
  {
    name:"Nov",
    sales:4400
  },
  {
    name:"Dec",
    sales:2800
  },
  {
    name:"Jan",
    sales:5100
  },
  {
    name:"Feb",
    sales:5200
  },
  {
    name:"Mar",
    sales:4500
  },
  {
    name:"Apr",
    sales:4900
  },
  {
    name:"May",
    sales:5000
  },
  {
    name:"Jun",
    sales:5600
  },
]
function SalesOverviewCharts() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow rounded-xl p-6 border border-gray-700'
    initial ={{opacity:0,y:20}}
    animate ={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
      <h2 className='text-lg text-gray-100 font-medium mb-4'>Sales Overview</h2>
      <div className='h-80'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data ={salesdata}>
            <CartesianGrid strokeDasharray="3 3" stroke='#485563'/>
            <XAxis dataKey={'name'}/>
            <YAxis />
            <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",borderColor:"#4B5563"}} 
            itemStyle={{color:"#E5E7EB"}}
            />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} dot ={{fill:"#6366F1",strokeWidth:2,r:6}} activeDot ={{r:8,strokeWidth:2}} />
          </LineChart>
          
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesOverviewCharts