import {Outlet} from "react-router-dom";
import {Header} from "./components/header/Header.tsx";
import {useInitUserSession} from "./hooks/useInitUserSession.ts";
import {ScrollToTop} from "./components/scroll-to-top/ScrollToTop.tsx";
import {Footer} from "./components/footer/Footer.tsx";

function App() {
    useInitUserSession();

    return (
        <div className='bg-gray-400/50 min-h-[100dvh] flex flex-col'>
            <div className='relative'>
                <header className='h-[10dvh] bg-black w-full fixed z-30 border-b-2 border-white'>
                    <Header/>
                </header>
            </div>
            <main className='min-h-[100dvh] pt-[10dvh] bg-slate-50 w-full flex-grow'>
                <Outlet/>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App
