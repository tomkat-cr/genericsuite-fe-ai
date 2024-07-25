'use strict';

var React = require('react');
var gs = require('genericsuite');
var axios = require('axios');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var fontawesome = require('@fortawesome/fontawesome');
var fontawesomeFreeSolid = require('@fortawesome/fontawesome-free-solid');
var reactSyntaxHighlighter = require('react-syntax-highlighter');
var index_js = require('react-syntax-highlighter/dist/cjs/styles/prism/index.js');
var index_js$1 = require('react-syntax-highlighter/dist/cjs/styles/hljs/index.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var gs__namespace = /*#__PURE__*/_interopNamespaceDefault(gs);

gs__namespace.loggingService.console_debug_log;
const setChatbotErrorMsg = (errorMsg, dispatch) => {
  dispatch({
    type: 'SET_ERROR_MSG',
    payload: errorMsg
  });
};
const setChatbotInputMessage = (inputMessage, dispatch) => {
  dispatch({
    type: 'SET_INPUT_MESSAGE',
    payload: inputMessage
  });
};
const addMessageToConversation = (newMessage, role, dispatch) => {
  const systemMessage = {
    content: newMessage,
    role: role
  };
  dispatch({
    type: 'ADD_MESSAGE',
    payload: systemMessage
  });
};
const dispatchWaitAnimation = (waitAnimationFlag, dispatch) => {
  dispatch({
    type: 'API_PROCESSING_STATUS',
    payload: waitAnimationFlag
  });
};
const setConversationListToggle = (conversationListToggle, dispatch) => {
  dispatch({
    type: 'SET_CONVERSATION_LIST_TOGGLE',
    payload: conversationListToggle
  });
};

fontawesome.library.add(fontawesomeFreeSolid.faMicrophone, fontawesomeFreeSolid.faStop);
const dbApiService$3 = gs__namespace.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER$2 = gs__namespace.dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log$3 = gs__namespace.loggingService.console_debug_log;
const formatCaughtError$4 = gs__namespace.errorAndReenter.formatCaughtError;
const toggleIdVisibility$3 = gs__namespace.ui.toggleIdVisibility;
const getMediaTypeToRecord = gs__namespace.media.getMediaTypeToRecord;
const mediaSupported = gs__namespace.media.mediaSupported;
const BUTTON_LISTING_CLASS$4 = gs__namespace.classNameConstants.BUTTON_LISTING_CLASS;
const debug = true;
const extControlsToShowHide$1 = ['user_input', 'user_input_submit', 'fileUploader', 'cameraComponent'];
const useAxios$1 = (process.env.REACT_APP_USE_AXIOS || "1") == "1";
const VoiceMessageRecorder = _ref => {
  let {
    id,
    setExternalInputMessage,
    handleUpdateSize,
    dispatch,
    sendMessage
  } = _ref;
  const [isRecording, setIsRecording] = React.useState(false);
  const [audioData, setAudioData] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const mediaRecorderRef = React.useRef(null);
  const startRecording = async () => {
    toggleIdVisibility$3("off", extControlsToShowHide$1);
    setIsRecording(true);
    setErrorMsg(null);
    {
      startMediaDevices();
    }
  };
  const startMediaDevices = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      const mediaType = getMediaTypeToRecord();
      if (debug) console_debug_log$3("VoiceMessageRecorder | startRecording | extension: ".concat(mediaType["extension"]));
      if (debug) console_debug_log$3("mediaSupported", mediaSupported());

      // Set the MediaRecorder options   
      const mediaRecorder = new MediaRecorder(stream, mediaType["options"]);
      mediaRecorderRef.current = mediaRecorder;

      // Handle the data available event
      const chunks = [];
      mediaRecorder.ondataavailable = e => {
        chunks.push(e.data);
      };

      // Handle the stop event
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, {
          type: "audio/".concat(mediaType["extension"])
        });
        setAudioData(blob);
      };

      // Start recording
      mediaRecorder.start(1000);
    } catch (error) {
      const errorMsgAux = 'Error starting recording:';
      console.error(errorMsg, error);
      setIsRecording(false);
      setErrorMsg("".concat(errorMsgAux, " ").concat(error.message));
      toggleIdVisibility$3("on", extControlsToShowHide$1);
    }
  };
  const stopRecording = () => {
    {
      stopMediaDevices();
    }
  };
  const stopMediaDevices = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  const sendFile = async (url, formData, authHeader, queryParams) => {
    const headers = Object.assign({
      'Access-Control-Allow-Origin': '*'
    }, authHeader);
    try {
      const response = await axios.post(url, formData, {
        headers: headers,
        params: queryParams
      });
      // Hide WaitAnimation after fetching data
      dispatchWaitAnimation(false, dispatch);
      if (debug) {
        console_debug_log$3('[FA] VoiceMessageRecorder is calling setExternalInputMessage', response.data);
      }
      // Send the transcript to the input text box
      setExternalInputMessage(response.data.response);
      // Restore buttons in the input text area
      toggleIdVisibility$3("on", extControlsToShowHide$1);
      // Update the size of the input text area if the handleUpdateSize function is provided.
      if (handleUpdateSize) {
        handleUpdateSize();
      }
      // Send the message if the sendMessage function is provided (automatic send functionality).
      if (sendMessage) {
        sendMessage();
      }
    } catch (errorRaw) {
      console.error(errorRaw);
      // Hide WaitAnimation after the error
      const error = errorRaw.message + (typeof errorRaw.response !== 'undefined' ? ": " + errorRaw.response.data : '');
      // Hide WaitAnimation after the error
      dispatchWaitAnimation(false, dispatch);
      // Restore buttons in the input text area
      toggleIdVisibility$3("on", extControlsToShowHide$1);
      // Send error message to the chatbot
      console.error('[FA] Error sending voice message:', error);
      setErrorMsg(error.message);
    }
  };
  React.useEffect(() => {
    {
      console_debug_log$3("VoiceMessageRecorder | useEffect() of sendVoiceMessage | isRecording: ".concat(isRecording));
    }
    const sendVoiceMessage = async () => {
      if (!audioData) {
        return;
      }
      // Prepare the audit to send to the API
      const formData = new FormData();
      const extension = audioData.type.split('/')[1];
      const fileName = "voiceMessage.".concat(extension);
      // const appleDevice = MediaRecorder.isTypeSupported('audio/mpeg');
      const appleDevice = extension === 'mp4';
      const sourceLang = appleDevice ? 'get_user_lang' : 'auto';
      const other = appleDevice ? 'no_mp3_native_support' : '';
      formData.append('file', audioData, fileName);
      const options = {
        raw_body: true,
        headers: MULTIPART_FORM_DATA_HEADER$2
      };
      const query_params = {
        "extension": extension,
        "source_lang": sourceLang,
        "other": other
      };
      const db = new dbApiService$3({
        url: "ai/voice_to_text"
      });
      {
        console_debug_log$3("VoiceMessageRecorder | sendVoiceMessage | fileName: ".concat(fileName));
      }
      // Clear previous message in the input text area
      setExternalInputMessage('');
      // Update the size of the input text area if the handleUpdateSize function is provided.
      // if (handleUpdateSize) {
      //     handleUpdateSize();
      // }
      // Clear audio data
      setAudioData(null);
      // Show WaitAnimation while fetching data
      dispatchWaitAnimation(true, dispatch);
      if (useAxios$1) {
        const authHeader = gs__namespace.authHeader.authHeader();
        const endpointUrl = "".concat(process.env.REACT_APP_API_URL, "/", "ai/voice_to_text");
        await sendFile(endpointUrl, formData, authHeader, query_params);
      } else {
        db.getAll(query_params, formData, 'POST', options).then(data => {
          {
            console_debug_log$3("VoiceMessageRecorder | sendVoiceMessage | data:", data);
          }
          // Hide WaitAnimation after fetching data
          dispatchWaitAnimation(false, dispatch);
          {
            console_debug_log$3('VoiceMessageRecorder is calling setExternalInputMessage', data.response);
          }
          // Send the transcript to the input text box
          setExternalInputMessage(data.response);
          // Restore buttons in the input text area
          toggleIdVisibility$3("on", extControlsToShowHide$1);
          // Update the size of the input text area if the handleUpdateSize function is provided.
          // if (handleUpdateSize) {
          //     handleUpdateSize();
          // }
          // Send the message if the sendMessage function is provided (automatic send functionality).
          if (sendMessage) {
            sendMessage();
          }
        }, error => {
          error = formatCaughtError$4(error);
          {
            console_debug_log$3("VoiceMessageRecorder | sendVoiceMessage | ERROR:", error);
          }
          // Hide WaitAnimation after the error
          dispatchWaitAnimation(false, dispatch);
          // Restore buttons in the input text area
          toggleIdVisibility$3("on", extControlsToShowHide$1);
          // Send error message to the chatbot
          console.error('Error sending voice message:', error);
          setErrorMsg(error.message);
        });
      }
    };
    if (!isRecording && audioData) {
      sendVoiceMessage();
    }
  }, [isRecording, audioData, setExternalInputMessage, handleUpdateSize, dispatch, sendMessage]);
  React.useEffect(() => {
    if (errorMsg != null) {
      setChatbotErrorMsg("Error processing the voice message: ".concat(errorMsg), dispatch);
    }
  }, [errorMsg, dispatch]);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "voice-recorder"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: isRecording ? stopRecording : startRecording,
    className: "".concat(BUTTON_LISTING_CLASS$4, " mr-2"),
    title: isRecording ? 'Stop Recording' : 'Start Recording'
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: isRecording ? 'stop' : 'microphone',
    size: "lg"
  })));
};

