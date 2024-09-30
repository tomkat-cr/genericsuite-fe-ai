import * as gs from "genericsuite";

const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;

// ChatBot.css

// export const CHATBOT_CONTAINER_DIV_1_CLASS = "w-full mx-auto border border-gray-300 flex chatbot-main-container";
// export const CHATBOT_CONTAINER_DIV_1_CLASS = "flex 1-h-screen chatbot-main-container-class";
export const CHATBOT_CONTAINER_DIV_1_CLASS = "relative flex h-full w-full overflow-hidden transition-colors z-0 chatbot-container-div-1-class";

// Conversation List column

// export const CHATBOT_CONVERSATIONS_LIST_DIV_1_CLASS = "w-[30%] h-[87vh] border border-gray-300 rounded-sm p-2.5 bg-[#282626] overflow-y-auto chatbot-conversations-list-class";
// export const CHATBOT_CONVERSATIONS_LIST_DIV_1_CLASS = "w-[20%] block 1-border-r chatbot-conversations-list-div-1-class";
export const CHATBOT_CONVERSATIONS_LIST_DIV_1_CLASS = "w-[20%] flex-shrink-0 overflow-x-hidden max-md:!w-0 chatbot-conversations-list-div-1-class";
export const CHATBOT_CONVERSATIONS_LIST_DIV_2_CLASS = "overflow-y-auto chatbot-conversations-list-div-2-class";
export const CHATBOT_CONVERSATIONS_LIST_DIV_3_CLASS = "p-0 chatbot-conversations-list-div-3-class";
export const CHATBOT_CONVERSATIONS_LIST_DIV_4_CLASS = "space-y-1 chatbot-conversations-list-div-4-class";

