import MainLayout from "../layout/MainLayout";

function Productspage() {
  return (
   
    <>
     <div className="grid grid-cols-4 mt-6">
      <img className="h-72 w-full  border " src="../public/chaise/chaise1.jpeg" alt="" />
      <img className="h-72 w-full  border " src="../public/chaise/chaise5.jpeg" alt="" />
      <img className="h-72 w-full  border " src="../public/chaise/chaise8.jpeg" alt="" />
      <img className="h-72 w-full  border " src="../public/chaise/chaise6.jpeg" alt="" />
    </div>
    <div className="grid grid-cols-3">
    <img className="w-full  h-72 border "  src="../public/chaise/chaise3.jpeg" alt="" />
    <img className="w-full  h-72 border " src="../public/chaise/chaise4.jpeg" alt="" />
    <img className="w-full  h-72 border " src="../public/chaise/chaise7.jpeg" alt="" />
    </div>
    </>
   
  );
}

export default Productspage;














 // <div className="carousel w-full">
      //   <div id="item1" className="carousel-item w-full">
      //     <img
      //       src="../Assets/lamp.jpg"
      //       className="w-full"
      //     />
      //   </div>
      //   <div id="item2" className="carousel-item w-full">
      //     <img
      //       src="../Assets/lamp2.jpg"
      //       className="w-full"
      //     />
      //   </div>
      //   <div id="item3" className="carousel-item w-full  ">
      //     <img src="../Assets/lamp"  alt="lamp1" className="w-full" />
      //   </div>
      // </div>
      // <div className="flex justify-center w-full py-2 gap-2">
      //   {/* <a href="#item1" className="btn btn-xs">
      //     1
      //   </a>
      //   <a href="#item2" className="btn btn-xs">
      //     2
      //   </a>
      //   <a href="#item3" className="btn btn-xs">
      //     3
      //   </a> */}
      // </div>