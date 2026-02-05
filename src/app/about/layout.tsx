import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover the story behind Shunya, the leading IT company in Nepal. We merge art with code to create immersive digital experiences.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
