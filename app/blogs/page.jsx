import React from 'react'
import BlogCard from '../components/BlogCard'
import { Link } from 'lucide-react'
import data from "../data/liveBlogs.js";

const RecentBlogs = () => {

  return (
<section className='flex justify-center flex-col items-center'>
<h2 className="md:text-4xl text-2xl font-bold uppercase my-10 text-center">All blogs</h2>

<div className='flex p-4 gap-4'>
    {
        data.map((blogData, index)=>{
        return(

            <BlogCard blogData={blogData} key={index} />
        )
    })
}

</div>
</section> 
  )
}

export default RecentBlogs
