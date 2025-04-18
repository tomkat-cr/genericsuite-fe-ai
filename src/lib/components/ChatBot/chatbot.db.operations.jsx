import * as gs from "genericsuite";

const formatCaughtError = gs.errorAndReenter.formatCaughtError;
const getErrorDetail = gs.errorAndReenter.getErrorDetail;
const dbApiService = gs.dbService.dbApiService;
const defaultValue = gs.genericEditorUtilities.defaultValue;

// const getUuidV4 = gs.idUtilities.getUuidV4;

const console_debug_log = gs.loggingService.console_debug_log;

// Ensure to install the crypto library with: npm install crypto
// import crypto from 'crypto';

const debug = false;

// Current user

export const getCurrentUserId = (state, dispach) => {
    if (debug) {
        console_debug_log(">>--> getCurrentUserId | state:", state);
    }
    if (typeof state !== "undefined" && state !== null) {
        return state.currentUser.id;
    }
    return null;
}

// DB: generic calls

export let abortController = null; // Define this outside your component or in a useRef if you need to persist the controller across renders without causing re-renders.

export const ApiCall = async (
    dispatch,
    params,
) => {
    const getActionName = (operationType) => {
        let response;
        switch (operationType) {
            case "getAll":
                response = "load";
                break;
            case "getOne": 
                response = "load";
                break;
            case "createRow": 
                response = "creation";
                break;
            case "updateRow": 
                response = "update";
                break;
            case "deleteRow": 
                response = "deletion";
                break;
            default:
                response = "[invalid operation]";
        }
        return response;
    }

    const getRequestMethod = (operationType) => {
        let response;
        switch (operationType) {
            case "getAll":
            case "getOne": 
                response = "GET";
                break;
            case "createRow": 
                response = "POST";
                break;
            case "updateRow": 
                response = "PUT";
                break;
            case "deleteRow": 
                response = "DELETE";
                break;
            default:
                response = "[invalid operation]";
        }
        return response;
    }

    const processGoodResponse = (data) => {
        if (debug) {
            console_debug_log(`AiAssistant | ${operationName} | data:`, data);
        }
        if (responseAttrName !== "" && typeof data[responseAttrName] === "undefined") {
            return {
                ok: false,
                response: null,
                errorMessage: `Element ${responseAttrName} not found in the API response`,
            }
        }
        return {
            ok: !data.error,
            response: (responseAttrName === "" ? data : data[responseAttrName]),
            errorMessage: data.error_message,
        }
    }

    const processErrorResponse = (errorRaw) => {
        const error = formatCaughtError(errorRaw);
        const errorDetails = getErrorDetail(errorRaw);
        if (debug) {
            console_debug_log(`AiAssistant | ${operationName} | ERROR:`, error);
            console_debug_log(`AiAssistant | ${operationName} | ERROR errorRaw:`, errorRaw);
            console_debug_log(`AiAssistant | ${operationName} | ERROR errorDetails:`, errorDetails);
        }
        return {
            ok: false,
            errorMessage: error.message,
            errorDetails: errorDetails,
        }
    }

    const verifyId = (id) => {
        return {
            ok: (id !== null),
            errorMessage: (id !== null ? "" : `Missing ID: ${id}`),
        }
    }

    const the= "the";
    const was_successful = "was successful";
    const error_in_the =  "error in the";

    const operationType = defaultValue(params, "operationType");
    const operationName = defaultValue(params, "operationName", "ApiCall");
    const operationDescription = defaultValue(params, "operationDescription", operationName);
    const ActionDescription = defaultValue(params, "ActionDescription", getActionName(operationType));
    const endpointUrl = defaultValue(params, "endpointUrl");
    const requestMethod = defaultValue(params, "requestMethod", getRequestMethod(operationType));
    const id = defaultValue(params, "id", null);
    const query = defaultValue(params, "query", {});
    const body = defaultValue(params, "body", {});
    const options = defaultValue(params, "options", {});
    const responseAttrName = defaultValue(params, "responseAttrName", "resultset");

    let response; 
    const db = new dbApiService({ url: endpointUrl });
    if (debug) {
        console_debug_log(
            `AiAssistant | ${operationName} | operationType: ${operationType}, requestMethod: ${requestMethod}, endpointUrl:`,
            endpointUrl, 'body:', body, 'query:', query, 'options:', options, 'id:', id,
        );
    }
    // Set API processing status
    dispatch({ type: 'API_PROCESSING_STATUS', payload: true });
    try {
        switch (operationType) {
            case "getAll":
                response = await db.getAll(query, body, requestMethod, options).then(
                    data => { return processGoodResponse(data) },
                    error => { return processErrorResponse(error) }
                );
                break;
            case "getOne":
                response = await db.getOne(query, options).then(
                    data => { return processGoodResponse(data) },
                    error => { return processErrorResponse(error) }
                );
                break;
            case "createRow":
                response = await db.createRow(body, query, options).then(
                    data => { return processGoodResponse(data) },
                    error => { return processErrorResponse(error) }
                );
                break;
            case "updateRow":
                response = verifyId(id);
                if (response.ok) {
                    response = await db.updateRow(id, body, query, options).then(
                        data => { return processGoodResponse(data) },
                        error => { return processErrorResponse(error) }
                    );
                }
                break;
            case "deleteRow":
                response = verifyId(id);
                if (response.ok) {
                    response = await db.deleteRow(id, body, query, options).then(
                        data => { return processGoodResponse(data) },
                        error => { return processErrorResponse(error) }
                    );
                }
                break;
            default:
                response = {
                    ok: false,
                    errorMessage: `Invalid operation type: "${operationType}"`,
                    errorDetails: null,
                }
        }
    } catch (error) {
        response = {
            ok: false,
            errorMessage: error.message,
            errorDetails: getErrorDetail(error),
        }
    }
    if (response.ok) {
        response.operationMessage = `${the} ${operationDescription} ${ActionDescription} ${was_successful}`;
    } else {
        response.operationMessage = `${error_in_the} ${operationDescription} ${ActionDescription}`;
        console_debug_log('ApiCall ERROR:');
        console_debug_log(response.operationMessage);
    }
    dispatch({ type: 'API_PROCESSING_STATUS', payload: false }); // Clear API processing status
    if (debug) {
        console_debug_log(`AiAssistant | ${operationName} | response:`, response);
    }
    return response;
}

