"use client"

import { Book, Menu, Sunset, Trees, Zap ,X} from "lucide-react";
import {useState} from "react"
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },

  menu = [
    { title: "Home", url: "./LandingPage" },
    {
      title: "About",
      url: "./About",
      
    },
    {
      title: "Blog",
      url: "#",
      
    },
    {
      title: "Program",
      url: "./Program",
    },
    {
      title: "Contact",
      url: "#",
    },
  ],

}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="top-0 z-50 py-4 px-0 md:px-8 lg:px-16">
      <nav
        className=" 
          hidden lg:flex
          mx-auto 
          items-center justify-space-between 
          max-w-[1200px] h-[52px]
          pt-4  pb-4 pl-8 
          rounded-[99px]
          backdrop-blur-[10px]
          border border-[rgba(255,255,255,0.18)]
          shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_0_1px_10px_rgba(255,255,255,0.2)]
        "
      >
        <div className="flex items-center  w-full">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2 ">
            <Image
              src="/logo1.png"
              width={84}
              height={50}
              className=""
              alt={logo.alt}
            />
          </a>

          {/* Menu */}
          <div className="ml-auto justify-between text-[#ECF1F4]  w-[423px] h-[39px] bg-red ">
            <NavigationMenu>
              <NavigationMenuList className=" w-68 ">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block lg:hidden px-5">
        <div className="flex items-center justify-between w-full h-[40px]
          rounded-[80px]
          bg-[rgba(236,241,244,0.03)]
          backdrop-blur-[10px]
          border border-[rgba(255,255,255,0.18)]
          shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_0_1px_10px_rgba(255,255,255,0.2)]"
        >
          {/* Logo */}
          <a href={logo.url} className="flex items-center">
            <Image 
              src="/logo1.png" 
              width={100}
              height={200}
              className="px-6" 
              alt={logo.alt} 
            />
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="w-[30px] h-[30px] p-0 text-white hover:bg-transparent mr-3"
              >
                <div className="w-[30px] h-[30px] flex flex-col justify-center items-center relative">
                  {/* Hamburger to X animation */}
                  <span 
                    className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ${
                      isOpen ? 'rotate-45' : '-translate-y-2'
                    }`}
                  ></span>
                  <span 
                    className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span 
                    className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ${
                      isOpen ? '-rotate-45' : 'translate-y-2'
                    }`}
                  ></span>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="top"
              className="w-[335px] h-auto mx-5 mt-[80px] bg-gradient-to-b from-[#4A0D30] to-[#2D0820] backdrop-blur-[50px] rounded-b-[12px] p-0 transition-all duration-300 ease-in border-0 left-5 right-5 [&>button]:hidden"
              style={{
                boxShadow: '0px 4px 20px 0px #D6D8E033'
              }}
            >
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              
              <div className="flex flex-col py-[10px] gap-[10px]">
                {menu.map((item, index) => (
                  <div key={item.title}>
                    <SheetClose asChild>
                      <a 
                        href={item.url} 
                        className="block text-white text-[24px] font-normal py-4 px-6 text-center hover:text-[#F1247B] transition-colors duration-200"
                        style={{
                          fontFamily: 'Work Sans',
                          lineHeight: '1.2'
                        }}
                      >
                        {item.title}
                      </a>
                    </SheetClose>
                    {index < menu.length - 1 && (
                      <div className="w-[253px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </section>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80 text-white">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-transparent hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors">
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const SubMenuLink = ({
  item
}) => {
  return (
    
     <a className="hover:bg-transparent hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}>
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-[#FAFCFE] font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Navbar1;