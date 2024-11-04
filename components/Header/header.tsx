import Image from "next/image";
import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";
// import { PiShoppingCartLight } from "react-icons/pi";

const Header = () => {

    return (
        <div>
            {/* Header */}
            <header className="bg-[#A29875] h-[100px] flex justify-between items-center pl-10 pr-10 ">
                {/* Logo */}
                <div className="flex">
                    <Image src="/Group 14210.png" alt="logo" width={39.45} height={48.66} className="text-red" />
                    <Image src="/urity.png" alt="logo" width={174} height={83} className="block"  />
                </div>
                 
                 {/* Search Bar */}
                <div className="m-3">
                    <form action="" className="relative">
                        <div className="">
                            <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" className="w-[769.89] h-[56.24] p-4 rounded-md bg-slate-50"/>
                        
                            <button className="absolute right-2 top-2 text-4xl">
                            <CiSearch />
                            </button>
                        </div>
                    </form>
                </div>
                 
                 {/* iconor image */}
                <div className="flex m-5 gap-[38.7px] left-[1253.81px cursor-pointer"> 
                {/* <CiHeart className="text-[#ffffff] text-4xl  hover:text-red-800" />
                <CiUser className="text-[#ffffff] text-4xl  hover:text-[#A29875]"/>
                <PiShoppingCartLight className="text-[#ffffff] text-4xl hover:text-yellow-400 "/> */}

                    <Image  src="/Path 1426.png" alt="logo" width={33.42} height={29.71}  />
                    <Image src="/Group 14198.png" alt="logo" width={28.97} height={29.26}/>
                    <Image src="/d.png" alt="logo" width={38.01} height={30.08}/>
                </div>
            </header>
        </div>
    )
}

export default Header