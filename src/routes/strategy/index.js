/**
 * Created by diwu on 3/12/16.
 */

import React from 'react';
import fetch from '../../core/fetch';
import Strategy from './Strategy'
export const path = '/strategy';
export const action = async (state) => {
  let query = `{
  strategy {
    owner {
      nickname
      avatar
    }
    title
    subTitle
    description
    cover
    tryCount
    score
    collectCount
    photos {
      strategy
      photoId
      content {
        img
      }
      praiseCount
    }
    comments {
      commentUser {
        nickname
        avatar
      }
      content
    }
  }
}
`
  const response = await fetch('/graphql?query='+query);
  const { data } = await response.json();
  const title = data.strategy.title;
  state.context.onSetTitle(title);
  return <Strategy strategy={data.strategy}/>
};
