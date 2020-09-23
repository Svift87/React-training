const ADD_TEXT = 'ADD-TEXT'
const ADD_POST = 'ADD-POST'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_TEXT:
            state.textInPost = action.text;      

            return state;
        case ADD_POST:
            let post = {
                id: 3,
                message: state.textInPost,
                like: 0
            }
            state.postData.push(post);
            state.textInPost = '';

            return state;
        default:
            return state;
    }
}

export default profileReducer