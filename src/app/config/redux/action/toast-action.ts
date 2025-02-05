export const setToastMessage = (message: string | null) => {
  return {
    type: 'SET_TOAST_MESSAGE',
    payload: message
  }
}