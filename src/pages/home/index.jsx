import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

export function DashBoardIndex({data,loading,getFeeds}) {

    useEffect(()=>{
      getFeeds({})
    },[]);

    if(loading){
      return <p>Loading...</p>
    }
    console.log("Data loaded....",data)
    

    
    return (
        <p id="zero-state">
            Well come to the news aggregator website
        </p>
    );
}
const mapState = (state) => ({
    data: state.feed.feeds,
    loading: state.loading.effects.feed.getFeeds
  });
  
  const mapDispatch = (dispatch) => ({
    getFeeds: (payload) => dispatch.feed.getFeeds(payload),
  });
  
  const DashBoardIndexContainer = connect(mapState, mapDispatch)(DashBoardIndex);
  export default DashBoardIndexContainer;
