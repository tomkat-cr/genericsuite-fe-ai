'use strict';

var React = require('react');
var gs = require('genericsuite');
var axios = require('axios');
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

const iconsLibAiExtras = (icon, size, width, height, alt, id, className, role) => {
  let selectedSvg = null;
  switch (icon) {
    case 'play':
      // Rounded: https://www.svgrepo.com/svg/532511/play
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z",
        stroke: "#000000",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }));
      break;
    case 'stop':
      // faStop
      // className="svg-inline--fa fa-stop fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "stop",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
      }));
      break;
    case 'arrow-up':
      // faArrowUp
      // className="svg-inline--fa fa-arrow-up fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "arrow-up",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
      }));
      break;
    case 'arrow-down':
      // faArrowDown
      // className="svg-inline--fa fa-arrow-down fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "arrow-down",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
      }));
      break;
    case 'times':
      // faTimes
      // className="svg-inline--fa fa-times fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "times",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 352 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      }));
      break;
    case 'camera':
      // faCamera
      // className="svg-inline--fa fa-camera fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "camera",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
      }));
      break;
    case 'camera-retro':
      // faCameraRetro
      // className="svg-inline--fa fa-camera-retro fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "camera-retro",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"
      }));
      break;
    case 'greater-than':
      // faGreaterThan
      // className="svg-inline--fa fa-greater-than fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "greater-than",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 384 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"
      }));
      break;
    case 'less-than':
      // faLessThan
      // className="svg-inline--fa fa-less-than fa-xl "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "less-than",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 384 512",
        style: "color: lightgray;"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"
      }));
      break;
    case 'paperclip':
      // faPaperclip
      // className="svg-inline--fa fa-paperclip fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "paperclip",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"
      }));
      break;
    case 'microphone':
      // faMicrophone
      // className="svg-inline--fa fa-microphone fa-lg "
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "microphone",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 352 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"
      }));
      break;
    case 'two-lines-left-menu':
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
        // className="icon-xl-heavy md:hidden"
      }, /*#__PURE__*/React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z",
        fill: "currentColor"
      }));
      break;
    case 'conversation-list-toggle':
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
        // className="icon-xl-heavy max-md:hidden"
        ,
        className: className
      }, /*#__PURE__*/React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.85719 3H15.1428C16.2266 2.99999 17.1007 2.99998 17.8086 3.05782C18.5375 3.11737 19.1777 3.24318 19.77 3.54497C20.7108 4.02433 21.4757 4.78924 21.955 5.73005C22.2568 6.32234 22.3826 6.96253 22.4422 7.69138C22.5 8.39925 22.5 9.27339 22.5 10.3572V13.6428C22.5 14.7266 22.5 15.6008 22.4422 16.3086C22.3826 17.0375 22.2568 17.6777 21.955 18.27C21.4757 19.2108 20.7108 19.9757 19.77 20.455C19.1777 20.7568 18.5375 20.8826 17.8086 20.9422C17.1008 21 16.2266 21 15.1428 21H8.85717C7.77339 21 6.89925 21 6.19138 20.9422C5.46253 20.8826 4.82234 20.7568 4.23005 20.455C3.28924 19.9757 2.52433 19.2108 2.04497 18.27C1.74318 17.6777 1.61737 17.0375 1.55782 16.3086C1.49998 15.6007 1.49999 14.7266 1.5 13.6428V10.3572C1.49999 9.27341 1.49998 8.39926 1.55782 7.69138C1.61737 6.96253 1.74318 6.32234 2.04497 5.73005C2.52433 4.78924 3.28924 4.02433 4.23005 3.54497C4.82234 3.24318 5.46253 3.11737 6.19138 3.05782C6.89926 2.99998 7.77341 2.99999 8.85719 3ZM6.35424 5.05118C5.74907 5.10062 5.40138 5.19279 5.13803 5.32698C4.57354 5.6146 4.1146 6.07354 3.82698 6.63803C3.69279 6.90138 3.60062 7.24907 3.55118 7.85424C3.50078 8.47108 3.5 9.26339 3.5 10.4V13.6C3.5 14.7366 3.50078 15.5289 3.55118 16.1458C3.60062 16.7509 3.69279 17.0986 3.82698 17.362C4.1146 17.9265 4.57354 18.3854 5.13803 18.673C5.40138 18.8072 5.74907 18.8994 6.35424 18.9488C6.97108 18.9992 7.76339 19 8.9 19H9.5V5H8.9C7.76339 5 6.97108 5.00078 6.35424 5.05118ZM11.5 5V19H15.1C16.2366 19 17.0289 18.9992 17.6458 18.9488C18.2509 18.8994 18.5986 18.8072 18.862 18.673C19.4265 18.3854 19.8854 17.9265 20.173 17.362C20.3072 17.0986 20.3994 16.7509 20.4488 16.1458C20.4992 15.5289 20.5 14.7366 20.5 13.6V10.4C20.5 9.26339 20.4992 8.47108 20.4488 7.85424C20.3994 7.24907 20.3072 6.90138 20.173 6.63803C19.8854 6.07354 19.4265 5.6146 18.862 5.32698C18.5986 5.19279 18.2509 5.10062 17.6458 5.05118C17.0289 5.00078 16.2366 5 15.1 5H11.5ZM5 8.5C5 7.94772 5.44772 7.5 6 7.5H7C7.55229 7.5 8 7.94772 8 8.5C8 9.05229 7.55229 9.5 7 9.5H6C5.44772 9.5 5 9.05229 5 8.5ZM5 12C5 11.4477 5.44772 11 6 11H7C7.55229 11 8 11.4477 8 12C8 12.5523 7.55229 13 7 13H6C5.44772 13 5 12.5523 5 12Z",
        fill: "currentColor"
      }));
      break;
    case 'new-conversation':
      selectedSvg = /*#__PURE__*/React.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
        // className="icon-xl-heavy"
        ,
        className: className
      }, /*#__PURE__*/React.createElement("path", {
        d: "M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z",
        fill: "currentColor"
      }));
      break;
  }
  return selectedSvg;
};

const BUTTON_LISTING_CLASS = gs__namespace.classNameConstants.BUTTON_LISTING_CLASS;

// ChatBot.css

const CHATBOT_CONTAINER_DIV_1_CLASS = "relative flex w-full overflow-hidden transition-colors z-0 chatbot-container-div-1-class";

// Conversation List column

