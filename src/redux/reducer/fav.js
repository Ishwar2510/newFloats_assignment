intialState = []
function favReducer(state = intialState, action){
    switch (action.type){
        case "add_city":
            return [...state , action.payload]
        case "remove_city":
            let newState = state.filter((e)=>{
                return e.name != action.payload
            })
        default:
            return state
    }
}
export default favReducer

