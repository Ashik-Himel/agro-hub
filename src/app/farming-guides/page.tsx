/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ChevronRight,
  Filter,
  Search,
  BookOpen,
  Clock,
  ArrowRight,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function FarmingGuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-green-200/30 bg-green-600 px-3 py-1 text-sm font-semibold text-green-100">
              <BookOpen className="mr-1 h-3.5 w-3.5" />
              <span>Expert Knowledge</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Farming Guides & Resources
            </h1>
            <p className="max-w-[700px] text-green-100 md:text-xl">
              Comprehensive, step-by-step guides for successful farming across
              various crops, seasons, and growing conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Search farming guides..."
                className="pl-10 bg-white border-gray-200"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">All Categories</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="grains">Grains</option>
                <option value="herbs">Herbs</option>
              </select>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">All Difficulty</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-green-900">
                Featured Guides
              </h2>
              <p className="text-gray-600 mt-1">
                Our most popular and comprehensive farming guides
              </p>
            </div>
            <Link
              href="/farming-guides/featured"
              className="text-green-600 hover:text-green-700 font-medium flex items-center mt-2 md:mt-0"
            >
              View all featured
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.id}
                href={`/farming-guides/${guide.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge
                      className={`${
                        guide.difficulty === "Beginner"
                          ? "bg-green-500"
                          : guide.difficulty === "Intermediate"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      } hover:${
                        guide.difficulty === "Beginner"
                          ? "bg-green-600"
                          : guide.difficulty === "Intermediate"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                    >
                      {guide.difficulty}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{guide.readTime} min read</span>
                    <span className="text-gray-300">•</span>
                    <Leaf className="h-4 w-4 text-green-500" />
                    <span>{guide.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 group-hover:text-green-700 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-4 flex-1">
                    {guide.description}
                  </p>
                  <div className="mt-auto flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight text-green-900 mb-8">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="h-12 w-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-900">
                    {category.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href={`/farming-guides/category/${category.slug}`}
                  className="flex items-center text-green-600 font-medium hover:text-green-700"
                >
                  View Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight text-green-900 mb-8">
            All Farming Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides.map((guide) => (
              <Link
                key={guide.id}
                href={`/farming-guides/${guide.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Badge
                      className={`${
                        guide.difficulty === "Beginner"
                          ? "bg-green-500"
                          : guide.difficulty === "Intermediate"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      } hover:${
                        guide.difficulty === "Beginner"
                          ? "bg-green-600"
                          : guide.difficulty === "Intermediate"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                    >
                      {guide.difficulty}
                    </Badge>
                    <span className="text-gray-300">•</span>
                    <span>{guide.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-green-900 group-hover:text-green-700 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {guide.description}
                  </p>
                  <div className="mt-auto flex items-center text-green-600 font-medium group-hover:text-green-700 text-sm">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Load More Guides
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-green-700 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Stay Updated with Farming Tips
              </h2>
              <p className="text-green-100">
                Subscribe to our newsletter to receive the latest farming
                guides, seasonal tips, and agricultural news directly to your
                inbox.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="flex max-w-md mx-auto md:ml-auto md:mr-0">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-green-500"
                />
                <Button className="ml-2 bg-white text-green-700 hover:bg-green-100">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Sample data
const featuredGuides = [
  {
    id: 1,
    title: "Organic Vegetable Gardening: A Complete Guide",
    description:
      "Learn how to grow organic vegetables using sustainable practices, natural pest control, and proper soil management for a bountiful harvest.",
    image:
      "https://i0.wp.com/www.gardening4joy.com/wp-content/uploads/2021/06/organic-gardening-main-veg.jpg?resize=1080%2C700&ssl=1",
    slug: "organic-vegetable-gardening",
    category: "Vegetables",
    difficulty: "Beginner",
    readTime: 15,
  },
  {
    id: 2,
    title: "Crop Rotation Techniques for Improved Soil Health",
    description:
      "Discover effective crop rotation strategies to improve soil health, reduce pests and diseases, and increase yields naturally over multiple growing seasons.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPaTGT8bDwiDILXFjER-uvgs6lcX3hpIsMQ&s",
    slug: "crop-rotation-techniques",
    category: "Soil Management",
    difficulty: "Intermediate",
    readTime: 12,
  },
  {
    id: 3,
    title: "Water Conservation Methods for Sustainable Farming",
    description:
      "Explore efficient irrigation systems and water conservation techniques for sustainable farming in various climates, including drought-prone regions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cTKkBsGZewsUTw7KJ75JCx8TFUHF-_nVeQ&s",
    slug: "water-conservation-methods",
    category: "Sustainability",
    difficulty: "Advanced",
    readTime: 18,
  },
];

const categories = [
  {
    id: 1,
    name: "Vegetables",
    description:
      "Guides for growing various vegetables in different conditions and seasons.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    bgColor: "#22c55e",
    slug: "vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    description:
      "Learn how to grow and care for fruit trees, bushes, and vines.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    bgColor: "#f97316",
    slug: "fruits",
  },
  {
    id: 3,
    name: "Grains",
    description: "Comprehensive guides for cultivating various grain crops.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    bgColor: "#eab308",
    slug: "grains",
  },
  {
    id: 4,
    name: "Sustainable Practices",
    description:
      "Techniques for environmentally friendly and sustainable farming.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    bgColor: "#0ea5e9",
    slug: "sustainable-practices",
  },
];

const allGuides = [
  {
    id: 1,
    title: "Starting Seeds Indoors",
    description:
      "A beginner's guide to starting seeds indoors for an early harvest.",
    slug: "starting-seeds-indoors",
    category: "Vegetables",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Companion Planting Strategies",
    description:
      "Learn which plants grow well together to maximize growth and deter pests.",
    slug: "companion-planting",
    category: "Vegetables",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Pruning Fruit Trees",
    description:
      "Proper techniques for pruning fruit trees to improve yield and tree health.",
    slug: "pruning-fruit-trees",
    category: "Fruits",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Raised Bed Gardening",
    description:
      "How to build and maintain raised beds for better drainage and soil control.",
    slug: "raised-bed-gardening",
    category: "Vegetables",
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Growing Wheat at Home",
    description: "Small-scale wheat cultivation techniques for home gardeners.",
    slug: "growing-wheat",
    category: "Grains",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Composting Fundamentals",
    description:
      "Create rich, organic compost to improve soil fertility naturally.",
    slug: "composting-fundamentals",
    category: "Soil Management",
    difficulty: "Beginner",
  },
];
