import { Endpoints } from "@/constants/endpoints";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";

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
                "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
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
        <Link href={url}
            className={cn(
                "row-span-1  relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4  bg-white border justify-between flex flex-col space-y-4 overflow-hidden hover:scale-105 cursor-pointer max-md:max-w-sm mx-auto",
                className
            )}
        >
            <div className=" overflow-hidden">
                <Image src={Endpoints.ImageUrl + images} alt={image_alt} width={500} height={250} className="rounded-sm max-h-[170px] md:min-h-[150px] " />
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className=" font-bold text-neutral-600  line-clamp-2">
                    {title}
                </div>
            </div>
        </Link>
    );
};
