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

      <div className="bg-gradient-to-b from-fuchsia-700 to-blue-600 ">
        <div className="container mx-auto flex flex-col justify-center items-center  py-10">
          <Image src="/one.png" width={883} height={498} alt="one" />
        </div>

        <div className="digonalBox text-white overflow-hidden bg-gradient-to-tr from-blue-600 via-fuchsia-500 to-blue-600 -skew-y-12">
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

        <div className="digonalBox2 text-white overflow-hidden bg-pink-700 -skew-y-12 pt-10 pb-10 lg:pt-20 lg:pb-16">
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

        <div className="digonalBox3 text-white overflow-hidden bg-pink-700 -skew-y-12 py-10 lg:py-16">
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
                NEW POSSIBILITIES
              </span>
              <span className="text-3xl lg:text-5xl font-extrabold pb-4">
                Features
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
        <div className="bg-gradient-to-r from-pink-700  to-blue-600 py-10 lg:py-16 text-white -skew-y-12">
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

          <div className="skew-y-12 grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-20 border-2 border-gray-300 rounded-xl">
              <div className="bg-red-600 rounded-xl p-5 flex flex-col justify-center items-center ">
                <h3 className="text-3xl">PERSONAL</h3>
                <span className="text-3xl">12 Dollar</span>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-row justify-start items-center">
                      <span><AiOutlineClose/></span>
                      <span>eCommerce Widgets</span>
                    </div>
                    <hr className="h-1 w-44"/>
                  </div>
                </div>
              </div>
          </div>
        </div>





      </div>

      <div className="newOne bg-blue-600 h-96 overflow-hidden ">
        <div className="content -skew-y-12 p-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
          excepturi? Temporibus nam suscipit officia ea consectetur modi, ipsum
          fugiat ipsa reprehenderit dolorem maiores, nobis ipsam consequatur
          animi voluptatem. Incidunt illo vel ut optio dolorem ad, sequi,
          reprehenderit nobis aliquam numquam natus magni laborum quibusdam
          corporis consequatur cupiditate officia dolores quas ipsum ipsam
          possimus consequuntur molestias! Ratione recusandae id optio voluptate
          laudantium iusto vel temporibus quasi in, adipisci architecto
          asperiores eligendi aut dolorem nobis ipsum pariatur nisi obcaecati ad
          ex voluptates accusamus quos. Eum, enim obcaecati, ducimus blanditiis
          eius expedita sint corporis quos assumenda numquam similique ut
          repudiandae iure adipisci vel quis pariatur commodi aperiam voluptas
          eaque nesciunt. Culpa vel iste doloremque dolorum tenetur expedita rem
          officia eaque libero eius placeat mollitia, atque fuga soluta minima
          ratione numquam assumenda. Expedita cupiditate cum consectetur est
          omnis tenetur repellendus nostrum autem ducimus, quae facilis sed
          nulla eligendi illum. Repellat vero quibusdam mollitia, rerum rem
          voluptatem dolorem est accusamus nulla quia nam velit sed at odit
          consequatur totam dignissimos harum distinctio quo reprehenderit
          excepturi. Nobis sed cum eveniet sint nisi labore ea cupiditate
          tempora fugiat animi consectetur, quae nemo eligendi neque obcaecati
          natus, atque repellendus quaerat minus vero alias beatae maxime
          voluptatem. Harum, omnis!
        </div>
      </div>
    </>
  );
};

export default Explore;
