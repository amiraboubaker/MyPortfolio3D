import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
    let zoomLevel = 1; // You need to define the zoomLevel value (you can adjust it based on your logic)
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("amira.boubaker@esprim.tn");
        setHasCopied(true);
    }

    return (
        <section className="c-space my-20" id="about">
            {/* Main grid layout with 1 column on small screens, 2 columns on medium screens, and 3 columns on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 h-full">

                {/* First grid item */}
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg pl-8 pr-8">
                    <div className="flex justify-center w-full">
                        <img
                            src="/assets/grid1.png"
                            alt="grid-1"
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="mt-4 text-left text-white">
                        <p className="text-xl font-bold">Hi, I&#39;m Amira</p>
                        <p className="text-lg mt-2 text-gray-400">
                            I&#39;m a mobile and web developer, from Tunisia. I have a passion for creating visually
                            stunning and user-friendly web applications.
                            I have honed my skills in frontend and backend development, with a focus on animated 3D
                            websites.
                        </p>
                    </div>
                </div>


                {/* Second grid item */}
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                    <div className="flex justify-center w-full">
                        <img
                            src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full h-[300px] object-contain"
                        />
                    </div>
                    <div className="mt-4 text-center text-white">
                        <p className="text-xl font-bold">Tech Stack</p>
                        <p className="text-lg mt-2 text-gray-400">
                            I specialize in JavaScript/TypeScript with a focus on React.
                        </p>
                    </div>
                </div>

                {/* Third grid item (Globe) */}
                <div className="flex flex-col justify-center items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                    <div className="rounded-3xl w-full h-[300px] flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 33.8869, // Latitude for Tunisia
                                lng: 9.5375,  // Longitude for Tunisia
                                text: "I'm here!",
                                color: 'white',
                                size: 20 + zoomLevel / 5,
                            }]}
                            showLabels={true}
                        />
                    </div>
                    <div className="mt-4 text-center text-white">
                        <p className="grid-headtext text-center mt-10">
                            I work remotely across most timezones.
                        </p>
                        <p className="grid-subtext text-center text-gray-400">I&#39;m based in Tunisia, with remote
                            available.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                    </div>
                </div>

                {/* Fourth grid item (Passion - larger) */}
                <div
                    className="col-span-1 md:col-span-2 xl:col-span-2 flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                    <div className="flex justify-center w-full">
                        <img
                            src="/assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />
                    </div>
                    <div className="mt-4 text-center text-white">
                        <p className="text-xl font-bold">My Passion for Coding</p>
                        <p className="text-lg mt-2 text-gray-400">
                            I love solving problems and creating innovative solutions. Coding isn&#39;t just my
                            profession - it is my passion.
                        </p>
                    </div>
                </div>

                {/* Fifth grid item (Contact - smaller) */}
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                    <div className="grid-container flex flex-col items-center">
                        <img src="/assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2 text-center text-white">
                            <p className="grid-subtext">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy"
                                     className="w-6 h-6 object-contain"/>
                                <p className="md:text-xl md:text-xl font-medium text-gray_gradient text-white">amira.boubaker@esprim.tn</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
