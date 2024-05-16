const hoverStyle1 =
  "hover:scale-110 transition-all duration-500 absolute hover:cursor-pointer hover:translate-x-12 hover:-translate-y-12 ";
const hoverStyle2 =
  "hover:scale-110 transition-all duration-500 absolute hover:cursor-pointer hover: -translate-x-6 hover:-translate-y-12 ";
const hoverStyle3 =
  "hover:scale-110 transition-all duration-500 absolute hover:cursor-pointer hover: -translate-x-0 hover:translate-y-12 ";

  export default function Decor() {
  return (
    <section className="h-screen w-full flex flex-col px-16">
      <div className="up h-1/4 w-full flex align-items justify-center relative">
        <img
          className={`top-0 h-96 w-auto ${hoverStyle3}`}
          src="lamp.png"
          alt="lamp"
        />
        <div className="w-full h-full absolute">
          <p className="text-xl pt-32 max-w-lg">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quasi optio fugiat laboriosam. Animi ducimus ipsum vero,
            reprehenderit, voluptatem magnam molestiae consectetur fuga facere
            libero natus eum possimus mollitia asperiores.{" "}
          </p>
        </div>
      </div>

      <div className="down h-3/4 w-full flex items-start justify-center relative">
        <img
          className={`tableau w-[500px] bottom-0 z-0 right-52 ${hoverStyle1}`}
          src="tableau.png"
          alt="tableau"
        />
        <img
          className={`couch w-[600px] -bottom-4 z-20 ${hoverStyle2}`}
          src="couch.png"
          alt="couch"
        />
        <img
          className={`standing-lamp absolute h-[80%] bottom-0 left-0 z-40 ${hoverStyle1}`}
          src="standing lamp.png"
          alt="standing-lamp"
        />
        <img
          className={`table absolute w-52 -bottom-24 right-52 z-50 ${hoverStyle3}`}
          src="table.png"
          alt="table"
        />
        <img
          className={`carpet absolute w-[90%] -bottom-40 z-41 ${hoverStyle3}`}
          src="carpet.png"
          alt="carpet"
        />

        <img
          className={`chair absolute w-[28%] -bottom-24 left-10 z-50 ${hoverStyle2}`}
          src="chair.png"
          alt="chair"
        />
      </div>
    </section>
  );
}

