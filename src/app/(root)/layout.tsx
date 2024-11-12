import BreadCrumb from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
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
            <main className="my-20 md:my-12 min-h-[calc(100vh-200px)]">
                {children}
            </main>
            <Footer />
        </div>
    );
}