const CHATBOT_CONVERSATIONS_LIST_DIV_1_CLASS = "ml-2 h-full flex-shrink-0 overflow-x-hidden 1-max-md:!w-0 chatbot-conversations-list-div-1-class";
const CHATBOT_CONVERSATIONS_LIST_DIV_2_CLASS = "w-[260px] h-full chatbot-conversations-list-div-2-class";
const CHATBOT_CONVERSATIONS_LIST_DIV_3_CLASS = "draggable relative h-full w-full flex-1 items-start border-white/20 chatbot-conversations-list-div-3-class";
const CHATBOT_CONVERSATIONS_LIST_DIV_4_CLASS = "flex h-full w-full flex-col 1-px-3 chatbot-conversations-list-div-4-class";
const CHATBOT_CONVERSATIONS_LIST_ROW_1_DIV_1_CLASS = "flex justify-between flex h-[40px] mt-2 mb-4 items-center md:h-header-height chatbot-conversations-list-row-1-div-1-class";
const CHATBOT_NEW_CONVERSATION_BUTTON_DIV_1_CLASS = "flex chatbot-new-conversation-button-div-1-class";
const CHATBOT_NEW_CONVERSATION_BUTTON_SPAN_CLASS = "flex chatbot-new-conversation-button-span-class";
const CHATBOT_NEW_CONVERSATION_BUTTON_CLASS = `text-xs chatbot-new-conversation-button-class`;
const CHATBOT_CONVERSATIONS_LIST_ROW_2_DIV_1_CLASS = "flex-col flex-1 h-[90%] transition-opacity duration-500 relative -mr-2 pr-2 overflow-y-auto chatbot-conversations-list-row-2-div-1-class";
const CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS = "space-y-1 chatbot-conversations-list-heading-div-1-class";
const CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_2_CLASS = "mb-2 text-sm chatbot-conversations-list-heading-div-2-class";
const CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_LM_CLASS = "text-gray-400 chatbot-conversations-list-heading-text-lm-class";
const CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_DM_CLASS = "text-gray-500 chatbot-conversations-list-heading-text-dm-class";
const CHATBOT_CONVERSATION_ITEM_DIV_1_CLASS = "cursor-pointer align-middle flex chatbot-conversation-item-div-1-class";
const CHATBOT_CONVERSATION_ITEM_DIV_2_CLASS = "w-[90%] chatbot-conversation-item-div-2-class";
const CHATBOT_CONVERSATION_ITEM_DESC_OUTTER_CLASS = "p-1 rounded overflow-hidden text-ellipsis whitespace-nowrap chatbot-conversation-item-desc-outer-class";
const CHATBOT_CONVERSATION_ITEM_DESC_INNER_CLASS = "overflow-hidden text-ellipsis whitespace-nowrap chatbot-conversation-item-desc-inner-class";
const CHATBOT_CONVERSATION_ITEM_SEPARATOR_CLASS = "w-[2%] chatbot-conversation-item-separator-class";
const CHATBOT_CONVERSATION_ITEM_DELETE_DIV_CLASS = "w-[5%] p-1 rounded chatbot-conversation-item-delete-div-class";
const CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS = "chatbot-conversation-item-delete-button-class";
const CHATBOT_CONVERSATIONS_TOGGLE_BUTTON_CLASS = "flex justify-start chatbot-conversations-toggle-button-class";
const CHATBOT_CONVERSATIONS_HIDDEN_TOGGLE_BUTTON_CLASS = "ml-2 mt-4 chatbot-conversations-hidden-toggle-button-class";

// Conversation messages column

const CHATBOT_MESSAGE_AREA_DIV_1_CLASS = "1-w-[80%] relative h-full 1-w-full flex-1 overflow-auto transition-width chatbot-message-area-div-1-class";
const CHATBOT_MESSAGE_AREA_DIV_2_CLASS = "composer-parent flex h-full flex-col focus-visible:outline-0 chatbot-message-area-div-2-class";
const CHATBOT_MESSAGE_AREA_DIV_3_CLASS = "flex-1 overflow-hidden chatbot-message-area-div-3-class";
const CHATBOT_MESSAGE_AREA_DIV_4_CLASS = "relative h-full chatbot-message-area-div-4-class";

// Conversation messages row

const CHATBOT_MESSAGE_BLOCK_CLASS = "flex-1 p-4 mb-2 overflow-y-auto chatbot-message-block-class";
const CHATBOT_MESSAGE_CLASS = "p-2 flex chatbot-message-class";
const CHATBOT_USER_MESSAGE_CONTAINER_CLASS = "justify-end chatbot-user-message-container-class";
// export const CHATBOT_USER_MESSAGE_CLASS = "p-2 rounded-full w-auto chatbot-user-message-class";
const CHATBOT_USER_MESSAGE_CLASS = "p-2 rounded-xl w-auto chatbot-user-message-class";
const CHATBOT_USER_MESSAGE_LM_CLASS = "bg-gray-300 chatbot-user-message-lm-class";
const CHATBOT_USER_MESSAGE_DM_CLASS = "bg-gray-500 chatbot-user-message-dm-class";
const CHATBOT_BOT_MESSAGE_CONTAINER_CLASS = "justify-start chatbot-bot-message-container-class";
const CHATBOT_BOT_MESSAGE_CLASS = "p-1 rounded chatbot-bot-message-class";
const CHATBOT_BOT_MESSAGE_LM_CLASS = "chatbot-bot-message-lm-class";
const CHATBOT_BOT_MESSAGE_DM_CLASS = "chatbot-bot-message-dm-class";
const CHATBOT_FORMAT_MESSAGE_DIV_1_CLASS = "chatbot-format-message-div-1-class";
const CHATBOT_FORMAT_MESSAGE_DIV_2_CLASS = "rounded-md p-2 shadow-sm chatbot-format-message-div-2-class";
const CHATBOT_FORMAT_MESSAGE_ATTACHMENT_MESSAGE_CLASS = "text-black font-bold chatbot-format-message-attachment-message-class";
const CHATBOT_FORMAT_MESSAGE_ATTACHMENT_IMAGE_DIV_CLASS = "mt-2 chatbot-format-message-attachment-image-div-class";
const CHATBOT_FORMAT_MESSAGE_ATTACHMENT_IMAGE_IMG_CLASS = "rounded-md chatbot-format-message-attachment-image-img-class";

// User input area row

const CHATBOT_INPUT_AREA_DIV_1_CLASS = "md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full chatbot-input-area-div-1-class";
const CHATBOT_INPUT_AREA_DIV_2_CLASS = "text-base px-3 md:px-4 m-auto w-full md:px-5 lg:px-4 xl:px-5 chatbot-input-area-div-2-class";
const CHATBOT_INPUT_AREA_DIV_3_CLASS = "mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] chatbot-input-area-div-3-class";
const CHATBOT_INPUT_AREA_DIV_4_CLASS = "mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] chatbot-input-area-div-4-class";
const CHATBOT_INPUT_AREA_DIV_5_CLASS = "relative flex h-full max-w-full flex-1 flex-col chatbot-input-area-div-5-class";
const CHATBOT_INPUT_AREA_DIV_61_CLASS = "absolute bottom-full left-0 right-0 z-20 chatbot-input-area-div-61-class";
const CHATBOT_INPUT_AREA_DIV_62_CLASS = "group relative flex w-full items-center chatbot-input-area-div-62-class";

