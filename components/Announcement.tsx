import Link from "next/link";

const Announcement = () => {
  return (
    <div className="relative bg-[#027d46]">
      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">Welcome to our new website!</span>
            <span className="hidden md:inline">
              Welcome to our new website! We look forward to hearing your
              feedback.
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link href="/contact">
                <a className="font-bold text-white underline">
                  {" "}
                  Contact Us <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
