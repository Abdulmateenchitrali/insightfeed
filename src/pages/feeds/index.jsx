import React, { useEffect } from 'react'
import { connect } from 'react-redux';

export function FeedIndex({ data, loading, getFeeds }) {
console.log("🚀 ~ FeedIndex ~ data:", data)

  useEffect(()=>{
    getFeeds({})
  },[])

  if(loading){
    return <p>Loading...</p>
  }
  if(data){
    console.log("Data: ",data)
  }

  return (
    <div>Feed</div>
  )
}


const mapState = (state) => ({
    data: state.feed.feeds,
    // loading: state.loading.effects.feed.getFeeds
  });
  
  const mapDispatch = (state) => ({
    getFeeds: (payload) => state.feed.getFeeds(payload),
  });
  
  const FeedIndexContainer = connect(mapState, mapDispatch)(FeedIndex);
  export default FeedIndexContainer;