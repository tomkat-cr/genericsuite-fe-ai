const console_debug_log = require("genericsuite").loggingService.console_debug_log;

const debug = false;

export const setChatbotErrorMsg = (errorMsg, dispatch) => {
    dispatch({ type: 'SET_ERROR_MSG', payload: errorMsg });
}

export const setChatbotInputMessage = (inputMessage, dispatch) => {
    dispatch({ type: 'SET_INPUT_MESSAGE', payload: inputMessage });
}

export const addMessageToConversation = (newMessage, role, dispatch) => {
    const systemMessage = { content: newMessage, role: role };
    dispatch({ type: 'ADD_MESSAGE', payload: systemMessage });

}

export const dispatchWaitAnimation = (waitAnimationFlag, dispatch) => {
    dispatch({ type: 'API_PROCESSING_STATUS', payload: waitAnimationFlag })
}

export const setConversationListToggle = (conversationListToggle, dispatch) => {
    if (debug) {
        console_debug_log(`setConversationListToggle | conversationListToggle: ${conversationListToggle}`);
    }
    dispatch({ type: 'SET_CONVERSATION_LIST_TOGGLE', payload: conversationListToggle });
}
