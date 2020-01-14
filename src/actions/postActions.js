import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('http://localhost:8080/api/movies')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('http://localhost:8080/api/movies', {
    method: 'POST',
    headers: {  
      Accept: "application/json",
      'Content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

// export const deletePost = element => dispatch => {
//   fetch('http://localhost:8080/api/movies/'+element["id"],{
//     method: "DELETE"
//   })
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: DELETE_POST,
//         payload: posts
//       })
//     );
// };


// export const deletePost=deletePost=>dispatch=>{
//   fetch('https://localhost:8080/api/movies')
//   method: 'DELETE'

// export const deletePost=deleteData=>dispatch=>{
//   fetch('http://localhost:8080/api/movies/delete',{
//     method:'DELETE',
//     headers:{
//       'content-type':'application/json'
//     }
//     body:JSON.stringify(deleteData)
//   })
//   .then
// }