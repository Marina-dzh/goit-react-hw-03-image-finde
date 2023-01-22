import React, { Component } from "react";
import { Button } from "./Button";
import { Searchbar } from "./Searchbar";
 import { Loader } from "./Loader";
import { ImageGallery } from "./ImageGallery";
import { Toaster } from 'react-hot-toast';
import { fetchGallery } from "./api";

export class App extends Component{
  state = {
    query: "null",
    images: [],
    page: 0,
    isLoading: false,
     total: 0,
    error: null,
 }

  
async componentDidUpdate(pProps,pState)
{
  if (pState.page !== this.state.page || pState.query !== this.state.query) {

    this.setState({ isLoading: true, error: null })
  
    try {
      const images = await fetchGallery(this.state.query, this.state.page);

      if (pState.page && pState.page!== this.state.page) {
        this.setState(prevState =>({
        images: prevState.images.concat(images.hits)
        
        }))
       
      } 
      else{
      this.setState({
        images: images.hits,
        total: images.totalHits,
      })}
      
  } catch (error) {
      this.setState({ error });
    } finally {
     this.setState({ isLoading: false });
    }

  
  }
}
  handleOnSubmit = (query) =>
  {
    
    this.setState({ query, page:1, images:[]})
  }
  

   loadMore = () => {
    
    this.setState(pState => ({
      page: pState.page + 1,
      
    }))
  }
    
  render() {
    const { images,isLoading, error, total } = this.state;
   
  return (
    <div className="App" >
      <Searchbar handleOnSubmit={this.handleOnSubmit} isLoading={isLoading} />
      {error && <h2 style={{color:"teal"}}>{" Please try again" }</h2>}
      
      {images && (<ImageGallery images={images} />)} 
      {isLoading && <Loader  />}
{total > 12 && !error && !isLoading && <Button onClick={this.loadMore } /> }
      <Toaster  toastOptions={{duration: 500}} />
    </div>
  );
}
  
};


// import React, { Component } from "react";

// import { Searchbar } from "./Form";
// import { ImageGallery } from "./Gallery";
// import  { Toaster } from 'react-hot-toast';

// export class App extends Component{
//   state = {
//     query: "null",
   
//  }

//   handleOnSubmit = (query) =>
//   {
//     console.log(query)
//     this.setState({ query })
//   }
  

  
    
//   render() {
//   const { query } = this.state;
//   return (
//     <div>
//       <Searchbar handleOnSubmit={this.handleOnSubmit} />
      
//       {query && ( <ImageGallery query={query}  />)}     

//       <Toaster  toastOptions={{duration: 500}} />
//     </div>
//   );
// }
  
// };


