import React from 'react'

export const Menu = () => {
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
    <div className='post'>
        <h1>Other posts you may like</h1>
        {
            posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))
        }
    </div>
  )
}
