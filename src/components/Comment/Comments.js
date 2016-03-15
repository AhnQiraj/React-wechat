import React,{ PropTypes} from 'react';
import s from './Comment.scss';
function Comments({ comments }){
  return (
    <ul className={s.box}>
      {
        comments.map(function(item){
           return <CommentItem data={item} />
        })
      }
    </ul>
  );
}

function CommentItem({ data }){
  return (
    <li>
      <div>
        <img src={data.commentUser.nickname} alt=""/>
      </div>
      <div>
        <h1>
          {data.commentUser.nickname}
        </h1>
        <h2>
          {data.createdAt}
        </h2>
        <h3>
          {data.content}
        </h3>
      </div>
    </li>
  );
}

export default Comments