const formatCaughtError$3 = gs__namespace.errorAndReenter.formatCaughtError;
const authenticationService = gs__namespace.authenticationService.authenticationService;
const dbApiService$2 = gs__namespace.dbService.dbApiService;
const defaultValue = gs__namespace.genericEditorUtilities.defaultValue;
const console_debug_log$2 = gs__namespace.loggingService.console_debug_log;

// Current user

const getCurrentUser = () => {
  let currentUser;
  const setCurrentUser = x => {
    currentUser = x;
  };
  if (authenticationService.currentUser) {
    const subscription = authenticationService.currentUser.subscribe(x => setCurrentUser(x));
    subscription.unsubscribe();
  }
  if (typeof currentUser !== "undefined" && currentUser !== null) {
    return currentUser.id;
  }
  return null;
};
const currentUser = getCurrentUser();

// DB: generic calls

let abortController = null; // Define this outside your component or in a useRef if you need to persist the controller across renders without causing re-renders.

const ApiCall = async (dispatch, params) => {
  const getActionName = operationType => {
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
  };
  const getRequestMethod = operationType => {
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
  };
  const processGoodResponse = data => {
    if (responseAttrName !== "" && typeof data[responseAttrName] === "undefined") {
      return {
        ok: false,
        response: null,
        errorMessage: "Element ".concat(responseAttrName, " not found in the API response")
      };
    }
    return {
      ok: !data.error,
      response: responseAttrName === "" ? data : data[responseAttrName],
      errorMessage: data.error_message
    };
  };
  const processErrorResponse = errorRaw => {
    const error = formatCaughtError$3(errorRaw);
    return {
      ok: false,
      errorMessage: error.message
    };
  };
  const verifyId = id => {
    return {
      ok: id !== null,
      errorMessage: id !== null ? "" : "Missing ID: ".concat(id)
    };
  };
  const the = "the";
  const was_successful = "was successful";
  const error_in_the = "error in the";
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
  const db = new dbApiService$2({
    url: endpointUrl
  });
  // Set API processing status
  dispatch({
    type: 'API_PROCESSING_STATUS',
    payload: true
  });
  try {
    switch (operationType) {
      case "getAll":
        response = await db.getAll(query, body, requestMethod, options).then(data => {
          return processGoodResponse(data);
        }, error => {
          return processErrorResponse(error);
        });
        break;
      case "getOne":
        response = await db.getOne(query, options).then(data => {
          return processGoodResponse(data);
        }, error => {
          return processErrorResponse(error);
        });
        break;
      case "createRow":
        response = await db.createRow(body, query, options).then(data => {
          return processGoodResponse(data);
        }, error => {
          return processErrorResponse(error);
        });
        break;
      case "updateRow":
        response = verifyId(id);
        if (response.ok) {
          response = await db.updateRow(id, body, query, options).then(data => {
            return processGoodResponse(data);
          }, error => {
            return processErrorResponse(error);
          });
        }
        break;
      case "deleteRow":
        response = verifyId(id);
        if (response.ok) {
          response = await db.deleteRow(id, body, query, options).then(data => {
            return processGoodResponse(data);
          }, error => {
            return processErrorResponse(error);
          });
        }
        break;
      default:
        response = {
          ok: false,
          errorMessage: "Invalid operation type: \"".concat(operationType, "\"")
        };
    }
  } catch (error) {
    response = {
      ok: false,
      errorMessage: error.message
    };
  }
  if (response.ok) {
    response.operationMessage = "".concat(the, " ").concat(operationDescription, " ").concat(ActionDescription, " ").concat(was_successful);
  } else {
    response.operationMessage = "".concat(error_in_the, " ").concat(operationDescription, " ").concat(ActionDescription);
    console_debug_log$2('ApiCall ERROR:');
    console_debug_log$2(response.operationMessage);
  }
  dispatch({
    type: 'API_PROCESSING_STATUS',
    payload: false
  }); // Clear API processing status
  return response;
};

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

// const generateNewConversationId = () => {
//     return crypto.randomUUID();
// };

const checkConversationIdChange = async (state, dispatch, externalApiResponse) => {
  let cid = state.currentConversationId;
  let apiResponse;
  // if (debug) {
  console_debug_log$2(">> checkConversationIdChange | cid: ".concat(cid, " | externalApiResponse:"), externalApiResponse);
  // }
  if (typeof externalApiResponse['cid'] !== 'undefined' && state.currentConversationId !== externalApiResponse['cid']) {
    cid = externalApiResponse['cid'];
    // dispatch({ type: 'SET_CONVERSATION_ID', payload: cid });
    //
    // Reload and refresh conversation list
    apiResponse = await fetchConversations(dispatch);
    if (!apiResponse.ok) {
      console.error("ERROR in checkConversationIdChange > fetchConversations");
      console.error(apiResponse.operationMessage);
      console.error(apiResponse.errorMessage);
    }
  }
  if (cid !== null) {
    apiResponse = await fetchOneConversation(cid, dispatch);
    if (!apiResponse.ok) {
      console.error("ERROR in checkConversationIdChange > fetchOneConversation");
      console.error(apiResponse);
      console.error(apiResponse.operationMessage);
      console.error(apiResponse.errorMessage);
    }
  }
  return cid;
};
const loadConversationList = async dispatch => {
  const response = ApiCall(dispatch, {
    operationName: "loadConversationList",
    operationDescription: "Conversation list",
    operationType: "getAll",
    endpointUrl: "ai_chatbot_conversations",
    query: {
      user_id: currentUser
    }
  });
  return response;
};
const fetchConversations = async dispatch => {
  const apiResponse = await loadConversationList(dispatch);
  if (apiResponse.ok) {
    dispatch({
      type: 'SET_CONVERSATIONS',
      payload: apiResponse.response
    });
  }
  return apiResponse;
};
const fetchOneConversation = async (conversationId, dispatch) => {
  const apiResponse = await loadConversation(conversationId, dispatch);
  if (apiResponse.ok) {
    const data = {
      conversationId: conversationId,
      messages: apiResponse.response.messages
    };
    dispatch({
      type: 'GET_MESSAGES',
      payload: data
    });
  }
  return apiResponse;
};

// DB: Conversations

// const saveConversation = async (conversationId, conversation, dispatch) => {
//     const conversationAddition = {user_id: currentUser}
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

const loadConversation = async (conversationId, dispatch) => {
  const response = ApiCall(dispatch, {
    operationName: "loadConversation (one)",
    operationDescription: "Conversation",
    operationType: "getOne",
    endpointUrl: "ai_chatbot_conversations",
    query: {
      user_id: currentUser,
      id: conversationId
    }
  });
  return response;
};
const deleteConversation = async (conversationId, dispatch) => {
  const response = ApiCall(dispatch, {
    operationName: "deleteConversation",
    operationDescription: "Conversation",
    operationType: "deleteRow",
    id: conversationId,
    endpointUrl: "ai_chatbot_conversations",
    query: {
      user_id: currentUser
    }
  });
  return response;
};

// BOT API management

