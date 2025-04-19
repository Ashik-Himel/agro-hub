import {
  Sprout,
  BookOpen,
  Wheat,
  Bug,
  MessageSquare,
  CloudSun,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#f8faf5]">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-900">
              Grow Better with Our Resources
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our agriculture information hub provides comprehensive resources
              to help farmers and gardeners achieve better yields, sustainable
              practices, and effective pest management.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start mt-12 max-w-6xl">
          <div className="flex flex-col items-center space-y-2 border border-green-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-green-100">
              <Sprout className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900">
              Comprehensive Farming Guides
            </h3>
            <p className="text-gray-600 text-center">
              Step-by-step guides for various crops, from planting to
              harvesting, tailored for different climates and soil types.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 border border-green-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-green-100">
              <Wheat className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900">
              Detailed Crop Information
            </h3>
            <p className="text-gray-600 text-center">
              In-depth profiles of hundreds of crops with optimal growing
              conditions, nutritional requirements, and expected yields.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 border border-green-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-green-100">
              <Bug className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900">
              Pest Control Solutions
            </h3>
            <p className="text-gray-600 text-center">
              Identify common agricultural pests and diseases with our visual
              guide and learn about organic and chemical control methods.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 border border-green-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-green-100">
              <CloudSun className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900">
              Weather Integration
            </h3>
            <p className="text-gray-600 text-center">
              Get localized weather forecasts and alerts specifically designed
              for agricultural planning and decision-making.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 border border-green-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-green-100">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900">
              Seasonal Planting Calendar
            </h3>
            <p className="text-gray-600 text-center">
              Interactive planting calendars customized to your region to help
              you plan your farming activities throughout the year.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 border border-green-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 rounded-full bg-green-100">
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900">
              Expert Consultation
            </h3>
            <p className="text-gray-600 text-center">
              Connect with agricultural experts through our platform for
              personalized advice and solutions to your farming challenges.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/farming-guides"
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore Our Guides
          </a>
        </div>
      </div>
    </section>
  );
}
