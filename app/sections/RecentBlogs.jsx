import React from 'react'
import BlogCard from '../components/BlogCard'
import { Link } from 'lucide-react'
import data from "../data/liveBlogs.js";

const RecentBlogs = () => {

  return (
<section className='flex justify-center flex-col items-center'>
<h2 className="md:text-4xl text-2xl font-bold uppercase my-10 text-center">Latest blogs</h2>

<div className='flex p-4 gap-4 flex-wrap'>
    {
        data.slice(0,4).map((blogData, index)=>{
        return(

            <BlogCard blogData={blogData} key={index} />
        )
    })
}

</div>
<a href="/blogs" className="px-8 py-4 bg-gradient-to-r from-blue-500 m-auto to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg my-9">
 View all blogs
</a>
</section> 
  )
}

export default RecentBlogs
