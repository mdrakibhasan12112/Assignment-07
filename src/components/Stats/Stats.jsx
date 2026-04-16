import React, { useContext, useState } from 'react';
import { FriendTimelineContext } from '../../context/FriendContext';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const Timeline = () => {
  const { friendTimeline } = useContext(FriendTimelineContext);

  const [search, setSearch] = useState('');

  const iconMap = {
    call: callImg,
    text: textImg,
    video: videoImg,
  };
  const filteredTimeline = friendTimeline.filter(item =>
    item.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-5xl font-bold mb-4">Timeline</h1>

      <input
        type="text"
        placeholder="Search call, text, video..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-3 border rounded-xl mb-6"
      />

      <div className="space-y-4">
        {filteredTimeline.map(item => (
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