const sendMessageToBot = async (messageText, state, dispatch) => {
  // Set the fetch() abort controller
  if (abortController) {
    abortController.abort(); // Abort previous request if it exists
  }
  abortController = new AbortController(); // Create a new controller for the new request
  const chatToSend = [
  // ...state.messages,
  {
    "role": "user",
    "content": messageText
  }];
  const response = ApiCall(dispatch, {
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
      signal: abortController.signal
    }
  });
  if (response.ok) {
    checkConversationIdChange(state, dispatch, response);
  }
  return response;
};
const handleCancelProcessing = dispatch => {
  if (abortController) abortController.abort(); // Abort the ongoing request
  dispatch({
    type: 'API_PROCESSING_STATUS',
    payload: false
  }); // Clear API processing status
};

fontawesome.library.add(fontawesomeFreeSolid.faArrowUp,
// Select file + Upload
fontawesomeFreeSolid.faTimes,
// Close
fontawesomeFreeSolid.faPaperclip // Added clip icon
);
const dbApiService$1 = gs__namespace.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER$1 = gs__namespace.dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log$1 = gs__namespace.loggingService.console_debug_log;
const formatCaughtError$2 = gs__namespace.errorAndReenter.formatCaughtError;
const toggleIdVisibility$2 = gs__namespace.ui.toggleIdVisibility;
const BUTTON_LISTING_CLASS$3 = gs__namespace.classNameConstants.BUTTON_LISTING_CLASS;
const useAxios = (process.env.REACT_APP_USE_AXIOS || "1") == "1";
function FileUploader(_ref) {
  let {
    id,
    setExternalInputMessage,
    handleUpdateSize,
    dispatch,
    state,
    question,
    fileTypeFilter
  } = _ref;
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [buttonToggle, setButtonToggle] = React.useState(false);
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      if (fileTypeFilter) {
        // "image/*"
        if (file.type.startsWith('image/')) {
          setSelectedFile(file);
        } else {
          alert('Please selecct a valid image file.');
        }
      } else {
        setSelectedFile(file);
      }
    }
  };
  const sendFile = async (url, formData, authHeader, queryParams) => {
    const headers = Object.assign({
      'Access-Control-Allow-Origin': '*'
    }, authHeader);
    try {
      const response = await axios.post(url, formData, {
        headers: headers,
        params: queryParams
      });
      dispatchWaitAnimation(false, dispatch);
      checkConversationIdChange(state, dispatch, response.data).then(() => {
        // Current conversation updated sucssesfuly
      }, error => {
        error = formatCaughtError$2(error);
        setChatbotErrorMsg(error.message, dispatch);
      });
      setSelectedFile(null);
      setButtonToggle(false);
    } catch (errorRaw) {
      console.error(errorRaw);
      // Hide WaitAnimation after the error
      const error = errorRaw.message + (typeof errorRaw.response !== 'undefined' ? ": " + errorRaw.response.data : '');
      console.error('Error uploading the file:', error);
      setChatbotErrorMsg(error, dispatch);
      dispatchWaitAnimation(false, dispatch);
    }
  };
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      const fileSize = (selectedFile.size / (1024 * 1024)).toFixed(2); // Mb
      formData.append('file', selectedFile, selectedFile.name);
      const options = {
        raw_body: true,
        headers: MULTIPART_FORM_DATA_HEADER$1
      };
      const query = {
        "cid": state.currentConversationId,
        question: question,
        // image_extension: fileExtension,
        file_name: selectedFile.name
      };
      addMessageToConversation(question, "user", dispatch);
      addMessageToConversation('```File Attachment: "' + selectedFile.name + '" (' + fileSize + ' Mb)```', "attachment", dispatch);
      // Empty external input message
      setExternalInputMessage("");
      // Update the size of the input text area if the handleUpdateSize function is provided.
      if (handleUpdateSize) {
        handleUpdateSize();
      }
      // Show WaitAnimation while fetching data
      dispatchWaitAnimation(true, dispatch);
      {
        console_debug_log$1("FileUploader | selectedFile:", selectedFile);
      }
      if (useAxios) {
        const authHeader = gs__namespace.authHeader.authHeader();
        const endpointUrl = "".concat(process.env.REACT_APP_API_URL, "/", "ai/image_to_text");
        await sendFile(endpointUrl, formData, authHeader, query);
      } else {
        const db = new dbApiService$1({
          url: "ai/image_to_text"
        });
        db.getAll(query, formData, 'POST', options).then(data => {
          {
            console_debug_log$1("FileUploader | handleUpload | data:", data);
          }
          dispatchWaitAnimation(false, dispatch);
          {
            console_debug_log$1("FileUploader is calling checkConversationIdChange(\"".concat(data, "\")"));
          }
          // addMessageToConversation(data.response, "assistant", dispatch);
          checkConversationIdChange(state, dispatch, data).then(() => {
            // Current conversation updated sucssesfuly
          }, error => {
            error = formatCaughtError$2(error);
            {
              console_debug_log$1("FileUploader | checkConversationIdChange | ERROR:", error);
            }
            setChatbotErrorMsg(error.message, dispatch);
          });
          setSelectedFile(null);
          setButtonToggle(false);
        }, errorRaw => {
          // Hide WaitAnimation after the error
          const error = formatCaughtError$2(errorRaw);
          {
            console_debug_log$1(">>--> FileUploader | handleUpload | errorRaw:", errorRaw);
          }
          dispatchWaitAnimation(false, dispatch);
          console.error('Error uploading the file:', error);
          // setExternalErrorMsg(error.message);
          setChatbotErrorMsg(error.message, dispatch);
          {
            console_debug_log$1("FileUploader | after setExternalErrorMsg...");
          }
        });
      }
    } else {
      alert('Please select a file to upload.');
    }
  };
  React.useEffect(() => {
    const extControlsToShowHide = ['user_input_submit', 'voiceMessageRecorder', 'cameraComponent'];
    toggleIdVisibility$2(buttonToggle ? "off" : "on", extControlsToShowHide);
  }, [buttonToggle]);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "file-uploader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setButtonToggle(buttonToggle ? false : true),
    className: "".concat(BUTTON_LISTING_CLASS$3, " mr-2"),
    title: buttonToggle ? 'Close' : 'Select File'
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: buttonToggle ? 'times' : 'paperclip',
    size: "lg"
  })), buttonToggle && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: fileTypeFilter ? fileTypeFilter : "*",
    onChange: handleFileChange,
    className: "p-0 m-0"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleUpload,
    className: "".concat(BUTTON_LISTING_CLASS$3),
    title: "Submit"
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "arrow-up",
    size: "lg"
  })))));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".video-container {\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n}\n\n.video-container video {\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: rgba(0, 0, 0, 0.5); /* Adjust the background color and opacity as needed */\n}\n\n.overlay button {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #007bff; /* Button background color */\n  color: #fff; /* Button text color */\n  border: none;\n  cursor: pointer;\n}\n\n.overlay button:hover {\n  background-color: #0056b3; /* Button background color on hover */\n}\n";
styleInject(css_248z$3);

