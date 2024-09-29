import * as gs from "genericsuite";

const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;

// AudioPlayer.css
export const AUDIO_PLAYER_DIV_1_CLASS = "flex items-center gap-4 bg-[#287991] rounded-2xl p-3 w-max text-white audio-player-div-1";
export const AUDIO_PLAYER_MENU_CONTENT_CLASS = "hidden absolute bg-[#f9f9f9] shadow-lg p-3 z-10 audio-player-menu-content";
export const AUDIO_PLAYER_MENU_HOVER_CONTENT_CLASS = "inline relative top-0.5 -right-2.5 p-0.75 rounded bg-gray-500 text-white cursor-pointer text-xs z-20 .menu:hover audio-player-menu-content";
export const AUDIO_PLAYER_PLAY_BUTTON_CLASS = "border-none focus:outline-none audio-player-play-button";

// CameraComponent.css
export const CAMERA_COMPONENT_DIV_1_CLASS = "camera-component-div-1";
export const CAMERA_COMPONENT_DIV_2_CLASS = "min-w-full w-full flex items-center mr-3 camera-component-div-2";
export const CAMERA_COMPONENT_BUTTONS_CLASS = `${BUTTON_LISTING_CLASS} mr-2 camera-component-buttons`;
export const CAMERA_COMPONENT_VIDEO_CONTAINER_CLASS = "relative w-full max-w-full camera-component-video-container";
export const CAMERA_COMPONENT_PHOTO_CLASS = "mr-2 camera-component-photo";
export const CAMERA_COMPONENT_VIDEO_CLASS = "w-full h-auto .video-container camera-component-video";
export const CAMERA_COMPONENT_VIDEO_CANVAS_CLASS = "mt-2 w-full camera-component-video-canvas";

// IMPORTANT: the overlay is a child of the video element
// That's why CameraComponent.css is still imported in CameraComponent.py
export const CAMERA_COMPONENT_OVERLAY_CLASS = "absolute top-0 left-0 w-full h-full flex flex-col items-center justify-around bg-black bg-opacity-50 camera-component-overlay";
export const CAMERA_COMPONENT_OVERLAY_BUTTON_CLASS = "py-2.5 px-5 text-base bg-blue-500 text-white border-none cursor-pointer hover:bg-blue-700 camera-component-overlay-button";

// ChatBot.css
export const CHATBOT_MAIN_CONTAINER_CLASS = "w-full mx-auto border border-gray-300 flex chatbot-main-container";
export const CHATBOT_MESSAGE_AREA_CLASS = "w-[70%] h-[87vh] overflow-y-auto bg-white rounded-sm chatbot-message-area";

export const CHATBOT_INPUT_AREA_DIV_1_CLASS = "flex p-2.5 items-center chatbot-input-area";
// export const CHATBOT_INPUT_AREA_BUTTON_CLASS = "p-2.5 chatbot-input-area-button";
export const CHATBOT_INPUT_AREA_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} mr-2 chatbot-input-area-button`;
export const CHATBOT_INPUT_AREA_TEXTAREA_CLASS = "p-2 w-full bg-gray-200 text-black max-h-[200px] overflow-y-hidden mr-2.5 chatbot-input-area-textarea";
export const CHATBOT_INPUT_AREA_WAIT_ANIMATION_CLASS = "ml-2 flex items-center chatbot-input-area-wait-animation";

export const CHATBOT_CONVERSATIONS_LIST_CLASS = "w-[30%] h-[87vh] border border-gray-300 rounded-sm p-2.5 bg-[#282626] overflow-y-auto chatbot-conversations-list";
export const CHATBOT_CONVERSATIONS_LIST_HEADING_CLASS = "text-gray-500 text-sm chatbot-conversations-list-h2";

export const CHATBOT_CONVERSATION_ITEM_DIV_1_CLASS = "mb-2.5 text-white align-middle flex chatbot-conversation-item-div-1";
export const CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS = "ml-2 mb-1 bg-blue-500 text-white p-0 rounded close chatbot-conversation-item-delete-button"
export const CHATBOT_CONVERSATION_ITEM_DESC_OUTTER_CLASS = "overflow-hidden text-ellipsis whitespace-nowrap chatbot-conversation-item-desc-outer"
export const CHATBOT_CONVERSATION_ITEM_DESC_INNER_CLASS = "overflow-hidden text-ellipsis whitespace-nowrap chatbot-conversation-item-desc-inner"

export const CHATBOT_NEW_CONVERSATION_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} text-xs mb-2 chatbot-new-conversation-button`;

