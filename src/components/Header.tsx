import Navbar from './ui/Navbar';

// To do: Responsive
const Header = () => {
    return (
        <header className='fixed z-100 bg-white px-10 grid grid-cols-3 items-center h-15'>
            <img src='/logo.png' alt='Logo' className='h-6' />
            <Navbar />
        </header>   
    )
}

export default Header