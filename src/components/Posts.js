import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts,deletePost } from '../actions/postActions';

import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';
// import  deletePost  from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  

  onDelete= async post => {
    // post.preventDefault();
    await fetch('http://localhost:8080/api/movies/'+post["id"],{
    method: "DELETE"
  })
    // .then(res => res.json())
    // .then(posts =>
    //   dispatch({
    //     type: DELETE_POST,
    //     payload: posts
    //   })
    // );
  }


  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.Rank}>
        <h3>{post.Title}</h3>
        <p>{post.Description}</p>
        <p>{post.Runtime}</p>
        <p>{post.Genre}</p>
        <p>{post.Rating}</p>
        <p>{post.Metascore}</p>
        <p>{post.Votes}</p>
        <p>{post.Earning}</p>
        <p>{post.Director_Id}</p>
        <p>{post.Actor}</p>
        <p>{post.Year}</p>
        <button>UPDATE MOVIE</button>
        <button onClick={()=> this.onDelete(post)}>DELETE MOVIE</button>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);