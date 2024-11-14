import Globe from "react-globe.gl";

const About = () => {
    let zoomLevel;
    return (
        <section className="c-space my-20">
            {/* Main grid layout with 2 columns on medium to large screens, 1 column on smaller screens */}
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/* First grid item */}
                <div className="flex flex-col items-center p-4">
                    <img
                        src="/assets/grid1.png"
                        alt="grid-1"
                        className="w-full h-[300px] object-contain"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-xl font-bold text-white">Hi, I&#39;m Amira</p>
                        <p className="text-lg mt-2 text-gray-400">
                            I&#39;m a mobile and web developer, from Tunisia. I have a passion for creating visually stunning and user-friendly web applications.
                            I have honed my skills in frontend and backend development, with a focus on animated 3D websites.
                        </p>
                    </div>
                </div>

                {/* Second grid item */}
                <div className="flex flex-col items-center p-4">
                    <img
                        src="/assets/grid2.png"
                        alt="grid-2"
                        className="w-full h-[300px] object-contain"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-xl font-bold text-white">Tech Stack</p>
                        <p className="text-lg mt-2 text-gray-400">
                            I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.
                        </p>
                    </div>
                </div>

                {/* Third grid item (Globe) */}
                <div className="flex justify-center items-center p-4">
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
                                lat: 33.8869, lng: 9.5375,
                                text: "I'm here!",
                                color: 'white',
                                size: 20 + zoomLevel / 5,
                            }]}
                            showLabels={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
