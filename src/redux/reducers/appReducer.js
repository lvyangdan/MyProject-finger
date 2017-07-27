let appState={
	showAlert: false,
    alertMsg: ''
}
export default function appReducer(state=appState,action){
	switch(action.type){
		case 'SIGN_IN':return {...state,showAlert:true,alertMsg: action.msg};
		default:return state;
	}
}