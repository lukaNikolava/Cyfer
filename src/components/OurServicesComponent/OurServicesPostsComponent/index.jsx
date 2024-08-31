import React, { useEffect, useState } from 'react'
import './styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from '../../../redux/slices/postsSlice'
import { fetchPosts } from '../../../services/postsServices'
import postsLogo from '../../../assets/logoSvgs/postsLogo.svg'

export const OurServicesPostsComponent = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.posts);
    const [page, setPage] = useState(1);
    const limit = 8;

    useEffect(() => {
        const getPosts = async () => {
          dispatch(fetchPostsStart());
          try {
            const data = await fetchPosts(page, limit);
            dispatch(fetchPostsSuccess(data));
          } catch (err) {
            dispatch(fetchPostsFailure('Failed to fetch posts.'));
          }
        };
     
        getPosts();
      }, [dispatch, page]);

    return (
        <div className='postCardsSection'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul className='postCardsContainer'>
                {posts.map(post => (
                    <li key={post.id} className='postCard'>
                        <div className='cardLogoContainer'>
                          <img src={postsLogo} alt="error404" />
                        </div>
                        <div className='postCardContent'>
                          <h5 className='postCardTitle'>{post.title}</h5>
                          <p className='postCardBody'>{post.body}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='postButtonsContainer'>
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
              <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};
