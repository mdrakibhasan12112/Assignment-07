import FriendCard from '../FriendCard/FriendCard';
import { ScaleLoader } from 'react-spinners';
import customHook from '../../customHook/customHook';

const Friends = () => {
 
  const {friends,loading} = customHook()
  
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-center lg:text-left">
        Your Friends
      </h2>

      {loading ? (
        <h2 className='text-center'>
          <ScaleLoader />
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {friends.map((friend, index) => {
            return <FriendCard friend={friend} key={index}></FriendCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default Friends;
