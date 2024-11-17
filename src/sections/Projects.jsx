import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import DemoComputer from "../components/DemoComputer.jsx";
import { myProjects } from "../constants/index.js"; // Correct import path

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className="c-space my-20">
            {/* Title Section */}
            <div className="mt-4 text-center text-white">
                <p className="head-text text-left">My Works</p>
            </div>

            {/* Projects Section with two containers */}
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-10 w-full">
                {/* Project Details Container */}
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 bg-gray-800 rounded-lg">
                    {/* Spotlight Image */}
                    <div className="absolute top-0 right-0 w-full h-64">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Project Logo */}
                    <div
                        className="p-3 backdrop-filter backdrop-blur-md w-fit rounded-lg relative z-10"
                        style={currentProject.logoStyle}
                    >
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col gap-5 text-white my-5 relative z-10">
                        <p className="text-white text-2xl font-semibold">{currentProject.title}</p>
                        <p>{currentProject.desc}</p>
                        <p>{currentProject.subddesc}</p>

                        {/* Tags and Live Site Link */}
                        <div className="flex items-center justify-between flex-wrap gap-5">
                            <div className="flex items-center gap-3">
                                {currentProject.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo">
                                        <img src={tag.path} alt={tag.name} className="w-8 h-8" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-between items-center mt-7">
                            <button
                                className="arrow-btn bg-gray-700 p-2 rounded-full hover:bg-gray-600"
                                onClick={() => handleNavigation("previous")}
                            >
                                <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
                            </button>
                            <button
                                className="arrow-btn bg-gray-700 p-2 rounded-full hover:bg-gray-600"
                                onClick={() => handleNavigation("next")}
                            >
                                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3D Model Container */}
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full overflow-hidden">
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={null}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;