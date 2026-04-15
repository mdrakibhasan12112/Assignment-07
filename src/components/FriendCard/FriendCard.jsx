import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
 return (
   <Link to={`/friend/${friend.id}`}>
     <div className="card bg-base-100 shadow-sm">
       <figure className="px-10 pt-10">
         <img
           src={friend.picture}
           alt={friend.name}
           className="w-30 h-30 rounded-full object-cover "
         />
       </figure>
       <div className="card-body items-center text-center">
         <h2 className="card-title">{friend.name}</h2>
         <p className="text-sm text-gray-500">
           {friend.days_since_contact}d ago
         </p>
         <div className="flex gap-2 mb-2">
           {friend.tags.map((tag, index) => (
             <span
               key={index}
               className="bg-green-100 px-3 py-1 rounded-full text-black"
             >
               {tag.toUpperCase()}
             </span>
           ))}
         </div>

         <div>
           <span
             className={`px-3 py-1 rounded-full  ${
               friend.status === 'overdue'
                 ? 'bg-red-500  text-white'
                 : friend.status === 'on track'
                   ? 'bg-green-500 text-white'
                   : 'bg-yellow-400'
             }`}
           >
             {friend.status}
           </span>
         </div>
       </div>
     </div>
   </Link>
 );
};

export default FriendCard;