fontawesome.library.add(fontawesomeFreeSolid.faArrowUp,
// Arrow-up: to select file + perform the upload
fontawesomeFreeSolid.faTimes,
// X: to close the component controls
fontawesomeFreeSolid.faCamera,
// Camera
fontawesomeFreeSolid.faCameraRetro,
// Icon for taking the photo
fontawesomeFreeSolid.faExchangeAlt // Icon for interchange
);
const dbApiService = gs__namespace.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER = gs__namespace.dbService.MULTIPART_FORM_DATA_HEADER;
gs__namespace.loggingService.console_debug_log;
const formatCaughtError$1 = gs__namespace.errorAndReenter.formatCaughtError;
const BUTTON_LISTING_CLASS$2 = gs__namespace.classNameConstants.BUTTON_LISTING_CLASS;
const toggleIdVisibility$1 = gs__namespace.ui.toggleIdVisibility;
const ModalPopUp = gs__namespace.ModalPopUp.ModalPopUp;
const extControlsToShowHide = ['user_input_submit', 'voiceMessageRecorder', 'fileUploader'];
const VIDEO_OFF = {
  display: 'none'
};
const VIDEO_ON = {
  display: ''
};
const CameraComponent = _ref => {
  let {
    id,
    setExternalInputMessage,
    handleUpdateSize,
    dispatch,
    state,
    question
  } = _ref;
  const [facingMode, setFacingMode] = React.useState('environment');
  const [buttonToggle, setButtonToggle] = React.useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [cameraOn, setCameraOn] = React.useState(true);
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const stream = React.useRef(null);
  const startCamera = async () => {
    try {
      stream.current = await navigator.mediaDevices.getUserMedia({
        video: true
      });
      videoRef.current.srcObject = stream.current;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };
  const toggleCamera = async () => {
    setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
    let constraints = {
      video: {
        facingMode: {
          exact: facingMode
        }
      }
    };
    stream.current = await navigator.mediaDevices.getUserMedia(constraints);
    videoRef.current.srcObject = stream.current;
  };
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setPhoto(dataUrl);
  };
  const cameraOnOff = newState => {
    if (!newState) {
      stopCamera();
    } else {
      startCamera();
    }
    setCameraOn(newState);
  };
  const sendPhoto = async () => {
    if (!question) {
      alert('Please enter a question before upload the photo.');
      return;
    }
    if (!photo) {
      alert('Please click on the "Open Camera" icon and take a photo.');
      return;
    }
    const formData = new FormData();
    // Convert base64 to Blob before appending to formData
    const base64Response = await fetch(photo);
    const blob = await base64Response.blob();
    const fileExtension = 'jpg';
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '_').slice(0, -5);
    const fileName = "image_capture_".concat(timestamp, ".").concat(fileExtension);
    const fileSize = blob.size / (1024 * 1024).toFixed(2); // Size in Mb
    formData.append('file', blob, fileName);
    const options = {
      raw_body: true,
      headers: MULTIPART_FORM_DATA_HEADER
    };
    const db = new dbApiService({
      url: "ai/image_to_text"
    });
    const query = {
      "cid": state.currentConversationId,
      question: question,
      file_name: fileName
    };
    addMessageToConversation(question, "user", dispatch);
    addMessageToConversation('```File Attachment: "' + fileName + '" (' + fileSize + ' Mb)```', "attachment", dispatch);
    // Empty external input message
    setExternalInputMessage("");
    // Update the size of the input text area if the handleUpdateSize function is provided.
    if (handleUpdateSize) {
      handleUpdateSize();
    }
    // Show WaitAnimation while fetching data
    dispatchWaitAnimation(true, dispatch);
    db.getAll(query, formData, 'POST', options).then(data => {
      dispatchWaitAnimation(false, dispatch);
      // addMessageToConversation(data.response, "assistant", dispatch);
      checkConversationIdChange(state, dispatch, data).then(() => {
        // Current conversation updated sucssesfuly
      }, error => {
        error = formatCaughtError$1(error);
        setChatbotErrorMsg(error.message, dispatch);
      });
      setButtonToggle(false);
    }, error => {
      // Hide WaitAnimation after the error
      error = formatCaughtError$1(error);
      dispatchWaitAnimation(false, dispatch);
      console.error('Error upploading the file:', error);
      // setExternalErrorMsg(error.message);
      setChatbotErrorMsg(error.message, dispatch);
    });
    stopCamera();
    setPhoto(null);
    setButtonToggle(false);
    toggleIdVisibility$1("on", extControlsToShowHide);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "camera-capture"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-full w-full flex items-center mr-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (buttonToggle) {
        stopCamera();
        setPhoto(null);
      } else {
        startCamera();
      }
      setButtonToggle(buttonToggle ? false : true);
      toggleIdVisibility$1(buttonToggle ? "on" : "off", extControlsToShowHide);
    },
    className: "".concat(BUTTON_LISTING_CLASS$2, " mr-2"),
    title: buttonToggle ? 'Close' : 'Start Camera'
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: buttonToggle ? 'times' : 'camera',
    size: "lg"
  })), buttonToggle && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => cameraOnOff(!cameraOn),
    className: "".concat(BUTTON_LISTING_CLASS$2, " mr-2"),
    title: "Start Camera"
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "camera-retro",
    size: "lg"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: sendPhoto,
    className: "".concat(BUTTON_LISTING_CLASS$2, " mr-2"),
    title: "Send Photo"
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "arrow-up",
    size: "lg"
  })), photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "Captured",
    className: "mr-2",
    style: {
      width: '30px',
      height: '30px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-container"
  }, cameraOn && /*#__PURE__*/React.createElement(ModalPopUp, {
    closeButtonAction: () => cameraOnOff(!cameraOn),
    secondButtonMessage: "Change Front/Back",
    secondButtonAction: toggleCamera,
    primaryButtonMessage: "Take Photo",
    primaryButtonAction: takePhoto,
    allowOnHide: false
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    autoPlay: true,
    playsInline: true
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "mt-2 w-full",
    style: photo ? VIDEO_ON : VIDEO_OFF
  }))))));
};

