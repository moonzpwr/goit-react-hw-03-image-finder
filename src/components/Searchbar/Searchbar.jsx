import { Component } from 'react';
import propTypes from 'prop-types';

export default class SearchBar extends Component {
    state = {
        inputValue: ''
    }

    handleChange = (e) => {
        this.setState({inputValue: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.inputValue === "") { 
            return;
        }
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {

        return (
        <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
        </form>
        </header>
    )   
    }
    
}


     SearchBar.propTypes = {
        onSubmit: propTypes.func
    } 