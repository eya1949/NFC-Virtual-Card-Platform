import React, { useState } from 'react';

function ProductPageLamps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  const grid1_lamp=[{
    img: '../public/chaise/lamp/lamp1.jpeg',
    img_hover:  "../public/chaise/hover_lamp/hover_lamp1.jpeg" ,
  },
  {
    img: '../public/chaise/lamp/lamp2.jpeg',
    img_hover:  "../public/chaise/hover_lamp/hover_lamp2.jpeg" ,
  },
  {
    img: '../public/chaise/lamp/lamp3.jpeg',
    img_hover:  "../public/chaise/hover_lamp/hover_lamp3.jpeg" ,
  },
  {
    img: '../public/chaise/lamp/lamp4.jpeg',
    img_hover:  "../public/chaise/hover_lamp/hover_lamp4.jpeg" ,
  }
]
const grid2_lamp=[{
  img: '../public/chaise/lamp/lamp5.jpeg',
  img_hover:  "../public/chaise/hover_lamp/hover_lamp5.jpeg" ,
},
{
  img: '../public/chaise/lamp/lamp6.jpeg',
  img_hover:  "../public/chaise/hover_lamp/hover_lapm6.jpeg" ,
},
{
  img: '../public/chaise/lamp/lamp7.jpeg',
  img_hover:  "../public/chaise/hover_lamp/hover_lamp7.jpeg" ,
},
]

  const images = [
    '../public/chaise/lamp/lamp1.jpeg',
    '../public/chaise/lamp/lamp2.jpeg',
    '../public/chaise/lamp/lamp3.jpeg',
    '../public/chaise/lamp/lamp4.jpeg',
    '../public/chaise/lamp/lamp5.jpeg',
    '../public/chaise/lamp/lamp6.jpeg',
    '../public/chaise/lamp/lamp7.jpeg'
  ];

  const imageHover = [
    "../public/chaise/hover_lamp/hover_lamp1.jpeg" ,
    "../public/chaise/hover_lamp/hover_lamp2.jpeg" ,
    "../public/chaise/hover_lamp/hover_lamp3.jpeg" ,
    "../public/chaise/hover_lamp/hover_lamp4.jpeg" ,
    "../public/chaise/hover_lamp/hover_lamp5.jpeg" ,
    "../public/chaise/hover_lamp/hover_lapm6.jpeg" ,
    "../public/chaise/hover_lamp/hover_lamp7.jpeg" ,
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
          grid1_lamp.map((product,index)=>(
          <Product product={product} key={index} />
          ))
         }

      </div>
      <div className="grid grid-cols-3 border ">
         {
          grid2_lamp.map((product,index)=>(
          <Product product={product} key={index} />
          ))
         }

      </div>

    </>
  );
}

function Product({product}) {
  return (
    <div className='relative group hover:opacity-100  h-72 '>
          
    <img  className='h-72 w-full  group-hover:hidden' src={product.img} />

    <div className='relative top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
    <img  className='w-full h-full ' src={product.img_hover} />
    <div className='grid grid-cols-2 w-full justify-between  absolute bottom-0 z-50 gap-2 px-2 py-1'>
      <button  className="btn   text-black group-hover:  transition duration-200">DISCOVER</button>
      <button  className="btn  text-black group-hover:  transition duration-200">ADD TO CART</button>
    </div>
    </div>


  </div>
  )}



export default ProductPageLamps;
