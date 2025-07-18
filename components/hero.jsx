"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          AI-Powered Clarity  <br /> For Your Chaotic Cash
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          &quot;Because guessing your savings doesn&apos;t count as planning.&quot;
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            {!imageError ? (
              <Image
                src="/banner1.jpeg"
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg h-25 shadow-2xl border mx-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
                onError={() => setImageError(true)}
                unoptimized={false}
              />
            ) : (
              <div className="w-full h-[400px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-2xl border mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-gray-600">AI Finance Dashboard Preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
