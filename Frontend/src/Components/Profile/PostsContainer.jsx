import React from 'react';
import { Post } from '../../Components/Post';
import * as _ from '../../hooks/useFile';

export const PostsContainer = () => {
  const { posts } = _.useFile();
  return (
    <div className="grid grid-cols-3 gap-4 mx-16 mt-2 pl-60 bg-black">
 {posts &&
				posts?.map((post) => (
					<Post
						key={post._id}
						post={post}
					/>
				))}
    </div>
  );
};
