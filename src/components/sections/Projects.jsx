import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> WebNoter </h3>
                            <p className="text-gray-400 mb-4">
                                A chrome extension in manifest v3 utilising chrome storage API to storage
                                notes in a website specific manner.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Chrome API", "CSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mahadevpnair10/WebNoter"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">MovieVerse</h3>
                            <p className="text-gray-400 mb-4">
                                Movie Recommendation and Watchlist Organiser application on both mobile and web platforms.
                                Recommends movie integrating ML&AI.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Django", "Pandas", "React-Native", "React"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mahadevpnair10/MovieVerse-Website"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Employee</h3>
                            <p className="text-gray-400 mb-4">
                                A employee management platform in pure Java.
                                Perfroms CRUD operations on Employees.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "Swing GUI"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mahadevpnair10/Employee"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};