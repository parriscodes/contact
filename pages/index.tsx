import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import TrainIcon from "@mui/icons-material/Train";
import SpeedIcon from "@mui/icons-material/Speed";

// Data
const features = [
  {
    name: "Full Truckload",
    description:
      "One truck, one shipment. Our Full Truckloads include: dry van, temperature controlled, hazmat, and flatbed.",
    icon: LocalShippingIcon,
  },
  {
    name: "LTL",
    description:
      "We can help move freight economically when a full truckload is not needed. We can do this for contracted lanes and expedited.",
    icon: AssistantDirectionIcon,
  },
  {
    name: "Drayage",
    description:
      "For any short distance transportation, we have access to carriers in all major US ports and major rail yards.",
    icon: DirectionsBoatFilledIcon,
  },
  {
    name: "Intermodal",
    description:
      "Utilizing a combination of transportation services by truck, rail, and sea to deliver cargo economically to its final destination.",
    icon: JoinFullIcon,
  },
  {
    name: "Cross Border",
    description:
      "Ability to set up drop trailer pools to cross our southern border in order to process both loads and returns.",
    icon: TrainIcon,
  },
  {
    name: "Expedited",
    description:
      "Need your products to go out ASAP? We can help get your goods to the destination when time is of the essence.",
    icon: SpeedIcon,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Company Vs. Industry Updates",
    href: "/blog",
    date: "Oct 22, 2022",
    datetime: "2022-10-22",
    category: { name: "Article", href: "/blog" },
    imageUrl: "/images/blogImages/blog1.jpg",
    preview:
      "Updates that you can expect in the coming months and how they are going to create changes not only in the industry but in our company as well. What you should know and how to prepare.",
    author: {
      name: "Connor Bennett",
      imageUrl: "/images/teamImages/connor-headshot-small.png",
      href: "/blog",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "What Is Going On In Freight",
    href: "/blog",
    date: "Oct 22, 2022",
    datetime: "2022-10-22",
    category: { name: "Video", href: "/blog" },
    imageUrl: "/images/blogImages/blog2.jpg",
    preview:
      "Life is always changing, and to stay ahead, we must adapt. Watch and listen as our experts take you through and explain some of the major milestones that are happening in freight and how it could affect you. ",
    author: {
      name: "Molly Jones",
      imageUrl: "/images/teamImages/molly-headshot-small.png",
      href: "/blog",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Improve Your Customer Experience",
    href: "/blog",
    date: "Oct 22, 2022",
    datetime: "2022-10-22",
    category: { name: "Case Study", href: "/blog" },
    imageUrl: "/images/blogImages/blog3.jpg",
    preview:
      "Looking to build rapport and improve your companies CRM? Follow this article and discover how our team uses the latest and greatest techniques in order to improve their relationships and grow their customer base.",
    author: {
      name: "Connor Bennett",
      imageUrl: "/images/teamImages/connor-headshot-small.png",
      href: "/blog",
    },
    readingLength: "11 min",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LandSeaAir Inc.</title>
        <meta
          name="description"
          content="Best shipping since Noah! LandSeaAir works diligently to provide extraordinary services in every part of the transportation journey. Contact us today!"
        ></meta>
        <link rel="icon" href="/delivery-truck.ico" />
      </Head>

      {/* Announcement */}
      <Announcement />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="hero-container1">
        <LazyLoadImage
          src="/images/blogImages/blog1.jpg"
          alt="Background Hero Image of Three White Trucks"
          className="hero-img"
        />
        <div className="hero-container2">
          <div className="hero-container3">
            <div className="hero-left-container">
              <div className="lg:py-24">
                <Link href="/contact">
                  <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.875 },
                    }}
                    viewport={{ once: true }}
                    className="hero-link"
                  >
                    <span className="hero-span1">We're hiring</span>
                    <span className="hero-span2">Visit our contact page</span>
                    <ChevronRightIcon
                      className="w-5 h-5 ml-2 text-[#027d46]"
                      aria-hidden="true"
                    />
                  </motion.a>
                </Link>
                <h1 className="hero-heading">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.875, delay: 0.1 },
                    }}
                    viewport={{ once: true }}
                    className="block"
                  >
                    A better way to{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.875, delay: 0.2 },
                    }}
                    viewport={{ once: true }}
                    className="block text-[#027d46]"
                  >
                    deliver product
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.875, delay: 0.3 },
                  }}
                  viewport={{ once: true }}
                  className="hero-subheading"
                >
                  A premier 3PL creating more efficient ways to procure
                  truckload shipment. Built upon transparency and relationships.
                  We are your end-to-end solution for freight.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-container1">
        <div className="features-container2">
          <div className="features-container3">
            <svg viewBox="0 0 88 88" className="features-pattern">
              <circle fill="currentColor" cx="44" cy="44" r="15.5" />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <h2 className="features-subheading">Ship faster</h2>
          <p className="features-heading">
            Everything you need to know for your transportation needs
          </p>
          <p className="features-text">
            Below are some of the different areas of expertise that our team
            spcializes in. To find out more about these different solutions,
            please{" "}
            <Link href="/solutions">
              <a className="text-[#027d46]">
                <u>click here</u>
              </a>
            </Link>
            !
          </p>
          <div className="mt-12">
            <div className="features-container4">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="features-container5">
                    <div className="-mt-6">
                      <div>
                        <span className="features-span1">
                          <feature.icon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="features-name">{feature.name}</h3>
                      <p className="features-description">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="preview-container1">
        <div className="relative">
          <div className="preview-container2">
            <h2 className="preview-subheading">Coming Soon</h2>
            <p className="preview-heading">Our Personal Blog</p>
            <p className="preview-text">
              Expand your knowledge and get insider tips on the transportation
              business from some of the best in the field. Our experts have
              created different articles, videos, and case studies that deep
              dive into some of the more nitty-gritty details about our
              industry.
            </p>
          </div>
          {/* Blog Previews */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
            viewport={{ once: true }}
            className="preview-container4"
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="preview-scale">
                <div className="flex-shrink-0">
                  <img
                    className="preview-cover"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                </div>
                <div className="preview-post-container">
                  <div className="flex-1">
                    <p className="preview-category">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="preview-title">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.preview}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <img
                          className="preview-author-image"
                          src={post.author.imageUrl}
                          alt={post.author.name}
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="preview-author-name">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="preview-length">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingLength} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CallToAction */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