fontawesome.library.add(fontawesomeFreeSolid.faGreaterThan, fontawesomeFreeSolid.faStop);
gs__namespace.loggingService.console_debug_log;
const usePlainFetch$1 = gs__namespace.responseHandlersService.usePlainFetch;
const growUpTextArea = gs__namespace.ui.growUpTextArea;
const resetTextArea = gs__namespace.ui.resetTextArea;
const toggleIdVisibility = gs__namespace.ui.toggleIdVisibility;
const formatCaughtError = gs__namespace.errorAndReenter.formatCaughtError;
const WaitAnimation = gs__namespace.waitAnimationUtility.WaitAnimation;
const getFilenameFromContentDisposition = gs__namespace.blobFilesUtilities.getFilenameFromContentDisposition;
const responseHasFile = gs__namespace.blobFilesUtilities.responseHasFile;
const BUTTON_LISTING_CLASS$1 = gs__namespace.classNameConstants.BUTTON_LISTING_CLASS;
const userInputViewportHeight = 80;
/* <UserInput>.userInputViewportHeight must be the same as ".conversation-block.height" in ChatBot.css */
/* 81 for 81vh, 78 for 78vh, an so on */
const userInputMaxOffsetHeight = 200;
const UserInput = _ref => {
  let {
    dispatch,
    state,
    userQuestion // state.inputMessage
  } = _ref;
  const [inputMessage, setInputMessage] = React.useState(userQuestion);
  const [updateSize, setUpdateSize] = React.useState(false);
  React.useEffect(() => {
    setInputMessage(state.inputMessage);
  }, [state.inputMessage]);
  React.useEffect(() => {
    // Adjust text area size
    resetTextArea("user_input", "conversation-block", userInputViewportHeight, userInputMaxOffsetHeight);
  }, [updateSize]);

  // Function to handle adjust text area size on input change from external component
  const handleUpdateSize = () => {
    setUpdateSize(!updateSize);
  };

  // Function to handle input change
  const handleInputChange = e => {
    /* IMPORTANT:
       ONLY one call to a useState() is allowed when external component
       calls a internal function or useState.
       THE SOLUTION IS: pass the various function or useState to the external component
       and call them one after another from it.
    */
    if (typeof e === "string") {
      setInputMessage(e);
      // setExternalInputMessage(e); // Update the external input message
    } else {
      setInputMessage(e.target.value);
      // setExternalInputMessage(e.target.value); // Update the external input message
    }
    // setUpdateSize(!updateSize);
  };

  // Function to handle sending a message
  const sendMessage = async function () {
    let newInputMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    const extControlsToShowHide = ['fileUploader', 'voiceMessageRecorder', 'cameraComponent'];
    if (newInputMessage === null) {
      newInputMessage = inputMessage;
    }
    if (typeof newInputMessage !== "undefined" && newInputMessage !== null && newInputMessage.trim() !== "") {
      // Dispatch the message to the chat
      const userMessage = {
        content: newInputMessage,
        role: 'user'
      }; // Adjust structure as needed
      dispatch({
        type: 'ADD_MESSAGE',
        payload: userMessage
      });
      // // Set external (global) input message [Deprecated]
      // setChatbotInputMessage(newInputMessage, dispatch);
      // Clear the user input
      setInputMessage('');
      // Adjust text area size
      handleUpdateSize();
      // Hide buttons other than the stop
      toggleIdVisibility("off", extControlsToShowHide);
      // Send the message to the bot and get the response
      const botReply = await sendMessageToBot(newInputMessage, state, dispatch);
      if (botReply.ok) {
        let continueProcessing = true;
        if (!usePlainFetch$1) {
          const headers = botReply.response.headers;
          if (responseHasFile(headers)) {
            const fileUrl = botReply.response.file;
            const filename = getFilenameFromContentDisposition(headers);
            const botMessage = {
              content: botReply.response.response,
              role: 'assistant',
              attachment_url: fileUrl,
              filename: filename
            };
            dispatch({
              type: 'ADD_MESSAGE',
              payload: botMessage
            });
            continueProcessing = false;
          }
        }
        if (continueProcessing) {
          // Add the response to the conversation...
          if (botReply.response.response) {
            const botMessage = {
              content: botReply.response.response,
              role: 'assistant'
            };
            dispatch({
              type: 'ADD_MESSAGE',
              payload: botMessage
            });
          }
          // Read current conversation from the database to refresh the chat space
          checkConversationIdChange(state, dispatch, botReply.response).then(() => {
            // Current conversation updated sucssesfuly
          }, error => {
            error = formatCaughtError(error);
            console.error('>> Error updating current conversation:', botReply.errorMessage);
            setChatbotErrorMsg(error.message, dispatch);
          });
        }
      } else {
        console.error('>> Error communicating with the bot:', botReply.errorMessage);
        setChatbotErrorMsg(botReply.errorMessage, dispatch);
      }
      toggleIdVisibility("on", extControlsToShowHide);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "input-area"
  }, /*#__PURE__*/React.createElement("textarea", {
    name: "user_input",
    id: "user_input",
    value: inputMessage
    // TODO: remove INPUT_FLEXIBLE_CLASS and put the css in ChatBot.css
    // className={`${INPUT_FLEXIBLE_CLASS} mr-2`}
    ,
    className: "p-2",
    "aria-label": "Message AI Assistant...",
    rows: "1",
    onChange: handleInputChange,
    onKeyDown: event => {
      if (event.key === 'Enter') {
        // setInputMessage(event.target.value);
        sendMessage();
      }
    },
    disabled: state && state.isApiProcessing
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    name: "user_input_submit",
    id: "user_input_submit",
    onClick: () => state && state.isApiProcessing ? handleCancelProcessing(dispatch) : sendMessage(),
    className: "".concat(BUTTON_LISTING_CLASS$1, " mr-2"),
    title: state && state.isApiProcessing ? 'Stop Processing' : 'Chat with AI Assistant'
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: state && state.isApiProcessing ? 'stop' : 'greater-than',
    size: "lg"
  }))), /*#__PURE__*/React.createElement(VoiceMessageRecorder, {
    id: "voiceMessageRecorder",
    dispatch: dispatch
    // sendMessage={sendMessage}
    ,
    setExternalInputMessage: handleInputChange,
    handleUpdateSize: handleUpdateSize
  }), /*#__PURE__*/React.createElement(FileUploader, {
    id: "fileUploader",
    question: inputMessage,
    setExternalInputMessage: handleInputChange,
    handleUpdateSize: handleUpdateSize,
    dispatch: dispatch,
    state: state
    // fileTypeFilter="image/*"
  }), /*#__PURE__*/React.createElement(CameraComponent, {
    id: "cameraComponent",
    question: inputMessage,
    setExternalInputMessage: handleInputChange,
    handleUpdateSize: handleUpdateSize,
    dispatch: dispatch,
    state: state
  }), state && state.isApiProcessing && /*#__PURE__*/React.createElement("div", {
    className: "ml-2 flex items-center"
  }, /*#__PURE__*/React.createElement(WaitAnimation, null)), growUpTextArea("user_input", "conversation-block", userInputViewportHeight, userInputMaxOffsetHeight));
};

var css_248z$2 = "/* ChatBot styling */\n\n.chatbot-container {\n    width: 100%;\n    /* max-width: 600px; */\n    margin: auto;\n    border: 1px solid #ddd;\n    /* border-radius: 4px; */\n    display: flex;\n}\n\n/* Conversations Block styling */\n\n.message-area {\n    width: 70%;\n    height: 87vh;\n    /* .message-area.height must be the same as .conversations-list.height */\n    overflow-y: auto;\n    background-color: white;\n    border-radius: 0.3rem;\n}\n\n.conversation-block {\n    height: 80vh;\n    /* .conversation-block.height: 78vh -> .message-area.height: 87vh */\n    /* <UserInput>.userInputViewportHeight must be the same as .conversation-block.height */\n    overflow-y: auto;\n    background-color: #fff;\n}\n\n/* Input styling */\n\n/*\n.input-area textarea {\n    flex: 1;\n    width: 100%;\n    margin-right: 8px;\n    background-color: #eee;\n    color: #000;\n    max-height: 200px;\n    overflow-y: hidden;\n}    \n\n.input-area input {\n    flex: 1;\n    padding: 10px;\n    margin-right: 10px;\n}\n*/\n\n.input-area {\n    display: flex;\n    padding: 10px;\n    vertical-align: middle;\n}\n\n.input-area button {\n    padding: 10px;\n}\n\n.input-area textarea {\n    width: 100%;\n    background-color: #eee;\n    color: #000;\n    /* let the input type text to grow vertically according to the test size */\n    max-height: 200px;\n    overflow-y: hidden;\n    margin-right: 10px;\n}\n\n/* Conversations List styling */\n\n.conversations-list {\n    width: 30%;\n    height: 87vh;\n    /* .message-area.height must be the same as .conversations-list.height */\n    border: 1px solid #ddd;\n    border-radius: 0.3rem;\n    padding: 10px;\n    background-color: #282626;\n    overflow-y: auto;\n}\n\n.conversations-list h2 {\n    color: grey;\n    font-size: small;\n}\n\n.conversation-item {\n    margin-bottom: 10px;\n    /* padding: 5px; */\n    /* border-bottom: 1px solid #eee; */\n    color: #fff;\n}\n\n/* Message styling */\n\n.message {\n    padding: 10px;\n    /* margin-bottom: 2px; */\n}\n\n.user-message {\n    /* text-align: right; */\n    text-align: left;\n    background-color: #daf1da;\n}\n\n.bot-message {\n    text-align: left;\n    background-color: #f1f1f1;\n}\n\n";
styleInject(css_248z$2);

const BUTTON_LISTING_CLASS = gs__namespace.classNameConstants.BUTTON_LISTING_CLASS;
// const INPUT_FLEXIBLE_CLASS = gs.classNameConstants.INPUT_FLEXIBLE_CLASS;

// const debug = false;

const NewConversationButton = _ref => {
  let {
    dispatch
    // startNewConversation,
  } = _ref;
  // Call this when you want to start a new conversation
  const startNewConversation = () => {
    // Generate a new conversation ID using UUID for enhanced security
    // const newConversationId = generateNewConversationId();
    dispatch({
      type: 'START_NEW_CONVERSATION',
      payload: {
        conversationId: null
      }
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    key: "new-conversation-button",
    onClick: () => startNewConversation(),
    className: "".concat(BUTTON_LISTING_CLASS, " text-xs mb-2")
  }, "New Conversation"));
};

fontawesome.library.add(fontawesomeFreeSolid.faTrash);
const convertId$1 = gs__namespace.dbService.convertId;
gs__namespace.loggingService.console_debug_log;
const timestampToDate = gs__namespace.dateTimestamp.timestampToDate;

