let defaultState={
    isAuthenticated: false,
    currentUser: ''
}
export default function accountReducers(state=defaultState,action){
	console.log(action)
	console.log(action.username)
	switch(action.type){
		case 'SIGN_IN':return  {...state, isAuthenticated: true, currentUser: action.username};
		case 'LOG_OUT':return state;
        default:return state
	}
}