// export const CHATBOT_INPUT_AREA_TEXTAREA_CLASS = "p-2 mr-2 rounded-xl w-full resize-none max-h-[200px] overflow-y-hidden chatbot-input-area-textarea-class";
const CHATBOT_INPUT_AREA_TEXTAREA_CLASS = "p-2 mr-2 rounded-xl w-full resize-none max-h-[200px] overflow-y-auto chatbot-input-area-textarea-class";
const CHATBOT_INPUT_AREA_TEXTAREA_LM_CLASS = "bg-gray-300 chatbot-input-area-textarea-lm-class";
const CHATBOT_INPUT_AREA_TEXTAREA_DM_CLASS = "chatbot-input-area-textarea-dm-class";
const CHATBOT_INPUT_AREA_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} mr-2 chatbot-input-area-button-class`;
const CHATBOT_INPUT_AREA_WAIT_ANIMATION_CLASS = "ml-2 flex items-center chatbot-input-area-wait-animation-class";

// CameraComponent.css

const CAMERA_COMPONENT_DIV_1_CLASS = "camera-component-div-1-class";
const CAMERA_COMPONENT_DIV_2_CLASS = "min-w-full w-full flex items-center mr-3 camera-component-div-2-class";
const CAMERA_COMPONENT_BUTTON_SUB_CLASS = `${BUTTON_LISTING_CLASS} mr-2 camera-component-button-sub-class`;
const CAMERA_COMPONENT_BUTTON_MAIN_CLASS = `border-none mr-2 text-sm camera-component-button-main-class`;
const CAMERA_COMPONENT_VIDEO_CONTAINER_CLASS = "relative w-full max-w-full camera-component-video-container-class";
const CAMERA_COMPONENT_PHOTO_CLASS = "mr-2 camera-component-photo-class";
const CAMERA_COMPONENT_VIDEO_CLASS = "w-full h-auto .video-container camera-component-video-class";
const CAMERA_COMPONENT_VIDEO_CANVAS_CLASS = "mt-2 w-full camera-component-video-canvas-class";

// ScrollToBottomButton.css

const SCROLL_TO_BOTTOM_BUTTON_DIV_1_CLASS = "relative flex flex-col justify-end items-center overflow-hidden 1-justify-center scroll-to-bottom-button-div-1-class";
const SCROLL_TO_BOTTOM_BUTTON_DIV_2_CLASS = 'absolute pb-10 mb-2 scroll-to-bottom-button-div-2-class';
const SCROLL_TO_BOTTOM_BUTTON_DIV_3_CLASS = "fixed mx-auto w-full max-w-md scroll-to-bottom-button-div-3-class";
const SCROLL_TO_BOTTOM_BUTTON_FLOAT_CLASS = "w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-gray-300 text-white scroll-to-bottom-button-float-class";
const SCROLL_TO_BOTTOM_BUTTON_ICON_CLASS = "1-mt-3 text-center scroll-to-bottom-button-icon-class";

// FileUploader

const FILE_UPLOADER_DIV_1_CLASS = "file-uploader-div-1-class";
const FILE_UPLOADER_DIV_2_CLASS = "flex items-center file-uploader-div-1-class";
const FILE_UPLOADER_BASE_BUTTON_CLASS = `${BUTTON_LISTING_CLASS} file-uploader-base-button-class`;
const FILE_UPLOADER_BUTTON_CLASS = `border-none mr-2 file-uploader-button-class`;
const FILE_UPLOADER_INPUT_AREA_CONTAINER_CLASS = "flex items-center file-uploader-input-area-container-class";
const FILE_UPLOADER_INPUT_AREA_INPUT_CLASS = "p-0 m-0 file-uploader-input-area-input-class";

// VoiceMessageRecorder

const VOICE_MESSAGE_RECORDER_DIV_1_CLASS = "voice-message-recorder-div-1-class";
const VOICE_MESSAGE_RECORDER_BUTTON_CLASS = `border-none mr-1 mt-1 voice-message-recorder-button-class`;

// ChatBotButton

const CHATBOT_BUTTON_DIV_1_CLASS = "align-middle flex chatbot-button-div-1-class";
const CHATBOT_BUTTON_DIV_2_CLASS = "ml-2 chatbot-button-div-2-class";
const CHATBOT_BUTTON_LLM_POPUP_DIV_1 = "mt-5 chatbot-button-llm-popup-div-1-class";
const CHATBOT_BUTTON_LLM_POPUP_DIV_2 = "chatbot-button-llm-popup-div-2-class";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faMicrophone,
//     faStop,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faMicrophone,
//     faStop,
// );
const GsIcons$8 = gs__namespace.IconsLib.GsIcons;
const dbApiService$3 = gs__namespace.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER$2 = gs__namespace.dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log$1 = gs__namespace.loggingService.console_debug_log;
const formatCaughtError$4 = gs__namespace.errorAndReenter.formatCaughtError;
const toggleIdVisibility$3 = gs__namespace.ui.toggleIdVisibility;
const getMediaTypeToRecord = gs__namespace.media.getMediaTypeToRecord;
const mediaSupported = gs__namespace.media.mediaSupported;
gs__namespace.classNameConstants.BUTTON_LISTING_CLASS;
const debug = false;
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
      if (debug) ;
      if (debug) ;

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
          type: `audio/${mediaType["extension"]}`
        });
        setAudioData(blob);
      };

      // Start recording
      mediaRecorder.start(1000);
    } catch (error) {
      const errorMsgAux = 'Error starting recording:';
      console.error(errorMsg, error);
      setIsRecording(false);
      setErrorMsg(`${errorMsgAux} ${error.message}`);
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
      if (debug) ;
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
    const sendVoiceMessage = async () => {
      if (!audioData) {
        return;
      }
      // Prepare the audit to send to the API
      const formData = new FormData();
      const extension = audioData.type.split('/')[1];
      const fileName = `voiceMessage.${extension}`;
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
        const endpointUrl = `${process.env.REACT_APP_API_URL}/${"ai/voice_to_text"}`;
        await sendFile(endpointUrl, formData, authHeader, query_params);
      } else {
        db.getAll(query_params, formData, 'POST', options).then(data => {
          // Hide WaitAnimation after fetching data
          dispatchWaitAnimation(false, dispatch);
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
      setChatbotErrorMsg(`Error processing the voice message: ${errorMsg}`, dispatch);
    }
  }, [errorMsg, dispatch]);
  return /*#__PURE__*/React.createElement("div", {
    id: id
    // className="voice-recorder"
    ,
    className: VOICE_MESSAGE_RECORDER_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("button", {
    onClick: isRecording ? stopRecording : startRecording,
    className: VOICE_MESSAGE_RECORDER_BUTTON_CLASS,
    title: isRecording ? 'Stop Recording' : 'Start Recording'
  }, /*#__PURE__*/React.createElement(GsIcons$8, {
    icon: isRecording ? 'stop' : 'microphone'
    // size='lg'
    ,
    size: "m",
    additionalIconsFn: iconsLibAiExtras
  })));
};

const formatCaughtError$3 = gs__namespace.errorAndReenter.formatCaughtError;
const dbApiService$2 = gs__namespace.dbService.dbApiService;
const defaultValue = gs__namespace.genericEditorUtilities.defaultValue;
const console_debug_log = gs__namespace.loggingService.console_debug_log;

// Current user

const getCurrentUserId = (state, dispach) => {
  if (typeof state !== "undefined" && state !== null) {
    return state.currentUser.id;
  }
  return null;
};

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
        errorMessage: `Element ${responseAttrName} not found in the API response`
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
      errorMessage: id !== null ? "" : `Missing ID: ${id}`
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
          errorMessage: `Invalid operation type: "${operationType}"`
        };
    }
  } catch (error) {
    response = {
      ok: false,
      errorMessage: error.message
    };
  }
  if (response.ok) {
    response.operationMessage = `${the} ${operationDescription} ${ActionDescription} ${was_successful}`;
  } else {
    response.operationMessage = `${error_in_the} ${operationDescription} ${ActionDescription}`;
    console_debug_log('ApiCall ERROR:');
    console_debug_log(response.operationMessage);
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
  if (typeof externalApiResponse['cid'] !== 'undefined' && state.currentConversationId !== externalApiResponse['cid']) {
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
};
const loadConversationList = async (state, dispatch) => {
  const currentUserId = getCurrentUserId(state);
  const response = ApiCall(dispatch, {
    operationName: "loadConversationList",
    operationDescription: "Conversation list",
    operationType: "getAll",
    endpointUrl: "ai_chatbot_conversations",
    query: {
      user_id: currentUserId
    }
  });
  return response;
};
const fetchConversations = async (state, dispatch) => {
  const apiResponse = await loadConversationList(state, dispatch);
  if (apiResponse.ok) {
    dispatch({
      type: 'SET_CONVERSATIONS',
      payload: apiResponse.response
    });
  }
  return apiResponse;
};
const fetchOneConversation = async (conversationId, state, dispatch) => {
  const apiResponse = await loadConversation(conversationId, state, dispatch);
  if (apiResponse.ok) {
    const data = {
      conversationId: conversationId,
      messages: apiResponse.response.messages
    };
    dispatch({
      type: 'SET_MESSAGES',
      payload: data
    });
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

const loadConversation = async (conversationId, state, dispatch) => {
  const currentUserId = getCurrentUserId(state);
  const response = ApiCall(dispatch, {
    operationName: "loadConversation (one)",
    operationDescription: "Conversation",
    operationType: "getOne",
    endpointUrl: "ai_chatbot_conversations",
    query: {
      user_id: currentUserId,
      id: conversationId
    }
  });
  return response;
};
const deleteConversation = async (conversationId, state, dispatch) => {
  const currentUserId = getCurrentUserId(state);
  const response = ApiCall(dispatch, {
    operationName: "deleteConversation",
    operationDescription: "Conversation",
    operationType: "deleteRow",
    id: conversationId,
    endpointUrl: "ai_chatbot_conversations",
    query: {
      user_id: currentUserId
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

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faArrowUp,
//     faTimes,
//     faPaperclip, // Added clip icon
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faArrowUp, // Select file + Upload
//     faTimes, // Close
//     faPaperclip, // Added clip icon
// );
const GsIcons$7 = gs__namespace.IconsLib.GsIcons;
const dbApiService$1 = gs__namespace.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER$1 = gs__namespace.dbService.MULTIPART_FORM_DATA_HEADER;
gs__namespace.loggingService.console_debug_log;
const formatCaughtError$2 = gs__namespace.errorAndReenter.formatCaughtError;
const toggleIdVisibility$2 = gs__namespace.ui.toggleIdVisibility;
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
        // Current conversation updated successfully
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
      if (useAxios) {
        const authHeader = gs__namespace.authHeader.authHeader();
        const endpointUrl = `${process.env.REACT_APP_API_URL}/${"ai/image_to_text"}`;
        await sendFile(endpointUrl, formData, authHeader, query);
      } else {
        const db = new dbApiService$1({
          url: "ai/image_to_text"
        });
        db.getAll(query, formData, 'POST', options).then(data => {
          dispatchWaitAnimation(false, dispatch);
          // addMessageToConversation(data.response, "assistant", dispatch);
          checkConversationIdChange(state, dispatch, data).then(() => {
            // Current conversation updated successfully
          }, error => {
            error = formatCaughtError$2(error);
            setChatbotErrorMsg(error.message, dispatch);
          });
          setSelectedFile(null);
          setButtonToggle(false);
        }, errorRaw => {
          // Hide WaitAnimation after the error
          const error = formatCaughtError$2(errorRaw);
          dispatchWaitAnimation(false, dispatch);
          console.error('Error uploading the file:', error);
          // setExternalErrorMsg(error.message);
          setChatbotErrorMsg(error.message, dispatch);
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
    className: FILE_UPLOADER_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: FILE_UPLOADER_DIV_2_CLASS
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setButtonToggle(buttonToggle ? false : true),
    className: FILE_UPLOADER_BUTTON_CLASS,
    title: buttonToggle ? 'Close' : 'Select File'
  }, /*#__PURE__*/React.createElement(GsIcons$7, {
    icon: buttonToggle ? 'times' : 'paperclip'
    // size='lg'
    ,
    size: "m",
    additionalIconsFn: iconsLibAiExtras
  })), buttonToggle && /*#__PURE__*/React.createElement("div", {
    className: FILE_UPLOADER_INPUT_AREA_CONTAINER_CLASS
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: fileTypeFilter ? fileTypeFilter : "*",
    onChange: handleFileChange,
    className: FILE_UPLOADER_INPUT_AREA_INPUT_CLASS
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleUpload
    // className={`${BUTTON_LISTING_CLASS}`}
    ,
    className: FILE_UPLOADER_BASE_BUTTON_CLASS,
    title: "Submit"
  }, /*#__PURE__*/React.createElement(GsIcons$7, {
    icon: "arrow-up",
    size: "lg",
    additionalIconsFn: iconsLibAiExtras
  })))));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

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

var css_248z = "/*\n.video-container {\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n}\n\n.video-container video {\n  width: 100%;\n  height: auto;\n}\n*/\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: rgba(0, 0, 0, 0.5); /* Adjust the background color and opacity as needed */\n}\n\n.overlay button {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #007bff; /* Button background color */\n  color: #fff; /* Button text color */\n  border: none;\n  cursor: pointer;\n}\n\n.overlay button:hover {\n  background-color: #0056b3; /* Button background color on hover */\n}\n";
styleInject(css_248z);

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faArrowUp,
//     faTimes,
//     faCamera, // Camera
//     faCameraRetro, // Icon for taking the photo
//     faExchangeAlt, // Icon for interchange
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faArrowUp, // Arrow-up: to select file + perform the upload
//     faTimes, // X: to close the component controls
//     faCamera, // Camera
//     faCameraRetro, // Icon for taking the photo
//     faExchangeAlt, // Icon for interchange
// );
const GsIcons$6 = gs__namespace.IconsLib.GsIcons;
const dbApiService = gs__namespace.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER = gs__namespace.dbService.MULTIPART_FORM_DATA_HEADER;
gs__namespace.loggingService.console_debug_log;
const formatCaughtError$1 = gs__namespace.errorAndReenter.formatCaughtError;
// const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;
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
    const fileName = `image_capture_${timestamp}.${fileExtension}`;
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
        // Current conversation updated successfully
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
    className: CAMERA_COMPONENT_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CAMERA_COMPONENT_DIV_2_CLASS
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
    className: CAMERA_COMPONENT_BUTTON_MAIN_CLASS,
    title: buttonToggle ? 'Close' : 'Start Camera'
  }, /*#__PURE__*/React.createElement(GsIcons$6, {
    icon: buttonToggle ? 'times' : 'camera'
    // size='lg'
    ,
    size: "m",
    additionalIconsFn: iconsLibAiExtras
  })), buttonToggle && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => cameraOnOff(!cameraOn),
    className: CAMERA_COMPONENT_BUTTON_SUB_CLASS,
    title: "Start Camera"
  }, /*#__PURE__*/React.createElement(GsIcons$6, {
    icon: "camera-retro",
    size: "lg",
    additionalIconsFn: iconsLibAiExtras
  })), /*#__PURE__*/React.createElement("button", {
    onClick: sendPhoto,
    className: CAMERA_COMPONENT_BUTTON_SUB_CLASS,
    title: "Send Photo"
  }, /*#__PURE__*/React.createElement(GsIcons$6, {
    icon: "arrow-up",
    size: "lg",
    additionalIconsFn: iconsLibAiExtras
  })), photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "Captured",
    className: CAMERA_COMPONENT_PHOTO_CLASS,
    style: {
      width: '30px',
      height: '30px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: CAMERA_COMPONENT_VIDEO_CONTAINER_CLASS
  }, cameraOn && /*#__PURE__*/React.createElement(ModalPopUp, {
    closeButtonAction: () => cameraOnOff(!cameraOn),
    secondButtonMessage: "Change Front/Back",
    secondButtonAction: toggleCamera,
    primaryButtonMessage: "Take Photo",
    primaryButtonAction: takePhoto,
    allowOnHide: false
  }, /*#__PURE__*/React.createElement("video", {
    className: CAMERA_COMPONENT_VIDEO_CLASS,
    ref: videoRef,
    autoPlay: true,
    playsInline: true
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: CAMERA_COMPONENT_VIDEO_CANVAS_CLASS,
    style: photo ? VIDEO_ON : VIDEO_OFF
  }))))));
};

/*
Warning: Failed prop type: Invalid prop `size` of value `m` supplied to `FontAwesomeIcon`,
expected one of ["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].
*/

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faGreaterThan,
//     faStop,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faGreaterThan,
//     faStop,
// );
const GsIcons$5 = gs__namespace.IconsLib.GsIcons;
const useAppContext$3 = gs__namespace.AppContext.useAppContext;
const resizeManager = gs__namespace.ui.resizeManager;
gs__namespace.loggingService.console_debug_log;
const convertId$2 = gs__namespace.dbService.convertId;
const usePlainFetch$1 = gs__namespace.responseHandlersService.usePlainFetch;
gs__namespace.ui.growUpTextArea;
gs__namespace.ui.resetTextArea;
const toggleIdVisibility = gs__namespace.ui.toggleIdVisibility;
const formatCaughtError = gs__namespace.errorAndReenter.formatCaughtError;
const WaitAnimation = gs__namespace.waitAnimationUtility.WaitAnimation;
const getFilenameFromContentDisposition = gs__namespace.blobFilesUtilities.getFilenameFromContentDisposition;
const responseHasFile = gs__namespace.blobFilesUtilities.responseHasFile;
/* <UserInput>.userInputViewportHeight must be the same as ".conversation-block.height" in ChatBot.css */
/* 81 for 81vh, 78 for 78vh, an so on */
const userInputMaxOffsetHeight = 200;
const setConversationBlockHeight = () => {
  // Get the conversation block element
  const conversationBlockObj = document.getElementById('conversation-block');
  // Get the chatbot main container element
  const chatbotContainerObj = document.getElementById('chatbot-container');
  // Get the input area container element
  const chatbotInputAreaObj = document.getElementById('chatbot-input-area');
  // Assign the height of the main container to the chatbot container
  if (chatbotInputAreaObj) {
    conversationBlockObj.style.height = `${chatbotContainerObj.offsetHeight - chatbotInputAreaObj.offsetHeight - 10}px`;
  }
};
const getWindowMaxHeight = () => {
  const windowHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight);
  return windowHeight;
};
const setChatBotContainerHeight = () => {
  // Get the chatbot main container element
  const chatbotContainerObj = document.getElementById('chatbot-container');
  if (!chatbotContainerObj || typeof chatbotContainerObj["parentElement"] === "undefined") {
    return;
  }
  // Get the <main /> tag element
  const mainContainerObj = chatbotContainerObj.parentElement;
  const mainContainerHeight = mainContainerObj ? mainContainerObj.id === "root" ? getWindowMaxHeight() : mainContainerObj.offsetHeight : getWindowMaxHeight();
  // Get the <footer /> html tag element
  document.getElementsByTagName('footer');
  // const footerHeight = (sideMenu ? (footerObj && footerObj[0] ? footerObj[0].offsetHeight : 0) : 5);
  const footerHeight = 5;
  // Assign the height of the chatbot container to the main container minus the footer height
  chatbotContainerObj.style.height = `${mainContainerHeight - footerHeight}px`;
};
const setTextAreaHeight = () => {
  // Adjust text area size
  {
    const user_input = document.getElementById("user_input");
    if (user_input) {
      user_input.style.height = 'auto';
      user_input.style.height = `${Math.min(user_input.scrollHeight, userInputMaxOffsetHeight)}px`;
    }
  }
};
const resizeAll = () => {
  setChatBotContainerHeight();
  setTextAreaHeight();
  setConversationBlockHeight();
};
const UserInput = _ref => {
  let {
    dispatch,
    state,
    userQuestion // state.inputMessage
  } = _ref;
  const {
    theme,
    isWide,
    isDarkMode,
    sideMenu
  } = useAppContext$3();
  const [inputMessage, setInputMessage] = React.useState(userQuestion);
  const [updateSize, setUpdateSize] = React.useState(false);
  React.useEffect(() => {
    resizeAll();
  }, []);
  React.useEffect(() => {
    const resizer = resizeManager(() => {
      resizeAll();
    });
    resizer.addListener();
    return () => resizer.removeListener();
  }, []);
  React.useEffect(() => {
    setInputMessage(state.inputMessage);
  }, [state.inputMessage]);
  React.useEffect(() => {
    setTextAreaHeight();
  }, [updateSize, inputMessage]);

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
    } else {
      setInputMessage(e.target.value);
    }
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
            // Current conversation updated successfully
          }, error => {
            console.error('>> Error updating current conversation:', error);
            error = formatCaughtError(error);
            setChatbotErrorMsg(error.message, dispatch);
          });
        }
      } else {
        // botReply.ok is not OK...
        let errorToReport = botReply.errorMessage;
        console.error('>> Error communicating with the bot:', errorToReport);

        // Refresh the conversation list on any error...
        fetchConversations(state, dispatch).then(apiResponse => {
          if (!apiResponse.ok) {
            errorToReport = `\n\nAditionally, refreshing the conversations list: ${apiResponse.errorMessage}`;
          } else {
            // Try to refresh current conversation from botReply.response
            let cid = state.currentConversationId;
            if (cid === null) {
              // New conversation... try to get the first element of the refreshed conversation list
              if (state.conversations.length > 0) {
                // There are conversations in the list...
                if (apiResponse.response[0].title === newInputMessage) {
                  // Now we are sure the 1st conversation corresponds to the updated current conversation
                  // because the 1st conversation title is the same as the 1st message content
                  cid = convertId$2(apiResponse.response[0]._id);
                  dispatch({
                    type: 'SET_CONVERSATION_ID',
                    payload: cid
                  });
                }
              }
            }
            if (cid !== null) {
              fetchOneConversation(cid, state, dispatch).then(() => {
                // Current conversation updated successfully
                resizeAll();
              }, error => {
                error = formatCaughtError(error);
                console.error('>> UserInput current conversation update error:', error);
                errorToReport = `\n\nAditionally, reading current conversation: ${error}`;
              });
            }
          }
        }, error => {
          errorToReport = `\n\nAditionally: ${error}`;
        });
        setChatbotErrorMsg(errorToReport, dispatch);
      }
      toggleIdVisibility("on", extControlsToShowHide);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "chatbot-input-area",
    className: `${CHATBOT_INPUT_AREA_DIV_1_CLASS} ${theme.background}`
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_INPUT_AREA_DIV_2_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_INPUT_AREA_DIV_3_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_INPUT_AREA_DIV_4_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_INPUT_AREA_DIV_5_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_INPUT_AREA_DIV_61_CLASS
  }), /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_INPUT_AREA_DIV_62_CLASS
  }, /*#__PURE__*/React.createElement("textarea", {
    name: "user_input",
    id: "user_input",
    value: inputMessage,
    className: `${CHATBOT_INPUT_AREA_TEXTAREA_CLASS} ${theme.input} ${isDarkMode ? CHATBOT_INPUT_AREA_TEXTAREA_DM_CLASS : CHATBOT_INPUT_AREA_TEXTAREA_LM_CLASS}`,
    "aria-label": "Message AI Assistant...",
    rows: "1",
    onChange: handleInputChange
    // onKeyDown={(event) => {
    //     if (event.key === 'Enter') {
    //         // setInputMessage(event.target.value);
    //         sendMessage();
    //     }
    // }}
    ,
    disabled: state && state.isApiProcessing
  }), /*#__PURE__*/React.createElement("button", {
    name: "user_input_submit",
    id: "user_input_submit",
    onClick: () => state && state.isApiProcessing ? handleCancelProcessing(dispatch) : sendMessage(),
    className: CHATBOT_INPUT_AREA_BUTTON_CLASS,
    title: state && state.isApiProcessing ? 'Stop Processing' : 'Chat with AI Assistant'
  }, /*#__PURE__*/React.createElement(GsIcons$5
  // icon={state && state.isApiProcessing ? 'stop' : 'greater-than'}
  , {
    icon: state && state.isApiProcessing ? 'stop' : 'arrow-up',
    size: "lg",
    additionalIconsFn: iconsLibAiExtras
  })), /*#__PURE__*/React.createElement(VoiceMessageRecorder, {
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
    className: CHATBOT_INPUT_AREA_WAIT_ANIMATION_CLASS
  }, /*#__PURE__*/React.createElement(WaitAnimation, null)), resizeAll()))))));
};

// import './ChatBot.css';

// const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;
// //const INPUT_FLEXIBLE_CLASS = gs.classNameConstants.INPUT_FLEXIBLE_CLASS;

const GsIcons$4 = gs__namespace.IconsLib.GsIcons;

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
  return /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_NEW_CONVERSATION_BUTTON_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("span", {
    className: CHATBOT_NEW_CONVERSATION_BUTTON_SPAN_CLASS
  }, /*#__PURE__*/React.createElement("button", {
    key: "new-conversation-button",
    onClick: () => startNewConversation()
    // className={`${BUTTON_LISTING_CLASS} text-xs mb-2`}
    ,
    className: CHATBOT_NEW_CONVERSATION_BUTTON_CLASS
  }, /*#__PURE__*/React.createElement(GsIcons$4, {
    icon: 'new-conversation',
    size: "lg",
    additionalIconsFn: iconsLibAiExtras
  }))));
};

// import './ChatBot.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faTrash,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faTrash,
// );
const GsIcons$3 = gs__namespace.IconsLib.GsIcons;
const convertId$1 = gs__namespace.dbService.convertId;
gs__namespace.loggingService.console_debug_log;
const timestampToDate = gs__namespace.dateTimestamp.timestampToDate;
const useAppContext$2 = gs__namespace.AppContext.useAppContext;
const HIDDEN_CLASS$1 = gs__namespace.classNameConstants.HIDDEN_CLASS;

// const dateColumn = "creation_date";
const dateColumn = "update_date";
const ConversationList = _ref => {
  let {
    state,
    dispatch,
    showSideBar
  } = _ref;
  const {
    theme,
    isWide,
    isDarkMode
  } = useAppContext$2();
  const setErrorMsg = errorMsg => {
    dispatch({
      type: 'SET_ERROR_MSG',
      payload: errorMsg
    });
  };
  const h2_class = `${CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_2_CLASS} ${theme.isDarkMode ? CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_DM_CLASS : CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_LM_CLASS}`;

  // Handle load conversation
  const handleLoadConversation = async (conversationId, state, dispatch) => {
    if (!showSideBar) {
      return;
    }
    const apiResponse = await loadConversation(conversationId, state, dispatch);
    if (apiResponse.ok) {
      const data = {
        conversationId: conversationId,
        messages: apiResponse.response.messages
      };
      dispatch({
        type: 'SET_MESSAGES',
        payload: data
      });
    } else {
      setErrorMsg(apiResponse.errorMessage);
    }
  };
  const confirmDeleteConversation = async (conversationId, dispatch, title) => {
    if (window.confirm(`'Are you sure you want to delete this conversation?\n\n${title}`)) {
      handleDeleteConversation(conversationId, dispatch);
    }
  };

  // Handle delete conversation
  const handleDeleteConversation = async (conversationId, dispatch) => {
    const startNew = conversationId === state.currentConversationId;
    const apiResponse = await deleteConversation(conversationId, state, dispatch);
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
        key: `${convId}_main_div`,
        className: CHATBOT_CONVERSATION_ITEM_DIV_1_CLASS,
        onMouseOver: () => {
          const element = document.getElementById(`${convId}_options`);
          if (element) {
            element.style.display = 'block';
          }
        },
        onMouseOut: () => {
          const element = document.getElementById(`${convId}_options`);
          if (element) {
            element.style.display = 'none';
          }
        }
      }, /*#__PURE__*/React.createElement("div", {
        key: `${convId}_inner_div`,
        className: CHATBOT_CONVERSATION_ITEM_DIV_2_CLASS
      }, /*#__PURE__*/React.createElement("div", {
        key: `${convId}_desc_outter_div`,
        className: `${CHATBOT_CONVERSATION_ITEM_DESC_OUTTER_CLASS} ${theme.textHoverSide}`,
        onClick: () => handleLoadConversation(convId, state, dispatch)
      }, /*#__PURE__*/React.createElement("button", {
        key: `${convId}_desc_button`,
        title: timestampToDate(conversation[dateColumn], true, " ", false)
      }, /*#__PURE__*/React.createElement("div", {
        key: `${convId}_desc_inner_div`,
        className: CHATBOT_CONVERSATION_ITEM_DESC_INNER_CLASS
      }, fixTitle(conversation.title))))), /*#__PURE__*/React.createElement("div", {
        id: `${convId}_options`,
        className: HIDDEN_CLASS$1
      }, /*#__PURE__*/React.createElement("div", {
        className: CHATBOT_CONVERSATION_ITEM_SEPARATOR_CLASS
      }), /*#__PURE__*/React.createElement("div", {
        key: `${convId}_delete_div`
        // className={`${CHATBOT_CONVERSATION_ITEM_DELETE_DIV_CLASS} ${theme.textHoverSide}`}
        ,
        className: CHATBOT_CONVERSATION_ITEM_DELETE_DIV_CLASS
      }, /*#__PURE__*/React.createElement("button", {
        key: `${convId}_delete_button`,
        type: "button",
        onClick: () => confirmDeleteConversation(convId, dispatch, conversation.title),
        className: CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS
        // className={`${CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS} ${theme.textHoverSide}`}
      }, /*#__PURE__*/React.createElement(GsIcons$3, {
        icon: "trash",
        size: "xs"
      })))));
    });
  };
  if (!(state && state.conversations)) {
    return null;
  }
  const groupedConversations = groupConversationsByDate(state.conversations);
  return /*#__PURE__*/React.createElement("div", {
    key: "conversation_list_main_div"
    // style={{ display: (state.conversationListToggle ? '' : 'none') }}
    ,
    className: state.conversationListToggle ? '' : HIDDEN_CLASS$1
  }, groupedConversations.today.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "today",
    className: CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("h2", {
    className: h2_class
  }, "Today"), renderConversations(groupedConversations.today)), groupedConversations.yesterday.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "yesterday",
    className: CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("h2", {
    className: h2_class
  }, "Yesterday"), renderConversations(groupedConversations.yesterday)), groupedConversations.lastSevenDays.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "lastSevenDays",
    className: CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("h2", {
    className: h2_class
  }, "Last 7 Days"), renderConversations(groupedConversations.lastSevenDays)), groupedConversations.lastMonth.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: "lastMonth",
    className: CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("h2", {
    className: h2_class
  }, "Last Month"), renderConversations(groupedConversations.lastMonth)), Object.keys(groupedConversations.older).map(monthYear => /*#__PURE__*/React.createElement("div", {
    key: "month_year_" + monthYear,
    className: CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("h2", {
    className: h2_class
  }, monthYear), renderConversations(groupedConversations.older[monthYear]))));
};

