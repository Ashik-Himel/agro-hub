import { Wheat, Leaf, Droplets, Sun, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CropDetailsSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f8faf5]">
      <div className="container">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
            <Wheat className="mr-2 h-4 w-4 inline-block" />
            Crop Details
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-900">
            Comprehensive Crop Information
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Detailed profiles of popular crops with growing requirements, care
            instructions, and harvesting tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {crops.map((crop) => (
            <div
              key={crop.id}
              className="rounded-lg border border-green-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Wheat className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900">
                  {crop.name}
                </h3>
              </div>

              <p className="text-gray-600 mb-6">{crop.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-amber-500" />
                  <span className="text-sm text-gray-600">{crop.sunlight}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-600">{crop.water}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">
                    {crop.growthTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-5 w-5 rounded-full"
                    style={{ backgroundColor: crop.soilColor }}
                  ></div>
                  <span className="text-sm text-gray-600">{crop.soil}</span>
                </div>
              </div>

              <Link
                href={`details`}
                className="flex items-center text-green-600 font-medium hover:text-green-700"
              >
                View Full Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/crop-details"
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-950"
          >
            Explore All Crops
          </Link>
        </div>
      </div>
    </section>
  );
}

const crops = [
  {
    id: 1,
    name: "Tomatoes",
    description:
      "A versatile fruit commonly grown in home gardens, rich in vitamins and antioxidants.",
    sunlight: "Full Sun",
    water: "Moderate",
    growthTime: "70-85 days",
    soil: "Well-drained",
    soilColor: "#8B4513",
    slug: "tomatoes",
  },
  {
    id: 2,
    name: "Wheat",
    description:
      "A staple cereal grain cultivated worldwide for its seed, a cereal grain used for flour production.",
    sunlight: "Full Sun",
    water: "Moderate",
    growthTime: "120-150 days",
    soil: "Loamy",
    soilColor: "#A0522D",
    slug: "wheat",
  },
  {
    id: 3,
    name: "Lettuce",
    description:
      "A leafy green vegetable commonly used in salads, sandwiches, and other dishes for its fresh, crisp texture.",
    sunlight: "Partial Shade",
    water: "Regular",
    growthTime: "45-60 days",
    soil: "Rich, moist",
    soilColor: "#654321",
    slug: "lettuce",
  },
];