// const sendMessageToBot = async (messageText) => {
//     try {
//         const response = await fetch('http://yourapi.com/path-to-bot', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ message: messageText }),
//             signal: abortController.signal
//         });
//         if (response.ok) {
//             const data = await response.json();
//             // Assuming the response includes the bot's reply in data.reply
//             return data.reply;
//         } else {
//             throw new Error('Bot API responded with an error.');
//         }
//     } catch (error) {
//         console.error('Error communicating with the bot:', error);
//         return null; // Handle error appropriately
//     }
// };

// DB: Conversation List

// export const generateNewConversationId = () => {
//     return getUuidV4();
// };

export const checkConversationIdChange = async (state, dispatch, externalApiResponse) => {
    let cid = state.currentConversationId;
    let apiResponse;
    if (debug) {
        console_debug_log(`>> checkConversationIdChange | cid: ${cid} | externalApiResponse:`, externalApiResponse);
    }
    if (typeof externalApiResponse['cid'] !== 'undefined' && 
        state.currentConversationId !== externalApiResponse['cid']
    ) {
        cid = externalApiResponse['cid'];
        // dispatch({ type: 'SET_CONVERSATION_ID', payload: cid });
        //
        // Reload and refresh conversation list
        apiResponse = await fetchConversations(state, dispatch);
        if (!apiResponse.ok) {
            console.error("ERROR in checkConversationIdChange > fetchConversations");
            console.error(apiResponse.operationMessage);
            console.error(apiResponse.errorMessage);
        }
    }
    // Always refresh current conversation to get the latest Chatbot response
    if (debug) {
        console_debug_log(`checkConversationIdChange | REFRESH CURRENT CONVERSATION`);
    }
    if (cid !== null) {
        apiResponse = await fetchOneConversation(cid, state, dispatch);
        if (!apiResponse.ok) {
            console.error("ERROR in checkConversationIdChange > fetchOneConversation");
            console.error(apiResponse);
            console.error(apiResponse.operationMessage);
            console.error(apiResponse.errorMessage);
        }
    }
    return cid;
}

