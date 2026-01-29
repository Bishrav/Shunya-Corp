import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Projects | SHUNYA',
    description: 'Explore our portfolio of interactive 3D websites, custom web apps, and digital transformation projects.',
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
