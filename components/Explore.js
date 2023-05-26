import Image from "next/image";
import React from "react";
import { AiFillApple, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

export const dataOne = [
  {
    num: "01",
    headline: "High Security",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptate quam obcaecati nobis id. Facere sapiente nostrum illum? Sunt, fuga autem dolorum veniam quas ducimus.",
  },
  {
    num: "02",
    headline: "Fast Performance",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptate quam obcaecati nobis id. Facere sapiente nostrum illum? Sunt, fuga autem dolorum veniam quas ducimus.",
  },
  {
    num: "03",
    headline: "Free Updates",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptate quam obcaecati nobis id. Facere sapiente nostrum illum? Sunt, fuga autem dolorum veniam quas ducimus.",
  },
  {
    num: "04",
    headline: "24/7 Support",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptate quam obcaecati nobis id. Facere sapiente nostrum illum? Sunt, fuga autem dolorum veniam quas ducimus.",
  },
  {
    num: "05",
    headline: "Awesome Widgets",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptate quam obcaecati nobis id. Facere sapiente nostrum illum? Sunt, fuga autem dolorum veniam quas ducimus.",
  },
  {
    num: "06",
    headline: "Smooth Integration",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptate quam obcaecati nobis id. Facere sapiente nostrum illum? Sunt, fuga autem dolorum veniam quas ducimus.",
  },
];

const Explore = () => {
  return (
    <>
      {/* <div className="bg-gradient-to-b from-pink-600 to-fuchsia-700 ">
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
      </div> */}

      <div className="bg-gradient-to-b from-fuchsia-700 to-blue-600 ">
        <div className="container mx-auto flex flex-col justify-center items-center  py-10">
          <Image src="/one.png" width={883} height={498} alt="one" />
        </div>

        <div className="digonalBox text-white overflow-hidden bg-gradient-to-tr from-blue-600 via-fuchsia-500 to-blue-600 -skew-y-12">
        <a className="anchor" id="about" />
          <div className="content p-10 lg:p-36 skew-y-12">
            <div className="flex flex-col lg:flex-row justify-center items-center ">
              <div className="flexOne w-auto lg:w-1/2">
                <Image src="/two.png" width={567} height={525} alt="two" />
              </div>
              <div className="flexTwo w-auto lg:w-1/2 flex flex-col justify-start items-start space-y-3 lg:space-y-5">
                <span className="text-sm lg:text-lg font-bold">A FEW WORD</span>
                <span className="text-3xl lg:text-5xl font-extrabold">
                  About the App
                </span>
                <hr className="h-1 w-12 bg-white" />

                <span className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto modi maiores ab dolorem officiis nobis! Corrupti neque
                  sequi veritatis, placeat adipisci veniam dignissimos quae ea
                  incidunt doloribus, voluptates temporibus totam. Iste
                  distinctio provident molestiae error!
                </span>

                <Image
                  className="rounded-xl shadow-lg"
                  src="/three.jpg"
                  width={570}
                  height={650}
                  alt="three"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="digonalBox2 text-white overflow-hidden bg-pink-700 -skew-y-12 pt-10 pb-10 lg:pt-40 lg:pb-16">
        <a className="anchor" id="features" />
          <div className="content2 p-10 lg:p-16 skew-y-12">
            <div className="flexTwo w-auto lg:w-1/2 flex flex-col justify-start items-start space-y-3 lg:space-y-5">
              <span className="text-sm lg:text-lg font-bold">
                NEW POSSIBILITIES
              </span>
              <span className="text-3xl lg:text-5xl font-extrabold">
                Features
              </span>
              <hr className="h-1 w-12  bg-white" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5">
              {dataOne.map((one, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col justify-start items-start space-y-1 bg-pink-600 rounded-lg p-4 lg:p-7"
                  >
                    <span className="text-sm font-bold">{one.num}</span>
                    <h2 className="text-xl lg:text-2xl pt-3">{one.headline}</h2>
                    <p className="text-base">{one.des}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="digonalBox3 text-white overflow-hidden bg-pink-700 -skew-y-12 py-10 lg:py-24">
        <a className="anchor" id="review" />
          <div className="content3 p-10 lg:p-16 skew-y-12">
            <div className="flexTwo w-auto lg:w-1/2 flex flex-col justify-start items-start space-y-3 lg:space-y-5">
              <span className="text-sm lg:text-lg font-bold">
                THE INTEGRATIONS
              </span>
              <span className="text-3xl lg:text-5xl font-extrabold">
                The Better Way
              </span>
              <hr className="h-1 w-12  bg-white" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5 lg:m-10">
              <Image
                className="rounded-xl shadow-lg"
                src="/five.png"
                width={318}
                height={685}
                alt="five"
              />

              <Image
                className="rounded-xl shadow-lg"
                src="/four.png"
                width={328}
                height={695}
                alt="four"
              />

              <Image
                className="rounded-xl shadow-lg"
                src="/six.png"
                width={318}
                height={685}
                alt="six"
              />
            </div>
          </div>
        </div>

        {/* #Review */}

        <div className="bg-gradient-to-b from-pink-700  to-blue-600 py-10 lg:py-16 text-white -skew-y-12">
       
          <div className="skew-y-12 flex flex-col lg:flex-row justify-center items-center lg:justify-evenly ">
            <div className="flexOne flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-2">
              <span className="text-sm lg:text-lg font-bold">
                POINT OF VIEW
              </span>
              <span className="text-3xl lg:text-5xl font-extrabold pb-4">
                Review
              </span>
              <hr className="h-1 w-12  bg-white" />
            </div>

            <div className="flexTwo flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-2">
              <span className="text-5xl font-extrabold lg:text-9xl">4.9</span>
              <span className="text-xl font-extrabold lg:text-2xl">
                out of 5
              </span>
            </div>
          </div>
        </div>


        {/* #PLans */}
        <div className="bg-gradient-to-r from-pink-500  to-blue-600 py-10 lg:py-32 text-white -skew-y-12">
        <a className="anchor" id="pricing" />
          <div className="skew-y-12 flex flex-col lg:flex-row justify-center items-center lg:justify-evenly ">
            <div className="flexOne flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-2">
              <span className="text-sm lg:text-lg font-bold">
              OUR PRICING PLANS
              </span>
              <span className="text-3xl lg:text-5xl font-extrabold pb-4">
              Choose the best plan <br/> for your needs
              </span>
              <hr className="h-1 w-12  bg-white" />
            </div>

            <div className="flexTwo flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-2">
              <span className="text-5xl font-extrabold lg:text-9xl">1M</span>
              <span className="text-xl font-extrabold lg:text-2xl">
                Happy Users
              </span>
            </div>

           

            


          </div>

          <div className="skew-y-12 grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-20 border-2 border-gray-300 border-opacity-30 rounded-xl my-10">
              <div className="bg-transparent rounded-xl p-5 flex flex-col justify-center items-center space-y-6 ">
                <h3 className="text-2xl font-extrabold">PERSONAL</h3>
                <span className="text-3xl font-bold">₹24 K / month</span>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-start items-start space-y-2">
                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineCheck/></span>
                      <span>eCommerce Widgets</span>
                     
                    </div>
                    <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineClose/></span>
                      <span>Product Updates</span>
                    </div>
                      <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineClose/></span>
                      <span>Future Plugins</span>
                    </div>
                      <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineClose/></span>
                      <span>Premium Support</span>
                    </div>



                    
                   
                  </div>
                </div>
                <button className="border-2 border-white rounded-3xl text-white bg-transparent hover:text-blue-600 hover:bg-white px-4 py-2">GET STARTED</button>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-blue-600 scale-105  lg:scale-110 rounded-xl p-5 flex flex-col justify-center items-center space-y-6 ">
                <h3 className="text-2xl font-extrabold">ENTERPRISE</h3>
                <span className="text-3xl font-bold">₹44 K / month</span>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-start items-start space-y-2">
                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineCheck/></span>
                      <span>eCommerce Widgets</span>
                     
                    </div>
                    <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineCheck/></span>
                      <span>Product Updates</span>
                    </div>
                      <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineCheck/></span>
                      <span>Future Plugins</span>
                    </div>
                      <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineCheck/></span>
                      <span>Premium Support</span>
                    </div>



                    
                   
                  </div>
                </div>
                <button className="border-2 border-white rounded-3xl text-white bg-transparent hover:text-blue-600 hover:bg-white px-4 py-2">GET STARTED</button>
              </div>
              <div className="bg-transparent rounded-xl p-5 flex flex-col justify-center items-center space-y-6 ">
                <h3 className="text-2xl font-extrabold">BUSINESS</h3>
                <span className="text-3xl font-bold">₹75 K / month</span>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-start items-start space-y-2">
                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineCheck/></span>
                      <span>eCommerce Widgets</span>
                     
                    </div>
                    <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineCheck/></span>
                      <span>Product Updates</span>
                    </div>
                      <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineClose/></span>
                      <span>Future Plugins</span>
                    </div>
                      <hr className="h-1 w-44"/>

                    <div className="flex flex-row justify-start items-center space-x-2">
                      <span><AiOutlineClose/></span>
                      <span>Premium Support</span>
                    </div>



                    
                   
                  </div>
                </div>
                <button className="border-2 border-white rounded-3xl text-white bg-transparent hover:text-blue-600 hover:bg-white px-4 py-2">GET STARTED</button>
              </div>
          </div>
        </div>





      </div>

      <div className="newOne bg-blue-600 overflow-hidden text-white ">
        <div className="content -skew-y-12 py-10 lg:py-28 flex flex-col justify-center items-center ">
              <span className="text-5xl lg:text-9xl font-extrabold bg-gradient-to-br from-white to bg-fuchsia-500 bg-clip-text text-transparent">LET&#39;S MAKE</span>
              <span className="text-5xl lg:text-9xl font-extrabold">SOMETHING BIG</span>
        </div>
      </div>
    </>
  );
};

export default Explore;
