/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Strategy.scss';
import Comments from '../../components/Comment/Comments';


function Strategy({ strategy }) {
  console.log(strategy.comments[0]);
  return (
    <div className={s.root}>
      <div className={s.cover}>
        <img src={strategy.cover} alt=""/>
        <div className={s.avatar}>
          <img src={strategy.owner.avatar} alt=""/>
          <h3>{strategy.owner.nickname}</h3>
        </div>
      </div>

      <div className={s.childFitWrap}>
        <ul>
          <li className="time">
            <span>
            
            </span>
          </li>
          <li className="level">
            <span>

            </span>
          </li>
          <li className="fit">
            <span>

            </span>
          </li>
        </ul>
      </div>

      <Comments comments={strategy.comments}/>
    </div>
  );
}

/*
*
*       <div className="content">
 {strategy.description? <div dangerouslySetInnerHTML={{ __html: strategy.description }}></div>:"" }
 </div>
* */

/*
*   <div>{strategy.title}</div>
 { strategy.tryCount +'人参与 ' + ' 综合评分'+strategy.score +'分  ' + strategy.collectCount +'人收藏' }
 <div dangerouslySetInnerHTML={{ __html: strategy.description }}></div>
*
* */

Strategy.propTypes = {
  strategy: PropTypes.object.isRequired
};

export default withStyles(Strategy, s);
