import { Code } from "lucide-react";
import { Settings } from "lucide-react";
import { Paintbrush } from "lucide-react";
import { Brush } from "lucide-react";
import { Share2 } from "lucide-react";
import { TrendingUp } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Liam Carter",
    company: "Pixel Perfect Co.",
    image: user1,
    text: "The team went above and beyond to deliver an exceptional website for our business. Their expertise and creativity are unmatched!",
  },
  {
    user: "Sophia Turner",
    company: "Innovate IT",
    image: user2,
    text: "Reliable and efficient! Their IT support helped us resolve issues quickly and improve our website's performance.",
  },
  {
    user: "Noah Baker",
    company: "Creative Studio",
    image: user3,
    text: "Amazing UI/UX designs that exceeded our expectations! Our customers love the intuitive experience.",
  },
  {
    user: "Ronee Brown",
    company: "TechEdge Solutions",
    image: user4,
    text: "Fantastic service! From development to hosting, everything was seamless and professional. Highly recommended!",
  },
  {
    user: "Ethan Wilson",
    company: "NextGen Media",
    image: user5,
    text: "They created a stunning e-commerce platform for us. Their attention to detail and support were outstanding.",
  },
  {
    user: "Olivia Martinez",
    company: "BrightPath Education",
    image: user6,
    text: "The team designed and hosted an incredible website for our school. The SEO optimization brought significant traffic growth!",
  },
];

export const services = [
  {
    icon: <Code />,
    text: "Web Development",
    description: "Custom websites tailored to your business needs with modern technologies.",
  },
  {
    icon: <Settings />,
    text: "IT Support",
    description: "Ongoing support for hosting, updates, and troubleshooting your websites.",
  },
  {
    icon: <Paintbrush />,
    text: "UI/UX Design",
    description: "Crafting user-friendly and visually appealing designs for your web platforms.",
  },
  {
    icon: <Brush />,
    text: "Graphic Design",
    description: "Designing stunning visuals and branding assets that resonate with your audience.",
  },
  {
    icon: <Share2 />,
    text: "Social Media Marketing",
    description: "Creating and managing campaigns to grow your online presence and engagement.",
  },
  {
    icon: <TrendingUp />,
    text: "Digital Marketing",
    description: "Strategizing and executing online marketing to boost traffic and conversions.",
  },
];

export const checklistItems = [
  {
    title: "Custom Designs",
    description:
      "We build websites that reflect your brand and provide a unique user experience.",
  },
  {
    title: "24/7 IT Support",
    description:
      "Round-the-clock support to ensure your website runs smoothly and efficiently.",
  },
  {
    title: "SEO Optimization",
    description:
      "Enhance your website’s visibility and attract more traffic with effective SEO strategies.",
  },
  {
    title: "Fast Hosting",
    description:
      "Secure and fast hosting services to keep your website accessible at all times.",
  },
];

export const pricingOptions = [
  {
    id: "1",
    title: "Starter",
    price: "$200",
    features: [
      "Domain Name",
      "Web Hosting",
      "Upto 5 Pages",
    ],
    nonFeatures: [
      "Payment Gateway",
      "Ecommerce Web",
      "SEO",
    ],
  },
  {
    id: "2",
    title: "Pro",
    price: "$300",
    features: [
      "Domain Name",
      "Web Hosting",
      "Ecommerce Web",
      "Upto 15 Pages",
    ],
    nonFeatures: [
      "Payment Gateway",
      "SEO",
    ],
  },
  {
    id: "3",
    title: "Elite",
    price: "$400",
    features: [
      "Domain Name",
      "Web Hosting",
      "Payment Gateway",
      "SEO",
      "Ecommerce Web",
      "Upto 25 Pages",
    ],
    nonFeatures: [
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Community Support" },
  { href: "#", text: "Contact Us" },
];

export const platformLinks = [
  { href: "#", text: "Services" },
  { href: "#", text: "Technology Stack" },
  { href: "#", text: "Hosting Options" },
  { href: "#", text: "Portfolio" },
  { href: "#", text: "FAQs" },
];

export const communityLinks = [
  { href: "#", text: "Blog" },
  { href: "#", text: "Webinars" },
  { href: "#", text: "News & Updates" },
  { href: "#", text: "Career Opportunities" },
  { href: "#", text: "Social Media" },
];
