import { useLoaderData } from 'react-router-dom';
import { getMovieDetail } from '../services/apiCall';
import styles from '../styles/MovieDetail.module.css';
import type { LoaderFunctionArgs } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;

  if (!id) {
    throw new Response('Movie id is required', { status: 400 });
  }

  const data = await getMovieDetail(id);
  return { data };
};

const MovieDetail = () => {
  const { data } = useLoaderData();
  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = data;
  // console.log('🤖data', data);
  const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className={styles.detailWrapper}>
      <h1>{title}</h1>
      <div className={styles.bottomWrapper}>
        <div className={styles.posterWrapper}>
          <img src={IMG_API + poster_path} alt='poster' />
        </div>
        <ul className={styles.ul}>
          <li>
            <span>Overview:</span>
            {overview}
          </li>
          <li>
            <span>Name:</span>
            {title}
          </li>
          <li>
            <span>Vote Count:</span>
            {vote_count}
          </li>
          <li>
            <span>Vote Average:</span>
            {vote_average}
          </li>
          <li>
            <span>Date:</span>
            {release_date}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
