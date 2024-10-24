import React from 'react'
import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const colors =['#6366F1','#8B5CF6','#EC4899','#10B981','#F59E0B'];
const salesChannelData =[
  {name:"website",value:45600},
  {name:"Mobile App",value:38200},
  {name:"Marketplace",value:29000},
  {name:"Social media",value:18300},
];

function SalesChannelCharts() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow rounded-xl p-6 border border-gray-700'
    initial ={{opacity:0,y:20}}
    animate ={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart
          data={salesChannelData}
          >
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/>
            <XAxis dataKey='name' stroke='#9CA3AF'/>
            <YAxis stroke='#9CA3AF'/>
            <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",borderColor:"#4B5563"}} 
            itemStyle={{color:"#E5E7EB"}}
            />
            <Legend/>
            <Bar
            dataKey={'value'} fill='#8884d8'
            >
                {
                        salesChannelData.map((entry,index)=>(
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                        ))
                    }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesChannelCharts