/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Check,
  AlertTriangle,
  Leaf,
  Sprout,
  ArrowRight,
  Download,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// This would normally be fetched from a database or CMS
// For this example, we're using static data
const strategy = {
  title: "Organic Pest Control Methods",
  slug: "organic-pest-control",
  description:
    "Learn how to manage pests in your garden or farm using natural, chemical-free methods that protect beneficial insects and the environment.",
  image:
    "https://cdn.shopify.com/s/files/1/0673/1697/3862/files/stale.jpg?v=1690956842",
  category: "Pest Control",
  approach: "Organic",
  updatedDate: "February 15, 2024",
  content: {
    introduction:
      "Organic pest control involves managing pests using natural methods without synthetic chemicals. This approach focuses on prevention, building healthy soil, encouraging biodiversity, and using natural products when intervention is necessary. Organic methods protect beneficial insects, soil microorganisms, and the environment while providing effective pest management.",
    sections: [
      {
        title: "Prevention: The First Line of Defense",
        content:
          "The most effective organic pest control strategy is prevention. Start with healthy soil, which produces strong plants that can better resist pests and diseases. Choose pest-resistant varieties suited to your climate and growing conditions. Practice crop rotation to disrupt pest life cycles, and maintain proper spacing for good air circulation. Keep your garden clean by removing diseased plants and debris that can harbor pests.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KTLsrmvzt3qDTQpTTfhFhmcjv1iqUfdFdQ&s",
        imageAlt: "Healthy garden with diverse plantings for pest prevention",
      },
      {
        title: "Physical Barriers and Traps",
        content:
          "Physical barriers prevent pests from reaching your plants. Row covers, netting, and plant collars can protect against flying insects, birds, and soil-dwelling pests. Sticky traps catch flying insects like aphids and whiteflies. Yellow tr  and soil-dwelling pests. Sticky traps catch flying insects like aphids and whiteflies. Yellow traps attract aphids and whiteflies, while blue traps work well for thrips. Pheromone traps can monitor and reduce specific insect populations by attracting males with synthetic versions of female scents. Handpicking larger pests like caterpillars and beetles is labor-intensive but effective for small gardens.",
        image:
          "https://www.picturethisai.com/image-handle/website_cmsname/image/1080/432716804033282048.jpeg?x-oss-process=image/format,webp/quality,q_80&v=1.0",
        imageAlt:
          "Various physical pest barriers including row covers and sticky traps",
      },
      {
        title: "Beneficial Insects and Biological Controls",
        content:
          "Nature provides its own pest control through beneficial insects that prey on garden pests. Ladybugs, lacewings, and praying mantises feed on aphids and other soft-bodied insects. Parasitic wasps lay eggs inside caterpillars and other hosts. Ground beetles consume slugs, snails, and soil-dwelling pests. Attract these beneficial insects by planting diverse flowering plants that provide nectar and pollen. You can also purchase beneficial insects for release in your garden when pest populations are high.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeJQNHC6jj2KeS73CNjudDXGN-mToiHYiRg&s",
        imageAlt: "Ladybug feeding on aphids on a plant leaf",
      },
      {
        title: "Companion Planting",
        content:
          "Companion planting involves growing certain plants together to repel pests or attract beneficial insects. Aromatic herbs like basil, mint, and rosemary repel many common garden pests. Marigolds deter nematodes and other soil pests. Nasturtiums act as trap crops for aphids, drawing them away from your vegetables. Flowering plants like cosmos, zinnias, and sunflowers attract pollinators and beneficial insects that prey on pests.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5dL2WB19gy-s0QvYn_HF_TZ7aRoq1qBTFA&s",
        imageAlt: "Companion planting with vegetables and flowers intermixed",
      },
      {
        title: "Organic Sprays and Treatments",
        content:
          "When prevention isn't enough, organic sprays can help control pest outbreaks. Neem oil, derived from the neem tree, disrupts insect feeding and reproduction. Insecticidal soaps kill soft-bodied insects by disrupting their cell membranes. Diatomaceous earth, a powder made from fossilized algae, has sharp microscopic edges that cut through insect exoskeletons. Bacillus thuringiensis (Bt) is a naturally occurring bacteria that targets specific caterpillars. Homemade sprays using garlic, hot peppers, or soap can also be effective for minor infestations.",
        image:
          "https://squarefootgardening.org/wp-content/uploads/2020/05/shutterstock_199679120-scaled-jpg.webp",
        imageAlt: "Person applying organic neem oil spray to plants",
      },
      {
        title: "Cultural Practices",
        content:
          "Cultural practices are the ongoing activities that help prevent and manage pests. Proper watering techniques, like watering at the base of plants in the morning, reduce fungal diseases. Mulching conserves moisture, suppresses weeds, and creates habitat for beneficial insects like ground beetles. Regular monitoring allows you to catch pest problems early when they're easier to manage. Healthy soil with proper nutrients helps plants resist pests and diseases naturally.",
        image:
          "https://plantcelltechnology.com/cdn/shop/articles/shutterstock-1964177716.jpg?v=1708231067&width=1100",
        imageAlt: "Gardener inspecting plants for early signs of pest damage",
      },
      {
        title: "Integrated Approach",
        content:
          "The most effective organic pest control combines multiple strategies. Start with prevention, monitor regularly for early detection, use physical barriers and traps, encourage beneficial insects, practice companion planting, and use organic treatments only when necessary. This integrated approach creates a balanced ecosystem where pests are kept in check naturally, reducing the need for intervention over time.",
        image: "https://www.agrivi.com/wp-content/uploads/2016/05/sl1-1.jpg",
        imageAlt:
          "Diverse garden ecosystem with multiple pest control strategies in use",
      },
    ],
    conclusion:
      "Organic pest control is a sustainable approach that works with nature rather than against it. While it may require more planning and observation than chemical methods, it creates a healthier garden ecosystem that becomes more resilient over time. By building healthy soil, encouraging biodiversity, and using natural products when needed, you can effectively manage pests while protecting beneficial insects, wildlife, and the environment.",
  },
  commonPests: [
    {
      name: "Aphids",
      description:
        "Small sap-sucking insects that can quickly multiply and weaken plants",
      organicSolutions: [
        "Spray with strong water stream to dislodge",
        "Introduce ladybugs or lacewings",
        "Apply insecticidal soap or neem oil",
        "Plant trap crops like nasturtiums",
      ],
    },
    {
      name: "Caterpillars",
      description: "Larvae of butterflies and moths that feed on plant foliage",
      organicSolutions: [
        "Handpick and remove",
        "Apply Bacillus thuringiensis (Bt)",
        "Encourage parasitic wasps",
        "Use row covers during egg-laying season",
      ],
    },
    {
      name: "Slugs and Snails",
      description:
        "Mollusks that feed on leaves and fruits, especially in damp conditions",
      organicSolutions: [
        "Set up beer traps",
        "Create barriers with copper tape or diatomaceous earth",
        "Handpick at night when active",
        "Encourage predators like ground beetles and birds",
      ],
    },
  ],
  organicProducts: [
    {
      name: "Neem Oil",
      uses: "Controls a wide range of insects including aphids, mealybugs, and mites",
      application:
        "Mix 2 tsp neem oil with 1 tsp mild liquid soap and 1 quart water. Spray on affected plants, covering all surfaces including undersides of leaves.",
      precautions:
        "Apply in evening to avoid harming beneficial insects. May cause leaf burn in hot weather or on sensitive plants.",
    },
    {
      name: "Insecticidal Soap",
      uses: "Effective against soft-bodied insects like aphids, whiteflies, and spider mites",
      application:
        "Apply directly to pests, thoroughly coating them. Repeat every 5-7 days as needed.",
      precautions:
        "Some plants may be sensitive. Test on a small area first. Not effective once dried.",
    },
    {
      name: "Diatomaceous Earth",
      uses: "Controls crawling insects with exoskeletons like ants, beetles, and slugs",
      application:
        "Apply as a dry powder around plants or on foliage. Reapply after rain.",
      precautions:
        "Use food-grade DE only. Avoid inhalation. Less effective when wet.",
    },
    {
      name: "Bacillus thuringiensis (Bt)",
      uses: "Specifically targets caterpillars without harming other insects",
      application:
        "Mix according to package directions and spray on foliage where caterpillars feed.",
      precautions:
        "Apply in evening as UV light degrades Bt. Will not harm beneficial insects but can affect butterfly larvae.",
    },
  ],
  relatedStrategies: [
    {
      title: "Integrated Pest Management (IPM)",
      slug: "integrated-pest-management",
      image:
        "https://www.nifa.usda.gov/sites/default/files/styles/hero_image_small_1024w/public/2023-09/pests-pesticide.jpg?itok=D7c4ldn4",
    },
    {
      title: "Companion Planting for Pest Control",
      slug: "companion-planting",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VXriWRxh9soGI-N-8bLDxT0lh6eJpXs4Sg&s",
    },
    {
      title: "Beneficial Insects Guide",
      slug: "beneficial-insects",
      image:
        "https://i.ytimg.com/vi/ai8XRf_wYjA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAfV2Awa4QnbRH-MqwYdjZPTA0v7A",
    },
  ],
  downloadableResources: [
    {
      title: "Organic Pest Control Quick Reference Guide",
      description: "Printable chart of common pests and organic solutions",
      url: "#",
    },
    {
      title: "DIY Organic Spray Recipes",
      description: "Step-by-step instructions for homemade pest control sprays",
      url: "#",
    },
    {
      title: "Beneficial Insects Identification Guide",
      description: "Visual guide to identifying helpful garden insects",
      url: "#",
    },
  ],
};

