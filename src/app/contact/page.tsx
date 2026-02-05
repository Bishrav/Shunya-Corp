import { ContactForm } from "@/components/ui/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Shunya Development IT Company. We are ready to build your next digital masterpiece.",
};

export default function Contact() {
    return (
        <div className="min-h-screen pt-32 px-6 container mx-auto relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shunya-purple/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-shunya-cyan/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-center neon-text-cyan">Contact Us</h1>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Ready to build the impossible? Reach out to us for your next digital transformation project.
                </p>
                <ContactForm />
            </div>
        </div>
    );
}
