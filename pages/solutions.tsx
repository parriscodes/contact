import Head from "next/head";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Announcement from "../components/Announcement";
import CallToAction from "../components/CallToAction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import TrainIcon from "@mui/icons-material/Train";
import SpeedIcon from "@mui/icons-material/Speed";

const transferFeatures = [
  {
    id: 1,
    name: "Full Truckload",
    description:
      "One truck, one shipment. Our Full Truckloads include: dry van, temperature controlled, hazmat, and flatbed.",
    icon: LocalShippingIcon,
  },
  {
    id: 2,
    name: "Drayage",
    description:
      "For any short distance transportation, we have access to carriers in all major US ports and major rail yards.",
    icon: DirectionsBoatFilledIcon,
  },
  {
    id: 3,
    name: "LTL",
    description:
      "We can help move freight economically when a full truckload is not needed. We can do this for contracted lanes and expedited.",
    icon: AssistantDirectionIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Cross Border",
    description:
      "Ability to set up drop trailer pools to cross the southern border to load and return.",
    icon: TrainIcon,
  },
  {
    id: 2,
    name: "Expedited",
    description:
      "We can help get your goods to the destination when time is of the essence.",
    icon: SpeedIcon,
  },
  {
    id: 3,
    name: "Intermodal",
    description:
      "Utilizing a combination of transportation services by truck, rail, and sea to deliver cargo economically to its final destination.",
    icon: JoinFullIcon,
  },
];

const Solutions = () => {
  return (
    <div>
      <Head>
        <title>LandSeaAir Inc. - Solutions</title>
        <meta
          name="description"
          content="Our services are designed to meet and exceed your expectations. From Drayage and LTL to Cross Border and Intermodal, we have a solution made for you."
        ></meta>
        <link rel="icon" href="/delivery-truck.ico" />
      </Head>

      {/* Announcement */}
      <Announcement />
      {/* Navbar */}
      <Navbar />

      {/* For Shippers Section */}
      <div className="py-16 overflow-hidden bg-white lg:py-24">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative">
            <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              Our Solutions
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
              Our agents are dedicated to ensure your end-to-end shipping needs
              are met.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Our areas of expertise
              </h3>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-[#027d46]">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.75 },
                }}
                viewport={{ once: true }}
              >
                <LazyLoadImage
                  src="/images/solutionImages/solutions1.jpg"
                  alt="Full Truckload"
                  width={490}
                  className="relative mx-auto rounded-xl"
                />
              </motion.div>
            </div>
          </div>

          <svg
            className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <dl className="mt-10 space-y-10">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-[#027d46]">
                          <item.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                          {item.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex mx-auto mt-10 text-base max-w-prose lg:max-w-none">
                  <div className="rounded-md shadow">
                    <a
                      href="/shippers-agreement"
                      className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-[#027d46] hover:bg-emerald-700"
                    >
                      Agreement
                    </a>
                  </div>
                  <div className="ml-4 rounded-md shadow">
                    <a
                      href="/contact"
                      className="flex items-center justify-center w-full px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-[#027d46] hover:bg-gray-50"
                    >
                      Request a Quote
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.75 },
                  }}
                  viewport={{ once: true }}
                ></motion.div>
                <LazyLoadImage
                  src="/images/solutionImages/solutions2.jpg"
                  alt="Full Truckload"
                  width={490}
                  className="relative mx-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Break */}

      {/* For Carriers Section */}
      <div className="py-16 overflow-hidden bg-white lg:py-24">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative mt-6 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <h2 className="text-base font-semibold tracking-wide uppercase text-[#027d46]">
                  For Carriers
                </h2>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Our commitment
                </p>
                <p className="mt-3 text-lg text-gray-500">
                  Land Sea Air values long lasting relationships with carriers
                  and has helped many expand their business. We take care of our
                  carriers by utilizing quick pay options. We are committed to
                  maintaining an open dialogue with carriers to ensure they are
                  up to date on all of our customer’s needs. We help match
                  freight with carriers preferred lanes and provide 24/7 support
                  in case of emergencies.
                </p>
              </div>

              <div className="flex mx-auto mt-10 text-base max-w-prose lg:max-w-none">
                <div className="rounded-md shadow">
                  <a
                    href="/carriers-agreement"
                    className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-[#027d46] hover:bg-emerald-700"
                  >
                    Agreement
                  </a>
                </div>
                <div className="ml-4 rounded-md shadow">
                  <a
                    href="/contact"
                    className="flex items-center justify-center w-full px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-[#027d46] hover:bg-gray-50"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.75 },
                }}
                viewport={{ once: true }}
              >
                <LazyLoadImage
                  src="/images/solutionImages/solutions3.jpg"
                  alt="Full Truckload"
                  width={490}
                  className="relative mx-auto rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
