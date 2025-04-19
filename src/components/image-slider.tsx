/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlayInterval?: number;
  className?: string;
}

export function ImageSlider({
  images,
  autoPlayInterval = 5000,
  className,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Pause autoplay when user interacts with controls
  const handleInteraction = useCallback(() => {
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timeout);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  if (!images.length) return null;

  return (
    <div
      className={cn(
        "relative w-full h-[calc(100vh-65px)] overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative min-w-full">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[calc(100vh-65px)] object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-40" />
            <div className="absolute left-1/2 top-1/2 -translate-1/2 max-w-[700px] z-50 text-white">
              <h1 className="text-5xl font-bold text-center mb-4">
                Welcome to AgroHub
              </h1>
              <p className="text-center mb-6">
                AgroHub is an Agriculure Information Hub where farmers can
                gather information about the agriculture. They can grow skills
                by gathering those information.
              </p>
              <div className="flex justify-center items-center gap-2">
                <Button asChild>
                  <Link href="/farming-guides">Farming Guides</Link>
                </Button>
                <Button variant="outline" className="text-black" asChild>
                  <Link href="contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          handleInteraction();
        }}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          handleInteraction();
        }}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              handleInteraction();
            }}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              currentIndex === index
                ? "bg-white w-5"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
