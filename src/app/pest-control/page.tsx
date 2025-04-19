/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Bug,
  Shield,
  ArrowRight,
  AlertTriangle,
  Check,
  Leaf,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PestControlPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-green-200/30 bg-green-600 px-3 py-1 text-sm text-green-100">
              <Bug className="mr-1 h-3.5 w-3.5" />
              <span>Pest Management</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Effective Pest Control Solutions
            </h1>
            <p className="max-w-[700px] text-green-100 md:text-xl">
              Identify common agricultural pests and learn about organic and
              conventional control methods to protect your crops.
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
                placeholder="Search pests or diseases..."
                className="pl-10 bg-white border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pest Identification Guide */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-green-900">
                Pest Identification Guide
              </h2>
              <p className="text-gray-600 mt-1">
                Learn to identify common agricultural pests to implement
                effective control measures
              </p>
            </div>
            <Link
              href="/pest-control/identification"
              className="text-green-600 hover:text-green-700 font-medium flex items-center mt-2 md:mt-0"
            >
              View full guide
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonPests.map((pest) => (
              <Link
                key={pest.id}
                href={`/pest-control/pests/${pest.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={pest.image}
                    alt={pest.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                        pest.threatLevel === "High"
                          ? "bg-red-100 text-red-800"
                          : pest.threatLevel === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {pest.threatLevel} Threat
                    </div>
                    <span className="text-gray-500 text-sm">{pest.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-green-900 group-hover:text-green-700 mb-2">
                    {pest.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {pest.description}
                  </p>
                  <div className="mt-auto flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Identification & Control
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Control Methods Tabs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight text-green-900 mb-8 text-center">
            Pest Control Methods
          </h2>

          <Tabs defaultValue="organic" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full max-w-md">
                <TabsTrigger value="organic">Organic</TabsTrigger>
                <TabsTrigger value="integrated">Integrated</TabsTrigger>
                <TabsTrigger value="chemical">Chemical</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="organic" className="mt-0">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">
                      Organic Pest Control
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Organic pest control methods use natural substances and
                    processes to manage pests without synthetic chemicals. These
                    approaches are environmentally friendly and promote a
                    balanced ecosystem.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {organicMethods.map((method, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">
                            {method.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/pest-control/organic-methods"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Explore Organic Methods
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integrated" className="mt-0">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">
                      Integrated Pest Management (IPM)
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Integrated Pest Management is an ecosystem-based strategy
                    that focuses on long-term prevention of pests through a
                    combination of techniques such as biological control,
                    habitat manipulation, and judicious use of pesticides.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        The IPM Approach:
                      </h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600">
                        <li>Identify and monitor pests</li>
                        <li>Set action thresholds</li>
                        <li>Prevent pest problems</li>
                        <li>
                          Use control methods starting with least risky options
                        </li>
                        <li>
                          Evaluate results and adjust strategies as needed
                        </li>
                      </ol>
                    </div>
                  </div>

                  <Link
                    href="/pest-control/integrated-management"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn About IPM
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chemical" className="mt-0">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">
                      Chemical Control
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Chemical control involves the use of pesticides to kill,
                    repel, or regulate pest populations. While effective, these
                    methods should be used responsibly and as part of an
                    integrated approach.
                  </p>

                  <div className="bg-amber-50 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mr-2" />
                      Important Safety Considerations:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Always read and follow label instructions</li>
                      <li>Use appropriate personal protective equipment</li>
                      <li>
                        Consider environmental impact and non-target organisms
                      </li>
                      <li>Observe pre-harvest intervals</li>
                      <li>Store and dispose of chemicals properly</li>
                    </ul>
                  </div>

                  <Link
                    href="/pest-control/chemical-methods"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Chemical Control Guide
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Common Crop Diseases */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-green-900">
                Common Crop Diseases
              </h2>
              <p className="text-gray-600 mt-1">
                Identify and treat common plant diseases that can affect your
                crops
              </p>
            </div>
            <Link
              href="/pest-control/diseases"
              className="text-green-600 hover:text-green-700 font-medium flex items-center mt-2 md:mt-0"
            >
              View all diseases
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cropDiseases.map((disease) => (
              <div
                key={disease.id}
                className="flex flex-col md:flex-row gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="md:w-1/3 aspect-video md:aspect-square relative rounded-md overflow-hidden">
                  <img
                    src={disease.image}
                    alt={disease.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-lg font-bold text-green-900 mb-2">
                    {disease.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {disease.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">
                        Affects:{" "}
                      </span>
                      <span className="text-gray-600">{disease.affects}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">
                        Symptoms:{" "}
                      </span>
                      <span className="text-gray-600">{disease.symptoms}</span>
                    </p>
                  </div>
                  <Link
                    href={`/pest-control/diseases/${disease.slug}`}
                    className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
                  >
                    Treatment Guide
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Pest Calendar */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-green-900 mb-4">
              Seasonal Pest Calendar
            </h2>
            <p className="text-gray-600">
              Plan ahead with our seasonal pest calendar showing when different
              pests are most active in your region. Being prepared is the first
              step in effective pest management.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {seasons.map((season) => (
                  <div
                    key={season.name}
                    className="rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <div
                      className="p-3 text-white font-medium text-center"
                      style={{ backgroundColor: season.color }}
                    >
                      {season.name}
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">
                        Common Pests:
                      </h4>
                      <ul className="space-y-1">
                        {season.pests.map((pest, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <Bug className="h-4 w-4 text-gray-500 mt-0.5 shrink-0" />
                            {pest}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pest-control/seasonal-calendar"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View Detailed Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Help CTA */}
      <section className="py-12 md:py-16 bg-green-700 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Need Expert Help with Pest Control?
              </h2>
              <p className="text-green-100 mb-6">
                Our agricultural experts can provide personalized advice for
                your specific pest control challenges. Contact us today to
                discuss your situation and get tailored solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-green-700 shadow transition-colors hover:bg-green-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact an Expert
                </Link>
                <Link
                  href="/pest-control/consultation"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 relative h-64 md:h-auto rounded-xl overflow-hidden">
              <img
                src="https://thumbs.dreamstime.com/b/adult-farmer-checking-plants-his-farm-agronomist-holds-tablet-corn-field-examining-crops-agribusiness-concept-152874950.jpg"
                alt="Agricultural expert examining crops"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Sample data
const commonPests = [
  {
    id: 1,
    name: "Aphids",
    description:
      "Small sap-sucking insects that can cause stunted growth, leaf curl, and transmit plant viruses. They reproduce quickly and can infest a wide range of crops.",
    image: "https://cdn.britannica.com/63/144363-050-6E691B61/aphids-eggs.jpg",
    type: "Insect",
    threatLevel: "Medium",
    slug: "aphids",
  },
  {
    id: 2,
    name: "Colorado Potato Beetle",
    description:
      "Striped beetle that defoliates potato, tomato, and other nightshade plants. Both adults and larvae feed on leaves and can completely defoliate plants.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ogttuTXd52nRYxJJyCld_4GGWPuc7PSfhg&s",
    type: "Beetle",
    threatLevel: "High",
    slug: "colorado-potato-beetle",
  },
  {
    id: 3,
    name: "Cabbage White Butterfly",
    description:
      "White butterflies whose caterpillars feed on brassicas like cabbage, broccoli, and kale, creating holes in leaves and contaminating produce.",
    image:
      "https://images.theconversation.com/files/562635/original/file-20231130-17-dos5eb.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
    type: "Lepidoptera",
    threatLevel: "Medium",
    slug: "cabbage-white-butterfly",
  },
];

const organicMethods = [
  {
    name: "Companion Planting",
    description:
      "Growing certain plants together to repel pests or attract beneficial insects.",
  },
  {
    name: "Beneficial Insects",
    description:
      "Introducing predatory insects like ladybugs and lacewings that feed on pest species.",
  },
  {
    name: "Physical Barriers",
    description:
      "Using row covers, netting, or collars to prevent pests from reaching plants.",
  },
  {
    name: "Organic Sprays",
    description:
      "Natural solutions like neem oil, insecticidal soap, or garlic spray to control pests.",
  },
];

const cropDiseases = [
  {
    id: 1,
    name: "Late Blight",
    description:
      "A destructive disease caused by the fungus-like organism Phytophthora infestans, infamous for causing the Irish Potato Famine.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgqya9bVCMBMgPeV_Um8KAzZySVBLWFha9Q&s",
    affects: "Potatoes, Tomatoes",
    symptoms:
      "Dark water-soaked spots on leaves, white fuzzy growth, brown lesions on stems and fruits",
    slug: "late-blight",
  },
  {
    id: 2,
    name: "Powdery Mildew",
    description:
      "A fungal disease that appears as a white powdery substance on leaf surfaces, stems, and sometimes fruit.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FOznTXbEt2l_He9ApC7jh7IWbe1riUL94w&s",
    affects: "Cucurbits, Grapes, Apples, Roses, many ornamentals",
    symptoms:
      "White powdery spots on leaves and stems, yellowing leaves, stunted growth",
    slug: "powdery-mildew",
  },
];

const seasons = [
  {
    name: "Spring",
    color: "#4ade80",
    pests: ["Aphids", "Cutworms", "Flea Beetles", "Slugs and Snails"],
  },
  {
    name: "Summer",
    color: "#f59e0b",
    pests: [
      "Japanese Beetles",
      "Tomato Hornworms",
      "Spider Mites",
      "Squash Bugs",
    ],
  },
  {
    name: "Fall",
    color: "#b45309",
    pests: [
      "Cabbage Worms",
      "Cucumber Beetles",
      "Corn Earworms",
      "Grasshoppers",
    ],
  },
  {
    name: "Winter",
    color: "#0ea5e9",
    pests: [
      "Scale Insects",
      "Mealybugs",
      "Greenhouse Whiteflies",
      "Stored Grain Pests",
    ],
  },
];
