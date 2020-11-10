import { useEffect } from 'react';
import axios from 'axios';

// fetchShow(setShow, setSeasons, formatSeasons);

// export const fetchShow = () => {

// }

// useEffect(() => {
export const fetchShow = (props) => {
	console.log(props);
	axios
		.get(
			'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
		)
		.then((res) => {
			props.setShow(res.data);
			props.setSeasons(props.formatSeasons(res.data._embedded.episodes));
		});
};
fetchShow();
// }, []);