// const dateColumn = "creation_date";
const dateColumn = "update_date";
const ConversationList = _ref => {
  let {
    state,
    dispatch,
    showSideBar
  } = _ref;
  const setErrorMsg = errorMsg => {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: errorMsg
    });
  };

  // Handle load conversation
  const handleLoadConversation = async (conversationId, dispatch) => {
    if (!showSideBar) {
      return;
    }
    const apiResponse = await loadConversation(conversationId, dispatch);
    if (apiResponse.ok) {
      const data = {
        conversationId: conversationId,
        messages: apiResponse.response.messages
      };
      dispatch({
        type: 'GET_MESSAGES',
        payload: data
      });
    } else {
      setErrorMsg(apiResponse.errorMessage);
    }
  };
  const confirmDeleteConversation = async (conversationId, dispatch, title) => {
    if (window.confirm("'Are you sure you want to delete this conversation?\n\n".concat(title))) {
      handleDeleteConversation(conversationId, dispatch);
    }
  };

  // Handle delete conversation
  const handleDeleteConversation = async (conversationId, dispatch) => {
    const startNew = conversationId === state.currentConversationId;
    const apiResponse = await deleteConversation(conversationId, dispatch);
    if (apiResponse.ok) {
      dispatch({
        type: 'DELETE_CONVERSATION',
        payload: conversationId
      });
      if (startNew) {
        dispatch({
          type: 'START_NEW_CONVERSATION',
          payload: {
            conversationId: null
          }
        });
      }
    } else {
      setErrorMsg(apiResponse.errorMessage);
    }
  };
  const fixTitle = title => title.length === 0 ? "Empty" : title;
  const groupConversationsByDate = conversations => {
    const groups = {
      today: [],
      yesterday: [],
      lastSevenDays: [],
      lastMonth: [],
      older: {}
    };
    const now = new Date();
    const today = now.setHours(0, 0, 0, 0);
    const yesterday = new Date(today).setDate(now.getDate() - 1);
    const sevenDaysAgo = new Date(today).setDate(now.getDate() - 7);
    const oneMonthAgo = new Date(today).setMonth(now.getMonth() - 1);
    conversations.forEach(conversation => {
      const timestampUnixEpoch = conversation[dateColumn] * 1000;
      const conversationDate = new Date(timestampUnixEpoch);
      const conversationTime = conversationDate.setHours(0, 0, 0, 0);
      if (conversationTime === today) {
        groups.today.push(conversation);
      } else if (conversationTime === yesterday) {
        groups.yesterday.push(conversation);
      } else if (conversationTime > sevenDaysAgo) {
        groups.lastSevenDays.push(conversation);
      } else if (conversationTime > oneMonthAgo) {
        groups.lastMonth.push(conversation);
      } else {
        const monthYear = conversationDate.toLocaleString('default', {
          month: 'long',
          year: 'numeric'
        });
        if (!groups.older[monthYear]) {
          groups.older[monthYear] = [];
        }
        groups.older[monthYear].push(conversation);
      }
    });
    return groups;
  };
  const renderConversations = conversations => {
    return conversations.map(conversation => {
      const convId = convertId$1(conversation._id);
      // console.log('renderConversations | convId: ' + `${convId}_div...`);
      // console.log('renderConversations | conversation:', conversation);
      return /*#__PURE__*/React.createElement("div", {
        key: "".concat(convId, "_main_div"),
        className: "conversation-item align-middle flex"
      }, /*#__PURE__*/React.createElement("div", {
        key: "".concat(convId, "_inner_div"),
        style: {
          width: '95%'
        }
      }, /*#__PURE__*/React.createElement("div", {
        key: "".concat(convId, "_desc_outter_div"),
        style: {
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, /*#__PURE__*/React.createElement("button", {
        key: "".concat(convId, "_desc_button"),
        onClick: () => handleLoadConversation(convId, dispatch),
        title: timestampToDate(conversation[dateColumn], true, " ", false)
      }, /*#__PURE__*/React.createElement("div", {
        key: "".concat(convId, "_desc_inner_div"),
        style: {
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, fixTitle(conversation.title))))), /*#__PURE__*/React.createElement("div", {
        key: "".concat(convId, "_delete_div"),
        style: {
          width: '5%'
        }
      }, /*#__PURE__*/React.createElement("button", {
        key: "".concat(convId, "_delete_button"),
        type: "button",
        onClick: () => confirmDeleteConversation(convId, dispatch, conversation.title),
        className: "ml-2 mb-1 bg-blue-500 text-white p-0 rounded close"
      }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: "trash",
        size: "xs"
      }))));
    });
  };
  if (!(state && state.conversations)) {
    return null;
  }
  const groupedConversations = groupConversationsByDate(state.conversations);
  return /*#__PURE__*/React.createElement("div", {
    key: "conversation_list_main_div",
    style: {
      display: state.conversationListToggle ? '' : 'none'
    }
  }, groupedConversations.today.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "today"
  }, /*#__PURE__*/React.createElement("h2", null, "Today"), renderConversations(groupedConversations.today)), groupedConversations.yesterday.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "yesterday"
  }, /*#__PURE__*/React.createElement("h2", null, "Yesterday"), renderConversations(groupedConversations.yesterday)), groupedConversations.lastSevenDays.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "lastSevenDays"
  }, /*#__PURE__*/React.createElement("h2", null, "Last 7 Days"), renderConversations(groupedConversations.lastSevenDays)), groupedConversations.lastMonth.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "lastMonth"
  }, /*#__PURE__*/React.createElement("h2", null, "Last Month"), renderConversations(groupedConversations.lastMonth)), Object.keys(groupedConversations.older).map(monthYear => /*#__PURE__*/React.createElement("div", {
    key: "month_year_" + monthYear
  }, /*#__PURE__*/React.createElement("h2", null, monthYear), renderConversations(groupedConversations.older[monthYear]))));
};

fontawesome.library.add(fontawesomeFreeSolid.faGreaterThan, fontawesomeFreeSolid.faLessThan);
gs__namespace.loggingService.console_debug_log;
const ConversationsToggleButton = _ref => {
  let {
    state,
    dispatch
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    key: "conversation-list-toggle-button",
    type: "button",
    className: "bg-white border-none focus:outline-none",
    onClick: () => setConversationListToggle(!state.conversationListToggle, dispatch)
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: state.conversationListToggle ? 'less-than' : 'greater-than',
    size: "xl",
    style: {
      color: 'lightgray'
    }
  })));
};

var css_248z$1 = ".audio-player {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  background-color: rgb(40, 121, 145);\n  border-radius: 15px;\n  padding: 13px;\n  width: max-content;\n  color: #ffffff;\n}\n\n.menu-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  padding: 12px 16px;\n  z-index: 1;\n}\n\n.menu:hover .menu-content {\n  display:inline;\n  position: relative;\n  top: 2px;\n  right: -10px;\n  padding: 3px;\n  border-radius: 5px;\n  border: none;\n  background: grey;\n  color: white;\n  cursor: pointer;\n  font-size: 12px;\n  z-index: 2;\n}\n\n.play-button {\n    border: none;\n}\n\n.play-button:focus {\n  outline: none;\n}\n\n";
styleInject(css_248z$1);

fontawesome.library.add(fontawesomeFreeSolid.faPlay, fontawesomeFreeSolid.faStop);
const WARNING_MSG_CLASS$1 = gs__namespace.classNameConstants.WARNING_MSG_CLASS;
gs__namespace.blobFilesUtilities.defaultFilenametoDownload;
const decodeBlob = gs__namespace.blobFilesUtilities.decodeBlob;
gs__namespace.loggingService.console_debug_log;
const AudioPlayer = _ref => {
  let {
    blobUrl,
    filename,
    expired,
    errorMsgSuffix
  } = _ref;
  const [isPlaying, setIsPlaying] = React.useState(false);
  React.useState(0);
  React.useState(0);
  const audioPlayer = React.useRef(); // reference to the audio component

  const fixBlob = () => {
    if (!blobUrl) {
      return;
    }
    fetch(blobUrl).then(r => {
      r.blob().then(blob => {
        const reader = new FileReader();
        // reader.readAsDataURL(blob);  // Convert to data:audio/mpeg;base64,Ly9Qa3h...
        reader.readAsText(blob); // No convertion at all... just get what it receives...
        reader.onloadend = function () {
          const newBlobUrl = decodeBlob(reader.result, filename);
          audioPlayer.current.src = newBlobUrl;
          audioPlayer.current.play();
        };
      });
    });
  };

  // Play & Pause toggle function
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play().catch(error => {
        const errorMsgs = ["Failed to load because no supported source was found.", "The element has no supported sources."];
        if (Object.values(errorMsgs).some(msg => error.message.includes(msg))) {
          // Probably the data comes from AWS API Gateway in Base64 format
          // Try to convert Base64 to Binary
          fixBlob();
        } else {
          console.error(error);
        }
      });
    } else {
      audioPlayer.current.pause();
    }
  };
  if (expired) {
    return /*#__PURE__*/React.createElement("div", {
      className: WARNING_MSG_CLASS$1
    }, "Audio file expired".concat(errorMsgSuffix));
  }
  {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("audio", {
      ref: audioPlayer,
      src: blobUrl,
      controls: true,
      onBeforeInput: togglePlayPause
    }));
  }
};

