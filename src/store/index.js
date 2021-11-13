import { createStore } from 'redux'

const initialState = {
  posts: [
    {
      id: 1,
      title: 'Тестовая статья',
      imageUrl:
        'https://images.unsplash.com/photo-1636132644036-79b25423bce9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
      id: 2,
      title: 'Это вторая статья',
      imageUrl:
        'https://images.unsplash.com/photo-1636145172911-5e06fce746d5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      text: 'йцуйцулд фыв аофыолдво лдфыолдвфолдывл'
    }
  ],
  comments: [
    {
      id: 1,
      fullName: 'Ali Connors ',
      avatarUrl:
        'https://mui.com/static/images/avatar/1.jpg',
      text: ' — I\'ll be in your neighborhood doing errands this…'
    },
    {
      id: 2,
      fullName: 'Scott ',
      avatarUrl:
        'https://mui.com/static/images/avatar/2.jpg',
      text: ' — Wish I could come, but I\'m out of town this…'
    },
    {
      id: 3,
      fullName: 'Sandra Adams ',
      avatarUrl:
        'https://mui.com/static/images/avatar/3.jpg',
      text: ' — Do you have Paris recommendations? Have you ever…'
    }
  ],
  searchValue: ''
}

const appReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_POST':
      return {
        ...state, posts: [...state.posts, payload]
      }
    case 'REMOVE_POST':
      return {
        ...state, posts: state.posts.filter(obj => obj.id !== payload)
      }
    default:
      return state
  }
}

export default createStore(appReducer)