export const CHATBOT_NEW_CONVERSATION_BUTTON_DIV_1_CLASS = "mb-2 mr-2 flex justify-end chatbot-new-conversation-button-div-1-class";
export const CHATBOT_NEW_CONVERSATION_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} text-xs chatbot-new-conversation-button-class`;

// export const CHATBOT_CONVERSATIONS_LIST_HEADING_CLASS = "text-gray-500 text-sm chatbot-conversations-list-h2-class";
export const CHATBOT_CONVERSATIONS_LIST_HEADING_CLASS = "mb-2 text-sm chatbot-conversations-list-heading-class";
export const CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_LM_CLASS = "text-gray-400 chatbot-conversations-list-heading-text-lm-class";
export const CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_DM_CLASS = "text-gray-500 chatbot-conversations-list-heading-text-dm-class";

// export const CHATBOT_CONVERSATION_ITEM_DIV_1_CLASS = "mb-2.5 text-white align-middle flex chatbot-conversation-item-div-1-class";
export const CHATBOT_CONVERSATION_ITEM_DIV_1_CLASS = "cursor-pointer align-middle flex chatbot-conversation-item-div-1-class";
export const CHATBOT_CONVERSATION_ITEM_DIV_2_CLASS = "w-[90%] chatbot-conversation-item-div-2-class";
export const CHATBOT_CONVERSATION_ITEM_DESC_OUTTER_CLASS = "p-1 rounded overflow-hidden text-ellipsis whitespace-nowrap chatbot-conversation-item-desc-outer-class"
export const CHATBOT_CONVERSATION_ITEM_DESC_INNER_CLASS = "overflow-hidden text-ellipsis whitespace-nowrap chatbot-conversation-item-desc-inner-class"

export const CHATBOT_CONVERSATION_ITEM_SEPARATOR_CLASS = "w-[2%] chatbot-conversation-item-separator-class"

export const CHATBOT_CONVERSATION_ITEM_DELETE_DIV_CLASS = "w-[5%] p-1 rounded chatbot-conversation-item-delete-div-class"
// export const CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS = "ml-2 mr-2 mb-1 bg-blue-500 text-white p-0 rounded close chatbot-conversation-item-delete-button-class"
export const CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS = "chatbot-conversation-item-delete-button-class"

export const CHATBOT_CONVERSATIONS_TOGGLE_BUTTON_CLASS = "chatbot-conversations-toggle-button-class";

// Conversation messages column

export const CHATBOT_MESSAGE_AREA_DIV_1_CLASS = "w-[80%] relative h-full 1-w-full flex-1 overflow-auto transition-width chatbot-message-area-div-1-class";
export const CHATBOT_MESSAGE_AREA_DIV_2_CLASS = "composer-parent flex h-full flex-col focus-visible:outline-0 chatbot-message-area-div-2-class";

// export const CHATBOT_MESSAGE_AREA_DIV_3_CLASS = "w-[80%] h-[87vh] overflow-y-auto bg-white rounded-sm chatbot-message-area-class";
// export const CHATBOT_MESSAGE_AREA_DIV_3_CLASS = "w-[80%] 1-h-full 1-flex-1 flex flex-col chatbot-message-area-main-class";
export const CHATBOT_MESSAGE_AREA_DIV_3_CLASS = "flex-1 overflow-hidden chatbot-message-area-div-3-class";
export const CHATBOT_MESSAGE_AREA_DIV_4_CLASS = "relative h-full chatbot-message-area-div-4-class";

// Conversation messages row

// export const CHATBOT_MESSAGE_BLOCK_CLASS = "h-[80vh] overflow-y-auto bg-white chatbot-conversation-block-div-1-class";
export const CHATBOT_MESSAGE_BLOCK_CLASS = "flex-1 p-4 overflow-y-auto chatbot-message-block-class";

export const CHATBOT_MESSAGE_CLASS = "p-2 flex chatbot-message-class";
// export const CHATBOT_USER_MESSAGE_CLASS = "text-right bg-[#daf1da] chatbot-user-message-class";
export const CHATBOT_USER_MESSAGE_CONTAINER_CLASS = "justify-end chatbot-user-message-container-class";
export const CHATBOT_USER_MESSAGE_CLASS = "p-2 rounded-full w-auto chatbot-user-message-class";
export const CHATBOT_USER_MESSAGE_LM_CLASS = "bg-gray-300 chatbot-user-message-lm-class";
export const CHATBOT_USER_MESSAGE_DM_CLASS = "bg-gray-500 chatbot-user-message-dm-class";
// export const CHATBOT_BOT_MESSAGE_CLASS = "text-left bg-gray-100 chatbot-bot-message-class";
export const CHATBOT_BOT_MESSAGE_CONTAINER_CLASS = "justify-start chatbot-bot-message-container-class";
export const CHATBOT_BOT_MESSAGE_CLASS = "p-1 rounded chatbot-bot-message-class";
export const CHATBOT_BOT_MESSAGE_LM_CLASS = "chatbot-bot-message-lm-class";
export const CHATBOT_BOT_MESSAGE_DM_CLASS = "chatbot-bot-message-dm-class";

// export const CHATBOT_FORMAT_MESSAGE_DIV_1_CLASS = "bg-white chatbot-format-message-div-1-class";
export const CHATBOT_FORMAT_MESSAGE_DIV_1_CLASS = "chatbot-format-message-div-1-class";
export const CHATBOT_FORMAT_MESSAGE_DIV_2_CLASS = "rounded-md p-2 shadow-sm chatbot-format-message-div-2-class";
export const CHATBOT_FORMAT_MESSAGE_ATTACHMENT_MESSAGE_CLASS = "text-black font-bold chatbot-format-message-attachment-message-class";
export const CHATBOT_FORMAT_MESSAGE_ATTACHMENT_IMAGE_DIV_CLASS = "mt-2 chatbot-format-message-attachment-image-div-class";
export const CHATBOT_FORMAT_MESSAGE_ATTACHMENT_IMAGE_IMG_CLASS = "rounded-md chatbot-format-message-attachment-image-img-class";

// User input area row

// export const CHATBOT_INPUT_AREA_DIV_1_CLASS = "p-4 1-border-t chatbot-input-area-div-1class";
export const CHATBOT_INPUT_AREA_DIV_1_CLASS = "md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full chatbot-input-area-div-1class";
// export const CHATBOT_INPUT_AREA_DIV_2_CLASS = "relative chatbot-input-area-div-2-class";
export const CHATBOT_INPUT_AREA_DIV_2_CLASS = "text-base px-3 md:px-4 m-auto w-full md:px-5 lg:px-4 xl:px-5 chatbot-input-area-div-2-class";
// export const CHATBOT_INPUT_AREA_DIV_3_CLASS = "flex flex-row items-center chatbot-input-area-div-3-class";
export const CHATBOT_INPUT_AREA_DIV_3_CLASS = "text-base px-3 md:px-4 m-auto w-full md:px-5 lg:px-4 xl:px-5 chatbot-input-area-div-3-class";

export const CHATBOT_INPUT_AREA_DIV_4_CLASS = "mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] chatbot-input-area-div-4-class";
export const CHATBOT_INPUT_AREA_DIV_5_CLASS = "relative flex h-full max-w-full flex-1 flex-col chatbot-input-area-div-5-class";
export const CHATBOT_INPUT_AREA_DIV_61_CLASS = "absolute bottom-full left-0 right-0 z-20 chatbot-input-area-div-61-class";
export const CHATBOT_INPUT_AREA_DIV_62_CLASS = "group relative flex w-full items-center chatbot-input-area-div-62-class";

// export const CHATBOT_INPUT_AREA_TEXTAREA_CLASS = "rounded-full p-2 w-full bg-gray-200 text-black max-h-[200px] overflow-y-hidden mr-2.5 chatbot-input-area-textarea-class";
export const CHATBOT_INPUT_AREA_TEXTAREA_CLASS = "p-2 mr-2 rounded-xl w-full resize-none max-h-[200px] overflow-y-hidden chatbot-input-area-textarea-class";
// // export const CHATBOT_INPUT_AREA_BUTTON_CLASS = "p-2.5 chatbot-input-area-button-class";
export const CHATBOT_INPUT_AREA_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} mr-2 chatbot-input-area-button-class`;
export const CHATBOT_INPUT_AREA_WAIT_ANIMATION_CLASS = "ml-2 flex items-center chatbot-input-area-wait-animation-class";

