/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Wheat,
  Sun,
  Droplets,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Details - AgroHub",
  description:
    "AgroHub is an Agriculure Information Hub where farmers can gather information about the agriculture.",
  keywords: "agriculture, information, farmer",
  robots: "index, follow",
};

export default function CropDetailsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-green-200/30 bg-green-600 px-3 py-1 text-sm font-semibold text-green-100">
              <Wheat className="mr-1 h-3.5 w-3.5" />
              <span>Crop Encyclopedia</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Comprehensive Crop Information
            </h1>
            <p className="max-w-[700px] text-green-100 md:text-xl">
              Detailed profiles of hundreds of crops with growing requirements,
              care instructions, and harvesting tips.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Search crops by name..."
                className="pl-10 bg-white border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crop Categories Tabs */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="vegetables" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
                <TabsTrigger value="fruits">Fruits</TabsTrigger>
                <TabsTrigger value="grains">Grains</TabsTrigger>
                <TabsTrigger value="herbs">Herbs</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="vegetables" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vegetables.map((crop) => (
                  <CropCard key={crop.id} crop={crop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fruits" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fruits.map((crop) => (
                  <CropCard key={crop.id} crop={crop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="grains" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grains.map((crop) => (
                  <CropCard key={crop.id} crop={crop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="herbs" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-600">
                  Herb crop information coming soon!
                </p>
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-0">
              <div className="text-center py-12">
                <p className="text-gray-600">Other crop types coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Crop */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-green-900">
                Featured Crop
              </h2>
              <p className="text-gray-600 mt-1">
                Detailed information about our featured crop of the month
              </p>
            </div>
            <Link
              href="#"
              className="text-green-600 hover:text-green-700 font-medium flex items-center mt-2 md:mt-0"
            >
              View all featured crops
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528"
                  alt="Tomatoes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Tomatoes (Solanum lycopersicum)
                </h3>
                <p className="text-gray-600 mb-6">
                  Tomatoes are the edible berry of the plant Solanum
                  lycopersicum, commonly known as a tomato plant. They are a
                  significant source of umami flavor and are widely used in many
                  cuisines around the world.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-amber-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Sunlight
                      </p>
                      <p className="text-sm text-gray-600">
                        Full Sun (6-8 hours)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Water</p>
                      <p className="text-sm text-gray-600">
                        1-2 inches per week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Growth Time
                      </p>
                      <p className="text-sm text-gray-600">
                        70-85 days to maturity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#8B4513]"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Soil</p>
                      <p className="text-sm text-gray-600">
                        Well-drained, slightly acidic
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="details"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    View Full Details
                  </Link>
                  <Link
                    href="details"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Growing Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Crops */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-green-900">
                Seasonal Crops
              </h2>
              <p className="text-gray-600 mt-1">
                Crops that are currently in season for planting or harvesting
              </p>
            </div>
            <Link
              href="#"
              className="text-green-600 hover:text-green-700 font-medium flex items-center mt-2 md:mt-0"
            >
              View seasonal calendar
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCrops.map((crop) => (
              <Link
                key={crop.id}
                href={`details`}
                className="group flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 mb-2">
                    {crop.season}
                  </div>
                  <h3 className="text-lg font-bold text-green-900 group-hover:text-green-700">
                    {crop.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {crop.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Tips */}
      <section className="py-12 md:py-16 bg-green-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              General Growing Tips
            </h2>
            <p className="text-green-100">
              No matter what crops you&apos;re growing, these fundamental tips
              will help ensure success in your agricultural endeavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-800/50 rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Understand Sunlight Needs
              </h3>
              <p className="text-green-100">
                Different crops require different amounts of sunlight. Know
                whether your crops need full sun, partial shade, or full shade
                for optimal growth.
              </p>
            </div>
            <div className="bg-green-800/50 rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Water Appropriately</h3>
              <p className="text-green-100">
                Most crops need consistent moisture, but overwatering can be as
                harmful as underwatering. Learn the specific water requirements
                for each crop you grow.
              </p>
            </div>
            <div className="bg-green-800/50 rounded-lg p-6">
              <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Soil Health Matters</h3>
              <p className="text-green-100">
                Healthy soil leads to healthy plants. Test your soil regularly
                and amend it with appropriate organic matter to maintain optimal
                growing conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Component for crop cards
function CropCard({ crop }: { crop: any }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
          <Wheat className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-900">{crop.name}</h3>
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
          <span className="text-sm text-gray-600">{crop.growthTime}</span>
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
  );
}

// Sample data
const vegetables = [
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
    name: "Carrots",
    description:
      "Root vegetables that are rich in beta-carotene, fiber, and antioxidants.",
    sunlight: "Full Sun",
    water: "Moderate",
    growthTime: "70-80 days",
    soil: "Sandy, loose",
    soilColor: "#D2B48C",
    slug: "carrots",
  },
  {
    id: 3,
    name: "Lettuce",
    description:
      "A leafy green vegetable commonly used in salads, sandwiches, and other dishes.",
    sunlight: "Partial Shade",
    water: "Regular",
    growthTime: "45-60 days",
    soil: "Rich, moist",
    soilColor: "#654321",
    slug: "lettuce",
  },
];

const fruits = [
  {
    id: 1,
    name: "Strawberries",
    description: "Sweet, red heart-shaped fruits with seeds on the outside.",
    sunlight: "Full Sun",
    water: "Regular",
    growthTime: "90-110 days",
    soil: "Well-drained, rich",
    soilColor: "#8B4513",
    slug: "strawberries",
  },
  {
    id: 2,
    name: "Blueberries",
    description: "Small, sweet blue-purple berries that grow on bushes.",
    sunlight: "Full Sun",
    water: "Regular",
    growthTime: "2-3 years to maturity",
    soil: "Acidic",
    soilColor: "#A52A2A",
    slug: "blueberries",
  },
  {
    id: 3,
    name: "Apples",
    description: "Crisp, round fruits that grow on trees in temperate regions.",
    sunlight: "Full Sun",
    water: "Moderate",
    growthTime: "3-5 years to bear fruit",
    soil: "Well-drained, loamy",
    soilColor: "#8B4513",
    slug: "apples",
  },
];

const grains = [
  {
    id: 1,
    name: "Wheat",
    description: "A staple cereal grain cultivated worldwide for its seed.",
    sunlight: "Full Sun",
    water: "Moderate",
    growthTime: "120-150 days",
    soil: "Loamy",
    soilColor: "#A0522D",
    slug: "wheat",
  },
  {
    id: 2,
    name: "Corn",
    description:
      "A cereal grain that was first domesticated by indigenous peoples in Mexico.",
    sunlight: "Full Sun",
    water: "Regular",
    growthTime: "60-100 days",
    soil: "Well-drained, fertile",
    soilColor: "#8B4513",
    slug: "corn",
  },
  {
    id: 3,
    name: "Rice",
    description: "A staple food for more than half of the world's population.",
    sunlight: "Full Sun",
    water: "Flooded/Very High",
    growthTime: "120-180 days",
    soil: "Clay, water-retentive",
    soilColor: "#A52A2A",
    slug: "rice",
  },
];

const seasonalCrops = [
  {
    id: 1,
    name: "Pumpkins",
    description: "Perfect for fall harvesting and Halloween decorations.",
    image:
      "https://i.ytimg.com/vi/DWPpds-2rZE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADGmYcekW77f-xI8rfqFotdCkvVw",
    season: "Fall",
    slug: "pumpkins",
  },
  {
    id: 2,
    name: "Spinach",
    description: "Cold-hardy leafy green that thrives in spring and fall.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22WVzesvK3hYaCCYHNHRqh5RItix3EzeJiw&s",
    season: "Spring/Fall",
    slug: "spinach",
  },
  {
    id: 3,
    name: "Tomatoes",
    description: "Summer favorite that needs warm weather to thrive.",
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528",
    season: "Summer",
    slug: "tomatoes",
  },
  {
    id: 4,
    name: "Garlic",
    description: "Plant in fall for harvest the following summer.",
    image:
      "https://i.guim.co.uk/img/media/43442656c722147e053264b6b914b3258642db2e/0_37_3812_2290/master/3812.jpg?width=1200&quality=85&auto=format&fit=max&s=436c942fad4edb5064c3a460516fc14a",
    season: "Fall Planting",
    slug: "garlic",
  },
];
