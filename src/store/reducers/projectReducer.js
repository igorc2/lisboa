const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
    case 'UPDATE_PROJECT':
      console.log('cre', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
    case 'UPDATE_PROJECT_ERROR':
      console.error('err: ', action.err)
      return state;
    default: 
      return state;
  }
}

export default projectReducer;