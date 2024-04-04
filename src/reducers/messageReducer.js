import CONSTANTS from '../constants';
const { ACTIONS } = CONSTANTS;

function messageReducer(state, action) {
    switch(action.type) {
        case ACTIONS.MESSAGE_LOAD_SUCCESS: {
            const { payload: { comments } } = action; // action.payload.comments

            return {
                ...state,
                messages: comments,
                isLoading: false,
                error: null
            };
        }
        case ACTIONS.MESSAGE_LOAD_ERROR: {
            const { payload: { error } } = action; // action.payload.error

            return {
                ...state,
                error,
                isLoading: false
            };
        }
        case ACTIONS.ADD_NEW_MESSAGE: {
            const { payload: newMessage } = action;

            const newMessagesArray = [...state.messages, newMessage];

            return {
                ...state,
                messages: newMessagesArray
            };
        }
        case ACTIONS.DELETE_MESSAGE: {
            const { payload: deleteMessageId } = action;
            
            const filteredMessages = 
            state.messages.filter(currentMessage => currentMessage.id !== deleteMessageId);
            
            return {
                ...state,
                messages: filteredMessages
            };
        }
        default: return state;
    }
}

export default messageReducer;