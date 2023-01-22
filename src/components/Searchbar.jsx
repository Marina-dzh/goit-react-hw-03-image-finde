import React, { Component } from "react";
import toast from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';

export class Searchbar extends Component{
    state= {
        query: "",
    
 }


  onSearch = (e) => {
      e.preventDefault();
      console.log("search")
      const input = e.target.elements.searchQuery.value
    
      this.setState({
          query: input,
      })

      if (input === '') {
          toast.error('Search field is empty!');
          
          return
      }
    this.props.handleOnSubmit(input)
     e.target.reset()
  }
    
    render() {
        return (
    <header className="Searchbar">
  <form className="SearchForm " onSubmit={this.onSearch}>
    <button type="submit" className="SearchForm-button" disabled={this.props.isLoading}><BiSearchAlt className="icon"/>
    </button>

        <input name="searchQuery"
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  )
    }

}