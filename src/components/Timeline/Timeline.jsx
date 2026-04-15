import React, { useContext } from 'react';
import { FriendTimelineContext } from '../../context/FriendContext';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';


const Timeline = () => {
  const { friendTimeline, setFriendTimeline } = useContext(
    FriendTimelineContext,
  );
   const iconMap = {
     call: callImg,
     text: textImg,
     video: videoImg,
 };
 
  return (
    <div className='container mx-auto py-12'>
      <h1 className="text-5xl font-bold mb-4">Timeline</h1>

      <div className="space-y-4">
        {friendTimeline.map(item => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
          >
            <img src={iconMap[item.type]} className="w-6" />

            <div>
              <p className="font-medium">
                {item.type.toUpperCase()} with {item.name}
              </p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
