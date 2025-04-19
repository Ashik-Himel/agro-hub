/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function FarmingGuidesSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
            <BookOpen className="mr-2 h-4 w-4 inline-block" />
            Farming Guides
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-900">
            Expert Farming Guides
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Discover comprehensive, step-by-step guides for successful farming
            across various crops and conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`details`}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-900 group-hover:text-green-700">
                  {guide.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {guide.description}
                </p>
                <div className="mt-4 flex items-center text-green-600 font-medium">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/farming-guides"
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-950"
          >
            View All Farming Guides
          </Link>
        </div>
      </div>
    </section>
  );
}

const guides = [
  {
    id: 1,
    title: "Organic Vegetable Gardening",
    description:
      "Learn how to grow organic vegetables using sustainable practices, natural pest control, and proper soil management.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjoEs9akSZ6_SIfjRq5haV8KOFMaXW-Ik8g&s",
    slug: "organic-vegetable-gardening",
  },
  {
    id: 2,
    title: "Crop Rotation Techniques",
    description:
      "Discover effective crop rotation strategies to improve soil health, reduce pests, and increase yields naturally.",
    image:
      "https://eos.com/wp-content/uploads/2019/11/four-year-crop-rotation.jpg.webp",
    slug: "crop-rotation-techniques",
  },
  {
    id: 3,
    title: "Water Conservation Methods",
    description:
      "Explore efficient irrigation systems and water conservation techniques for sustainable farming in various climates.",
    image:
      "https://streamline.imgix.net/0ed7ff4e-f9cd-4b58-91d0-b5a66d57def9/a62661d1-25fb-4df8-8601-1f602b0d8b48/AdobeStock_272609537.jpeg?ixlib=rb-1.1.0&w=2000&h=2000&fit=max&or=0&s=9cd5f274dd315c084cc1427935a9576d",
    slug: "water-conservation-methods",
  },
];
