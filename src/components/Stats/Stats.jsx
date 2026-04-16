import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useContext } from 'react';
import { FriendTimelineContext } from '../../context/FriendContext';


const Stats = () => {
 const { friendTimeline } = useContext(FriendTimelineContext);

const callCount = friendTimeline.filter(item => item.type === 'call').length;
const textCount = friendTimeline.filter(item => item.type === 'text').length;
const videoCount = friendTimeline.filter(item => item.type === 'video').length;
 
 const data = [
   { name: 'call', value: callCount, fill: '#0088FE' },
   { name: 'text', value: textCount, fill: '#8C34EA' },
   { name: 'video', value: videoCount, fill: '#4CF32B' },
 ];

 return (
   <div className="container mx-auto py-12">
     <div>
       <h1 className="text-4xl font-bold mb-10">Friendship Analytics</h1>
     </div>
     <div className=" bg-base-100 shadow-lg">
       <div className="flex justify-center">
         <PieChart
           style={{
             width: '100%',
             maxWidth: '500px',
             maxHeight: '80vh',
             aspectRatio: 1,
           }}
           responsive
         >
           <Pie
             data={data}
             innerRadius="80%"
             outerRadius="100%"
             // Corner radius is the rounded edge of each pie slice
             cornerRadius="50%"
             fill="#8884d8"
             // padding angle is the gap between each pie slice
             paddingAngle={5}
             dataKey="value"
             isAnimationActive={true}
           />
           <Legend />
           <Tooltip />
         </PieChart>
       </div>
     </div>
   </div>
 );
};

export default Stats;