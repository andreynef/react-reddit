import React from 'react';
import {CardControls} from "./CardControls";
import {CardHeader} from "./CardHeader";
import {CardPreview} from "./CardPreview";
import {IPost} from "../../../Store/Posts/postsActions";

interface ICardProps {
  item:IPost
}

export function Card({item}:ICardProps) {

  return (
    <>
      {item.isVisible &&(
        <>
          <CardHeader commentsAmount={item.commentsAmount} title={item.title} created={item.created} author={item.author} avatar={item.avatar} postId={item.id} subreddit={item.subreddit}/>
          <CardPreview isSaved={item.isSaved} id={item.id} preview={item.thumbnail} postId={item.id} subreddit={item.subreddit}/>
          <CardControls commentsAmount={item.commentsAmount} score={item.score}/>
        </>
      )}
    </>
  );
}
