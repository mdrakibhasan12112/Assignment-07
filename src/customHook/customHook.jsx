import React, { useEffect, useState } from 'react';

const customHook = () => {

 const [friends, setFriends] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const fetchData = async () => {
     const res = await fetch('/friend.json');
     const data = await res.json();

     setTimeout(() => {
       setFriends(data);
       setLoading(false);
     }, 1000);
   };
   fetchData();
 }, []);

 return {friends, loading}
};

export default customHook;