// AudioPlayer.css
export const AUDIO_PLAYER_DIV_1_CLASS = "flex items-center gap-4 bg-[#287991] rounded-2xl p-3 w-max text-white audio-player-div-1-class";
export const AUDIO_PLAYER_MENU_CONTENT_CLASS = "hidden absolute bg-[#f9f9f9] shadow-lg p-3 z-10 audio-player-menu-content-class";
export const AUDIO_PLAYER_MENU_HOVER_CONTENT_CLASS = "inline relative top-0.5 -right-2.5 p-0.75 rounded bg-gray-500 text-white cursor-pointer text-xs z-20 .menu:hover audio-player-menu-content-class";
export const AUDIO_PLAYER_PLAY_BUTTON_CLASS = "border-none focus:outline-none audio-player-play-button-class";

// CameraComponent.css
export const CAMERA_COMPONENT_DIV_1_CLASS = "camera-component-div-1-class";
export const CAMERA_COMPONENT_DIV_2_CLASS = "min-w-full w-full flex items-center mr-3 camera-component-div-2-class";
export const CAMERA_COMPONENT_BUTTON_SUB_CLASS = `${BUTTON_LISTING_CLASS} mr-2 camera-component-button-sub-class`;
export const CAMERA_COMPONENT_BUTTON_MAIN_CLASS = `border-none mr-2 text-sm camera-component-button-main-class`;
export const CAMERA_COMPONENT_VIDEO_CONTAINER_CLASS = "relative w-full max-w-full camera-component-video-container-class";
export const CAMERA_COMPONENT_PHOTO_CLASS = "mr-2 camera-component-photo-class";
export const CAMERA_COMPONENT_VIDEO_CLASS = "w-full h-auto .video-container camera-component-video-class";
export const CAMERA_COMPONENT_VIDEO_CANVAS_CLASS = "mt-2 w-full camera-component-video-canvas-class";

// IMPORTANT: the overlay is a child of the video element
// That's why CameraComponent.css is still imported in CameraComponent.py
export const CAMERA_COMPONENT_OVERLAY_CLASS = "absolute top-0 left-0 w-full h-full flex flex-col items-center justify-around bg-black bg-opacity-50 camera-component-overlay-class";
export const CAMERA_COMPONENT_OVERLAY_BUTTON_CLASS = "py-2.5 px-5 text-base bg-blue-500 text-white border-none cursor-pointer hover:bg-blue-700 camera-component-overlay-button-class";

// ScrollToBottomButton.css
export const SCROLL_TO_BOTTOM_BUTTON_DIV_1_CLASS = "relative flex flex-col justify-end items-center overflow-hidden 1-justify-center scroll-to-bottom-button-div-1-class";
export const SCROLL_TO_BOTTOM_BUTTON_DIV_2_CLASS = 'absolute pb-10 scroll-to-bottom-button-div-2-class';
export const SCROLL_TO_BOTTOM_BUTTON_DIV_3_CLASS = "fixed mx-auto w-full max-w-md scroll-to-bottom-button-div-3-class";
export const SCROLL_TO_BOTTOM_BUTTON_FLOAT_CLASS = "w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-gray-300 text-white scroll-to-bottom-button-float-class";
export const SCROLL_TO_BOTTOM_BUTTON_ICON_CLASS = "1-mt-3 text-center scroll-to-bottom-button-icon-class";

// FileUploader
export const FILE_UPLOADER_DIV_1_CLASS = "file-uploader-div-1-class";
export const FILE_UPLOADER_DIV_2_CLASS = "flex items-center file-uploader-div-1-class";
export const FILE_UPLOADER_BASE_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} file-uploader-base-button-class`;
// export const FILE_UPLOADER_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} mr-2 file-uploader-button-class`;
export const FILE_UPLOADER_BUTTON_CLASS = `border-none mr-2 file-uploader-button-class`;
export const FILE_UPLOADER_INPUT_AREA_CONTAINER_CLASS = "flex items-center file-uploader-input-area-container-class";
export const FILE_UPLOADER_INPUT_AREA_INPUT_CLASS = "p-0 m-0 file-uploader-input-area-input-class";

// VoiceMessageRecorder
export const VOICE_MESSAGE_RECORDER_DIV_1_CLASS = "voice-message-recorder-div-1-class";
// export const VOICE_MESSAGE_RECORDER_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} mr-2 voice-message-recorder-button-class`;
export const VOICE_MESSAGE_RECORDER_BUTTON_CLASS = `border-none mr-2 voice-message-recorder-button-class`;

// ChatBotButton
export const CHATBOT_BUTTON_DIV_1_CLASS = "align-middle flex chatbot-button-div-1-class";
export const CHATBOT_BUTTON_DIV_2_CLASS = "ml-2 chatbot-button-div-2-class";
export const CHATBOT_BUTTON_LLM_POPUP_DIV_1 = "mt-5 chatbot-button-llm-popup-div-1-class";
export const CHATBOT_BUTTON_LLM_POPUP_DIV_2 = "chatbot-button-llm-popup-div-2-class";
