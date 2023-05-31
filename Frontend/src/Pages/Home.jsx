import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';
import { Post } from '../Components/Home/Post';
import { Suggestions } from '../Components/Home/Suggestions';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../Store/Slices/Post/thunks';

export const Home = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const { ref, inView } = useInView();

	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
    console.log(posts);
	}, []);
  
	useEffect(() => {
		if (inView) {
			setPage((prevPage) => prevPage + 1);
		}
	}, [inView]);

	useEffect(() => {
		if (page > 1) {
			dispatch(getPosts());
		}
	}, [page]);

	const handleScroll = (e) => {
		const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    //console.log(page);
    console.log(scrollTop, scrollHeight)
    console.log("dfsd", 20000 - scrollTop)
    console.log("heig", clientHeight)
    
		if (20000 - scrollTop < clientHeight) {
			setPage((prevPage) => prevPage + 1);
      console.log(page);
		}
	};

	return (
		<>
			<div className=' grid grid-cols-5 pl-60 '>
				<div
          ref={ref}
					className='flex col-span-4 h-screen overflow-y-scroll justify-center pt-10 bg-[#000000]'
					onScroll={handleScroll}>
					<div className='w-3/5 gap-4 space-y-16'>
						{posts.map((item, key) => (
							<Post
								key={key}
								picture={item.imageUrl}
                profilePicture={item.profilePhoto}
                username={item.user}
							/>
						))}
					</div>
					{loading && (
						<div className='flex justify-center items-center py-4'>
							<p className='text-gray-500 text-sm font-medium'>Loading...</p>
						</div>
					)}
				</div>
				<div className='col-span-1 pt-10 bg-[#000000]'>
					<Suggestions posts={posts.slice(0, 9)}/>
				</div>
			</div>
		</>
	);
};
