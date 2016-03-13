/**
 * Created by diwu on 3/12/16.
 */

import React from 'react';
import fetch from '../../core/fetch';
import Strategy from './Topic'
export const path = '/strategy';
export const action = async (state) => {
  let query = `{
  topic {
    owner {
      nickname
      avatar
    }
    title
    subTitle
    strategies {
      cover
      owner{
        nickname
      }
    }
  }
}
`
  const response = await fetch('/graphql?query='+query);
  const { data } = await response.json();
  const title = data.topic.title;
  state.context.onSetTitle(title);
  return <Strategy strategy={data.topic}/>
};
