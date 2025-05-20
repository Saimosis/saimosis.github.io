import { RevealOnScroll } from "../RevealOnScroll"


export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> FBLA State Platform Game </h3>
                        <p className="text-gray-400 mb-3"> A 2-D platforming game developed entirely with C# in Unity.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C#", "Unity"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Grow U Team Project </h3>
                        <p className="text-gray-400 mb-3"> Scalable cloud infrasctructure management with real-time monitoring
                            and automated scaling
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Saimosis/GrowU_-team_repo" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Javascript Calculator </h3>
                        <p className="text-gray-400 mb-3"> A calculator built with html and functional with javascript
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML5", "Javascript", "CSS"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Saimosis/Finished-Calculator" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Single-Player Retro Game </h3>
                        <p className="text-gray-400 mb-3"> A 2-D Pong-like game built using html5 Canvas and javascript
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML5", "Canvas2D", "Javascript"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Saimosis/Single-Player-Retro-Game" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                        </div>
                    </div>

                    
            </div>
        </div>
        </RevealOnScroll>
    </section>
}