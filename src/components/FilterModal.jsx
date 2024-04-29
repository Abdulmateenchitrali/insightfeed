// FilterModal.js
import React from 'react';

function FilterModal({ show, onClose, fromDate, toDate, sortBy, onApplyFilters, onFromDateChange, onToDateChange, onSortByChange }) {
  if (!show) return null;

  return (
    <div className="filter-modal">
      <div className="filter-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Filter News</h2>
        <div>
          <label htmlFor="fromDate">From:</label>
          <input type="date" id="fromDate" value={fromDate} onChange={onFromDateChange} />
        </div>
        <div>
          <label htmlFor="toDate">To:</label>
          <input type="date" id="toDate" value={toDate} onChange={onToDateChange} />
        </div>
        <div>
          <label htmlFor="sortBy">Sort By:</label>
          <select id="sortBy" value={sortBy} onChange={onSortByChange}>
            <option value="">Select</option>
            <option value="popularity">Popularity</option>
            <option value="relevance">Relevance</option>
            <option value="publishedAt">Published At</option>
          </select>
        </div>
        <button onClick={onApplyFilters}>Apply Filters</button>
      </div>
    </div>
  );
}

export default FilterModal;
