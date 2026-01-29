export default function About() {
    return (
        <div className="min-h-screen pt-32 px-6 container mx-auto">
            {/* Hero Section */}
            <div className="mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">About <span className="text-shunya-cyan">SHUNYA</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    We are a collective of engineers, artists, and visionaries dedicated to pushing the boundaries of the digital web.
                </p>
            </div>

            {/* Vision Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
                <div className="p-8 glass rounded-2xl border border-white/10">
                    <h2 className="text-3xl font-bold font-display mb-4 text-shunya-purple">Our Vision</h2>
                    <p className="text-gray-300 leading-relaxed">
                        To bridge the gap between imagination and digital reality. We believe the internet should be an immersive, interactive, and intelligent space—not just a collection of static pages.
                    </p>
                </div>
                <div className="p-8 glass rounded-2xl border border-white/10">
                    <h2 className="text-3xl font-bold font-display mb-4 text-shunya-cyan">Our Methodology</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We combine high-performance engineering with cinematic aesthetics. Using the latest in WebGL, AI, and cloud infrastructure, we build digital products that feel alive.
                    </p>
                </div>
            </div>

            {/* Team/Stats Section (Simplified) */}
            <div className="mb-20 text-center">
                <h2 className="text-3xl font-bold font-display mb-12">The <span className="text-gradient">Core Team</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Global Clients", value: "50+" },
                        { label: "Projects Shipped", value: "120+" },
                        { label: "Awards Won", value: "15" },
                        { label: "Year Founded", value: "2023" }
                    ].map((stat) => (
                        <div key={stat.label} className="p-6 glass rounded-xl">
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
