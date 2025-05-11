import {SearchInput} from "./search-input/SearchInput.tsx";
import {HeaderLogo} from "./header-logo/HeaderLogo.tsx";
import {Menu} from "./menu/Menu.tsx";
import {AuthMenu} from "./auth-menu/AuthMenu.tsx";
import {HamburgerMenu} from "./hamburger-menu/HamburgerMenu.tsx";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    }

    return (
        <div className='relative bg-black z-30 text-xl font-medium'>
            <div className='flex justify-between items-center px-8 h-[70px] w-full'>
                <div className='flex items-center'>
                    <HeaderLogo title="NETFilms"/>
                </div>
                <div className='flex-1 flex justify-center'>
                    <Menu/>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='hidden min-[1001px]:flex items-center'>
                        <div className='w-64 mr-2 -ml-8'><SearchInput /></div>
                        <AuthMenu />
                    </div>
                    <button
                        className='min-[1001px]:hidden p-2 text-2xl text-white font-bold tracking-wide bg-transparent border-none shadow-none hover:text-neutral-300 transition-colors'
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            <HamburgerMenu isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
    );
};