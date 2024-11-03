import BreadCrumb from "@/components/shared/BreadCrumb";
import Header from "@/components/shared/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <Header />
            <BreadCrumb />
            <main className="my-14 md:my-10 min-h-[calc(100vh-200px)]">
                {children}
            </main>
        </div>
    );
}
