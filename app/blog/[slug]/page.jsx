import data from "../../data/liveBlogs.js";
import Image from "next/image";
import Head from "next/head";
import ScrollPopup from "../../components/ScrollPopup"; // Import the client component

const getBlogData = (slug) => {
  const product = data.find((product) => product.id === slug);
  return product || null;
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogData = getBlogData(slug);

  return {
    title: blogData?.title ? `${blogData.title} | Mehran Dadbeh` : "Blog",
    description: blogData?.description || "Read this blog post.",
  };
}

const Page = ({ params }) => {
  const { slug } = params;
  const blogData = getBlogData(slug);

  return (
    <>
      <Head>
        <title>{blogData?.title ? `${blogData.title} | My Blog` : "Blog"}</title>
        <meta name="description" content={blogData?.excerpt || "Read this blog post"} />
      </Head>

      <Image
        src={blogData?.coverImage}
        width="720"
        height="720"
        className="w-full"
        alt={blogData?.title}
      />

      <article className="format lg:format-lg m-auto p-4">
        <h1 className="text-left font-extrabold text-3xl py-4">{blogData?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blogData?.content }}></div>
      </article>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Seeking help for HOCD, OCD Break up, and intrusive thoughts?
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Get guidance directly from the expert (Mehran Dadbeh)
            </p>
            <a
              href="/consultation"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Add the ScrollPopup component here */}
      <ScrollPopup />
    </>
  );
};

export default Page;
