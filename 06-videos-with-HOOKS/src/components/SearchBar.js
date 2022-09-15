import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            type="text"
            name="search"
            id="search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
