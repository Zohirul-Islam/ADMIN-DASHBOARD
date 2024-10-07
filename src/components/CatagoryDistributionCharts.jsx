import React from 'react'
import { motion } from 'framer-motion';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer ,Legend} from 'recharts';
const catagoryData =[
    {name:"Electronics",value:4500},
    {name:"Clothings",value:3200},
    {name:"Home & Garden",value:2700},
    {name:"Books",value:2200},
    {name:"Sports",value:1900},
];
const colors =['#6366F1','#8B5CF6','#EC4899','#10B981','#F59E0B'];
function CatagoryDistributionCharts() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow rounded-xl p-6 border border-gray-700'
    initial ={{opacity:0,y:20}}
    animate ={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
    <h2 className='text-lg text-gray-100 font-medium mb-4'>Category Distribution</h2>
    <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
                <Pie
                data={catagoryData}
                cx={'50%'}
                cy={"50%"}
                labelLine={false}
                outerRadius={80}
                fill='#8884d7'
                dataKey='value'
                label ={({name,percent})=>`${name} ${(percent*100).toFixed(0)}%`}
                >
                    {
                        catagoryData.map((entry,index)=>(
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                        ))
                    }
                </Pie>
            <Tooltip contentStyle={{backgroundColor:"rgba(31,41,55,0.8)",borderColor:"#4B5563"}} 
            itemStyle={{color:"#E5E7EB"}}
            />
            <Legend/>
            </PieChart>
        </ResponsiveContainer>
    </div>
    </motion.div>
  )
}

export default CatagoryDistributionCharts