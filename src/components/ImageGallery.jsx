import React, { Component } from "react";
import { Modal } from "./Modal";

export const ImageGallery =(props)=> {
  
  
    const { images, error} = props 
 
    return (
      <div>
      
        {error && <h2>{" Please try again" }</h2>}
    
      {images && <ul className="ImageGallery">{images.map(item => (
        
        <ImageGalleryItem key={item.id} item={item}  />))}</ul>}
      </div>
  )
  
}

class ImageGalleryItem extends Component{
  state = {
    isOpen:false,
   }
  toggleModal = () => {
    console.log("modal")
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  
  render() {
    const {webformatURL, largeImageURL, tags} = this.props.item
   
    return (
    
    <li className="ImageGalleryItem" >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags}  onClick={this.toggleModal}/>
      
        {this.state.isOpen && <Modal srcImg={largeImageURL} tags={tags} onClose={ this.toggleModal} />}
</li>
  )}}
 


//   import React, { Component } from "react";
// import { fetchGallery } from "./api";
// import { Loader } from "./Loader";
// import { Button } from "./Button";


// export class ImageGallery extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//      total: 0,
//     error: null,
//     page: 0
    
//   }


//   loadMore = () => {
//     console.log("click")
//     this.setState(pState => ({
//       page: pState.page + 1,
      
//     }))
//   }

// async componentDidUpdate(pProps,pState)
// {
//    if (pProps.query !== this.props.query) {
//       this.setState({ page: 1 , images:[]})
//    }
  
//   if (
//     pState.page !==this.state.page
//     )
//   {
//     this.setState({ isLoading: true, error: null })
  
//     try {
//       const images = await fetchGallery(this.props.query, this.state.page);

//       if (pState.page && pState.page!== this.state.page) {
//         this.setState(prevState =>({
//         images: prevState.images.concat(images.hits)
        
//         }))
       
//       } 
//       else{
//       this.setState({
//         images: images.hits,
//         total: images.totalHits,
//       })}
      
//   } catch (error) {
//       this.setState({ error });
//     } finally {
//      this.setState({ isLoading: false });
//     }

  
//   }
// }
 
  
//   render() {
//     const { images, isLoading, error, total } = this.state 
//   //   console.log(this.state)
//   // console.log(images)
//     return (
//       <div>
//         {isLoading && <Loader />}
//         {error && <h2>{" Please try again" }</h2>}
//     <ul className="gallery">
      
    
//       {images && <div>{images.map(item => (
        
//         <ImageGalleryItem key={item.id} item={item } />))}</div>
      
//             } 
//         </ul>
//         {total > 12 && <Button onClick={this.loadMore } /> }
//       </div>
//   )}
  
// }

// const ImageGalleryItem = ({item:{ webformatURL, largeImageURL, tags }}) => {
//   return (
//     <li className="gallery-item">
//   <img src={webformatURL} alt={tags} />
// </li>
//   )}
 

