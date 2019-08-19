export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()

    }).then(() => {
      dispatch({
        type: 'CREATE_PROJECT',
        project
      })
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}

export const updateProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();
    console.log('project', project)
    //firestore.collection("projects").doc(project.uid).update({status: '3'}).then(() => {
    firestore.update({collection: 'projects', doc: project.id}, project).then(() => {
      dispatch({
        type: 'UPDATE_PROJECT',
        project
      })
    }).catch((err) => {
      dispatch({type: 'UPDATE_PROJECT_ERROR', err})
    });
  }
}


export const deleteProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();
    firestore.delete({collection: 'projects', doc: project.id}, project).then(() => {
      dispatch({
        type: 'DELETE_PROJECT',
        project
      })
    }).catch((err) => {
      dispatch({type: 'DELETE_PROJECT_ERROR', err})
    });
  }
}