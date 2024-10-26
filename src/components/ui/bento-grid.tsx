import { Endpoints } from "@/constants/endpoints";
import { cn } from "@/lib/cn";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    images,
    image_alt,
    url
}: {
    className?: string;
    title?: string | React.ReactNode;
    icon?: React.ReactNode;
    images: string,
    image_alt: string,
    url: string

}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4  bg-white border justify-between flex flex-col space-y-4 overflow-hidden",
                className
            )}
        >
            <div className="h-[185px] overflow-hidden">
                <Image src={Endpoints.ImageUrl + images} alt={image_alt} width={500} height={150} className="rounded-sm" />
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className=" font-bold text-neutral-600  my-2 line-clamp-2">
                    {title}
                </div>
            </div>
        </div>
    );
};
