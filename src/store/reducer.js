export const reducer = (state, action) =>{
    switch(action.type){
        case "SignIn":
            state.userId = action.payload.userId
            return {...state}

        default:
            return state
    }
}