// import './ChatBot.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faGreaterThan,
//     faLessThan,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faGreaterThan,
//     faLessThan,
// );

const GsIcons$2 = gs__namespace.IconsLib.GsIcons;
// const ToggleSideBar = gs.NavLib.ToggleSideBar;
gs__namespace.loggingService.console_debug_log;
const ConversationsToggleButton = _ref => {
  let {
    id,
    className,
    state,
    dispatch
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    key: id,
    className: CHATBOT_CONVERSATIONS_TOGGLE_BUTTON_CLASS + " " + (className ?? ''),
    onClick: () => setConversationListToggle(!state.conversationListToggle, dispatch)
  }, /*#__PURE__*/React.createElement(GsIcons$2, {
    icon: 'conversation-list-toggle',
    size: "lg",
    additionalIconsFn: iconsLibAiExtras
  })));
};

// import './AudioPlayer.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faPlay,
//     faStop,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faPlay,
//     faStop,
// );
gs__namespace.IconsLib.GsIcons;
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
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
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
    }, `Audio file expired${errorMsgSuffix}`);
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

// import "./ScrollToBottomButton.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faArrowDown,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faArrowDown,
// );

const GsIcons$1 = gs__namespace.IconsLib.GsIcons;
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
    },
    className: SCROLL_TO_BOTTOM_BUTTON_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: SCROLL_TO_BOTTOM_BUTTON_DIV_2_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: SCROLL_TO_BOTTOM_BUTTON_DIV_3_CLASS
  }, /*#__PURE__*/React.createElement("button", {
    onClick: scrollToBottom,
    className: SCROLL_TO_BOTTOM_BUTTON_FLOAT_CLASS
  }, /*#__PURE__*/React.createElement("i", {
    // className="a fa-plus my-float"
    className: SCROLL_TO_BOTTOM_BUTTON_ICON_CLASS
  }, /*#__PURE__*/React.createElement(GsIcons$1, {
    icon: "arrow-down",
    size: "lg",
    additionalIconsFn: iconsLibAiExtras
  }))))));
};
const showButton = element =>
// 'visible' and 'hidden' cannot be VISIBLE_CLASS and HIDDEN_CLASS constants, should remain as those fixed strings...
element && element.scrollHeight > element.scrollTop + element.clientHeight ? 'visible' : 'hidden';

