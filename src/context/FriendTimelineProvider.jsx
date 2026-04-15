import { useState } from "react";
import { FriendTimelineContext } from "./FriendContext";
const FriendTimelineProvider = ({ children }) => {
  const [friendTimeline,setFriendTimeline] = useState([])
  
 

  return (
    <FriendTimelineContext.Provider
      value={{ friendTimeline, setFriendTimeline }}
    >
      {children}
    </FriendTimelineContext.Provider>
  );
};

export default FriendTimelineProvider;
