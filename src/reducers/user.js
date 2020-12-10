export const SAVE_USER = "saveUser"

export const saveUser = {type: SAVE_USER}


const initData = {
  user: undefined
}

const user = (state=initData, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {user: action.user}
    default:
      return state
  }
}

export {user}
