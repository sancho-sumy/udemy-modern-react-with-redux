import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              name="search"
              id="search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
