import Head from "next/head";
import { motion } from "framer-motion";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div>
      <Head>
        <title>LandSeaAir Inc. - Blog</title>
        <meta
          name="description"
          content="Land Sea and Air's Blog is a library of various articles, videos and case studies that deep dive into some of the more details about our industry."
        ></meta>
        <link rel="icon" href="/delivery-truck.ico" />
      </Head>

      {/* Announcement */}
      <Announcement />

      {/* Navbar */}
      <Navbar />

      <main className="blog-main">
        <section>
          <motion.div 
          initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: {duration: 0.75} }}
            viewport={{ once: true }}
            className="blog-motion-container"
          >
            <div className="blog-container">
              <div className="blog-introduction">
                LandSeaAir's Company Blog
              </div>
              <h1 className="blog-heading">
                Expand Your Knowledge
              </h1>
              <h2 className="blog-subheading">
                Coming Soon!
              </h2>
              <p className="blog-text">
                Stay tuned and look out for our upcoming blog. Here you will be
                able to discover insider information about the transportation
                industry from our leading experts.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
