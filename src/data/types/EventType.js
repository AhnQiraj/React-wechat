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

import CommentType from './CommentType';
import UserType from './UserType';

const EventType = new ObjectType({
  name: 'Event',
  fields: {
    owner: { type: UserType},
    title: { type: StringType },
    content: { type: StringType },
    number: { type: StringType },
    price: { type: StringType },
    participantCount: { type: new List(UserType) },
    cover: { type: StringType },
    comments: { type: new List(CommentType)},
    startDate: { type: StringType },
    endDate: { type: StringType }
  }
});

export default EventType;
