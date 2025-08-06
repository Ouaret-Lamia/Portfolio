import MobileNav from './ui/MobileNav';
import Navbar from './ui/Navbar';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white px-5 md:px-10 h-16 flex items-center justify-between">
            {/* Logo */}
            <img src="/logo.png" alt="Logo" className="h-6" />

            {/* Desktop Navbar */}
            <div className="hidden md:block">
                <Navbar />
            </div>
            <div />
            <div className="hidden md:block"/>

            {/* Mobile Navbar */}
            <div className="md:hidden">
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
