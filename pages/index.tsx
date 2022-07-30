import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      {/* <div className="flex items-stretch w-128">
        <img
          className="object-cover w-full h-56 w-56 shadow-xl rounded-xl"
          src="./images/profile-pic.jpg"
          alt=""
        />
      </div> */}
      <div className="p-4">
        <h5 className="text-8xl font-black text-gray-900 text-center">
          Hey 👋 I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Zacchary,
          </span>
          <div className="">a developer</div>
        </h5>
        <p className="font-bold pt-7 text-lg text-gray-400 text-center">
          I'm a 22 year old IT Administrator & Web Developer working for{" "}
          <a
            href="https://rsp.com.au"
            className="text-blue-400 hover:text-green-300"
          >
            Rising Sun Pictures
          </a>
        </p>
        <div className="flex gap-4 pt-4">
          <Link href="/blog">
            <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Blog
            </button>
          </Link>
          <Link href="/projects">
            <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Projects
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
