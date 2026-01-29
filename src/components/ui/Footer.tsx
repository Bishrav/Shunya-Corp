'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-black pt-20 pb-10 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-4xl font-display font-bold text-white mb-6">SHUNYA<span className="text-shunya-cyan">.</span></h2>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Engineering the digital future. We build immersive experiences that define the next generation of the web.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-shunya-cyan hover:text-black transition-all">X</Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-shunya-purple hover:text-white transition-all">In</Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">Ig</Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/projects" className="text-gray-400 hover:text-shunya-cyan transition-colors">Projects</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-shunya-purple transition-colors">Services</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-shunya-cyan transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>shunya@gmail.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>Silicon Valley, CA</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Shunya Corp. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-shunya-purple/10 rounded-full blur-[120px] pointer-events-none" />
        </footer>
    );
}
