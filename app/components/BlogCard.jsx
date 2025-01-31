import React from 'react'

const BlogCard = ({blogData}) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
  <a >
    <img
      className="rounded-t-lg w-full aspect-video skeleton-loading object-cover"
      src={blogData.coverImage}
      alt={blogData.title}
    />
  </a>
  <div className="p-5">
    <a href={`/blog/${blogData.id}`}>
      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
        {blogData.title}
      </h5>
    </a>
    <a
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
      href={`/blog/${blogData.id}`}
    >
      Read blog
    </a>
  </div>
</div>

  )
}

export default BlogCard
