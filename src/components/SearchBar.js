import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onInputChange = event => {
    this.setState({
      term: event.target.value !== undefined ? event.target.value : '',
    });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={e => this.onFormSubmit(e)}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={e => this.onInputChange(e)}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
