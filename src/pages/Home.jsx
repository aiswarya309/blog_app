import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const posts=[{
    id:1,title:"Lorem ipsum dolor sit amet consectetur.",
    title:"Lorem ipsum dolor sit amet consectetur.",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img:"https://t4.ftcdn.net/jpg/03/20/98/69/360_F_320986926_wbqHWpHd9sclh7R4lnj5rn0dy5AK6Uas.jpg"
  },
{
    id:2,title:"Lorem ipsum dolor sit amet consectetur.",
    title:"Lorem ipsum dolor sit amet consectetur.",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img:"https://img.lovepik.com/photo/40032/2487.jpg_wh300.jpg"
},{
    id:3,title:"Lorem ipsum dolor sit amet consectetur.",
    title:"Lorem ipsum dolor sit amet consectetur.",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img:"https://img.lovepik.com/photo/50121/1399.jpg_wh300.jpg"
},{
    id:4,title:"Lorem ipsum dolor sit amet consectetur.",
    title:"Lorem ipsum dolor sit amet consectetur.",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img:"https://png.pngtree.com/thumb_back/fw800/background/20220312/pngtree-creative-fruit-doll-image_1061648.jpg"
}
]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post)=>(
          <div className="post">
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className='link'>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