gs__namespace.loggingService.console_debug_log;
const GoToTheBottom = _ref => {
  let {
    elementId,
    elementsToRender
  } = _ref;
  const objDiv = document.getElementById(elementId);
  React.useEffect(() => {
    if (objDiv && elementsToRender !== '') {
      // objDiv.scrollIntoView(false);
      objDiv.scrollTop = objDiv.scrollHeight;
      // Sometimes it needs a second change, specially when the object is being populated
      // objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, [objDiv, elementsToRender, elementId]);
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};

var css_248z = ".float{\n\tposition:fixed;\n\twidth:40px;\n\theight:40px;\n\tbottom:90px;\n\tright:500px;\n\t/* background-color:#0C9; */\n\tbackground-color: lightgray;\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 2px 2px 3px #999;\n    /* visibility: hidden; */\n}\n\n.my-float{\n\t/* margin-top:22px; */\n    margin-top:12px;\n}\n";
styleInject(css_248z);

fontawesome.library.add(fontawesomeFreeSolid.faArrowDown);
gs__namespace.loggingService.console_debug_log;
const ScrollToBottomButton = _ref => {
  let {
    elementId,
    elementsToRender
  } = _ref;
  const element = document.getElementById(elementId);
  const scrollToBottom = () => {
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  };
  React.useEffect(() => {
    if (element && elementsToRender !== '') {
      // let lastScrollTop =
      //     element.scrollY || element.scrollTop;
      element.addEventListener('scroll', function handleScroll() {
        const buttonElement = document.getElementById('scroll-overfolw-button');
        buttonElement.style.visibility = showButton(element);
      }, false);
    }
  }, [element, elementsToRender, elementId]);
  return /*#__PURE__*/React.createElement("div", {
    id: "scroll-overfolw-button",
    style: {
      visibility: showButton(element)
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: scrollToBottom,
    className: "float"
  }, /*#__PURE__*/React.createElement("i", {
    className: "a fa-plus my-float"
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "arrow-down",
    size: "lg"
  }))));
};
const showButton = element => element && element.scrollHeight > element.scrollTop + element.clientHeight ? 'visible' : 'hidden';

const LinkifyText = gs__namespace.ui.LinkifyText;
const CopyButton = gs__namespace.ui.CopyButton;
const ChatCodeBlock = _ref => {
  let {
    children,
    shType = "prism"
  } = _ref;
  // Regular expression to match code blocks enclosed in ```
  const codeRegex = /```([\s\S]*?)```/g;

  // Split content into parts with and without code blocks
  const parts = children.split(codeRegex);
  return /*#__PURE__*/React.createElement("div", null, parts.map((part, index) => {
    if (index % 2 === 0) {
      // Render non-code parts as regular text
      // return <span key={index}>{part}</span>;
      return /*#__PURE__*/React.createElement(LinkifyText, {
        key: "".concat(index, "-other")
      }, part);
    } else {
      // Render code blocks with specified styles
      let content = part.trim();
      const language = content.split('\n')[0];
      content = content.substring(language.length + 1).trim();
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("div", {
        key: "".concat(index, "-language"),
        style: {
          backgroundColor: 'rgb(30, 30, 30)',
          color: 'wheat',
          marginTop: '10px',
          padding: '10px',
          // borderRadius: '5px',
          overflowX: 'auto'
        }
      }, language), /*#__PURE__*/React.createElement("div", {
        key: "".concat(index, "-content")
      }, shType === "prism" && /*#__PURE__*/React.createElement(reactSyntaxHighlighter.Prism, {
        language: language,
        style: index_js.vscDarkPlus,
        wrapLongLines: true
      }, content), shType !== "prism" && /*#__PURE__*/React.createElement(reactSyntaxHighlighter.Light, {
        language: language,
        style: index_js$1.grayscale,
        wrapLongLines: true
      }, content), /*#__PURE__*/React.createElement(CopyButton, {
        text: content
      }))));
    }
  }));
};

gs__namespace.loggingService.console_debug_log;
const usePlainFetch = gs__namespace.responseHandlersService.usePlainFetch;
const getFileExtension = gs__namespace.blobFilesUtilities.getFileExtension;
const performDownload = gs__namespace.blobFilesUtilities.performDownload;
const INFO_MSG_CLASS = gs__namespace.classNameConstants.INFO_MSG_CLASS;
const WARNING_MSG_CLASS = gs__namespace.classNameConstants.WARNING_MSG_CLASS;
const defaultDownloadFilename = 'file_with_no_name.mp3';
const ConversationBlock = _ref => {
  let {
    id,
    state,
    dispatch,
    handleRetry
    // errorMsg,
  } = _ref;
  const [elementsToRender, setElementsToRender] = React.useState('');
  const formatMessage = messageObject => {
    let message = messageObject.content;
    const hasDownloadFileToken = message && message.includes("[SEND_FILE_BACK]");
    const downloadedFilename = hasDownloadFileToken ? message.replace("[SEND_FILE_BACK]=", "").split('/').pop() : null;
    const url = typeof messageObject.attachment_url !== "undefined" ? messageObject.attachment_url : null;
    const hasAttachment = url !== null || hasDownloadFileToken;
    let filename = typeof messageObject.filename !== "undefined" ? messageObject.filename : downloadedFilename;
    const extension = filename ? getFileExtension(filename) : null;
    let errorMsgSuffix = usePlainFetch ? " (No headers allowed)" : "";
    if (!filename) {
      filename = defaultDownloadFilename;
      errorMsgSuffix += (errorMsgSuffix === '' ? '' : '. ') + 'WARNING: no file name received. Fix the Backend API to send headers.';
    }
    if (hasAttachment && extension) {
      if (['wav', 'mp3'].includes(extension.toLowerCase())) {
        return /*#__PURE__*/React.createElement(AudioPlayer, {
          blobUrl: url,
          filename: filename,
          expired: hasDownloadFileToken,
          errorMsgSuffix: errorMsgSuffix
        });
      } else {
        if (hasDownloadFileToken) {
          return /*#__PURE__*/React.createElement("p", {
            className: WARNING_MSG_CLASS,
            title: filename
          }, (['wav', 'mp3'].includes(extension.toLowerCase()) ? "Audio file link" : "Link") + " expired...".concat(errorMsgSuffix));
        }
        // Link to download the file calling the performDownload function   
        return /*#__PURE__*/React.createElement("button", {
          className: INFO_MSG_CLASS,
          onClick: e => {
            e.preventDefault();
            performDownload(url, filename);
          }
        }, message ? message : "Click here to download the \"".concat(filename, "\" file"));
      }
    }
    if (hasAttachment || message && message.startsWith('```File')) {
      if (message && message.startsWith('```')) {
        message = message.substring(3, message.length - 3);
        const firstWord = message.split(' ')[0];
        message = message.substring(firstWord.length + 1).trim();
      }
      if (hasAttachment && !message) {
        message = filename;
      }
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: 'white'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 'fit-content',
          border: '1px solid black',
          borderRadius: '5px',
          backgroundColor: '#f2f2f2',
          padding: '10px'
        }
      }, hasAttachment && /*#__PURE__*/React.createElement("a", {
        href: messageObject.attachment_url,
        target: "_blank",
        rel: "noreferrer",
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      }, message), !hasAttachment && /*#__PURE__*/React.createElement(React.Fragment, null, message)), hasAttachment && /*#__PURE__*/React.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/React.createElement("img", {
        className: "rounded-md",
        src: messageObject.attachment_url,
        alt: "Attachment: ".concat(message),
        style: {
          maxHeight: 'auto',
          width: 'fit-content',
          maxWidth: '100%'
        }
      })));
    }
    let shType = "prism";
    // if (message.includes('\n')) {
    //     // https://www.markdownguide.org/basic-syntax/
    //     // message.replace(/\n/g, '<BR/>');
    //     message = '```markdown```' + message;
    //     shType = "hljs";
    // }
    if (message.includes('```plaintext```')) {
      shType = "hljs";
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ChatCodeBlock, {
      shType: shType
    }, message));
  };
  React.useEffect(() => {
    setElementsToRender(state.messages.map((message, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "message"
    }, /*#__PURE__*/React.createElement("div", {
      className: "message-content ".concat(message.role === 'user' ? 'user-message' : 'bot-message')
    }, formatMessage(message)))));
  }, [state.messages]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: id ? id : "conversation-block",
    className: "conversation-block"
  }, state && !state.errorMsg && state.messages && elementsToRender), /*#__PURE__*/React.createElement(ScrollToBottomButton, {
    elementId: "conversation-block",
    elementsToRender: elementsToRender
  }), /*#__PURE__*/React.createElement(GoToTheBottom, {
    elementId: "conversation-block",
    elementsToRender: elementsToRender
  }));
};

