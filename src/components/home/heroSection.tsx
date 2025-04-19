import { ImageSlider } from "../image-slider";

const sliderImages = [
  {
    src: "https://storage.googleapis.com/p-oaf-ibe-back-00e-strapi-uploads/Farmstar_Empowering_Farmers_with_satellite_based_precision_agriculture_banner_46e0f2b4c7/Farmstar_Empowering_Farmers_with_satellite_based_precision_agriculture_banner_46e0f2b4c7.jpg",
    alt: "Beautiful Mountain Landscape",
  },
  {
    src: "https://www.gethow.org/wp-content/uploads/2020/03/agriculture.jpg",
    alt: "Modern City Skyline",
  },
  {
    src: "https://www.iisd.org/sites/default/files/styles/og_image/public/2020-06/RS2085_food-agriculture-topic.jpg",
    alt: "Serene Beach Sunset",
  },
];

export default function HeroSection() {
  return (
    <ImageSlider images={sliderImages} autoPlayInterval={5000} className="" />
  );
}
