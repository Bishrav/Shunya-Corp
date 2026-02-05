import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore our premium IT services: Interactive 3D Websites, Custom Web Apps, Game Development, AI Solutions, and Digital Twins.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
