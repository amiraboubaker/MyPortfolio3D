import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <div>
                <NavBar />
                <Hero />
                <About />
            </div>
        </main>
    );
}

export default App;

