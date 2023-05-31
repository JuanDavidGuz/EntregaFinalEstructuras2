import React from 'react';
import { PostTopBar } from './PostTopBar';
import { PostBottomBar  } from './PostBottomBar';

export const Post = ({ picture, profilePicture, username }) => {
	return (
		<>
			<div className='bg-gray-100 rounded-md shadow-md'>
				<PostTopBar profilePicture={profilePicture} username={username}/>
				<img
					src={picture}
					alt={`fsdfds`}
					className='w-full object-cover'
				/>
				<PostBottomBar />
			</div>
		</>
	);
};
