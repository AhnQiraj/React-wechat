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

import PhotoType from './PhotoType';
import CommentType from './CommentType';
import UserType from './UserType';

const StrategyType = new ObjectType({
  name: 'Strategy',
  fields: {
    owner: { type: UserType},
    title: { type: StringType },
    subTitle: { type: StringType },
    collectCount: { type: StringType },
    tryCount: { type: StringType },
    score: { type: StringType },
    description: { type: StringType },
    cover: { type: StringType },
    photos: { type: new List(PhotoType) },
    comments: { type: new List(CommentType)}
  }
});

export default StrategyType;
