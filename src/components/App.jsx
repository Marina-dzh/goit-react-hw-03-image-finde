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
    page: 1,
    isLoading: false,
     total: 0,
    error: null,
 }

  
async componentDidUpdate(pProps,pState)
{
  if (pState.page !== this.state.page || pState.query !== this.state.query) {
    
    try {
      const images = await fetchGallery(this.state.query, this.state.page);

      if (!images.hits) {
        throw new Error(console.log("ooops"))
      }
        
    this.setState(prevState => ({
      images: prevState.images.concat(images.hits),
      isLoading: true,
      error: null,
      total: images.totalHits
    }))
       
      
      
      
  }  catch (error) {
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
    const {page, images,isLoading, error, total } = this.state;
   
  return (
    <div className="App" >
      <Searchbar handleOnSubmit={this.handleOnSubmit} isLoading={isLoading} />
      {error && <h2 style={{color:"teal"}}>Please try again </h2>}
      
      {images && (<ImageGallery images={images} />)} 
      {isLoading && <Loader  />}
      {total > 12 * page && !error && !isLoading && <Button onClick={this.loadMore} />}
      { total>1 && total <= 12 * page  && <p style={{color:"teal"}}>End of search </p>}
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


