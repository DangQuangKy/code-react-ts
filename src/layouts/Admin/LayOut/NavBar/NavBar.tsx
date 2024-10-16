import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = () => {
    return (
        <header 
        className="h-20 bg-gray-800 w-full text-gray-100">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <form action="">
                    <div className="relative">
                        <button className="absolute left-2 top-1/2 -translate-y-1/2  "><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        <input type="text" placeholder="Tìm kiếm" className="w-full bg-transparent pl-9 pr-4 focus:outline-none xl:w-125"/>
                    </div>
                </form>
                <div className="flex">
                    <div className="mt-2 pr-2">
                        <p className="block text-xs font-medium">Ten nguoi dung</p>
                        <p className="block text-xs font-medium">Chuc danh</p>
                    </div>
                    <div className="h-12 w-12 rounded-full ">
                        <img src="https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-accountavataruser--flat-color-icon--vector-icon-banner-templ-png-image_1491720.jpg" alt="" className="rounded-full"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default NavBar