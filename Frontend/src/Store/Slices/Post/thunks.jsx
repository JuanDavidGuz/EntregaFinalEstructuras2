import { setPosts, startLoading } from './PostSlice';
import axios from 'axios';

export const getPosts = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());
console.log(getState())
		const responseImages = await axios.get(
			`https://picsum.photos/v2/list?page=${page + 4}&limit=100`
		);

		const responseUsers = await axios.get(
			`https://randomuser.me/api/?page=${page}&results=100`
		);

		const randomNum = () => {
            const min = 10;
            const max = 5000;
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};

		const response = responseImages.data.map((item, key) => ({
            userId: responseUsers.data.results[key].id.value,
			user: responseUsers.data.results[key].login.username,
			profilePhoto: responseUsers.data.results[key].picture.thumbnail,
			imageUrl: item.download_url,
            likes: randomNum(),
            comments: randomNum(),
		}));

		dispatch(
			setPosts({
				getPosts: response,
				page: page + 1,
			})
		);
	};
};
