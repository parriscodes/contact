import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = () => {
  return (
    <Popover className="nav-popover-container">
      <div className="nav-main-container">
        <div className="nav-desktop-container">
          <div className="nav-desktop-container-1">
            <Link href="/">
              <a className="nav-logo-primary">
                <span className="sr-only">LandSeaAir inc.</span>
                <img
                  src="/images/logo/lsa-logo3.png"
                  alt="LandSeaAir Logo"
                  height="180"
                  width="180"
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="nav-popover-btn">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href="/solutions">
              <a className="navlink">Our Solutions</a>
            </Link>
            <Link href="/about-us">
              <a className="navlink">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="navlink">Contact Us</a>
            </Link>
            <Link href="/blog">
              <a className="navlink">Blog</a>
            </Link>
          </Popover.Group>
          <div className="nav-spacing" />
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="nav-popover-panel">
          <div className="nav-popover-panel-container">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <span className="sr-only">LandSeaAir inc.</span>
                <img
                  src="/images/logo/lsa-logo3.png"
                  alt="LandSeaAir Logo"
                  height="150"
                  width="150"
                />

                <div className="-mr-2">
                  <Popover.Button className="nav-popover-btn">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="nav-mobile-container">
              <div className="nav-mobile-container-1">
                <Link href="/">
                  <a className="navlink">Home</a>
                </Link>
                <Link href="/solutions">
                  <a className="navlink">Our Solutions</a>
                </Link>
                <Link href="/about-us">
                  <a className="navlink">About Us</a>
                </Link>
                <Link href="/contact">
                  <a className="navlink">Contact Us</a>
                </Link>
                <Link href="/blog">
                  <a className="navlink">Blog</a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