const convertId = gs__namespace.dbService.convertId;
const console_debug_log = gs__namespace.loggingService.console_debug_log;
const isMobileDevice = gs__namespace.ui.isMobileDevice;
const getUrlParams = gs__namespace.urlParams.getUrlParams;
const errorAndReEnter = gs__namespace.errorAndReenter.errorAndReEnter;
const urlParams = getUrlParams();

// A reducer function for chat state management
const chatReducer = (state, action) => {
  switch (action.type) {
    // Messages

    case 'ADD_MESSAGE':
      // Adds a new message to the chat history
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case 'GET_MESSAGES':
      return {
        ...state,
        // Payload has an array of messages and the conversationId
        currentConversationId: action.payload.conversationId,
        messages: action.payload.messages
      };

    // Conversations

    // TODO
    case 'CLEAR_CHAT':
      // Clears the chat history
      return {
        ...state,
        messages: []
      };
    case 'START_NEW_CONVERSATION':
      return {
        ...state,
        currentConversationId: action.payload.conversationId,
        messages: []
      };
    case 'SET_CONVERSATION_ID':
      return {
        ...state,
        currentConversationId: action.payload
      };

    // Conversation List

    case 'SET_CONVERSATIONS':
      return {
        ...state,
        conversations: action.payload
      };
    case 'DELETE_CONVERSATION':
      return {
        ...state,
        conversations: state.conversations.filter(conversation => convertId(conversation._id) !== action.payload)
      };

    // Bot

    case 'API_PROCESSING_STATUS':
      return {
        ...state,
        isApiProcessing: action.payload
      };
    case 'SET_INPUT_MESSAGE':
      return {
        ...state,
        inputMessage: action.payload
      };
    case 'SET_CONVERSATION_LIST_TOGGLE':
      return {
        ...state,
        conversationListToggle: action.payload
      };
    case 'SET_ERROR_MSG':
      return {
        ...state,
        errorMsg: action.payload
      };

    // Not registered action

    default:
      return state;
  }
};

// Chatbot main component

const ChatBot = _ref => {
  let {
    userQuestion = urlParams.q ? decodeURIComponent(urlParams.q) : '',
    showSideBar = !(urlParams.ssb && urlParams.ssb === "0")
  } = _ref;
  const [state, dispatch] = React.useReducer(chatReducer, {
    messages: [],
    conversations: [],
    currentConversationId: null,
    isApiProcessing: false,
    isTyping: false,
    inputMessage: userQuestion,
    conversationListToggle: !isMobileDevice(),
    errorMsg: null
  });
  const columnSizeList = () => showSideBar && state.conversationListToggle ? isMobileDevice() ? '70%' : '30%' : "0%";
  const columnSizeMessages = () => showSideBar && state.conversationListToggle ? isMobileDevice() ? '30%' : '70%' : "100%";

  // If there's an initial UserQuestion, send it inmediatelly to the LLM
  // useEffect(() => {
  //     if (userQuestion !== '') {
  //         sendMessage(userQuestion);
  //     }
  // }, [userQuestion, sendMessage]);

  const handleRetry = e => {
    if (state && state.messages) {
      const lastUserMessage = state.messages.slice().reverse().find(message => message.role === 'user' && message.content !== '');
      // if (debug) {
      console_debug_log("handleRetry | lastUserMessage:", lastUserMessage, "state.messages:", state.messages);
      // }
      if (typeof lastUserMessage !== "undefined" && lastUserMessage !== null && typeof lastUserMessage["content"] !== "undefined") {
        // if (debug) {
        console_debug_log("handleRetry | setChatbotInputMessage: ".concat(lastUserMessage.content));
        // }
        setChatbotInputMessage(lastUserMessage.content, dispatch);
      }
    }
    setChatbotErrorMsg(null, dispatch);
  };

  // Load conversations
  React.useEffect(() => {
    fetchConversations(dispatch).then(apiResponse => {
      if (!apiResponse.ok) {
        setChatbotErrorMsg(apiResponse.errorMessage, dispatch);
      }
    }, error => setChatbotErrorMsg(error, dispatch));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "chatbot-container"
  }, state.errorMsg && /*#__PURE__*/React.createElement(React.Fragment, null, errorAndReEnter(state.errorMsg, null, null, handleRetry)), showSideBar && state.conversationListToggle && /*#__PURE__*/React.createElement("div", {
    className: "conversations-list",
    style: {
      width: columnSizeList()
    }
  }, /*#__PURE__*/React.createElement(NewConversationButton, {
    dispatch: dispatch
  }), /*#__PURE__*/React.createElement(ConversationList, {
    state: state,
    dispatch: dispatch,
    showSideBar: showSideBar
  })), showSideBar && /*#__PURE__*/React.createElement(ConversationsToggleButton, {
    state: state,
    dispatch: dispatch
  }), /*#__PURE__*/React.createElement("div", {
    id: "message-area",
    className: "message-area",
    style: {
      width: columnSizeMessages()
    }
  }, /*#__PURE__*/React.createElement(ConversationBlock, {
    id: "conversation-block",
    state: state,
    handleRetry: handleRetry
  }), /*#__PURE__*/React.createElement(UserInput, {
    state: state,
    dispatch: dispatch,
    userQuestion: state.inputMessage
  })));
};

// import { ChatBotButton } from '../ChatBotButton/ChatBotButton.jsx';

const mergeDicts = gs__namespace.dictUtilities.mergeDicts;
gs__namespace.loggingService.console_debug_log;
const defaultComponentMap = {
  "Chatbot": ChatBot
  // "ChatBotButton": ChatBotButton,
};
const App = _ref => {
  let {
    componentMap = {},
    appLogo = null
  } = _ref;
  const componentMapFinal = mergeDicts(componentMap, defaultComponentMap);
  return /*#__PURE__*/React.createElement(gs__namespace.App, {
    appLogo: appLogo === null ? 'gs_ai_logo_circle.svg' : appLogo,
    componentMap: componentMapFinal
  });
};

// AI button

gs__namespace.loggingService.console_debug_log;
const imageDirectory = gs__namespace.generalConstants.imageDirectory;
const sparkIcon = gs__namespace.spark;
const ChatBotButton = _ref => {
  let {
    valueElement,
    chatbot_prompt
  } = _ref;
  const [showLLMPopup, setShowLLMPopup] = React.useState(false);
  const setPrompt = (prompt, valueToReplace) => {
    return prompt.replace("%s", valueToReplace);
  };
  const handleSparkClick = e => {
    e.preventDefault();
    const inputValue = document.getElementById(valueElement).value;
    if (inputValue !== "") {
      {
        window.open(window.location.origin + '/#/chatbot?menu=0&ssb=0&q=' + setPrompt(chatbot_prompt, inputValue), 'AppChatbotPopUp', 'height=600,width=400');
      }
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "align-middle flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSparkClick
  }, /*#__PURE__*/React.createElement("img", {
    src: imageDirectory + sparkIcon,
    alt: "Open AI Chat"
  })))), showLLMPopup && /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "llm-popup"
  }, /*#__PURE__*/React.createElement(ChatBot, {
    userQuestion: setPrompt(chatbot_prompt, document.getElementById(valueElement).value),
    showSideBar: false
  }))));
};

// Components
// Images
const gsAiLogoCircle = 'gs_ai_logo_circle.svg';

exports.App = App;
exports.CameraComponent = CameraComponent;
exports.ChatBot = ChatBot;
exports.ChatBotButton = ChatBotButton;
exports.ChatCodeBlock = ChatCodeBlock;
exports.ConversationBlock = ConversationBlock;
exports.ConversationList = ConversationList;
exports.ConversationsToggleButton = ConversationsToggleButton;
exports.FileUploader = FileUploader;
exports.NewConversationButton = NewConversationButton;
exports.UserInput = UserInput;
exports.VoiceMessageRecorder = VoiceMessageRecorder;
exports.gsAiLogoCircle = gsAiLogoCircle;
//# sourceMappingURL=index.js.map
