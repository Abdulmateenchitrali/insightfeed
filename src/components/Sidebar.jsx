import React from 'react';
import { motion } from 'framer-motion';
import FeedItem from './FeedItem';

function Sidebar({ feeds, loading, onAdd, onEdit }) {
  return (
    <div id="sidebar" style={{width:"26%"}}> 
      <h1>InsightFeed</h1>
      <nav>
        {/* Add Feed Button */}
        <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', marginBottom:20}}>
          <h5>Personalized</h5>
          <motion.button
            onClick={onAdd}
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{marginLeft:20}}
          >
            Feed
            <span>+</span>
          </motion.button>
        </div>
        {/* Feeds List */}
        {feeds.length ? (
          <ul>
            {feeds.map((feed) => (
              <FeedItem key={feed.id} feed={feed} onEdit={onEdit} />
            ))}
          </ul>
        ) : (
          <p>
            <i>No Feeds</i>
          </p>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
