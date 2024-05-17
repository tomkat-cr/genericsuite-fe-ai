'use strict';

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var reactRouterDom = require('react-router-dom');
var history$1 = require('history');
var buffer = require('buffer');
var rxjs = require('rxjs');
var formik = require('formik');
var Yup = require('yup');
var Nav = require('react-bootstrap/cjs/Nav.js');
var NavDropdown = require('react-bootstrap/cjs/NavDropdown.js');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var fontawesome = require('@fortawesome/fontawesome');
var fontawesomeFreeSolid = require('@fortawesome/fontawesome-free-solid');
var Downshift = require('downshift');
var Container = require('react-bootstrap/cjs/Container.js');
var Navbar = require('react-bootstrap/cjs/Navbar.js');
var require$$1 = require('util');
var stream = require('stream');
var require$$1$1 = require('path');
var require$$3 = require('http');
var require$$4 = require('https');
var require$$0$1 = require('url');
var require$$6 = require('fs');
var require$$4$2 = require('assert');
var require$$0$2 = require('tty');
var require$$4$1 = require('net');
var zlib = require('zlib');
var events$1 = require('events');
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

var Yup__namespace = /*#__PURE__*/_interopNamespaceDefault(Yup);

function console_debug_log$4(debug_message) {
  if (get_debug_flag() === true) {
    console.log(debug_message);
    for (var i = 1; i < arguments.length; i++) console.log(arguments[i]);
  }
}
function get_debug_flag() {
  if (typeof window.app_local_debug === 'undefined') {
    if (process.env.hasOwnProperty('REACT_APP_DEBUG')) {
      window.app_local_debug = process.env.REACT_APP_DEBUG === '1';
    } else {
      window.app_local_debug = false;
    }
  }
  return window.app_local_debug;
}

var logging_service = /*#__PURE__*/Object.freeze({
    __proto__: null,
    console_debug_log: console_debug_log$4,
    get_debug_flag: get_debug_flag
});

const BUTTON_PRIMARY_CLASS = "bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500";
const BUTTON_SECONDARY_CLASS = "bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500";
const BUTTON_LISTING_CLASS$5 = "bg-blue-500 text-white p-2 rounded text-sm";
const INPUT_FLEXIBLE_CLASS = "pl-1 pb-1 pt-1 pr-1 block w-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md resize-none overflow-hidden";
// export const INPUT_FLEXIBLE_CLASS = "m-0 w-full resize-none border-0 rounded-md border py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-4 md:pr-12 gizmo:md:py-3.5 gizmo:placeholder-black/50 gizmo:dark:placeholder-white/50 pl-12 gizmo:pl-10 md:pl-[46px] gizmo:md:pl-[55px]";

const ERROR_MSG_CLASS = "alert alert-danger mt-4 p-2 rounded-md";
const WARNING_MSG_CLASS$2 = "alert alert-warning mt-4 p-2 rounded-md";
const INFO_MSG_CLASS$1 = "alert alert-info mt-4 p-2 rounded-md";
const SUCCESS_MSG_CLASS = "alert alert-success text-black mt-4 p-2 rounded-md";
const GRAY_BOX_MSG_CLASS = "alert text-black bg-gray-200 mt-4 p-2 rounded-md";

var class_name_constants = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BUTTON_LISTING_CLASS: BUTTON_LISTING_CLASS$5,
    BUTTON_PRIMARY_CLASS: BUTTON_PRIMARY_CLASS,
    BUTTON_SECONDARY_CLASS: BUTTON_SECONDARY_CLASS,
    ERROR_MSG_CLASS: ERROR_MSG_CLASS,
    GRAY_BOX_MSG_CLASS: GRAY_BOX_MSG_CLASS,
    INFO_MSG_CLASS: INFO_MSG_CLASS$1,
    INPUT_FLEXIBLE_CLASS: INPUT_FLEXIBLE_CLASS,
    SUCCESS_MSG_CLASS: SUCCESS_MSG_CLASS,
    WARNING_MSG_CLASS: WARNING_MSG_CLASS$2
});

const ModalPopUp$1 = _ref => {
  let {
    title = null,
    children,
    closeButtonMessage = "Close",
    closeButtonAction = null,
    primaryButtonMessage = null,
    primaryButtonAction = null,
    secondButtonMessage = null,
    secondButtonAction = null,
    logoutButton = false,
    allowOnHide = true,
    link = null,
    showTitle = true,
    htmlContent = null,
    htmlContentClass = null
  } = _ref;
  const [show, setShow] = React.useState(true);
  const handleClose = () => setShow(false);
  const handleOnHide = () => setShow(!allowOnHide);
  const linkSuffix = "?menu=0";
  // const handleShow = () => setShow(true);
  // {
  //     <Button variant="primary" onClick={handleShow}>
  //         Open Modal
  //     </Button>
  // }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactBootstrap.Modal, {
    show: show,
    onHide: handleOnHide
  }, title && showTitle && /*#__PURE__*/React.createElement(reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/React.createElement(reactBootstrap.Modal.Title, null, title)), /*#__PURE__*/React.createElement(reactBootstrap.Modal.Body, null, link && /*#__PURE__*/React.createElement("iframe", {
    src: link + linkSuffix,
    style: {
      width: '100%',
      height: '400px'
    },
    title: title
  }), !link && htmlContent === null && children, !link && htmlContent !== null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: htmlContentClass,
    dangerouslySetInnerHTML: {
      __html: htmlContent
    }
  }))), /*#__PURE__*/React.createElement(reactBootstrap.Modal.Footer, null, closeButtonMessage && /*#__PURE__*/React.createElement(DefaultButtonModal, {
    variant: "secondary",
    action: () => closeButtonAction ? closeButtonAction() : handleClose()
  }, closeButtonMessage), secondButtonMessage && /*#__PURE__*/React.createElement(DefaultButtonModal, {
    variant: "secondary",
    action: secondButtonAction
  }, secondButtonMessage), primaryButtonMessage && logoutButton && /*#__PURE__*/React.createElement(LogoutNavigate, {
    variant: "primary",
    action: primaryButtonAction
  }, primaryButtonMessage), primaryButtonMessage && !logoutButton && /*#__PURE__*/React.createElement(DefaultButtonModal, {
    variant: "primary",
    action: primaryButtonAction
  }, primaryButtonMessage))));
};
const DefaultButtonModal = _ref2 => {
  let {
    children,
    variant,
    action
  } = _ref2;
  return /*#__PURE__*/React.createElement(reactBootstrap.Button, {
    variant: variant,
    onClick: () => action ? action() : null
  }, children);
};
const LogoutNavigate = _ref3 => {
  let {
    children,
    variant
  } = _ref3;
  return /*#__PURE__*/React.createElement("a", {
    variant: variant,
    className: BUTTON_PRIMARY_CLASS
    // href={getPrefix(true)+'/login'}
    ,
    href: '/#/login'
  }, children);
};

var ModalPopUp$1$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DefaultButtonModal: DefaultButtonModal,
    LogoutNavigate: LogoutNavigate,
    ModalPopUp: ModalPopUp$1
});

const About = () => {
  return /*#__PURE__*/React.createElement(ModalPopUp$1, {
    title: "About",
    link: window.location.origin + '/#/about_body',
    showTitle: false
  });
};
const AboutBody = _ref => {
  let {
    children
  } = _ref;
  const version = process.env.REACT_APP_VERSION;
  const appName = process.env.REACT_APP_APP_NAME;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "About ", appName), /*#__PURE__*/React.createElement("p", null, "(Version: ", version && version !== '' ? version : "N/A", ")"), children);
};

const history = history$1.createBrowserHistory();
function getPrefix() {
  let hardPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (hardPrefix) {
    const prefix = process.env.REACT_APP_URI_PREFIX ? process.env.REACT_APP_URI_PREFIX : '';
    return '/#' + prefix;
  }
  return '';
}
const setLastUrl = function () {
  let lastURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (!lastURL) {
    lastURL = window.location.href;
  }
  if (lastURL.indexOf('/login') === -1) {
    localStorage.setItem('lastURL', lastURL);
  }
};
const removeLastUrl = () => {
  localStorage.removeItem('lastURL');
};
const getLastUrl = () => {
  let lastUrl = getPrefix(true) + '/';
  if (localStorage.getItem('lastURL')) {
    lastUrl = localStorage.getItem('lastURL');
  }
  return lastUrl;
};

// export function getConfigsJsonFile(jsonFileName) {
//     // const basePath = process.env.REACT_APP_JSON_CONFIG_PATH || '../src/configs';
//     // const jsonFilePath = `${basePath}/frontend/${jsonFileName}.json`
//     // const rawJson = require(jsonFilePath);
//     const rawJson = require(`../configs/frontend/${jsonFileName}.json`);
//     return rawJson;
// }

const buildConstant = constants => {
  return Object.entries(constants).map(_ref => {
    let [key, value] = _ref;
    return {
      title: value,
      value: key
    };
  });
};

var TRUE_FALSE$1 = {
	"0": "No",
	"1": "Yes"
};
var YES_NO$1 = {
	y: "Yes",
	n: "No"
};
var LANGUAGES$1 = {
	en: "English",
	es: "Español"
};
var GENDERS$1 = {
	m: "Male",
	f: "Female"
};
var constants$1 = {
	TRUE_FALSE: TRUE_FALSE$1,
	YES_NO: YES_NO$1,
	LANGUAGES: LANGUAGES$1,
	GENDERS: GENDERS$1
};

// Security

const MSG_ERROR_INVALID_TOKEN = ['A valid token is missing', 'Token is invalid', 'Session expired', 'HTTP 401'];
const MSG_ERROR_INVALID_CREDS = 'The username or password is incorrect. Please try again.';
const MSG_ERROR_SESSION_EXPIRED = 'Session expired.';
const MSG_ERROR_CLICK_TO_RELOGIN = 'Login again';
const MSG_ERROR_CLICK_TO_RETRY = 'Retry';

// API / Database

const MSG_ERROR_CONNECTION_FAIL = 'Connection failure';
const MSG_ERROR_POSSIBLE_CORS = 'Possible CORS';

// General

const WAIT_ANIMATION_IMG = "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==";
const MSG_ALT_WAIT_ANIMATION = 'Wait...';

// All images must be in static/media/ directory for dev, qa, staging and prod stages/environments
const imageDirectory$1 = "static/media/";

// Generic editor : general constants

const ACTION_CREATE = 'create';
const ACTION_READ = 'read';
const ACTION_UPDATE = 'update';
const ACTION_DELETE = 'delete';
const ACTION_LIST = 'list';

// Generic editor : messages

const MSG_ERROR_MISSING_ARRAY_NAME_PARAM = 'Missing "array_name" parameter. It must be specified for subType "array".';
const MSG_ERROR_ID_NOT_FOUND = 'ID not found...';
const MSG_DELETE_CONFIRM = 'Are you sure to delete this element? Please confirm with the [Delete] button or [Cancel] this operation.';
const MSG_ACTION_CREATE = 'Create';
const MSG_ACTION_NEW = 'New';
const MSG_ACTION_READ = 'View';
const MSG_ACTION_EDIT = 'Edit';
const MSG_ACTION_UPDATE = 'Update';
const MSG_ACTION_DELETE = 'Delete';
const MSG_ACTION_LIST = 'Listing';
const MSG_ACTION_CANCEL = 'Cancel';
const MSG_SELECT_AN_OPTION = 'Select an option...';
const MSG_PREVIOUS = "Previous";
const MSG_NEXT = "Next";
const MSG_PAGE = "Page";
const MSG_OF = "of";
const MSG_DONE_DELETED = 'Item has been deleted';
const MSG_DONE_CREATED = 'Item has been created';
const MSG_DONE_UPDATED = 'Item has been updated';
const MSG_ACTIONS = 'Actions';
const MSG_SEARCH = 'Search';
const MSG_IS_REQUIRED = 'is required';
const MSG_MUST_BE = 'must be';
const MSG_VALID_INTEGER = 'an integer number';
const MSG_VALID_NUMBER = 'a number';
const MSG_VALID_DATE = 'a valid date';
const MSG_VALID_EMAIL = 'a valid email address';
const MSG_ROWS_PER_PAGE = "Rows per page";

// Generic editor : default values

const ROWS_PER_PAGE = 5;

// Generic editor : general select options

// const constants = getConfigsJsonFile('general_constants');
const TRUE_FALSE = buildConstant(constants$1.TRUE_FALSE);
const YES_NO = buildConstant(constants$1.YES_NO);
const LANGUAGES = buildConstant(constants$1.LANGUAGES);
const GENDERS = buildConstant(constants$1.GENDERS);

var general_constants = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ACTION_CREATE: ACTION_CREATE,
    ACTION_DELETE: ACTION_DELETE,
    ACTION_LIST: ACTION_LIST,
    ACTION_READ: ACTION_READ,
    ACTION_UPDATE: ACTION_UPDATE,
    GENDERS: GENDERS,
    LANGUAGES: LANGUAGES,
    MSG_ACTIONS: MSG_ACTIONS,
    MSG_ACTION_CANCEL: MSG_ACTION_CANCEL,
    MSG_ACTION_CREATE: MSG_ACTION_CREATE,
    MSG_ACTION_DELETE: MSG_ACTION_DELETE,
    MSG_ACTION_EDIT: MSG_ACTION_EDIT,
    MSG_ACTION_LIST: MSG_ACTION_LIST,
    MSG_ACTION_NEW: MSG_ACTION_NEW,
    MSG_ACTION_READ: MSG_ACTION_READ,
    MSG_ACTION_UPDATE: MSG_ACTION_UPDATE,
    MSG_ALT_WAIT_ANIMATION: MSG_ALT_WAIT_ANIMATION,
    MSG_DELETE_CONFIRM: MSG_DELETE_CONFIRM,
    MSG_DONE_CREATED: MSG_DONE_CREATED,
    MSG_DONE_DELETED: MSG_DONE_DELETED,
    MSG_DONE_UPDATED: MSG_DONE_UPDATED,
    MSG_ERROR_CLICK_TO_RELOGIN: MSG_ERROR_CLICK_TO_RELOGIN,
    MSG_ERROR_CLICK_TO_RETRY: MSG_ERROR_CLICK_TO_RETRY,
    MSG_ERROR_CONNECTION_FAIL: MSG_ERROR_CONNECTION_FAIL,
    MSG_ERROR_ID_NOT_FOUND: MSG_ERROR_ID_NOT_FOUND,
    MSG_ERROR_INVALID_CREDS: MSG_ERROR_INVALID_CREDS,
    MSG_ERROR_INVALID_TOKEN: MSG_ERROR_INVALID_TOKEN,
    MSG_ERROR_MISSING_ARRAY_NAME_PARAM: MSG_ERROR_MISSING_ARRAY_NAME_PARAM,
    MSG_ERROR_POSSIBLE_CORS: MSG_ERROR_POSSIBLE_CORS,
    MSG_ERROR_SESSION_EXPIRED: MSG_ERROR_SESSION_EXPIRED,
    MSG_IS_REQUIRED: MSG_IS_REQUIRED,
    MSG_MUST_BE: MSG_MUST_BE,
    MSG_NEXT: MSG_NEXT,
    MSG_OF: MSG_OF,
    MSG_PAGE: MSG_PAGE,
    MSG_PREVIOUS: MSG_PREVIOUS,
    MSG_ROWS_PER_PAGE: MSG_ROWS_PER_PAGE,
    MSG_SEARCH: MSG_SEARCH,
    MSG_SELECT_AN_OPTION: MSG_SELECT_AN_OPTION,
    MSG_VALID_DATE: MSG_VALID_DATE,
    MSG_VALID_EMAIL: MSG_VALID_EMAIL,
    MSG_VALID_INTEGER: MSG_VALID_INTEGER,
    MSG_VALID_NUMBER: MSG_VALID_NUMBER,
    ROWS_PER_PAGE: ROWS_PER_PAGE,
    TRUE_FALSE: TRUE_FALSE,
    WAIT_ANIMATION_IMG: WAIT_ANIMATION_IMG,
    YES_NO: YES_NO,
    imageDirectory: imageDirectory$1
});

var BILLING_PLANS$1 = {
	free: "Free",
	basic: "Basic",
	premium: "Premium"
};
var ERROR_MESSAGES$1 = {
	ACCOUNT_INACTIVE: "User account inactive [L5]. To activate your account, please contact <a href=\"mailto:support@exampleapp.com\">support@exampleapp.com</a></div>"
};
var APP_EMAILS$1 = {
	SUPPORT_EMAIL: "support@exampleapp.com",
	INFO_EMAIL: "info@exampleapp.com"
};
var APP_VALID_URLS$1 = {
	APP_DOMAIN: "exampleapp.com",
	APP_WEBSITE: "https://www.exampleapp.com"
};
var constants = {
	BILLING_PLANS: BILLING_PLANS$1,
	ERROR_MESSAGES: ERROR_MESSAGES$1,
	APP_EMAILS: APP_EMAILS$1,
	APP_VALID_URLS: APP_VALID_URLS$1
};

const BILLING_PLANS = buildConstant(constants.BILLING_PLANS);
const APP_EMAILS = constants.APP_EMAILS;
const APP_VALID_URLS = constants.APP_VALID_URLS;

const currentUserSubject = new rxjs.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
function logout() {
  let lastURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  // Remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
  if (lastURL) {
    setLastUrl(lastURL);
  }
}

function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function authHeader() {
  // Returns authorization header with jwt token
  let currentUser = null;
  try {
    currentUser = authenticationService$1.currentUserValue;
  } catch (error) {
    console_debug_log$4("authHeader | ERROR: ".concat(error));
  }
  if (currentUser && currentUser.token) {
    if (process.env.REACT_APP_X_TOKEN) {
      return {
        'x-access-tokens': currentUser.token
      };
    } else {
      return {
        Authorization: "Bearer ".concat(currentUser.token)
      };
    }
  } else {
    return {};
  }
}

var authHeader$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    authHeader: authHeader
});

const usePlainFetch$2 = false;
function handleResponse(response) {
  if (response.headers && response.response) {
    return handleResponseText(response, response.response, response.headers);
  } else {
    return response.text().then(text => {
      return handleResponseText(response, text, {});
    }, reason => {
      console.error(reason);
    });
  }
}
function handleResponseText(response, text, headers) {
  let data = {};
  if (IsJsonString(text)) {
    data = text && JSON.parse(text);
  }
  if (!response.ok) {
    let specificErrorMsg = data && data.message || text || response.statusText || '';
    if ([401, 403].indexOf(response.status) !== -1) {
      // Auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      if (response.status === 401) {
        if (specificErrorMsg === '') {
          specificErrorMsg = MSG_ERROR_INVALID_CREDS;
        }
      }
    }
    const errorMsg = specificErrorMsg || data && data.message || text || response.statusText;
    return Promise.reject(errorMsg);
  } else {
    data.headers = headers;
    if (!IsJsonString(text)) {
      data.file = text;
      if (!data.headers.get('content-type')) {
        data.headers.set('content-type', 'application/octet-stream');
      }
    }
    if (typeof data.error == 'undefined') {
      data.error = false;
    }
    if (typeof data.error_message != 'undefined') {
      data.message = data.error_message;
    }
    if (typeof data.resultset != 'undefined' && typeof data.resultset != 'object') {
      // When the data.resultset has an array of records (objects) instead of a sigle object, it comes as an encapsulated string
      data.resultset = JSON.parse(data.resultset);
    }
  }
  return data;
}
async function handleFetchError(error) {
  let possibleCORS;
  let errorMsg;
  let reasonDetail;
  if (error instanceof Response) {
    /*
        body: (...)
        bodyUsed: false
        headers: Headers {}: 
        ok: false
        redirected: false
        status: 401
        statusText: "Unauthorized"
        type: "cors"
        url: "https://hostanme/endpoint"
    */
    possibleCORS = error.statusText.includes('CORS');
    reasonDetail = await error.text().then(text => {
      console_debug_log$4('Error body:', text);
      return text;
    }).catch(e => {
      console_debug_log$4('Error reading body:', e);
      return "HTTP ".concat(error.status);
    });
    if (error.status === 401) {
      errorMsg = MSG_ERROR_SESSION_EXPIRED;
    } else {
      errorMsg = error.statusText;
    }
  } else {
    possibleCORS = error instanceof TypeError && error.message.includes('Failed to fetch');
    errorMsg = MSG_ERROR_CONNECTION_FAIL + (possibleCORS ? " (".concat(MSG_ERROR_POSSIBLE_CORS, ")") : '');
    reasonDetail = error;
  }
  return Promise.reject({
    error: true,
    message: errorMsg,
    reason: reasonDetail
  });
}
function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

var response_handlers_service = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IsJsonString: IsJsonString,
    handleFetchError: handleFetchError,
    handleResponse: handleResponse,
    handleResponseText: handleResponseText,
    usePlainFetch: usePlainFetch$2
});

// Blob files utilities

const defaultFilenametoDownload = 'audio.wav';
const getFileExtension$1 = filename => {
  const fileExtension = filename ? filename.split('.').pop() : null;
  return fileExtension;
};
const getContentType = function (filename) {
  let forceAlternative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const fileExtension = getFileExtension$1(filename);
  let contentType = null;
  switch (fileExtension) {
    case 'wav':
      contentType = 'audio/wav';
      break;
    case 'mp3':
      if (forceAlternative) {
        contentType = 'audio/mp3';
      } else {
        contentType = 'audio/mpeg';
      }
      break;
    case 'csv':
      contentType = 'text/csv';
      break;
    case 'pdf':
      contentType = 'application/pdf';
      break;
    default:
      contentType = 'application/octet-stream';
  }
  return contentType;
};
const getFilenameFromContentDisposition$1 = headers => {
  // Example: attachment; filename="dccbd8f2900a4c7eb1035add851da72f.wav"
  const contentDisposition = headers.get('content-disposition');
  const filenameMatch = contentDisposition && contentDisposition.match(/filename="([^"]+)"/);
  const filename = filenameMatch ? filenameMatch[1] : null;
  return filename;
};
const performDownload$1 = function (fileUrl) {
  let filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let performIt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', filename ? filename : defaultFilenametoDownload); // or any other extension
  document.body.appendChild(link);
  if (performIt) {
    link.click();
    document.body.removeChild(link);
    return true;
  }
  return link;
};
const getHeadersContentType = headers => {
  return headers.get('content-type');
};
const responseHasFile$1 = headers => {
  const contentType = getHeadersContentType(headers);
  return contentType === 'application/octet-stream' || contentType.includes('audio/') || contentType.includes('image/') || contentType.includes('video/') || contentType.includes('text/csv') || contentType.includes('text/text') // TODO: only to simulate AWS API Gateway
  ;
};
const isBinaryFileType = filename => {
  const contentType = getContentType(filename);
  return contentType === 'application/octet-stream' || contentType.includes('audio/') || contentType.includes('image/') || contentType.includes('video/');
};
const decodeBlob$1 = function (base64String, filename) {
  let oldUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const blobType = getContentType(filename);
  if (typeof base64String !== 'string') {
    if (oldUrl === null) {
      throw new Error('Expected a string');
    }
    return oldUrl;
  }
  const binaryString = window.atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], {
    type: blobType
  });
  const url = URL.createObjectURL(blob);
  return url;
};
const fixBlob = async (blobObj, filename) => {
  let blobUrl = URL.createObjectURL(blobObj);
  if (!isBinaryFileType(filename)) {
    return new Promise((resolve, _) => {
      resolve(blobUrl);
    });
  }
  const reader = new FileReader();
  // reader.readAsDataURL(blob);  // Convert to data:audio/mpeg;base64,Ly9Qa3h...
  reader.readAsText(blobObj); // No convertion at all... just get what it receives...
  return new Promise((resolve, reject) => {
    reader.onloadend = function () {
      if (typeof reader.result !== 'string') {
        resolve(blobUrl);
      } else {
        blobUrl = decodeBlob$1(reader.result, filename);
        resolve(blobUrl);
      }
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};

var blob_files_utilities = /*#__PURE__*/Object.freeze({
    __proto__: null,
    decodeBlob: decodeBlob$1,
    defaultFilenametoDownload: defaultFilenametoDownload,
    fixBlob: fixBlob,
    getContentType: getContentType,
    getFileExtension: getFileExtension$1,
    getFilenameFromContentDisposition: getFilenameFromContentDisposition$1,
    getHeadersContentType: getHeadersContentType,
    isBinaryFileType: isBinaryFileType,
    performDownload: performDownload$1,
    responseHasFile: responseHasFile$1
});

// export const MULTIPART_FORM_DATA_HEADER = {'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'};
const MULTIPART_FORM_DATA_HEADER$2 = {
  'Content-Type': 'multipart/form-data'
};
let dbApiService$3 = class dbApiService {
  constructor(props) {
    _defineProperty(this, "props", null);
    _defineProperty(this, "apiUrl", process.env.REACT_APP_API_URL);
    _defineProperty(this, "debug", false);
    this.props = props;
    this.props.authHeader = authHeader();
    this.props.authAndJsonHeader = Object.assign({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      // https://stackoverflow.com/questions/43344819/reading-response-headers-with-fetch-api
      // IMPORTANT: this makes the frontend unresponsive when it's deployed on the cloud (AWS)
      // 'Access-Control-Allow-Headers': 'Content-Type, Content-Disposition',
    }, this.props.authHeader);
    if (this.debug) {
      console_debug_log$4('###===> dbApiService() | this.props:');
      console_debug_log$4(this.props);
    }
  }
  paramsToUrlQuery(params) {
    let urlQuery = '';
    Object.entries(params).map(_ref => {
      let [key, value] = _ref;
      return urlQuery += (urlQuery === '' ? '?' : '&') + key + '=' + value;
    });
    return urlQuery;
  }
  getFetch(url, requestOptions) {
    let response;
    try {
      if (usePlainFetch$2) ; else {
        response = fetch(url, requestOptions).then(response => {
          if (this.debug) console_debug_log$4('||| getFetch | Phase 1 | response:', response);
          if (!response.ok) {
            // throw new Error('Network response was not ok');
            return Promise.reject(response);
          }
          const headers = response.headers;
          // Process blob
          if (responseHasFile$1(headers)) {
            // Get file name and extension
            const filename = getFilenameFromContentDisposition$1(headers);
            return response.blob().then(blob => {
              // Create a link to download the file (from blob)
              // Verifying if it's a binary encoded as Base64 string
              return fixBlob(blob, filename).then(text => {
                // "text" contains the blob URL...
                if (this.debug) console_debug_log$4('||| getFetch | Phase 1.5 | blob:', blob, 'text:', text, 'filename:', filename);
                return {
                  headers,
                  text,
                  response
                };
              }, error => {
                console_debug_log$4('||| getFetch | fixBlob | error:', error);
                return Promise.reject(response);
              });
            });
          } else {
            // Process headers if needed here and the response text body
            return response.text().then(text => {
              return {
                headers,
                text,
                response
              };
            });
          }
        }).then(_ref2 => {
          let {
            headers,
            text,
            response
          } = _ref2;
          if (this.debug) console_debug_log$4('||| getFetch | Phase 2 | headers:', headers, 'text', text, 'response:', response);
          const data = {
            response: text,
            headers: headers,
            // Attach headers to the data object
            ok: response.ok,
            status: response.status,
            statusText: response.statusText
          };
          return data;
        }).then(handleResponse).catch(handleFetchError);
      }
    } catch (e) {
      console_debug_log$4('|| FETCH Error:', e);
      response = Promise.resolve(handleFetchError(e));
    }
    return response;
  }
  getAll() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let requestOptions = {};
    let body;
    let headers = {};
    if (options['headers']) {
      headers = options['headers'];
    }
    if (options['raw_body']) {
      body = data;
    } else {
      body = JSON.stringify(data);
    }
    if (['POST', 'PUT'].includes(method)) {
      requestOptions = {
        method: method,
        headers: Object.assign({}, this.props.authAndJsonHeader, headers),
        body: body
      };
    } else {
      requestOptions = {
        method: method,
        headers: this.props.authHeader
      };
    }
    if (options['signal']) {
      requestOptions['signal'] = options['signal'];
    }
    const urlQuery = this.paramsToUrlQuery(params);
    const url = "".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery);
    if (this.debug) {
      console_debug_log$4("###===> getAll() | ".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery));
    }
    return this.getFetch(url, requestOptions);
  }
  getOne(params) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const requestOptions = {
      ...options,
      method: 'GET',
      headers: this.props.authHeader
    };
    const urlQuery = this.paramsToUrlQuery(params);
    if (this.debug) {
      console_debug_log$4("###===> getOne() | ".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery));
    }
    const url = "".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery);
    return this.getFetch(url, requestOptions);
  }
  createUpdateDelete(action, id, data) {
    let queryParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    switch (action) {
      case ACTION_CREATE:
        return this.createRow(data, queryParams);
      case ACTION_UPDATE:
        return this.updateRow(id, data, queryParams);
      case ACTION_DELETE:
        return this.deleteRow(id, data, queryParams);
      default:
        return handleFetchError('Error CUD-1 - Invalid action: ' + action);
    }
  }
  createRow(data) {
    let queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const urlQuery = this.paramsToUrlQuery(queryParams);
    const requestOptions = {
      method: 'POST',
      headers: this.props.authAndJsonHeader,
      body: JSON.stringify(data)
    };
    if (this.debug) {
      console_debug_log$4("###===> createRow() | ".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery));
    }
    const response = fetch("".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery), requestOptions).then(handleResponse).catch(handleFetchError);
    return response;
  }
  updateRow(id, data) {
    let queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const urlQuery = this.paramsToUrlQuery(queryParams);
    if (id !== null) {
      data.id = id;
    }
    const requestOptions = {
      method: 'PUT',
      headers: this.props.authAndJsonHeader,
      body: JSON.stringify(data)
    };
    if (this.debug) {
      console_debug_log$4("###===> updateRow() | ".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery));
    }
    const response = fetch("".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery), requestOptions).then(handleResponse).catch(handleFetchError);
    return response;
  }
  deleteRow(id, data) {
    let queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let urlQuery = this.paramsToUrlQuery(queryParams);
    if (id !== null) {
      urlQuery += (urlQuery === '' ? '?' : "&") + "id=".concat(id);
    }
    const requestOptions = {
      method: 'DELETE',
      headers: this.props.authAndJsonHeader,
      body: JSON.stringify(data)
    };
    if (this.debug) {
      console_debug_log$4("###===> deleteRow() | ".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery));
    }
    const response = fetch("".concat(this.apiUrl, "/").concat(this.props.url).concat(urlQuery), requestOptions).then(handleResponse).catch(handleFetchError);
    return response;
  }
  convertId(id) {
    return convertId$2(id);
  }
};
const convertId$2 = id => {
  return id === null || id === '' || typeof id === 'string' ? id : id.$oid;
};

var db_service = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MULTIPART_FORM_DATA_HEADER: MULTIPART_FORM_DATA_HEADER$2,
    convertId: convertId$2,
    dbApiService: dbApiService$3
});

// Authentication service

const authenticationService$1 = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};
function login(username, password) {
  const config = {
    apiUrl: process.env.REACT_APP_API_URL
  };
  // FA-62 - FE: Find a replacement for btoa()
  const requestOptions = {
    method: 'POST',
    headers: {
      "Authorization": "Basic " + buffer.Buffer.from(username + ":" + password).toString('base64')
    }
  };
  let userService = new dbApiService$3({
    url: 'users'
  });
  return fetch("".concat(config.apiUrl, "/users/login"), requestOptions).then(handleResponse, handleFetchError).then(res => {
    if (res.error) {
      return Promise.reject(res.message);
    }
    let user = {
      id: userService.convertId(res.resultset._id),
      username: res.resultset.username,
      // email: res.resultset.email,
      firstName: res.resultset.firstname,
      lastName: res.resultset.lastname,
      token: res.resultset.token
    };
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUserSubject.next(user);
    return user;
  });
}
const getUserData = userId => {
  const dbApi = new dbApiService$3({
    url: 'users'
  });
  return dbApi.getOne({
    id: userId
  }).then(data => data, error => {
    console_debug_log$4("ERROR: getUserData(".concat(userId, ":)"));
    console.error(error);
    return {
      error: true,
      errorMsg: error
    };
  });
};

var authentication_service = /*#__PURE__*/Object.freeze({
    __proto__: null,
    authenticationService: authenticationService$1,
    getUserData: getUserData
});

const hard_login = false;
function logoutHander() {
  authenticationService$1.logout();
  if (!history.push(getPrefix(true) + '/login') && hard_login) {
    window.location.href = window.location.origin + getPrefix(true) + '/login';
  }
}
function refreshPage() {
  window.location.reload();
}
const extractErrorFromVariants = function (errorRaw, element) {
  let subElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let error = errorRaw;
  let errorJson;
  if (typeof error['errorMsg'] !== 'undefined') {
    error = error['errorMsg'];
  }
  if (typeof error === 'string') {
    if (subElement) {
      return '';
    }
    return error;
  }
  if (typeof error[element] !== 'undefined') {
    errorJson = error[element];
    if (typeof errorJson === 'string') {
      try {
        errorJson = JSON.parse(errorJson);
      } catch (e) {
        errorJson = null;
      }
      if (!errorJson) {
        if (subElement) {
          return '';
        }
        return error[element];
      }
    }
    if (subElement) {
      if (typeof errorJson[subElement] === 'undefined') {
        return '';
      }
      return errorJson[subElement];
    }
    return String(errorJson);
  }
  if (subElement) {
    return '';
  }
  return String(error);
};
const getErrorMessage = error => {
  if (typeof error === 'string') {
    return error;
  }
  let errorMessage = extractErrorFromVariants(error, 'message');
  let errorReason = extractErrorFromVariants(error, 'reason', 'message');
  if (!errorReason) {
    errorReason = extractErrorFromVariants(error, 'reason', 'detail');
  }
  if (!errorReason) {
    errorReason = extractErrorFromVariants(error, 'reason');
  }
  if (errorReason) {
    errorMessage += ': ' + errorReason;
  }
  return errorMessage;
};
const isSessionExpired = errorMessage => {
  return MSG_ERROR_INVALID_TOKEN.some(token => errorMessage.includes(token));
};
const includesAppValidLinks = message => {
  return Object.values(APP_EMAILS).some(email => message.includes(email)) || Object.values(APP_VALID_URLS).some(url => message.includes(url));
};
function errorAndReEnter$1(error) {
  let errorCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let forceLogin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let refreshHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  let parentLogoutHandler = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let logoutButton = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  let closeButton = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  const errorMessage = getErrorMessage(error) + (errorCode ? " ".concat(errorCode) : '');
  if (forceLogin === null) {
    forceLogin = false;
  }
  if (typeof error !== 'string' || forceLogin === null) {
    forceLogin = true;
  }
  if (refreshHandler === null) {
    refreshHandler = refreshPage;
  }
  if (parentLogoutHandler === null) {
    parentLogoutHandler = logoutHander;
    logoutButton = true;
  }
  const retryMessage = isSessionExpired(errorMessage) ? MSG_ERROR_SESSION_EXPIRED : errorMessage;
  const msgContainsHtml = includesAppValidLinks(retryMessage);
  const retryButton = MSG_ERROR_CLICK_TO_RETRY;
  const loginButton = forceLogin || isSessionExpired(errorMessage) ? MSG_ERROR_CLICK_TO_RELOGIN : null;
  if (isSessionExpired(errorMessage)) {
    // If session is expired, clear current user in local storage
    setLastUrl();
    authenticationService$1.logout();
  }
  return /*#__PURE__*/React.createElement(ModalPopUp$1, {
    closeButtonMessage: closeButton ? "Close" : null,
    secondButtonMessage: retryButton,
    secondButtonAction: refreshHandler,
    primaryButtonMessage: loginButton,
    primaryButtonAction: parentLogoutHandler,
    logoutButton: logoutButton,
    htmlContent: msgContainsHtml ? retryMessage : null,
    htmlContentClass: 'alert alert-danger'
  }, msgContainsHtml ? null : errorMessageDiv(retryMessage));
}
function errorAndReEnterNonModal(error) {
  let forceLogin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let refreshHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let logoutHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  let errorMessage = getErrorMessage(error);
  if (typeof error !== 'string') {
    forceLogin = true;
  }
  return /*#__PURE__*/React.createElement("div", null, errorAndRetry(errorMessage, refreshHandler), errorLoginAgain(errorMessage, forceLogin, logoutHandler));
}
function errorLoginAgain(errorMessage) {
  let forceLogin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let parentLogoutHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (parentLogoutHandler === null) {
    parentLogoutHandler = logoutHander;
  }
  if (forceLogin || MSG_ERROR_INVALID_TOKEN.includes(errorMessage)) {
    setLastUrl();
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      as: reactRouterDom.Link,
      to: getPrefix() + '/login',
      onClick: parentLogoutHandler
    }, MSG_ERROR_CLICK_TO_RELOGIN));
  }
  return /*#__PURE__*/React.createElement("div", null);
}
function errorAndRetry(errorMessage) {
  let refreshHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (refreshHandler === null) {
    refreshHandler = refreshPage;
  }
  return /*#__PURE__*/React.createElement("div", null, errorMessageDiv(MSG_ERROR_INVALID_TOKEN.includes(errorMessage) ? MSG_ERROR_SESSION_EXPIRED : errorMessage), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
    onClick: refreshHandler
  }, MSG_ERROR_CLICK_TO_RETRY));
}
function errorMessageDiv(errorMessage) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    },
    className: 'alert alert-danger'
  }, errorMessage);
}
const formatCaughtError$5 = error => {
  let response = {
    "error": true,
    "message": getErrorMessage(error)
  };
  return response;
};

var errorAndReenter = /*#__PURE__*/Object.freeze({
    __proto__: null,
    errorAndReEnter: errorAndReEnter$1,
    errorAndReEnterNonModal: errorAndReEnterNonModal,
    errorAndRetry: errorAndRetry,
    errorLoginAgain: errorLoginAgain,
    errorMessageDiv: errorMessageDiv,
    formatCaughtError: formatCaughtError$5,
    getErrorMessage: getErrorMessage,
    includesAppValidLinks: includesAppValidLinks,
    isSessionExpired: isSessionExpired,
    logoutHander: logoutHander,
    refreshPage: refreshPage
});

// GenericCrudEditor general utilities

const defaultValue$1 = function (dictObj, elementName) {
  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (typeof dictObj[elementName] !== 'undefined') {
    return dictObj[elementName];
  }
  return defaultValue;
};
const replaceSpecialVars = params => {
  const {
    currentUserValue
  } = authenticationService$1;
  Object.keys(params).forEach(key => {
    if (params[key] === "{CurrentUserId}") {
      params[key] = currentUserValue.id;
    }
  });
  return params;
};

var generic_editor_utilities = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultValue: defaultValue$1,
    replaceSpecialVars: replaceSpecialVars
});

function getUrlParams$1() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  let urlParams = {};
  let searchString;
  try {
    if (props.hasOwnProperty('location')) {
      if (props.location.hasOwnProperty('search')) {
        if (props.location.search !== '') {
          searchString = props.location.search;
        } else {
          searchString = props.location.href;
          if (searchString.includes('?')) {
            searchString = searchString.split('?')[1];
          } else {
            searchString = '';
          }
        }
        if (searchString === '') {
          return urlParams;
        }
        let keyPairs = searchString.split("&");
        if (Array.isArray(keyPairs)) {
          keyPairs.map(keyPairString => {
            let KeyValueArray = keyPairString.split('=');
            urlParams[KeyValueArray[0]] = typeof KeyValueArray[1] === 'undefined' ? '' : KeyValueArray[1];
            return null;
          });
        }
      }
    } else {
      if (props.hasOwnProperty('match')) {
        if (props.match.hasOwnProperty('params')) {
          urlParams = props.match.params;
        }
      }
    }
  } catch (error) {
    console.log("getUrlParams ERROR | ".concat(props));
    console.error(error);
  }
  return urlParams;
}

var urlParams$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getUrlParams: getUrlParams$1
});

const WaitAnimation$1 = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("img", {
    src: WAIT_ANIMATION_IMG,
    alt: MSG_ALT_WAIT_ANIMATION
  })));
};
const ShowHidePageAnimation = function (showFlag) {
  let elementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "NavigationAnimation";
  let animationDiv = document.getElementById(elementId);
  if (animationDiv) {
    if (showFlag) {
      animationDiv.className = "ml-3 mr-3";
    } else {
      animationDiv.className = "ml-3 mr-3 hidden";
    }
  }
};

var wait_animation_utility = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ShowHidePageAnimation: ShowHidePageAnimation,
    WaitAnimation: WaitAnimation$1
});

// This way to import the .svg files doesn't work on prod environents...
// import DefaultAppLogo from '../../images/app_logo_square.svg';
// import MadeByLogoSquare from '../../images/madeby_logo_square.svg';
// import MadeByLogoCircle from '../../images/madeby_logo_emblem.svg';

const defaultAppLogo = "app_logo_square.svg";
const LoginPage = props => {
  const [redirectUrl, setRedirectUrl] = React.useState(null);
  let appLogo = props.appLogo;
  React.useEffect(() => {
    const urlParams = getUrlParams$1(props);
    let redirect;
    if (typeof urlParams.redirect === 'undefined') {
      redirect = getLastUrl();
    } else {
      redirect = urlParams.redirect;
    }
    // Redirect to home OR redirect URL if already logged in
    if (authenticationService$1.currentUserValue) {
      removeLastUrl();
      window.location.href = redirectUrl;
    } else {
      setRedirectUrl(redirect);
    }
    // Avoid need to add redirectUrl to dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  const handleSubmit = (username, password, setStatus, setSubmitting) => {
    setStatus();
    authenticationService$1.login(username, password).then(user => {
      // To avoid stay in login page with the wait animation
      setSubmitting(false);
      // Redirect to previous page
      removeLastUrl();
      window.location.href = redirectUrl;
      // To handle menu access rights changes
      window.location.reload(true);
    }, error => {
      setSubmitting(false);
      setStatus(getErrorMessage(error));
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(formik.Formik, {
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup__namespace.object().shape({
      username: Yup__namespace.string().required('Username is required'),
      password: Yup__namespace.string().required('Password is required')
    }),
    onSubmit: (_ref, _ref2) => {
      let {
        username,
        password
      } = _ref;
      let {
        setStatus,
        setSubmitting
      } = _ref2;
      handleSubmit(username, password, setStatus, setSubmitting);
    }
  }, _ref3 => {
    let {
      errors,
      status,
      touched,
      isSubmitting
    } = _ref3;
    return /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center items-center min-h-screen mt-1 mb-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded border mt-4 mb-1 pt-3 pb-2 pl-4 pr-4",
      style: {
        width: '400px',
        margin: 'auto'
      }
    }, /*#__PURE__*/React.createElement(formik.Form, null, /*#__PURE__*/React.createElement("img", {
      src: imageDirectory$1 + (appLogo || defaultAppLogo),
      width: "150",
      height: "150",
      className: "mx-auto my-0",
      alt: "App Logo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "username"
    }, "Username"), /*#__PURE__*/React.createElement(formik.Field, {
      name: "username",
      type: "text",
      className: 'form-control' + (errors.username && touched.username ? ' is-invalid' : '')
    }), /*#__PURE__*/React.createElement(formik.ErrorMessage, {
      name: "username",
      component: "div",
      className: "invalid-feedback"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "password"
    }, "Password"), /*#__PURE__*/React.createElement(formik.Field, {
      name: "password",
      type: "password",
      className: 'form-control' + (errors.password && touched.password ? ' is-invalid' : '')
    }), /*#__PURE__*/React.createElement(formik.ErrorMessage, {
      name: "password",
      component: "div",
      className: "invalid-feedback"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Login"), isSubmitting && WaitAnimation$1()), status && !includesAppValidLinks(status) && /*#__PURE__*/React.createElement("div", {
      className: 'alert alert-danger'
    }, status), status && includesAppValidLinks(status) && /*#__PURE__*/React.createElement("div", {
      className: 'alert alert-danger',
      dangerouslySetInnerHTML: {
        __html: status
      }
    }))));
  }));
};

const HomePage = _ref => {
  let {
    children,
    appLogo
  } = _ref;
  const [currentUser, setCurrentUser] = React.useState(authenticationService$1.currentUserValue);
  React.useEffect(() => {
    const subscription = authenticationService$1.currentUser.subscribe(x => setCurrentUser(x));
    return () => subscription.unsubscribe();
  }, []);
  if (!currentUser) {
    return /*#__PURE__*/React.createElement(LoginPage, {
      appLogo: appLogo || null
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

// GenericMenuService (GMS) main


/* eslint no-eval: 0 */
const jsPrefixToken = "|js|";
const getOnClickObject = function (onClickString, setExpanded) {
  let componentMapping = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let resutlFunction = null;
  if (onClickString === null) {
    if (setExpanded) {
      resutlFunction = () => {
        setExpanded();
      };
    }
  } else {
    if (onClickString.startsWith(jsPrefixToken)) {
      onClickString = onClickString.substring(jsPrefixToken.length);
      if (setExpanded) {
        resutlFunction = () => {
          setExpanded();
          eval(onClickString);
          return window.location.href;
        };
      } else {
        resutlFunction = () => {
          eval(onClickString);
          return window.location.href;
        };
      }
    } else {
      if (setExpanded) {
        resutlFunction = () => {
          setExpanded(componentMapping[onClickString]);
        };
      } else {
        resutlFunction = componentMapping[onClickString];
      }
    }
  }
  return resutlFunction;
};
const GenericMenuBuilder = _ref => {
  let {
    title = null,
    componentMapping,
    itemType,
    menuOptions = null,
    status,
    login,
    setExpanded,
    appLogo = null
  } = _ref;
  const getElementObj = item => {
    const ElementObj = componentMapping[item.element];
    if (typeof ElementObj === 'undefined') {
      return null;
    }
    return /*#__PURE__*/React.createElement(ElementObj, null);
  };
  const getItemDefaults = function (item) {
    let topTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const hard_prefix = defaultValue$1(item, "hard_prefix", false);
    const get_prefix = defaultValue$1(item, "get_prefix", true);
    const reload = defaultValue$1(item, "reload", false);
    const element_obj = getElementObj(item);
    let path = defaultValue$1(item, "path", null);
    if (get_prefix && path) {
      path = getPrefix(hard_prefix) + path;
    }
    if (!path) {
      path = "#";
    }
    const on_click = getOnClickObject(defaultValue$1(item, "on_click", null), setExpanded, componentMapping);
    const title = topTitle == null ? item.title : "[".concat(topTitle, "]");
    return {
      "hard_prefix": hard_prefix,
      "get_prefix": get_prefix,
      "element_obj": element_obj,
      "path": path,
      "on_click": on_click,
      "title": title,
      "reload": reload
    };
  };
  const getRoutes = () => {
    if (login) {
      return '';
    }
    const menuOptionsFinal = [...menuOptions, ...getDefaultRoutesRaw(appLogo)];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactRouterDom.Routes, {
      history: history
    }, menuOptionsFinal.map(item => {
      const itemDefs = getItemDefaults(item);
      if (item.type === "nav_link") {
        return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
          key: itemDefs["title"],
          path: itemDefs["path"],
          element: itemDefs["element_obj"]
        });
      }
      return item.sub_menu_options.map(subItem => {
        const itemDefs = getItemDefaults(subItem);
        if (subItem.type === 'editor') {
          try {
            return editorRoute(componentMapping[subItem.element]());
          } catch (error) {
            console_debug_log$4("[GMB-GR-E010] subItem.element: ".concat(subItem.element));
            console_debug_log$4(error);
            return null;
          }
        }
        return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
          key: itemDefs["title"],
          path: itemDefs["path"],
          element: itemDefs["element_obj"]
        });
      });
    }), /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      key: "invalidRoute",
      path: "*",
      element: /*#__PURE__*/React.createElement(InvalidRouteRedirect, null)
    })));
  };
  const GetNavs = (item_type_filter, topTitle) => {
    if (login) {
      return '';
    }
    return menuOptions.filter(item => item.location === item_type_filter).map(item => {
      const itemDefs = getItemDefaults(item, topTitle);
      if (item.type === "nav_link") {
        // Items in main menu, not belonging to any NavDropdown
        return /*#__PURE__*/React.createElement(Nav.Link, {
          key: item.title,
          as: reactRouterDom.Link,
          to: itemDefs["path"],
          onClick: itemDefs["on_click"],
          reloadDocument: itemDefs["reload"]
        }, itemDefs["title"]);
      }
      // Navigation dropdown (main menu item with sub-menus)
      return /*#__PURE__*/React.createElement(NavDropdown, {
        key: item.title,
        title: itemDefs["title"],
        id: "basic-nav-dropdown"
      }, item.sub_menu_options.map(subItem => {
        const itemDefs = getItemDefaults(subItem);
        if (subItem.type === 'editor') {
          try {
            return editorMenuOption(componentMapping[subItem.element](), setExpanded);
          } catch (error) {
            console_debug_log$4("[GMB-GR-E020] subItem.element: ".concat(subItem.element));
            console_debug_log$4(error);
            return null;
          }
        }
        return /*#__PURE__*/React.createElement(NavDropdown.Item, {
          key: subItem.title,
          as: reactRouterDom.Link,
          to: itemDefs["path"],
          onClick: itemDefs["on_click"],
          reloadDocument: itemDefs["reload"]
        }, itemDefs["title"]);
      }));
    });
  };
  const menuItems = (item_type_filter, topTitle) => {
    if (login) {
      return '';
    }
    if (typeof menuOptions === 'undefined' || menuOptions === null) {
      return '';
    }
    // Routes
    if (item_type_filter === 'routes') {
      return getRoutes();
    }
    // NavLinks
    return GetNavs(item_type_filter, topTitle);
  };
  if (status !== "" && itemType === "routes") {
    // if (login) {
    //     return '';
    // }
    return /*#__PURE__*/React.createElement(DefaultRoutes, {
      appLogo: appLogo
    });
  }
  if (status !== "") {
    // return '';
    return /*#__PURE__*/React.createElement(DefaultRoutes, {
      appLogo: appLogo
    });
  }
  return menuItems(itemType, title);
};
const editorRoute = editor => {
  return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
    path: getPrefix() + '/' + editor.baseUrl,
    element: /*#__PURE__*/React.createElement(editor.component, null)
  });
};
const editorMenuOption = (editor, setExpanded) => {
  return /*#__PURE__*/React.createElement(NavDropdown.Item, {
    key: editor.title,
    as: reactRouterDom.Link,
    to: getPrefix() + '/' + editor.baseUrl,
    onClick: getOnClickObject(null, setExpanded)
  }, editor.title);
};
const getDefaultRoutesRaw = function () {
  let appLogo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return [{
    title: 'homepage1',
    path: "/",
    element_obj: /*#__PURE__*/React.createElement(HomePage, {
      appLogo: appLogo
    }),
    type: "nav_link"
  }, {
    title: 'homepage2',
    path: getPrefix(true) + "/",
    element_obj: /*#__PURE__*/React.createElement(HomePage, {
      appLogo: appLogo
    }),
    type: "nav_link"
  }, {
    title: 'homepage3',
    path: getPrefix(true).replace('/#', '/') + "/",
    element_obj: /*#__PURE__*/React.createElement(HomePage, {
      appLogo: appLogo
    }),
    type: "nav_link"
  }, {
    title: 'loginpage1',
    path: "/login",
    element_obj: /*#__PURE__*/React.createElement(LoginPage, {
      appLogo: appLogo
    }),
    type: "nav_link"
  }, {
    title: 'loginpage2',
    path: getPrefix(true) + "/login",
    element_obj: /*#__PURE__*/React.createElement(LoginPage, {
      appLogo: appLogo
    }),
    type: "nav_link"
  }, {
    title: 'loginpage3',
    path: getPrefix(true).replace('/#', '/') + "/login",
    element_obj: /*#__PURE__*/React.createElement(LoginPage, {
      appLogo: appLogo
    }),
    type: "nav_link"
  }];
};

// Catch all invalid routes and redirect to a default page or show a not found component
const InvalidRouteRedirect = () => {
  console_debug_log$4('InvalidRouteRedirect');
  return /*#__PURE__*/React.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, "URL not found...");
};
const DefaultRoutes = _ref2 => {
  let {
    appLogo = null
  } = _ref2;
  getPrefix(true).replace('/#', '/') + "/";
  return /*#__PURE__*/React.createElement(reactRouterDom.Routes, {
    history: history
  }, getDefaultRoutesRaw(appLogo).map(item => {
    return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      key: item["title"],
      path: item["path"],
      element: item["element_obj"]
    });
  }));
};
const getMenuFromApi = (state, setState, setMenuOptions) => {
  if (state !== "") {
    return;
  }
  const endpoint = "menu_options";
  const db = new dbApiService$3({
    url: endpoint
  });
  db.getAll().then(data => {
    setMenuOptions(data.resultset);
  }, error => {
    error = formatCaughtError$5(error);
    if (!window.location.href.includes("/login")) {
      setState(error);
    }
  });
};

const mergeDicts$1 = (dictToAdd, originDict) => {
  if (!(typeof dictToAdd === 'object' && dictToAdd !== null)) {
    dictToAdd = {};
  }
  const dictToAddFinal = Object.entries(dictToAdd).reduce((acc, _ref) => {
    let [key, value] = _ref;
    acc[key] = value;
    return acc;
  }, {
    ...originDict
  });
  return dictToAddFinal;
};

var dictUtilities = /*#__PURE__*/Object.freeze({
    __proto__: null,
    mergeDicts: mergeDicts$1
});

// GenericCrudEditor provider. To share data and functions between the editor components


// Create a context to hold the function
const MainSectionContext = /*#__PURE__*/React.createContext();

// Provider Component
const MainSectionProvider = _ref => {
  let {
    children
  } = _ref;
  const [cache, setCache] = React.useState({});
  const initCache = () => {
    setCache({});
  };
  const getCachedData = entryName => {
    return cache[entryName];
  };
  const putCachedData = (entryName, data) => {
    setCache(prevCache => ({
      ...prevCache,
      [entryName]: data
    }));
  };
  const typeofCachedData = entryName => {
    return typeof cache[entryName];
  };
  const listCache = () => {
    return cache;
  };
  const debugCache = function () {
    let description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'debugCache';
    console_debug_log$4(">>>>--->> listCache [".concat(description, "]:"), listCache());
    return '';
  };
  return /*#__PURE__*/React.createElement(MainSectionContext.Provider, {
    value: {
      initCache,
      getCachedData,
      putCachedData,
      typeofCachedData,
      listCache,
      debugCache
    }
  }, children);
};

// GenericCrudEditor Specific Functions handling

const genericFuncArrayDefaultValue = function () {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    'error': false,
    'errorMsg': '',
    'fieldMsg': {},
    'fieldValues': data,
    'fieldsToDelete': [],
    'otherData': {}
  };
};
const reduceAllResponses = (responses, data) => {
  const defaultValues = genericFuncArrayDefaultValue(data);
  const responsesReduced = responses.reduce((acc, response) => {
    response = {
      ...defaultValues,
      ...response
    };
    acc['error'] = acc['error'] || response['error'];
    acc['errorMsg'] += (acc['errorMsg'] !== '' && response['errorMsg'] !== '' ? ', ' : '') + response['errorMsg'];
    acc['fieldMsg'] = {
      ...acc['fieldMsg'],
      ...response['fieldMsg']
    };
    acc['fieldValues'] = {
      ...acc['fieldValues'],
      ...response['fieldValues']
    };
    acc['fieldsToDelete'] = [...acc['fieldsToDelete'], ...response['fieldsToDelete']];
    acc['otherData'] = {
      ...acc['otherData'],
      ...response['otherData']
    };
    return {
      ...acc
    };
  }, defaultValues);
  return responsesReduced;
};
const processGenericFuncArray = (editor, funcArrayName, data, action) => {
  return new Promise((resolve, reject) => {
    const genericFuncArray = editor[funcArrayName];
    const allFuncPromises = genericFuncArray.map(objFunc => {
      // objFunc response must be an object can contain any or all of this attributes:
      // {
      //   'error': false,
      //   'errorMsg': '',
      //   'fieldMsg': {},
      //   'fieldValues': {},
      //   'fieldsToDelete': [],
      //   'otherData': [],
      // }
      return objFunc(data, editor, action);
    });
    Promise.all(allFuncPromises).then(results => {
      // const allFuncResponses = results.forEach(
      const allFuncResponses = results.map(result => result);
      let finalResponse = reduceAllResponses(allFuncResponses, data);
      finalResponse['fieldsToDelete'].forEach(fieldName => {
        delete finalResponse.fieldValues[fieldName];
      });
      resolve(finalResponse);
    }, error => reject(error));
  });
};

// General specific funcions 

// export const UserFilterDbListPreRead = (data, editor, action) => {
//     // User filter DbListPreRead to filter by user_id
//     return new Promise((resolve, reject) => {
//         let resp = genericFuncArrayDefaultValue(data);
//         const { currentUserValue } = authenticationService;
//         resp.fieldValues['user_id'] = currentUserValue.id
//         // console_debug_log(">>> UserFilterDbListPreRead | resp:");
//         // console_debug_log(resp);
//         resolve(resp);
//     });
// }

// export const UserFilterDbPreRead = (data, editor, action) => {
//     // user_id assignment during Database Pre Read
//     // Template: timestampDbPostRead
//     return new Promise((resolve, reject) => {
//         let resp = genericFuncArrayDefaultValue(data);
//         const { currentUserValue } = authenticationService;
//         // console_debug_log(`>>> UserFilterDbPreRead ||| data:`);
//         // console_debug_log(data);
//         data['user_id'] = currentUserValue.id
//         resp.fieldValues.resultset =  Object.assign({}, data);
//         // resp.fieldValues['user_id'] = currentUserValue.id
//         // console_debug_log(`>>> UserFilterDbPreRead | currentUserValue.id: ${currentUserValue.id} | resp:`);
//         // console_debug_log(resp);
//         resolve(resp);
//     });
// }

const mandatoryFiltersDbListPreRead = (data, editor, action) => {
  // Mandatory Filters DbListPreRead to manage filters in list and search
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(data);
    if (typeof editor.mandatoryFilters !== 'undefined') {
      resp.fieldValues = replaceSpecialVars(editor.mandatoryFilters);
    }
    // console_debug_log(`>>> mandatoryFiltersDbListPreRead | resp:`, resp, 'editor.mandatoryFilters:', editor.mandatoryFilters);
    resolve(resp);
  });
};
const mandatoryFiltersDbPreRead = (data, editor, action) => {
  // Mandatory Filters assignment during Database Pre Read
  // Template: timestampDbPostRead
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(data);
    if (typeof editor.mandatoryFilters !== 'undefined') {
      resp.fieldValues.resultset = Object.assign(data, replaceSpecialVars(editor.mandatoryFilters));
    }
    // console_debug_log(`>>> mandatoryFiltersDbPreRead | resp:`, resp, 'data:', data);
    resolve(resp);
  });
};

const GMT_TAIL = '.000Z'; // '.000-0000'
const DATE_TIME_TAIL = "T00:00:00".concat(GMT_TAIL);
const timestampToDate$1 = function (timestamp) {
  let fullDateTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let militaryTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const timestampUnixEpoch = timestamp * 1000;
  const date = new Date(timestampUnixEpoch);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  // const formattedTime = hours % 12 + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
  const formattedTime = (hours > 12 ? hours - 12 : hours) + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
  if (fullDateTime) {
    if (separator) {
      if (!militaryTime) {
        return date.toISOString().split("T")[0] + separator + formattedTime;
      }
      return date.toISOString().split("T").join(separator).slice(0, 19);
    }
    if (!militaryTime) {
      return date.toISOString().split("T")[0] + 'T' + formattedTime;
    }
    return date.toISOString();
  }
  return date.toISOString().split("T")[0];
};
const addMissingTz = stringDate => stringDate + (stringDate.indexOf('.') > 0 ? '' : GMT_TAIL);
const dateToTimestap = stringDate => new Date(addMissingTz(stringDate)).valueOf() / 1000;
const nowToTimestap = () => new Date().valueOf() / 1000;
const fixDateWithTz = dateTimeString => {
  switch (dateTimeString.length) {
    case 10:
      dateTimeString += DATE_TIME_TAIL;
      break;
    case 16:
      dateTimeString += ":00".concat(GMT_TAIL);
      break;
    default:
      dateTimeString = addMissingTz(dateTimeString);
  }
  return dateTimeString;
};
const processTimestampToDate = (timestampMixed, fullDatetime, separator) => {
  if (!timestampMixed) {
    timestampMixed = 0; // nowToTimestap();
  }
  if (typeof timestampMixed === 'string') {
    timestampMixed = fixDateWithTz(timestampMixed);
    timestampMixed = dateToTimestap(timestampMixed);
  }
  return timestampToDate$1(timestampMixed, fullDatetime, separator);
};
const processDateToTimestamp = dateTime => {
  dateTime = fixDateWithTz(dateTime);
  return dateToTimestap(dateTime);
};
const addZeroTimeToDate = dateValue => {
  const date = new Date(dateValue);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.toISOString().slice(0, 19).replace('T', ' ');
};

var dateTimestamp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addMissingTz: addMissingTz,
    addZeroTimeToDate: addZeroTimeToDate,
    dateToTimestap: dateToTimestap,
    fixDateWithTz: fixDateWithTz,
    nowToTimestap: nowToTimestap,
    processDateToTimestamp: processDateToTimestamp,
    processTimestampToDate: processTimestampToDate,
    timestampToDate: timestampToDate$1
});

// GenericCrudEditor timestamp components

const timestampDbListPostRead = (dataRead, editor, action) => {
  // Timestamp to Date convertion during Listing Database Post Read
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(dataRead);
    const data = dataRead.resultset.map(row => {
      const new_row = editor.fieldElements.reduce((acc, currentObj) => {
        switch (currentObj.type) {
          case 'date':
          case 'datetime-local':
            acc[currentObj.name] = processTimestampToDate(acc[currentObj.name], true, ' ');
            break;
        }
        return {
          ...acc
        };
      }, row);
      return new_row;
    });
    resp.fieldValues.resultset = data;
    resolve(resp);
  });
};
const timestampDbPostRead = (dataRead, editor, action) => {
  // Timestamp to Date convertion during FormData Database Post Read
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(dataRead);
    const new_row = editor.fieldElements.reduce((acc, currentObj) => {
      switch (currentObj.type) {
        case 'date':
          // For date edition, we need only the date portion
          acc[currentObj.name] = processTimestampToDate(acc[currentObj.name]);
          break;
        case 'datetime-local':
          // For datetime-local edition, we need the date from time separation to be the 'T'
          acc[currentObj.name] = processTimestampToDate(acc[currentObj.name], true, 'T');
          break;
      }
      return {
        ...acc
      };
    }, dataRead.resultset);
    resp.fieldValues.resultset = new_row;
    resolve(resp);
  });
};
const timestampDbPreWrite = (row, editor, action) => {
  return new Promise((resolve, reject) => {
    // Date to Timestamp convertion during FormData Database Pre Writing
    let resp = genericFuncArrayDefaultValue(row);
    const new_row = editor.fieldElements.reduce((acc, currentObj) => {
      switch (currentObj.type) {
        case 'date':
        case 'datetime-local':
          acc[currentObj.name] = processDateToTimestamp(acc[currentObj.name]);
          break;
      }
      return {
        ...acc
      };
    }, row);
    // Update update_date with current date/time timestamp
    if (typeof new_row['update_date'] !== 'undefined') {
      new_row['update_date'] = nowToTimestap();
    }
    resp.fieldValues = new_row;
    resolve(resp);
  });
};

// GenericCrudEditor common functions

const getEditorData = props => props.editorConfig;
const setParentData = (parentData, editor) => {
  // There's a inconsistency, parentData isn't loaded yet
  // So leave things asi is...
  if (parentData === null) {
    return editor;
  }
  if (parentData.length < editor.parentKeyNames.length) {
    return editor;
  }
  let newParentFilter = {};
  editor.parentKeyNames.map(keyPair => newParentFilter[keyPair.parameterName] = parentData[keyPair.parentElementName]);
  // IMPORTANT: parentFilter and parentData
  // This is for editor.type = 'child_listing' / editor.subType = 'array'
  // The component call must have the parentData={parentData} attribute
  // and eventually handleFormPageActions={handleFormPageActions}
  editor.parentFilter = newParentFilter;
  editor.parentData = parentData;
  return editor;
};
const getColumns = editor => {
  return Object.keys(editor.fieldElements).map(key => {
    if (typeof editor.fieldElements[key].listing == "undefined") {
      editor.fieldElements[key].listing = false;
    }
    if (typeof editor.fieldElements[key].required == "undefined") {
      editor.fieldElements[key].required = false;
    }
    if (typeof editor.fieldElements[key].primaryKey == "undefined") {
      editor.fieldElements[key].primaryKey = false;
      if (editor.fieldElements[key].type === "_id") {
        editor.fieldElements[key].primaryKey = true;
      }
    }
    if (editor.fieldElements[key].primaryKey) {
      editor.fieldElements[key].readonly = true;
      editor.primaryKeyName = editor.fieldElements[key].name;
    }
    return editor.fieldElements[key];
  });
};
const getEditoObj = (props, editor_response) => {
  let editor = editor_response.response;
  editor.error = null;
  editor.errorMsg = null;
  // Database backend handler
  editor.db = new dbApiService$3({
    url: editor.dbApiUrl
  });
  // Child components
  if (typeof editor.childComponents == 'undefined') {
    editor.childComponents = [];
  }
  // Primary Key parameter name for API calls
  if (typeof editor.primaryKeyName == 'undefined') {
    editor.primaryKeyName = 'id';
  }
  // Parent Key Names, for child listing
  if (typeof editor.parentKeyNames == 'undefined') {
    editor.parentKeyNames = [];
  }

  // Specific functions - BEGIN
  //
  // dbListPreRead: Before read data from database in the listing.
  // Good place for hidden filters.
  if (typeof editor.dbListPreRead == 'undefined') {
    editor.dbListPreRead = [];
  }
  // dbListPostRead: After read data from database in the listing.
  if (typeof editor.dbListPostRead == 'undefined') {
    editor.dbListPostRead = [];
  }
  // dbPreRead: Before read data from database in formData.
  // If any error, shows the error message.
  if (typeof editor.dbPreRead == 'undefined') {
    editor.dbPreRead = [];
  }
  // dbPostRead: After read data from database in formData.
  // If any error, shows the error message.
  if (typeof editor.dbPostRead == 'undefined') {
    editor.dbPostRead = [];
  }
  // dbPreValidations: FormData field values validation before doing a Delete operation.
  // If any error, prevents the database row to be deleted.
  if (typeof editor.dbPreValidations == 'undefined') {
    editor.dbPreValidations = [];
  }
  // validations: FormData field values validation before write to the database.
  // If any error, prevents the database write and stays in FormData.
  if (typeof editor.validations == 'undefined') {
    editor.validations = [];
  }
  // dbPreWrite: Before write to database, after a successfull validation.
  // If any error, shows the error message, prevents the database write and stays in FormData.
  if (typeof editor.dbPreWrite == 'undefined') {
    editor.dbPreWrite = [];
  }
  // dbPostWrite: After a successful write to database.
  // If any error, shows the error message and stays in FormData.
  if (typeof editor.dbPostWrite == 'undefined') {
    editor.dbPostWrite = [];
  }
  // User ID filter
  if (typeof editor.userIdFilter == 'undefined') {
    editor.userIdFilter = false;
  }
  if (typeof editor.mandatoryFilters == 'undefined') {
    editor.mandatoryFilters = {};
  } else {
    editor.dbListPreRead.push(mandatoryFiltersDbListPreRead);
    editor.dbPreRead.push(mandatoryFiltersDbPreRead);
  }
  // THESE 3 MUST BE LAST ONES
  // Date <-> Timestamp management
  editor.dbListPostRead.push(timestampDbListPostRead // this must be the lastone
  );
  editor.dbPostRead.push(timestampDbPostRead // this must be the lastone
  );
  editor.dbPreWrite.push(timestampDbPreWrite // this must be the lastone
  );

  //
  // Specific functions - END

  // Editor type
  if (typeof editor.type == 'undefined') {
    editor.type = 'master_listing'; // 'master_listing' | 'child_listing'
  }
  // Editor sub-type: 'array' is for arrays elements in tables of child listing
  if (typeof editor.subType == 'undefined') {
    editor.subType = 'table'; // 'array' | 'table'
  }
  // Array name for those 'array' type child listing. These elements are inside a real table.
  if (typeof editor.array_name == 'undefined' && editor.subType === 'array') {
    // No default value for the array name
    // editor.array_name = editor.baseUrl
    editor.error = MSG_ERROR_MISSING_ARRAY_NAME_PARAM; // 'Missing "array_name" parameter. It must be specified for subType "array".';
  }
  // Filters for child components
  editor = setParentData(typeof props.parentData !== 'undefined' ? props.parentData : null, editor);
  // Populate Select type Fields Options
  editor.selectFieldsOptionsPromises = getSelectFieldsOptions(editor.fieldElements);
  // Get parameters passed in the URL
  editor.urlParams = getUrlParams$1(props);
  // Set default values for column definitions
  editor.fieldElements = getColumns(editor);
  // Reenter on create
  if (typeof editor.createReenter == 'undefined') {
    editor.createReenter = false;
  }
  return editor;
};
const verifyEditorObj = editorObj => {
  let gfd_response = {
    "error": false,
    "error_message": "",
    "response": null
  };
  if (typeof editorObj === 'undefined') {
    gfd_response.errorMsg = "GetFormData: editorObj is null [GCE-GFD-012]";
    return Promise.resolve(gfd_response);
  }
  if (typeof editorObj["calleeName"] === 'undefined' || editorObj["calleeName"] === null) {
    gfd_response.error = true;
    gfd_response.errorMsg = "GetFormData: calleeName is not defined [GCE-GFD-010]";
    return Promise.resolve(gfd_response);
  }
  if (editorObj["calleeName"] === false) {
    gfd_response.response = editorObj;
    return Promise.resolve(gfd_response);
  }
  const endpoint = "menu_options/element";
  const db = new dbApiService$3({
    url: endpoint
  });
  const json_body = {
    "element": editorObj["calleeName"]
  };
  return db.getAll([], json_body, 'POST').then(data => {
    gfd_response.response = editorObj;
    return gfd_response;
  }, error => {
    // Unauthorized
    error = formatCaughtError$5(error);
    gfd_response.error = true;
    gfd_response.errorMsg = "GetFormData: ".concat(error.message, " [GCE-GFD-020]");
    return gfd_response;
  });
};
const setEditorParameters = props => {
  let editor_response = getEditorData(props);
  if (!editor_response) {
    console_debug_log$4("GenericCrudEditor / No editor data...");
    return null;
  }
  return verifyEditorObj(editor_response);
};
const getIsReadOnly = mode => mode === ACTION_READ || mode === ACTION_DELETE;
const getEditorFlags = action => {
  let editorFlags = {};
  editorFlags.isEdit = action === ACTION_UPDATE || action === ACTION_CREATE;
  editorFlags.isCreate = action === ACTION_CREATE;
  editorFlags.isRead = action === ACTION_READ;
  editorFlags.isUpdate = action === ACTION_UPDATE;
  editorFlags.isDelete = action === ACTION_DELETE;
  editorFlags.isReadOnly = getIsReadOnly(action);
  return editorFlags;
};
const putSelectOptionsFromArray = function (select_array_elements) {
  let title_field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "title";
  let value_field_name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "value";
  let emptyElement = {};
  emptyElement[title_field_name] = MSG_SELECT_AN_OPTION;
  emptyElement[value_field_name] = null;
  const selectOptions = [...[emptyElement], ...select_array_elements];
  return selectOptions.map(option => /*#__PURE__*/React.createElement("option", {
    key: option[value_field_name],
    value: option[value_field_name]
  }, option[title_field_name]));
};
const getSelectDescription = (currentObj, dbRow) => {
  // Component select (with specific select component and data populator)
  if (currentObj.type === 'select_component') {
    const filter = typeof dbRow[currentObj.name] !== "undefined" ? dbRow[currentObj.name].toString() : null;
    return /*#__PURE__*/React.createElement(currentObj.component, {
      filter: filter,
      show_description: true
    });
  }
  // Generic select
  if (currentObj.type === 'select') {
    return currentObj.select_elements.filter(option => dbRow[currentObj.name] && option.value === dbRow[currentObj.name].toString()).map(option => option.title);
  }
  // Verify if the attribute (field) exists, if not, the value will be Null
  let value = null;
  if (typeof dbRow[currentObj.name] !== 'undefined') {
    value = dbRow[currentObj.name];
  }
  // Show specific component
  if (currentObj.type === 'component' || typeof currentObj.component !== 'undefined') {
    return /*#__PURE__*/React.createElement(currentObj.component, {
      value: value,
      dbRow: dbRow,
      listing: "1"
    });
  }
  // Returns plain value
  return value;
};

// Suggestion Dropdown

const SuggestionDropdown = _ref => {
  let {
    name,
    disabled,
    required,
    className,
    value,
    config
  } = _ref;
  const {
    setFieldValue
  } = formik.useFormikContext();
  const [inputValue, setInputValue] = React.useState(value);
  const [suggestions, setSuggestions] = React.useState([]);

  // This component's input field must be different to the external input field to enable value sync
  const nameInternal = "".concat(name, "_sdd");
  const filter_api_url = defaultValue$1(config, 'filter_api_url'); // Ex. "fda_food_query"
  const filter_api_request_method = defaultValue$1(config, "filter_api_request_method", "POST"); // Ex. true or false
  const filter_search_param_name = defaultValue$1(config, 'filter_search_param_name'); // Ex. "food_name"
  const filter_search_other_param = defaultValue$1(config, 'filter_search_other_param'); // Ex. {"autocomplete": "1"}
  const suggestion_id_fieldname = defaultValue$1(config, "suggestion_id_fieldname"); // Ex. "id"
  const suggestion_desc_fieldname = defaultValue$1(config, "suggestion_desc_fieldname"); // Ex. "description"
  const suggestion_name_fieldname = defaultValue$1(config, "suggestion_name_fieldname", suggestion_desc_fieldname); // Ex. "description"
  const autocomplete_fields = defaultValue$1(config, "autocomplete_fields", {});
  React.useEffect(() => {
    if (inputValue) {
      // Get suggestions from external surce
      const dbService = new dbApiService$3({
        url: filter_api_url
      });
      let urlParams = {};
      let bodyData = replaceSpecialVars(filter_search_other_param);
      bodyData[filter_search_param_name] = inputValue;
      if (filter_api_request_method === "GET") {
        urlParams = Object.assign({}, bodyData);
        bodyData = Object.assign({});
      }
      dbService.getAll(urlParams, bodyData, filter_api_request_method).then(response => {
        if (typeof response.resultset == "string") {
          setSuggestions([]);
        } else {
          setSuggestions(response.resultset);
        }
      }).catch(error => console.error(error));
    }
  }, [inputValue, filter_api_url, filter_search_other_param, filter_search_param_name, name, setFieldValue, filter_api_request_method]);
  const handleSuggestionSelected = suggestion => {
    if (suggestion) {
      Object.entries(autocomplete_fields).forEach(_ref2 => {
        let [field_name, attr_name] = _ref2;
        const value = suggestion[attr_name] ? suggestion[attr_name] : '';
        setFieldValue(field_name, value);
      });
      // Store new inputValue from suggestion
      const newInputValue = suggestion[suggestion_name_fieldname];
      setInputValue(newInputValue);
    }
  };
  const inputValueChange = newInputValue => {
    setFieldValue(name, newInputValue);
    setInputValue(newInputValue);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "align-middle flex"
  }, /*#__PURE__*/React.createElement(Downshift, {
    inputValue: inputValue,
    onChange: handleSuggestionSelected
    // onInputValueChange={debounce((inputValue) => setInputValue(inputValue), 500)}
    // onInputValueChange={(inputValue) => setInputValue(inputValue)}
    ,
    onInputValueChange: inputValue => inputValueChange(inputValue),
    itemToString: item => item ? item[suggestion_name_fieldname] : inputValue,
    id: name,
    name: nameInternal,
    key: nameInternal,
    disabled: disabled,
    required: required,
    className: className
  }, _ref3 => {
    let {
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      highlightedIndex,
      selectedItem,
      getToggleButtonProps
    } = _ref3;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", getInputProps()), /*#__PURE__*/React.createElement("ul", getMenuProps(), isOpen ? suggestions.map((suggestion, index) => /*#__PURE__*/React.createElement("li", getItemProps({
      key: convertId$2(suggestion[suggestion_id_fieldname]),
      index,
      item: suggestion,
      style: {
        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
        fontWeight: selectedItem === suggestion ? 'bold' : 'normal'
      }
    }), suggestion[suggestion_desc_fieldname])) : null));
  })), inputValue && suggestions.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "invalid-feedback"
  }, "Error: No suggestions found."));
};

// Search Engine button


// import GoogleIcon from "../images/google_logo.svg";
const googleIcon = "google_logo.svg";
const SearchEngineButton = _ref => {
  let {
    valueElement,
    google_prompt
  } = _ref;
  const setPrompt = (prompt, valueToReplace) => {
    return prompt.replace("%s", valueToReplace);
  };
  const handleGoogleClick = e => {
    e.preventDefault();
    const inputValue = document.getElementById(valueElement).value;
    if (inputValue !== "") {
      const googleSearchUrl = "https://www.google.com/search?q=".concat(encodeURIComponent(setPrompt(google_prompt, inputValue)));
      window.open(googleSearchUrl, '_blank');
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleGoogleClick
  }, /*#__PURE__*/React.createElement("img", {
    src: imageDirectory$1 + googleIcon,
    alt: "Open Google Search"
  }))));
};

// GenericCrudEditor data form functions

let calcFields = {};
const FormPage = _ref => {
  let {
    editor_par,
    mode_par,
    id_par,
    onCancel_par,
    setInfoMsg_par,
    handleFormPageActions = null,
    message = "",
    messageType = ""
  } = _ref;
  const [formData, setFormData] = React.useState(null);
  const [status, setStatus] = React.useState("");
  const [refresh, setRefresh] = React.useState(0);
  const [formMsg, setFormMsg] = React.useState({
    message: message,
    messageType: messageType
  });
  React.useContext(MainSectionContext);
  const editor = editor_par;
  const mode = mode_par;
  const id = id_par;
  React.useEffect(() => {
    if (mode === ACTION_CREATE) {
      // To assign specific default values in creation...
      processGenericFuncArray(editor, 'dbPreRead', {}, mode).then(funcResponse => setFormData(funcResponse.fieldValues), error => setStatus(errorAndReEnter$1(error, '[GCE-FD-010]')));
    }
    if (mode === ACTION_UPDATE || mode === ACTION_READ || mode === ACTION_DELETE) {
      let accessKeysDataScreen = {};
      accessKeysDataScreen[editor.primaryKeyName] = id;
      processGenericFuncArray(editor, 'dbPreRead', accessKeysDataScreen, mode).then(funcResponse => {
        accessKeysDataScreen = Object.assign(funcResponse.fieldValues, editor.parentFilter);
        editor.db.getOne(accessKeysDataScreen).then(data => {
          // To assign specific default values in update, read or delete...
          processGenericFuncArray(editor, 'dbPostRead', data, mode).then(funcResponse => setFormData(funcResponse.fieldValues), error => setStatus(errorAndReEnter$1(error, '[GCE-FD-020]')));
        }, error => {
          console_debug_log$4("ERROR - GCE-FD-030");
          console.error(error);
          setStatus(errorAndReEnter$1(error, '[GCE-FD-030]'));
        });
      }, error => setStatus(errorAndReEnter$1(error, '[GCE-FD-040]')));
    }
  }, [id, editor, mode, refresh]);
  if (handleFormPageActions === null) {
    handleFormPageActions = funcResponse => {
      if (typeof funcResponse['otherData']['refresh'] != "undefined") {
        setRefresh(refresh + 1);
        setFormMsg({
          message: '',
          messageType: ''
        });
      }
    };
  }
  if (!editor || !formData) {
    return WaitAnimation$1();
  }
  const editorFlags = getEditorFlags(mode);
  const actionTitle = mode === ACTION_CREATE ? MSG_ACTION_CREATE : mode === ACTION_UPDATE ? MSG_ACTION_UPDATE : mode === ACTION_READ ? MSG_ACTION_READ : MSG_ACTION_DELETE;
  return (
    /*#__PURE__*/
    // <div className="container mx-auto px-4">
    React.createElement("div", {
      className: "w-screen bg-gray-300 fyn_jumbotron"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-semibold mb-4"
    }, editor.title + " - " + actionTitle), status && /*#__PURE__*/React.createElement("div", {
      className: ERROR_MSG_CLASS
    }, status), !status && formData && /*#__PURE__*/React.createElement(EditFormFormik, {
      editor: editor,
      parenHandleCancel: onCancel_par,
      setInfoMsg: setInfoMsg_par,
      action: mode,
      dataset: formData.resultset,
      message: formMsg['message'],
      messageType: formMsg['messageType'],
      handleFormPageActions: handleFormPageActions
    }), !status && formData && !editorFlags.isCreate && iterateChildComponents(editor, formData.resultset, handleFormPageActions), '')
  );
};
const PutOneFormfield = _ref2 => {
  let {
    currentObjArray,
    componentSelectFieldsOptions,
    editorFlags,
    errors,
    touched,
    initialValue
  } = _ref2;
  const {
    setFieldValue
  } = formik.useFormikContext();
  let currentObj = currentObjArray[1];
  const labelClass = "font-medium text-gray-700";
  const labelClassRequiredFld = "font-medium text-red-700";
  const divclass = "flex flex-col form-group";
  const fieldClass = "form-control" + (errors[currentObj.name] && touched[currentObj.name] ? " is-invalid" : "") + " border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
  const readOnlyfield = editorFlags.isReadOnly || typeof currentObj.readonly !== "undefined" && currentObj.readonly;
  if (typeof currentObj.hidden !== "undefined" && currentObj.hidden) {
    return /*#__PURE__*/React.createElement(formik.Field, {
      key: currentObj.name,
      name: currentObj.name,
      type: "hidden"
    });
  }
  const getLabelClass = () => {
    return currentObj.required && !readOnlyfield ? labelClassRequiredFld : labelClass;
  };
  const getLabelSuffix = () => {
    return currentObj.required && !readOnlyfield ? ' *' : '';
  };
  const addCalculation = htmlElement => {
    if (defaultValue$1(htmlElement, "formula") !== '') {
      calcFields[htmlElement.name] = htmlElement.formula;
    }
  };
  const runCalculation = e => {
    for (const key in calcFields) {
      const formula = calcFields[key];
      if (formula.includes(e.target.name)) {
        const inputs = document.getElementsByName(key);
        if (inputs.length > 0) {
          // const input = inputs[0];
          let calculatedValue = null;
          try {
            calculatedValue = eval(formula);
          } catch (error) {
            console.error('Error calculating value:', error);
          }
          if (!isNaN(calculatedValue)) {
            setFieldValue(key, calculatedValue);
          } else {
            console.error('calculatedValue is:', calculatedValue);
          }
        }
      }
    }
  };
  addCalculation(currentObj);
  const input_type = ['number', 'integer'].includes(currentObj.type) ? 'number' : currentObj.type;

  // id name
  let idName = currentObj.name;

  // Special buttons definitions
  const chatbot_popup = defaultValue$1(currentObj, "chatbot_popup", false); // Ex. true or false
  const chatbot_prompt = defaultValue$1(currentObj, "chatbot_prompt"); // Ex. "Give me the %s calories in KCAL including the serving size amount and serving size unit"
  const google_popup = defaultValue$1(currentObj, "google_popup", false); // Ex. true or false
  const google_prompt = defaultValue$1(currentObj, "google_prompt"); // Ex. "%s calories in KCAL, serving size amount and serving size unit"

  let elementInput;
  let elementLabel = /*#__PURE__*/React.createElement("label", {
    htmlFor: idName,
    className: getLabelClass()
  }, currentObj.label + getLabelSuffix());
  let elementError = /*#__PURE__*/React.createElement(formik.ErrorMessage, {
    name: idName,
    component: "div",
    className: "invalid-feedback"
  });
  switch (currentObj.type) {
    case 'select_component':
      elementInput = /*#__PURE__*/React.createElement(formik.Field, {
        name: idName,
        id: idName,
        as: "select",
        disabled: readOnlyfield,
        required: currentObj.required && !readOnlyfield,
        className: fieldClass,
        onBlur: runCalculation
      }, /*#__PURE__*/React.createElement(currentObj.component, null));
      break;
    case 'select':
      elementInput = /*#__PURE__*/React.createElement(formik.Field, {
        name: idName,
        id: idName,
        as: "select",
        disabled: readOnlyfield,
        required: currentObj.required && !readOnlyfield,
        className: fieldClass,
        onBlur: runCalculation
      }, putSelectOptionsFromArray(currentObj.select_elements));
      break;
    case 'component':
      elementInput = /*#__PURE__*/React.createElement(currentObj.component, {
        // dbRow={initialValue}
        value: initialValue,
        name: idName,
        id: idName,
        disabled: readOnlyfield,
        required: currentObj.required && !readOnlyfield,
        className: fieldClass,
        onBlur: runCalculation,
        showAsField: "1"
      });
      break;
    case 'suggestion_dropdown':
      idName = "".concat(currentObj.name, "-input");
      elementInput = /*#__PURE__*/React.createElement(SuggestionDropdown, {
        name: currentObj.name,
        id: currentObj.name,
        disabled: readOnlyfield,
        required: currentObj.required && !readOnlyfield,
        className: fieldClass,
        value: initialValue,
        config: currentObj,
        onBlur: runCalculation
      });
      break;
    case 'label':
      elementLabel = '';
      elementError = '';
      elementInput = /*#__PURE__*/React.createElement("div", {
        key: idName
      }, /*#__PURE__*/React.createElement("label", {
        className: divclass
      }, currentObj.label));
      break;
    case 'hr':
      elementLabel = '';
      elementError = '';
      elementInput = /*#__PURE__*/React.createElement("div", {
        key: idName
      }, /*#__PURE__*/React.createElement("hr", null));
      break;
    case 'number':
    case 'integer':
    case 'text':
    case 'date':
    case 'datetime-local':
    case 'email':
    default:
      elementLabel = /*#__PURE__*/React.createElement("label", {
        htmlFor: currentObj.name,
        className: getLabelClass()
      }, currentObj.label + getLabelSuffix());
      if (typeof currentObj.component === 'undefined') {
        // Normal input field
        elementInput = /*#__PURE__*/React.createElement(formik.Field, {
          key: idName,
          name: idName,
          id: idName,
          type: input_type,
          disabled: readOnlyfield,
          required: currentObj.required && !readOnlyfield,
          className: fieldClass,
          onBlur: runCalculation
        });
      } else {
        // Component input field
        elementInput = /*#__PURE__*/React.createElement(currentObj.component, {
          value: initialValue,
          name: idName,
          id: idName,
          disabled: readOnlyfield,
          required: currentObj.required && !readOnlyfield,
          className: fieldClass,
          onBlur: runCalculation,
          showAsField: "1"
        });
      }
      break;
  }

  // Special buttons suffix
  if (chatbot_popup || google_popup) {
    elementInput = /*#__PURE__*/React.createElement("div", {
      className: "align-middle flex"
    }, elementInput, chatbot_popup && currentObj.aux_component !== null && /*#__PURE__*/React.createElement(currentObj.aux_component, {
      valueElement: idName,
      chatbot_prompt: chatbot_prompt
    }), google_popup && /*#__PURE__*/React.createElement(SearchEngineButton, {
      valueElement: idName,
      google_prompt: google_prompt
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    key: currentObj.name,
    className: divclass
  }, elementLabel, elementInput, elementError);
};
const EditFormFormik = _ref3 => {
  let {
    editor,
    parenHandleCancel,
    setInfoMsg,
    action,
    dataset,
    message = "",
    messageType = "",
    handleFormPageActions
  } = _ref3;
  const [formData, setFormData] = React.useState({
    readyToShow: false,
    dataset: null,
    canCommit: null,
    message: null,
    messageType: null
  });
  React.useEffect(() => {
    const editorFlags = getEditorFlags(action);
    if (editorFlags.isRead) {
      setFormData({
        readyToShow: true,
        dataset: dataset,
        canCommit: null,
        message: null,
        messageType: null
      });
    } else {
      // Validate data before show the Data Form
      processGenericFuncArray(editor, 'dbPreValidations', dataset, action).then(funcResponse => {
        setFormData({
          readyToShow: true,
          dataset: funcResponse.fieldValues,
          canCommit: true,
          message: null,
          messageType: null
        });
      }, error => {
        setFormData({
          readyToShow: true,
          dataset: error.fieldValues,
          canCommit: null,
          message: error.errorMsg,
          messageType: "ERROR"
        });
      });
    }
  }, [editor, action, dataset]);
  if (!formData['readyToShow']) {
    return '';
  }
  if (!formData['canCommit'] === null) {
    formData['canCommit'] = false;
  }
  if (!formData['message'] === null) {
    formData['message'] = message;
  }
  if (!formData['messageType'] === null) {
    formData['messageType'] = messageType;
  }
  return EditFormFormikFinal({
    editor: editor,
    parenHandleCancel: parenHandleCancel,
    setInfoMsg: setInfoMsg,
    action: action,
    dataset: formData['dataset'],
    canCommit: formData['canCommit'],
    message: formData['message'],
    messageType: formData['messageType'],
    handleFormPageActions: handleFormPageActions
  });
};
const EditFormFormikFinal = _ref4 => {
  let {
    editor,
    parenHandleCancel,
    setInfoMsg,
    action,
    dataset,
    canCommit,
    message,
    messageType,
    handleFormPageActions
  } = _ref4;
  const editorFlags = getEditorFlags(action);
  const initialFieldValues = getFieldElementsDbValues(editor, dataset);
  const rowId = initialFieldValues[editor.primaryKeyName];
  const componentSelectFieldsOptions = editor.selectFieldsOptionsPromises.map(currentObj => currentObj.promiseResult);
  if (messageType === '') {
    messageType = 'ERROR';
  }
  if (canCommit && editorFlags.isDelete) {
    // 'Are you sure to delete this element? Please confirm with the [Delete] button or [Cancel] this operation.'
    messageType = "ERROR";
    message = (message ? "<br/>" : "") + MSG_DELETE_CONFIRM;
  }
  const handleCancel = function () {
    let infoMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof infoMsg !== 'string') {
      infoMsg = '';
    }
    setInfoMsg(infoMsg);
    parenHandleCancel(config);
  };
  const submitHandler = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };
  return /*#__PURE__*/React.createElement(formik.Formik, {
    key: editor.name,
    enableReinitialize: true,
    initialValues: initialFieldValues
    //
    // Todo: THIS DOESN'T WORK IN ACTION=CREATION
    // validationSchema={Yup.object().shape(
    //     getFieldElementsYupValidations(editor, editorFlags)
    // )}
    ,
    onSubmit: (submitedtElements, _ref5) => {
      let {
        setStatus,
        setSubmitting
      } = _ref5;
      if (!canCommit) {
        setSubmitting(false);
      } else {
        setStatus();
        if (!(!rowId && editorFlags.isCreate || rowId)) {
          console_debug_log$4("NO-SENSE ERROR: rowId is Zero and is not Creation");
          setSubmitting(false);
          setStatus("NO-SENSE ERROR: rowId is Zero and is not Creation");
        }
        if (editorFlags.isCreate && typeof submitedtElements.id !== "undefined") {
          // Removes calculated ID
          delete submitedtElements.id;
        }
        processGenericFuncArray(editor, 'validations', submitedtElements, action).then(funcResponse => {
          processGenericFuncArray(editor, 'dbPreWrite', submitedtElements, action).then(funcResponse => {
            submitedtElements = {
              ...funcResponse.fieldValues
            };
            saveRowToDatabase(editor, action, rowId, submitedtElements, initialFieldValues).then(result => {
              if (result && result.error) {
                setSubmitting(false);
                setStatus(result);
              } else {
                if (editorFlags.isCreate) {
                  submitedtElements.id = result['resultset']['_id'];
                }
                processGenericFuncArray(editor, 'dbPostWrite', submitedtElements, action).then(funcResponse => {
                  const infoMsg = editorFlags.isDelete ? MSG_DONE_DELETED : editorFlags.isCreate ? MSG_DONE_CREATED : editorFlags.isUpdate ? MSG_DONE_UPDATED : null;
                  handleFormPageActions(funcResponse);
                  if (editorFlags.isCreate && editor.createReenter) {
                    const config = {
                      nextAction: ACTION_READ,
                      id: result['resultset']['_id'],
                      infoMsg: infoMsg
                    };
                    handleCancel(infoMsg, config);
                  } else {
                    handleCancel(infoMsg);
                  }
                }, error => {
                  console_debug_log$4('dbPostWrite [EFFF-010] | error:', error);
                  setSubmitting(false);
                  setStatus(errorAndReEnter$1(error.errorMsg, '[EFFF-010]'));
                });
              }
            }, error => {
              console_debug_log$4('saveRowToDatabase [EFFF-020] | error:', error);
              setSubmitting(false);
              setStatus(errorAndReEnter$1(error, 'EFFF-020'));
            });
          }, error => {
            console_debug_log$4('dbPreWrite [EFFF-030] | error:', error);
            setSubmitting(false);
            setStatus(errorAndReEnter$1((error.errorMsg, 'EFFF-030')));
          });
        }, error => {
          console_debug_log$4('validations [EFFF-040] | error:', error);
          setSubmitting(false);
          setStatus(errorAndReEnter$1(error.errorMsg, 'EFFF-040'));
        });
      }
    }
  }, _ref6 => {
    let {
      errors,
      status,
      touched,
      isSubmitting
    } = _ref6;
    return /*#__PURE__*/React.createElement(formik.Form, {
      onKeyDown: submitHandler
    }, message && /*#__PURE__*/React.createElement("div", {
      className: messageType === "ERROR" ? ERROR_MSG_CLASS : INFO_MSG_CLASS$1
    }, message), Object.entries(editor.fieldElements).map(function (htmlElement) {
      return /*#__PURE__*/React.createElement(PutOneFormfield, {
        key: htmlElement[1].name,
        currentObjArray: htmlElement,
        componentSelectFieldsOptions: componentSelectFieldsOptions,
        editorFlags: editorFlags,
        errors: errors,
        touched: touched,
        initialValue: initialFieldValues[htmlElement[1].name]
      });
    }), /*#__PURE__*/React.createElement("table", {
      className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
    }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, !editorFlags.isRead && canCommit && /*#__PURE__*/React.createElement("td", {
      align: "left"
    }, /*#__PURE__*/React.createElement("button", {
      key: "SubmitButton",
      type: "submit",
      className: BUTTON_PRIMARY_CLASS,
      disabled: isSubmitting
    }, editorFlags.isCreate ? MSG_ACTION_CREATE : editorFlags.isDelete ? MSG_ACTION_DELETE : MSG_ACTION_UPDATE), isSubmitting && WaitAnimation$1()), /*#__PURE__*/React.createElement("td", {
      align: "left"
    }, /*#__PURE__*/React.createElement("button", {
      key: "CancelButton",
      type: "button",
      className: BUTTON_SECONDARY_CLASS,
      disabled: isSubmitting,
      onClick: handleCancel
    }, MSG_ACTION_CANCEL))))), status && /*#__PURE__*/React.createElement("div", {
      className: ERROR_MSG_CLASS
    }, status), /*#__PURE__*/React.createElement("div", null));
  });
};
const iterateChildComponents = (editor, dataset, handleFormPageActions) => {
  let initialFieldValues = getFieldElementsDbValues(editor, dataset);
  if (initialFieldValues[editor.primaryKeyName] === 0) {
    // Dataset is stil not ready...
    return '';
  }
  return Object.entries(editor.childComponents).map(function (htmlElement) {
    let ChildElement = htmlElement[1];
    if (String(ChildElement).includes('component:')) {
      ChildElement = htmlElement[1]().component;
    }
    return /*#__PURE__*/React.createElement("div", {
      key: 'ChildElement_' + htmlElement[0],
      className: "mt-6"
    }, /*#__PURE__*/React.createElement(ChildElement, {
      parentData: initialFieldValues,
      handleFormPageActions: handleFormPageActions
    }));
  });
};
const saveRowToDatabase = (editor, action, rowId, submitedtElements, initialValues) => {
  let rowToSave = submitedtElements;
  if (typeof rowToSave["resultset"] !== "undefined") {
    delete rowToSave["resultset"];
  }
  if (typeof initialValues["resultset"] !== "undefined") {
    delete initialValues["resultset"];
  }
  if (editor.type === "child_listing") {
    // Build the format for child table
    // Example:
    // {
    //     "user_id": "{{TEST_USER_ID}}",
    //     "food_times": {
    //         "food_moment_id": "test_food_moment_id_2",
    //         "food_time": "10:00"
    //     },
    //     "food_times_old": {
    //         "food_moment_id": "test_food_moment_id_1"
    //     }
    // }
    rowId = null;
    rowToSave = editor.parentKeyNames.reduce((acc, keyPair) => {
      acc[keyPair.parameterName] =
      // parent table 'id' field name
      editor.parentData[keyPair.parentElementName]; // parent table 'id' value
      return {
        ...acc
      };
    }, {});
    rowToSave[editor.array_name] = submitedtElements; // array object in the parent row with new values
    rowToSave[editor.array_name + "_old"] = initialValues; // array object in the parent row with initial values
  }
  // Save the row to Database
  const dbService = new dbApiService$3({
    url: editor.dbApiUrl
  });
  return dbService.createUpdateDelete(action, rowId, rowToSave);
};
const getSelectFieldsOptions = fieldElements => {
  return Object.entries(fieldElements).filter(function (key) {
    let currentObj = key[1];
    return currentObj.type === 'select_component' && typeof currentObj.dataPopulator !== "undefined";
  }).map(function (key) {
    let currentObj = key[1];
    return {
      name: currentObj.name,
      promiseResult: currentObj.dataPopulator()
    };
  });
};
const setDefaultFieldValue = currentObj => {
  let response = null;
  if (typeof currentObj['default_value'] !== 'undefined') {
    switch (currentObj.default_value) {
      case 'current_timestamp':
        switch (currentObj.type) {
          case 'date':
            response = timestampToDate$1(nowToTimestap());
            break;
          case 'datetime-local':
            response = timestampToDate$1(nowToTimestap(), true, 'T');
            break;
          default:
            response = nowToTimestap();
        }
        break;
      default:
        response = currentObj.default_value;
    }
    return response;
  }
  switch (currentObj.type) {
    case '_id':
    case 'number':
    case 'integer':
      response = 0;
      break;
    case 'date':
      response = timestampToDate$1(nowToTimestap());
      break;
    case 'datetime-local':
      response = timestampToDate$1(nowToTimestap(), true, 'T');
      break;
    default:
      response = '';
  }
  return response;
};
const getFieldElementsDbValues = function (editor, datasetRaw) {
  let defaultValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // console_debug_log(`getFieldElementsDbValues | defaultValues: ${defaultValues} | datasetRaw:`, datasetRaw);
  let dataset = {};
  if (typeof datasetRaw !== 'undefined') {
    dataset = Object.assign({}, datasetRaw);
  }
  // if (editor.type !== "child_listing") {
  //   dataset = Object.assign({}, datasetRaw);
  // } else {
  if (editor.subType === "array") {
    // Get the 1st element only because it's only an element when
    // the action over the child object is Read, Modify or Delete
    // if (typeof datasetRaw !== 'undefined') {
    if (typeof datasetRaw[0] !== 'undefined') {
      dataset = Object.assign({}, datasetRaw[0]);
    }
    // }
  }
  // }

  const dbService = new dbApiService$3({
    url: editor.dbApiUrl
  });
  const verifyElementExistence = (dataset, element) => {
    return typeof dataset[element] !== "undefined";
  };
  const response = editor.fieldElements.reduce((acc, currentObj) => {
    let responseObj = '';
    if (currentObj.type === "_id") {
      if (verifyElementExistence(dataset, "_" + currentObj.name)) {
        responseObj = dbService.convertId(dataset["_" + currentObj.name]);
      } else if (defaultValues) {
        responseObj = setDefaultFieldValue(currentObj);
      }
    } else if (verifyElementExistence(dataset, currentObj.name)) {
      responseObj = dataset[currentObj.name];
    } else if (defaultValues) {
      responseObj = setDefaultFieldValue(currentObj);
    }
    if (typeof currentObj['force_value'] !== 'undefined') {
      responseObj = currentObj['force_value'];
    }
    switch (currentObj.type) {
      // case 'component':
      case 'label':
      case 'hr':
        // Excluded types
        break;
      default:
        acc[currentObj.name] = responseObj;
    }
    return {
      ...acc
    };
    // }, {});
  }, dataset);
  if (typeof response["_id"] !== 'undefined') {
    delete response["_id"];
  }
  return response;
};

// GenericCrudEditor search component

fontawesome.library.add(fontawesomeFreeSolid.faGreaterThan);
const CrudEditorSearch = _ref => {
  let {
    id,
    fieldElements,
    handleCancel,
    value = ""
  } = _ref;
  const [searchText, setSearchText] = React.useState(value);
  const searchTextId = () => "searchText_".concat(id);
  const getDateRange = searchValue => {
    const dateRange = searchValue.split(',');
    let result;
    if (dateRange.length !== 2) {
      result = String(processDateToTimestamp(searchValue));
    } else {
      result = (dateRange[0] ? String(processDateToTimestamp(dateRange[0].trim())) : '') + "," + (dateRange[1] ? String(processDateToTimestamp(dateRange[1].trim())) : '');
    }
    return result;
  };
  const submitSearch = newSearchText => {
    let searchFilters = {};
    if (newSearchText !== "") {
      searchFilters = Object.keys(fieldElements).reduce((filterDict, index) => {
        const element = fieldElements[index];
        if (element.listing && (!['number', 'integer', 'date', 'datetime-local', 'hr', 'label'].includes(element.type) || ['number', 'integer'].includes(element.type) && !isNaN(newSearchText) || ['date', 'datetime-local'].includes(element.type) && !getDateRange(newSearchText).includes("NaN"))) {
          let newElement = {};
          if (['date', 'datetime-local'].includes(element.type)) {
            newElement[element.name] = getDateRange(newSearchText);
          } else {
            newElement[element.name] = newSearchText;
          }
          filterDict = {
            ...filterDict,
            ...newElement
          };
        }
        return {
          ...filterDict
        };
      }, {
        like: '1',
        comb: 'or'
      });
    }
    const config = {
      searchFilters: searchFilters,
      searchText: newSearchText
    };
    handleCancel(config);
  };
  const handleTextChange = event => {
    setSearchText(event.target.value);
  };
  const handleCancelSearch = () => {
    setSearchText('');
    submitSearch('');
  };
  const handleSubmit = () => {
    submitSearch(searchText);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: searchTextId(),
    className: "ml-3 mr-2 text-sm"
  }, MSG_SEARCH, ":"), /*#__PURE__*/React.createElement("input", {
    id: searchTextId()
    // type="text"
    ,
    className: "mb-2 w-6 h-6 px-2 text-sm",
    value: searchText || '',
    onChange: handleTextChange
  }), /*#__PURE__*/React.createElement("button", {
    className: "".concat(BUTTON_LISTING_CLASS$5, " mb-2 ml-2 mr-2 text-xs"),
    onClick: handleSubmit
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "greater-than"
  })), searchText !== '' && /*#__PURE__*/React.createElement("button", {
    className: "".concat(BUTTON_LISTING_CLASS$5, " mb-2 mr-2 text-xs"),
    onClick: handleCancelSearch
  }, "X"));
};

// GenericCrudEditor (GCE) service main

fontawesome.library.add(fontawesomeFreeSolid.faPlus, fontawesomeFreeSolid.faEye, fontawesomeFreeSolid.faEdit, fontawesomeFreeSolid.faTrashAlt, fontawesomeFreeSolid.faCheck, fontawesomeFreeSolid.faList
// faRecycle,
);
const debug$4 = false;
const GenericCrudEditor = _ref => {
  let {
    editorConfig,
    parentData,
    handleFormPageActions = null
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainSectionProvider, null, /*#__PURE__*/React.createElement(GenericCrudEditorMain, {
    editorConfig: editorConfig,
    parentData: parentData,
    handleFormPageActions: handleFormPageActions
  })));
};
const GenericCrudEditorMain = props => {
  const [editor, setEditor] = React.useState(null);
  const [rows, setRows] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(ROWS_PER_PAGE);
  const [formMode, setFormMode] = React.useState([ACTION_LIST, null]);
  const [status, setStatus] = React.useState("");
  const [infoMsg, setInfoMsg] = React.useState("");
  const [searchFilters, setSearchFilters] = React.useState({});
  const [searchText, setSearchText] = React.useState("");
  const {
    initCache,
    debugCache
  } = React.useContext(MainSectionContext);
  React.useEffect(() => {
    setEditorParameters(props).then(editor_response => {
      if (!editor_response) {
        setEditor(null);
      } else if (editor_response.error) {
        console_debug_log$4("GCE-M-010:");
        console_debug_log$4(editor_response.errorMsg);
        setStatus(errorAndReEnter$1(editor_response.errorMsg, null));
      } else if (!editor_response.response) {
        setEditor(null);
      } else {
        setEditor(getEditoObj(props, editor_response));
      }
    }, error => {
      console_debug_log$4("GCE-M-020:");
      console_debug_log$4(error);
      setStatus(errorAndReEnter$1(error, null));
    });
  }, [props]);
  React.useEffect(() => {
    // if (editor && !status) {
    if (editor) {
      ShowHidePageAnimation(true);
      let accessKeysListing = {
        page: currentPage,
        limit: rowsPerPage
      };
      // dbListPreRead: To set a Listing filters, assign funcResponse.fieldValues[db_field]=filter_value
      processGenericFuncArray(editor, 'dbListPreRead', accessKeysListing, formMode).then(funcResponse => {
        // console_debug_log(`GenericCrudEditor / dbListPreRead - funcResponse:`)
        // console_debug_log(funcResponse);
        accessKeysListing = Object.assign(accessKeysListing, editor.parentFilter, searchFilters, funcResponse.fieldValues);
        editor.db.getAll(accessKeysListing).then(data => {
          ShowHidePageAnimation(false);
          // dbListPostRead: To fix Listing fields
          processGenericFuncArray(editor, 'dbListPostRead', data, formMode).then(funcResponse => setRows(funcResponse.fieldValues), error => setStatus(errorAndReEnter$1(error, null)));
        }, error => {
          console_debug_log$4("GenericCrudEditor / Listing - ERROR:");
          console.error(error);
          ShowHidePageAnimation(false);
          setStatus(errorAndReEnter$1(error, null));
        });
      }, error => {
        console_debug_log$4("GenericCrudEditor / dbListPreRead - ERROR:");
        console.error(error);
        setStatus(errorAndReEnter$1(error, null));
      });
    }
  }, [currentPage, rowsPerPage, editor, formMode, searchFilters]);
  const handleCancel = function () {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (typeof config['searchFilters'] !== 'undefined') {
      setSearchFilters(config['searchFilters']);
      setSearchText(config['searchText']);
    }
    if (typeof config['nextAction'] !== 'undefined') {
      setFormMode([config['nextAction'], config['id'], config['infoMsg'], "INFO"]);
    } else {
      setFormMode([ACTION_LIST, null]);
    }
  };
  const handleNew = () => {
    setFormMode([ACTION_CREATE, null]);
  };
  const handleView = id => {
    setFormMode([ACTION_READ, id]);
  };
  const handleModify = id => {
    setFormMode([ACTION_UPDATE, id]);
  };
  const handleDelete = id => {
    setFormMode([ACTION_DELETE, id]);
  };
  const goToNewPage = newPage => {
    setInfoMsg('');
    setCurrentPage(newPage);
  };
  const handleRowsPerPageChange = event => {
    if (!event.target.value) {
      return;
    }
    setInfoMsg('');
    setRowsPerPage(event.target.value);
  };
  const handleRefresh = newPage => {
    // select_cache = {};
    initCache();
    window.location.reload(true);
  };
  const rowId = row => {
    const response = typeof row._id === 'undefined' ? row[editor.primaryKeyName] : editor.db.convertId(row._id);
    return response;
  };
  if (!editor) {
    if (status) {
      return /*#__PURE__*/React.createElement("div", {
        className: ERROR_MSG_CLASS
      }, status, debug$4 );
    }
    return WaitAnimation$1();
  }
  if (!rows && !status) {
    return WaitAnimation$1();
  }
  if (status) {
    return /*#__PURE__*/React.createElement("div", {
      className: ERROR_MSG_CLASS
    }, status, debug$4 );
  }
  if (rows && typeof rows['totalPages'] !== 'undefined' && rows['totalPages'] == null) {
    return 'Rows ok but not totalPages - ERROR # 3';
  }
  if (formMode[0] !== ACTION_LIST) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormPage, {
      mode_par: formMode[0],
      id_par: formMode[1],
      onCancel_par: handleCancel,
      setInfoMsg_par: setInfoMsg,
      editor_par: editor,
      handleFormPageActions: props.handleFormPageActions,
      message: typeof formMode[2] !== 'undefined' ? formMode[2] : '',
      messageType: typeof formMode[3] !== 'undefined' ? formMode[3] : ''
    }));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, infoMsg && /*#__PURE__*/React.createElement("div", {
    className: INFO_MSG_CLASS$1
  }, infoMsg), rows &&
  /*#__PURE__*/
  // <div className="container mx-auto">
  React.createElement("div", {
    className: "w-screen bg-gray-300 fyn_jumbotron"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold mb-4"
  }, editor.title + " - " + MSG_ACTION_LIST, /*#__PURE__*/React.createElement("span", {
    className: "pl-2 align-bottom"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleRefresh,
    className: "".concat(BUTTON_LISTING_CLASS$5, " text-xs") /* mb-4 */
  }, /*#__PURE__*/React.createElement("img", {
    src: imageDirectory$1 + "arrows_rotate_solid.svg",
    width: "14",
    height: "14",
    alt: "Reload",
    className: "text-white fill-white"
  })))), /*#__PURE__*/React.createElement("table", {
    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    key: "".concat(editor.baseUrl, "_thead")
  }, Object.keys(editor.fieldElements).map(key => editor.fieldElements[key].listing && /*#__PURE__*/React.createElement("th", {
    key: key,
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase break-words"
  }, editor.fieldElements[key].label)), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pr-2"
  }, MSG_ACTIONS), /*#__PURE__*/React.createElement("button", {
    onClick: handleNew,
    className: "".concat(BUTTON_LISTING_CLASS$5, " mr-2")
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "plus"
  }), " ", MSG_ACTION_NEW))))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-200 dark:divide-gray-700"
  }, rows && typeof rows.resultset !== 'undefined' && rows.resultset.map(row => /*#__PURE__*/React.createElement("tr", {
    // key={rowId(row)}
    key: "".concat(editor.baseUrl, "_row_").concat(rowId(row))
  }, Object.keys(editor.fieldElements).map(key => editor.fieldElements[key].listing && /*#__PURE__*/React.createElement("td", {
    key: key,
    className: "px-6 py-4 break-words text-sm text-gray-800 dark:text-gray-200"
  }, getSelectDescription(editor.fieldElements[key], row) // Show column value or select description
  )), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    // type="button"
    onClick: () => handleView(rowId(row)),
    className: "".concat(BUTTON_LISTING_CLASS$5, " mr-2")
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "eye"
  })), /*#__PURE__*/React.createElement("button", {
    // type="button"
    onClick: () => handleModify(rowId(row)),
    className: "".concat(BUTTON_LISTING_CLASS$5, " mr-2")
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "edit"
  })), /*#__PURE__*/React.createElement("button", {
    // type="button"
    onClick: () => handleDelete(rowId(row)),
    className: "".concat(BUTTON_LISTING_CLASS$5)
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: "trash"
  })))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex items-center"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: currentPage === 1,
    onClick: () => goToNewPage(currentPage - 1),
    className: "".concat(currentPage === 1 ? "opacity-50" : "", " ").concat(BUTTON_LISTING_CLASS$5)
  }, MSG_PREVIOUS), /*#__PURE__*/React.createElement("span", {
    id: "NavigationAnimation",
    className: "ml-3 mr-3 hidden"
  }, WaitAnimation$1()), /*#__PURE__*/React.createElement("span", {
    className: "text-sm ml-2 mr-2"
  }, MSG_PAGE, " ", currentPage, " ", MSG_OF, " ", rows.totalPages), /*#__PURE__*/React.createElement("button", {
    disabled: currentPage === rows.totalPages,
    onClick: () => goToNewPage(currentPage + 1),
    className: "".concat(currentPage === rows.totalPages ? "opacity-50" : "", " ").concat(BUTTON_LISTING_CLASS$5)
  }, MSG_NEXT), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "newRowsPerPage",
    className: "ml-3 mr-2 text-sm"
  }, MSG_ROWS_PER_PAGE, ":"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "500",
    id: "newRowsPerPage",
    value: rowsPerPage,
    className: "mb-2 w-6 h-6 px-2 text-sm",
    onChange: handleRowsPerPageChange
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CrudEditorSearch, {
    id: editor.baseUrl,
    fieldElements: editor.fieldElements,
    handleCancel: handleCancel,
    value: searchText
  }))), status && /*#__PURE__*/React.createElement("div", {
    className: ERROR_MSG_CLASS
  }, status)), '');
};
const ConvertToComponents = (editorDataObj, registry) => {
  /*
   Convert the following editorData elements to components using the registry
   as a brigde between the string elements from the JSON file
   and the components objects.
    component: ...,
    fieldElements: [ ...
      select_elements: ...,
       dataPopulator: ...,
      component: ..,
     // 1-N relationships
    childComponents: [ ... ],
     // Specific functions
    dbListPreRead: [ ... ]
    dbListPostRead: [ ... ]
    dbPreRead: [ ... ]
    dbPostRead: [ ... ]
    dbPreValidations: [ ... ]
    validations: [ ... ]
    dbPreWrite: [ ... ]
    dbPostWrite: [ ... ]
   */
  const editorDataObjArray = ['component'];
  editorDataObjArray.forEach(element => {
    if (typeof editorDataObj[element] !== 'undefined' && typeof editorDataObj[element] === 'string') {
      editorDataObj[element] = registry[editorDataObj[element]];
    }
  });

  // Do the same for the rest of elements in fieldElements array
  const fieldElementsArray = ['component', 'aux_component', 'select_elements', 'dataPopulator'];
  editorDataObj['fieldElements'] = editorDataObj['fieldElements'].map(fieldElement => {
    fieldElementsArray.forEach(element => {
      if (typeof fieldElement[element] !== 'undefined' && typeof fieldElement[element] === 'string') {
        fieldElement[element] = registry[fieldElement[element]];
      }
    });
    return fieldElement;
  });
  const relatedObjsArray = ['childComponents', 'dbListPreRead', 'dbListPostRead', 'dbPreRead', 'dbPostRead', 'dbPreValidations', 'validations', 'dbPreWrite', 'dbPostWrite'];
  relatedObjsArray.forEach(element => {
    if (typeof editorDataObj[element] !== 'undefined') {
      editorDataObj[element] = editorDataObj[element].map(childComponent => {
        if (typeof childComponent === 'string') {
          childComponent = registry[childComponent];
        }
        return childComponent;
      });
    }
  });
  return editorDataObj;
};

// export const GetFormData = (jsonFileName, registry, calleeName = null) => {
const GetFormData = function (editorData, registry) {
  let calleeName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (typeof registry === 'undefined') {
    registry = {};
  }
  // const editorData = getConfigsJsonFile(jsonFileName);
  let editorDataObj = ConvertToComponents(editorData, registry);
  editorDataObj["calleeName"] = calleeName;
  return editorDataObj;
};

var baseUrl$3 = "users_config";
var title$3 = "User Configurations";
var name$3 = "User's Configuration";
var dbApiUrl$3 = "users_config";
var component$3 = "UsersConfig";
var type = "child_listing";
var subType = "array";
var array_name = "users_config";
var parentKeyNames = [
	{
		parameterName: "user_id",
		parentUrl: "users",
		parentElementName: "id"
	}
];
var primaryKeyName = "id";
var defaultOrder$1 = "config_name";
var fieldElements$3 = [
	{
		name: "id",
		required: false,
		label: "ID",
		type: "text",
		readonly: true,
		hidden: true,
		listing: false,
		uuid_generator: true
	},
	{
		name: "config_name",
		required: true,
		label: "Name",
		type: "text",
		readonly: false,
		listing: true
	},
	{
		name: "config_value",
		required: true,
		label: "Value",
		type: "text",
		readonly: false,
		listing: true
	}
];
var users_config = {
	baseUrl: baseUrl$3,
	title: title$3,
	name: name$3,
	dbApiUrl: dbApiUrl$3,
	component: component$3,
	type: type,
	subType: subType,
	array_name: array_name,
	parentKeyNames: parentKeyNames,
	primaryKeyName: primaryKeyName,
	defaultOrder: defaultOrder$1,
	fieldElements: fieldElements$3
};

function UsersConfig_EditorData() {
  // console_debug_log("UsersConfig_EditorData");
  const registry = {
    "UsersConfig": UsersConfig
  };
  // return GetFormData('users_config', registry, false);
  return GetFormData(users_config, registry, false);
}
function UsersConfig() {
  return {
    editorConfig: UsersConfig_EditorData(),
    component: UsersConfigComponent
  };
}
const UsersConfigComponent = _ref => {
  let {
    parentData
  } = _ref;
  return /*#__PURE__*/React.createElement(GenericCrudEditor, {
    editorConfig: UsersConfig_EditorData(),
    parentData: parentData
  });
};

var baseUrl$2 = "users";
var title$2 = "Users";
var name$2 = "User";
var component$2 = "Users";
var dbApiUrl$2 = "users";
var fieldElements$2 = [
	{
		name: "id",
		required: true,
		label: "ID",
		type: "_id",
		readonly: true
	},
	{
		name: "firstname",
		required: true,
		label: "First Name",
		type: "text",
		readonly: false,
		listing: true
	},
	{
		name: "lastname",
		required: true,
		label: "Last Name",
		type: "text",
		readonly: false,
		listing: true
	},
	{
		name: "email",
		required: true,
		label: "Email",
		type: "email",
		readonly: false,
		listing: true
	},
	{
		name: "status",
		required: true,
		label: "Active",
		type: "select",
		select_elements: "TRUE_FALSE",
		default_value: "1",
		listing: true
	},
	{
		name: "plan",
		required: true,
		label: "Billing Plan",
		type: "select",
		select_elements: "BILLING_PLANS",
		default_value: "1",
		listing: true
	},
	{
		name: "superuser",
		required: true,
		label: "Superuser",
		type: "select",
		select_elements: "TRUE_FALSE",
		readonly: false,
		hidden: false,
		default_value: "0",
		listing: true
	},
	{
		name: "birthday",
		required: true,
		label: "Birthday",
		type: "date",
		readonly: false
	},
	{
		name: "gender",
		required: true,
		label: "Gender",
		type: "select",
		select_elements: "GENDERS",
		readonly: false,
		listing: false
	},
	{
		name: "language",
		required: true,
		label: "Preferred Language",
		type: "select",
		select_elements: "LANGUAGES",
		readonly: false,
		listing: false
	},
	{
		name: "creation_date",
		required: true,
		label: "Created",
		type: "datetime-local",
		readonly: true,
		hidden: false,
		default_value: "current_timestamp",
		listing: true
	},
	{
		name: "update_date",
		required: true,
		label: "Last update",
		type: "datetime-local",
		readonly: true,
		hidden: false,
		default_value: "current_timestamp",
		listing: false
	},
	{
		name: "label0",
		type: "hr"
	},
	{
		name: "label1",
		label: "PASWORD CHANGE",
		type: "label"
	},
	{
		name: "passcode",
		required: false,
		label: "New password",
		type: "password",
		force_value: ""
	},
	{
		name: "passcode_repeat",
		required: false,
		label: "Repeat new password",
		type: "password",
		force_value: ""
	}
];
var childComponents = [
	"UsersConfig"
];
var dbListPreRead$1 = [
	"UsersDbListPreRead"
];
var dbPreWrite$1 = [
	"UsersDbPreWrite"
];
var dbPreValidations$1 = [
	"UsersValidations"
];
var validations$1 = [
	"UsersPasswordValidations"
];
var users = {
	baseUrl: baseUrl$2,
	title: title$2,
	name: name$2,
	component: component$2,
	dbApiUrl: dbApiUrl$2,
	fieldElements: fieldElements$2,
	childComponents: childComponents,
	dbListPreRead: dbListPreRead$1,
	dbPreWrite: dbPreWrite$1,
	dbPreValidations: dbPreValidations$1,
	validations: validations$1
};

function Users_EditorData() {
  let calleeName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Users_EditorData';
  const registry = {
    "LANGUAGES": LANGUAGES,
    "TRUE_FALSE": TRUE_FALSE,
    "BILLING_PLANS": BILLING_PLANS,
    "GENDERS": GENDERS,
    "UsersConfig": UsersConfig,
    "Users": Users,
    "UsersDbListPreRead": UsersDbListPreRead,
    "UsersDbPreWrite": UsersDbPreWrite,
    "UsersValidations": UsersValidations,
    "UsersPasswordValidations": UsersPasswordValidations
  };
  // return GetFormData('users', registry, calleeName);
  return GetFormData(users, registry, calleeName);
}
const Users = () => /*#__PURE__*/React.createElement(GenericCrudEditor, {
  editorConfig: Users_EditorData()
});

/*
 * System Admin
 */

const UsersValidations = (data, editor, action) => {
  // Users pre-deletion/update validations
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(data);
    const {
      currentUserValue
    } = authenticationService$1;
    getUserData(currentUserValue.id).then(userData => {
      if (typeof data !== 'undefined' && typeof data['_id'] !== 'undefined') {
        data['id'] = editor.db.convertId(data['_id']);
      }
      switch (action) {
        case ACTION_DELETE:
          if (data['superuser'] === '1' && userData.resultset['superuser'] === '0') {
            resp.error = true;
            resp.errorMsg = (resp.errorMsg === '' ? '' : '<BR/>') + 'Super users can be deleted only by other Super users.';
          }
          if (data['id'] === currentUserValue.id) {
            resp.error = true;
            resp.errorMsg = (resp.errorMsg === '' ? '' : '<BR/>') + 'You cannot delete yourself';
          }
          if (userData.resultset['superuser'] === '0' && data['id'] !== currentUserValue.id) {
            resp.error = true;
            resp.errorMsg = (resp.errorMsg === '' ? '' : '<BR/>') + 'You cannot delete other\'s records';
          }
          break;
        case ACTION_CREATE:
          if (userData.resultset['superuser'] === '0') {
            resp.error = true;
            resp.errorMsg = (resp.errorMsg === '' ? '' : '<BR/>') + 'You cannot create new users';
          }
          break;
        case ACTION_UPDATE:
          if (userData.resultset['superuser'] === '0' && data['id'] !== currentUserValue.id) {
            resp.error = true;
            resp.errorMsg = (resp.errorMsg === '' ? '' : '<BR/>') + 'You cannot modify other\'s records';
          }
          break;
      }
      if (resp.error) {
        reject(resp);
      } else {
        resolve(resp);
      }
    }, error => {
      resp.error = true;
      resp.errorMsg = error;
      reject(resp);
    });
  });
};
const UsersDbListPreRead = (data, editor, action) => {
  // Users pre-deletion/update validations
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(data);
    const {
      currentUserValue
    } = authenticationService$1;
    getUserData(currentUserValue.id).then(currentUserData => {
      if (currentUserData.error) {
        resp.error = true;
        resp.errorMsg = currentUserData.errorMsg;
      } else {
        // Set a filter to retrieve only the current user
        if (currentUserData.resultset['superuser'] === '0') {
          resp.fieldValues['_id'] = currentUserValue.id;
        }
      }
      if (resp.error) {
        reject(resp);
      } else {
        resolve(resp);
      }
    }, error => {
      resp.error = true;
      resp.errorMsg = error;
      reject(resp);
    });
  });
};
const UsersPasswordValidations = (data, editor, action) => {
  // Users validations
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(data);
    switch (action) {
      case ACTION_CREATE:
      case ACTION_UPDATE:
        if (data['passcode']) {
          if (data['passcode'] !== data['passcode_repeat']) {
            resp.error = true;
            resp.errorMsg = (resp.errorMsg === '' ? '' : '<BR/>') + '"New Password" and "Repeat New Password" must be same';
          }
        }
        break;
    }
    if (resp.error) {
      reject(resp);
    } else {
      resolve(resp);
    }
  });
};
const UsersDbPreWrite = (data, editor, action) => {
  // Users validations
  return new Promise((resolve, reject) => {
    let resp = genericFuncArrayDefaultValue(data);
    // Avoid passing an empty password to the backend
    if (data['passcode'].trim() === '') {
      resp.fieldsToDelete.push('passcode');
    }
    // Avoid passing the repeat password field to the backend
    resp.fieldsToDelete.push('passcode_repeat');
    resolve(resp);
  });
};

// GenericCrudEditor single page editor

const GenericSinglePageEditor = _ref => {
  let {
    editorConfig,
    id,
    parentData
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainSectionProvider, null, /*#__PURE__*/React.createElement(GenericSinglePageEditorMain, {
    editorConfig: editorConfig,
    id: id,
    parentData: parentData
  })));
};

// export const GenericSinglePageEditorMain = ({ editorConfig, id, parentData }) => {
const GenericSinglePageEditorMain = props => {
  const [editor, setEditor] = React.useState(null);
  const [formMode, setFormMode] = React.useState(null);
  const [status, setStatus] = React.useState("");
  React.useContext(MainSectionContext);
  const debug = false;
  React.useEffect(() => {
    setEditorParameters(props).then(editor_response => {
      if (!editor_response) {
        setEditor(null);
      } else if (editor_response.error) {
        console_debug_log$4("GSPE-ERROR-010:");
        console_debug_log$4(editor_response.errorMsg);
        setStatus(errorAndReEnter$1(editor_response.errorMsg));
      } else if (!editor_response.response) {
        setEditor(null);
      } else {
        setEditor(getEditoObj(props, editor_response));
      }
    }, error => {
      console_debug_log$4("GSPE-ERROR-020:");
      console_debug_log$4(error);
      setStatus(errorAndReEnter$1(error));
    });
  }, [props, debug]);
  React.useEffect(() => {
    const form_mode = [ACTION_UPDATE, props.id];
    setFormMode(form_mode);
  }, [props.id, debug]);
  const setInfoMsg = msg => {
    console_debug_log$4('setInfoMsg | msg:');
    console_debug_log$4(msg);
  };
  const handleCancel = () => {
    window.location.href = getPrefix(true) + '/';
  };
  if (!editor) {
    if (status) {
      return /*#__PURE__*/React.createElement("div", {
        className: ERROR_MSG_CLASS
      }, status, "[GSPE-NES]");
    }
    return WaitAnimation$1();
  }
  if (status) {
    return /*#__PURE__*/React.createElement("div", {
      className: ERROR_MSG_CLASS
    }, status, "[GSPE-ST]");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormPage, {
    mode_par: formMode[0],
    id_par: formMode[1],
    onCancel_par: handleCancel,
    setInfoMsg_par: setInfoMsg,
    editor_par: editor
  }));
};

var baseUrl$1 = "users";
var title$1 = "User Profiles";
var name$1 = "User Profile";
var component$1 = "Users";
var dbApiUrl$1 = "users";
var updateItem = "1";
var fieldElements$1 = [
	{
		name: "id",
		required: true,
		label: "ID",
		type: "_id",
		hidden: true,
		readonly: true
	},
	{
		name: "firstname",
		required: true,
		label: "First Name",
		type: "text",
		readonly: false,
		listing: true
	},
	{
		name: "lastname",
		required: true,
		label: "Last Name",
		type: "text",
		readonly: false,
		listing: true
	},
	{
		name: "email",
		required: true,
		label: "Email",
		type: "email",
		readonly: false,
		listing: true
	},
	{
		name: "birthday",
		required: true,
		label: "Birthday",
		type: "date",
		readonly: false
	},
	{
		name: "gender",
		required: true,
		label: "Gender",
		type: "select",
		select_elements: "GENDERS",
		readonly: false,
		listing: false
	},
	{
		name: "language",
		required: true,
		label: "Preferred Language",
		type: "select",
		select_elements: "LANGUAGES",
		readonly: false,
		listing: false
	},
	{
		name: "plan",
		required: true,
		label: "Billing Plan",
		type: "select",
		select_elements: "BILLING_PLANS",
		default_value: "free",
		readonly: true,
		listing: true
	},
	{
		name: "status",
		required: true,
		label: "Active",
		type: "select",
		select_elements: "TRUE_FALSE",
		default_value: "1",
		readonly: true
	},
	{
		name: "creation_date",
		required: true,
		label: "Client Since",
		type: "datetime-local",
		readonly: true,
		hidden: false,
		default_value: "current_timestamp",
		listing: true
	},
	{
		name: "label0",
		type: "hr"
	},
	{
		name: "label1",
		label: "PASWORD CHANGE",
		type: "label"
	},
	{
		name: "passcode",
		required: false,
		label: "New password",
		type: "password",
		force_value: ""
	},
	{
		name: "passcode_repeat",
		required: false,
		label: "Repeat new password",
		type: "password",
		force_value: ""
	}
];
var dbListPreRead = [
	"UsersDbListPreRead"
];
var dbPreWrite = [
	"UsersDbPreWrite"
];
var dbPreValidations = [
	"UsersValidations"
];
var validations = [
	"UsersPasswordValidations"
];
var users_profile = {
	baseUrl: baseUrl$1,
	title: title$1,
	name: name$1,
	component: component$1,
	dbApiUrl: dbApiUrl$1,
	updateItem: updateItem,
	fieldElements: fieldElements$1,
	dbListPreRead: dbListPreRead,
	dbPreWrite: dbPreWrite,
	dbPreValidations: dbPreValidations,
	validations: validations
};

function UsersProfile_EditorData() {
  const registry = {
    "LANGUAGES": LANGUAGES,
    "TRUE_FALSE": TRUE_FALSE,
    "BILLING_PLANS": BILLING_PLANS,
    "GENDERS": GENDERS,
    "UsersConfig": UsersConfig,
    "UserProfileEditor": UserProfileEditor,
    "UsersDbListPreRead": UsersDbListPreRead,
    "UsersDbPreWrite": UsersDbPreWrite,
    "UsersValidations": UsersValidations,
    "UsersPasswordValidations": UsersPasswordValidations
  };
  // return GetFormData('users_profile', registry, 'UserProfileEditor');
  return GetFormData(users_profile, registry, 'UserProfileEditor');
}
const UserProfileEditor = props => {
  const {
    currentUserValue
  } = authenticationService$1;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericSinglePageEditor, {
    id: currentUserValue.id,
    editorConfig: UsersProfile_EditorData()
  }));
};

var baseUrl = "general_config";
var title = "Configuration Parameters";
var name = "Configuration Parameter";
var component = "GeneralConfig";
var dbApiUrl = "general_config";
var defaultOrder = "config_name|asc";
var fieldElements = [
	{
		name: "id",
		required: true,
		label: "ID",
		type: "_id",
		readonly: true
	},
	{
		name: "config_name",
		required: true,
		label: "Name",
		type: "text",
		readonly: false,
		listing: true
	},
	{
		name: "active",
		required: true,
		label: "Active",
		type: "select",
		select_elements: "TRUE_FALSE",
		readonly: false,
		hidden: false,
		default_value: "1",
		listing: true
	},
	{
		name: "config_value",
		required: true,
		label: "Value",
		type: "text",
		readonly: false,
		listing: true
	},
	{
		name: "notes",
		required: true,
		label: "Notes",
		type: "text",
		readonly: false,
		listing: true
	}
];
var general_config = {
	baseUrl: baseUrl,
	title: title,
	name: name,
	component: component,
	dbApiUrl: dbApiUrl,
	defaultOrder: defaultOrder,
	fieldElements: fieldElements
};

function GeneralConfig_EditorData() {
  // console_debug_log("GeneralConfig_EditorData");
  const registry = {
    "GeneralConfig": GeneralConfig,
    "TRUE_FALSE": TRUE_FALSE
  };
  // return GetFormData('general_config', registry, 'GeneralConfig_EditorData');
  return GetFormData(general_config, registry, 'GeneralConfig_EditorData');
}
const GeneralConfig = () => /*#__PURE__*/React.createElement(GenericCrudEditor, {
  editorConfig: GeneralConfig_EditorData()
});

function styleInject$1(css, ref) {
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

var css_248z$4 = ".fyn_jumbotron {\n    /* padding: 2rem 1rem;\n    margin-bottom: 2rem; */\n    background-color: #e9ecef;\n    border-radius: 0.3rem;\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n}\n";
styleInject$1(css_248z$4);

const defaultComponentMap$1 = {
  "Users_EditorData": Users_EditorData,
  "GeneralConfig_EditorData": GeneralConfig_EditorData,
  "UserProfileEditor": UserProfileEditor,
  // "Chatbot": ChatBot,
  "HomePage": HomePage,
  "LoginPage": LoginPage,
  "About": About,
  "AboutBody": AboutBody,
  "logout": logoutHander
};
const isComponent = componentObj => {
  return String(componentObj).includes('component:');
};
function setExpanded(componentObj) {
  if (document.getElementById("navbar-main-toggle") && !document.getElementById("navbar-main-toggle").classList.contains("collapsed")) {
    document.getElementById("navbar-main-toggle").click();
  }
  if (componentObj) {
    if (isComponent(componentObj)) {
      try {
        return /*#__PURE__*/React.createElement("componentObj", null);
      } catch (error) {
        console_debug_log$4('[ASE-E010] componentObj:', componentObj);
        console_debug_log$4(error);
        return null;
      }
    } else {
      try {
        return componentObj();
      } catch (error) {
        console_debug_log$4('[ASE-E020] componentObj:', componentObj);
        console_debug_log$4(error);
        return null;
      }
    }
  }
  return '';
}
const App$1 = _ref => {
  let {
    componentMap = {},
    appLogo = null
  } = _ref;
  const [currentUser, setCurrentUser] = React.useState(null);
  const [state, setState] = React.useState("");
  const [login, setLogin] = React.useState(false);
  const [menuOptions, setMenuOptions] = React.useState(null);
  const urlParams = getUrlParams$1();
  const showContentOnly = urlParams && typeof urlParams.menu !== "undefined" && urlParams.menu === "0";
  const version = process.env.REACT_APP_VERSION;
  const appName = process.env.REACT_APP_APP_NAME;
  const componentMapFinal = mergeDicts$1(componentMap, defaultComponentMap$1);
  React.useEffect(() => {
    if (authenticationService$1.currentUser) {
      const subscription = authenticationService$1.currentUser.subscribe(x => setCurrentUser(x));
      return () => subscription.unsubscribe();
    }
  }, []);
  React.useEffect(() => {
    if (!(login || window.location.href.includes("/login"))) {
      getMenuFromApi(state, setState, setMenuOptions);
    }
  }, [state, login]);
  const stateHandler = () => {
    setLogin(true);
    logoutHander();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !showContentOnly && /*#__PURE__*/React.createElement("div", {
    className: "w-screen"
  }, /*#__PURE__*/React.createElement(Navbar, {
    id: "navbar-main",
    collapseOnSelect: true,
    expand: "lg",
    className: "bg-body-tertiary navbar-dark bg-dark"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Navbar.Brand, {
    as: reactRouterDom.Link,
    to: currentUser ? '/' : '/#/login'
    // to={(currentUser ? window.location.origin + '/#' : '/#/login')}
    ,
    onClick: () => currentUser ? setExpanded() : setExpanded(() => window.location.reload())
  }, appName, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '60%'
    }
  }, version)), currentUser && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar.Toggle, {
    id: "navbar-main-toggle",
    "aria-controls": "responsive-navbar-nav"
  }), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/React.createElement(Nav, {
    className: "me-auto"
  }, /*#__PURE__*/React.createElement(GenericMenuBuilder, {
    componentMapping: componentMapFinal,
    itemType: "top_menu",
    menuOptions: menuOptions,
    status: state,
    setExpanded: setExpanded
  }))), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    id: "current-user-navbar-nav",
    className: "justify-content-end"
  }, /*#__PURE__*/React.createElement(Navbar.Text, null, "Signed in as:"), /*#__PURE__*/React.createElement(GenericMenuBuilder, {
    title: currentUser.firstName,
    componentMapping: componentMapFinal,
    itemType: "hamburger",
    menuOptions: menuOptions,
    status: state,
    showContentOnly: showContentOnly,
    setExpanded: setExpanded
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "w-screen bg-gray-300 fyn_jumbotron",
    style: {
      minHeight: '88vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2"
  }, /*#__PURE__*/React.createElement(AppMainComponent, {
    login: login,
    state: state,
    stateHandler: stateHandler,
    menuOptions: menuOptions,
    componentMap: componentMapFinal,
    setExpanded: setExpanded,
    showContentOnly: showContentOnly,
    appLogo: appLogo
  }))), state !== '' && /*#__PURE__*/React.createElement(DefaultRoutes, null));
};
const CloseButton = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, children), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => window.close(),
    className: "ml-2 mb-1 bg-blue-500 text-white p-0 rounded close"
  }, "Close"));
};
const AppMainComponent = _ref3 => {
  let {
    login,
    state,
    stateHandler,
    menuOptions,
    componentMap,
    showContentOnly,
    setExpanded,
    appLogo = null
  } = _ref3;
  if (login || window.location.href.includes("/login")) {
    if (showContentOnly) {
      return /*#__PURE__*/React.createElement(CloseButton, null, "Re-login is required...");
    }
    return /*#__PURE__*/React.createElement(LoginPage, {
      appLogo: appLogo
    });
  }
  if (state !== "") {
    if (showContentOnly) {
      return /*#__PURE__*/React.createElement(CloseButton, null, getErrorMessage(state));
    }
    return errorAndReEnter$1(state, null, true, null, stateHandler, false, false);
  }
  if (!menuOptions) {
    return WaitAnimation$1();
  }
  return /*#__PURE__*/React.createElement(GenericMenuBuilder, {
    componentMapping: componentMap,
    itemType: "routes",
    menuOptions: menuOptions,
    status: state,
    setExpanded: setExpanded,
    appLogo: appLogo
  });
};

const mediaSupported$1 = () => {
  let mediaSupported = [];
  if (MediaRecorder.isTypeSupported('audio/mpeg')) {
    mediaSupported.push("mp3");
  }
  if (MediaRecorder.isTypeSupported('audio/webm; codecs=opus')) {
    mediaSupported.push("opus");
  }
  if (MediaRecorder.isTypeSupported('audio/webm')) {
    mediaSupported.push("webm");
  }
  if (MediaRecorder.isTypeSupported('audio/mp4')) {
    mediaSupported.push("mp4");
  }
  if (MediaRecorder.isTypeSupported('audio/wav')) {
    mediaSupported.push("wav");
  }
  return mediaSupported;
};
const getMediaTypeToRecord$1 = () => {
  let options = {};
  let extension = null;

  // Check for MP3 support (less likely to be supported)
  if (MediaRecorder.isTypeSupported('audio/mpeg')) {
    options = {
      mimeType: 'audio/mpeg'
    };
    extension = "mp3";
  }
  // else if (MediaRecorder.isTypeSupported('audio/webm; codecs=opus')) {
  //     // Browser supports recording in Opus format within a WebM container
  //     // (apparently not suported by OpenAi Whisper)
  //     extension = "opus";
  // }
  else if (MediaRecorder.isTypeSupported('audio/webm')) {
    // Browser supports recording in WebM format
    extension = "webm";
  }
  // Check for MP4 support, e.g. iPhones (less likely to be supported)
  else if (MediaRecorder.isTypeSupported('audio/mp4')) {
    options = {
      mimeType: 'audio/mp4'
    };
    extension = "mp4";
  }
  // Alternatively, Check if the browser supports recording in WAV format
  else if (MediaRecorder.isTypeSupported('audio/wav')) {
    options = {
      mimeType: 'audio/wav'
    };
    extension = "wav";
  } else {
    // Browser does not support either format, use default settings
    // OpenAi Whisper supports:
    // ['flac', 'm4a', 'mp3', 'mp4', 'mpeg', 'mpga', 'oga', 'ogg', 'wav', 'webm']
    throw new Error('No audio extension supported');
  }
  return {
    extension: extension,
    options: options
  };
};

var media = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getMediaTypeToRecord: getMediaTypeToRecord$1,
    mediaSupported: mediaSupported$1
});

const randomKey = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const textareaMinHeightDefault = 40;
const toggleIdVisibility$4 = (onOff, ids) => {
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = onOff === 'on' ? '' : 'none';
    }
  });
};
const getElementWithErrorHandling = elementId => {
  try {
    const elementObj = document.getElementById(elementId);
    return elementObj;
  } catch (error) {
    // Element not found or stil loading...            
    return null;
  }
};
const growUpTextAreaInner = function (textAreaId, conversationBlockId, sectionViewportHeight, maxOffsetHeight) {
  let textareaMinHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : textareaMinHeightDefault;
  const textarea = getElementWithErrorHandling(textAreaId);
  if (textarea) {
    // Grow upwards
    // Adjust the height of the textarea to grow as the user types
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    // If the content goes beyond its height, adjust the scroll to grow upwards
    const conversationObj = document.getElementById(conversationBlockId);
    // Calculate the height based on the viewport height (82vh, ".conversation-block.height" in FynBot.css)
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // Ensure the textarea does not exceed its max-height...
    if (textarea.scrollHeight > maxOffsetHeight) {
      textarea.style.height = "".concat(maxOffsetHeight, "px");
    }
    // Set conversation height to make textarea to scroll up according its height
    const sectionViewportHeightInPx = sectionViewportHeight / 100 * viewportHeight;
    const conversationHeight = sectionViewportHeightInPx - textarea.clientHeight + textareaMinHeight;
    conversationObj.style.height = "".concat(conversationHeight, "px");
  }
};
const growUpTextArea$1 = function (textAreaId, conversationBlockId, sectionViewportHeight, maxOffsetHeight) {
  let textareaMinHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : textareaMinHeightDefault;
  const textarea = getElementWithErrorHandling(textAreaId);
  if (textarea) {
    textarea.addEventListener('input', event => growUpTextAreaInner(textAreaId, conversationBlockId, sectionViewportHeight, maxOffsetHeight, textareaMinHeight));
  }
};
const resetTextArea$1 = function (textAreaId, conversationBlockId, sectionViewportHeight, maxOffsetHeight) {
  let textareaMinHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : textareaMinHeightDefault;
  const textarea = getElementWithErrorHandling(textAreaId);
  if (textarea) {
    growUpTextAreaInner(textAreaId, conversationBlockId, sectionViewportHeight, maxOffsetHeight, textareaMinHeight);
  }
};
const LinkifyText$1 = _ref => {
  let {
    children
  } = _ref;
  // Detect links in the text.
  // Example: [Carlos Jose Ramirez Divo - Sitio web oficial](https://www.carlosjramirez.com/en/about-carlos-jose-ramirez-divo/)

  const regex = /\[[^\]]+\]\([^)]+\)/g;
  const matches = children.match(regex);
  const links = !matches ? [] : matches.map(match => {
    const title = match.substring(1, match.indexOf(']'));
    const url = match.substring(match.indexOf('(') + 1, match.length - 1);
    return /*#__PURE__*/React.createElement("a", {
      key: url,
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, title);
  });
  const formattedText = children.split(regex).reduce((acc, textChunk, index) => {
    if (index === 0) {
      return [textChunk];
    }
    acc.push(links[index - 1]);
    acc.push(textChunk);
    return acc;
  }, []);
  return /*#__PURE__*/React.createElement("div", null, formattedText.map((chunck, index) => {
    if (typeof chunck !== 'string') {
      return chunck;
    }
    return chunck.split('\n').map((line, index) => {
      return /*#__PURE__*/React.createElement("p", {
        key: randomKey()
      }, line);
    });
  }));
};
const CopyButton$1 = _ref2 => {
  let {
    text
  } = _ref2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    id: "copyButton",
    style: {
      position: 'absolute',
      top: '10px',
      right: '20px',
      padding: '3px',
      borderRadius: '5px',
      border: 'none',
      background: 'grey',
      color: 'white',
      cursor: 'pointer',
      fontSize: '12px'
    },
    onClick: e => {
      navigator.clipboard.writeText(text);
      const copiedMessage = document.createElement('div');
      copiedMessage.textContent = 'Copied!';
      copiedMessage.style.position = 'absolute';
      copiedMessage.style.bottom = '-40px'; // Position under the button
      copiedMessage.style.left = '-20px'; // Align with the button's left edge
      copiedMessage.style.padding = '5px';
      copiedMessage.style.borderRadius = '5px';
      copiedMessage.style.border = 'none';
      copiedMessage.style.background = 'grey';
      copiedMessage.style.color = 'white';
      copiedMessage.style.fontSize = '0.75rem';
      copiedMessage.style.zIndex = '1000';
      copiedMessage.style.opacity = '0';
      copiedMessage.style.transition = 'opacity 0.3s';
      e.currentTarget.appendChild(copiedMessage); // Append to the button's parent
      setTimeout(() => {
        copiedMessage.style.opacity = '1';
      }, 100);
      setTimeout(() => {
        copiedMessage.style.opacity = '0';
        setTimeout(() => copiedMessage.remove(), 2000);
      }, 2000);
    }
  }, "Copy"));
};
const isMobileDevice$1 = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

var ui = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CopyButton: CopyButton$1,
    LinkifyText: LinkifyText$1,
    getElementWithErrorHandling: getElementWithErrorHandling,
    growUpTextArea: growUpTextArea$1,
    growUpTextAreaInner: growUpTextAreaInner,
    isMobileDevice: isMobileDevice$1,
    resetTextArea: resetTextArea$1,
    toggleIdVisibility: toggleIdVisibility$4
});
const spark = 'spark.svg';

logging_service.console_debug_log;
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
const dbApiService$2 = db_service.dbApiService;
const MULTIPART_FORM_DATA_HEADER$1 = db_service.MULTIPART_FORM_DATA_HEADER;
const console_debug_log$3 = logging_service.console_debug_log;
const formatCaughtError$4 = errorAndReenter.formatCaughtError;
const toggleIdVisibility$3 = ui.toggleIdVisibility;
const getMediaTypeToRecord = media.getMediaTypeToRecord;
const mediaSupported = media.mediaSupported;
const BUTTON_LISTING_CLASS$4 = class_name_constants.BUTTON_LISTING_CLASS;
const debug$3 = false;
const extControlsToShowHide$1 = ['user_input', 'user_input_submit', 'fileUploader', 'cameraComponent'];
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
      if (debug$3) ;
      if (debug$3) ;

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
  React.useEffect(() => {
    const sendVoiceMessage = () => {
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
      formData.append('audio', audioData, fileName);
      const options = {
        raw_body: true,
        headers: MULTIPART_FORM_DATA_HEADER$1
      };
      const query_params = {
        "extension": extension,
        "source_lang": sourceLang,
        "other": other
      };
      const db = new dbApiService$2({
        url: "ai/voice_to_text"
      });
      // Clear previous message in the input text area
      setExternalInputMessage('');
      // Update the size of the input text area if the handleUpdateSize function is provided.
      if (handleUpdateSize) {
        handleUpdateSize();
      }
      // Clear audio data
      setAudioData(null);
      // Show WaitAnimation while fetching data
      dispatchWaitAnimation(true, dispatch);
      db.getAll(query_params, formData, 'POST', options).then(data => {
        // Hide WaitAnimation after fetching data
        dispatchWaitAnimation(false, dispatch);
        // Send the transcript to the input text box
        setExternalInputMessage(data.response);
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

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString$1 = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction$1 = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction$1(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction$1(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction$1(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction$1(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop$1 = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);

var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData,
  isArrayBufferView,
  isString: isString$1,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$1,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var Stream$2 = stream.Stream;
var util$2 = require$$1;

var delayed_stream = DelayedStream$1;
function DelayedStream$1() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util$2.inherits(DelayedStream$1, Stream$2);

DelayedStream$1.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream$1.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream$1.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream$1.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream$1.prototype.pause = function() {
  this.source.pause();
};

DelayedStream$1.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream$1.prototype.pipe = function() {
  var r = Stream$2.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream$1.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream$1.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this.emit('error', new Error(message));
};

var util$1 = require$$1;
var Stream$1 = stream.Stream;
var DelayedStream = delayed_stream;

var combined_stream = CombinedStream$1;
function CombinedStream$1() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util$1.inherits(CombinedStream$1, Stream$1);

CombinedStream$1.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream$1.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream$1.prototype.append = function(stream) {
  var isStreamLike = CombinedStream$1.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream$1.prototype.pipe = function(dest, options) {
  Stream$1.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream$1.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream$1.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream$1.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream$1.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream$1.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream$1.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream$1.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream$1.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream$1.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream$1.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream$1.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream$1.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream$1.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream$1.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream$1.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};

var mimeTypes = {};

var require$$0 = {
	"application/1d-interleaved-parityfec": {
	source: "iana"
},
	"application/3gpdash-qoe-report+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/3gpp-ims+xml": {
	source: "iana",
	compressible: true
},
	"application/3gpphal+json": {
	source: "iana",
	compressible: true
},
	"application/3gpphalforms+json": {
	source: "iana",
	compressible: true
},
	"application/a2l": {
	source: "iana"
},
	"application/ace+cbor": {
	source: "iana"
},
	"application/activemessage": {
	source: "iana"
},
	"application/activity+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-directory+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcost+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcostparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointprop+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointpropparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-error+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamcontrol+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamparams+json": {
	source: "iana",
	compressible: true
},
	"application/aml": {
	source: "iana"
},
	"application/andrew-inset": {
	source: "iana",
	extensions: [
		"ez"
	]
},
	"application/applefile": {
	source: "iana"
},
	"application/applixware": {
	source: "apache",
	extensions: [
		"aw"
	]
},
	"application/at+jwt": {
	source: "iana"
},
	"application/atf": {
	source: "iana"
},
	"application/atfx": {
	source: "iana"
},
	"application/atom+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atom"
	]
},
	"application/atomcat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomcat"
	]
},
	"application/atomdeleted+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomdeleted"
	]
},
	"application/atomicmail": {
	source: "iana"
},
	"application/atomsvc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomsvc"
	]
},
	"application/atsc-dwd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dwd"
	]
},
	"application/atsc-dynamic-event-message": {
	source: "iana"
},
	"application/atsc-held+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"held"
	]
},
	"application/atsc-rdt+json": {
	source: "iana",
	compressible: true
},
	"application/atsc-rsat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsat"
	]
},
	"application/atxml": {
	source: "iana"
},
	"application/auth-policy+xml": {
	source: "iana",
	compressible: true
},
	"application/bacnet-xdd+zip": {
	source: "iana",
	compressible: false
},
	"application/batch-smtp": {
	source: "iana"
},
	"application/bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/beep+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/calendar+json": {
	source: "iana",
	compressible: true
},
	"application/calendar+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xcs"
	]
},
	"application/call-completion": {
	source: "iana"
},
	"application/cals-1840": {
	source: "iana"
},
	"application/captive+json": {
	source: "iana",
	compressible: true
},
	"application/cbor": {
	source: "iana"
},
	"application/cbor-seq": {
	source: "iana"
},
	"application/cccex": {
	source: "iana"
},
	"application/ccmp+xml": {
	source: "iana",
	compressible: true
},
	"application/ccxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ccxml"
	]
},
	"application/cdfx+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdfx"
	]
},
	"application/cdmi-capability": {
	source: "iana",
	extensions: [
		"cdmia"
	]
},
	"application/cdmi-container": {
	source: "iana",
	extensions: [
		"cdmic"
	]
},
	"application/cdmi-domain": {
	source: "iana",
	extensions: [
		"cdmid"
	]
},
	"application/cdmi-object": {
	source: "iana",
	extensions: [
		"cdmio"
	]
},
	"application/cdmi-queue": {
	source: "iana",
	extensions: [
		"cdmiq"
	]
},
	"application/cdni": {
	source: "iana"
},
	"application/cea": {
	source: "iana"
},
	"application/cea-2018+xml": {
	source: "iana",
	compressible: true
},
	"application/cellml+xml": {
	source: "iana",
	compressible: true
},
	"application/cfw": {
	source: "iana"
},
	"application/city+json": {
	source: "iana",
	compressible: true
},
	"application/clr": {
	source: "iana"
},
	"application/clue+xml": {
	source: "iana",
	compressible: true
},
	"application/clue_info+xml": {
	source: "iana",
	compressible: true
},
	"application/cms": {
	source: "iana"
},
	"application/cnrp+xml": {
	source: "iana",
	compressible: true
},
	"application/coap-group+json": {
	source: "iana",
	compressible: true
},
	"application/coap-payload": {
	source: "iana"
},
	"application/commonground": {
	source: "iana"
},
	"application/conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/cose": {
	source: "iana"
},
	"application/cose-key": {
	source: "iana"
},
	"application/cose-key-set": {
	source: "iana"
},
	"application/cpl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cpl"
	]
},
	"application/csrattrs": {
	source: "iana"
},
	"application/csta+xml": {
	source: "iana",
	compressible: true
},
	"application/cstadata+xml": {
	source: "iana",
	compressible: true
},
	"application/csvm+json": {
	source: "iana",
	compressible: true
},
	"application/cu-seeme": {
	source: "apache",
	extensions: [
		"cu"
	]
},
	"application/cwt": {
	source: "iana"
},
	"application/cybercash": {
	source: "iana"
},
	"application/dart": {
	compressible: true
},
	"application/dash+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpd"
	]
},
	"application/dash-patch+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpp"
	]
},
	"application/dashdelta": {
	source: "iana"
},
	"application/davmount+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"davmount"
	]
},
	"application/dca-rft": {
	source: "iana"
},
	"application/dcd": {
	source: "iana"
},
	"application/dec-dx": {
	source: "iana"
},
	"application/dialog-info+xml": {
	source: "iana",
	compressible: true
},
	"application/dicom": {
	source: "iana"
},
	"application/dicom+json": {
	source: "iana",
	compressible: true
},
	"application/dicom+xml": {
	source: "iana",
	compressible: true
},
	"application/dii": {
	source: "iana"
},
	"application/dit": {
	source: "iana"
},
	"application/dns": {
	source: "iana"
},
	"application/dns+json": {
	source: "iana",
	compressible: true
},
	"application/dns-message": {
	source: "iana"
},
	"application/docbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dbk"
	]
},
	"application/dots+cbor": {
	source: "iana"
},
	"application/dskpp+xml": {
	source: "iana",
	compressible: true
},
	"application/dssc+der": {
	source: "iana",
	extensions: [
		"dssc"
	]
},
	"application/dssc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdssc"
	]
},
	"application/dvcs": {
	source: "iana"
},
	"application/ecmascript": {
	source: "iana",
	compressible: true,
	extensions: [
		"es",
		"ecma"
	]
},
	"application/edi-consent": {
	source: "iana"
},
	"application/edi-x12": {
	source: "iana",
	compressible: false
},
	"application/edifact": {
	source: "iana",
	compressible: false
},
	"application/efi": {
	source: "iana"
},
	"application/elm+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/elm+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.cap+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/emergencycalldata.comment+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.control+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.deviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.ecall.msd": {
	source: "iana"
},
	"application/emergencycalldata.providerinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.serviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.subscriberinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.veds+xml": {
	source: "iana",
	compressible: true
},
	"application/emma+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emma"
	]
},
	"application/emotionml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emotionml"
	]
},
	"application/encaprtp": {
	source: "iana"
},
	"application/epp+xml": {
	source: "iana",
	compressible: true
},
	"application/epub+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"epub"
	]
},
	"application/eshop": {
	source: "iana"
},
	"application/exi": {
	source: "iana",
	extensions: [
		"exi"
	]
},
	"application/expect-ct-report+json": {
	source: "iana",
	compressible: true
},
	"application/express": {
	source: "iana",
	extensions: [
		"exp"
	]
},
	"application/fastinfoset": {
	source: "iana"
},
	"application/fastsoap": {
	source: "iana"
},
	"application/fdt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fdt"
	]
},
	"application/fhir+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fhir+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fido.trusted-apps+json": {
	compressible: true
},
	"application/fits": {
	source: "iana"
},
	"application/flexfec": {
	source: "iana"
},
	"application/font-sfnt": {
	source: "iana"
},
	"application/font-tdpfr": {
	source: "iana",
	extensions: [
		"pfr"
	]
},
	"application/font-woff": {
	source: "iana",
	compressible: false
},
	"application/framework-attributes+xml": {
	source: "iana",
	compressible: true
},
	"application/geo+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"geojson"
	]
},
	"application/geo+json-seq": {
	source: "iana"
},
	"application/geopackage+sqlite3": {
	source: "iana"
},
	"application/geoxacml+xml": {
	source: "iana",
	compressible: true
},
	"application/gltf-buffer": {
	source: "iana"
},
	"application/gml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"gml"
	]
},
	"application/gpx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"gpx"
	]
},
	"application/gxf": {
	source: "apache",
	extensions: [
		"gxf"
	]
},
	"application/gzip": {
	source: "iana",
	compressible: false,
	extensions: [
		"gz"
	]
},
	"application/h224": {
	source: "iana"
},
	"application/held+xml": {
	source: "iana",
	compressible: true
},
	"application/hjson": {
	extensions: [
		"hjson"
	]
},
	"application/http": {
	source: "iana"
},
	"application/hyperstudio": {
	source: "iana",
	extensions: [
		"stk"
	]
},
	"application/ibe-key-request+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pkg-reply+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pp-data": {
	source: "iana"
},
	"application/iges": {
	source: "iana"
},
	"application/im-iscomposing+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/index": {
	source: "iana"
},
	"application/index.cmd": {
	source: "iana"
},
	"application/index.obj": {
	source: "iana"
},
	"application/index.response": {
	source: "iana"
},
	"application/index.vnd": {
	source: "iana"
},
	"application/inkml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ink",
		"inkml"
	]
},
	"application/iotp": {
	source: "iana"
},
	"application/ipfix": {
	source: "iana",
	extensions: [
		"ipfix"
	]
},
	"application/ipp": {
	source: "iana"
},
	"application/isup": {
	source: "iana"
},
	"application/its+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"its"
	]
},
	"application/java-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"jar",
		"war",
		"ear"
	]
},
	"application/java-serialized-object": {
	source: "apache",
	compressible: false,
	extensions: [
		"ser"
	]
},
	"application/java-vm": {
	source: "apache",
	compressible: false,
	extensions: [
		"class"
	]
},
	"application/javascript": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js",
		"mjs"
	]
},
	"application/jf2feed+json": {
	source: "iana",
	compressible: true
},
	"application/jose": {
	source: "iana"
},
	"application/jose+json": {
	source: "iana",
	compressible: true
},
	"application/jrd+json": {
	source: "iana",
	compressible: true
},
	"application/jscalendar+json": {
	source: "iana",
	compressible: true
},
	"application/json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"json",
		"map"
	]
},
	"application/json-patch+json": {
	source: "iana",
	compressible: true
},
	"application/json-seq": {
	source: "iana"
},
	"application/json5": {
	extensions: [
		"json5"
	]
},
	"application/jsonml+json": {
	source: "apache",
	compressible: true,
	extensions: [
		"jsonml"
	]
},
	"application/jwk+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+json": {
	source: "iana",
	compressible: true
},
	"application/jwt": {
	source: "iana"
},
	"application/kpml-request+xml": {
	source: "iana",
	compressible: true
},
	"application/kpml-response+xml": {
	source: "iana",
	compressible: true
},
	"application/ld+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"jsonld"
	]
},
	"application/lgr+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lgr"
	]
},
	"application/link-format": {
	source: "iana"
},
	"application/load-control+xml": {
	source: "iana",
	compressible: true
},
	"application/lost+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lostxml"
	]
},
	"application/lostsync+xml": {
	source: "iana",
	compressible: true
},
	"application/lpf+zip": {
	source: "iana",
	compressible: false
},
	"application/lxf": {
	source: "iana"
},
	"application/mac-binhex40": {
	source: "iana",
	extensions: [
		"hqx"
	]
},
	"application/mac-compactpro": {
	source: "apache",
	extensions: [
		"cpt"
	]
},
	"application/macwriteii": {
	source: "iana"
},
	"application/mads+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mads"
	]
},
	"application/manifest+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"webmanifest"
	]
},
	"application/marc": {
	source: "iana",
	extensions: [
		"mrc"
	]
},
	"application/marcxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mrcx"
	]
},
	"application/mathematica": {
	source: "iana",
	extensions: [
		"ma",
		"nb",
		"mb"
	]
},
	"application/mathml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mathml"
	]
},
	"application/mathml-content+xml": {
	source: "iana",
	compressible: true
},
	"application/mathml-presentation+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-associated-procedure-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-deregister+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-envelope+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-protection-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-reception-report+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-user-service-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbox": {
	source: "iana",
	extensions: [
		"mbox"
	]
},
	"application/media-policy-dataset+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpf"
	]
},
	"application/media_control+xml": {
	source: "iana",
	compressible: true
},
	"application/mediaservercontrol+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mscml"
	]
},
	"application/merge-patch+json": {
	source: "iana",
	compressible: true
},
	"application/metalink+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"metalink"
	]
},
	"application/metalink4+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"meta4"
	]
},
	"application/mets+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mets"
	]
},
	"application/mf4": {
	source: "iana"
},
	"application/mikey": {
	source: "iana"
},
	"application/mipc": {
	source: "iana"
},
	"application/missing-blocks+cbor-seq": {
	source: "iana"
},
	"application/mmt-aei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"maei"
	]
},
	"application/mmt-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musd"
	]
},
	"application/mods+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mods"
	]
},
	"application/moss-keys": {
	source: "iana"
},
	"application/moss-signature": {
	source: "iana"
},
	"application/mosskey-data": {
	source: "iana"
},
	"application/mosskey-request": {
	source: "iana"
},
	"application/mp21": {
	source: "iana",
	extensions: [
		"m21",
		"mp21"
	]
},
	"application/mp4": {
	source: "iana",
	extensions: [
		"mp4s",
		"m4p"
	]
},
	"application/mpeg4-generic": {
	source: "iana"
},
	"application/mpeg4-iod": {
	source: "iana"
},
	"application/mpeg4-iod-xmt": {
	source: "iana"
},
	"application/mrb-consumer+xml": {
	source: "iana",
	compressible: true
},
	"application/mrb-publish+xml": {
	source: "iana",
	compressible: true
},
	"application/msc-ivr+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msc-mixer+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msword": {
	source: "iana",
	compressible: false,
	extensions: [
		"doc",
		"dot"
	]
},
	"application/mud+json": {
	source: "iana",
	compressible: true
},
	"application/multipart-core": {
	source: "iana"
},
	"application/mxf": {
	source: "iana",
	extensions: [
		"mxf"
	]
},
	"application/n-quads": {
	source: "iana",
	extensions: [
		"nq"
	]
},
	"application/n-triples": {
	source: "iana",
	extensions: [
		"nt"
	]
},
	"application/nasdata": {
	source: "iana"
},
	"application/news-checkgroups": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-groupinfo": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-transmission": {
	source: "iana"
},
	"application/nlsml+xml": {
	source: "iana",
	compressible: true
},
	"application/node": {
	source: "iana",
	extensions: [
		"cjs"
	]
},
	"application/nss": {
	source: "iana"
},
	"application/oauth-authz-req+jwt": {
	source: "iana"
},
	"application/oblivious-dns-message": {
	source: "iana"
},
	"application/ocsp-request": {
	source: "iana"
},
	"application/ocsp-response": {
	source: "iana"
},
	"application/octet-stream": {
	source: "iana",
	compressible: false,
	extensions: [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	]
},
	"application/oda": {
	source: "iana",
	extensions: [
		"oda"
	]
},
	"application/odm+xml": {
	source: "iana",
	compressible: true
},
	"application/odx": {
	source: "iana"
},
	"application/oebps-package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"opf"
	]
},
	"application/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogx"
	]
},
	"application/omdoc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"omdoc"
	]
},
	"application/onenote": {
	source: "apache",
	extensions: [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg"
	]
},
	"application/opc-nodeset+xml": {
	source: "iana",
	compressible: true
},
	"application/oscore": {
	source: "iana"
},
	"application/oxps": {
	source: "iana",
	extensions: [
		"oxps"
	]
},
	"application/p21": {
	source: "iana"
},
	"application/p21+zip": {
	source: "iana",
	compressible: false
},
	"application/p2p-overlay+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"relo"
	]
},
	"application/parityfec": {
	source: "iana"
},
	"application/passport": {
	source: "iana"
},
	"application/patch-ops-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/pdf": {
	source: "iana",
	compressible: false,
	extensions: [
		"pdf"
	]
},
	"application/pdx": {
	source: "iana"
},
	"application/pem-certificate-chain": {
	source: "iana"
},
	"application/pgp-encrypted": {
	source: "iana",
	compressible: false,
	extensions: [
		"pgp"
	]
},
	"application/pgp-keys": {
	source: "iana",
	extensions: [
		"asc"
	]
},
	"application/pgp-signature": {
	source: "iana",
	extensions: [
		"asc",
		"sig"
	]
},
	"application/pics-rules": {
	source: "apache",
	extensions: [
		"prf"
	]
},
	"application/pidf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pidf-diff+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pkcs10": {
	source: "iana",
	extensions: [
		"p10"
	]
},
	"application/pkcs12": {
	source: "iana"
},
	"application/pkcs7-mime": {
	source: "iana",
	extensions: [
		"p7m",
		"p7c"
	]
},
	"application/pkcs7-signature": {
	source: "iana",
	extensions: [
		"p7s"
	]
},
	"application/pkcs8": {
	source: "iana",
	extensions: [
		"p8"
	]
},
	"application/pkcs8-encrypted": {
	source: "iana"
},
	"application/pkix-attr-cert": {
	source: "iana",
	extensions: [
		"ac"
	]
},
	"application/pkix-cert": {
	source: "iana",
	extensions: [
		"cer"
	]
},
	"application/pkix-crl": {
	source: "iana",
	extensions: [
		"crl"
	]
},
	"application/pkix-pkipath": {
	source: "iana",
	extensions: [
		"pkipath"
	]
},
	"application/pkixcmp": {
	source: "iana",
	extensions: [
		"pki"
	]
},
	"application/pls+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pls"
	]
},
	"application/poc-settings+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/postscript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ai",
		"eps",
		"ps"
	]
},
	"application/ppsp-tracker+json": {
	source: "iana",
	compressible: true
},
	"application/problem+json": {
	source: "iana",
	compressible: true
},
	"application/problem+xml": {
	source: "iana",
	compressible: true
},
	"application/provenance+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"provx"
	]
},
	"application/prs.alvestrand.titrax-sheet": {
	source: "iana"
},
	"application/prs.cww": {
	source: "iana",
	extensions: [
		"cww"
	]
},
	"application/prs.cyn": {
	source: "iana",
	charset: "7-BIT"
},
	"application/prs.hpub+zip": {
	source: "iana",
	compressible: false
},
	"application/prs.nprend": {
	source: "iana"
},
	"application/prs.plucker": {
	source: "iana"
},
	"application/prs.rdf-xml-crypt": {
	source: "iana"
},
	"application/prs.xsf+xml": {
	source: "iana",
	compressible: true
},
	"application/pskc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pskcxml"
	]
},
	"application/pvd+json": {
	source: "iana",
	compressible: true
},
	"application/qsig": {
	source: "iana"
},
	"application/raml+yaml": {
	compressible: true,
	extensions: [
		"raml"
	]
},
	"application/raptorfec": {
	source: "iana"
},
	"application/rdap+json": {
	source: "iana",
	compressible: true
},
	"application/rdf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rdf",
		"owl"
	]
},
	"application/reginfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rif"
	]
},
	"application/relax-ng-compact-syntax": {
	source: "iana",
	extensions: [
		"rnc"
	]
},
	"application/remote-printing": {
	source: "iana"
},
	"application/reputon+json": {
	source: "iana",
	compressible: true
},
	"application/resource-lists+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rl"
	]
},
	"application/resource-lists-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rld"
	]
},
	"application/rfc+xml": {
	source: "iana",
	compressible: true
},
	"application/riscos": {
	source: "iana"
},
	"application/rlmi+xml": {
	source: "iana",
	compressible: true
},
	"application/rls-services+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rs"
	]
},
	"application/route-apd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rapd"
	]
},
	"application/route-s-tsid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sls"
	]
},
	"application/route-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rusd"
	]
},
	"application/rpki-ghostbusters": {
	source: "iana",
	extensions: [
		"gbr"
	]
},
	"application/rpki-manifest": {
	source: "iana",
	extensions: [
		"mft"
	]
},
	"application/rpki-publication": {
	source: "iana"
},
	"application/rpki-roa": {
	source: "iana",
	extensions: [
		"roa"
	]
},
	"application/rpki-updown": {
	source: "iana"
},
	"application/rsd+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rsd"
	]
},
	"application/rss+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rss"
	]
},
	"application/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"application/rtploopback": {
	source: "iana"
},
	"application/rtx": {
	source: "iana"
},
	"application/samlassertion+xml": {
	source: "iana",
	compressible: true
},
	"application/samlmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/sarif+json": {
	source: "iana",
	compressible: true
},
	"application/sarif-external-properties+json": {
	source: "iana",
	compressible: true
},
	"application/sbe": {
	source: "iana"
},
	"application/sbml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sbml"
	]
},
	"application/scaip+xml": {
	source: "iana",
	compressible: true
},
	"application/scim+json": {
	source: "iana",
	compressible: true
},
	"application/scvp-cv-request": {
	source: "iana",
	extensions: [
		"scq"
	]
},
	"application/scvp-cv-response": {
	source: "iana",
	extensions: [
		"scs"
	]
},
	"application/scvp-vp-request": {
	source: "iana",
	extensions: [
		"spq"
	]
},
	"application/scvp-vp-response": {
	source: "iana",
	extensions: [
		"spp"
	]
},
	"application/sdp": {
	source: "iana",
	extensions: [
		"sdp"
	]
},
	"application/secevent+jwt": {
	source: "iana"
},
	"application/senml+cbor": {
	source: "iana"
},
	"application/senml+json": {
	source: "iana",
	compressible: true
},
	"application/senml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"senmlx"
	]
},
	"application/senml-etch+cbor": {
	source: "iana"
},
	"application/senml-etch+json": {
	source: "iana",
	compressible: true
},
	"application/senml-exi": {
	source: "iana"
},
	"application/sensml+cbor": {
	source: "iana"
},
	"application/sensml+json": {
	source: "iana",
	compressible: true
},
	"application/sensml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sensmlx"
	]
},
	"application/sensml-exi": {
	source: "iana"
},
	"application/sep+xml": {
	source: "iana",
	compressible: true
},
	"application/sep-exi": {
	source: "iana"
},
	"application/session-info": {
	source: "iana"
},
	"application/set-payment": {
	source: "iana"
},
	"application/set-payment-initiation": {
	source: "iana",
	extensions: [
		"setpay"
	]
},
	"application/set-registration": {
	source: "iana"
},
	"application/set-registration-initiation": {
	source: "iana",
	extensions: [
		"setreg"
	]
},
	"application/sgml": {
	source: "iana"
},
	"application/sgml-open-catalog": {
	source: "iana"
},
	"application/shf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"shf"
	]
},
	"application/sieve": {
	source: "iana",
	extensions: [
		"siv",
		"sieve"
	]
},
	"application/simple-filter+xml": {
	source: "iana",
	compressible: true
},
	"application/simple-message-summary": {
	source: "iana"
},
	"application/simplesymbolcontainer": {
	source: "iana"
},
	"application/sipc": {
	source: "iana"
},
	"application/slate": {
	source: "iana"
},
	"application/smil": {
	source: "iana"
},
	"application/smil+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"smi",
		"smil"
	]
},
	"application/smpte336m": {
	source: "iana"
},
	"application/soap+fastinfoset": {
	source: "iana"
},
	"application/soap+xml": {
	source: "iana",
	compressible: true
},
	"application/sparql-query": {
	source: "iana",
	extensions: [
		"rq"
	]
},
	"application/sparql-results+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"srx"
	]
},
	"application/spdx+json": {
	source: "iana",
	compressible: true
},
	"application/spirits-event+xml": {
	source: "iana",
	compressible: true
},
	"application/sql": {
	source: "iana"
},
	"application/srgs": {
	source: "iana",
	extensions: [
		"gram"
	]
},
	"application/srgs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"grxml"
	]
},
	"application/sru+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sru"
	]
},
	"application/ssdl+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ssdl"
	]
},
	"application/ssml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ssml"
	]
},
	"application/stix+json": {
	source: "iana",
	compressible: true
},
	"application/swid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"swidtag"
	]
},
	"application/tamp-apex-update": {
	source: "iana"
},
	"application/tamp-apex-update-confirm": {
	source: "iana"
},
	"application/tamp-community-update": {
	source: "iana"
},
	"application/tamp-community-update-confirm": {
	source: "iana"
},
	"application/tamp-error": {
	source: "iana"
},
	"application/tamp-sequence-adjust": {
	source: "iana"
},
	"application/tamp-sequence-adjust-confirm": {
	source: "iana"
},
	"application/tamp-status-query": {
	source: "iana"
},
	"application/tamp-status-response": {
	source: "iana"
},
	"application/tamp-update": {
	source: "iana"
},
	"application/tamp-update-confirm": {
	source: "iana"
},
	"application/tar": {
	compressible: true
},
	"application/taxii+json": {
	source: "iana",
	compressible: true
},
	"application/td+json": {
	source: "iana",
	compressible: true
},
	"application/tei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tei",
		"teicorpus"
	]
},
	"application/tetra_isi": {
	source: "iana"
},
	"application/thraud+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tfi"
	]
},
	"application/timestamp-query": {
	source: "iana"
},
	"application/timestamp-reply": {
	source: "iana"
},
	"application/timestamped-data": {
	source: "iana",
	extensions: [
		"tsd"
	]
},
	"application/tlsrpt+gzip": {
	source: "iana"
},
	"application/tlsrpt+json": {
	source: "iana",
	compressible: true
},
	"application/tnauthlist": {
	source: "iana"
},
	"application/token-introspection+jwt": {
	source: "iana"
},
	"application/toml": {
	compressible: true,
	extensions: [
		"toml"
	]
},
	"application/trickle-ice-sdpfrag": {
	source: "iana"
},
	"application/trig": {
	source: "iana",
	extensions: [
		"trig"
	]
},
	"application/ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttml"
	]
},
	"application/tve-trigger": {
	source: "iana"
},
	"application/tzif": {
	source: "iana"
},
	"application/tzif-leap": {
	source: "iana"
},
	"application/ubjson": {
	compressible: false,
	extensions: [
		"ubj"
	]
},
	"application/ulpfec": {
	source: "iana"
},
	"application/urc-grpsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-ressheet+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsheet"
	]
},
	"application/urc-targetdesc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"td"
	]
},
	"application/urc-uisocketdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/vcard+json": {
	source: "iana",
	compressible: true
},
	"application/vcard+xml": {
	source: "iana",
	compressible: true
},
	"application/vemmi": {
	source: "iana"
},
	"application/vividence.scriptfile": {
	source: "apache"
},
	"application/vnd.1000minds.decision-model+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"1km"
	]
},
	"application/vnd.3gpp-prose+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ch+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-v2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.5gnas": {
	source: "iana"
},
	"application/vnd.3gpp.access-transfer-events+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.bsf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gmop+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gtpc": {
	source: "iana"
},
	"application/vnd.3gpp.interworking-data": {
	source: "iana"
},
	"application/vnd.3gpp.lpp": {
	source: "iana"
},
	"application/vnd.3gpp.mc-signalling-ear": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-payload": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-signalling": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-floor-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-signed+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mid-call+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ngap": {
	source: "iana"
},
	"application/vnd.3gpp.pfcp": {
	source: "iana"
},
	"application/vnd.3gpp.pic-bw-large": {
	source: "iana",
	extensions: [
		"plb"
	]
},
	"application/vnd.3gpp.pic-bw-small": {
	source: "iana",
	extensions: [
		"psb"
	]
},
	"application/vnd.3gpp.pic-bw-var": {
	source: "iana",
	extensions: [
		"pvb"
	]
},
	"application/vnd.3gpp.s1ap": {
	source: "iana"
},
	"application/vnd.3gpp.sms": {
	source: "iana"
},
	"application/vnd.3gpp.sms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-ext+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.state-and-event-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ussd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.sms": {
	source: "iana"
},
	"application/vnd.3gpp2.tcap": {
	source: "iana",
	extensions: [
		"tcap"
	]
},
	"application/vnd.3lightssoftware.imagescal": {
	source: "iana"
},
	"application/vnd.3m.post-it-notes": {
	source: "iana",
	extensions: [
		"pwn"
	]
},
	"application/vnd.accpac.simply.aso": {
	source: "iana",
	extensions: [
		"aso"
	]
},
	"application/vnd.accpac.simply.imp": {
	source: "iana",
	extensions: [
		"imp"
	]
},
	"application/vnd.acucobol": {
	source: "iana",
	extensions: [
		"acu"
	]
},
	"application/vnd.acucorp": {
	source: "iana",
	extensions: [
		"atc",
		"acutc"
	]
},
	"application/vnd.adobe.air-application-installer-package+zip": {
	source: "apache",
	compressible: false,
	extensions: [
		"air"
	]
},
	"application/vnd.adobe.flash.movie": {
	source: "iana"
},
	"application/vnd.adobe.formscentral.fcdt": {
	source: "iana",
	extensions: [
		"fcdt"
	]
},
	"application/vnd.adobe.fxp": {
	source: "iana",
	extensions: [
		"fxp",
		"fxpl"
	]
},
	"application/vnd.adobe.partial-upload": {
	source: "iana"
},
	"application/vnd.adobe.xdp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdp"
	]
},
	"application/vnd.adobe.xfdf": {
	source: "iana",
	extensions: [
		"xfdf"
	]
},
	"application/vnd.aether.imp": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata-pagedef": {
	source: "iana"
},
	"application/vnd.afpc.cmoca-cmresource": {
	source: "iana"
},
	"application/vnd.afpc.foca-charset": {
	source: "iana"
},
	"application/vnd.afpc.foca-codedfont": {
	source: "iana"
},
	"application/vnd.afpc.foca-codepage": {
	source: "iana"
},
	"application/vnd.afpc.modca": {
	source: "iana"
},
	"application/vnd.afpc.modca-cmtable": {
	source: "iana"
},
	"application/vnd.afpc.modca-formdef": {
	source: "iana"
},
	"application/vnd.afpc.modca-mediummap": {
	source: "iana"
},
	"application/vnd.afpc.modca-objectcontainer": {
	source: "iana"
},
	"application/vnd.afpc.modca-overlay": {
	source: "iana"
},
	"application/vnd.afpc.modca-pagesegment": {
	source: "iana"
},
	"application/vnd.age": {
	source: "iana",
	extensions: [
		"age"
	]
},
	"application/vnd.ah-barcode": {
	source: "iana"
},
	"application/vnd.ahead.space": {
	source: "iana",
	extensions: [
		"ahead"
	]
},
	"application/vnd.airzip.filesecure.azf": {
	source: "iana",
	extensions: [
		"azf"
	]
},
	"application/vnd.airzip.filesecure.azs": {
	source: "iana",
	extensions: [
		"azs"
	]
},
	"application/vnd.amadeus+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.amazon.ebook": {
	source: "apache",
	extensions: [
		"azw"
	]
},
	"application/vnd.amazon.mobi8-ebook": {
	source: "iana"
},
	"application/vnd.americandynamics.acc": {
	source: "iana",
	extensions: [
		"acc"
	]
},
	"application/vnd.amiga.ami": {
	source: "iana",
	extensions: [
		"ami"
	]
},
	"application/vnd.amundsen.maze+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.android.ota": {
	source: "iana"
},
	"application/vnd.android.package-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"apk"
	]
},
	"application/vnd.anki": {
	source: "iana"
},
	"application/vnd.anser-web-certificate-issue-initiation": {
	source: "iana",
	extensions: [
		"cii"
	]
},
	"application/vnd.anser-web-funds-transfer-initiation": {
	source: "apache",
	extensions: [
		"fti"
	]
},
	"application/vnd.antix.game-component": {
	source: "iana",
	extensions: [
		"atx"
	]
},
	"application/vnd.apache.arrow.file": {
	source: "iana"
},
	"application/vnd.apache.arrow.stream": {
	source: "iana"
},
	"application/vnd.apache.thrift.binary": {
	source: "iana"
},
	"application/vnd.apache.thrift.compact": {
	source: "iana"
},
	"application/vnd.apache.thrift.json": {
	source: "iana"
},
	"application/vnd.api+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.aplextor.warrp+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apothekende.reservation+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apple.installer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpkg"
	]
},
	"application/vnd.apple.keynote": {
	source: "iana",
	extensions: [
		"key"
	]
},
	"application/vnd.apple.mpegurl": {
	source: "iana",
	extensions: [
		"m3u8"
	]
},
	"application/vnd.apple.numbers": {
	source: "iana",
	extensions: [
		"numbers"
	]
},
	"application/vnd.apple.pages": {
	source: "iana",
	extensions: [
		"pages"
	]
},
	"application/vnd.apple.pkpass": {
	compressible: false,
	extensions: [
		"pkpass"
	]
},
	"application/vnd.arastra.swi": {
	source: "iana"
},
	"application/vnd.aristanetworks.swi": {
	source: "iana",
	extensions: [
		"swi"
	]
},
	"application/vnd.artisan+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.artsquare": {
	source: "iana"
},
	"application/vnd.astraea-software.iota": {
	source: "iana",
	extensions: [
		"iota"
	]
},
	"application/vnd.audiograph": {
	source: "iana",
	extensions: [
		"aep"
	]
},
	"application/vnd.autopackage": {
	source: "iana"
},
	"application/vnd.avalon+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.avistar+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.balsamiq.bmml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmml"
	]
},
	"application/vnd.balsamiq.bmpr": {
	source: "iana"
},
	"application/vnd.banana-accounting": {
	source: "iana"
},
	"application/vnd.bbf.usp.error": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bekitzur-stech+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bint.med-content": {
	source: "iana"
},
	"application/vnd.biopax.rdf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.blink-idb-value-wrapper": {
	source: "iana"
},
	"application/vnd.blueice.multipass": {
	source: "iana",
	extensions: [
		"mpm"
	]
},
	"application/vnd.bluetooth.ep.oob": {
	source: "iana"
},
	"application/vnd.bluetooth.le.oob": {
	source: "iana"
},
	"application/vnd.bmi": {
	source: "iana",
	extensions: [
		"bmi"
	]
},
	"application/vnd.bpf": {
	source: "iana"
},
	"application/vnd.bpf3": {
	source: "iana"
},
	"application/vnd.businessobjects": {
	source: "iana",
	extensions: [
		"rep"
	]
},
	"application/vnd.byu.uapi+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cab-jscript": {
	source: "iana"
},
	"application/vnd.canon-cpdl": {
	source: "iana"
},
	"application/vnd.canon-lips": {
	source: "iana"
},
	"application/vnd.capasystems-pg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cendio.thinlinc.clientconf": {
	source: "iana"
},
	"application/vnd.century-systems.tcp_stream": {
	source: "iana"
},
	"application/vnd.chemdraw+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdxml"
	]
},
	"application/vnd.chess-pgn": {
	source: "iana"
},
	"application/vnd.chipnuts.karaoke-mmd": {
	source: "iana",
	extensions: [
		"mmd"
	]
},
	"application/vnd.ciedi": {
	source: "iana"
},
	"application/vnd.cinderella": {
	source: "iana",
	extensions: [
		"cdy"
	]
},
	"application/vnd.cirpack.isdn-ext": {
	source: "iana"
},
	"application/vnd.citationstyles.style+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"csl"
	]
},
	"application/vnd.claymore": {
	source: "iana",
	extensions: [
		"cla"
	]
},
	"application/vnd.cloanto.rp9": {
	source: "iana",
	extensions: [
		"rp9"
	]
},
	"application/vnd.clonk.c4group": {
	source: "iana",
	extensions: [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	]
},
	"application/vnd.cluetrust.cartomobile-config": {
	source: "iana",
	extensions: [
		"c11amc"
	]
},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
	source: "iana",
	extensions: [
		"c11amz"
	]
},
	"application/vnd.coffeescript": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet-template": {
	source: "iana"
},
	"application/vnd.collection+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.doc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.next+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.comicbook+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.comicbook-rar": {
	source: "iana"
},
	"application/vnd.commerce-battelle": {
	source: "iana"
},
	"application/vnd.commonspace": {
	source: "iana",
	extensions: [
		"csp"
	]
},
	"application/vnd.contact.cmsg": {
	source: "iana",
	extensions: [
		"cdbcmsg"
	]
},
	"application/vnd.coreos.ignition+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cosmocaller": {
	source: "iana",
	extensions: [
		"cmc"
	]
},
	"application/vnd.crick.clicker": {
	source: "iana",
	extensions: [
		"clkx"
	]
},
	"application/vnd.crick.clicker.keyboard": {
	source: "iana",
	extensions: [
		"clkk"
	]
},
	"application/vnd.crick.clicker.palette": {
	source: "iana",
	extensions: [
		"clkp"
	]
},
	"application/vnd.crick.clicker.template": {
	source: "iana",
	extensions: [
		"clkt"
	]
},
	"application/vnd.crick.clicker.wordbank": {
	source: "iana",
	extensions: [
		"clkw"
	]
},
	"application/vnd.criticaltools.wbs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wbs"
	]
},
	"application/vnd.cryptii.pipe+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.crypto-shade-file": {
	source: "iana"
},
	"application/vnd.cryptomator.encrypted": {
	source: "iana"
},
	"application/vnd.cryptomator.vault": {
	source: "iana"
},
	"application/vnd.ctc-posml": {
	source: "iana",
	extensions: [
		"pml"
	]
},
	"application/vnd.ctct.ws+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cups-pdf": {
	source: "iana"
},
	"application/vnd.cups-postscript": {
	source: "iana"
},
	"application/vnd.cups-ppd": {
	source: "iana",
	extensions: [
		"ppd"
	]
},
	"application/vnd.cups-raster": {
	source: "iana"
},
	"application/vnd.cups-raw": {
	source: "iana"
},
	"application/vnd.curl": {
	source: "iana"
},
	"application/vnd.curl.car": {
	source: "apache",
	extensions: [
		"car"
	]
},
	"application/vnd.curl.pcurl": {
	source: "apache",
	extensions: [
		"pcurl"
	]
},
	"application/vnd.cyan.dean.root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cybank": {
	source: "iana"
},
	"application/vnd.cyclonedx+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cyclonedx+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.d2l.coursepackage1p0+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.d3m-dataset": {
	source: "iana"
},
	"application/vnd.d3m-problem": {
	source: "iana"
},
	"application/vnd.dart": {
	source: "iana",
	compressible: true,
	extensions: [
		"dart"
	]
},
	"application/vnd.data-vision.rdz": {
	source: "iana",
	extensions: [
		"rdz"
	]
},
	"application/vnd.datapackage+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dataresource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dbf": {
	source: "iana",
	extensions: [
		"dbf"
	]
},
	"application/vnd.debian.binary-package": {
	source: "iana"
},
	"application/vnd.dece.data": {
	source: "iana",
	extensions: [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	]
},
	"application/vnd.dece.ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uvt",
		"uvvt"
	]
},
	"application/vnd.dece.unspecified": {
	source: "iana",
	extensions: [
		"uvx",
		"uvvx"
	]
},
	"application/vnd.dece.zip": {
	source: "iana",
	extensions: [
		"uvz",
		"uvvz"
	]
},
	"application/vnd.denovo.fcselayout-link": {
	source: "iana",
	extensions: [
		"fe_launch"
	]
},
	"application/vnd.desmume.movie": {
	source: "iana"
},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
	source: "iana"
},
	"application/vnd.dm.delegation+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dna": {
	source: "iana",
	extensions: [
		"dna"
	]
},
	"application/vnd.document+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dolby.mlp": {
	source: "apache",
	extensions: [
		"mlp"
	]
},
	"application/vnd.dolby.mobile.1": {
	source: "iana"
},
	"application/vnd.dolby.mobile.2": {
	source: "iana"
},
	"application/vnd.doremir.scorecloud-binary-document": {
	source: "iana"
},
	"application/vnd.dpgraph": {
	source: "iana",
	extensions: [
		"dpg"
	]
},
	"application/vnd.dreamfactory": {
	source: "iana",
	extensions: [
		"dfac"
	]
},
	"application/vnd.drive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ds-keypoint": {
	source: "apache",
	extensions: [
		"kpxx"
	]
},
	"application/vnd.dtg.local": {
	source: "iana"
},
	"application/vnd.dtg.local.flash": {
	source: "iana"
},
	"application/vnd.dtg.local.html": {
	source: "iana"
},
	"application/vnd.dvb.ait": {
	source: "iana",
	extensions: [
		"ait"
	]
},
	"application/vnd.dvb.dvbisl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.dvbj": {
	source: "iana"
},
	"application/vnd.dvb.esgcontainer": {
	source: "iana"
},
	"application/vnd.dvb.ipdcdftnotifaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess2": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgpdd": {
	source: "iana"
},
	"application/vnd.dvb.ipdcroaming": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-base": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-enhancement": {
	source: "iana"
},
	"application/vnd.dvb.notif-aggregate-root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-container+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-generic+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-msglist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-init+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.pfr": {
	source: "iana"
},
	"application/vnd.dvb.service": {
	source: "iana",
	extensions: [
		"svc"
	]
},
	"application/vnd.dxr": {
	source: "iana"
},
	"application/vnd.dynageo": {
	source: "iana",
	extensions: [
		"geo"
	]
},
	"application/vnd.dzr": {
	source: "iana"
},
	"application/vnd.easykaraoke.cdgdownload": {
	source: "iana"
},
	"application/vnd.ecdis-update": {
	source: "iana"
},
	"application/vnd.ecip.rlp": {
	source: "iana"
},
	"application/vnd.eclipse.ditto+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ecowin.chart": {
	source: "iana",
	extensions: [
		"mag"
	]
},
	"application/vnd.ecowin.filerequest": {
	source: "iana"
},
	"application/vnd.ecowin.fileupdate": {
	source: "iana"
},
	"application/vnd.ecowin.series": {
	source: "iana"
},
	"application/vnd.ecowin.seriesrequest": {
	source: "iana"
},
	"application/vnd.ecowin.seriesupdate": {
	source: "iana"
},
	"application/vnd.efi.img": {
	source: "iana"
},
	"application/vnd.efi.iso": {
	source: "iana"
},
	"application/vnd.emclient.accessrequest+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.enliven": {
	source: "iana",
	extensions: [
		"nml"
	]
},
	"application/vnd.enphase.envoy": {
	source: "iana"
},
	"application/vnd.eprints.data+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.epson.esf": {
	source: "iana",
	extensions: [
		"esf"
	]
},
	"application/vnd.epson.msf": {
	source: "iana",
	extensions: [
		"msf"
	]
},
	"application/vnd.epson.quickanime": {
	source: "iana",
	extensions: [
		"qam"
	]
},
	"application/vnd.epson.salt": {
	source: "iana",
	extensions: [
		"slt"
	]
},
	"application/vnd.epson.ssf": {
	source: "iana",
	extensions: [
		"ssf"
	]
},
	"application/vnd.ericsson.quickcall": {
	source: "iana"
},
	"application/vnd.espass-espass+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.eszigno3+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"es3",
		"et3"
	]
},
	"application/vnd.etsi.aoc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.asic-e+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.asic-s+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.cug+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvcommand+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-bc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-cod+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-npvr+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvservice+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsync+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mcid+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mheg5": {
	source: "iana"
},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.pstn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.sci+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.simservs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.timestamp-token": {
	source: "iana"
},
	"application/vnd.etsi.tsl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.tsl.der": {
	source: "iana"
},
	"application/vnd.eu.kasparian.car+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.eudora.data": {
	source: "iana"
},
	"application/vnd.evolv.ecig.profile": {
	source: "iana"
},
	"application/vnd.evolv.ecig.settings": {
	source: "iana"
},
	"application/vnd.evolv.ecig.theme": {
	source: "iana"
},
	"application/vnd.exstream-empower+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.exstream-package": {
	source: "iana"
},
	"application/vnd.ezpix-album": {
	source: "iana",
	extensions: [
		"ez2"
	]
},
	"application/vnd.ezpix-package": {
	source: "iana",
	extensions: [
		"ez3"
	]
},
	"application/vnd.f-secure.mobile": {
	source: "iana"
},
	"application/vnd.familysearch.gedcom+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.fastcopy-disk-image": {
	source: "iana"
},
	"application/vnd.fdf": {
	source: "iana",
	extensions: [
		"fdf"
	]
},
	"application/vnd.fdsn.mseed": {
	source: "iana",
	extensions: [
		"mseed"
	]
},
	"application/vnd.fdsn.seed": {
	source: "iana",
	extensions: [
		"seed",
		"dataless"
	]
},
	"application/vnd.ffsns": {
	source: "iana"
},
	"application/vnd.ficlab.flb+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.filmit.zfc": {
	source: "iana"
},
	"application/vnd.fints": {
	source: "iana"
},
	"application/vnd.firemonkeys.cloudcell": {
	source: "iana"
},
	"application/vnd.flographit": {
	source: "iana",
	extensions: [
		"gph"
	]
},
	"application/vnd.fluxtime.clip": {
	source: "iana",
	extensions: [
		"ftc"
	]
},
	"application/vnd.font-fontforge-sfd": {
	source: "iana"
},
	"application/vnd.framemaker": {
	source: "iana",
	extensions: [
		"fm",
		"frame",
		"maker",
		"book"
	]
},
	"application/vnd.frogans.fnc": {
	source: "iana",
	extensions: [
		"fnc"
	]
},
	"application/vnd.frogans.ltf": {
	source: "iana",
	extensions: [
		"ltf"
	]
},
	"application/vnd.fsc.weblaunch": {
	source: "iana",
	extensions: [
		"fsc"
	]
},
	"application/vnd.fujifilm.fb.docuworks": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.binder": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.jfi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.fujitsu.oasys": {
	source: "iana",
	extensions: [
		"oas"
	]
},
	"application/vnd.fujitsu.oasys2": {
	source: "iana",
	extensions: [
		"oa2"
	]
},
	"application/vnd.fujitsu.oasys3": {
	source: "iana",
	extensions: [
		"oa3"
	]
},
	"application/vnd.fujitsu.oasysgp": {
	source: "iana",
	extensions: [
		"fg5"
	]
},
	"application/vnd.fujitsu.oasysprs": {
	source: "iana",
	extensions: [
		"bh2"
	]
},
	"application/vnd.fujixerox.art-ex": {
	source: "iana"
},
	"application/vnd.fujixerox.art4": {
	source: "iana"
},
	"application/vnd.fujixerox.ddd": {
	source: "iana",
	extensions: [
		"ddd"
	]
},
	"application/vnd.fujixerox.docuworks": {
	source: "iana",
	extensions: [
		"xdw"
	]
},
	"application/vnd.fujixerox.docuworks.binder": {
	source: "iana",
	extensions: [
		"xbd"
	]
},
	"application/vnd.fujixerox.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujixerox.hbpl": {
	source: "iana"
},
	"application/vnd.fut-misnet": {
	source: "iana"
},
	"application/vnd.futoin+cbor": {
	source: "iana"
},
	"application/vnd.futoin+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.fuzzysheet": {
	source: "iana",
	extensions: [
		"fzs"
	]
},
	"application/vnd.genomatix.tuxedo": {
	source: "iana",
	extensions: [
		"txd"
	]
},
	"application/vnd.gentics.grd+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geo+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geocube+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.geogebra.file": {
	source: "iana",
	extensions: [
		"ggb"
	]
},
	"application/vnd.geogebra.slides": {
	source: "iana"
},
	"application/vnd.geogebra.tool": {
	source: "iana",
	extensions: [
		"ggt"
	]
},
	"application/vnd.geometry-explorer": {
	source: "iana",
	extensions: [
		"gex",
		"gre"
	]
},
	"application/vnd.geonext": {
	source: "iana",
	extensions: [
		"gxt"
	]
},
	"application/vnd.geoplan": {
	source: "iana",
	extensions: [
		"g2w"
	]
},
	"application/vnd.geospace": {
	source: "iana",
	extensions: [
		"g3w"
	]
},
	"application/vnd.gerber": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt-response": {
	source: "iana"
},
	"application/vnd.gmx": {
	source: "iana",
	extensions: [
		"gmx"
	]
},
	"application/vnd.google-apps.document": {
	compressible: false,
	extensions: [
		"gdoc"
	]
},
	"application/vnd.google-apps.presentation": {
	compressible: false,
	extensions: [
		"gslides"
	]
},
	"application/vnd.google-apps.spreadsheet": {
	compressible: false,
	extensions: [
		"gsheet"
	]
},
	"application/vnd.google-earth.kml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"kml"
	]
},
	"application/vnd.google-earth.kmz": {
	source: "iana",
	compressible: false,
	extensions: [
		"kmz"
	]
},
	"application/vnd.gov.sk.e-form+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gov.sk.e-form+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.grafeq": {
	source: "iana",
	extensions: [
		"gqf",
		"gqs"
	]
},
	"application/vnd.gridmp": {
	source: "iana"
},
	"application/vnd.groove-account": {
	source: "iana",
	extensions: [
		"gac"
	]
},
	"application/vnd.groove-help": {
	source: "iana",
	extensions: [
		"ghf"
	]
},
	"application/vnd.groove-identity-message": {
	source: "iana",
	extensions: [
		"gim"
	]
},
	"application/vnd.groove-injector": {
	source: "iana",
	extensions: [
		"grv"
	]
},
	"application/vnd.groove-tool-message": {
	source: "iana",
	extensions: [
		"gtm"
	]
},
	"application/vnd.groove-tool-template": {
	source: "iana",
	extensions: [
		"tpl"
	]
},
	"application/vnd.groove-vcard": {
	source: "iana",
	extensions: [
		"vcg"
	]
},
	"application/vnd.hal+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hal+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"hal"
	]
},
	"application/vnd.handheld-entertainment+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zmm"
	]
},
	"application/vnd.hbci": {
	source: "iana",
	extensions: [
		"hbci"
	]
},
	"application/vnd.hc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hcl-bireports": {
	source: "iana"
},
	"application/vnd.hdt": {
	source: "iana"
},
	"application/vnd.heroku+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hhe.lesson-player": {
	source: "iana",
	extensions: [
		"les"
	]
},
	"application/vnd.hl7cda+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hl7v2+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hp-hpgl": {
	source: "iana",
	extensions: [
		"hpgl"
	]
},
	"application/vnd.hp-hpid": {
	source: "iana",
	extensions: [
		"hpid"
	]
},
	"application/vnd.hp-hps": {
	source: "iana",
	extensions: [
		"hps"
	]
},
	"application/vnd.hp-jlyt": {
	source: "iana",
	extensions: [
		"jlt"
	]
},
	"application/vnd.hp-pcl": {
	source: "iana",
	extensions: [
		"pcl"
	]
},
	"application/vnd.hp-pclxl": {
	source: "iana",
	extensions: [
		"pclxl"
	]
},
	"application/vnd.httphone": {
	source: "iana"
},
	"application/vnd.hydrostatix.sof-data": {
	source: "iana",
	extensions: [
		"sfd-hdstx"
	]
},
	"application/vnd.hyper+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyper-item+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyperdrive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hzn-3d-crossword": {
	source: "iana"
},
	"application/vnd.ibm.afplinedata": {
	source: "iana"
},
	"application/vnd.ibm.electronic-media": {
	source: "iana"
},
	"application/vnd.ibm.minipay": {
	source: "iana",
	extensions: [
		"mpy"
	]
},
	"application/vnd.ibm.modcap": {
	source: "iana",
	extensions: [
		"afp",
		"listafp",
		"list3820"
	]
},
	"application/vnd.ibm.rights-management": {
	source: "iana",
	extensions: [
		"irm"
	]
},
	"application/vnd.ibm.secure-container": {
	source: "iana",
	extensions: [
		"sc"
	]
},
	"application/vnd.iccprofile": {
	source: "iana",
	extensions: [
		"icc",
		"icm"
	]
},
	"application/vnd.ieee.1905": {
	source: "iana"
},
	"application/vnd.igloader": {
	source: "iana",
	extensions: [
		"igl"
	]
},
	"application/vnd.imagemeter.folder+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.imagemeter.image+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.immervision-ivp": {
	source: "iana",
	extensions: [
		"ivp"
	]
},
	"application/vnd.immervision-ivu": {
	source: "iana",
	extensions: [
		"ivu"
	]
},
	"application/vnd.ims.imsccv1p1": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p2": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p3": {
	source: "iana"
},
	"application/vnd.ims.lis.v2.result+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.informedcontrol.rms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.informix-visionary": {
	source: "iana"
},
	"application/vnd.infotech.project": {
	source: "iana"
},
	"application/vnd.infotech.project+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.innopath.wamp.notification": {
	source: "iana"
},
	"application/vnd.insors.igm": {
	source: "iana",
	extensions: [
		"igm"
	]
},
	"application/vnd.intercon.formnet": {
	source: "iana",
	extensions: [
		"xpw",
		"xpx"
	]
},
	"application/vnd.intergeo": {
	source: "iana",
	extensions: [
		"i2g"
	]
},
	"application/vnd.intertrust.digibox": {
	source: "iana"
},
	"application/vnd.intertrust.nncp": {
	source: "iana"
},
	"application/vnd.intu.qbo": {
	source: "iana",
	extensions: [
		"qbo"
	]
},
	"application/vnd.intu.qfx": {
	source: "iana",
	extensions: [
		"qfx"
	]
},
	"application/vnd.iptc.g2.catalogitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.conceptitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.packageitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.planningitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ipunplugged.rcprofile": {
	source: "iana",
	extensions: [
		"rcprofile"
	]
},
	"application/vnd.irepository.package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"irp"
	]
},
	"application/vnd.is-xpr": {
	source: "iana",
	extensions: [
		"xpr"
	]
},
	"application/vnd.isac.fcs": {
	source: "iana",
	extensions: [
		"fcs"
	]
},
	"application/vnd.iso11783-10+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.jam": {
	source: "iana",
	extensions: [
		"jam"
	]
},
	"application/vnd.japannet-directory-service": {
	source: "iana"
},
	"application/vnd.japannet-jpnstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-payment-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-registration": {
	source: "iana"
},
	"application/vnd.japannet-registration-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-setstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-verification": {
	source: "iana"
},
	"application/vnd.japannet-verification-wakeup": {
	source: "iana"
},
	"application/vnd.jcp.javame.midlet-rms": {
	source: "iana",
	extensions: [
		"rms"
	]
},
	"application/vnd.jisp": {
	source: "iana",
	extensions: [
		"jisp"
	]
},
	"application/vnd.joost.joda-archive": {
	source: "iana",
	extensions: [
		"joda"
	]
},
	"application/vnd.jsk.isdn-ngn": {
	source: "iana"
},
	"application/vnd.kahootz": {
	source: "iana",
	extensions: [
		"ktz",
		"ktr"
	]
},
	"application/vnd.kde.karbon": {
	source: "iana",
	extensions: [
		"karbon"
	]
},
	"application/vnd.kde.kchart": {
	source: "iana",
	extensions: [
		"chrt"
	]
},
	"application/vnd.kde.kformula": {
	source: "iana",
	extensions: [
		"kfo"
	]
},
	"application/vnd.kde.kivio": {
	source: "iana",
	extensions: [
		"flw"
	]
},
	"application/vnd.kde.kontour": {
	source: "iana",
	extensions: [
		"kon"
	]
},
	"application/vnd.kde.kpresenter": {
	source: "iana",
	extensions: [
		"kpr",
		"kpt"
	]
},
	"application/vnd.kde.kspread": {
	source: "iana",
	extensions: [
		"ksp"
	]
},
	"application/vnd.kde.kword": {
	source: "iana",
	extensions: [
		"kwd",
		"kwt"
	]
},
	"application/vnd.kenameaapp": {
	source: "iana",
	extensions: [
		"htke"
	]
},
	"application/vnd.kidspiration": {
	source: "iana",
	extensions: [
		"kia"
	]
},
	"application/vnd.kinar": {
	source: "iana",
	extensions: [
		"kne",
		"knp"
	]
},
	"application/vnd.koan": {
	source: "iana",
	extensions: [
		"skp",
		"skd",
		"skt",
		"skm"
	]
},
	"application/vnd.kodak-descriptor": {
	source: "iana",
	extensions: [
		"sse"
	]
},
	"application/vnd.las": {
	source: "iana"
},
	"application/vnd.las.las+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.las.las+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lasxml"
	]
},
	"application/vnd.laszip": {
	source: "iana"
},
	"application/vnd.leap+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.liberty-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.llamagraphics.life-balance.desktop": {
	source: "iana",
	extensions: [
		"lbd"
	]
},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lbe"
	]
},
	"application/vnd.logipipe.circuit+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.loom": {
	source: "iana"
},
	"application/vnd.lotus-1-2-3": {
	source: "iana",
	extensions: [
		"123"
	]
},
	"application/vnd.lotus-approach": {
	source: "iana",
	extensions: [
		"apr"
	]
},
	"application/vnd.lotus-freelance": {
	source: "iana",
	extensions: [
		"pre"
	]
},
	"application/vnd.lotus-notes": {
	source: "iana",
	extensions: [
		"nsf"
	]
},
	"application/vnd.lotus-organizer": {
	source: "iana",
	extensions: [
		"org"
	]
},
	"application/vnd.lotus-screencam": {
	source: "iana",
	extensions: [
		"scm"
	]
},
	"application/vnd.lotus-wordpro": {
	source: "iana",
	extensions: [
		"lwp"
	]
},
	"application/vnd.macports.portpkg": {
	source: "iana",
	extensions: [
		"portpkg"
	]
},
	"application/vnd.mapbox-vector-tile": {
	source: "iana",
	extensions: [
		"mvt"
	]
},
	"application/vnd.marlin.drm.actiontoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.conftoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.license+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.mdcf": {
	source: "iana"
},
	"application/vnd.mason+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.maxar.archive.3tz+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.maxmind.maxmind-db": {
	source: "iana"
},
	"application/vnd.mcd": {
	source: "iana",
	extensions: [
		"mcd"
	]
},
	"application/vnd.medcalcdata": {
	source: "iana",
	extensions: [
		"mc1"
	]
},
	"application/vnd.mediastation.cdkey": {
	source: "iana",
	extensions: [
		"cdkey"
	]
},
	"application/vnd.meridian-slingshot": {
	source: "iana"
},
	"application/vnd.mfer": {
	source: "iana",
	extensions: [
		"mwf"
	]
},
	"application/vnd.mfmp": {
	source: "iana",
	extensions: [
		"mfm"
	]
},
	"application/vnd.micro+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.micrografx.flo": {
	source: "iana",
	extensions: [
		"flo"
	]
},
	"application/vnd.micrografx.igx": {
	source: "iana",
	extensions: [
		"igx"
	]
},
	"application/vnd.microsoft.portable-executable": {
	source: "iana"
},
	"application/vnd.microsoft.windows.thumbnail-cache": {
	source: "iana"
},
	"application/vnd.miele+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.mif": {
	source: "iana",
	extensions: [
		"mif"
	]
},
	"application/vnd.minisoft-hp3000-save": {
	source: "iana"
},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
	source: "iana"
},
	"application/vnd.mobius.daf": {
	source: "iana",
	extensions: [
		"daf"
	]
},
	"application/vnd.mobius.dis": {
	source: "iana",
	extensions: [
		"dis"
	]
},
	"application/vnd.mobius.mbk": {
	source: "iana",
	extensions: [
		"mbk"
	]
},
	"application/vnd.mobius.mqy": {
	source: "iana",
	extensions: [
		"mqy"
	]
},
	"application/vnd.mobius.msl": {
	source: "iana",
	extensions: [
		"msl"
	]
},
	"application/vnd.mobius.plc": {
	source: "iana",
	extensions: [
		"plc"
	]
},
	"application/vnd.mobius.txf": {
	source: "iana",
	extensions: [
		"txf"
	]
},
	"application/vnd.mophun.application": {
	source: "iana",
	extensions: [
		"mpn"
	]
},
	"application/vnd.mophun.certificate": {
	source: "iana",
	extensions: [
		"mpc"
	]
},
	"application/vnd.motorola.flexsuite": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.adsi": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.fis": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.gotap": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.kmr": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.ttc": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.wem": {
	source: "iana"
},
	"application/vnd.motorola.iprm": {
	source: "iana"
},
	"application/vnd.mozilla.xul+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xul"
	]
},
	"application/vnd.ms-3mfdocument": {
	source: "iana"
},
	"application/vnd.ms-artgalry": {
	source: "iana",
	extensions: [
		"cil"
	]
},
	"application/vnd.ms-asf": {
	source: "iana"
},
	"application/vnd.ms-cab-compressed": {
	source: "iana",
	extensions: [
		"cab"
	]
},
	"application/vnd.ms-color.iccprofile": {
	source: "apache"
},
	"application/vnd.ms-excel": {
	source: "iana",
	compressible: false,
	extensions: [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	]
},
	"application/vnd.ms-excel.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlam"
	]
},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsb"
	]
},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsm"
	]
},
	"application/vnd.ms-excel.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"xltm"
	]
},
	"application/vnd.ms-fontobject": {
	source: "iana",
	compressible: true,
	extensions: [
		"eot"
	]
},
	"application/vnd.ms-htmlhelp": {
	source: "iana",
	extensions: [
		"chm"
	]
},
	"application/vnd.ms-ims": {
	source: "iana",
	extensions: [
		"ims"
	]
},
	"application/vnd.ms-lrm": {
	source: "iana",
	extensions: [
		"lrm"
	]
},
	"application/vnd.ms-office.activex+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-officetheme": {
	source: "iana",
	extensions: [
		"thmx"
	]
},
	"application/vnd.ms-opentype": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-outlook": {
	compressible: false,
	extensions: [
		"msg"
	]
},
	"application/vnd.ms-package.obfuscated-opentype": {
	source: "apache"
},
	"application/vnd.ms-pki.seccat": {
	source: "apache",
	extensions: [
		"cat"
	]
},
	"application/vnd.ms-pki.stl": {
	source: "apache",
	extensions: [
		"stl"
	]
},
	"application/vnd.ms-playready.initiator+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-powerpoint": {
	source: "iana",
	compressible: false,
	extensions: [
		"ppt",
		"pps",
		"pot"
	]
},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppam"
	]
},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
	source: "iana",
	extensions: [
		"pptm"
	]
},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
	source: "iana",
	extensions: [
		"sldm"
	]
},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppsm"
	]
},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"potm"
	]
},
	"application/vnd.ms-printdevicecapabilities+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-printing.printticket+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-printschematicket+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-project": {
	source: "iana",
	extensions: [
		"mpp",
		"mpt"
	]
},
	"application/vnd.ms-tnef": {
	source: "iana"
},
	"application/vnd.ms-windows.devicepairing": {
	source: "iana"
},
	"application/vnd.ms-windows.nwprinting.oob": {
	source: "iana"
},
	"application/vnd.ms-windows.printerpairing": {
	source: "iana"
},
	"application/vnd.ms-windows.wsd.oob": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-resp": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-resp": {
	source: "iana"
},
	"application/vnd.ms-word.document.macroenabled.12": {
	source: "iana",
	extensions: [
		"docm"
	]
},
	"application/vnd.ms-word.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"dotm"
	]
},
	"application/vnd.ms-works": {
	source: "iana",
	extensions: [
		"wps",
		"wks",
		"wcm",
		"wdb"
	]
},
	"application/vnd.ms-wpl": {
	source: "iana",
	extensions: [
		"wpl"
	]
},
	"application/vnd.ms-xpsdocument": {
	source: "iana",
	compressible: false,
	extensions: [
		"xps"
	]
},
	"application/vnd.msa-disk-image": {
	source: "iana"
},
	"application/vnd.mseq": {
	source: "iana",
	extensions: [
		"mseq"
	]
},
	"application/vnd.msign": {
	source: "iana"
},
	"application/vnd.multiad.creator": {
	source: "iana"
},
	"application/vnd.multiad.creator.cif": {
	source: "iana"
},
	"application/vnd.music-niff": {
	source: "iana"
},
	"application/vnd.musician": {
	source: "iana",
	extensions: [
		"mus"
	]
},
	"application/vnd.muvee.style": {
	source: "iana",
	extensions: [
		"msty"
	]
},
	"application/vnd.mynfc": {
	source: "iana",
	extensions: [
		"taglet"
	]
},
	"application/vnd.nacamar.ybrid+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ncd.control": {
	source: "iana"
},
	"application/vnd.ncd.reference": {
	source: "iana"
},
	"application/vnd.nearst.inv+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nebumind.line": {
	source: "iana"
},
	"application/vnd.nervana": {
	source: "iana"
},
	"application/vnd.netfpx": {
	source: "iana"
},
	"application/vnd.neurolanguage.nlu": {
	source: "iana",
	extensions: [
		"nlu"
	]
},
	"application/vnd.nimn": {
	source: "iana"
},
	"application/vnd.nintendo.nitro.rom": {
	source: "iana"
},
	"application/vnd.nintendo.snes.rom": {
	source: "iana"
},
	"application/vnd.nitf": {
	source: "iana",
	extensions: [
		"ntf",
		"nitf"
	]
},
	"application/vnd.noblenet-directory": {
	source: "iana",
	extensions: [
		"nnd"
	]
},
	"application/vnd.noblenet-sealer": {
	source: "iana",
	extensions: [
		"nns"
	]
},
	"application/vnd.noblenet-web": {
	source: "iana",
	extensions: [
		"nnw"
	]
},
	"application/vnd.nokia.catalogs": {
	source: "iana"
},
	"application/vnd.nokia.conml+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.conml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.iptv.config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.isds-radio-presets": {
	source: "iana"
},
	"application/vnd.nokia.landmark+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.landmark+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.landmarkcollection+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.n-gage.ac+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ac"
	]
},
	"application/vnd.nokia.n-gage.data": {
	source: "iana",
	extensions: [
		"ngdat"
	]
},
	"application/vnd.nokia.n-gage.symbian.install": {
	source: "iana",
	extensions: [
		"n-gage"
	]
},
	"application/vnd.nokia.ncd": {
	source: "iana"
},
	"application/vnd.nokia.pcd+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.pcd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.radio-preset": {
	source: "iana",
	extensions: [
		"rpst"
	]
},
	"application/vnd.nokia.radio-presets": {
	source: "iana",
	extensions: [
		"rpss"
	]
},
	"application/vnd.novadigm.edm": {
	source: "iana",
	extensions: [
		"edm"
	]
},
	"application/vnd.novadigm.edx": {
	source: "iana",
	extensions: [
		"edx"
	]
},
	"application/vnd.novadigm.ext": {
	source: "iana",
	extensions: [
		"ext"
	]
},
	"application/vnd.ntt-local.content-share": {
	source: "iana"
},
	"application/vnd.ntt-local.file-transfer": {
	source: "iana"
},
	"application/vnd.ntt-local.ogw_remote-access": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_remote": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.chart": {
	source: "iana",
	extensions: [
		"odc"
	]
},
	"application/vnd.oasis.opendocument.chart-template": {
	source: "iana",
	extensions: [
		"otc"
	]
},
	"application/vnd.oasis.opendocument.database": {
	source: "iana",
	extensions: [
		"odb"
	]
},
	"application/vnd.oasis.opendocument.formula": {
	source: "iana",
	extensions: [
		"odf"
	]
},
	"application/vnd.oasis.opendocument.formula-template": {
	source: "iana",
	extensions: [
		"odft"
	]
},
	"application/vnd.oasis.opendocument.graphics": {
	source: "iana",
	compressible: false,
	extensions: [
		"odg"
	]
},
	"application/vnd.oasis.opendocument.graphics-template": {
	source: "iana",
	extensions: [
		"otg"
	]
},
	"application/vnd.oasis.opendocument.image": {
	source: "iana",
	extensions: [
		"odi"
	]
},
	"application/vnd.oasis.opendocument.image-template": {
	source: "iana",
	extensions: [
		"oti"
	]
},
	"application/vnd.oasis.opendocument.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"odp"
	]
},
	"application/vnd.oasis.opendocument.presentation-template": {
	source: "iana",
	extensions: [
		"otp"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"ods"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
	source: "iana",
	extensions: [
		"ots"
	]
},
	"application/vnd.oasis.opendocument.text": {
	source: "iana",
	compressible: false,
	extensions: [
		"odt"
	]
},
	"application/vnd.oasis.opendocument.text-master": {
	source: "iana",
	extensions: [
		"odm"
	]
},
	"application/vnd.oasis.opendocument.text-template": {
	source: "iana",
	extensions: [
		"ott"
	]
},
	"application/vnd.oasis.opendocument.text-web": {
	source: "iana",
	extensions: [
		"oth"
	]
},
	"application/vnd.obn": {
	source: "iana"
},
	"application/vnd.ocf+cbor": {
	source: "iana"
},
	"application/vnd.oci.image.manifest.v1+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oftn.l10n+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessdownload+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessstreaming+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.cspg-hexbinary": {
	source: "iana"
},
	"application/vnd.oipf.dae.svg+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.dae.xhtml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.pae.gem": {
	source: "iana"
},
	"application/vnd.oipf.spdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.spdlist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.ueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.userprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.olpc-sugar": {
	source: "iana",
	extensions: [
		"xo"
	]
},
	"application/vnd.oma-scws-config": {
	source: "iana"
},
	"application/vnd.oma-scws-http-request": {
	source: "iana"
},
	"application/vnd.oma-scws-http-response": {
	source: "iana"
},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.drm-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.imd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.ltkm": {
	source: "iana"
},
	"application/vnd.oma.bcast.notification+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.provisioningtrigger": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgboot": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgdd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sgdu": {
	source: "iana"
},
	"application/vnd.oma.bcast.simple-symbol-container": {
	source: "iana"
},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sprov+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.stkm": {
	source: "iana"
},
	"application/vnd.oma.cab-address-book+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-feature-handler+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-pcc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-subs-invite+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-user-prefs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.dcd": {
	source: "iana"
},
	"application/vnd.oma.dcdc": {
	source: "iana"
},
	"application/vnd.oma.dd2+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dd2"
	]
},
	"application/vnd.oma.drm.risd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.group-usage-list+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+cbor": {
	source: "iana"
},
	"application/vnd.oma.lwm2m+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+tlv": {
	source: "iana"
},
	"application/vnd.oma.pal+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.final-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.groups+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.push": {
	source: "iana"
},
	"application/vnd.oma.scidm.messages+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.xcap-directory+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-email+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-file+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-folder+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omaloc-supl-init": {
	source: "iana"
},
	"application/vnd.onepager": {
	source: "iana"
},
	"application/vnd.onepagertamp": {
	source: "iana"
},
	"application/vnd.onepagertamx": {
	source: "iana"
},
	"application/vnd.onepagertat": {
	source: "iana"
},
	"application/vnd.onepagertatp": {
	source: "iana"
},
	"application/vnd.onepagertatx": {
	source: "iana"
},
	"application/vnd.openblox.game+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"obgx"
	]
},
	"application/vnd.openblox.game-binary": {
	source: "iana"
},
	"application/vnd.openeye.oeb": {
	source: "iana"
},
	"application/vnd.openofficeorg.extension": {
	source: "apache",
	extensions: [
		"oxt"
	]
},
	"application/vnd.openstreetmap.data+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osm"
	]
},
	"application/vnd.opentimestamps.ots": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"pptx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
	source: "iana",
	extensions: [
		"sldx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
	source: "iana",
	extensions: [
		"ppsx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
	source: "iana",
	extensions: [
		"potx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"xlsx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
	source: "iana",
	extensions: [
		"xltx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
	source: "iana",
	compressible: false,
	extensions: [
		"docx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
	source: "iana",
	extensions: [
		"dotx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.core-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.relationships+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oracle.resource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.orange.indata": {
	source: "iana"
},
	"application/vnd.osa.netdeploy": {
	source: "iana"
},
	"application/vnd.osgeo.mapguide.package": {
	source: "iana",
	extensions: [
		"mgp"
	]
},
	"application/vnd.osgi.bundle": {
	source: "iana"
},
	"application/vnd.osgi.dp": {
	source: "iana",
	extensions: [
		"dp"
	]
},
	"application/vnd.osgi.subsystem": {
	source: "iana",
	extensions: [
		"esa"
	]
},
	"application/vnd.otps.ct-kip+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oxli.countgraph": {
	source: "iana"
},
	"application/vnd.pagerduty+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.palm": {
	source: "iana",
	extensions: [
		"pdb",
		"pqa",
		"oprc"
	]
},
	"application/vnd.panoply": {
	source: "iana"
},
	"application/vnd.paos.xml": {
	source: "iana"
},
	"application/vnd.patentdive": {
	source: "iana"
},
	"application/vnd.patientecommsdoc": {
	source: "iana"
},
	"application/vnd.pawaafile": {
	source: "iana",
	extensions: [
		"paw"
	]
},
	"application/vnd.pcos": {
	source: "iana"
},
	"application/vnd.pg.format": {
	source: "iana",
	extensions: [
		"str"
	]
},
	"application/vnd.pg.osasli": {
	source: "iana",
	extensions: [
		"ei6"
	]
},
	"application/vnd.piaccess.application-licence": {
	source: "iana"
},
	"application/vnd.picsel": {
	source: "iana",
	extensions: [
		"efif"
	]
},
	"application/vnd.pmi.widget": {
	source: "iana",
	extensions: [
		"wg"
	]
},
	"application/vnd.poc.group-advertisement+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.pocketlearn": {
	source: "iana",
	extensions: [
		"plf"
	]
},
	"application/vnd.powerbuilder6": {
	source: "iana",
	extensions: [
		"pbd"
	]
},
	"application/vnd.powerbuilder6-s": {
	source: "iana"
},
	"application/vnd.powerbuilder7": {
	source: "iana"
},
	"application/vnd.powerbuilder7-s": {
	source: "iana"
},
	"application/vnd.powerbuilder75": {
	source: "iana"
},
	"application/vnd.powerbuilder75-s": {
	source: "iana"
},
	"application/vnd.preminet": {
	source: "iana"
},
	"application/vnd.previewsystems.box": {
	source: "iana",
	extensions: [
		"box"
	]
},
	"application/vnd.proteus.magazine": {
	source: "iana",
	extensions: [
		"mgz"
	]
},
	"application/vnd.psfs": {
	source: "iana"
},
	"application/vnd.publishare-delta-tree": {
	source: "iana",
	extensions: [
		"qps"
	]
},
	"application/vnd.pvi.ptid1": {
	source: "iana",
	extensions: [
		"ptid"
	]
},
	"application/vnd.pwg-multiplexed": {
	source: "iana"
},
	"application/vnd.pwg-xhtml-print+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.qualcomm.brew-app-res": {
	source: "iana"
},
	"application/vnd.quarantainenet": {
	source: "iana"
},
	"application/vnd.quark.quarkxpress": {
	source: "iana",
	extensions: [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	]
},
	"application/vnd.quobject-quoxdocument": {
	source: "iana"
},
	"application/vnd.radisys.moml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-stream+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-base+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-group+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-speech+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-transform+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.rainstor.data": {
	source: "iana"
},
	"application/vnd.rapid": {
	source: "iana"
},
	"application/vnd.rar": {
	source: "iana",
	extensions: [
		"rar"
	]
},
	"application/vnd.realvnc.bed": {
	source: "iana",
	extensions: [
		"bed"
	]
},
	"application/vnd.recordare.musicxml": {
	source: "iana",
	extensions: [
		"mxl"
	]
},
	"application/vnd.recordare.musicxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musicxml"
	]
},
	"application/vnd.renlearn.rlprint": {
	source: "iana"
},
	"application/vnd.resilient.logic": {
	source: "iana"
},
	"application/vnd.restful+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.rig.cryptonote": {
	source: "iana",
	extensions: [
		"cryptonote"
	]
},
	"application/vnd.rim.cod": {
	source: "apache",
	extensions: [
		"cod"
	]
},
	"application/vnd.rn-realmedia": {
	source: "apache",
	extensions: [
		"rm"
	]
},
	"application/vnd.rn-realmedia-vbr": {
	source: "apache",
	extensions: [
		"rmvb"
	]
},
	"application/vnd.route66.link66+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"link66"
	]
},
	"application/vnd.rs-274x": {
	source: "iana"
},
	"application/vnd.ruckus.download": {
	source: "iana"
},
	"application/vnd.s3sms": {
	source: "iana"
},
	"application/vnd.sailingtracker.track": {
	source: "iana",
	extensions: [
		"st"
	]
},
	"application/vnd.sar": {
	source: "iana"
},
	"application/vnd.sbm.cid": {
	source: "iana"
},
	"application/vnd.sbm.mid2": {
	source: "iana"
},
	"application/vnd.scribus": {
	source: "iana"
},
	"application/vnd.sealed.3df": {
	source: "iana"
},
	"application/vnd.sealed.csf": {
	source: "iana"
},
	"application/vnd.sealed.doc": {
	source: "iana"
},
	"application/vnd.sealed.eml": {
	source: "iana"
},
	"application/vnd.sealed.mht": {
	source: "iana"
},
	"application/vnd.sealed.net": {
	source: "iana"
},
	"application/vnd.sealed.ppt": {
	source: "iana"
},
	"application/vnd.sealed.tiff": {
	source: "iana"
},
	"application/vnd.sealed.xls": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.html": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.pdf": {
	source: "iana"
},
	"application/vnd.seemail": {
	source: "iana",
	extensions: [
		"see"
	]
},
	"application/vnd.seis+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sema": {
	source: "iana",
	extensions: [
		"sema"
	]
},
	"application/vnd.semd": {
	source: "iana",
	extensions: [
		"semd"
	]
},
	"application/vnd.semf": {
	source: "iana",
	extensions: [
		"semf"
	]
},
	"application/vnd.shade-save-file": {
	source: "iana"
},
	"application/vnd.shana.informed.formdata": {
	source: "iana",
	extensions: [
		"ifm"
	]
},
	"application/vnd.shana.informed.formtemplate": {
	source: "iana",
	extensions: [
		"itp"
	]
},
	"application/vnd.shana.informed.interchange": {
	source: "iana",
	extensions: [
		"iif"
	]
},
	"application/vnd.shana.informed.package": {
	source: "iana",
	extensions: [
		"ipk"
	]
},
	"application/vnd.shootproof+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shopkick+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shp": {
	source: "iana"
},
	"application/vnd.shx": {
	source: "iana"
},
	"application/vnd.sigrok.session": {
	source: "iana"
},
	"application/vnd.simtech-mindmapper": {
	source: "iana",
	extensions: [
		"twd",
		"twds"
	]
},
	"application/vnd.siren+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.smaf": {
	source: "iana",
	extensions: [
		"mmf"
	]
},
	"application/vnd.smart.notebook": {
	source: "iana"
},
	"application/vnd.smart.teacher": {
	source: "iana",
	extensions: [
		"teacher"
	]
},
	"application/vnd.snesdev-page-table": {
	source: "iana"
},
	"application/vnd.software602.filler.form+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fo"
	]
},
	"application/vnd.software602.filler.form-xml-zip": {
	source: "iana"
},
	"application/vnd.solent.sdkm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sdkm",
		"sdkd"
	]
},
	"application/vnd.spotfire.dxp": {
	source: "iana",
	extensions: [
		"dxp"
	]
},
	"application/vnd.spotfire.sfs": {
	source: "iana",
	extensions: [
		"sfs"
	]
},
	"application/vnd.sqlite3": {
	source: "iana"
},
	"application/vnd.sss-cod": {
	source: "iana"
},
	"application/vnd.sss-dtf": {
	source: "iana"
},
	"application/vnd.sss-ntf": {
	source: "iana"
},
	"application/vnd.stardivision.calc": {
	source: "apache",
	extensions: [
		"sdc"
	]
},
	"application/vnd.stardivision.draw": {
	source: "apache",
	extensions: [
		"sda"
	]
},
	"application/vnd.stardivision.impress": {
	source: "apache",
	extensions: [
		"sdd"
	]
},
	"application/vnd.stardivision.math": {
	source: "apache",
	extensions: [
		"smf"
	]
},
	"application/vnd.stardivision.writer": {
	source: "apache",
	extensions: [
		"sdw",
		"vor"
	]
},
	"application/vnd.stardivision.writer-global": {
	source: "apache",
	extensions: [
		"sgl"
	]
},
	"application/vnd.stepmania.package": {
	source: "iana",
	extensions: [
		"smzip"
	]
},
	"application/vnd.stepmania.stepchart": {
	source: "iana",
	extensions: [
		"sm"
	]
},
	"application/vnd.street-stream": {
	source: "iana"
},
	"application/vnd.sun.wadl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wadl"
	]
},
	"application/vnd.sun.xml.calc": {
	source: "apache",
	extensions: [
		"sxc"
	]
},
	"application/vnd.sun.xml.calc.template": {
	source: "apache",
	extensions: [
		"stc"
	]
},
	"application/vnd.sun.xml.draw": {
	source: "apache",
	extensions: [
		"sxd"
	]
},
	"application/vnd.sun.xml.draw.template": {
	source: "apache",
	extensions: [
		"std"
	]
},
	"application/vnd.sun.xml.impress": {
	source: "apache",
	extensions: [
		"sxi"
	]
},
	"application/vnd.sun.xml.impress.template": {
	source: "apache",
	extensions: [
		"sti"
	]
},
	"application/vnd.sun.xml.math": {
	source: "apache",
	extensions: [
		"sxm"
	]
},
	"application/vnd.sun.xml.writer": {
	source: "apache",
	extensions: [
		"sxw"
	]
},
	"application/vnd.sun.xml.writer.global": {
	source: "apache",
	extensions: [
		"sxg"
	]
},
	"application/vnd.sun.xml.writer.template": {
	source: "apache",
	extensions: [
		"stw"
	]
},
	"application/vnd.sus-calendar": {
	source: "iana",
	extensions: [
		"sus",
		"susp"
	]
},
	"application/vnd.svd": {
	source: "iana",
	extensions: [
		"svd"
	]
},
	"application/vnd.swiftview-ics": {
	source: "iana"
},
	"application/vnd.sycle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.syft+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.symbian.install": {
	source: "apache",
	extensions: [
		"sis",
		"sisx"
	]
},
	"application/vnd.syncml+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xsm"
	]
},
	"application/vnd.syncml.dm+wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"bdm"
	]
},
	"application/vnd.syncml.dm+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xdm"
	]
},
	"application/vnd.syncml.dm.notification": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"ddf"
	]
},
	"application/vnd.syncml.dmtnds+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmtnds+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.syncml.ds.notification": {
	source: "iana"
},
	"application/vnd.tableschema+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tao.intent-module-archive": {
	source: "iana",
	extensions: [
		"tao"
	]
},
	"application/vnd.tcpdump.pcap": {
	source: "iana",
	extensions: [
		"pcap",
		"cap",
		"dmp"
	]
},
	"application/vnd.think-cell.ppttc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tmd.mediaflex.api+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.tml": {
	source: "iana"
},
	"application/vnd.tmobile-livetv": {
	source: "iana",
	extensions: [
		"tmo"
	]
},
	"application/vnd.tri.onesource": {
	source: "iana"
},
	"application/vnd.trid.tpt": {
	source: "iana",
	extensions: [
		"tpt"
	]
},
	"application/vnd.triscape.mxs": {
	source: "iana",
	extensions: [
		"mxs"
	]
},
	"application/vnd.trueapp": {
	source: "iana",
	extensions: [
		"tra"
	]
},
	"application/vnd.truedoc": {
	source: "iana"
},
	"application/vnd.ubisoft.webplayer": {
	source: "iana"
},
	"application/vnd.ufdl": {
	source: "iana",
	extensions: [
		"ufd",
		"ufdl"
	]
},
	"application/vnd.uiq.theme": {
	source: "iana",
	extensions: [
		"utz"
	]
},
	"application/vnd.umajin": {
	source: "iana",
	extensions: [
		"umj"
	]
},
	"application/vnd.unity": {
	source: "iana",
	extensions: [
		"unityweb"
	]
},
	"application/vnd.uoml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uoml"
	]
},
	"application/vnd.uplanet.alert": {
	source: "iana"
},
	"application/vnd.uplanet.alert-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.channel": {
	source: "iana"
},
	"application/vnd.uplanet.channel-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.list": {
	source: "iana"
},
	"application/vnd.uplanet.list-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.signal": {
	source: "iana"
},
	"application/vnd.uri-map": {
	source: "iana"
},
	"application/vnd.valve.source.material": {
	source: "iana"
},
	"application/vnd.vcx": {
	source: "iana",
	extensions: [
		"vcx"
	]
},
	"application/vnd.vd-study": {
	source: "iana"
},
	"application/vnd.vectorworks": {
	source: "iana"
},
	"application/vnd.vel+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.verimatrix.vcas": {
	source: "iana"
},
	"application/vnd.veritone.aion+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.veryant.thin": {
	source: "iana"
},
	"application/vnd.ves.encrypted": {
	source: "iana"
},
	"application/vnd.vidsoft.vidconference": {
	source: "iana"
},
	"application/vnd.visio": {
	source: "iana",
	extensions: [
		"vsd",
		"vst",
		"vss",
		"vsw"
	]
},
	"application/vnd.visionary": {
	source: "iana",
	extensions: [
		"vis"
	]
},
	"application/vnd.vividence.scriptfile": {
	source: "iana"
},
	"application/vnd.vsf": {
	source: "iana",
	extensions: [
		"vsf"
	]
},
	"application/vnd.wap.sic": {
	source: "iana"
},
	"application/vnd.wap.slc": {
	source: "iana"
},
	"application/vnd.wap.wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"wbxml"
	]
},
	"application/vnd.wap.wmlc": {
	source: "iana",
	extensions: [
		"wmlc"
	]
},
	"application/vnd.wap.wmlscriptc": {
	source: "iana",
	extensions: [
		"wmlsc"
	]
},
	"application/vnd.webturbo": {
	source: "iana",
	extensions: [
		"wtb"
	]
},
	"application/vnd.wfa.dpp": {
	source: "iana"
},
	"application/vnd.wfa.p2p": {
	source: "iana"
},
	"application/vnd.wfa.wsc": {
	source: "iana"
},
	"application/vnd.windows.devicepairing": {
	source: "iana"
},
	"application/vnd.wmc": {
	source: "iana"
},
	"application/vnd.wmf.bootstrap": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica.package": {
	source: "iana"
},
	"application/vnd.wolfram.player": {
	source: "iana",
	extensions: [
		"nbp"
	]
},
	"application/vnd.wordperfect": {
	source: "iana",
	extensions: [
		"wpd"
	]
},
	"application/vnd.wqd": {
	source: "iana",
	extensions: [
		"wqd"
	]
},
	"application/vnd.wrq-hp3000-labelled": {
	source: "iana"
},
	"application/vnd.wt.stf": {
	source: "iana",
	extensions: [
		"stf"
	]
},
	"application/vnd.wv.csp+wbxml": {
	source: "iana"
},
	"application/vnd.wv.csp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.wv.ssp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xacml+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.xara": {
	source: "iana",
	extensions: [
		"xar"
	]
},
	"application/vnd.xfdl": {
	source: "iana",
	extensions: [
		"xfdl"
	]
},
	"application/vnd.xfdl.webform": {
	source: "iana"
},
	"application/vnd.xmi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xmpie.cpkg": {
	source: "iana"
},
	"application/vnd.xmpie.dpkg": {
	source: "iana"
},
	"application/vnd.xmpie.plan": {
	source: "iana"
},
	"application/vnd.xmpie.ppkg": {
	source: "iana"
},
	"application/vnd.xmpie.xlim": {
	source: "iana"
},
	"application/vnd.yamaha.hv-dic": {
	source: "iana",
	extensions: [
		"hvd"
	]
},
	"application/vnd.yamaha.hv-script": {
	source: "iana",
	extensions: [
		"hvs"
	]
},
	"application/vnd.yamaha.hv-voice": {
	source: "iana",
	extensions: [
		"hvp"
	]
},
	"application/vnd.yamaha.openscoreformat": {
	source: "iana",
	extensions: [
		"osf"
	]
},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osfpvg"
	]
},
	"application/vnd.yamaha.remote-setup": {
	source: "iana"
},
	"application/vnd.yamaha.smaf-audio": {
	source: "iana",
	extensions: [
		"saf"
	]
},
	"application/vnd.yamaha.smaf-phrase": {
	source: "iana",
	extensions: [
		"spf"
	]
},
	"application/vnd.yamaha.through-ngn": {
	source: "iana"
},
	"application/vnd.yamaha.tunnel-udpencap": {
	source: "iana"
},
	"application/vnd.yaoweme": {
	source: "iana"
},
	"application/vnd.yellowriver-custom-menu": {
	source: "iana",
	extensions: [
		"cmp"
	]
},
	"application/vnd.youtube.yt": {
	source: "iana"
},
	"application/vnd.zul": {
	source: "iana",
	extensions: [
		"zir",
		"zirz"
	]
},
	"application/vnd.zzazz.deck+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zaz"
	]
},
	"application/voicexml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"vxml"
	]
},
	"application/voucher-cms+json": {
	source: "iana",
	compressible: true
},
	"application/vq-rtcpxr": {
	source: "iana"
},
	"application/wasm": {
	source: "iana",
	compressible: true,
	extensions: [
		"wasm"
	]
},
	"application/watcherinfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wif"
	]
},
	"application/webpush-options+json": {
	source: "iana",
	compressible: true
},
	"application/whoispp-query": {
	source: "iana"
},
	"application/whoispp-response": {
	source: "iana"
},
	"application/widget": {
	source: "iana",
	extensions: [
		"wgt"
	]
},
	"application/winhlp": {
	source: "apache",
	extensions: [
		"hlp"
	]
},
	"application/wita": {
	source: "iana"
},
	"application/wordperfect5.1": {
	source: "iana"
},
	"application/wsdl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wsdl"
	]
},
	"application/wspolicy+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wspolicy"
	]
},
	"application/x-7z-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"7z"
	]
},
	"application/x-abiword": {
	source: "apache",
	extensions: [
		"abw"
	]
},
	"application/x-ace-compressed": {
	source: "apache",
	extensions: [
		"ace"
	]
},
	"application/x-amf": {
	source: "apache"
},
	"application/x-apple-diskimage": {
	source: "apache",
	extensions: [
		"dmg"
	]
},
	"application/x-arj": {
	compressible: false,
	extensions: [
		"arj"
	]
},
	"application/x-authorware-bin": {
	source: "apache",
	extensions: [
		"aab",
		"x32",
		"u32",
		"vox"
	]
},
	"application/x-authorware-map": {
	source: "apache",
	extensions: [
		"aam"
	]
},
	"application/x-authorware-seg": {
	source: "apache",
	extensions: [
		"aas"
	]
},
	"application/x-bcpio": {
	source: "apache",
	extensions: [
		"bcpio"
	]
},
	"application/x-bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/x-bittorrent": {
	source: "apache",
	extensions: [
		"torrent"
	]
},
	"application/x-blorb": {
	source: "apache",
	extensions: [
		"blb",
		"blorb"
	]
},
	"application/x-bzip": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz"
	]
},
	"application/x-bzip2": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz2",
		"boz"
	]
},
	"application/x-cbr": {
	source: "apache",
	extensions: [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	]
},
	"application/x-cdlink": {
	source: "apache",
	extensions: [
		"vcd"
	]
},
	"application/x-cfs-compressed": {
	source: "apache",
	extensions: [
		"cfs"
	]
},
	"application/x-chat": {
	source: "apache",
	extensions: [
		"chat"
	]
},
	"application/x-chess-pgn": {
	source: "apache",
	extensions: [
		"pgn"
	]
},
	"application/x-chrome-extension": {
	extensions: [
		"crx"
	]
},
	"application/x-cocoa": {
	source: "nginx",
	extensions: [
		"cco"
	]
},
	"application/x-compress": {
	source: "apache"
},
	"application/x-conference": {
	source: "apache",
	extensions: [
		"nsc"
	]
},
	"application/x-cpio": {
	source: "apache",
	extensions: [
		"cpio"
	]
},
	"application/x-csh": {
	source: "apache",
	extensions: [
		"csh"
	]
},
	"application/x-deb": {
	compressible: false
},
	"application/x-debian-package": {
	source: "apache",
	extensions: [
		"deb",
		"udeb"
	]
},
	"application/x-dgc-compressed": {
	source: "apache",
	extensions: [
		"dgc"
	]
},
	"application/x-director": {
	source: "apache",
	extensions: [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	]
},
	"application/x-doom": {
	source: "apache",
	extensions: [
		"wad"
	]
},
	"application/x-dtbncx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ncx"
	]
},
	"application/x-dtbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dtb"
	]
},
	"application/x-dtbresource+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"res"
	]
},
	"application/x-dvi": {
	source: "apache",
	compressible: false,
	extensions: [
		"dvi"
	]
},
	"application/x-envoy": {
	source: "apache",
	extensions: [
		"evy"
	]
},
	"application/x-eva": {
	source: "apache",
	extensions: [
		"eva"
	]
},
	"application/x-font-bdf": {
	source: "apache",
	extensions: [
		"bdf"
	]
},
	"application/x-font-dos": {
	source: "apache"
},
	"application/x-font-framemaker": {
	source: "apache"
},
	"application/x-font-ghostscript": {
	source: "apache",
	extensions: [
		"gsf"
	]
},
	"application/x-font-libgrx": {
	source: "apache"
},
	"application/x-font-linux-psf": {
	source: "apache",
	extensions: [
		"psf"
	]
},
	"application/x-font-pcf": {
	source: "apache",
	extensions: [
		"pcf"
	]
},
	"application/x-font-snf": {
	source: "apache",
	extensions: [
		"snf"
	]
},
	"application/x-font-speedo": {
	source: "apache"
},
	"application/x-font-sunos-news": {
	source: "apache"
},
	"application/x-font-type1": {
	source: "apache",
	extensions: [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	]
},
	"application/x-font-vfont": {
	source: "apache"
},
	"application/x-freearc": {
	source: "apache",
	extensions: [
		"arc"
	]
},
	"application/x-futuresplash": {
	source: "apache",
	extensions: [
		"spl"
	]
},
	"application/x-gca-compressed": {
	source: "apache",
	extensions: [
		"gca"
	]
},
	"application/x-glulx": {
	source: "apache",
	extensions: [
		"ulx"
	]
},
	"application/x-gnumeric": {
	source: "apache",
	extensions: [
		"gnumeric"
	]
},
	"application/x-gramps-xml": {
	source: "apache",
	extensions: [
		"gramps"
	]
},
	"application/x-gtar": {
	source: "apache",
	extensions: [
		"gtar"
	]
},
	"application/x-gzip": {
	source: "apache"
},
	"application/x-hdf": {
	source: "apache",
	extensions: [
		"hdf"
	]
},
	"application/x-httpd-php": {
	compressible: true,
	extensions: [
		"php"
	]
},
	"application/x-install-instructions": {
	source: "apache",
	extensions: [
		"install"
	]
},
	"application/x-iso9660-image": {
	source: "apache",
	extensions: [
		"iso"
	]
},
	"application/x-iwork-keynote-sffkey": {
	extensions: [
		"key"
	]
},
	"application/x-iwork-numbers-sffnumbers": {
	extensions: [
		"numbers"
	]
},
	"application/x-iwork-pages-sffpages": {
	extensions: [
		"pages"
	]
},
	"application/x-java-archive-diff": {
	source: "nginx",
	extensions: [
		"jardiff"
	]
},
	"application/x-java-jnlp-file": {
	source: "apache",
	compressible: false,
	extensions: [
		"jnlp"
	]
},
	"application/x-javascript": {
	compressible: true
},
	"application/x-keepass2": {
	extensions: [
		"kdbx"
	]
},
	"application/x-latex": {
	source: "apache",
	compressible: false,
	extensions: [
		"latex"
	]
},
	"application/x-lua-bytecode": {
	extensions: [
		"luac"
	]
},
	"application/x-lzh-compressed": {
	source: "apache",
	extensions: [
		"lzh",
		"lha"
	]
},
	"application/x-makeself": {
	source: "nginx",
	extensions: [
		"run"
	]
},
	"application/x-mie": {
	source: "apache",
	extensions: [
		"mie"
	]
},
	"application/x-mobipocket-ebook": {
	source: "apache",
	extensions: [
		"prc",
		"mobi"
	]
},
	"application/x-mpegurl": {
	compressible: false
},
	"application/x-ms-application": {
	source: "apache",
	extensions: [
		"application"
	]
},
	"application/x-ms-shortcut": {
	source: "apache",
	extensions: [
		"lnk"
	]
},
	"application/x-ms-wmd": {
	source: "apache",
	extensions: [
		"wmd"
	]
},
	"application/x-ms-wmz": {
	source: "apache",
	extensions: [
		"wmz"
	]
},
	"application/x-ms-xbap": {
	source: "apache",
	extensions: [
		"xbap"
	]
},
	"application/x-msaccess": {
	source: "apache",
	extensions: [
		"mdb"
	]
},
	"application/x-msbinder": {
	source: "apache",
	extensions: [
		"obd"
	]
},
	"application/x-mscardfile": {
	source: "apache",
	extensions: [
		"crd"
	]
},
	"application/x-msclip": {
	source: "apache",
	extensions: [
		"clp"
	]
},
	"application/x-msdos-program": {
	extensions: [
		"exe"
	]
},
	"application/x-msdownload": {
	source: "apache",
	extensions: [
		"exe",
		"dll",
		"com",
		"bat",
		"msi"
	]
},
	"application/x-msmediaview": {
	source: "apache",
	extensions: [
		"mvb",
		"m13",
		"m14"
	]
},
	"application/x-msmetafile": {
	source: "apache",
	extensions: [
		"wmf",
		"wmz",
		"emf",
		"emz"
	]
},
	"application/x-msmoney": {
	source: "apache",
	extensions: [
		"mny"
	]
},
	"application/x-mspublisher": {
	source: "apache",
	extensions: [
		"pub"
	]
},
	"application/x-msschedule": {
	source: "apache",
	extensions: [
		"scd"
	]
},
	"application/x-msterminal": {
	source: "apache",
	extensions: [
		"trm"
	]
},
	"application/x-mswrite": {
	source: "apache",
	extensions: [
		"wri"
	]
},
	"application/x-netcdf": {
	source: "apache",
	extensions: [
		"nc",
		"cdf"
	]
},
	"application/x-ns-proxy-autoconfig": {
	compressible: true,
	extensions: [
		"pac"
	]
},
	"application/x-nzb": {
	source: "apache",
	extensions: [
		"nzb"
	]
},
	"application/x-perl": {
	source: "nginx",
	extensions: [
		"pl",
		"pm"
	]
},
	"application/x-pilot": {
	source: "nginx",
	extensions: [
		"prc",
		"pdb"
	]
},
	"application/x-pkcs12": {
	source: "apache",
	compressible: false,
	extensions: [
		"p12",
		"pfx"
	]
},
	"application/x-pkcs7-certificates": {
	source: "apache",
	extensions: [
		"p7b",
		"spc"
	]
},
	"application/x-pkcs7-certreqresp": {
	source: "apache",
	extensions: [
		"p7r"
	]
},
	"application/x-pki-message": {
	source: "iana"
},
	"application/x-rar-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"rar"
	]
},
	"application/x-redhat-package-manager": {
	source: "nginx",
	extensions: [
		"rpm"
	]
},
	"application/x-research-info-systems": {
	source: "apache",
	extensions: [
		"ris"
	]
},
	"application/x-sea": {
	source: "nginx",
	extensions: [
		"sea"
	]
},
	"application/x-sh": {
	source: "apache",
	compressible: true,
	extensions: [
		"sh"
	]
},
	"application/x-shar": {
	source: "apache",
	extensions: [
		"shar"
	]
},
	"application/x-shockwave-flash": {
	source: "apache",
	compressible: false,
	extensions: [
		"swf"
	]
},
	"application/x-silverlight-app": {
	source: "apache",
	extensions: [
		"xap"
	]
},
	"application/x-sql": {
	source: "apache",
	extensions: [
		"sql"
	]
},
	"application/x-stuffit": {
	source: "apache",
	compressible: false,
	extensions: [
		"sit"
	]
},
	"application/x-stuffitx": {
	source: "apache",
	extensions: [
		"sitx"
	]
},
	"application/x-subrip": {
	source: "apache",
	extensions: [
		"srt"
	]
},
	"application/x-sv4cpio": {
	source: "apache",
	extensions: [
		"sv4cpio"
	]
},
	"application/x-sv4crc": {
	source: "apache",
	extensions: [
		"sv4crc"
	]
},
	"application/x-t3vm-image": {
	source: "apache",
	extensions: [
		"t3"
	]
},
	"application/x-tads": {
	source: "apache",
	extensions: [
		"gam"
	]
},
	"application/x-tar": {
	source: "apache",
	compressible: true,
	extensions: [
		"tar"
	]
},
	"application/x-tcl": {
	source: "apache",
	extensions: [
		"tcl",
		"tk"
	]
},
	"application/x-tex": {
	source: "apache",
	extensions: [
		"tex"
	]
},
	"application/x-tex-tfm": {
	source: "apache",
	extensions: [
		"tfm"
	]
},
	"application/x-texinfo": {
	source: "apache",
	extensions: [
		"texinfo",
		"texi"
	]
},
	"application/x-tgif": {
	source: "apache",
	extensions: [
		"obj"
	]
},
	"application/x-ustar": {
	source: "apache",
	extensions: [
		"ustar"
	]
},
	"application/x-virtualbox-hdd": {
	compressible: true,
	extensions: [
		"hdd"
	]
},
	"application/x-virtualbox-ova": {
	compressible: true,
	extensions: [
		"ova"
	]
},
	"application/x-virtualbox-ovf": {
	compressible: true,
	extensions: [
		"ovf"
	]
},
	"application/x-virtualbox-vbox": {
	compressible: true,
	extensions: [
		"vbox"
	]
},
	"application/x-virtualbox-vbox-extpack": {
	compressible: false,
	extensions: [
		"vbox-extpack"
	]
},
	"application/x-virtualbox-vdi": {
	compressible: true,
	extensions: [
		"vdi"
	]
},
	"application/x-virtualbox-vhd": {
	compressible: true,
	extensions: [
		"vhd"
	]
},
	"application/x-virtualbox-vmdk": {
	compressible: true,
	extensions: [
		"vmdk"
	]
},
	"application/x-wais-source": {
	source: "apache",
	extensions: [
		"src"
	]
},
	"application/x-web-app-manifest+json": {
	compressible: true,
	extensions: [
		"webapp"
	]
},
	"application/x-www-form-urlencoded": {
	source: "iana",
	compressible: true
},
	"application/x-x509-ca-cert": {
	source: "iana",
	extensions: [
		"der",
		"crt",
		"pem"
	]
},
	"application/x-x509-ca-ra-cert": {
	source: "iana"
},
	"application/x-x509-next-ca-cert": {
	source: "iana"
},
	"application/x-xfig": {
	source: "apache",
	extensions: [
		"fig"
	]
},
	"application/x-xliff+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/x-xpinstall": {
	source: "apache",
	compressible: false,
	extensions: [
		"xpi"
	]
},
	"application/x-xz": {
	source: "apache",
	extensions: [
		"xz"
	]
},
	"application/x-zmachine": {
	source: "apache",
	extensions: [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	]
},
	"application/x400-bp": {
	source: "iana"
},
	"application/xacml+xml": {
	source: "iana",
	compressible: true
},
	"application/xaml+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xaml"
	]
},
	"application/xcap-att+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xav"
	]
},
	"application/xcap-caps+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xca"
	]
},
	"application/xcap-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/xcap-el+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xel"
	]
},
	"application/xcap-error+xml": {
	source: "iana",
	compressible: true
},
	"application/xcap-ns+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xns"
	]
},
	"application/xcon-conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/xcon-conference-info-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/xenc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xenc"
	]
},
	"application/xhtml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtml",
		"xht"
	]
},
	"application/xhtml-voice+xml": {
	source: "apache",
	compressible: true
},
	"application/xliff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml",
		"xsl",
		"xsd",
		"rng"
	]
},
	"application/xml-dtd": {
	source: "iana",
	compressible: true,
	extensions: [
		"dtd"
	]
},
	"application/xml-external-parsed-entity": {
	source: "iana"
},
	"application/xml-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/xmpp+xml": {
	source: "iana",
	compressible: true
},
	"application/xop+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xop"
	]
},
	"application/xproc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xpl"
	]
},
	"application/xslt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsl",
		"xslt"
	]
},
	"application/xspf+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xspf"
	]
},
	"application/xv+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	]
},
	"application/yang": {
	source: "iana",
	extensions: [
		"yang"
	]
},
	"application/yang-data+json": {
	source: "iana",
	compressible: true
},
	"application/yang-data+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+json": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/yin+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"yin"
	]
},
	"application/zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"zip"
	]
},
	"application/zlib": {
	source: "iana"
},
	"application/zstd": {
	source: "iana"
},
	"audio/1d-interleaved-parityfec": {
	source: "iana"
},
	"audio/32kadpcm": {
	source: "iana"
},
	"audio/3gpp": {
	source: "iana",
	compressible: false,
	extensions: [
		"3gpp"
	]
},
	"audio/3gpp2": {
	source: "iana"
},
	"audio/aac": {
	source: "iana"
},
	"audio/ac3": {
	source: "iana"
},
	"audio/adpcm": {
	source: "apache",
	extensions: [
		"adp"
	]
},
	"audio/amr": {
	source: "iana",
	extensions: [
		"amr"
	]
},
	"audio/amr-wb": {
	source: "iana"
},
	"audio/amr-wb+": {
	source: "iana"
},
	"audio/aptx": {
	source: "iana"
},
	"audio/asc": {
	source: "iana"
},
	"audio/atrac-advanced-lossless": {
	source: "iana"
},
	"audio/atrac-x": {
	source: "iana"
},
	"audio/atrac3": {
	source: "iana"
},
	"audio/basic": {
	source: "iana",
	compressible: false,
	extensions: [
		"au",
		"snd"
	]
},
	"audio/bv16": {
	source: "iana"
},
	"audio/bv32": {
	source: "iana"
},
	"audio/clearmode": {
	source: "iana"
},
	"audio/cn": {
	source: "iana"
},
	"audio/dat12": {
	source: "iana"
},
	"audio/dls": {
	source: "iana"
},
	"audio/dsr-es201108": {
	source: "iana"
},
	"audio/dsr-es202050": {
	source: "iana"
},
	"audio/dsr-es202211": {
	source: "iana"
},
	"audio/dsr-es202212": {
	source: "iana"
},
	"audio/dv": {
	source: "iana"
},
	"audio/dvi4": {
	source: "iana"
},
	"audio/eac3": {
	source: "iana"
},
	"audio/encaprtp": {
	source: "iana"
},
	"audio/evrc": {
	source: "iana"
},
	"audio/evrc-qcp": {
	source: "iana"
},
	"audio/evrc0": {
	source: "iana"
},
	"audio/evrc1": {
	source: "iana"
},
	"audio/evrcb": {
	source: "iana"
},
	"audio/evrcb0": {
	source: "iana"
},
	"audio/evrcb1": {
	source: "iana"
},
	"audio/evrcnw": {
	source: "iana"
},
	"audio/evrcnw0": {
	source: "iana"
},
	"audio/evrcnw1": {
	source: "iana"
},
	"audio/evrcwb": {
	source: "iana"
},
	"audio/evrcwb0": {
	source: "iana"
},
	"audio/evrcwb1": {
	source: "iana"
},
	"audio/evs": {
	source: "iana"
},
	"audio/flexfec": {
	source: "iana"
},
	"audio/fwdred": {
	source: "iana"
},
	"audio/g711-0": {
	source: "iana"
},
	"audio/g719": {
	source: "iana"
},
	"audio/g722": {
	source: "iana"
},
	"audio/g7221": {
	source: "iana"
},
	"audio/g723": {
	source: "iana"
},
	"audio/g726-16": {
	source: "iana"
},
	"audio/g726-24": {
	source: "iana"
},
	"audio/g726-32": {
	source: "iana"
},
	"audio/g726-40": {
	source: "iana"
},
	"audio/g728": {
	source: "iana"
},
	"audio/g729": {
	source: "iana"
},
	"audio/g7291": {
	source: "iana"
},
	"audio/g729d": {
	source: "iana"
},
	"audio/g729e": {
	source: "iana"
},
	"audio/gsm": {
	source: "iana"
},
	"audio/gsm-efr": {
	source: "iana"
},
	"audio/gsm-hr-08": {
	source: "iana"
},
	"audio/ilbc": {
	source: "iana"
},
	"audio/ip-mr_v2.5": {
	source: "iana"
},
	"audio/isac": {
	source: "apache"
},
	"audio/l16": {
	source: "iana"
},
	"audio/l20": {
	source: "iana"
},
	"audio/l24": {
	source: "iana",
	compressible: false
},
	"audio/l8": {
	source: "iana"
},
	"audio/lpc": {
	source: "iana"
},
	"audio/melp": {
	source: "iana"
},
	"audio/melp1200": {
	source: "iana"
},
	"audio/melp2400": {
	source: "iana"
},
	"audio/melp600": {
	source: "iana"
},
	"audio/mhas": {
	source: "iana"
},
	"audio/midi": {
	source: "apache",
	extensions: [
		"mid",
		"midi",
		"kar",
		"rmi"
	]
},
	"audio/mobile-xmf": {
	source: "iana",
	extensions: [
		"mxmf"
	]
},
	"audio/mp3": {
	compressible: false,
	extensions: [
		"mp3"
	]
},
	"audio/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"m4a",
		"mp4a"
	]
},
	"audio/mp4a-latm": {
	source: "iana"
},
	"audio/mpa": {
	source: "iana"
},
	"audio/mpa-robust": {
	source: "iana"
},
	"audio/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	]
},
	"audio/mpeg4-generic": {
	source: "iana"
},
	"audio/musepack": {
	source: "apache"
},
	"audio/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"oga",
		"ogg",
		"spx",
		"opus"
	]
},
	"audio/opus": {
	source: "iana"
},
	"audio/parityfec": {
	source: "iana"
},
	"audio/pcma": {
	source: "iana"
},
	"audio/pcma-wb": {
	source: "iana"
},
	"audio/pcmu": {
	source: "iana"
},
	"audio/pcmu-wb": {
	source: "iana"
},
	"audio/prs.sid": {
	source: "iana"
},
	"audio/qcelp": {
	source: "iana"
},
	"audio/raptorfec": {
	source: "iana"
},
	"audio/red": {
	source: "iana"
},
	"audio/rtp-enc-aescm128": {
	source: "iana"
},
	"audio/rtp-midi": {
	source: "iana"
},
	"audio/rtploopback": {
	source: "iana"
},
	"audio/rtx": {
	source: "iana"
},
	"audio/s3m": {
	source: "apache",
	extensions: [
		"s3m"
	]
},
	"audio/scip": {
	source: "iana"
},
	"audio/silk": {
	source: "apache",
	extensions: [
		"sil"
	]
},
	"audio/smv": {
	source: "iana"
},
	"audio/smv-qcp": {
	source: "iana"
},
	"audio/smv0": {
	source: "iana"
},
	"audio/sofa": {
	source: "iana"
},
	"audio/sp-midi": {
	source: "iana"
},
	"audio/speex": {
	source: "iana"
},
	"audio/t140c": {
	source: "iana"
},
	"audio/t38": {
	source: "iana"
},
	"audio/telephone-event": {
	source: "iana"
},
	"audio/tetra_acelp": {
	source: "iana"
},
	"audio/tetra_acelp_bb": {
	source: "iana"
},
	"audio/tone": {
	source: "iana"
},
	"audio/tsvcis": {
	source: "iana"
},
	"audio/uemclip": {
	source: "iana"
},
	"audio/ulpfec": {
	source: "iana"
},
	"audio/usac": {
	source: "iana"
},
	"audio/vdvi": {
	source: "iana"
},
	"audio/vmr-wb": {
	source: "iana"
},
	"audio/vnd.3gpp.iufp": {
	source: "iana"
},
	"audio/vnd.4sb": {
	source: "iana"
},
	"audio/vnd.audiokoz": {
	source: "iana"
},
	"audio/vnd.celp": {
	source: "iana"
},
	"audio/vnd.cisco.nse": {
	source: "iana"
},
	"audio/vnd.cmles.radio-events": {
	source: "iana"
},
	"audio/vnd.cns.anp1": {
	source: "iana"
},
	"audio/vnd.cns.inf1": {
	source: "iana"
},
	"audio/vnd.dece.audio": {
	source: "iana",
	extensions: [
		"uva",
		"uvva"
	]
},
	"audio/vnd.digital-winds": {
	source: "iana",
	extensions: [
		"eol"
	]
},
	"audio/vnd.dlna.adts": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.1": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.2": {
	source: "iana"
},
	"audio/vnd.dolby.mlp": {
	source: "iana"
},
	"audio/vnd.dolby.mps": {
	source: "iana"
},
	"audio/vnd.dolby.pl2": {
	source: "iana"
},
	"audio/vnd.dolby.pl2x": {
	source: "iana"
},
	"audio/vnd.dolby.pl2z": {
	source: "iana"
},
	"audio/vnd.dolby.pulse.1": {
	source: "iana"
},
	"audio/vnd.dra": {
	source: "iana",
	extensions: [
		"dra"
	]
},
	"audio/vnd.dts": {
	source: "iana",
	extensions: [
		"dts"
	]
},
	"audio/vnd.dts.hd": {
	source: "iana",
	extensions: [
		"dtshd"
	]
},
	"audio/vnd.dts.uhd": {
	source: "iana"
},
	"audio/vnd.dvb.file": {
	source: "iana"
},
	"audio/vnd.everad.plj": {
	source: "iana"
},
	"audio/vnd.hns.audio": {
	source: "iana"
},
	"audio/vnd.lucent.voice": {
	source: "iana",
	extensions: [
		"lvp"
	]
},
	"audio/vnd.ms-playready.media.pya": {
	source: "iana",
	extensions: [
		"pya"
	]
},
	"audio/vnd.nokia.mobile-xmf": {
	source: "iana"
},
	"audio/vnd.nortel.vbk": {
	source: "iana"
},
	"audio/vnd.nuera.ecelp4800": {
	source: "iana",
	extensions: [
		"ecelp4800"
	]
},
	"audio/vnd.nuera.ecelp7470": {
	source: "iana",
	extensions: [
		"ecelp7470"
	]
},
	"audio/vnd.nuera.ecelp9600": {
	source: "iana",
	extensions: [
		"ecelp9600"
	]
},
	"audio/vnd.octel.sbc": {
	source: "iana"
},
	"audio/vnd.presonus.multitrack": {
	source: "iana"
},
	"audio/vnd.qcelp": {
	source: "iana"
},
	"audio/vnd.rhetorex.32kadpcm": {
	source: "iana"
},
	"audio/vnd.rip": {
	source: "iana",
	extensions: [
		"rip"
	]
},
	"audio/vnd.rn-realaudio": {
	compressible: false
},
	"audio/vnd.sealedmedia.softseal.mpeg": {
	source: "iana"
},
	"audio/vnd.vmx.cvsd": {
	source: "iana"
},
	"audio/vnd.wave": {
	compressible: false
},
	"audio/vorbis": {
	source: "iana",
	compressible: false
},
	"audio/vorbis-config": {
	source: "iana"
},
	"audio/wav": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/wave": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"weba"
	]
},
	"audio/x-aac": {
	source: "apache",
	compressible: false,
	extensions: [
		"aac"
	]
},
	"audio/x-aiff": {
	source: "apache",
	extensions: [
		"aif",
		"aiff",
		"aifc"
	]
},
	"audio/x-caf": {
	source: "apache",
	compressible: false,
	extensions: [
		"caf"
	]
},
	"audio/x-flac": {
	source: "apache",
	extensions: [
		"flac"
	]
},
	"audio/x-m4a": {
	source: "nginx",
	extensions: [
		"m4a"
	]
},
	"audio/x-matroska": {
	source: "apache",
	extensions: [
		"mka"
	]
},
	"audio/x-mpegurl": {
	source: "apache",
	extensions: [
		"m3u"
	]
},
	"audio/x-ms-wax": {
	source: "apache",
	extensions: [
		"wax"
	]
},
	"audio/x-ms-wma": {
	source: "apache",
	extensions: [
		"wma"
	]
},
	"audio/x-pn-realaudio": {
	source: "apache",
	extensions: [
		"ram",
		"ra"
	]
},
	"audio/x-pn-realaudio-plugin": {
	source: "apache",
	extensions: [
		"rmp"
	]
},
	"audio/x-realaudio": {
	source: "nginx",
	extensions: [
		"ra"
	]
},
	"audio/x-tta": {
	source: "apache"
},
	"audio/x-wav": {
	source: "apache",
	extensions: [
		"wav"
	]
},
	"audio/xm": {
	source: "apache",
	extensions: [
		"xm"
	]
},
	"chemical/x-cdx": {
	source: "apache",
	extensions: [
		"cdx"
	]
},
	"chemical/x-cif": {
	source: "apache",
	extensions: [
		"cif"
	]
},
	"chemical/x-cmdf": {
	source: "apache",
	extensions: [
		"cmdf"
	]
},
	"chemical/x-cml": {
	source: "apache",
	extensions: [
		"cml"
	]
},
	"chemical/x-csml": {
	source: "apache",
	extensions: [
		"csml"
	]
},
	"chemical/x-pdb": {
	source: "apache"
},
	"chemical/x-xyz": {
	source: "apache",
	extensions: [
		"xyz"
	]
},
	"font/collection": {
	source: "iana",
	extensions: [
		"ttc"
	]
},
	"font/otf": {
	source: "iana",
	compressible: true,
	extensions: [
		"otf"
	]
},
	"font/sfnt": {
	source: "iana"
},
	"font/ttf": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttf"
	]
},
	"font/woff": {
	source: "iana",
	extensions: [
		"woff"
	]
},
	"font/woff2": {
	source: "iana",
	extensions: [
		"woff2"
	]
},
	"image/aces": {
	source: "iana",
	extensions: [
		"exr"
	]
},
	"image/apng": {
	compressible: false,
	extensions: [
		"apng"
	]
},
	"image/avci": {
	source: "iana",
	extensions: [
		"avci"
	]
},
	"image/avcs": {
	source: "iana",
	extensions: [
		"avcs"
	]
},
	"image/avif": {
	source: "iana",
	compressible: false,
	extensions: [
		"avif"
	]
},
	"image/bmp": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/cgm": {
	source: "iana",
	extensions: [
		"cgm"
	]
},
	"image/dicom-rle": {
	source: "iana",
	extensions: [
		"drle"
	]
},
	"image/emf": {
	source: "iana",
	extensions: [
		"emf"
	]
},
	"image/fits": {
	source: "iana",
	extensions: [
		"fits"
	]
},
	"image/g3fax": {
	source: "iana",
	extensions: [
		"g3"
	]
},
	"image/gif": {
	source: "iana",
	compressible: false,
	extensions: [
		"gif"
	]
},
	"image/heic": {
	source: "iana",
	extensions: [
		"heic"
	]
},
	"image/heic-sequence": {
	source: "iana",
	extensions: [
		"heics"
	]
},
	"image/heif": {
	source: "iana",
	extensions: [
		"heif"
	]
},
	"image/heif-sequence": {
	source: "iana",
	extensions: [
		"heifs"
	]
},
	"image/hej2k": {
	source: "iana",
	extensions: [
		"hej2"
	]
},
	"image/hsj2": {
	source: "iana",
	extensions: [
		"hsj2"
	]
},
	"image/ief": {
	source: "iana",
	extensions: [
		"ief"
	]
},
	"image/jls": {
	source: "iana",
	extensions: [
		"jls"
	]
},
	"image/jp2": {
	source: "iana",
	compressible: false,
	extensions: [
		"jp2",
		"jpg2"
	]
},
	"image/jpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpeg",
		"jpg",
		"jpe"
	]
},
	"image/jph": {
	source: "iana",
	extensions: [
		"jph"
	]
},
	"image/jphc": {
	source: "iana",
	extensions: [
		"jhc"
	]
},
	"image/jpm": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpm"
	]
},
	"image/jpx": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpx",
		"jpf"
	]
},
	"image/jxr": {
	source: "iana",
	extensions: [
		"jxr"
	]
},
	"image/jxra": {
	source: "iana",
	extensions: [
		"jxra"
	]
},
	"image/jxrs": {
	source: "iana",
	extensions: [
		"jxrs"
	]
},
	"image/jxs": {
	source: "iana",
	extensions: [
		"jxs"
	]
},
	"image/jxsc": {
	source: "iana",
	extensions: [
		"jxsc"
	]
},
	"image/jxsi": {
	source: "iana",
	extensions: [
		"jxsi"
	]
},
	"image/jxss": {
	source: "iana",
	extensions: [
		"jxss"
	]
},
	"image/ktx": {
	source: "iana",
	extensions: [
		"ktx"
	]
},
	"image/ktx2": {
	source: "iana",
	extensions: [
		"ktx2"
	]
},
	"image/naplps": {
	source: "iana"
},
	"image/pjpeg": {
	compressible: false
},
	"image/png": {
	source: "iana",
	compressible: false,
	extensions: [
		"png"
	]
},
	"image/prs.btif": {
	source: "iana",
	extensions: [
		"btif"
	]
},
	"image/prs.pti": {
	source: "iana",
	extensions: [
		"pti"
	]
},
	"image/pwg-raster": {
	source: "iana"
},
	"image/sgi": {
	source: "apache",
	extensions: [
		"sgi"
	]
},
	"image/svg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"svg",
		"svgz"
	]
},
	"image/t38": {
	source: "iana",
	extensions: [
		"t38"
	]
},
	"image/tiff": {
	source: "iana",
	compressible: false,
	extensions: [
		"tif",
		"tiff"
	]
},
	"image/tiff-fx": {
	source: "iana",
	extensions: [
		"tfx"
	]
},
	"image/vnd.adobe.photoshop": {
	source: "iana",
	compressible: true,
	extensions: [
		"psd"
	]
},
	"image/vnd.airzip.accelerator.azv": {
	source: "iana",
	extensions: [
		"azv"
	]
},
	"image/vnd.cns.inf2": {
	source: "iana"
},
	"image/vnd.dece.graphic": {
	source: "iana",
	extensions: [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	]
},
	"image/vnd.djvu": {
	source: "iana",
	extensions: [
		"djvu",
		"djv"
	]
},
	"image/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"image/vnd.dwg": {
	source: "iana",
	extensions: [
		"dwg"
	]
},
	"image/vnd.dxf": {
	source: "iana",
	extensions: [
		"dxf"
	]
},
	"image/vnd.fastbidsheet": {
	source: "iana",
	extensions: [
		"fbs"
	]
},
	"image/vnd.fpx": {
	source: "iana",
	extensions: [
		"fpx"
	]
},
	"image/vnd.fst": {
	source: "iana",
	extensions: [
		"fst"
	]
},
	"image/vnd.fujixerox.edmics-mmr": {
	source: "iana",
	extensions: [
		"mmr"
	]
},
	"image/vnd.fujixerox.edmics-rlc": {
	source: "iana",
	extensions: [
		"rlc"
	]
},
	"image/vnd.globalgraphics.pgb": {
	source: "iana"
},
	"image/vnd.microsoft.icon": {
	source: "iana",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/vnd.mix": {
	source: "iana"
},
	"image/vnd.mozilla.apng": {
	source: "iana"
},
	"image/vnd.ms-dds": {
	compressible: true,
	extensions: [
		"dds"
	]
},
	"image/vnd.ms-modi": {
	source: "iana",
	extensions: [
		"mdi"
	]
},
	"image/vnd.ms-photo": {
	source: "apache",
	extensions: [
		"wdp"
	]
},
	"image/vnd.net-fpx": {
	source: "iana",
	extensions: [
		"npx"
	]
},
	"image/vnd.pco.b16": {
	source: "iana",
	extensions: [
		"b16"
	]
},
	"image/vnd.radiance": {
	source: "iana"
},
	"image/vnd.sealed.png": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.gif": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.jpg": {
	source: "iana"
},
	"image/vnd.svf": {
	source: "iana"
},
	"image/vnd.tencent.tap": {
	source: "iana",
	extensions: [
		"tap"
	]
},
	"image/vnd.valve.source.texture": {
	source: "iana",
	extensions: [
		"vtf"
	]
},
	"image/vnd.wap.wbmp": {
	source: "iana",
	extensions: [
		"wbmp"
	]
},
	"image/vnd.xiff": {
	source: "iana",
	extensions: [
		"xif"
	]
},
	"image/vnd.zbrush.pcx": {
	source: "iana",
	extensions: [
		"pcx"
	]
},
	"image/webp": {
	source: "apache",
	extensions: [
		"webp"
	]
},
	"image/wmf": {
	source: "iana",
	extensions: [
		"wmf"
	]
},
	"image/x-3ds": {
	source: "apache",
	extensions: [
		"3ds"
	]
},
	"image/x-cmu-raster": {
	source: "apache",
	extensions: [
		"ras"
	]
},
	"image/x-cmx": {
	source: "apache",
	extensions: [
		"cmx"
	]
},
	"image/x-freehand": {
	source: "apache",
	extensions: [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	]
},
	"image/x-icon": {
	source: "apache",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/x-jng": {
	source: "nginx",
	extensions: [
		"jng"
	]
},
	"image/x-mrsid-image": {
	source: "apache",
	extensions: [
		"sid"
	]
},
	"image/x-ms-bmp": {
	source: "nginx",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/x-pcx": {
	source: "apache",
	extensions: [
		"pcx"
	]
},
	"image/x-pict": {
	source: "apache",
	extensions: [
		"pic",
		"pct"
	]
},
	"image/x-portable-anymap": {
	source: "apache",
	extensions: [
		"pnm"
	]
},
	"image/x-portable-bitmap": {
	source: "apache",
	extensions: [
		"pbm"
	]
},
	"image/x-portable-graymap": {
	source: "apache",
	extensions: [
		"pgm"
	]
},
	"image/x-portable-pixmap": {
	source: "apache",
	extensions: [
		"ppm"
	]
},
	"image/x-rgb": {
	source: "apache",
	extensions: [
		"rgb"
	]
},
	"image/x-tga": {
	source: "apache",
	extensions: [
		"tga"
	]
},
	"image/x-xbitmap": {
	source: "apache",
	extensions: [
		"xbm"
	]
},
	"image/x-xcf": {
	compressible: false
},
	"image/x-xpixmap": {
	source: "apache",
	extensions: [
		"xpm"
	]
},
	"image/x-xwindowdump": {
	source: "apache",
	extensions: [
		"xwd"
	]
},
	"message/cpim": {
	source: "iana"
},
	"message/delivery-status": {
	source: "iana"
},
	"message/disposition-notification": {
	source: "iana",
	extensions: [
		"disposition-notification"
	]
},
	"message/external-body": {
	source: "iana"
},
	"message/feedback-report": {
	source: "iana"
},
	"message/global": {
	source: "iana",
	extensions: [
		"u8msg"
	]
},
	"message/global-delivery-status": {
	source: "iana",
	extensions: [
		"u8dsn"
	]
},
	"message/global-disposition-notification": {
	source: "iana",
	extensions: [
		"u8mdn"
	]
},
	"message/global-headers": {
	source: "iana",
	extensions: [
		"u8hdr"
	]
},
	"message/http": {
	source: "iana",
	compressible: false
},
	"message/imdn+xml": {
	source: "iana",
	compressible: true
},
	"message/news": {
	source: "iana"
},
	"message/partial": {
	source: "iana",
	compressible: false
},
	"message/rfc822": {
	source: "iana",
	compressible: true,
	extensions: [
		"eml",
		"mime"
	]
},
	"message/s-http": {
	source: "iana"
},
	"message/sip": {
	source: "iana"
},
	"message/sipfrag": {
	source: "iana"
},
	"message/tracking-status": {
	source: "iana"
},
	"message/vnd.si.simp": {
	source: "iana"
},
	"message/vnd.wfa.wsc": {
	source: "iana",
	extensions: [
		"wsc"
	]
},
	"model/3mf": {
	source: "iana",
	extensions: [
		"3mf"
	]
},
	"model/e57": {
	source: "iana"
},
	"model/gltf+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"gltf"
	]
},
	"model/gltf-binary": {
	source: "iana",
	compressible: true,
	extensions: [
		"glb"
	]
},
	"model/iges": {
	source: "iana",
	compressible: false,
	extensions: [
		"igs",
		"iges"
	]
},
	"model/mesh": {
	source: "iana",
	compressible: false,
	extensions: [
		"msh",
		"mesh",
		"silo"
	]
},
	"model/mtl": {
	source: "iana",
	extensions: [
		"mtl"
	]
},
	"model/obj": {
	source: "iana",
	extensions: [
		"obj"
	]
},
	"model/step": {
	source: "iana"
},
	"model/step+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"stpx"
	]
},
	"model/step+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpz"
	]
},
	"model/step-xml+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpxz"
	]
},
	"model/stl": {
	source: "iana",
	extensions: [
		"stl"
	]
},
	"model/vnd.collada+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dae"
	]
},
	"model/vnd.dwf": {
	source: "iana",
	extensions: [
		"dwf"
	]
},
	"model/vnd.flatland.3dml": {
	source: "iana"
},
	"model/vnd.gdl": {
	source: "iana",
	extensions: [
		"gdl"
	]
},
	"model/vnd.gs-gdl": {
	source: "apache"
},
	"model/vnd.gs.gdl": {
	source: "iana"
},
	"model/vnd.gtw": {
	source: "iana",
	extensions: [
		"gtw"
	]
},
	"model/vnd.moml+xml": {
	source: "iana",
	compressible: true
},
	"model/vnd.mts": {
	source: "iana",
	extensions: [
		"mts"
	]
},
	"model/vnd.opengex": {
	source: "iana",
	extensions: [
		"ogex"
	]
},
	"model/vnd.parasolid.transmit.binary": {
	source: "iana",
	extensions: [
		"x_b"
	]
},
	"model/vnd.parasolid.transmit.text": {
	source: "iana",
	extensions: [
		"x_t"
	]
},
	"model/vnd.pytha.pyox": {
	source: "iana"
},
	"model/vnd.rosette.annotated-data-model": {
	source: "iana"
},
	"model/vnd.sap.vds": {
	source: "iana",
	extensions: [
		"vds"
	]
},
	"model/vnd.usdz+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"usdz"
	]
},
	"model/vnd.valve.source.compiled-map": {
	source: "iana",
	extensions: [
		"bsp"
	]
},
	"model/vnd.vtu": {
	source: "iana",
	extensions: [
		"vtu"
	]
},
	"model/vrml": {
	source: "iana",
	compressible: false,
	extensions: [
		"wrl",
		"vrml"
	]
},
	"model/x3d+binary": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3db",
		"x3dbz"
	]
},
	"model/x3d+fastinfoset": {
	source: "iana",
	extensions: [
		"x3db"
	]
},
	"model/x3d+vrml": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3dv",
		"x3dvz"
	]
},
	"model/x3d+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"x3d",
		"x3dz"
	]
},
	"model/x3d-vrml": {
	source: "iana",
	extensions: [
		"x3dv"
	]
},
	"multipart/alternative": {
	source: "iana",
	compressible: false
},
	"multipart/appledouble": {
	source: "iana"
},
	"multipart/byteranges": {
	source: "iana"
},
	"multipart/digest": {
	source: "iana"
},
	"multipart/encrypted": {
	source: "iana",
	compressible: false
},
	"multipart/form-data": {
	source: "iana",
	compressible: false
},
	"multipart/header-set": {
	source: "iana"
},
	"multipart/mixed": {
	source: "iana"
},
	"multipart/multilingual": {
	source: "iana"
},
	"multipart/parallel": {
	source: "iana"
},
	"multipart/related": {
	source: "iana",
	compressible: false
},
	"multipart/report": {
	source: "iana"
},
	"multipart/signed": {
	source: "iana",
	compressible: false
},
	"multipart/vnd.bint.med-plus": {
	source: "iana"
},
	"multipart/voice-message": {
	source: "iana"
},
	"multipart/x-mixed-replace": {
	source: "iana"
},
	"text/1d-interleaved-parityfec": {
	source: "iana"
},
	"text/cache-manifest": {
	source: "iana",
	compressible: true,
	extensions: [
		"appcache",
		"manifest"
	]
},
	"text/calendar": {
	source: "iana",
	extensions: [
		"ics",
		"ifb"
	]
},
	"text/calender": {
	compressible: true
},
	"text/cmd": {
	compressible: true
},
	"text/coffeescript": {
	extensions: [
		"coffee",
		"litcoffee"
	]
},
	"text/cql": {
	source: "iana"
},
	"text/cql-expression": {
	source: "iana"
},
	"text/cql-identifier": {
	source: "iana"
},
	"text/css": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"css"
	]
},
	"text/csv": {
	source: "iana",
	compressible: true,
	extensions: [
		"csv"
	]
},
	"text/csv-schema": {
	source: "iana"
},
	"text/directory": {
	source: "iana"
},
	"text/dns": {
	source: "iana"
},
	"text/ecmascript": {
	source: "iana"
},
	"text/encaprtp": {
	source: "iana"
},
	"text/enriched": {
	source: "iana"
},
	"text/fhirpath": {
	source: "iana"
},
	"text/flexfec": {
	source: "iana"
},
	"text/fwdred": {
	source: "iana"
},
	"text/gff3": {
	source: "iana"
},
	"text/grammar-ref-list": {
	source: "iana"
},
	"text/html": {
	source: "iana",
	compressible: true,
	extensions: [
		"html",
		"htm",
		"shtml"
	]
},
	"text/jade": {
	extensions: [
		"jade"
	]
},
	"text/javascript": {
	source: "iana",
	compressible: true
},
	"text/jcr-cnd": {
	source: "iana"
},
	"text/jsx": {
	compressible: true,
	extensions: [
		"jsx"
	]
},
	"text/less": {
	compressible: true,
	extensions: [
		"less"
	]
},
	"text/markdown": {
	source: "iana",
	compressible: true,
	extensions: [
		"markdown",
		"md"
	]
},
	"text/mathml": {
	source: "nginx",
	extensions: [
		"mml"
	]
},
	"text/mdx": {
	compressible: true,
	extensions: [
		"mdx"
	]
},
	"text/mizar": {
	source: "iana"
},
	"text/n3": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"n3"
	]
},
	"text/parameters": {
	source: "iana",
	charset: "UTF-8"
},
	"text/parityfec": {
	source: "iana"
},
	"text/plain": {
	source: "iana",
	compressible: true,
	extensions: [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	]
},
	"text/provenance-notation": {
	source: "iana",
	charset: "UTF-8"
},
	"text/prs.fallenstein.rst": {
	source: "iana"
},
	"text/prs.lines.tag": {
	source: "iana",
	extensions: [
		"dsc"
	]
},
	"text/prs.prop.logic": {
	source: "iana"
},
	"text/raptorfec": {
	source: "iana"
},
	"text/red": {
	source: "iana"
},
	"text/rfc822-headers": {
	source: "iana"
},
	"text/richtext": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtx"
	]
},
	"text/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"text/rtp-enc-aescm128": {
	source: "iana"
},
	"text/rtploopback": {
	source: "iana"
},
	"text/rtx": {
	source: "iana"
},
	"text/sgml": {
	source: "iana",
	extensions: [
		"sgml",
		"sgm"
	]
},
	"text/shaclc": {
	source: "iana"
},
	"text/shex": {
	source: "iana",
	extensions: [
		"shex"
	]
},
	"text/slim": {
	extensions: [
		"slim",
		"slm"
	]
},
	"text/spdx": {
	source: "iana",
	extensions: [
		"spdx"
	]
},
	"text/strings": {
	source: "iana"
},
	"text/stylus": {
	extensions: [
		"stylus",
		"styl"
	]
},
	"text/t140": {
	source: "iana"
},
	"text/tab-separated-values": {
	source: "iana",
	compressible: true,
	extensions: [
		"tsv"
	]
},
	"text/troff": {
	source: "iana",
	extensions: [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	]
},
	"text/turtle": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"ttl"
	]
},
	"text/ulpfec": {
	source: "iana"
},
	"text/uri-list": {
	source: "iana",
	compressible: true,
	extensions: [
		"uri",
		"uris",
		"urls"
	]
},
	"text/vcard": {
	source: "iana",
	compressible: true,
	extensions: [
		"vcard"
	]
},
	"text/vnd.a": {
	source: "iana"
},
	"text/vnd.abc": {
	source: "iana"
},
	"text/vnd.ascii-art": {
	source: "iana"
},
	"text/vnd.curl": {
	source: "iana",
	extensions: [
		"curl"
	]
},
	"text/vnd.curl.dcurl": {
	source: "apache",
	extensions: [
		"dcurl"
	]
},
	"text/vnd.curl.mcurl": {
	source: "apache",
	extensions: [
		"mcurl"
	]
},
	"text/vnd.curl.scurl": {
	source: "apache",
	extensions: [
		"scurl"
	]
},
	"text/vnd.debian.copyright": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.dmclientscript": {
	source: "iana"
},
	"text/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"text/vnd.esmertec.theme-descriptor": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.familysearch.gedcom": {
	source: "iana",
	extensions: [
		"ged"
	]
},
	"text/vnd.ficlab.flt": {
	source: "iana"
},
	"text/vnd.fly": {
	source: "iana",
	extensions: [
		"fly"
	]
},
	"text/vnd.fmi.flexstor": {
	source: "iana",
	extensions: [
		"flx"
	]
},
	"text/vnd.gml": {
	source: "iana"
},
	"text/vnd.graphviz": {
	source: "iana",
	extensions: [
		"gv"
	]
},
	"text/vnd.hans": {
	source: "iana"
},
	"text/vnd.hgl": {
	source: "iana"
},
	"text/vnd.in3d.3dml": {
	source: "iana",
	extensions: [
		"3dml"
	]
},
	"text/vnd.in3d.spot": {
	source: "iana",
	extensions: [
		"spot"
	]
},
	"text/vnd.iptc.newsml": {
	source: "iana"
},
	"text/vnd.iptc.nitf": {
	source: "iana"
},
	"text/vnd.latex-z": {
	source: "iana"
},
	"text/vnd.motorola.reflex": {
	source: "iana"
},
	"text/vnd.ms-mediapackage": {
	source: "iana"
},
	"text/vnd.net2phone.commcenter.command": {
	source: "iana"
},
	"text/vnd.radisys.msml-basic-layout": {
	source: "iana"
},
	"text/vnd.senx.warpscript": {
	source: "iana"
},
	"text/vnd.si.uricatalogue": {
	source: "iana"
},
	"text/vnd.sosi": {
	source: "iana"
},
	"text/vnd.sun.j2me.app-descriptor": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"jad"
	]
},
	"text/vnd.trolltech.linguist": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.wap.si": {
	source: "iana"
},
	"text/vnd.wap.sl": {
	source: "iana"
},
	"text/vnd.wap.wml": {
	source: "iana",
	extensions: [
		"wml"
	]
},
	"text/vnd.wap.wmlscript": {
	source: "iana",
	extensions: [
		"wmls"
	]
},
	"text/vtt": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"vtt"
	]
},
	"text/x-asm": {
	source: "apache",
	extensions: [
		"s",
		"asm"
	]
},
	"text/x-c": {
	source: "apache",
	extensions: [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	]
},
	"text/x-component": {
	source: "nginx",
	extensions: [
		"htc"
	]
},
	"text/x-fortran": {
	source: "apache",
	extensions: [
		"f",
		"for",
		"f77",
		"f90"
	]
},
	"text/x-gwt-rpc": {
	compressible: true
},
	"text/x-handlebars-template": {
	extensions: [
		"hbs"
	]
},
	"text/x-java-source": {
	source: "apache",
	extensions: [
		"java"
	]
},
	"text/x-jquery-tmpl": {
	compressible: true
},
	"text/x-lua": {
	extensions: [
		"lua"
	]
},
	"text/x-markdown": {
	compressible: true,
	extensions: [
		"mkd"
	]
},
	"text/x-nfo": {
	source: "apache",
	extensions: [
		"nfo"
	]
},
	"text/x-opml": {
	source: "apache",
	extensions: [
		"opml"
	]
},
	"text/x-org": {
	compressible: true,
	extensions: [
		"org"
	]
},
	"text/x-pascal": {
	source: "apache",
	extensions: [
		"p",
		"pas"
	]
},
	"text/x-processing": {
	compressible: true,
	extensions: [
		"pde"
	]
},
	"text/x-sass": {
	extensions: [
		"sass"
	]
},
	"text/x-scss": {
	extensions: [
		"scss"
	]
},
	"text/x-setext": {
	source: "apache",
	extensions: [
		"etx"
	]
},
	"text/x-sfv": {
	source: "apache",
	extensions: [
		"sfv"
	]
},
	"text/x-suse-ymp": {
	compressible: true,
	extensions: [
		"ymp"
	]
},
	"text/x-uuencode": {
	source: "apache",
	extensions: [
		"uu"
	]
},
	"text/x-vcalendar": {
	source: "apache",
	extensions: [
		"vcs"
	]
},
	"text/x-vcard": {
	source: "apache",
	extensions: [
		"vcf"
	]
},
	"text/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml"
	]
},
	"text/xml-external-parsed-entity": {
	source: "iana"
},
	"text/yaml": {
	compressible: true,
	extensions: [
		"yaml",
		"yml"
	]
},
	"video/1d-interleaved-parityfec": {
	source: "iana"
},
	"video/3gpp": {
	source: "iana",
	extensions: [
		"3gp",
		"3gpp"
	]
},
	"video/3gpp-tt": {
	source: "iana"
},
	"video/3gpp2": {
	source: "iana",
	extensions: [
		"3g2"
	]
},
	"video/av1": {
	source: "iana"
},
	"video/bmpeg": {
	source: "iana"
},
	"video/bt656": {
	source: "iana"
},
	"video/celb": {
	source: "iana"
},
	"video/dv": {
	source: "iana"
},
	"video/encaprtp": {
	source: "iana"
},
	"video/ffv1": {
	source: "iana"
},
	"video/flexfec": {
	source: "iana"
},
	"video/h261": {
	source: "iana",
	extensions: [
		"h261"
	]
},
	"video/h263": {
	source: "iana",
	extensions: [
		"h263"
	]
},
	"video/h263-1998": {
	source: "iana"
},
	"video/h263-2000": {
	source: "iana"
},
	"video/h264": {
	source: "iana",
	extensions: [
		"h264"
	]
},
	"video/h264-rcdo": {
	source: "iana"
},
	"video/h264-svc": {
	source: "iana"
},
	"video/h265": {
	source: "iana"
},
	"video/iso.segment": {
	source: "iana",
	extensions: [
		"m4s"
	]
},
	"video/jpeg": {
	source: "iana",
	extensions: [
		"jpgv"
	]
},
	"video/jpeg2000": {
	source: "iana"
},
	"video/jpm": {
	source: "apache",
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"video/jxsv": {
	source: "iana"
},
	"video/mj2": {
	source: "iana",
	extensions: [
		"mj2",
		"mjp2"
	]
},
	"video/mp1s": {
	source: "iana"
},
	"video/mp2p": {
	source: "iana"
},
	"video/mp2t": {
	source: "iana",
	extensions: [
		"ts"
	]
},
	"video/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"mp4",
		"mp4v",
		"mpg4"
	]
},
	"video/mp4v-es": {
	source: "iana"
},
	"video/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	]
},
	"video/mpeg4-generic": {
	source: "iana"
},
	"video/mpv": {
	source: "iana"
},
	"video/nv": {
	source: "iana"
},
	"video/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogv"
	]
},
	"video/parityfec": {
	source: "iana"
},
	"video/pointer": {
	source: "iana"
},
	"video/quicktime": {
	source: "iana",
	compressible: false,
	extensions: [
		"qt",
		"mov"
	]
},
	"video/raptorfec": {
	source: "iana"
},
	"video/raw": {
	source: "iana"
},
	"video/rtp-enc-aescm128": {
	source: "iana"
},
	"video/rtploopback": {
	source: "iana"
},
	"video/rtx": {
	source: "iana"
},
	"video/scip": {
	source: "iana"
},
	"video/smpte291": {
	source: "iana"
},
	"video/smpte292m": {
	source: "iana"
},
	"video/ulpfec": {
	source: "iana"
},
	"video/vc1": {
	source: "iana"
},
	"video/vc2": {
	source: "iana"
},
	"video/vnd.cctv": {
	source: "iana"
},
	"video/vnd.dece.hd": {
	source: "iana",
	extensions: [
		"uvh",
		"uvvh"
	]
},
	"video/vnd.dece.mobile": {
	source: "iana",
	extensions: [
		"uvm",
		"uvvm"
	]
},
	"video/vnd.dece.mp4": {
	source: "iana"
},
	"video/vnd.dece.pd": {
	source: "iana",
	extensions: [
		"uvp",
		"uvvp"
	]
},
	"video/vnd.dece.sd": {
	source: "iana",
	extensions: [
		"uvs",
		"uvvs"
	]
},
	"video/vnd.dece.video": {
	source: "iana",
	extensions: [
		"uvv",
		"uvvv"
	]
},
	"video/vnd.directv.mpeg": {
	source: "iana"
},
	"video/vnd.directv.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dlna.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dvb.file": {
	source: "iana",
	extensions: [
		"dvb"
	]
},
	"video/vnd.fvt": {
	source: "iana",
	extensions: [
		"fvt"
	]
},
	"video/vnd.hns.video": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsavc": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsmpeg2": {
	source: "iana"
},
	"video/vnd.motorola.video": {
	source: "iana"
},
	"video/vnd.motorola.videop": {
	source: "iana"
},
	"video/vnd.mpegurl": {
	source: "iana",
	extensions: [
		"mxu",
		"m4u"
	]
},
	"video/vnd.ms-playready.media.pyv": {
	source: "iana",
	extensions: [
		"pyv"
	]
},
	"video/vnd.nokia.interleaved-multimedia": {
	source: "iana"
},
	"video/vnd.nokia.mp4vr": {
	source: "iana"
},
	"video/vnd.nokia.videovoip": {
	source: "iana"
},
	"video/vnd.objectvideo": {
	source: "iana"
},
	"video/vnd.radgamettools.bink": {
	source: "iana"
},
	"video/vnd.radgamettools.smacker": {
	source: "iana"
},
	"video/vnd.sealed.mpeg1": {
	source: "iana"
},
	"video/vnd.sealed.mpeg4": {
	source: "iana"
},
	"video/vnd.sealed.swf": {
	source: "iana"
},
	"video/vnd.sealedmedia.softseal.mov": {
	source: "iana"
},
	"video/vnd.uvvu.mp4": {
	source: "iana",
	extensions: [
		"uvu",
		"uvvu"
	]
},
	"video/vnd.vivo": {
	source: "iana",
	extensions: [
		"viv"
	]
},
	"video/vnd.youtube.yt": {
	source: "iana"
},
	"video/vp8": {
	source: "iana"
},
	"video/vp9": {
	source: "iana"
},
	"video/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"webm"
	]
},
	"video/x-f4v": {
	source: "apache",
	extensions: [
		"f4v"
	]
},
	"video/x-fli": {
	source: "apache",
	extensions: [
		"fli"
	]
},
	"video/x-flv": {
	source: "apache",
	compressible: false,
	extensions: [
		"flv"
	]
},
	"video/x-m4v": {
	source: "apache",
	extensions: [
		"m4v"
	]
},
	"video/x-matroska": {
	source: "apache",
	compressible: false,
	extensions: [
		"mkv",
		"mk3d",
		"mks"
	]
},
	"video/x-mng": {
	source: "apache",
	extensions: [
		"mng"
	]
},
	"video/x-ms-asf": {
	source: "apache",
	extensions: [
		"asf",
		"asx"
	]
},
	"video/x-ms-vob": {
	source: "apache",
	extensions: [
		"vob"
	]
},
	"video/x-ms-wm": {
	source: "apache",
	extensions: [
		"wm"
	]
},
	"video/x-ms-wmv": {
	source: "apache",
	compressible: false,
	extensions: [
		"wmv"
	]
},
	"video/x-ms-wmx": {
	source: "apache",
	extensions: [
		"wmx"
	]
},
	"video/x-ms-wvx": {
	source: "apache",
	extensions: [
		"wvx"
	]
},
	"video/x-msvideo": {
	source: "apache",
	extensions: [
		"avi"
	]
},
	"video/x-sgi-movie": {
	source: "apache",
	extensions: [
		"movie"
	]
},
	"video/x-smv": {
	source: "apache",
	extensions: [
		"smv"
	]
},
	"x-conference/x-cooltalk": {
	source: "apache",
	extensions: [
		"ice"
	]
},
	"x-shader/x-fragment": {
	compressible: true
},
	"x-shader/x-vertex": {
	compressible: true
}
};

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 */

var mimeDb = require$$0;

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

(function (exports) {

	/**
	 * Module dependencies.
	 * @private
	 */

	var db = mimeDb;
	var extname = require$$1$1.extname;

	/**
	 * Module variables.
	 * @private
	 */

	var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
	var TEXT_TYPE_REGEXP = /^text\//i;

	/**
	 * Module exports.
	 * @public
	 */

	exports.charset = charset;
	exports.charsets = { lookup: charset };
	exports.contentType = contentType;
	exports.extension = extension;
	exports.extensions = Object.create(null);
	exports.lookup = lookup;
	exports.types = Object.create(null);

	// Populate the extensions/types maps
	populateMaps(exports.extensions, exports.types);

	/**
	 * Get the default charset for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function charset (type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = EXTRACT_TYPE_REGEXP.exec(type);
	  var mime = match && db[match[1].toLowerCase()];

	  if (mime && mime.charset) {
	    return mime.charset
	  }

	  // default text/* to utf-8
	  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
	    return 'UTF-8'
	  }

	  return false
	}

	/**
	 * Create a full Content-Type header given a MIME type or extension.
	 *
	 * @param {string} str
	 * @return {boolean|string}
	 */

	function contentType (str) {
	  // TODO: should this even be in this module?
	  if (!str || typeof str !== 'string') {
	    return false
	  }

	  var mime = str.indexOf('/') === -1
	    ? exports.lookup(str)
	    : str;

	  if (!mime) {
	    return false
	  }

	  // TODO: use content-type or other module
	  if (mime.indexOf('charset') === -1) {
	    var charset = exports.charset(mime);
	    if (charset) mime += '; charset=' + charset.toLowerCase();
	  }

	  return mime
	}

	/**
	 * Get the default extension for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function extension (type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = EXTRACT_TYPE_REGEXP.exec(type);

	  // get extensions
	  var exts = match && exports.extensions[match[1].toLowerCase()];

	  if (!exts || !exts.length) {
	    return false
	  }

	  return exts[0]
	}

	/**
	 * Lookup the MIME type for a file path/extension.
	 *
	 * @param {string} path
	 * @return {boolean|string}
	 */

	function lookup (path) {
	  if (!path || typeof path !== 'string') {
	    return false
	  }

	  // get the extension ("ext" or ".ext" or full path)
	  var extension = extname('x.' + path)
	    .toLowerCase()
	    .substr(1);

	  if (!extension) {
	    return false
	  }

	  return exports.types[extension] || false
	}

	/**
	 * Populate the extensions and types maps.
	 * @private
	 */

	function populateMaps (extensions, types) {
	  // source preference (least -> most)
	  var preference = ['nginx', 'apache', undefined, 'iana'];

	  Object.keys(db).forEach(function forEachMimeType (type) {
	    var mime = db[type];
	    var exts = mime.extensions;

	    if (!exts || !exts.length) {
	      return
	    }

	    // mime -> extensions
	    extensions[type] = exts;

	    // extension -> mime
	    for (var i = 0; i < exts.length; i++) {
	      var extension = exts[i];

	      if (types[extension]) {
	        var from = preference.indexOf(db[types[extension]].source);
	        var to = preference.indexOf(mime.source);

	        if (types[extension] !== 'application/octet-stream' &&
	          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
	          // skip the remapping
	          continue
	        }
	      }

	      // set the extension -> mime
	      types[extension] = type;
	    }
	  });
	} 
} (mimeTypes));

var defer_1 = defer$1;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer$1(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}

var defer = defer_1;

// API
var async_1 = async$2;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async$2(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}

// API
var abort_1 = abort$2;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort$2(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}

var async$1 = async_1
  , abort$1 = abort_1
  ;

// API
var iterate_1 = iterate$2;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate$2(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort$1(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async$1(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async$1(callback));
  }

  return aborter;
}

// API
var state_1 = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}

var abort = abort_1
  , async = async_1
  ;

// API
var terminator_1 = terminator$2;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator$2(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}

var iterate$1    = iterate_1
  , initState$1  = state_1
  , terminator$1 = terminator_1
  ;

// Public API
var parallel_1 = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState$1(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate$1(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator$1.bind(state, callback);
}

var serialOrdered$2 = {exports: {}};

var iterate    = iterate_1
  , initState  = state_1
  , terminator = terminator_1
  ;

// Public API
serialOrdered$2.exports = serialOrdered$1;
// sorting helpers
serialOrdered$2.exports.ascending  = ascending;
serialOrdered$2.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered$1(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}

var serialOrderedExports = serialOrdered$2.exports;

var serialOrdered = serialOrderedExports;

// Public API
var serial_1 = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}

var asynckit$1 =
{
  parallel      : parallel_1,
  serial        : serial_1,
  serialOrdered : serialOrderedExports
};

// populates missing values
var populate$1 = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};

var CombinedStream = combined_stream;
var util = require$$1;
var path = require$$1$1;
var http$1 = require$$3;
var https$1 = require$$4;
var parseUrl$2 = require$$0$1.parse;
var fs = require$$6;
var Stream = stream.Stream;
var mime = mimeTypes;
var asynckit = asynckit$1;
var populate = populate$1;

// Public API
var form_data = FormData$1;

// make it a Stream
util.inherits(FormData$1, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData$1(options) {
  if (!(this instanceof FormData$1)) {
    return new FormData$1(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData$1.LINE_BREAK = '\r\n';
FormData$1.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData$1.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData$1.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData$1.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response or not a stream
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData$1.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData$1.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData$1.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData$1.LINE_BREAK + contents + FormData$1.LINE_BREAK;
};

FormData$1.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData$1.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData$1.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData$1.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData$1.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData$1.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData$1.LINE_BREAK;
};

FormData$1.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData$1.prototype.setBoundary = function(boundary) {
  this._boundary = boundary;
};

FormData$1.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData$1.prototype.getBuffer = function() {
  var dataBuffer = new Buffer.alloc( 0 );
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {

      // Add content to the buffer.
      if(Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
      }else {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData$1.LINE_BREAK)] );
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
};

FormData$1.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData$1.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData$1.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData$1.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData$1.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl$2(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https$1.request(options);
  } else {
    request = http$1.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err && err !== 'Unknown stream') {
      this._error(err);
      return;
    }

    // add content length
    if (length) {
      request.setHeader('Content-Length', length);
    }

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce);
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData$1.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData$1.prototype.toString = function () {
  return '[object FormData]';
};

var FormData$2 = /*@__PURE__*/getDefaultExportFromCjs(form_data);

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData$2 || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams = require$$0$1.URLSearchParams;

var platform$1 = {
  isNode: true,
  classes: {
    URLSearchParams,
    FormData: FormData$2,
    Blob: typeof Blob !== 'undefined' && Blob || null
  },
  protocols: [ 'http', 'https', 'file', 'data' ]
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var parseUrl$1 = require$$0$1.parse;

var DEFAULT_PORTS = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
};

var stringEndsWith = String.prototype.endsWith || function(s) {
  return s.length <= this.length &&
    this.indexOf(s, this.length - s.length) !== -1;
};

/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */
function getProxyForUrl(url) {
  var parsedUrl = typeof url === 'string' ? parseUrl$1(url) : url || {};
  var proto = parsedUrl.protocol;
  var hostname = parsedUrl.host;
  var port = parsedUrl.port;
  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
    return '';  // Don't proxy URLs without a valid scheme or host.
  }

  proto = proto.split(':', 1)[0];
  // Stripping ports in this way instead of using parsedUrl.hostname to make
  // sure that the brackets around IPv6 addresses are kept.
  hostname = hostname.replace(/:\d*$/, '');
  port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
  if (!shouldProxy(hostname, port)) {
    return '';  // Don't proxy URLs that match NO_PROXY.
  }

  var proxy =
    getEnv('npm_config_' + proto + '_proxy') ||
    getEnv(proto + '_proxy') ||
    getEnv('npm_config_proxy') ||
    getEnv('all_proxy');
  if (proxy && proxy.indexOf('://') === -1) {
    // Missing scheme in proxy, default to the requested URL's scheme.
    proxy = proto + '://' + proxy;
  }
  return proxy;
}

/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */
function shouldProxy(hostname, port) {
  var NO_PROXY =
    (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
  if (!NO_PROXY) {
    return true;  // Always proxy if NO_PROXY is not set.
  }
  if (NO_PROXY === '*') {
    return false;  // Never proxy if wildcard is set.
  }

  return NO_PROXY.split(/[,\s]/).every(function(proxy) {
    if (!proxy) {
      return true;  // Skip zero-length hosts.
    }
    var parsedProxy = proxy.match(/^(.+):(\d+)$/);
    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true;  // Skip if ports don't match.
    }

    if (!/^[.*]/.test(parsedProxyHostname)) {
      // No wildcards, so stop proxying if there is an exact match.
      return hostname !== parsedProxyHostname;
    }

    if (parsedProxyHostname.charAt(0) === '*') {
      // Remove leading wildcard.
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }
    // Stop proxying if the hostname ends with the no_proxy host.
    return !stringEndsWith.call(hostname, parsedProxyHostname);
  });
}

/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */
function getEnv(key) {
  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}

var getProxyForUrl_1 = getProxyForUrl;

var followRedirects$1 = {exports: {}};

var src = {exports: {}};

var browser = {exports: {}};

var debug$2 = {exports: {}};

/**
 * Helpers.
 */

var ms;
var hasRequiredMs;

function requireMs () {
	if (hasRequiredMs) return ms;
	hasRequiredMs = 1;
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	ms = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}
	return ms;
}

var hasRequiredDebug;

function requireDebug () {
	if (hasRequiredDebug) return debug$2.exports;
	hasRequiredDebug = 1;
	(function (module, exports) {
		/**
		 * This is the common logic for both the Node.js and web browser
		 * implementations of `debug()`.
		 *
		 * Expose `debug()` as the module.
		 */

		exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
		exports.coerce = coerce;
		exports.disable = disable;
		exports.enable = enable;
		exports.enabled = enabled;
		exports.humanize = requireMs();

		/**
		 * The currently active debug mode names, and names to skip.
		 */

		exports.names = [];
		exports.skips = [];

		/**
		 * Map of special "%n" handling functions, for the debug "format" argument.
		 *
		 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		 */

		exports.formatters = {};

		/**
		 * Previous log timestamp.
		 */

		var prevTime;

		/**
		 * Select a color.
		 * @param {String} namespace
		 * @return {Number}
		 * @api private
		 */

		function selectColor(namespace) {
		  var hash = 0, i;

		  for (i in namespace) {
		    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
		    hash |= 0; // Convert to 32bit integer
		  }

		  return exports.colors[Math.abs(hash) % exports.colors.length];
		}

		/**
		 * Create a debugger with the given `namespace`.
		 *
		 * @param {String} namespace
		 * @return {Function}
		 * @api public
		 */

		function createDebug(namespace) {

		  function debug() {
		    // disabled?
		    if (!debug.enabled) return;

		    var self = debug;

		    // set `diff` timestamp
		    var curr = +new Date();
		    var ms = curr - (prevTime || curr);
		    self.diff = ms;
		    self.prev = prevTime;
		    self.curr = curr;
		    prevTime = curr;

		    // turn the `arguments` into a proper Array
		    var args = new Array(arguments.length);
		    for (var i = 0; i < args.length; i++) {
		      args[i] = arguments[i];
		    }

		    args[0] = exports.coerce(args[0]);

		    if ('string' !== typeof args[0]) {
		      // anything else let's inspect with %O
		      args.unshift('%O');
		    }

		    // apply any `formatters` transformations
		    var index = 0;
		    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
		      // if we encounter an escaped % then don't increase the array index
		      if (match === '%%') return match;
		      index++;
		      var formatter = exports.formatters[format];
		      if ('function' === typeof formatter) {
		        var val = args[index];
		        match = formatter.call(self, val);

		        // now we need to remove `args[index]` since it's inlined in the `format`
		        args.splice(index, 1);
		        index--;
		      }
		      return match;
		    });

		    // apply env-specific formatting (colors, etc.)
		    exports.formatArgs.call(self, args);

		    var logFn = debug.log || exports.log || console.log.bind(console);
		    logFn.apply(self, args);
		  }

		  debug.namespace = namespace;
		  debug.enabled = exports.enabled(namespace);
		  debug.useColors = exports.useColors();
		  debug.color = selectColor(namespace);

		  // env-specific initialization logic for debug instances
		  if ('function' === typeof exports.init) {
		    exports.init(debug);
		  }

		  return debug;
		}

		/**
		 * Enables a debug mode by namespaces. This can include modes
		 * separated by a colon and wildcards.
		 *
		 * @param {String} namespaces
		 * @api public
		 */

		function enable(namespaces) {
		  exports.save(namespaces);

		  exports.names = [];
		  exports.skips = [];

		  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		  var len = split.length;

		  for (var i = 0; i < len; i++) {
		    if (!split[i]) continue; // ignore empty strings
		    namespaces = split[i].replace(/\*/g, '.*?');
		    if (namespaces[0] === '-') {
		      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
		    } else {
		      exports.names.push(new RegExp('^' + namespaces + '$'));
		    }
		  }
		}

		/**
		 * Disable debug output.
		 *
		 * @api public
		 */

		function disable() {
		  exports.enable('');
		}

		/**
		 * Returns true if the given mode name is enabled, false otherwise.
		 *
		 * @param {String} name
		 * @return {Boolean}
		 * @api public
		 */

		function enabled(name) {
		  var i, len;
		  for (i = 0, len = exports.skips.length; i < len; i++) {
		    if (exports.skips[i].test(name)) {
		      return false;
		    }
		  }
		  for (i = 0, len = exports.names.length; i < len; i++) {
		    if (exports.names[i].test(name)) {
		      return true;
		    }
		  }
		  return false;
		}

		/**
		 * Coerce `val`.
		 *
		 * @param {Mixed} val
		 * @return {Mixed}
		 * @api private
		 */

		function coerce(val) {
		  if (val instanceof Error) return val.stack || val.message;
		  return val;
		} 
	} (debug$2, debug$2.exports));
	return debug$2.exports;
}

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;
	(function (module, exports) {
		exports = module.exports = requireDebug();
		exports.log = log;
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.storage = 'undefined' != typeof chrome
		               && 'undefined' != typeof chrome.storage
		                  ? chrome.storage.local
		                  : localstorage();

		/**
		 * Colors.
		 */

		exports.colors = [
		  'lightseagreen',
		  'forestgreen',
		  'goldenrod',
		  'dodgerblue',
		  'darkorchid',
		  'crimson'
		];

		/**
		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
		 * and the Firebug extension (any Firefox version) are known
		 * to support "%c" CSS customizations.
		 *
		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
		 */

		function useColors() {
		  // NB: In an Electron preload script, document will be defined but not fully
		  // initialized. Since we know we're in Chrome, we'll just detect this case
		  // explicitly
		  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
		    return true;
		  }

		  // is webkit? http://stackoverflow.com/a/16459606/376773
		  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
		  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		    // is firebug? http://stackoverflow.com/a/398120/376773
		    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		    // is firefox >= v31?
		    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		    // double check webkit in userAgent just in case we are in a worker
		    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
		}

		/**
		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
		 */

		exports.formatters.j = function(v) {
		  try {
		    return JSON.stringify(v);
		  } catch (err) {
		    return '[UnexpectedJSONParseError]: ' + err.message;
		  }
		};


		/**
		 * Colorize log arguments if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
		  var useColors = this.useColors;

		  args[0] = (useColors ? '%c' : '')
		    + this.namespace
		    + (useColors ? ' %c' : ' ')
		    + args[0]
		    + (useColors ? '%c ' : ' ')
		    + '+' + exports.humanize(this.diff);

		  if (!useColors) return;

		  var c = 'color: ' + this.color;
		  args.splice(1, 0, c, 'color: inherit');

		  // the final "%c" is somewhat tricky, because there could be other
		  // arguments passed either before or after the %c, so we need to
		  // figure out the correct index to insert the CSS into
		  var index = 0;
		  var lastC = 0;
		  args[0].replace(/%[a-zA-Z%]/g, function(match) {
		    if ('%%' === match) return;
		    index++;
		    if ('%c' === match) {
		      // we only are interested in the *last* %c
		      // (the user may have provided their own)
		      lastC = index;
		    }
		  });

		  args.splice(lastC, 0, c);
		}

		/**
		 * Invokes `console.log()` when available.
		 * No-op when `console.log` is not a "function".
		 *
		 * @api public
		 */

		function log() {
		  // this hackery is required for IE8/9, where
		  // the `console.log` function doesn't have 'apply'
		  return 'object' === typeof console
		    && console.log
		    && Function.prototype.apply.call(console.log, console, arguments);
		}

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */

		function save(namespaces) {
		  try {
		    if (null == namespaces) {
		      exports.storage.removeItem('debug');
		    } else {
		      exports.storage.debug = namespaces;
		    }
		  } catch(e) {}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */

		function load() {
		  var r;
		  try {
		    r = exports.storage.debug;
		  } catch(e) {}

		  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
		  if (!r && typeof process !== 'undefined' && 'env' in process) {
		    r = process.env.DEBUG;
		  }

		  return r;
		}

		/**
		 * Enable namespaces listed in `localStorage.debug` initially.
		 */

		exports.enable(load());

		/**
		 * Localstorage attempts to return the localstorage.
		 *
		 * This is necessary because safari throws
		 * when a user disables cookies/localstorage
		 * and you attempt to access it.
		 *
		 * @return {LocalStorage}
		 * @api private
		 */

		function localstorage() {
		  try {
		    return window.localStorage;
		  } catch (e) {}
		} 
	} (browser, browser.exports));
	return browser.exports;
}

var node = {exports: {}};

/**
 * Module dependencies.
 */

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node.exports;
	hasRequiredNode = 1;
	(function (module, exports) {
		var tty = require$$0$2;
		var util = require$$1;

		/**
		 * This is the Node.js implementation of `debug()`.
		 *
		 * Expose `debug()` as the module.
		 */

		exports = module.exports = requireDebug();
		exports.init = init;
		exports.log = log;
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;

		/**
		 * Colors.
		 */

		exports.colors = [6, 2, 3, 4, 5, 1];

		/**
		 * Build up the default `inspectOpts` object from the environment variables.
		 *
		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
		 */

		exports.inspectOpts = Object.keys(process.env).filter(function (key) {
		  return /^debug_/i.test(key);
		}).reduce(function (obj, key) {
		  // camel-case
		  var prop = key
		    .substring(6)
		    .toLowerCase()
		    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

		  // coerce string value into JS value
		  var val = process.env[key];
		  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
		  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
		  else if (val === 'null') val = null;
		  else val = Number(val);

		  obj[prop] = val;
		  return obj;
		}, {});

		/**
		 * The file descriptor to write the `debug()` calls to.
		 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
		 *
		 *   $ DEBUG_FD=3 node script.js 3>debug.log
		 */

		var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

		if (1 !== fd && 2 !== fd) {
		  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
		}

		var stream = 1 === fd ? process.stdout :
		             2 === fd ? process.stderr :
		             createWritableStdioStream(fd);

		/**
		 * Is stdout a TTY? Colored output is enabled when `true`.
		 */

		function useColors() {
		  return 'colors' in exports.inspectOpts
		    ? Boolean(exports.inspectOpts.colors)
		    : tty.isatty(fd);
		}

		/**
		 * Map %o to `util.inspect()`, all on a single line.
		 */

		exports.formatters.o = function(v) {
		  this.inspectOpts.colors = this.useColors;
		  return util.inspect(v, this.inspectOpts)
		    .split('\n').map(function(str) {
		      return str.trim()
		    }).join(' ');
		};

		/**
		 * Map %o to `util.inspect()`, allowing multiple lines if needed.
		 */

		exports.formatters.O = function(v) {
		  this.inspectOpts.colors = this.useColors;
		  return util.inspect(v, this.inspectOpts);
		};

		/**
		 * Adds ANSI color escape codes if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
		  var name = this.namespace;
		  var useColors = this.useColors;

		  if (useColors) {
		    var c = this.color;
		    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

		    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
		  } else {
		    args[0] = new Date().toUTCString()
		      + ' ' + name + ' ' + args[0];
		  }
		}

		/**
		 * Invokes `util.format()` with the specified arguments and writes to `stream`.
		 */

		function log() {
		  return stream.write(util.format.apply(util, arguments) + '\n');
		}

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */

		function save(namespaces) {
		  if (null == namespaces) {
		    // If you set a process.env field to null or undefined, it gets cast to the
		    // string 'null' or 'undefined'. Just delete instead.
		    delete process.env.DEBUG;
		  } else {
		    process.env.DEBUG = namespaces;
		  }
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */

		function load() {
		  return process.env.DEBUG;
		}

		/**
		 * Copied from `node/src/node.js`.
		 *
		 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
		 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
		 */

		function createWritableStdioStream (fd) {
		  var stream;
		  var tty_wrap = process.binding('tty_wrap');

		  // Note stream._type is used for test-module-load-list.js

		  switch (tty_wrap.guessHandleType(fd)) {
		    case 'TTY':
		      stream = new tty.WriteStream(fd);
		      stream._type = 'tty';

		      // Hack to have stream not keep the event loop alive.
		      // See https://github.com/joyent/node/issues/1726
		      if (stream._handle && stream._handle.unref) {
		        stream._handle.unref();
		      }
		      break;

		    case 'FILE':
		      var fs = require$$6;
		      stream = new fs.SyncWriteStream(fd, { autoClose: false });
		      stream._type = 'fs';
		      break;

		    case 'PIPE':
		    case 'TCP':
		      var net = require$$4$1;
		      stream = new net.Socket({
		        fd: fd,
		        readable: false,
		        writable: true
		      });

		      // FIXME Should probably have an option in net.Socket to create a
		      // stream from an existing fd which is writable only. But for now
		      // we'll just add this hack and set the `readable` member to false.
		      // Test: ./node test/fixtures/echo.js < /etc/passwd
		      stream.readable = false;
		      stream.read = null;
		      stream._type = 'pipe';

		      // FIXME Hack to have stream not keep the event loop alive.
		      // See https://github.com/joyent/node/issues/1726
		      if (stream._handle && stream._handle.unref) {
		        stream._handle.unref();
		      }
		      break;

		    default:
		      // Probably an error on in uv_guess_handle()
		      throw new Error('Implement me. Unknown stream file type!');
		  }

		  // For supporting legacy API we put the FD here.
		  stream.fd = fd;

		  stream._isStdio = true;

		  return stream;
		}

		/**
		 * Init logic for `debug` instances.
		 *
		 * Create a new `inspectOpts` object in case `useColors` is set
		 * differently for a particular `debug` instance.
		 */

		function init (debug) {
		  debug.inspectOpts = {};

		  var keys = Object.keys(exports.inspectOpts);
		  for (var i = 0; i < keys.length; i++) {
		    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
		  }
		}

		/**
		 * Enable namespaces listed in `process.env.DEBUG` initially.
		 */

		exports.enable(load()); 
	} (node, node.exports));
	return node.exports;
}

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src.exports;
	hasRequiredSrc = 1;
	if (typeof process !== 'undefined' && process.type === 'renderer') {
	  src.exports = requireBrowser();
	} else {
	  src.exports = requireNode();
	}
	return src.exports;
}

var debug$1;

var debug_1 = function () {
  if (!debug$1) {
    try {
      /* eslint global-require: off */
      debug$1 = requireSrc()("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug$1 !== "function") {
      debug$1 = function () { /* */ };
    }
  }
  debug$1.apply(null, arguments);
};

var url = require$$0$1;
var URL$1 = url.URL;
var http = require$$3;
var https = require$$4;
var Writable = stream.Writable;
var assert = require$$4$2;
var debug = debug_1;

// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
  assert(new URL$1());
}
catch (error) {
  useNativeURL = error.code === "ERR_INVALID_URL";
}

// URL fields to preserve in copy operations
var preservedUrlFields = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash",
];

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  RedirectionError
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    try {
      self._processResponse(response);
    }
    catch (cause) {
      self.emit("error", cause instanceof RedirectionError ?
        cause : new RedirectionError({ cause: cause }));
    }
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  destroyRequest(this._currentRequest);
  this._currentRequest.abort();
  this.emit("abort");
};

RedirectableRequest.prototype.destroy = function (error) {
  destroyRequest(this._currentRequest, error);
  destroy.call(this, error);
  return this;
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  }
  else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    self.removeListener("close", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  this.on("close", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    throw new TypeError("Unsupported protocol " + protocol);
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ?
    url.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  destroyRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    throw new TooManyRedirectsError();
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host"),
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = parseUrl(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Create the redirected request
  var redirectUrl = resolveUrl(location, currentUrl);
  debug("redirecting to", redirectUrl.href);
  this._isRedirect = true;
  spreadUrlObject(redirectUrl, this._options);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrl.protocol !== currentUrlParts.protocol &&
     redirectUrl.protocol !== "https:" ||
     redirectUrl.host !== currentHost &&
     !isSubdomain(redirectUrl.host, currentHost)) {
    removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode,
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders,
    };
    beforeRedirect(this._options, responseDetails, requestDetails);
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  this._performRequest();
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters, ensuring that input is an object
      if (isURL(input)) {
        input = spreadUrlObject(input);
      }
      else if (isString(input)) {
        input = spreadUrlObject(parseUrl(input));
      }
      else {
        callback = options;
        options = validateUrl(input);
        input = { protocol: protocol };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

function noop() { /* empty */ }

function parseUrl(input) {
  var parsed;
  /* istanbul ignore else */
  if (useNativeURL) {
    parsed = new URL$1(input);
  }
  else {
    // Ensure the URL is valid and absolute
    parsed = validateUrl(url.parse(input));
    if (!isString(parsed.protocol)) {
      throw new InvalidUrlError({ input });
    }
  }
  return parsed;
}

function resolveUrl(relative, base) {
  /* istanbul ignore next */
  return useNativeURL ? new URL$1(relative, base) : parseUrl(url.resolve(base, relative));
}

function validateUrl(input) {
  if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
    throw new InvalidUrlError({ input: input.href || input });
  }
  if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
    throw new InvalidUrlError({ input: input.href || input });
  }
  return input;
}

function spreadUrlObject(urlObject, target) {
  var spread = target || {};
  for (var key of preservedUrlFields) {
    spread[key] = urlObject[key];
  }

  // Fix IPv6 hostname
  if (spread.hostname.startsWith("[")) {
    spread.hostname = spread.hostname.slice(1, -1);
  }
  // Ensure port is a number
  if (spread.port !== "") {
    spread.port = Number(spread.port);
  }
  // Concatenate path
  spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;

  return spread;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    Error.captureStackTrace(this, this.constructor);
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  Object.defineProperties(CustomError.prototype, {
    constructor: {
      value: CustomError,
      enumerable: false,
    },
    name: {
      value: "Error [" + code + "]",
      enumerable: false,
    },
  });
  return CustomError;
}

function destroyRequest(request, error) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.destroy(error);
}

function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
  return typeof value === "function";
}

function isBuffer(value) {
  return typeof value === "object" && ("length" in value);
}

function isURL(value) {
  return URL$1 && value instanceof URL$1;
}

// Exports
followRedirects$1.exports = wrap({ http: http, https: https });
followRedirects$1.exports.wrap = wrap;

var followRedirectsExports = followRedirects$1.exports;
var followRedirects = /*@__PURE__*/getDefaultExportFromCjs(followRedirectsExports);

const VERSION = "1.6.8";

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;

/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || platform.classes.Blob;
  const protocol = parseProtocol(uri);

  if (asBlob === undefined && _Blob) {
    asBlob = true;
  }

  if (protocol === 'data') {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;

    const match = DATA_URL_PATTERN.exec(uri);

    if (!match) {
      throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
    }

    const mime = match[1];
    const isBase64 = match[2];
    const body = match[3];
    const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? 'base64' : 'utf8');

    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
      }

      return new _Blob([buffer], {type: mime});
    }

    return buffer;
  }

  throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  const threshold = 1000 / freq;
  let timer = null;
  return function throttled(force, args) {
    const now = Date.now();
    if (force || now - timestamp > threshold) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timestamp = now;
      return fn.apply(null, args);
    }
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        timestamp = Date.now();
        return fn.apply(null, args);
      }, threshold - (now - timestamp));
    }
  };
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

const kInternals = Symbol('internals');

class AxiosTransformStream extends stream.Transform{
  constructor(options) {
    options = utils$1.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils$1.isUndefined(source[prop]);
    });

    super({
      readableHighWaterMark: options.chunkSize
    });

    const self = this;

    const internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };

    const _speedometer = speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);

    this.on('newListener', event => {
      if (event === 'progress') {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });

    let bytesNotified = 0;

    internals.updateProgress = throttle(function throttledHandler() {
      const totalBytes = internals.length;
      const bytesTransferred = internals.bytesSeen;
      const progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self.destroyed) return;

      const rate = _speedometer(progressBytes);

      bytesNotified = bytesTransferred;

      process.nextTick(() => {
        self.emit('progress', {
          'loaded': bytesTransferred,
          'total': totalBytes,
          'progress': totalBytes ? (bytesTransferred / totalBytes) : undefined,
          'bytes': progressBytes,
          'rate': rate ? rate : undefined,
          'estimated': rate && totalBytes && bytesTransferred <= totalBytes ?
            (totalBytes - bytesTransferred) / rate : undefined
        });
      });
    }, internals.ticksRate);

    const onFinish = () => {
      internals.updateProgress(true);
    };

    this.once('end', onFinish);
    this.once('error', onFinish);
  }

  _read(size) {
    const internals = this[kInternals];

    if (internals.onReadCallback) {
      internals.onReadCallback();
    }

    return super._read(size);
  }

  _transform(chunk, encoding, callback) {
    const self = this;
    const internals = this[kInternals];
    const maxRate = internals.maxRate;

    const readableHighWaterMark = this.readableHighWaterMark;

    const timeWindow = internals.timeWindow;

    const divider = 1000 / timeWindow;
    const bytesThreshold = (maxRate / divider);
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;

    function pushChunk(_chunk, _callback) {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;

      if (internals.isCaptured) {
        internals.updateProgress();
      }

      if (self.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    }

    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;

      if (maxRate) {
        const now = Date.now();

        if (!internals.ts || (passed = (now - internals.ts)) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }

        bytesLeft = bytesThreshold - internals.bytes;
      }

      if (maxRate) {
        if (bytesLeft <= 0) {
          // next time window
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }

        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }

      if (maxChunkSize && chunkSize > maxChunkSize && (chunkSize - maxChunkSize) > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }

      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };

    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }

      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }

  setLength(length) {
    this[kInternals].length = +length;
    return this;
  }
}

var AxiosTransformStream$1 = AxiosTransformStream;

const {asyncIterator} = Symbol;

const readBlob = async function* (blob) {
  if (blob.stream) {
    yield* blob.stream();
  } else if (blob.arrayBuffer) {
    yield await blob.arrayBuffer();
  } else if (blob[asyncIterator]) {
    yield* blob[asyncIterator]();
  } else {
    yield blob;
  }
};

const BOUNDARY_ALPHABET = utils$1.ALPHABET.ALPHA_DIGIT + '-_';

const textEncoder = new require$$1.TextEncoder();

const CRLF = '\r\n';
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;

class FormDataPart {
  constructor(name, value) {
    const {escapeName} = this.constructor;
    const isStringValue = utils$1.isString(value);

    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${
      !isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ''
    }${CRLF}`;

    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
    }

    this.headers = textEncoder.encode(headers + CRLF);

    this.contentLength = isStringValue ? value.byteLength : value.size;

    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;

    this.name = name;
    this.value = value;
  }

  async *encode(){
    yield this.headers;

    const {value} = this;

    if(utils$1.isTypedArray(value)) {
      yield value;
    } else {
      yield* readBlob(value);
    }

    yield CRLF_BYTES;
  }

  static escapeName(name) {
      return String(name).replace(/[\r\n"]/g, (match) => ({
        '\r' : '%0D',
        '\n' : '%0A',
        '"' : '%22',
      }[match]));
  }
}

const formDataToStream = (form, headersHandler, options) => {
  const {
    tag = 'form-data-boundary',
    size = 25,
    boundary = tag + '-' + utils$1.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};

  if(!utils$1.isFormData(form)) {
    throw TypeError('FormData instance required');
  }

  if (boundary.length < 1 || boundary.length > 70) {
    throw Error('boundary must be 10-70 characters long')
  }

  const boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
  const footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF + CRLF);
  let contentLength = footerBytes.byteLength;

  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });

  contentLength += boundaryBytes.byteLength * parts.length;

  contentLength = utils$1.toFiniteNumber(contentLength);

  const computedHeaders = {
    'Content-Type': `multipart/form-data; boundary=${boundary}`
  };

  if (Number.isFinite(contentLength)) {
    computedHeaders['Content-Length'] = contentLength;
  }

  headersHandler && headersHandler(computedHeaders);

  return stream.Readable.from((async function *() {
    for(const part of parts) {
      yield boundaryBytes;
      yield* part.encode();
    }

    yield footerBytes;
  })());
};

class ZlibHeaderTransformStream extends stream.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }

  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;

      // Add Default Compression headers if no zlib headers are present
      if (chunk[0] !== 120) { // Hex: 78
        const header = Buffer.alloc(2);
        header[0] = 120; // Hex: 78
        header[1] = 156; // Hex: 9C 
        this.push(header, encoding);
      }
    }

    this.__transform(chunk, encoding, callback);
  }
}

const callbackify = (fn, reducer) => {
  return utils$1.isAsyncFn(fn) ? function (...args) {
    const cb = args.pop();
    fn.apply(this, args).then((value) => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};

const zlibOptions = {
  flush: zlib.constants.Z_SYNC_FLUSH,
  finishFlush: zlib.constants.Z_SYNC_FLUSH
};

const brotliOptions = {
  flush: zlib.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: zlib.constants.BROTLI_OPERATION_FLUSH
};

const isBrotliSupported = utils$1.isFunction(zlib.createBrotliDecompress);

const {http: httpFollow, https: httpsFollow} = followRedirects;

const isHttps = /https:?/;

const supportedProtocols = platform.protocols.map(protocol => {
  return protocol + ':';
});

/**
 * If the proxy or config beforeRedirects functions are defined, call them with the options
 * object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */
function dispatchBeforeRedirect(options, responseDetails) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options, responseDetails);
  }
}

/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 *
 * @returns {http.ClientRequestArgs}
 */
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== false) {
    const proxyUrl = getProxyForUrl_1(location);
    if (proxyUrl) {
      proxy = new URL(proxyUrl);
    }
  }
  if (proxy) {
    // Basic proxy authorization
    if (proxy.username) {
      proxy.auth = (proxy.username || '') + ':' + (proxy.password || '');
    }

    if (proxy.auth) {
      // Support proxy auth object form
      if (proxy.auth.username || proxy.auth.password) {
        proxy.auth = (proxy.auth.username || '') + ':' + (proxy.auth.password || '');
      }
      const base64 = Buffer
        .from(proxy.auth, 'utf8')
        .toString('base64');
      options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    }

    options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
    const proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost;
    // Replace 'host' since options is not a URL object
    options.host = proxyHost;
    options.port = proxy.port;
    options.path = location;
    if (proxy.protocol) {
      options.protocol = proxy.protocol.includes(':') ? proxy.protocol : `${proxy.protocol}:`;
    }
  }

  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    // Configure proxy for redirected request, passing the original config proxy to apply
    // the exact same logic as if the redirected request was performed by axios directly.
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}

const isHttpAdapterSupported = typeof process !== 'undefined' && utils$1.kindOf(process) === 'process';

// temporary hotfix

const wrapAsync = (asyncExecutor) => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;

    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };

    const _resolve = (value) => {
      done(value);
      resolve(value);
    };

    const _reject = (reason) => {
      done(reason, true);
      reject(reason);
    };

    asyncExecutor(_resolve, _reject, (onDoneHandler) => (onDone = onDoneHandler)).catch(_reject);
  })
};

const resolveFamily = ({address, family}) => {
  if (!utils$1.isString(address)) {
    throw TypeError('address must be a string');
  }
  return ({
    address,
    family: family || (address.indexOf('.') < 0 ? 6 : 4)
  });
};

const buildAddressEntry = (address, family) => resolveFamily(utils$1.isObject(address) ? address : {address, family});

/*eslint consistent-return:0*/
var httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
    let {data, lookup, family} = config;
    const {responseType, responseEncoding} = config;
    const method = config.method.toUpperCase();
    let isDone;
    let rejected = false;
    let req;

    if (lookup) {
      const _lookup = callbackify(lookup, (value) => utils$1.isArray(value) ? value : [value]);
      // hotfix to support opt.all option which is required for node 20.x
      lookup = (hostname, opt, cb) => {
        _lookup(hostname, opt, (err, arg0, arg1) => {
          if (err) {
            return cb(err);
          }

          const addresses = utils$1.isArray(arg0) ? arg0.map(addr => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];

          opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
        });
      };
    }

    // temporary internal emitter until the AxiosRequest class will be implemented
    const emitter = new events$1.EventEmitter();

    const onFinished = () => {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(abort);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', abort);
      }

      emitter.removeAllListeners();
    };

    onDone((value, isRejected) => {
      isDone = true;
      if (isRejected) {
        rejected = true;
        onFinished();
      }
    });

    function abort(reason) {
      emitter.emit('abort', !reason || reason.type ? new CanceledError(null, config, req) : reason);
    }

    emitter.once('abort', reject);

    if (config.cancelToken || config.signal) {
      config.cancelToken && config.cancelToken.subscribe(abort);
      if (config.signal) {
        config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
      }
    }

    // Parse url
    const fullPath = buildFullPath(config.baseURL, config.url);
    const parsed = new URL(fullPath, 'http://localhost');
    const protocol = parsed.protocol || supportedProtocols[0];

    if (protocol === 'data:') {
      let convertedData;

      if (method !== 'GET') {
        return settle(resolve, reject, {
          status: 405,
          statusText: 'method not allowed',
          headers: {},
          config
        });
      }

      try {
        convertedData = fromDataURI(config.url, responseType === 'blob', {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
      }

      if (responseType === 'text') {
        convertedData = convertedData.toString(responseEncoding);

        if (!responseEncoding || responseEncoding === 'utf8') {
          convertedData = utils$1.stripBOM(convertedData);
        }
      } else if (responseType === 'stream') {
        convertedData = stream.Readable.from(convertedData);
      }

      return settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: 'OK',
        headers: new AxiosHeaders$1(),
        config
      });
    }

    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(new AxiosError(
        'Unsupported protocol ' + protocol,
        AxiosError.ERR_BAD_REQUEST,
        config
      ));
    }

    const headers = AxiosHeaders$1.from(config.headers).normalize();

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    // User-Agent is specified; handle case where no UA header is desired
    // Only set header if it hasn't been set in config
    headers.set('User-Agent', 'axios/' + VERSION, false);

    const onDownloadProgress = config.onDownloadProgress;
    const onUploadProgress = config.onUploadProgress;
    const maxRate = config.maxRate;
    let maxUploadRate = undefined;
    let maxDownloadRate = undefined;

    // support for spec compliant FormData objects
    if (utils$1.isSpecCompliantForm(data)) {
      const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);

      data = formDataToStream(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || undefined
      });
      // support for https://www.npmjs.com/package/form-data api
    } else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders)) {
      headers.set(data.getHeaders());

      if (!headers.hasContentLength()) {
        try {
          const knownLength = await require$$1.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
          /*eslint no-empty:0*/
        } catch (e) {
        }
      }
    } else if (utils$1.isBlob(data)) {
      data.size && headers.setContentType(data.type || 'application/octet-stream');
      headers.setContentLength(data.size || 0);
      data = stream.Readable.from(readBlob(data));
    } else if (data && !utils$1.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils$1.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils$1.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(new AxiosError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }

      // Add Content-Length header if data exists
      headers.setContentLength(data.length, false);

      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(new AxiosError(
          'Request body larger than maxBodyLength limit',
          AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }
    }

    const contentLength = utils$1.toFiniteNumber(headers.getContentLength());

    if (utils$1.isArray(maxRate)) {
      maxUploadRate = maxRate[0];
      maxDownloadRate = maxRate[1];
    } else {
      maxUploadRate = maxDownloadRate = maxRate;
    }

    if (data && (onUploadProgress || maxUploadRate)) {
      if (!utils$1.isStream(data)) {
        data = stream.Readable.from(data, {objectMode: false});
      }

      data = stream.pipeline([data, new AxiosTransformStream$1({
        length: contentLength,
        maxRate: utils$1.toFiniteNumber(maxUploadRate)
      })], utils$1.noop);

      onUploadProgress && data.on('progress', progress => {
        onUploadProgress(Object.assign(progress, {
          upload: true
        }));
      });
    }

    // HTTP basic authentication
    let auth = undefined;
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password || '';
      auth = username + ':' + password;
    }

    if (!auth && parsed.username) {
      const urlUsername = parsed.username;
      const urlPassword = parsed.password;
      auth = urlUsername + ':' + urlPassword;
    }

    auth && headers.delete('authorization');

    let path;

    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, '');
    } catch (err) {
      const customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      return reject(customErr);
    }

    headers.set(
      'Accept-Encoding',
      'gzip, compress, deflate' + (isBrotliSupported ? ', br' : ''), false
      );

    const options = {
      path,
      method: method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };

    // cacheable-lookup integration hotfix
    !utils$1.isUndefined(lookup) && (options.lookup = lookup);

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
      setProxy(options, config.proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    let transport;
    const isHttpsRequest = isHttps.test(options.protocol);
    options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsRequest ? require$$4 : require$$3;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      if (config.beforeRedirect) {
        options.beforeRedirects.config = config.beforeRedirect;
      }
      transport = isHttpsRequest ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    } else {
      // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
      options.maxBodyLength = Infinity;
    }

    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    req = transport.request(options, function handleResponse(res) {
      if (req.destroyed) return;

      const streams = [res];

      const responseLength = +res.headers['content-length'];

      if (onDownloadProgress) {
        const transformStream = new AxiosTransformStream$1({
          length: utils$1.toFiniteNumber(responseLength),
          maxRate: utils$1.toFiniteNumber(maxDownloadRate)
        });

        onDownloadProgress && transformStream.on('progress', progress => {
          onDownloadProgress(Object.assign(progress, {
            download: true
          }));
        });

        streams.push(transformStream);
      }

      // decompress the response body transparently if required
      let responseStream = res;

      // return the last request in case of redirects
      const lastRequest = res.req || req;

      // if decompress disabled we should not decompress
      if (config.decompress !== false && res.headers['content-encoding']) {
        // if no content, but headers still say that it is encoded,
        // remove the header not confuse downstream operations
        if (method === 'HEAD' || res.statusCode === 204) {
          delete res.headers['content-encoding'];
        }

        switch ((res.headers['content-encoding'] || '').toLowerCase()) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'x-gzip':
        case 'compress':
        case 'x-compress':
          // add the unzipper to the body stream processing pipeline
          streams.push(zlib.createUnzip(zlibOptions));

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        case 'deflate':
          streams.push(new ZlibHeaderTransformStream());

          // add the unzipper to the body stream processing pipeline
          streams.push(zlib.createUnzip(zlibOptions));

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        case 'br':
          if (isBrotliSupported) {
            streams.push(zlib.createBrotliDecompress(brotliOptions));
            delete res.headers['content-encoding'];
          }
        }
      }

      responseStream = streams.length > 1 ? stream.pipeline(streams, utils$1.noop) : streams[0];

      const offListeners = stream.finished(responseStream, () => {
        offListeners();
        onFinished();
      });

      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders$1(res.headers),
        config,
        request: lastRequest
      };

      if (responseType === 'stream') {
        response.data = responseStream;
        settle(resolve, reject, response);
      } else {
        const responseBuffer = [];
        let totalResponseBytes = 0;

        responseStream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destroy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            responseStream.destroy();
            reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
          }
        });

        responseStream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }

          const err = new AxiosError(
            'maxContentLength size of ' + config.maxContentLength + ' exceeded',
            AxiosError.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err);
          reject(err);
        });

        responseStream.on('error', function handleStreamError(err) {
          if (req.destroyed) return;
          reject(AxiosError.from(err, null, config, lastRequest));
        });

        responseStream.on('end', function handleStreamEnd() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (responseType !== 'arraybuffer') {
              responseData = responseData.toString(responseEncoding);
              if (!responseEncoding || responseEncoding === 'utf8') {
                responseData = utils$1.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            return reject(AxiosError.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }

      emitter.once('abort', err => {
        if (!responseStream.destroyed) {
          responseStream.emit('error', err);
          responseStream.destroy();
        }
      });
    });

    emitter.once('abort', err => {
      reject(err);
      req.destroy(err);
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      // @todo remove
      // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
      reject(AxiosError.from(err, null, config, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      const timeout = parseInt(config.timeout, 10);

      if (Number.isNaN(timeout)) {
        reject(new AxiosError(
          'error trying to parse `config.timeout` to int',
          AxiosError.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devouring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        if (isDone) return;
        let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
        const transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          config,
          req
        ));
        abort();
      });
    }


    // Send the request
    if (utils$1.isStream(data)) {
      let ended = false;
      let errored = false;

      data.on('end', () => {
        ended = true;
      });

      data.once('error', err => {
        errored = true;
        req.destroy(err);
      });

      data.on('close', () => {
        if (!ended && !errored) {
          abort(new CanceledError('Request stream has been aborted', config, req));
        }
      });

      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};

var cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

var isURLSameOrigin = platform.hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils$1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    let {responseType, withXSRFToken} = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (utils$1.isFormData(requestData)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;

        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';

        if (!err.stack) {
          err.stack = stack;
          // match without the 2 top stack lines
        } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
          err.stack += '\n' + stack;
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

const formatCaughtError$3 = errorAndReenter.formatCaughtError;
const authenticationService = authentication_service.authenticationService;
const dbApiService$1 = db_service.dbApiService;
const defaultValue = generic_editor_utilities.defaultValue;
const console_debug_log$2 = logging_service.console_debug_log;

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
  const db = new dbApiService$1({
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
  console_debug_log$2(`>> checkConversationIdChange | cid: ${cid} | externalApiResponse:`, externalApiResponse);
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
    operationDescription: "Communication with FynBot",
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
db_service.dbApiService;
db_service.MULTIPART_FORM_DATA_HEADER;
const console_debug_log$1 = logging_service.console_debug_log;
const formatCaughtError$2 = errorAndReenter.formatCaughtError;
const toggleIdVisibility$2 = ui.toggleIdVisibility;
const BUTTON_LISTING_CLASS$3 = class_name_constants.BUTTON_LISTING_CLASS;
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
      {
        const authHeader = authHeader$1.authHeader();
        const endpointUrl = "".concat(process.env.REACT_APP_API_URL, "/", "ai/image_to_text");
        await sendFile(endpointUrl, formData, authHeader, query);
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
const dbApiService = db_service.dbApiService;
const MULTIPART_FORM_DATA_HEADER = db_service.MULTIPART_FORM_DATA_HEADER;
logging_service.console_debug_log;
const formatCaughtError$1 = errorAndReenter.formatCaughtError;
const BUTTON_LISTING_CLASS$2 = class_name_constants.BUTTON_LISTING_CLASS;
const toggleIdVisibility$1 = ui.toggleIdVisibility;
const ModalPopUp = ModalPopUp$1$1.ModalPopUp;
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
logging_service.console_debug_log;
const usePlainFetch$1 = response_handlers_service.usePlainFetch;
const growUpTextArea = ui.growUpTextArea;
const resetTextArea = ui.resetTextArea;
const toggleIdVisibility = ui.toggleIdVisibility;
const formatCaughtError = errorAndReenter.formatCaughtError;
const WaitAnimation = wait_animation_utility.WaitAnimation;
const getFilenameFromContentDisposition = blob_files_utilities.getFilenameFromContentDisposition;
const responseHasFile = blob_files_utilities.responseHasFile;
const BUTTON_LISTING_CLASS$1 = class_name_constants.BUTTON_LISTING_CLASS;
const userInputViewportHeight = 80;
/* <UserInput>.userInputViewportHeight must be the same as ".conversation-block.height" in FynBot.css */
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
    // TODO: remove INPUT_FLEXIBLE_CLASS and put the css in FynBot.css
    // className={`${INPUT_FLEXIBLE_CLASS} mr-2`}
    ,
    className: "p-2",
    "aria-label": "Message FynBot\u2026",
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
    title: state && state.isApiProcessing ? 'Stop Processing' : 'Chat with FynBot'
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

const BUTTON_LISTING_CLASS = class_name_constants.BUTTON_LISTING_CLASS;
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
const convertId$1 = db_service.convertId;
logging_service.console_debug_log;
const timestampToDate = dateTimestamp.timestampToDate;

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
logging_service.console_debug_log;
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
const WARNING_MSG_CLASS$1 = class_name_constants.WARNING_MSG_CLASS;
blob_files_utilities.defaultFilenametoDownload;
const decodeBlob = blob_files_utilities.decodeBlob;
logging_service.console_debug_log;
const AudioPlayer = ({
  blobUrl,
  filename,
  expired,
  errorMsgSuffix
}) => {
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

logging_service.console_debug_log;
const GoToTheBottom = ({
  elementId,
  elementsToRender
}) => {
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
logging_service.console_debug_log;
const ScrollToBottomButton = ({
  elementId,
  elementsToRender
}) => {
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

const LinkifyText = ui.LinkifyText;
const CopyButton = ui.CopyButton;
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

logging_service.console_debug_log;
const usePlainFetch = response_handlers_service.usePlainFetch;
const getFileExtension = blob_files_utilities.getFileExtension;
const performDownload = blob_files_utilities.performDownload;
const INFO_MSG_CLASS = class_name_constants.INFO_MSG_CLASS;
const WARNING_MSG_CLASS = class_name_constants.WARNING_MSG_CLASS;
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
    const filename = typeof messageObject.filename !== "undefined" ? messageObject.filename : downloadedFilename;
    const extension = filename ? getFileExtension(filename) : null;
    const errorMsgSuffix = usePlainFetch ? " (No headers allowed)" : "";
    if (hasAttachment && extension) {
      if (['wav', 'mp3'].includes(extension.toLowerCase())) {
        // if (['1wav', '1mp3'].includes(extension.toLowerCase())) {
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
    if (hasAttachment || message.startsWith('```File')) {
      if (message.startsWith('```')) {
        message = message.substring(3, message.length - 3);
        const firstWord = message.split(' ')[0];
        message = message.substring(firstWord.length + 1).trim();
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

const convertId = db_service.convertId;
const console_debug_log = logging_service.console_debug_log;
const isMobileDevice = ui.isMobileDevice;
const getUrlParams = urlParams$1.getUrlParams;
const errorAndReEnter = errorAndReenter.errorAndReEnter;
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

const mergeDicts = dictUtilities.mergeDicts;
logging_service.console_debug_log;
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
  return /*#__PURE__*/React.createElement(App$1, {
    appLogo: appLogo === null ? 'gs_ai_logo_circle.svg' : appLogo,
    componentMap: componentMapFinal
  });
};

// AI button

logging_service.console_debug_log;
const imageDirectory = general_constants.imageDirectory;
const sparkIcon = spark;
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
