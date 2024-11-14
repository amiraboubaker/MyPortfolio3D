import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Suspense } from "react";
import Target from "../components/Target.jsx";

import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 787})
    const isTablet = useMediaQuery({minWodth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Amira Boubaker <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0" style={{ top: "10%", height: "120vh" }}>
                {/* Adjust the canvas size here */}
                <Canvas shadows style={{ width: '100%', height: '80%', margin: '0 auto' }}>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Adjusted camera position and field of view */}
                        <PerspectiveCamera makeDefault position={[0, 2, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition} />
                            <Rings position = {sizes.ringsPosition}/>
                        </group>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
