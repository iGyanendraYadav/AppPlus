
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

export default function Home() {
  return (
  <>
  
      <a className="anchor" id="home" />
    <div className="bg-gradient-to-b from-pink-600 to-fuchsia-700 ">
    <div className="container mx-auto flex flex-col justify-center items-center text-white py-20">
      <span className="text-sm lg:text-lg uppercase font-bold pt-5 lg:pt-10">
        Explore The Future
      </span>
      <span className="text-3xl lg:text-5xl font-extrabold pt-5 lg:pt-10">
        This is AppPlus !!!
      </span>
      <span className="text-lg lg:text-xl font-light text-center mx-10 lg:mx-36 pt-5 lg:pt-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ea
        inventore, asperiores autem, officia at delectus corporis rem fugiat
        harum illum est cumque adipisci porro?
      </span>

      <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-5 space-y-3 lg:space-y-0 pt-10">
        <button
          className="bg-transparent border-2 border-white text-white hover:text-blue-600 hover:bg-white rounded-3xl flex flex-row justify-center items-center space-x-2 px-5 py-2 text-xl"
          type="button"
        >
          {" "}
          <AiFillApple /> <span>App Store</span>{" "}
        </button>
        <button
          className="bg-transparent border-2 border-white text-white hover:text-blue-600 hover:bg-white rounded-3xl flex flex-row justify-center items-center space-x-2 px-5 py-2 text-xl "
          type="button"
        >
          {" "}
          <FaGooglePlay /> <span>App Store</span>{" "}
        </button>
      </div>
    </div>
  </div>
  </>
  )
}
