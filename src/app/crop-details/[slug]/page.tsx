import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Sun,
  Droplets,
  Leaf,
  Calendar,
  ThermometerSun,
  Ruler,
  AlertTriangle,
  Check,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This would normally be fetched from a database or CMS
// For this example, we're using static data
const crop = {
  name: "Tomatoes",
  scientificName: "Solanum lycopersicum",
  slug: "tomatoes",
  description:
    "Tomatoes are the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. They are a significant source of umami flavor and are widely used in many cuisines around the world. Tomatoes come in various sizes, shapes, and colors, including red, yellow, orange, green, and purple.",
  image: "/placeholder.svg?height=600&width=1200",
  category: "Vegetables",
  origin: "Western South America and Central America",
  nutritionalValue:
    "Tomatoes are a good source of vitamin C, potassium, folate, and vitamin K. They are also rich in lycopene, a powerful antioxidant that has been linked to various health benefits, including reduced risk of heart disease and cancer.",
  growingRequirements: {
    sunlight: "Full Sun (6-8 hours daily)",
    water: "1-2 inches per week, consistent moisture",
    soil: "Well-drained, slightly acidic (pH 6.0-6.8)",
    soilColor: "#8B4513",
    temperature: "65-85°F (18-29°C) during the day, above 55°F (13°C) at night",
    spacing: "24-36 inches between plants, 36-48 inches between rows",
    growthTime: "70-85 days to maturity from transplant",
    plantingDepth:
      "1/4 inch deep for seeds, up to first set of leaves for transplants",
    harvestSeason: "Summer to Fall",
    companions: ["Basil", "Marigolds", "Nasturtiums", "Garlic", "Onions"],
    avoidPlanting: ["Potatoes", "Corn", "Kohlrabi", "Fennel"],
  },
  varieties: [
    {
      name: "Roma",
      description: "Plum tomatoes with few seeds, ideal for sauces and canning",
      image: "/placeholder.svg?height=200&width=200",
      daysToMaturity: "75-80",
      size: "3-4 ounces",
      type: "Determinate",
    },
    {
      name: "Beefsteak",
      description: "Large, meaty tomatoes perfect for sandwiches and slicing",
      image: "/placeholder.svg?height=200&width=200",
      daysToMaturity: "85-90",
      size: "10-16 ounces",
      type: "Indeterminate",
    },
    {
      name: "Cherry",
      description: "Small, sweet tomatoes great for snacking and salads",
      image: "/placeholder.svg?height=200&width=200",
      daysToMaturity: "65-70",
      size: "1-2 ounces",
      type: "Indeterminate",
    },
    {
      name: "Heirloom",
      description: "Open-pollinated varieties with unique flavors and colors",
      image: "/placeholder.svg?height=200&width=200",
      daysToMaturity: "70-90",
      size: "Varies",
      type: "Mostly Indeterminate",
    },
  ],
  plantingInstructions: {
    whenToPlant:
      "Start seeds indoors 6-8 weeks before the last spring frost. Transplant outdoors 2 weeks after the last frost when soil has warmed.",
    howToPlant:
      "Plant seeds 1/4 inch deep. For transplants, dig a hole deep enough to bury the stem up to the first set of leaves. Space plants 24-36 inches apart in rows 36-48 inches apart.",
    careInstructions:
      "Water deeply and consistently, about 1-2 inches per week. Mulch to retain moisture and prevent soil-borne diseases from splashing onto leaves. Stake or cage plants for support. Prune suckers for indeterminate varieties to improve air circulation and fruit production.",
  },
  commonProblems: {
    pests: [
      {
        name: "Tomato Hornworm",
        description:
          "Large green caterpillars that can quickly defoliate plants",
        solution:
          "Handpick and remove. Introduce beneficial insects like parasitic wasps. Apply Bacillus thuringiensis (Bt) as a biological control.",
      },
      {
        name: "Aphids",
        description: "Small sap-sucking insects that can transmit diseases",
        solution:
          "Spray with strong water stream to dislodge. Introduce ladybugs or lacewings. Use insecticidal soap or neem oil for severe infestations.",
      },
    ],
    diseases: [
      {
        name: "Early Blight",
        description:
          "Fungal disease causing dark spots with concentric rings on lower leaves",
        solution:
          "Remove affected leaves. Ensure good air circulation. Apply organic fungicide. Practice crop rotation.",
      },
      {
        name: "Blossom End Rot",
        description:
          "Dark, sunken areas at the bottom of fruits due to calcium deficiency",
        solution:
          "Maintain consistent watering. Add calcium to soil. Mulch to retain moisture. Test soil pH and adjust if necessary.",
      },
    ],
  },
  harvestingTips:
    "Harvest when fruits are firm and fully colored. For best flavor, pick tomatoes when they are ripe but still firm. Use pruning shears or scissors to cut the stem above the fruit to avoid damaging the plant. Tomatoes will continue to ripen after picking if kept at room temperature.",
  storageInformation:
    "Store ripe tomatoes at room temperature, away from direct sunlight, for 3-5 days. Refrigeration can diminish flavor and cause mealy texture, but can extend shelf life to 1-2 weeks if necessary. For longer storage, consider freezing, canning, or drying.",
  culinaryUses:
    "Tomatoes are incredibly versatile in the kitchen. They can be eaten raw in salads, sandwiches, and salsas. They can be cooked into sauces, soups, stews, and casseroles. Tomatoes can be roasted, grilled, fried, or stuffed. They can also be preserved through canning, drying, or freezing.",
  relatedCrops: [
    {
      name: "Peppers",
      slug: "peppers",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Eggplant",
      slug: "eggplant",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Potatoes",
      slug: "potatoes",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  relatedGuides: [
    {
      title: "Growing Tomatoes in Containers",
      slug: "container-tomatoes",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      title: "Pruning Tomato Plants for Maximum Yield",
      slug: "pruning-tomatoes",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      title: "Organic Pest Control for Tomatoes",
      slug: "tomato-pest-control",
      image: "/placeholder.svg?height=100&width=150",
    },
  ],
};

export default function CropDetailPage() {
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
            <Link href="/crop-details" className="hover:text-green-600">
              Crop Details
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-900 font-medium">{crop.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
                {crop.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-4">
                {crop.name}
              </h1>
              <p className="text-lg text-gray-600 italic mb-4">
                {crop.scientificName}
              </p>
              <p className="text-gray-700 mb-6">{crop.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  Growing Guide
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  View Varieties
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={crop.image || "/placeholder.svg"}
                alt={crop.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Sun className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Sunlight</p>
                <p className="text-sm text-gray-600">
                  {crop.growingRequirements.sunlight}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Water</p>
                <p className="text-sm text-gray-600">
                  {crop.growingRequirements.water}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Growth Time</p>
                <p className="text-sm text-gray-600">
                  {crop.growingRequirements.growthTime}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Harvest</p>
                <p className="text-sm text-gray-600">
                  {crop.growingRequirements.harvestSeason}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="growing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="growing">Growing Guide</TabsTrigger>
              <TabsTrigger value="varieties">Varieties</TabsTrigger>
              <TabsTrigger value="problems">Common Problems</TabsTrigger>
              <TabsTrigger value="harvesting">Harvesting & Storage</TabsTrigger>
              <TabsTrigger value="culinary">Culinary Uses</TabsTrigger>
            </TabsList>

            {/* Growing Guide Tab */}
            <TabsContent value="growing" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-4">
                      Growing Requirements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Sun className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Sunlight</p>
                          <p className="text-gray-600">
                            {crop.growingRequirements.sunlight}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Droplets className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Water</p>
                          <p className="text-gray-600">
                            {crop.growingRequirements.water}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ backgroundColor: "#F5E8DD" }}
                        >
                          <div
                            className="h-5 w-5 rounded-full"
                            style={{
                              backgroundColor:
                                crop.growingRequirements.soilColor,
                            }}
                          ></div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Soil</p>
                          <p className="text-gray-600">
                            {crop.growingRequirements.soil}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <ThermometerSun className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            Temperature
                          </p>
                          <p className="text-gray-600">
                            {crop.growingRequirements.temperature}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Ruler className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Spacing</p>
                          <p className="text-gray-600">
                            {crop.growingRequirements.spacing}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Leaf className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            Growth Time
                          </p>
                          <p className="text-gray-600">
                            {crop.growingRequirements.growthTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-4">
                      Planting Instructions
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium text-green-800 mb-2">
                          When to Plant
                        </h3>
                        <p className="text-gray-700">
                          {crop.plantingInstructions.whenToPlant}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-green-800 mb-2">
                          How to Plant
                        </h3>
                        <p className="text-gray-700">
                          {crop.plantingInstructions.howToPlant}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-green-800 mb-2">
                          Care Instructions
                        </h3>
                        <p className="text-gray-700">
                          {crop.plantingInstructions.careInstructions}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-4">
                      Companion Planting
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium text-green-800 mb-2">
                          Good Companions
                        </h3>
                        <ul className="space-y-2">
                          {crop.growingRequirements.companions.map(
                            (companion, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                  {companion}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-red-800 mb-2">
                          Avoid Planting With
                        </h3>
                        <ul className="space-y-2">
                          {crop.growingRequirements.avoidPlanting.map(
                            (plant, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{plant}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 sticky top-4">
                    <h3 className="text-lg font-bold text-green-900 mb-4">
                      Related Guides
                    </h3>
                    <div className="space-y-4">
                      {crop.relatedGuides.map((guide, index) => (
                        <Link
                          key={index}
                          href={`/farming-guides/${guide.slug}`}
                          className="flex gap-3 group"
                        >
                          <div className="relative h-16 w-24 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={guide.image || "/placeholder.svg"}
                              alt={guide.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-green-700 line-clamp-2">
                              {guide.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <h3 className="text-lg font-bold text-green-900 mb-4">
                      Nutritional Value
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {crop.nutritionalValue}
                    </p>

                    <Separator className="my-4" />

                    <h3 className="text-lg font-bold text-green-900 mb-4">
                      Origin
                    </h3>
                    <p className="text-gray-700 text-sm">{crop.origin}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Varieties Tab */}
            <TabsContent value="varieties" className="mt-0">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Tomato Varieties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {crop.varieties.map((variety, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={variety.image || "/placeholder.svg"}
                        alt={variety.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-green-900 mb-1">
                        {variety.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {variety.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium text-gray-900">
                            Days to Maturity
                          </p>
                          <p className="text-gray-600">
                            {variety.daysToMaturity}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Size</p>
                          <p className="text-gray-600">{variety.size}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="font-medium text-gray-900">Type</p>
                          <p className="text-gray-600">{variety.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Common Problems Tab */}
            <TabsContent value="problems" className="mt-0">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-green-900 mb-6">
                    Common Pests
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {crop.commonProblems.pests.map((pest, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-200 shadow-sm p-5"
                      >
                        <h3 className="text-lg font-bold text-red-800 mb-2">
                          {pest.name}
                        </h3>
                        <p className="text-gray-700 mb-4">{pest.description}</p>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-medium text-green-900 mb-2">
                            Solution:
                          </h4>
                          <p className="text-gray-700">{pest.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-green-900 mb-6">
                    Common Diseases
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {crop.commonProblems.diseases.map((disease, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-200 shadow-sm p-5"
                      >
                        <h3 className="text-lg font-bold text-red-800 mb-2">
                          {disease.name}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {disease.description}
                        </p>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-medium text-green-900 mb-2">
                            Solution:
                          </h4>
                          <p className="text-gray-700">{disease.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-amber-800 mb-2">
                        Prevention Tips
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • Rotate crops every 3-4 years to prevent disease
                          buildup in soil
                        </li>
                        <li>
                          • Provide adequate spacing for good air circulation
                        </li>
                        <li>
                          • Water at the base of plants to keep foliage dry
                        </li>
                        <li>• Remove and destroy diseased plant material</li>
                        <li>• Use disease-resistant varieties when possible</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Harvesting & Storage Tab */}
            <TabsContent value="harvesting" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-green-900 mb-4">
                    Harvesting Tips
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
                    <p className="text-gray-700">{crop.harvestingTips}</p>
                  </div>

                  <h2 className="text-2xl font-bold text-green-900 mb-4">
                    When to Harvest
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Color Change
                          </h3>
                          <p className="text-gray-700">
                            Harvest when the fruit has fully changed to its
                            mature color (red, yellow, etc. depending on
                            variety).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Firmness
                          </h3>
                          <p className="text-gray-700">
                            The fruit should be firm but slightly soft when
                            gently squeezed.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Ease of Removal
                          </h3>
                          <p className="text-gray-700">
                            Ripe tomatoes will come off the vine easily with a
                            gentle twist or pull.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-green-900 mb-4">
                    Storage Information
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
                    <p className="text-gray-700">{crop.storageInformation}</p>
                  </div>

                  <h2 className="text-2xl font-bold text-green-900 mb-4">
                    Storage Methods
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                      <h3 className="text-lg font-medium text-green-800 mb-2">
                        Fresh Storage
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • Store at room temperature, away from direct sunlight
                        </li>
                        <li>• Place stem-side down on a flat surface</li>
                        <li>
                          • Don&apos;t refrigerate unless necessary (affects
                          flavor)
                        </li>
                        <li>
                          • Keep away from ethylene-producing fruits like
                          bananas and apples
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                      <h3 className="text-lg font-medium text-green-800 mb-2">
                        Preservation Methods
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • Canning: Excellent for sauces, whole tomatoes, and
                          salsa
                        </li>
                        <li>
                          • Freezing: Blanch, peel, and freeze whole or diced
                        </li>
                        <li>
                          • Drying: Slice and dehydrate for sun-dried tomatoes
                        </li>
                        <li>• Fermenting: Create lacto-fermented tomatoes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Culinary Uses Tab */}
            <TabsContent value="culinary" className="mt-0">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Culinary Uses
              </h2>
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
                <p className="text-gray-700">{crop.culinaryUses}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Fresh tomato salad"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-green-900 mb-2">
                      Fresh Preparations
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Salads and sandwiches</li>
                      <li>• Bruschetta and crostini toppings</li>
                      <li>• Salsas and fresh sauces</li>
                      <li>• Gazpacho and cold soups</li>
                      <li>• Caprese salad with mozzarella and basil</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Tomato sauce"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-green-900 mb-2">
                      Cooked Preparations
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Pasta sauces and marinara</li>
                      <li>• Soups and stews</li>
                      <li>• Roasted or grilled as a side dish</li>
                      <li>• Stuffed tomatoes</li>
                      <li>• Tomato-based curries and stews</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Preserved tomatoes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-green-900 mb-2">
                      Preserved Preparations
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Canned whole tomatoes</li>
                      <li>• Tomato paste and sauce</li>
                      <li>• Sun-dried tomatoes</li>
                      <li>• Tomato jam and chutney</li>
                      <li>• Pickled green tomatoes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  Nutritional Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                    <h3 className="text-lg font-bold text-green-900 mb-3">
                      Rich in Antioxidants
                    </h3>
                    <p className="text-gray-700">
                      Tomatoes are high in lycopene, a powerful antioxidant that
                      may reduce the risk of heart disease and certain types of
                      cancer. Cooking tomatoes actually increases the
                      bioavailability of lycopene.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                    <h3 className="text-lg font-bold text-green-900 mb-3">
                      Vitamin-Packed
                    </h3>
                    <p className="text-gray-700">
                      Excellent source of vitamin C, potassium, folate, and
                      vitamin K. One medium tomato provides about 40% of the
                      recommended daily amount of vitamin C.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                    <h3 className="text-lg font-bold text-green-900 mb-3">
                      Heart Health
                    </h3>
                    <p className="text-gray-700">
                      The potassium and vitamin B in tomatoes help to reduce
                      cholesterol levels and lower blood pressure, supporting
                      overall heart health.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Crops */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Related Crops
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {crop.relatedCrops.map((relatedCrop, index) => (
              <Link
                key={index}
                href={`/crop-details/${relatedCrop.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={relatedCrop.image || "/placeholder.svg"}
                      alt={relatedCrop.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900 group-hover:text-green-700">
                      {relatedCrop.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-green-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Ready to Start Growing?
            </h2>
            <p className="text-green-100 mb-6">
              Check out our detailed growing guides and get started with your
              own tomato garden today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-700 hover:bg-green-100">
                View Growing Guide
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-green-600"
              >
                Explore Varieties
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
