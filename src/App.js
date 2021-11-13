import React from 'react'
import { Grid, List } from '@mui/material'
import { Comment } from './components/Comment'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const posts = useSelector((state) => state.posts)
  const comments = useSelector((state) => state.comments)
  const dispatch = useDispatch()
  const addPost = () => {
    dispatch({
      type: 'ADD_POST',
      payload: {
        id: 3,
        title: 'Третья статья',
        imageUrl:
          'https://images.unsplash.com/photo-1636145411033-41bb1b898d5c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: 'йцу 1231231 уйц йц123123!!!'
      }
    })
  }

  const removePost = (id) => {
    if (window.confirm('Ты реально хочешь это?!')) {
      dispatch({
        type: 'REMOVE_POST',
        payload: id
      })
    }
  }

  return (
    <div className='App'>
      <Header onAddPost={addPost} />
      <Grid className='wrapper' container spacing={2}>
        <Grid item xs={7}>
          {posts.map((obj) => (
            <Post {...obj} onRemove={removePost} />
          ))}
        </Grid>
        <Grid item xs={5}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {comments.map((obj) => (<Comment {...obj} />))}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
