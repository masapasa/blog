import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import dateFormat, { masks } from "dateformat";
import PageViews from "../components/PageViews";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }: { posts: any }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter(
    (post: { frontmatter: any; title: string }) =>
      post.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <NextSeo
        title="Blog | Zacchary Puckeridge"
        description="Read recent blog posts from Zacchary Puckeridge"
      />
      <div className="mt-20 flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Blog
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4 mt-4">
              {"I've"} been writing online since 2019 and {"I've"} found it to
              be incredibly useful for retaining information about programming,
              scripture and anything else I might find interesting. {"It's"}
              definitely interesting going back through older posts to see how I
              used to write and how my opinions and beliefs have changed.
            </h2>
            <div className="relative w-full mb-4">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="block w-full px-4 py-2 text-gray-900 bg-white border-2 border-gray-300 dark:border-gray-800 rounded-xl dark:bg-[#1d1f22] dark:text-gray-100 hover:ring-2 ring-gray-300 transition-all"
              />
              <svg
                className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {filteredBlogPosts
                .sort(
                  (
                    a: { frontmatter: { date: string | number | Date } },
                    b: { frontmatter: { date: string | number | Date } }
                  ) => {
                    return (
                      new Date(b.frontmatter.date).valueOf() -
                      new Date(a.frontmatter.date).valueOf()
                    );
                  }
                )
                .map(
                  (post: {
                    slug: Key | null | undefined;
                    frontmatter: {
                      slug: any;
                      title:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      socialImage: any;
                      date: string | number | Date | undefined;
                      description:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    };
                  }) => (
                    <div key={post.slug} className="mb-4">
                      <Link href={`/post/${post.slug}`}>
                        <a className="transform hover:scale-[1.05] transition-all lg:h-[30rem] md:h-80 border-2 border-gray-300 dark:border-gray-800 m-2 rounded-xl flex flex-col overflow-hidden hover:ring-2 ring-gray-300 transition-all">
                          <div>
                            <div className="relative flex justify-center my-auto rounded-t-lg">
                              <div className="w-full h-full lg:h-48 bg-gray-200 dark:bg-gray-600" />
                              <Image
                                className="absolute top-0 left-0 w-full h-48 object-cover select-none"
                                draggable={false}
                                layout="fill"
                                loading="lazy"
                                quality="50"
                                alt={`${post.frontmatter.title}`}
                                src={`/${post.frontmatter.socialImage}`}
                              />
                            </div>
                            <h1 className="pt-5 pr-5 pl-5 pb-2 text-xl font-bold">
                              {post.frontmatter.title}
                            </h1>
                            <div className="pl-5">
                              <div className="inline-flex place-content-center dark:text-white font-bold py-2 px-2 border-2 border-gray-300 dark:border-gray-800 bg-gray-600 bg-opacity-20 text-center text-base font-semibold shadow-lg rounded-xl">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-2 h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {dateFormat(
                                  post.frontmatter.date,
                                  "dS mmmm yyyy"
                                )}
                              </div>
                            </div>
                            <div className="pl-5 mt-2 flex items-center text-gray-800 dark:text-gray-200 capsize">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              <div className="ml-2">
                                <PageViews slug={post.frontmatter.slug} />
                              </div>
                            </div>
                            <p className="pt-2 pl-5 pr-5 pb-5 text-clip">
                              {post.frontmatter.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
