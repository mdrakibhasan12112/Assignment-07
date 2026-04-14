import React, { useEffect, useState } from 'react';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/friend.json');
      const data = await res.json();
      console.log(data);
      setFriends(data);
    };
    fetchData();
  }, []);
  console.log(friends);
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-center lg:text-left">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {friends.map((friend, index) => {
          return (
            <div key={index} className="card bg-base-100 shadow-sm">
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
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