export const CHATBOT_MESSAGE_CLASS = "p-2.5 chatbot-message";
export const CHATBOT_USER_MESSAGE_CLASS = "text-left bg-[#daf1da] chatbot-user-message";
export const CHATBOT_BOT_MESSAGE_CLASS = "text-left bg-gray-100 chatbot-bot-message";

export const CHATBOT_CONVERSATION_BLOCK_DIV_1_CLASS = "h-[80vh] overflow-y-auto bg-white chatbot-conversation-block-div-1";
export const CHATBOT_CONVERSATION_FORMAT_MESSAGE_DIV_1_CLASS = "bg-white chatbot-conversation-format-message-div-1";
export const CHATBOT_CONVERSATION_FORMAT_MESSAGE_DIV_2_CLASS = "rounded-md p-2 shadow-sm chatbot-conversation-format-message-div-2";
export const CHATBOT_CONVERSATION_FORMAT_MESSAGE_ATTACHMENT_MESSAGE_CLASS = "text-black font-bold chatbot-conversation-format-message-attachment-message";
export const CHATBOT_CONVERSATION_FORMAT_MESSAGE_ATTACHMENT_IMAGE_DIV_CLASS = "mt-2 chatbot-conversation-format-message-attachment-image-div";
export const CHATBOT_CONVERSATION_FORMAT_MESSAGE_ATTACHMENT_IMAGE_IMG_CLASS = "rounded-md chatbot-conversation-format-message-attachment-image-img";

// ScrollToBottomButton.css
export const SCROLL_TO_BOTTOM_BUTTON_FLOAT_CLASS = "fixed w-10 h-10 bottom-[90px] right-[500px] bg-gray-300 text-white rounded-full text-center shadow-md scroll-to-bottom-button-float";
export const SCROLL_TO_BOTTOM_BUTTON_MY_FLOAT_CLASS = "mt-3 scroll-to-bottom-button-my-float";

// FileUploader
export const FILE_UPLOADER_DIV_1_CLASS = "file-uploader-div-1";
export const FILE_UPLOADER_DIV_2_CLASS = "flex items-center file-uploader-div-1";
export const FILE_UPLOADER_BASE_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} file-uploader-base-button`;
export const FILE_UPLOADER_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} mr-2 file-uploader-button`;
export const FILE_UPLOADER_INPUT_AREA_CONTAINER_CLASS = "flex items-center file-uploader-input-area-container";
export const FILE_UPLOADER_INPUT_AREA_INPUT_CLASS = "p-0 m-0 file-uploader-input-area-input";

// VoiceMessageRecorder
export const VOICE_MESSAGE_RECORDER_DIV_1_CLASS = "voice-message-recorder-div-1";
export const VOICE_MESSAGE_RECORDER_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} mr-2 voice-message-recorder-button`;

// ChatBotButton
export const CHATBOT_BUTTON_DIV_1_CLASS = "align-middle flex chatbot-button-div-1";
export const CHATBOT_BUTTON_DIV_2_CLASS = "ml-2 chatbot-button-div-2";
export const CHATBOT_BUTTON_LLM_POPUP_DIV_1 = "mt-5 chatbot-button-llm-popup-div-1";
export const CHATBOT_BUTTON_LLM_POPUP_DIV_2 = "chatbot-button-llm-popup-div-2";
