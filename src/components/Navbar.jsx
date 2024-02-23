import { useState } from "react";

const Navbar = () => {
  const [style, setStyle] = useState({});
  const [button, setButton] = useState(true);

  const handleClick = () => {
    console.log("click");

    setButton(!button);

    button
      ? setStyle({
          ...style,
          left: "0",
          borderRadius: "0%",
          height: "100vh",
          top: "0%",
          width: "300px",
        })
      : setStyle({});
  };
  return (
    <div id="navbar" className="relative">
      <div
        style={{}}
        className="w-12 h-12 rounded-full text-center cursor-pointer absolute top-4 left-4 bg-orange-500 "
        onClick={handleClick}
      >
        <Button click={button}/>
      </div>
      <div className="block absolute w-screen h-screen backdrop-brightness-70 top-0 -z-10">
        <div
          className="sidebar h-screen bg-slate-500 absolute"
          style={{
            width: "50vh",
            height:"50vh",
            top:"25%",
            left:"-50vh",
            transition: "0.8s",
            borderRadius:"50%",
            ...style,
          }}
        ></div>
      </div>
    </div>
  );
};

const Button = ({click}) => {
  return (
    <div className="button w-12 h-12 flex justify-center items-center gap-2 flex-col">
      <hr className="h-1 w-8 bg-black" style={{ border: "none", transform: `${click ? "none": "rotate(45deg)"}`, transition:"0.6s"}} />
      <hr className="h-1 w-8 bg-black" style={{ border: "none",transform: `${click ? "none": "rotate(-45deg"}`, transition:"0.6s"}} />
    </div>
  );
};

export default Navbar;
