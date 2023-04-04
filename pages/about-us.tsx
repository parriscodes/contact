import Head from "next/head";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
// import GridPattern from "../components/GridPattern";

const people = [
  {
    name: "Eddie Jones",
    role: "Founder and President",
    imageUrl: "/images/teamImages/coming-soon.png",
  },
  {
    name: "Tony McCabe",
    role: "Vice President of Operations",
    imageUrl: "/images/teamImages/coming-soon.png",
  },
  {
    name: "Connor Bennett",
    role: "Vice President of Sales",
    imageUrl: "/images/teamImages/connor-headshot.jpg",
  },
  {
    name: "Molly Jones",
    role: "Controller",
    imageUrl: "/images/teamImages/molly-headshot.png",
  },
  {
    name: "Christopher Pappalardo",
    role: "Account Manager",
    imageUrl: "/images/teamImages/christopher-pappalardo.jpg"
  },
  // More people...
];

const BioAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.125 },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>LandSeaAir Inc. - Blog</title>
        <meta
          name="description"
          content="Meet our diverse team of industry experts! Begin to understand their different roles in operating our business and how they can help you."
        ></meta>
        <link rel="icon" href="/delivery-truck.ico" />
      </Head>

      {/* Announcement */}
      <Announcement />

      {/* Navbar */}
      <Navbar />

      {/* Team Cards */}
      <section className="about-container">
        <div className="text-center">
          <h1 className="about-heading">Introducing</h1>
          <p className="about-subheading">Our Team</p>
          <p className="about-text">The experts moving your freight.</p>
          <ul role="list" className="card-container">
            {people.map((person) => (
              <li key={person.name}>
                <motion.div
                  variants={BioAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="card-image-container">
                    <LazyLoadImage
                      src={person.imageUrl}
                      alt={person.name}
                      className="card-image"
                    />
                  </div>

                  <div className="card-text-container">
                    <div className="card-text">
                      <h3>{person.name}</h3>
                      <p className="text-[#027d46]">{person.role}</p>
                    </div>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Call To Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
