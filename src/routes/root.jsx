import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion for animation

export function Root({
  data,
  loading,
  setPersonalizedFeedState
}) {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const addRssFeed = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleAddFeed = () => {
    const id = Date.now(); // Generate a unique id
    const value = inputValue.toLowerCase().replace(/\s+/g, '-'); // Convert input value to lowercase and replace spaces with dashes
    setPersonalizedFeedState({ id, label: inputValue, value });
    setShowModal(false);
    setInputValue(''); // Clear input value after adding feed
  }

  return (
    <>
      <div id="sidebar">
        <h1>InsightFeed</h1>
        <nav>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 5,
            paddingBottom: 10
          }}>
            <div>
              <h5>RSS feeds</h5>
            </div>
            <div>
              <motion.button
                onClick={addRssFeed}
                type="submit"
                style={{
                  position: "relative",
                }}
                disabled={loading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Feed
                <span style={{
                  position: 'absolute',
                  right: 3,
                  bottom: 20
                }}>+</span>
              </motion.button>
            </div>
          </div>
          {data.length ? (
            <ul>
              {data.map((feed) => (
                <li key={feed?.id} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10
                }}>
                  <NavLink
                    to={`feed/${feed?.value}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                    style={{
                      display: "flex",
                      flex: 2
                    }}
                  >
                    {feed.label ? (
                      <>
                        {feed.label}
                      </>
                    ) : (
                      <i>No Feeds</i>
                    )}
                  </NavLink>
                  <div>
                    <Link to={"/"}>
                      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z" stroke="#4A5568" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Feeds</i>
            </p>
          )}
        </nav>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}>
        <div id="navbar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/feed/entertainment">Entertainment</Link></li>
              <li><Link to="/feed/tech">Technology</Link></li>
              <li><Link to="/feed/business">Business</Link></li>
            </ul>
          </nav>
        </div>
        <div
          id="detail"
          style={{
            overflow: 'auto',
            height: '100vh'
          }}
        >
          <Outlet />
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Add RSS Feed</h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter feed name"
            />
            <div style={{
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

            }}>
              <button onClick={handleAddFeed}>Add</button>
              <button style={{marginLeft:10}} onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapState = (state) => ({
  data: state.personalizedFeed.personalizedFeeds,
  loading: state.loading.effects.personalizedFeed.setPersonalizedFeedState,
});

const mapDispatch = (dispatch) => ({
  setPersonalizedFeedState: (payload) => dispatch.personalizedFeed.setPersonalizedFeedState(payload),
});

const RootContainer = connect(mapState, mapDispatch)(Root);
export default RootContainer;
