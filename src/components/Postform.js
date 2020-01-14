import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Rank: '',
      Title: '',
      Description: '',
      Runtime: '',
      Genre: '',
      Rating: '',
      Metascore: '',
      Votes: '',  
      Earning: '',
      Director_Id: '',
      Actor: '',
      Year: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      Rank: this.state.Rank,
      Title: this.state.Title,
      Description: this.state.Description,
      Runtime: this.state.Runtime,
      Genre: this.state.Genre,
      Rating: this.state.Rating,
      Metascore: this.state.Metascore,
      Votes: this.state.Votes,
      Earning: this.state.Earning,
      Director_Id: this.state.Director_Id,
      Actor: this.state.Actor,
      Year: this.state.Year
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
        <div>
            <label>Rank: </label>
            <br />
            <input
              type="integer"
              name="Rank"
              onChange={this.onChange}
              value={this.state.Rank}
            />
          </div>
          <br />
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="Title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Description: </label>
            <br />
            <textarea
              name="Description"
              onChange={this.onChange}
              value={this.state.Description}
            />
          </div>
          <br />
          <div>
            <label>Runtime: </label>
            <br />
            <input
              type="integer"
              name="Runtime"
              onChange={this.onChange}
              value={this.state.Runtime}
            />
          </div>
          <br />
          <div>
            <label>Genre: </label>
            <br />
            <textarea
              name="Genre"
              onChange={this.onChange}
              value={this.state.Genre}
            />
          </div>
          <br />
          <div>
            <label>Rating: </label>
            <br />
            <input
              type="integer"
              name="Rating"
              onChange={this.onChange}
              value={this.state.Rating}
            />
          </div>
          <br />
          <div>
            <label>Metascore: </label>
            <br />
            <textarea
              name="Metascore"
              onChange={this.onChange}
              value={this.state.Metascore}
            />
          </div>
          <br />
          <div>
            <label>Votes: </label>
            <br />
            <input
              type="integer"
              name="Votes"
              onChange={this.onChange}
              value={this.state.Votes}
            />
          </div>
          <br />
          <div>
            <label>Earning: </label>
            <br />
            <textarea
              name="Earning"
              onChange={this.onChange}
              value={this.state.Earning}
            />
          </div>
          <br />
          <div>
            <label>Director_Id: </label>
            <br />
            <input
              type="integer"
              name="Director_Id"
              onChange={this.onChange}
              value={this.state.Director_Id}
            />
          </div>
          <br />
          <div>
            <label>Actor: </label>
            <br />
            <textarea
              name="Actor"
              onChange={this.onChange}
              value={this.state.Actor}
            />
          </div>
          <br />
          <div>
            <label>Year: </label>
            <br />
            <input
              type="integer"
              name="Year"
              onChange={this.onChange}
              value={this.state.Year}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);