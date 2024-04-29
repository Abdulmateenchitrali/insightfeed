import React from 'react';
import { NavLink } from 'react-router-dom';

function FeedItem({ feed, onEdit }) {
  return (
    <li key={feed?.id} style={{display:'flex', alignItems:'center',justifyContent:'space-between',marginTop:15}} >
      <NavLink
        to={`feed/${feed?.value}`}
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
      >
        {feed.label ? feed.label : <i>No Feeds</i>}
      </NavLink>
      <button onClick={() => onEdit(feed.id)}>Edit</button>
    </li>
  );
}

export default FeedItem;
