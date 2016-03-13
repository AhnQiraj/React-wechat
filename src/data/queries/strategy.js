/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import fetch from '../../core/fetch';
import StrategyType from '../types/StrategyType';

// React.js News Feed (RSS)
const url = 'http://www.iyuanzi.net/strategies/5698aff871be80bb3a80b906?version=v2';

let items;
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);
const strategy = {
  type: StrategyType,
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          items = data;
          return items;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (items) {
        return items;
      }
      return lastFetchTask;
    }
    return items;
  },
};

export default strategy;

