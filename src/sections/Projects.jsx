import { myProjects } from "../constants/index.js";  // Correct import path

const Projects = () => {
    return (
        <section className="c-space my-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-15 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img
                            src={myProjects[0].spotlight}
                            alt="spotlight"
                            className="w-full h_96 object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
