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
import s from './Event.scss';

function Strategy({ strategy }) {
  return (

    <div className={s.root}>
      <div className={s.cover}>
        <img src={strategy.cover} alt=""/>
      </div>

      <div>{strategy.title}</div>
      { strategy.tryCount +'人参与 ' + ' 综合评分'+strategy.score +'分  ' + strategy.collectCount +'人收藏' }
      <div dangerouslySetInnerHTML={{ __html: strategy.description }}></div>
    </div>
  );
}

Strategy.propTypes = {
  strategy: PropTypes.object.isRequired
};

export default withStyles(Strategy, s);