export const loadConversationList = async (state, dispatch) => {
    const currentUserId = getCurrentUserId(state, dispatch);
    const response = ApiCall(
        dispatch,
        {
            operationName: "loadConversationList",
            operationDescription: "Conversation list",
            operationType: "getAll",
            endpointUrl: "ai_chatbot_conversations",
            query: {
                user_id: currentUserId,
            }
        }
    );
    return response;
};

export const fetchConversations = async (state, dispatch) => {
    const apiResponse = await loadConversationList(state, dispatch);
    if (apiResponse.ok) {
        dispatch({ type: 'SET_CONVERSATIONS', payload: apiResponse.response });
    }
    return apiResponse;
};

export const fetchOneConversation = async (conversationId, state, dispatch) => {
    const apiResponse = await loadConversation(conversationId, state, dispatch);
    if (debug) {
        console_debug_log(`fetchOneConversation | conversationId: ${conversationId} | apiResponse:`, apiResponse);
    }
    if (apiResponse.ok) {
        const data = {
            conversationId: conversationId,
            messages: apiResponse.response.messages,
        }
        dispatch({ type: 'SET_MESSAGES', payload: data });
    }
    return apiResponse;
};

// DB: Conversations

// const saveConversation = async (conversationId, conversation, dispatch) => {
//     const conversationAddition = {user_id: currentUserId}
//     const response = ApiCall(
//         dispatch,
//         {
//             operationName: "saveConversation",
//             operationDescription: "Conversation",
//             operationType: (conversationId === null ? "createRow" : "updateRow"),
//             if: conversationId,
//             endpointUrl: "ai_chatbot_conversations",
//             body: {...conversation, conversationAddition},
//         }
//     );
//     return response;
// };

export const loadConversation = async (conversationId, state, dispatch) => {
    const currentUserId = getCurrentUserId(state, dispatch);
    const response = ApiCall(
        dispatch,
        {
            operationName: "loadConversation (one)",
            operationDescription: "Conversation",
            operationType: "getOne",
            endpointUrl: "ai_chatbot_conversations",
            query: {
                user_id: currentUserId,
                id: conversationId,
            }
        }
    );
    return response;
};

export const deleteConversation = async (conversationId, state, dispatch) => {
    const currentUserId = getCurrentUserId(state, dispatch);
    const response = ApiCall(
        dispatch,
        {
            operationName: "deleteConversation",
            operationDescription: "Conversation",
            operationType: "deleteRow",
            id: conversationId,
            endpointUrl: "ai_chatbot_conversations",
            query: {
                user_id: currentUserId,
            }
        }
    );
    return response;
};

// BOT API management

export const sendMessageToBot = async (messageText, state, dispatch) => {
    // Set the fetch() abort controller
    if (abortController) {
        if (debug) {
            console_debug_log(`AiAssistant | sendMessageToBot | ABORTING PREVIOUS REQUEST`);
        }
        abortController.abort(); // Abort previous request if it exists
    }
    abortController = new AbortController(); // Create a new controller for the new request
    const chatToSend = [
        // ...state.messages,
        {"role": "user", "content": messageText}
    ];
    const response = ApiCall(
        dispatch,
        {
            operationName: "sendMessageToBot",
            operationDescription: "Communication with AiAssistant",
            operationType: "getAll",
            endpointUrl: "ai/chatbot",
            requestMethod: "POST",
            body: {
                "conversation": JSON.stringify(chatToSend),
                "cid": state.currentConversationId
            },
            responseAttrName: "",
            options: {
                signal: abortController.signal,
            },
        }
    );
    if (debug) {
        console_debug_log('AiAssistant | sendMessageToBot | response:', response);
    }
    if (response.ok) {
        checkConversationIdChange(state, dispatch, response);
    }

    return response;
};

export const handleCancelProcessing = (dispatch) => {
    if (abortController) abortController.abort(); // Abort the ongoing request
    dispatch({ type: 'API_PROCESSING_STATUS', payload: false }); // Clear API processing status
};
