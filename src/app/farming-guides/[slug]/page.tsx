import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  Bookmark,
  Printer,
  Share2,
  ThumbsUp,
  ArrowRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This would normally be fetched from a database or CMS
// For this example, we're using static data
const guide = {
  title: "Organic Vegetable Gardening: A Complete Guide",
  slug: "organic-vegetable-gardening",
  description:
    "Learn how to grow organic vegetables using sustainable practices, natural pest control, and proper soil management for a bountiful harvest.",
  image: "/placeholder.svg?height=600&width=1200",
  category: "Vegetables",
  difficulty: "Beginner",
  readTime: 15,
  author: {
    name: "Sarah Johnson",
    title: "Master Gardener",
    image: "/placeholder.svg?height=100&width=100",
  },
  publishDate: "March 15, 2023",
  updatedDate: "January 10, 2024",
  content: {
    introduction:
      "Organic vegetable gardening is a rewarding way to grow your own food while using sustainable practices that benefit both your health and the environment. By avoiding synthetic pesticides and fertilizers, you'll produce vegetables that are free from harmful chemicals while supporting beneficial insects and soil microorganisms.",
    sections: [
      {
        title: "Getting Started: Planning Your Organic Garden",
        content:
          "Before you start planting, it's important to plan your garden carefully. Consider the space you have available, the amount of sunlight it receives, and the types of vegetables you want to grow. Choose a location that gets at least 6-8 hours of direct sunlight daily and has good drainage. If you're limited on space, container gardening is an excellent alternative.",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Garden planning diagram showing layout of vegetable beds",
      },
      {
        title: "Building Healthy Soil",
        content:
          "The foundation of successful organic gardening is healthy soil. Start by testing your soil to determine its pH and nutrient levels. Most vegetables prefer a slightly acidic to neutral pH (6.0-7.0). Improve your soil by adding compost, aged manure, or other organic matter. This enhances soil structure, drainage, and nutrient content. Consider using cover crops during the off-season to prevent erosion and add nutrients back to the soil.",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Person adding compost to garden soil",
      },
      {
        title: "Choosing Organic Seeds and Plants",
        content:
          "Select organic, non-GMO seeds or seedlings whenever possible. Look for varieties that are well-suited to your climate and resistant to common diseases in your area. Heirloom varieties often have excellent flavor and can be good choices for organic gardens. Start seeds indoors 6-8 weeks before your last frost date, or purchase organic seedlings from a reputable nursery.",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Various organic vegetable seeds in packets",
      },
      {
        title: "Natural Pest Management",
        content:
          "Instead of synthetic pesticides, use natural methods to control pests. Encourage beneficial insects like ladybugs, lacewings, and predatory wasps by planting flowers such as marigolds, cosmos, and zinnias. Practice companion planting—for example, plant basil near tomatoes to repel tomato hornworms. For persistent pest problems, try organic solutions like neem oil, insecticidal soap, or diatomaceous earth.",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Ladybug on a plant leaf eating aphids",
      },
      {
        title: "Organic Fertilizing Methods",
        content:
          "Feed your plants with organic fertilizers derived from natural sources. Compost tea, fish emulsion, seaweed extract, and worm castings are excellent options. Apply these fertilizers according to package directions, being careful not to over-fertilize, which can lead to excessive foliage growth at the expense of fruit production.",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Person applying compost tea to vegetable plants",
      },
      {
        title: "Water Conservation Techniques",
        content:
          "Use water efficiently in your organic garden. Install a drip irrigation system or soaker hoses to deliver water directly to plant roots, reducing waste and preventing fungal diseases that can occur with overhead watering. Mulch around plants with organic materials like straw, leaves, or grass clippings to retain moisture and suppress weeds. Water deeply but infrequently to encourage deep root growth.",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Drip irrigation system in a vegetable garden",
      },
      {
        title: "Harvesting and Seed Saving",
        content:
          "Harvest vegetables at their peak ripeness for the best flavor and nutrition. Most vegetables should be harvested in the morning when temperatures are cooler. To save seeds for next year's garden, select the healthiest, most productive plants. Allow some fruits to fully mature on the plant, then collect and properly dry the seeds before storing them in a cool, dry place.",
        image: "/placeholder.svg?height=400&width=600",
        imageAlt: "Person harvesting fresh vegetables from garden",
      },
    ],
    conclusion:
      "Organic vegetable gardening is a continuous learning process that connects you with nature and provides nutritious food for your table. By building healthy soil, using natural pest control methods, and conserving resources, you'll create a sustainable garden that improves over time. Start small, observe closely, and adjust your practices based on what works in your unique garden environment. Happy gardening!",
  },
  relatedGuides: [
    {
      id: 1,
      title: "Companion Planting Strategies",
      slug: "companion-planting",
      image: "/placeholder.svg?height=200&width=300",
      category: "Vegetables",
    },
    {
      id: 2,
      title: "Composting Fundamentals",
      slug: "composting-fundamentals",
      image: "/placeholder.svg?height=200&width=300",
      category: "Soil Management",
    },
    {
      id: 3,
      title: "Natural Pest Control Methods",
      slug: "natural-pest-control",
      image: "/placeholder.svg?height=200&width=300",
      category: "Pest Control",
    },
  ],
  tools: [
    "Garden fork and spade",
    "Hand trowel",
    "Pruning shears",
    "Watering can or hose with adjustable nozzle",
    "Garden gloves",
    "Wheelbarrow or garden cart",
    "Compost bin",
  ],
  downloadableResources: [
    {
      title: "Organic Vegetable Planting Calendar",
      description: "Monthly planting guide for your region",
      url: "details",
    },
    {
      title: "Companion Planting Chart",
      description: "Which plants grow well together",
      url: "details",
    },
    {
      title: "Organic Pest Control Reference",
      description: "Natural solutions for common garden pests",
      url: "details",
    },
  ],
};

