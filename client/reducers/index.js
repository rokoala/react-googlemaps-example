const controlMap = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state;
  }
}

export default controlMap