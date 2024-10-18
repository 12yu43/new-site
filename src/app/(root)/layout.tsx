import Header from "@/components/shared/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="mt-28">
                {children}
            </main>
        </>
    );
}