export default function FarmingGuideDetailPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/farming-guides" className="hover:text-green-600">
              Farming Guides
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-900 font-medium">{guide.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    {guide.category}
                  </Badge>
                  <Badge
                    className={`${
                      guide.difficulty === "Beginner"
                        ? "bg-green-500"
                        : guide.difficulty === "Intermediate"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    } text-white hover:${
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

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
                  {guide.title}
                </h1>

                <p className="text-xl text-gray-600">{guide.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{guide.readTime} min read</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Updated: {guide.updatedDate}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={guide.author.image || "/placeholder.svg"}
                      alt={guide.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {guide.author.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {guide.author.title}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Printer className="h-4 w-4" />
                    Print
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 md:pb-12">
        <div className="container px-4 md:px-6">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={guide.image || "/placeholder.svg"}
              alt={guide.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="prose prose-green max-w-none mb-10">
                <p className="text-xl leading-relaxed">
                  {guide.content.introduction}
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                {guide.content.sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-bold text-green-900">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                    <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="prose prose-green max-w-none mt-10">
                <h2 className="text-2xl font-bold text-green-900">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {guide.content.conclusion}
                </p>
              </div>

              {/* User Engagement */}
              <div className="mt-10 pt-6 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-700">Was this guide helpful?</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      Yes
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Report an Issue
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              {/* Tools Needed */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Tools You&apos;ll Need
                </h3>
                <ul className="space-y-2">
                  {guide.tools.map((tool, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Downloadable Resources */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Downloadable Resources
                </h3>
                <div className="space-y-3">
                  {guide.downloadableResources.map((resource, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-md p-3"
                    >
                      <h4 className="font-medium text-green-900">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {resource.description}
                      </p>
                      <Link
                        href={resource.url}
                        className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download PDF
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Related Guides
                </h3>
                <div className="space-y-4">
                  {guide.relatedGuides.map((relatedGuide) => (
                    <Link
                      key={relatedGuide.id}
                      href={`/farming-guides/${relatedGuide.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative h-16 w-24 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedGuide.image || "/placeholder.svg"}
                          alt={relatedGuide.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-700 line-clamp-2">
                          {relatedGuide.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {relatedGuide.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Link
                    href="/farming-guides"
                    className="text-green-600 hover:text-green-700 font-medium flex items-center"
                  >
                    View All Guides
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-green-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Want More Farming Tips?
            </h2>
            <p className="text-green-100 mb-6">
              Subscribe to our newsletter to receive the latest farming guides,
              seasonal tips, and agricultural news directly to your inbox.
            </p>
            <form className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 h-10 rounded-l-md border-0 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-r-md bg-white px-4 text-sm font-medium text-green-700 shadow transition-colors hover:bg-green-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
