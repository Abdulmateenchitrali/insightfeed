// Root.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import FilterModal from '../components/FilterModal';
import "./root.css"


function Root({ data, loading, setPersonalizedFeedState, updatePersonalizedFeedState, removePersonalizedFeed, getFeeds }) {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedFeedId, setSelectedFeedId] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [sortBy, setSortBy] = useState('');

  const params = useParams();

  const handleAddFeed = () => {
    const id = Date.now();
    const value = inputValue.toLowerCase().replace(/\s+/g, '-');
    setPersonalizedFeedState({ id, label: inputValue, value });
    setShowModal(false);
    setInputValue('');
  }

  const handleEditFeed = (feedId) => {
    setSelectedFeedId(feedId);
    setShowEditModal(true);
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  }

  const handleUpdateFeed = () => {
    updatePersonalizedFeedState({ id: selectedFeedId, label: inputValue, value: inputValue.toLowerCase().replace(/\s+/g, '-') });
    setShowEditModal(false);
  }

  const handleDeleteFeed = () => {
    removePersonalizedFeed({ id: selectedFeedId });
    setShowEditModal(false);
  }

  const handleOpenFilterModal = () => {
    setShowFilterModal(true);
  }

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  }

  const handleApplyFilters = () => {
    getFeeds({ q: params?.feedId, from: fromDate, to: toDate, sortBy: sortBy });
    setFromDate('');
    setToDate('');
    setSortBy('');
    setShowFilterModal(false);
  }

  return (
    <>
      <Sidebar feeds={data} loading={loading} onAdd={() => setShowModal(true)} onEdit={handleEditFeed} />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Navbar onFilterOpen={() => setShowFilterModal(true)} />
        <div id="detail" style={{ overflow: 'auto', height: '100vh' }}>
          <Outlet />
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title="Add RSS Feed">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter feed name" />
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={handleAddFeed}>Add</button>
          <button style={{ marginLeft: 10 }} onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </Modal>
      <Modal show={showEditModal} onClose={handleCloseEditModal} title="Edit RSS Feed">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter new feed name" />
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={handleUpdateFeed}>Update</button>
          <button style={{ marginLeft: 10 }} onClick={handleCloseEditModal}>Cancel</button>
          <button style={{ marginLeft: 10, backgroundColor: 'red', color: 'white' }} onClick={handleDeleteFeed}>Delete</button>
        </div>
      </Modal>
      <FilterModal
        show={showFilterModal}
        onClose={handleCloseFilterModal}
        fromDate={fromDate}
        toDate={toDate}
        sortBy={sortBy}
        onApplyFilters={handleApplyFilters}
        onFromDateChange={(e) => setFromDate(e.target.value)}
        onToDateChange={(e) => setToDate(e.target.value)}
        onSortByChange={(e) => setSortBy(e.target.value)}
      />
    </>
  );
}

const mapState = (state) => ({
  data: state.personalizedFeed.personalizedFeeds,
  loading: state.loading.effects.personalizedFeed.setPersonalizedFeedState | state.loading.effects.feed.getFeeds,
});

const mapDispatch = (dispatch) => ({
  setPersonalizedFeedState: (payload) => dispatch.personalizedFeed.setPersonalizedFeedState(payload),
  updatePersonalizedFeedState: (payload) => dispatch.personalizedFeed.updatePersonalizedFeedState(payload),
  removePersonalizedFeed: (payload) => dispatch.personalizedFeed.removePersonalizedFeed(payload),
  getFeeds: (payload) => dispatch.feed.getFeeds(payload),
});
const RootContainer = connect(mapState, mapDispatch)(Root);
export default RootContainer;
