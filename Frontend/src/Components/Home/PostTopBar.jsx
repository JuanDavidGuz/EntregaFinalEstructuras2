export const PostTopBar = ({ profilePicture, username }) => {
	return (
		<>
			<div className='h-1/2 p-2 bg-gray-200 rounded-md'>
				<div className='flex items-center justify-between py-4 px-6 border-b'>
					<div className='flex items-center'>
						<img
							src={profilePicture}
							alt='Profile'
							className='w-10 h-10 rounded-full mr-4'
						/>
						<div>
							<h2 className='text-lg font-semibold'>{ username }</h2>
							<p className='text-gray-500 text-sm'>Ciudad, País</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
