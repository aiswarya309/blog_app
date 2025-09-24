import React from 'react';
import edit from '../assets/edit.png';
import deleteIcon from '../assets/delete.jpg';
import { Link } from 'react-router-dom';
import { Menu } from '../component/menu';

export const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src='https://png.pngtree.com/thumb_back/fw800/background/20220312/pngtree-creative-fruit-doll-image_1061648.jpg' alt="" />
        <div className="user">
          <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`write?edit=2`}>
              <img src={edit} alt="" />
            </Link>
            <img src={deleteIcon} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amt conceture adipt lorem ipsum</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney<br /> <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
          BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney<br /> <br />

          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br /><br />
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
          et Malorum" by Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham.
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br />
        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}
