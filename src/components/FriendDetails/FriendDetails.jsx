import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import customHook from '../../customHook/customHook';
import { ScaleLoader } from 'react-spinners';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { FiArchive } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import { FriendTimelineContext } from '../../context/FriendContext';
import { toast } from 'react-toastify';



const FriendDetails = () => {
 const { id } = useParams();
 console.log('id', id);
 const { friends, loading } = customHook();
 const expectedFriend = friends.find(friend => friend.id == id);

  const { friendTimeline, setFriendTimeline } = useContext(
    FriendTimelineContext,
  );

 const handleAddTimeline = (type) => {
   const newItem = {
     id: Date.now(),
     type,
     name: expectedFriend.name,
     date: new Date().toLocaleDateString('en-US', {
       month: 'long',
       day: 'numeric',
       year: 'numeric',
     }),
   };

   setFriendTimeline([...friendTimeline, newItem]);
    toast.success(`${type} with ${expectedFriend.name}`);
 };
  





 if (loading) {
  return <ScaleLoader />;
 }

 if (!expectedFriend) {
  return <p>Friend not found</p>;
 }
 return (
   <div className="max-w-7xl mx-auto px-4 py-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
       <div className="lg:col-span-5">
         <div className="bg-white shadow rounded-2xl p-8 text-center">
           <img
             src={expectedFriend.picture}
             alt={expectedFriend.name}
             className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow"
           />
           <h2 className="mt-6 text-2xl font-semibold">
             {expectedFriend.name}
           </h2>

           <span
             className={`inline-block mt-2 px-5 py-1 rounded-full text-sm font-medium
              ${
                expectedFriend.status === 'overdue'
                  ? 'bg-red-500  text-white'
                  : expectedFriend.status === 'on track'
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-400'
              }`}
           >
             {expectedFriend.status.toUpperCase()}
           </span>

           <div className="flex gap-2 justify-center mt-4">
             {expectedFriend.tags.map((tag, i) => (
               <span
                 key={i}
                 className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-medium"
               >
                 {tag.toUpperCase()}
               </span>
             ))}
           </div>

           <p className="mt-6 text-gray-600 italic">"{expectedFriend.bio}"</p>
           <p className="text-sm text-gray-500 mt-2">{expectedFriend.email}</p>
         </div>

         {/* Action Buttons */}
         <div className="mt-6 space-y-3">
           <button className="w-full flex items-center justify-center gap-3 bg-white shadow rounded-2xl py-4 hover:bg-gray-50">
             <RiNotificationSnoozeLine className="text-xl" />
             Snooze 2 Weeks
           </button>
           <button className="w-full flex items-center justify-center gap-3 bg-white shadow rounded-2xl py-4 hover:bg-gray-50">
             <FiArchive className="text-xl" />
             Archive
           </button>
           <button className="w-full flex items-center justify-center gap-3 bg-white shadow rounded-2xl py-4 text-red-600 hover:bg-red-50">
             <MdDelete className="text-xl" />
             Delete
           </button>
         </div>
       </div>

       <div className="lg:col-span-7 space-y-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white shadow rounded-2xl p-6 text-center">
             <h3 className="text-4xl font-bold text-[#244D3F]">
               {expectedFriend.days_since_contact}
             </h3>
             <p className="text-gray-500 mt-1">Days Since Contact</p>
           </div>
           <div className="bg-white shadow rounded-2xl p-6 text-center">
             <h3 className="text-4xl font-bold text-[#244D3F]">
               {expectedFriend.goal}
             </h3>
             <p className="text-gray-500 mt-1">Goal (Days)</p>
           </div>
           <div className="bg-white shadow rounded-2xl p-6 text-center">
             <h3 className="text-3xl font-bold text-[#244D3F]">
               {expectedFriend.next_due_date}
             </h3>
             <p className="text-gray-500 mt-1">Next Due Date</p>
           </div>
         </div>

         <div className="bg-white shadow rounded-2xl p-6 flex justify-between items-center">
           <div>
             <h3 className="text-xl font-semibold">Relationship Goal</h3>
             <p className="text-gray-600">
               Connect every{' '}
               <span className="font-bold">{expectedFriend.goal} days</span>
             </p>
           </div>
           <button className="btn ">Edit</button>
         </div>

         <div className="bg-white shadow rounded-2xl p-6">
           <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>
           <div className="flex gap-4">
             <button
               onClick={() => handleAddTimeline('call')}
               className="flex-1 flex flex-col items-center gap-2 py-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition"
             >
               <img src={callImg} alt="" className="w-[20px]" />
               <span className="text-sm font-medium">Call</span>
             </button>

             <button
               onClick={() => handleAddTimeline('text')}
               className="flex-1 flex flex-col items-center gap-2 py-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition"
             >
               <img src={textImg} alt="" className="w-[20px]" />{' '}
               <span className="text-sm font-medium">Text</span>
             </button>

             <button
               onClick={() => handleAddTimeline('video')}
               className="flex-1 flex flex-col items-center gap-2 py-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition"
             >
               <img src={videoImg} alt="" className="w-[20px]" />
               <span className="text-sm font-medium">Video</span>
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

  export default FriendDetails;  
