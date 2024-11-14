import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Suspense } from "react";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Amira Boubaker <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0" style={{ top: "35%", height: "100vh" }}>
                {/* Adjust the canvas size here */}
                <Canvas shadows style={{ width: '100%', height: '80%', margin: '0 auto' }}>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 1, 10]} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        {/* Scale down the HackerRoom model */}
                        <HackerRoom scale={0.05} position={[0, -1, 0]} rotation={[0, Math.PI, 0]} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