gs__namespace.ui.LinkifyText;
const CopyButton = gs__namespace.ui.CopyButton;
const renderMarkdownContent = gs__namespace.ui.renderMarkdownContent;
const ChatCodeBlock = _ref => {
  let {
    children,
    shType = "prism"
  } = _ref;
  // Regular expression to match code blocks enclosed in ```
  const codeRegex = /```([\s\S]*?)```/g;

  // Split content into parts with and without code blocks
  const parts = children.split(codeRegex);
  return /*#__PURE__*/React.createElement(React.Fragment, null, parts.map((part, index) => {
    if (index % 2 === 0) {
      // Render non-code parts as markdown text
      // If part constains [] and (), return <LinkifyText ... />, else, call renderMarkdownContent()
      // if (part.includes('[') && part.includes(']') && part.includes('(') && part.includes(')')) {
      //     return (
      //         <LinkifyText key={`${index}-other`}>
      //             <i>{part}</i>
      //         </LinkifyText>
      //     );
      // }
      return /*#__PURE__*/React.createElement(React.Fragment, null, renderMarkdownContent(part));
    } else {
      // Handle code blocks
      let content = part.trim();
      let language = content.split('\n')[0];

      // Special handling for plaintext
      if (language === 'plaintext') {
        content = content.substring(language.length + 1).trim();
        return /*#__PURE__*/React.createElement("div", {
          key: `${index}-plaintext`
        }, renderMarkdownContent(content));
      }
      content = content.substring(language.length + 1).trim();
      return /*#__PURE__*/React.createElement("div", {
        key: `${index}-content-wrapper`
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("div", {
        key: `${index}-language`,
        style: {
          backgroundColor: 'rgb(30, 30, 30)',
          color: 'wheat',
          marginTop: '10px',
          padding: '10px',
          overflowX: 'auto'
        }
      }, language), /*#__PURE__*/React.createElement("div", {
        key: `${index}-content`
      }, shType === "prism" ? /*#__PURE__*/React.createElement(reactSyntaxHighlighter.Prism, {
        language: language,
        style: index_js.vscDarkPlus,
        wrapLongLines: true
      }, content) : /*#__PURE__*/React.createElement(reactSyntaxHighlighter.Light, {
        language: language,
        style: index_js$1.grayscale,
        wrapLongLines: true
      }, content), /*#__PURE__*/React.createElement(CopyButton, {
        text: content
      }))));
    }
  }));
};

