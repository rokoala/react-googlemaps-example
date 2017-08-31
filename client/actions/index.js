export const setItem = (id, text) => {
  return {
    type: 'SET_ITEM',
    id: id,
    text: text
  }
}