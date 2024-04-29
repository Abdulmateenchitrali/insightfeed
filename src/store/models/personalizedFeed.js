const personalizedFeed = {
    state: {
        personalizedFeeds: [],
    },
    reducers: {
        setPersonalizedFeeds(state, payload) {
            // Add logic to check if the feed already exists
            if (!state.personalizedFeeds.some(feed => feed.id === payload.id)) {
                return { ...state, personalizedFeeds: [...state.personalizedFeeds, payload] };
            }
            return state;
        },
        removePersonalizedFeed(state, payload) {
            return {
                ...state,
                personalizedFeeds: state.personalizedFeeds.filter(feed => feed.id !== payload.id)
            };
        }
    },
    effects: (dispatch) => ({
        async setPersonalizedFeedState(feed) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // Dispatch the reducer
            this.setPersonalizedFeeds(feed);
        },
    })
};

export default personalizedFeed;
