import { Button, buttonVariants } from "./ui/button"

const Banner = () => {
    return (
        // <div className="relative w-full rounded-3xl bg-[url('/banner.png')] bg-no-repeat bg-center bg-contain sm:h-[100vh] h-[300px]">
        //     <div className="hidden md:flex justify-evenly w-full bottom-18 absolute">
        //         <Button className={buttonVariants({size:'lg'})}>My Work</Button>
        //         <Button className={buttonVariants({size:'lg'})}>Contact</Button>
        //     </div>
        // </div>

        <div className="w-full md:px-25">
            <img src="/banner.png" alt="Banner picture" className="md:rounded-3xl " />
        </div>
    )
}

export default Banner