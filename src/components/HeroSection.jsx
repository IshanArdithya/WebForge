import { Link } from "react-router-dom";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Build & Host Your Website with
                <span className="bg-gradient-to-r from-teal-500 to-cyan-800 text-transparent bg-clip-text">
                    {" "}
                    WebForge
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Empower your business with custom-built websites and reliable hosting solutions. Get started today and establish your online presence with ease!
            </p>
            <div className="flex justify-center my-10">
                <Link className="bg-gradient-to-r from-teal-500 to-teal-800 py-3 px-4 mx-3 rounded-md" to="#pricing">Pricing</Link>
                <Link className="py-3 px-4 mx-3 rounded-md border" to="#services">Our Services</Link>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-teal-700 shadow-teal-400 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-teal-700 shadow-teal-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HeroSection