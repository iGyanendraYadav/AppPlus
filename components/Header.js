import Image from "next/image";

const Header = () => {
  return (
    <>
   <div className="bg-gradient-to-b from-pink-700 to-pink-600 z-10">
    <div className="container mx-auto flex flex-row justify-center items-center py-2 lg:py-4  ">
    <Image src="/logo.png" width={150} height={50} alt="logo" />
    </div>
   </div>




  
    </>
  );
};

export default Header;