export default function PestControlStrategyPage() {
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
            <Link href="/pest-control" className="hover:text-green-600">
              Pest Control
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-900 font-medium">{strategy.title}</span>
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
                    {strategy.category}
                  </Badge>
                  <Badge className="bg-green-500 text-white hover:bg-green-600">
                    {strategy.approach}
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
                  {strategy.title}
                </h1>

                <p className="text-xl text-gray-600">{strategy.description}</p>

                <div className="flex items-center text-sm text-gray-600">
                  <span>Last updated: {strategy.updatedDate}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Organic Approach
                    </p>
                    <p className="text-sm text-gray-600">
                      Natural methods without synthetic chemicals
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Safe for beneficial insects
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Environmentally friendly
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      No harmful residues on food
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Promotes long-term ecosystem health
                    </span>
                  </div>
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
            <img
              src={strategy.image}
              alt={strategy.title}
              className="w-full h-full object-cover"
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
                  {strategy.content.introduction}
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                {strategy.content.sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-bold text-green-900">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                    <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="w-full h-full object-cover"
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
                  {strategy.content.conclusion}
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
              {/* Downloadable Resources */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Downloadable Resources
                </h3>
                <div className="space-y-3">
                  {strategy.downloadableResources.map((resource, index) => (
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

              {/* Related Strategies */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Related Strategies
                </h3>
                <div className="space-y-4">
                  {strategy.relatedStrategies.map((relatedStrategy, index) => (
                    <Link key={index} href={`#`} className="flex gap-3 group">
                      <div className="relative h-16 w-24 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={relatedStrategy.image}
                          alt={relatedStrategy.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-700 line-clamp-2">
                          {relatedStrategy.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Link
                    href="#"
                    className="text-green-600 hover:text-green-700 font-medium flex items-center"
                  >
                    View All Strategies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Ecosystem Health
                      </p>
                      <p className="text-sm text-gray-600">
                        Preserves beneficial insects and soil microorganisms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Sprout className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Long-term Solution
                      </p>
                      <p className="text-sm text-gray-600">
                        Creates a balanced system that becomes more resilient
                        over time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertTriangle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Reduced Resistance
                      </p>
                      <p className="text-sm text-gray-600">
                        Pests are less likely to develop resistance to diverse
                        control methods
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pests and Organic Solutions */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">
            Common Pests and Organic Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategy.commonPests.map((pest, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="p-5">
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    {pest.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{pest.description}</p>
                  <h4 className="font-medium text-green-800 mb-2">
                    Organic Solutions:
                  </h4>
                  <ul className="space-y-2">
                    {pest.organicSolutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organic Products */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">
            Organic Pest Control Products
          </h2>

          <Tabs defaultValue="neem-oil" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="neem-oil">Neem Oil</TabsTrigger>
              <TabsTrigger value="insecticidal-soap">
                Insecticidal Soap
              </TabsTrigger>
              <TabsTrigger value="diatomaceous-earth">
                Diatomaceous Earth
              </TabsTrigger>
              <TabsTrigger value="bt">Bacillus thuringiensis</TabsTrigger>
            </TabsList>

            {strategy.organicProducts.map((product, index) => (
              <TabsContent
                key={index}
                value={product.name.toLowerCase().replace(/\s+/g, "-")}
                className="mt-0"
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">
                    {product.name}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Uses</h4>
                      <p className="text-gray-700">{product.uses}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">
                        Application
                      </h4>
                      <p className="text-gray-700">{product.application}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">
                        Precautions
                      </h4>
                      <p className="text-gray-700">{product.precautions}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">
                  Important Note
                </h3>
                <p className="text-gray-700">
                  Even organic products should be used responsibly and as a last
                  resort. Always read and follow label instructions carefully.
                  Apply in the evening to minimize impact on beneficial insects,
                  and avoid spraying plants when they&apos;re water-stressed or
                  during the hottest part of the day.
                </p>
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
              Stay Updated on Pest Control Methods
            </h2>
            <p className="text-green-100 mb-6">
              Subscribe to our newsletter to receive the latest organic pest
              control tips, seasonal alerts, and agricultural news directly to
              your inbox.
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
