import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import BlogPostCard from "../components/BlogPostCard";
import NowPlaying from "../components/NowPlaying";
import { FiChevronsRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | Doze"
        description="Doze's Website"
      />
      <div className="max-w-2xl border-gray-200 dark:border-gray-700 mt-20 mb-20">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-12">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Doze
            </h1>
            <h2 className="mt-2 text-gray-700 dark:text-gray-200 mb-4">
              IT Administration and Web Development at{" "}
              <span className="font-semibold">Doze</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Helping build better user experiences. Providing Web Development
              for future growth.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Doze"
              height={176}
              width={176}
              src="/images/doze_heal.jpg"
              className="rounded-full"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Wound management and emergency"
            slug="wound-management-emergency"
            gradient="from-[#D8B4FE] to-[#818CF8]"
            glow="before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#D8B4FE] before:to-[#818CF8] before:left-0 before:top-0 before:blur-[7px]"
          />
          <BlogPostCard
            title="Wound healing"
            slug="wound-healing"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            glow="before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#6EE7B7] before:via-[#3B82F6] before:to-[#9333EA] before:left-0 before:top-0 before:blur-[7px]"
          />
          <BlogPostCard
            title="👨‍💻 How to prevent infected wounds"
            slug="infected-wound-prevention"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            glow="before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#FDE68A] before:via-[#FCA5A5] before:to-[#FECACA] before:left-0 before:top-0 before:blur-[7px]"
          />
        </div>
        <div className="mt-6 flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="🐴 The Benefits of Physical Exercise for Cardiovascular Disease"
            slug="physical-exercise-cardio"
            gradient="from-[#86FF9A] to-[#D6FF5B]"
            glow="before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#86FF9A] before:to-[#D6FF5B] before:left-0 before:top-0 before:blur-[7px]"
          />
          <BlogPostCard
            title="🖌️ Does Amyloid Accumulation Cause Alzheimer's Disease?"
            slug="amyloid-alzheimer"
            gradient="from-[#FF9772] via-[#3B82F6] to-[#5BECFF]"
            glow="before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#FF9772] before:via-[#3B82F6] before:to-[#5BECFF] before:left-0 before:top-0 before:blur-[7px]"
          />
          <BlogPostCard
            title="💭 An excerpt on Old Testament Law"
            slug="old-testament-law"
            gradient="from-[#C672FF] via-[#FF72DC] to-[#FECACA]"
            glow="before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#C672FF] before:via-[#FF72DC] before:to-[#FECACA] before:left-0 before:top-0 before:blur-[7px]"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <Link
              href="/blog"
              className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              Read all posts
              <div className="h-6 w-6 ml-1 mt-1.5">
                <FiChevronsRight />
              </div>
            </Link>
          </div>
          <div>
            <h4 className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              <NowPlaying />
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
