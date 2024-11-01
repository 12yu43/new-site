import Header from "@/components/shared/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="mt-14 md:mt-10 min-h-[calc(100vh-200px)]">
                {children}
            </main>
        </>
    );
}