// import './ChatBot.css';

const useAppContext$1 = gs__namespace.AppContext.useAppContext;
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
    handleRetry
  } = _ref;
  const {
    theme,
    isWide,
    isDarkMode
  } = useAppContext$1();
  const getStyleClasses = () => ({
    "userMessage": `${theme.text} ${CHATBOT_USER_MESSAGE_CLASS} ${isDarkMode ? CHATBOT_USER_MESSAGE_DM_CLASS : CHATBOT_USER_MESSAGE_LM_CLASS}`,
    "userMessageContainer": CHATBOT_USER_MESSAGE_CONTAINER_CLASS,
    "botMessage": `${theme.label} ${CHATBOT_BOT_MESSAGE_CLASS} ${isDarkMode ? CHATBOT_BOT_MESSAGE_DM_CLASS : CHATBOT_BOT_MESSAGE_LM_CLASS}`,
    "botMessageContainer": CHATBOT_BOT_MESSAGE_CONTAINER_CLASS
  });
  const [elementsToRender, setElementsToRender] = React.useState('');
  const [styleClass, setStyleClass] = React.useState(getStyleClasses());
  React.useEffect(() => {
    setStyleClass(getStyleClasses());
  }, [theme, isDarkMode]);
  const formatMessage = messageObject => {
    let message = messageObject.content;
    const hasDownloadFileToken = message && message.includes("[SEND_FILE_BACK]");
    const downloadedFilename = hasDownloadFileToken ? message.replace("[SEND_FILE_BACK]=", "").split('/').pop() : null;
    const url = typeof messageObject.attachment_url !== "undefined" ? messageObject.attachment_url : null;
    const hasAttachment = url !== null || hasDownloadFileToken;
    let filename = typeof messageObject.filename !== "undefined" ? messageObject.filename : downloadedFilename;
    const extension = filename ? getFileExtension(filename) : null;
    let errorMsgSuffix = usePlainFetch ? " (No headers allowed)" : "";
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
          }, (['wav', 'mp3'].includes(extension.toLowerCase()) ? "Audio file link" : "Link") + ` expired...${errorMsgSuffix}`);
        }
        // Link to download the file calling the performDownload function   
        return /*#__PURE__*/React.createElement("button", {
          className: INFO_MSG_CLASS,
          onClick: e => {
            e.preventDefault();
            performDownload(url, filename);
          }
        }, (message ? message : `Click here to download the "${filename}" file`) + errorMsgSuffix);
      }
    }
    if (hasAttachment || message && message.startsWith('```File')) {
      if (message && message.startsWith('```')) {
        message = message.substring(3, message.length - 3);
        const firstWord = message.split(' ')[0];
        message = message.substring(firstWord.length + 1).trim();
      }
      if (hasAttachment && !message) {
        if (!filename) {
          filename = defaultDownloadFilename;
          errorMsgSuffix += (errorMsgSuffix.trim() === '' ? '' : '.') + ' WARNING: no file name received. Fix the Backend API to send headers.';
        }
        message = filename;
      }
      return /*#__PURE__*/React.createElement("div", {
        className: CHATBOT_FORMAT_MESSAGE_DIV_1_CLASS
      }, /*#__PURE__*/React.createElement("div", {
        className: CHATBOT_FORMAT_MESSAGE_DIV_2_CLASS
      }, hasAttachment && /*#__PURE__*/React.createElement("a", {
        href: messageObject.attachment_url,
        target: "_blank",
        rel: "noreferrer",
        className: CHATBOT_FORMAT_MESSAGE_ATTACHMENT_MESSAGE_CLASS
      }, message + errorMsgSuffix), !hasAttachment && /*#__PURE__*/React.createElement(React.Fragment, null, message + errorMsgSuffix)), hasAttachment && ['jpg', 'jpeg', 'gif', 'png', 'svg', 'bmp', 'webp', 'tiff'].includes(String(getFileExtension(messageObject.attachment_url)).toLowerCase()) && /*#__PURE__*/React.createElement("div", {
        className: CHATBOT_FORMAT_MESSAGE_ATTACHMENT_IMAGE_DIV_CLASS
      }, /*#__PURE__*/React.createElement("img", {
        className: CHATBOT_FORMAT_MESSAGE_ATTACHMENT_IMAGE_IMG_CLASS,
        src: messageObject.attachment_url,
        alt: `Attachment: ${message}`,
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
      // Remove the plaintext markers if they're at the start/end of the message
      if (message.startsWith('```plaintext```')) {
        message = message.substring('```plaintext```'.length);
      }
    }

    // If there are no code blocks, wrap the content in plaintext markers
    if (!message.includes('```')) {
      message = '```plaintext\n' + message + '\n```';
    }
    return /*#__PURE__*/React.createElement(ChatCodeBlock, {
      shType: shType
    }, message);
  };
  React.useEffect(() => {
    setElementsToRender(state.messages.map((message, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      className: `${CHATBOT_MESSAGE_CLASS} ${message.role === 'user' ? styleClass.userMessageContainer : styleClass.botMessageContainer}`
    }, /*#__PURE__*/React.createElement("div", {
      className: message.role === 'user' ? styleClass.userMessage : styleClass.botMessage
    }, formatMessage(message)))));
  }, [state.messages]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: id ? id : "conversation-block",
    className: `${CHATBOT_MESSAGE_BLOCK_CLASS} ${theme.background}`
  }, state && !state.errorMsg && state.messages && elementsToRender), /*#__PURE__*/React.createElement(ScrollToBottomButton, {
    elementId: id ? id : "conversation-block",
    elementsToRender: elementsToRender
  }), /*#__PURE__*/React.createElement(GoToTheBottom, {
    elementId: id ? id : "conversation-block",
    elementsToRender: elementsToRender
  }));
};

