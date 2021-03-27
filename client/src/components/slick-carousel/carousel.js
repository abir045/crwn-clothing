import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './carousel.scss';


export default function SimpleSlider(){


const photos = [ 
    {
      name:'Photo 1',
      url: 'https://images.unsplash.com/photo-1530856021941-02c71be5926f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
  {
      name:'Photo 2',
      url:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
  },
  {
      name:'Photo 3',
      url: 'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
  },
  {
      name:'Photo 4',
      url: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
      
  }

]


const settings ={
    dots:true,
    infinite:true,
    fade: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll:1,
     autoplay: true,
      
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      cssEase: "circular",
     
      dotsClass: "slick-dots slick-thumb",
      arrows:true,
      className:'slides'
     
     
};

return (
    <div className='App'>
      
      
    <Slider  {...settings} >
    

        {
          photos.map((photo)=> {
            return(
              
                <div className='App'>
                    <img width='100%' src={photo.url}/>
                   
                </div>
                
    
            )  
          })


        }
 
    </Slider>

    </div>
     
                   
    
)

}


