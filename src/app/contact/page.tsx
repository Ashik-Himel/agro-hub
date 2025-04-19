import ContactSection from "@/components/home/contactSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - AgroHub",
  description:
    "AgroHub is an Agriculure Information Hub where farmers can gather information about the agriculture.",
  keywords: "agriculture, information, farmer",
  robots: "index, follow",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-green-200/30 bg-green-600 px-3 py-1 text-sm text-green-100">
              <Mail className="mr-1 h-3.5 w-3.5" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Our Agricultural Experts
            </h1>
            <p className="max-w-[700px] text-green-100 md:text-xl">
              Have questions about farming, crops, or pest control? Our team of
              agricultural experts is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Our Location
              </h3>
              <p className="text-gray-600">East of Kewa,</p>
              <p className="text-gray-600">Sreepur, Gazipur,</p>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Phone Number
              </h3>
              <p className="text-gray-600">Main: +8801770473899</p>
              <p className="text-gray-600">Support: +8801315779906</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Email Address
              </h3>
              <p className="text-gray-600">info@agriculturehub.com</p>
              <p className="text-gray-600">support@agriculturehub.com</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600">Sun - Wed: 8am - 5pm</p>
              <p className="text-gray-600">Thursday: 9am - 1pm</p>
              <p className="text-gray-600">Friday: Closed</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-12 h-96 bg-gray-100">
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3278479656838!2d90.3674927743935!3d23.806938186605315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c143f3c5cb41%3A0x96cc2b8d847ada3e!2z4KaH4KaJ4Kaw4KeL4Kaq4Ka_4Kav4Ka84Ka-4KaoIOCmh-CmnyDgpofgpqjgprjgp43gpp_gpr_gpp_gpr_gpongpp8!5e0!3m2!1sbn!2sbd!4v1745053966658!5m2!1sbn!2sbd"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-green-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services, expertise,
              and how we can help with your agricultural needs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium text-green-900">
                    {faq.question}
                    <svg
                      className="h-5 w-5 transition-transform group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-gray-200 p-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-green-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Stay Connected
            </h2>
            <p className="text-green-100 mb-6">
              Subscribe to our newsletter to receive the latest farming tips,
              seasonal guides, and agricultural news directly to your inbox.
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
    </main>
  );
}

// Sample data
const faqs = [
  {
    question: "What services does your agricultural information hub provide?",
    answer:
      "Our agricultural information hub provides comprehensive resources including farming guides, crop information, pest control solutions, and expert consultation. We offer both free educational content and personalized advice for specific farming challenges.",
  },
  {
    question: "How can I get personalized advice for my farm?",
    answer:
      "You can get personalized advice by filling out our contact form with details about your specific situation, or by scheduling a consultation with one of our agricultural experts. We offer both remote and on-site consultations depending on your needs and location.",
  },
  {
    question: "Do you provide information for organic farming practices?",
    answer:
      "Yes, we provide extensive information on organic farming practices including soil management, natural pest control, crop rotation, and sustainable growing methods. Our guides cover both conventional and organic approaches to give you options for your specific needs.",
  },
  {
    question: "How often is your agricultural content updated?",
    answer:
      "Our content is regularly updated to reflect the latest research, techniques, and best practices in agriculture. We review and update seasonal guides quarterly, and our pest control and crop information is updated whenever new research or methods become available.",
  },
  {
    question: "Can I contribute my own farming knowledge or experiences?",
    answer:
      "We welcome contributions from experienced farmers and agricultural professionals. Please contact us through our form with details about your expertise and the information you'd like to share. We also feature farmer success stories and case studies.",
  },
];
