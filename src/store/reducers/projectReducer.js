const initState = {
  projects: [
    { id: 1, title: 'Summer day', content: 'this is nice, very nice'},
    { id: 2, title: 'Winter day', content: 'Not bad at all'},
    { id: 3, title: 'Autumn day', content: 'Very nice an cool this is'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('cre', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.error('err: ', action.err)
      return state;
    default: 
      break;
  }
  return state;
}

export default projectReducer;