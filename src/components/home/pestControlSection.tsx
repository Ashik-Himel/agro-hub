/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Bug, Shield, ArrowRight } from "lucide-react";

export default function PestControlSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
            <Bug className="mr-2 h-4 w-4 inline-block" />
            Pest Control
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-900">
            Effective Pest Management
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Identify common agricultural pests and learn about organic and
            conventional control methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://www.agric.wa.gov.au/sites/gateway/files/X09_2903_Paropsis_sp_beetle.JPG"
              alt="Pest identification guide"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Pest Identification Guide
              </h3>
              <p className="text-white/90 mb-4">
                Visual guide to identify common agricultural pests with detailed
                descriptions and images.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-white font-medium hover:text-green-200"
              >
                View Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pestSolutions.map((solution) => (
              <div
                key={solution.id}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-green-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {solution.description}
                </p>
                <Link
                  href={`#`}
                  className="text-sm flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pest-control"
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-950"
          >
            Explore All Pest Control Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

const pestSolutions = [
  {
    id: 1,
    title: "Organic Pest Control",
    description:
      "Natural methods to control pests using companion planting, beneficial insects, and organic sprays.",
    slug: "organic-solutions",
  },
  {
    id: 2,
    title: "Integrated Pest Management",
    description:
      "Comprehensive approach combining prevention, monitoring, and control strategies for sustainable pest management.",
    slug: "integrated-management",
  },
  {
    id: 3,
    title: "Common Crop Diseases",
    description:
      "Identify and treat common crop diseases with early detection techniques and effective treatments.",
    slug: "crop-diseases",
  },
  {
    id: 4,
    title: "Seasonal Pest Calendar",
    description:
      "Plan ahead with our seasonal pest calendar showing when different pests are most active in your region.",
    slug: "seasonal-calendar",
  },
];