const convertId = gs__namespace.dbService.convertId;
gs__namespace.loggingService.console_debug_log;
const isMobileDevice = gs__namespace.ui.isMobileDevice;
const getUrlParams = gs__namespace.urlParams.getUrlParams;
const errorAndReEnter = gs__namespace.errorAndReenter.errorAndReEnter;
const useUser = gs__namespace.UserContext.useUser;
const useAppContext = gs__namespace.AppContext.useAppContext;
const HIDDEN_CLASS = gs__namespace.classNameConstants.HIDDEN_CLASS;
const isWindowWide = gs__namespace.ui.isWindowWide;
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
    case 'SET_MESSAGES':
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

    // Current user

    case 'SET_CURRENT_USER':
      return {
        ...state,
        // Payload has the currentUser data
        currentUser: action.payload
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
  const {
    currentUser
  } = useUser();
  const {
    theme,
    isWide,
    isDarkMode,
    sideMenu,
    setIsWide
  } = useAppContext();
  const [state, dispatch] = React.useReducer(chatReducer, {
    messages: [],
    conversations: [],
    currentConversationId: null,
    isApiProcessing: false,
    isTyping: false,
    inputMessage: userQuestion,
    // conversationListToggle: false, // conversation history sidebar off by default always
    conversationListToggle: !isMobileDevice(),
    // conversation history sidebar on by default in desktop
    errorMsg: null,
    currentUser: currentUser
  });
  const columnSizeList = () => showSideBar && state.conversationListToggle ? isMobileDevice() ? '60%' : '20%' : "0%";

  // If there's an initial UserQuestion, send it inmediatelly to the LLM
  // useEffect(() => {
  //     if (userQuestion !== '') {
  //         sendMessage(userQuestion);
  //     }
  // }, [userQuestion, sendMessage]);

  const handleClose = e => {
    setChatbotErrorMsg(null, dispatch);
    resizeAll();
  };
  const handleRetry = e => {
    if (state && state.messages) {
      const lastUserMessage = state.messages.slice().reverse().find(message => message.role === 'user' && message.content !== '');
      if (typeof lastUserMessage !== "undefined" && lastUserMessage !== null && typeof lastUserMessage["content"] !== "undefined") {
        setChatbotInputMessage(lastUserMessage.content, dispatch);
      }
    }
    setChatbotErrorMsg(null, dispatch);
    resizeAll();
  };

  // Load conversations
  React.useEffect(() => {
    resizeAll();
    fetchConversations(state, dispatch).then(apiResponse => {
      if (!apiResponse.ok) {
        setChatbotErrorMsg(apiResponse.errorMessage, dispatch);
      }
    }, error => setChatbotErrorMsg(error, dispatch));
    return () => {
      // Cleanup
      if (sideMenu) {
        // Restore the side menu "slide" condition
        setIsWide(isWindowWide());
      }
    };
  }, []);
  React.useEffect(() => {
    dispatch({
      type: 'SET_CURRENT_USER',
      payload: currentUser
    });
  }, [currentUser]);
  React.useEffect(() => {
    if (sideMenu) {
      // Set the side menu to "slide" as it's in mobile device mode
      setIsWide(false);
    } else {
      setIsWide(isWindowWide());
    }
  }, [sideMenu]);
  return /*#__PURE__*/React.createElement("div", {
    id: "chatbot-container",
    className: `${CHATBOT_CONTAINER_DIV_1_CLASS} ${theme.background}`
  }, state.errorMsg && /*#__PURE__*/React.createElement(React.Fragment, null, errorAndReEnter(state.errorMsg, null, null, handleRetry, null, false, true, handleClose)), !(showSideBar && state.conversationListToggle) && /*#__PURE__*/React.createElement(ConversationsToggleButton, {
    id: "conversations-toggle-button-1",
    className: CHATBOT_CONVERSATIONS_HIDDEN_TOGGLE_BUTTON_CLASS,
    state: state,
    dispatch: dispatch
  }), /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_CONVERSATIONS_LIST_DIV_1_CLASS + (showSideBar && state.conversationListToggle ? '' : HIDDEN_CLASS),
    style: {
      width: columnSizeList()
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_CONVERSATIONS_LIST_DIV_2_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_CONVERSATIONS_LIST_DIV_3_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_CONVERSATIONS_LIST_DIV_4_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_CONVERSATIONS_LIST_ROW_1_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement(ConversationsToggleButton, {
    id: "conversations-toggle-button-2",
    className: showSideBar ? '' : HIDDEN_CLASS,
    state: state,
    dispatch: dispatch
  }), /*#__PURE__*/React.createElement(NewConversationButton, {
    dispatch: dispatch
  })), /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_CONVERSATIONS_LIST_ROW_2_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement(ConversationList, {
    state: state,
    dispatch: dispatch,
    showSideBar: showSideBar
  })))))), /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_MESSAGE_AREA_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    className: CHATBOT_MESSAGE_AREA_DIV_2_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_MESSAGE_AREA_DIV_3_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    id: "message-area",
    className: CHATBOT_MESSAGE_AREA_DIV_4_CLASS
    // style={{ width: columnSizeMessages() }}
  }, /*#__PURE__*/React.createElement(ConversationBlock, {
    id: "conversation-block",
    state: state,
    handleRetry: handleRetry
  }), /*#__PURE__*/React.createElement(UserInput, {
    state: state,
    dispatch: dispatch,
    userQuestion: state.inputMessage
  }))))));
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

// const imageDirectory = gs.generalConstants.imageDirectory;
// const sparkIcon = gs.spark;
// Does not work:
// import SparkIcon from "../../images/spark.svg";
const GsIcons = gs__namespace.IconsLib.GsIcons;
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
        window.open(window.location.origin + '/chatbot?menu=0&ssb=0&q=' + setPrompt(chatbot_prompt, inputValue), 'AppChatbotPopUp', 'height=600,width=400');
      }
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_BUTTON_DIV_1_CLASS
  }, /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_BUTTON_DIV_2_CLASS
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSparkClick
  }, /*#__PURE__*/React.createElement(GsIcons, {
    icon: "spark",
    alt: "Open AI Assistant"
  })))), showLLMPopup && /*#__PURE__*/React.createElement("div", {
    className: CHATBOT_BUTTON_LLM_POPUP_DIV_1
  }, /*#__PURE__*/React.createElement("div", {
    // className="llm-popup"
    className: CHATBOT_BUTTON_LLM_POPUP_DIV_2
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
