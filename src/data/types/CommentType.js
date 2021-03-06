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

import UserType from './UserType';

const CommentType = new ObjectType({
  name: 'Comment',
  fields: {
    commentUser: { type: UserType },
    content: { type: StringType },
    createdAt: { type: StringType }
  }
});

export default CommentType;
