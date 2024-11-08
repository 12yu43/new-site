"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/cn";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import CustomSearchBar from "./CustomSearchBar";
import { MenuItem as MenuItemType, navItems } from "@/constants/navItems";

export const Navbar = ({
  className,
}: {
  navItems: MenuItemType[];
  className?: string;
}) => {
  const [active, setActive] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);  
  console.log(scrollYProgress.get())

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (scrollYProgress.get() > 0.03) {
        setVisible(true);
      }
      else {
        setVisible(false)
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}
        className={cn(
          "flex max-md:hidden fixed top-0 inset-x-0 mx-auto border  shadow-lg  w-full bg-white z-[5000] px-4 py-2   items-center justify-center ",
          className
        )}
      >
        <div className="relative w-full  flex items-center justify-center">
          <div
            className={cn(" inset-x-0 max-w-2xl mx-auto z-50", className)}
          >
            <Menu setActive={setActive}>
              {
                navItems.map((item, i) => (
                  <MenuItem setActive={setActive} active={active} item={item.label} path={item.path ?? ""} key={i}>
                    {item.subMenu && item.subMenu.length !== 0 && <div className="flex flex-col space-y-4 text-base">
                      {
                        item.subMenu.map((subItem, idx) => (
                          <HoveredLink href={subItem.path} key={idx}>{subItem.label}</HoveredLink>
                        ))
                      }
                    </div>}
                  </MenuItem>
                ))
              }
            </Menu>
          </div>
          <div className="absolute right-2">
            <CustomSearchBar />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
