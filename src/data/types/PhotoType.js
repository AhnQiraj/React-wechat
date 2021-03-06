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

const PhotoContentType = new ObjectType ({
  name: 'PhotoContent',
  fields: {
    img: { type: StringType },
    desc: { type: StringType }
  }
});

const PhotoType = new ObjectType({
  name: 'Photo',
  fields: {
    strategy: { type: StringType },
    photoId: { type: StringType },
    content: { type: new List(PhotoContentType)},
    praiseCount: { type: StringType },
    comments: { type: new List(CommentType)}
  }
});

export default PhotoType;
