
import React, { useState } from 'react';

function Productspage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const grid1_chaise=[{
    img: '../public/chaise/chaise1.jpeg',
    img_hover:  "../public/chaise/hover_chaise/hover_chaise1.jpeg" ,
  },
  {
    img: '../public/chaise/chaise5.jpeg',
    img_hover:  "../public/chaise/hover_chaise/hover_chaise2.jpeg" ,
  },
  {
    img: '../public/chaise/chaise8.jpeg',
    img_hover:  "../public/chaise/hover_chaise/hover_chaise3.jpeg" ,
  },
  {
    img: '../public/chaise/chaise6.jpeg',
    img_hover:  "../public/chaise/hover_chaise/hover_chaise4.jpeg" ,
  }
  
]

const grid2_chaise=[{
  img: '../public/chaise/chaise3.jpeg',
  img_hover:  "../public/chaise/hover_chaise/hover_chaise5.jpeg" ,
},
{
  img: '../public/chaise/chaise4.jpeg',
  img_hover:  "../public/chaise/hover_chaise/hover_chaise6.jpeg" ,
},
{
  img: '../public/chaise/chaise7.jpeg',
  img_hover:  "../public/chaise/hover_chaise/hover_chaise7.jpeg" ,
}
]
  const images = [
    '../public/chaise/chaise1.jpeg',
    '../public/chaise/chaise5.jpeg',
    '../public/chaise/chaise8.jpeg',
    '../public/chaise/chaise6.jpeg',
    '../public/chaise/chaise3.jpeg',
    '../public/chaise/chaise4.jpeg',
    '../public/chaise/chaise7.jpeg'
  ];

  const imageHover = [
    "../public/chaise/hover_chaise/hover_chaise1.jpeg" ,
    "../public/chaise/hover_chaise/hover_chaise2.jpeg" ,
    "../public/chaise/hover_chaise/hover_chaise3.jpeg" ,
    "../public/chaise/hover_chaise/hover_chaise4.jpeg" ,
    "../public/chaise/hover_chaise/hover_chaise5.jpeg" ,
    "../public/chaise/hover_chaise/hover_chaise6.jpeg" ,
    "../public/chaise/hover_chaise/hover_chaise7.jpeg" ,

   
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      
      <div className="grid grid-cols-4 mt-6 border ">
         {
          grid1_chaise.map((product,index)=>(
          <Product product={product} key={index} />
          ))
         }

      </div>
      <div className="grid grid-cols-3 border ">
         {
          grid2_chaise.map((product,index)=>(
          <Product product={product} key={index} />
          ))
         }

      </div>
     
    </>
  );
}



function Product({product}) {
  return (
    <div className='relative group hover:opacity-100 h-72 '>
          
    <img  className='h-72 w-full object-cover' src={product.img} />
    <div className='absolute top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
    <img  className='w-full h-full object-cover object-center' src={product.img_hover} />
    <div className='grid grid-cols-2 w-full justify-between  absolute bottom-0 z-50 gap-2 px-2 py-1'>
      <button  className="btn   text-black group-hover:  transition duration-200">DISCOVER</button>
      <button  className="btn  text-black group-hover:  transition duration-200">ADD TO CART</button>
    </div>
    
    </div>


  </div>)
}




export default Productspage;
















 