import React, { Component } from 'react';
import axios from 'axios';
import PostAside from './PostAside';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }
  }

  render() {
    if(!this.state.posts.length) return null;

    const posts = this.state.posts.map((post, index) => {
      return <PostAside key={index} {...post}/>
    });

    return (
      <div>
        <h1>Посты</h1>
        { posts }
      </div>
    )
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.setState({ posts: response.data })
    })
  }
}