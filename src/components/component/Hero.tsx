"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DyUN8xOPgYn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Chivo } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@radix-ui/themes";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";

export function Hero() {
  const [triggerCommingSoon, setTriggerCommingSoon] = React.useState(false);

  return (
    <div className="flex relative min-h-[100dvh] flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <header className="flex fixed  z-50 h-16 w-full shrink-0 items-center px-4 md:px-6 bg-[#F5F5F7] border-b border-[#D2D2D7]">
        <Link href="#" className="mr-6 flex" prefetch={false}>
          <img
            src="/logo.png"
            alt="Logo"
            className="md:w-[150px] w-[250px] h-auto"
          />
        </Link>
        <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#F5F5F7] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#D2D2D7] hover:text-[#1D1D1F] focus:bg-[#D2D2D7] focus:text-[#1D1D1F] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#D2D2D7]/50 data-[state=open]:bg-[#D2D2D7]/50"
                  prefetch={false}></Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#F5F5F7] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#D2D2D7] hover:text-[#1D1D1F] focus:bg-[#D2D2D7] focus:text-[#1D1D1F] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#D2D2D7]/50 data-[state=open]:bg-[#D2D2D7]/50"
                  prefetch={false}>
                  Pricing
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#F5F5F7] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#D2D2D7] hover:text-[#1D1D1F] focus:bg-[#D2D2D7] focus:text-[#1D1D1F] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#D2D2D7]/50 data-[state=open]:bg-[#D2D2D7]/50"
                  prefetch={false}>
                  Resources
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#F5F5F7] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#D2D2D7] hover:text-[#1D1D1F] focus:bg-[#D2D2D7] focus:text-[#1D1D1F] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#D2D2D7]/50 data-[state=open]:bg-[#D2D2D7]/50"
                  prefetch={false}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto w-[150px]">
          <Button
            onClick={() => {
              const targetElement = document.getElementById("start");
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#0071E3] text-white hover:bg-[#0077E6] focus:bg-[#0077E6] focus:outline-none focus:ring-2 focus:ring-[#0077E6] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]">
            Get Started
          </Button>
        </div>
      </header>
      <motion.main className="flex-1">
        <section className="flex w-full justify-center mx-auto py-10 min-h-[500px] mt-[80px] md:mt-[50px]">
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    data-aos="fade-up"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Credentialing with BadgeMate
                  </h1>
                  <p
                    data-aos="fade-right"
                    className="max-w-[600px] text-[#86868B] md:text-xl">
                    Streamline your digital badge management and empower your
                    organization, learners, and partners.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#start"
                    data-aos="fade-right"
                    data-aos-duration="1800"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#0071E3] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0077E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077E6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F7] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#D2D2D7] bg-[#F5F5F7] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#D2D2D7] hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2D2D7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F7] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Request a Demo
                  </Link>
                  <Link
                    href="#"
                    data-aos="fade-left"
                    data-aos-duration="2200"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#D2D2D7] bg-[#F5F5F7] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#D2D2D7] hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2D2D7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F7] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                data-aos="zoom-in"
                data-aos-duration="1200"
                src="/displayimage1.webp"
                width="500"
                height="500"
                alt="Hero"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center"
              />
            </div>
          </div>
          <div id="start"></div>
        </section>
        <section className="flex w-full justify-center py-5 bg-[#F5F5F7]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  data-aos="fade-up"
                  size="3"
                  color="indigo"
                  variant="soft">
                  Features
                </Badge>

                <h2
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Credentialing Process
                </h2>
                <p
                  data-aos="fade-left"
                  className="max-w-[900px] text-[#86868B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BadgeMate offers a comprehensive suite of features to simplify
                  your digital badge management and empower your organization,
                  learners, and partners.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li data-aos="fade-right" data-aos-duration="1400">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <BadgeIcon className="h-6 w-6 text-[#0071E3]" />
                        <h3 className="text-xl font-bold">
                          Easy Badge & certificates Creation
                        </h3>
                      </div>
                      <p className="text-[#86868B]">
                        Quickly design and issue custom digital badges with our
                        intuitive badge builder.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1400">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <ImportIcon className="h-6 w-6 text-[#0071E3]" />
                        <h3 className="text-xl font-bold">
                          Seamless Integration
                        </h3>
                      </div>
                      <p className="text-[#86868B]">
                        Integrate BadgeMate with your existing systems and
                        workflows for a seamless experience.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1400">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <LockIcon className="h-6 w-6 text-[#0071E3]" />
                        <h3 className="text-xl font-bold">
                          Secure Credentials
                        </h3>
                      </div>
                      <p className="text-[#86868B]">
                        Ensure the integrity of your digital credentials with
                        advanced security features.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                data-aos="zoom-out-left"
                data-aos-duration="1400"
                src="/displayimage2.jpeg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="flex w-full justify-center py-5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  data-aos="fade-up"
                  size="3"
                  color="indigo"
                  variant="soft">
                  Benefits
                </Badge>
                <h2
                  data-aos="fade-right"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empower Your Organization, Learners, and Partners
                </h2>
                <p
                  data-aos="fade-left"
                  className="max-w-[900px] text-[#86868B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BadgeMate offers a range of benefits for organizations,
                  individuals, and educational institutions, helping you
                  streamline your credentialing process and unlock new
                  opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1400"
                    className="flex items-center gap-2">
                    <GroupIcon className="h-6 w-6 text-[#0071E3]" />
                    <h3 className="text-xl font-bold">For Organizations</h3>
                  </div>
                  <p className="text-[#86868B]">
                    Streamline your credentialing process, enhance brand
                    recognition, and unlock new revenue streams with BadgeMate.
                  </p>
                </div>
                <div
                  className="grid gap-4"
                  data-aos="fade-right"
                  data-aos-duration="1700">
                  <div className="flex items-center gap-2">
                    <LoaderIcon className="h-6 w-6 text-[#0071E3]" />
                    <h3 className="text-xl font-bold">For Learners</h3>
                  </div>
                  <p className="text-[#86868B]">
                    Empower your learners with verifiable digital credentials
                    that showcase their achievements and skills.
                  </p>
                </div>
                <div
                  className="grid gap-4"
                  data-aos="fade-right"
                  data-aos-duration="2000">
                  <div className="flex items-center gap-2">
                    <SchoolIcon className="h-6 w-6 text-[#0071E3]" />
                    <h3 className="text-xl font-bold">For Education</h3>
                  </div>
                  <p className="text-[#86868B]">
                    Enhance your educational programs and provide learners with
                    valuable digital credentials.
                  </p>
                </div>
              </div>
              <img
                data-aos="zoom-out-left"
                data-aos-duration="1600"
                src="/displayimage3.jpeg"
                width="550"
                height="310"
                alt="Benefits"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </motion.main>
      <footer
        data-aos="fade-up"
        className="bg-[#F5F5F7] p-6 md:py-12 w-full border-t border-[#D2D2D7]">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link
              href="#"
              className="text-[#86868B] hover:text-[#1D1D1F]"
              prefetch={false}>
              About Us
            </Link>
            <Link
              href="#"
              className="text-[#86868B] hover:text-[#1D1D1F]"
              prefetch={false}>
              Our Team
            </Link>
            <Link
              href="#"
              className="text-[#86868B] hover:text-[#1D1D1F]"
              prefetch={false}>
              Careers
            </Link>
            <Link
              href="#"
              className="text-[#86868B] hover:text-[#1D1D1F]"
              prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link
              href="#"
              className="text-[#86868B] hover:text-[#1D1D1F]"
              prefetch={false}>
              BadgeMate
            </Link>
            <Link href="#" prefetch={false} />
          </div>
        </div>
      </footer>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 BadgeMate. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BadgeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function GroupIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function ImportIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  );
}

function LoaderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function SchoolIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
