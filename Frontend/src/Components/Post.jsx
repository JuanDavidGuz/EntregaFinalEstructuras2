import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFile } from '../hooks/useFile';

export const Post = (post) => {
	const {
		user: { userID },
	} = useSelector((state) => state.user);

	const [showMenu, setShowMenu] = useState('hidden');
	const [like, setLike] = useState(post.post.likes.includes(userID) || false);

	const { updatePost, deletePost } = useFile();

	const {
		description,
		fileUrl,
		create_by: { name, _id: createByUser },
		_id: postID,
	} = post.post;

	const handleLike = () => {
		setLike(!like);
		updatePost(postID, { like: like });
	};

	return (
		<div className='border rounded-md'>
			<div className='h-12 gap-2 border-b px-3 justify-between flex items-center'>
				<div className='flex gap-3 items-center justify-center'>
					<h1>{name}</h1>
				</div>
			</div>
			<div className={`${showMenu} pr-4 z-10 md:block md:w-auto`}>
				<ul
					className={`${showMenu} flex w-full flex-col items-center p-4 border border-gray-100 rounded bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white ${
						createByUser != userID ? 'hidden' : ''
					}`}>
					<button
						onClick={() => deletePost(postID)}
						className={`block py-2 pl-3 pr-4 text-gray-700 md:bg-transparent hover:text-red-500 md:p-0 ${
							createByUser != userID ? 'hidden' : ''
						}`}>
						Eliminar
					</button>
				</ul>
			</div>
			<div className='flex flex-col'>
				<div className='h-[22rem] md:h-[28rem] lg:h-[35rem]'>
					<img
						src={`${import.meta.env.VITE_BASE_URL}${fileUrl}`}
						className='h-full w-full'
						alt=''
					/>
				</div>
				<div className='border-t pt-1.5 pl-2'>
					<p className='text-md overflow-auto pt-1 pr-[0.4rem]  '>
						{description}
					</p>
					<div className=''>
						<p className='font-bold pl-1 mt-0 mb-4'>{post.post.likes.length} Me gustas</p>
					</div>
				</div>
			</div>
		</div>
	);
};
