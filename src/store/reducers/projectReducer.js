const initState = {
  projects: [
    { id: 1, title: 'Summer day', content: 'this is nice, very nice'},
    { id: 2, title: 'Winter day', content: 'Not bad at all'},
    { id: 3, title: 'Autumn day', content: 'Very nice an cool this is'},
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;