/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as List
} from 'graphql';

import StrategyType from './StrategyType';
import UserType from './UserType';

const TopicType = new ObjectType({
  name: 'Topic',
  fields: {
    owner: { type: UserType},
    title: { type: StringType },
    subTitle: { type: StringType },
    cover: { type: StringType },
    strategies: { type: new List(StrategyType)}
  }
});

export default TopicType;
