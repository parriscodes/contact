import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="bg-emerald-50">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <h2 className="text-base font-semibold tracking-wider uppercase text-[#027d46]">
          <span className="block">Ready to get started?</span>
        </h2>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Contact our team today.</span>
        </h2>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Our team is looking forward to hearing about your transportation
          related needs. If you have any questions, please see our FAQ section
          at the bottom of our contact page. If you still have any additional
          questions, please reach out to one of our experts.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.875 } }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex rounded-md shadow">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-[#027d46] hover:bg-emerald-700">
                Contact Us
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
