import React from 'react';

import * as gs from "genericsuite";

import {
    loadConversation,
    deleteConversation,
} from './chatbot.db.operations.jsx';
import {
    CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS,
    CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_2_CLASS,
    CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_DM_CLASS,
    CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_LM_CLASS,
    CHATBOT_CONVERSATION_ITEM_DIV_1_CLASS,
    CHATBOT_CONVERSATION_ITEM_DIV_2_CLASS,
    CHATBOT_CONVERSATION_ITEM_DESC_INNER_CLASS,
    CHATBOT_CONVERSATION_ITEM_DESC_OUTTER_CLASS,
    CHATBOT_CONVERSATION_ITEM_DELETE_DIV_CLASS,
    CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS,
    CHATBOT_CONVERSATION_ITEM_SEPARATOR_CLASS,
} from '../../constants/class_name_constants.jsx';

// import './ChatBot.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faTrash,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faTrash,
// );
const GsIcons = gs.IconsLib.GsIcons;

const convertId = gs.dbService.convertId;
const console_debug_log = gs.loggingService.console_debug_log;
const timestampToDate = gs.dateTimestamp.timestampToDate;
const useAppContext = gs.AppContext.useAppContext;

const HIDDEN_CLASS = gs.classNameConstants.HIDDEN_CLASS;

const debug = false;

// const dateColumn = "creation_date";
const dateColumn = "update_date";

export const ConversationList = ({
    state,
    dispatch,
    showSideBar,
}) => {
    const { theme, isWide, isDarkMode } = useAppContext();

    const setErrorMsg = (errorMsg) => {
        dispatch({ type: 'SET_ERROR_MSG', payload: errorMsg });
    }

    const h2_class = `${CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_2_CLASS} ${theme.isDarkMode ? CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_DM_CLASS : CHATBOT_CONVERSATIONS_LIST_HEADING_TEXT_LM_CLASS}`;

    // Handle load conversation
    const handleLoadConversation = async (conversationId, state, dispatch) => {
        if (!showSideBar) {
            return;
        }
        const apiResponse = await loadConversation(conversationId, state, dispatch);
        if (debug) console_debug_log('handleLoadConversation | apiResponse:', apiResponse);
        if (apiResponse.ok) {
            const data = {
                conversationId: conversationId,
                messages: apiResponse.response.messages,
            }
            dispatch({ type: 'SET_MESSAGES', payload: data });
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
        const startNew = (conversationId === state.currentConversationId);
        const apiResponse = await deleteConversation(conversationId, state, dispatch);
        if (debug) {
            console_debug_log(`handleDeleteConversation | conversationId: ${conversationId} | state.currentConversationId: ${state.currentConversationId} | startNew: ${startNew} | apiResponse:`, apiResponse);
        }
        if (apiResponse.ok) {
            dispatch({ type: 'DELETE_CONVERSATION', payload: conversationId });
            if (startNew) {
                dispatch({ type: 'START_NEW_CONVERSATION', payload: { conversationId: null } });
            }
        } else {
            setErrorMsg(apiResponse.errorMessage);
        }
    };

    const fixTitle = (title) => (title.length === 0 ? "Empty" : title);

    const groupConversationsByDate = (conversations) => {
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
            const timestampUnixEpoch = conversation[dateColumn]*1000;
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
                const monthYear = conversationDate.toLocaleString('default', { month: 'long', year: 'numeric' });
                if (!groups.older[monthYear]) {
                    groups.older[monthYear] = [];
                }
                groups.older[monthYear].push(conversation);
            }
        });
        return groups;
    };

    const renderConversations = (conversations) => {
        return conversations.map(conversation => {
            const convId = convertId(conversation._id);
            // console.log('renderConversations | convId: ' + `${convId}_div...`);
            // console.log('renderConversations | conversation:', conversation);
            return (
                <div
                    key={`${convId}_main_div`}
                    className={CHATBOT_CONVERSATION_ITEM_DIV_1_CLASS}
                    onMouseOver={() => {
                        const element = document.getElementById(`${convId}_options`)
                        if (element) {
                            element.style.display = 'block';
                        }
                    }}
                    onMouseOut={() => {
                        const element = document.getElementById(`${convId}_options`)
                        if (element) {
                            element.style.display = 'none';
                        }
                    }}
                >
                    <div
                        key={`${convId}_inner_div`}
                        className={CHATBOT_CONVERSATION_ITEM_DIV_2_CLASS}
                    >
                        <div
                            key={`${convId}_desc_outter_div`}
                            className={`${CHATBOT_CONVERSATION_ITEM_DESC_OUTTER_CLASS} ${theme.textHoverSide}`}
                        >
                            <button
                                key={`${convId}_desc_button`}
                                onClick={() => handleLoadConversation(convId, state, dispatch)}
                                title={timestampToDate(conversation[dateColumn], true, " ", false)}
                            >
                                <div
                                    key={`${convId}_desc_inner_div`}
                                    className={CHATBOT_CONVERSATION_ITEM_DESC_INNER_CLASS}
                                >
                                    {fixTitle(conversation.title)}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        id={`${convId}_options`}
                        className='hidden'
                    >
                        <div
                            className={CHATBOT_CONVERSATION_ITEM_SEPARATOR_CLASS}
                        />
                        <div
                            key={`${convId}_delete_div`}
                            className={`${CHATBOT_CONVERSATION_ITEM_DELETE_DIV_CLASS} ${theme.textHoverSide}`}
                        >
                            <button
                                key={`${convId}_delete_button`}
                                type="button"
                                onClick={() => confirmDeleteConversation(convId, dispatch, conversation.title)}
                                className={CHATBOT_CONVERSATION_ITEM_DELETE_BUTTON_CLASS}
                            >
                                {/* <FontAwesomeIcon icon="trash" size='xs' /> */}
                                <GsIcons
                                    icon="trash"
                                    size='xs'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
    };

    if (!(state && state.conversations)) {
        return null;
    }

    const groupedConversations = groupConversationsByDate(state.conversations);
    return (
        <div
            key='conversation_list_main_div'
            // style={{ display: (state.conversationListToggle ? '' : 'none') }}
            className={(state.conversationListToggle ? '' : HIDDEN_CLASS)}
        >
            {groupedConversations.today.length > 0 && (
                <div
                    key="today"
                    className={CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS}
                >
                    <h2
                        className={h2_class}
                    >
                        Today
                    </h2>
                    {renderConversations(groupedConversations.today)}
                </div>
            )}
            {groupedConversations.yesterday.length > 0 && (
                <div
                    key="yesterday"
                    className={CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS}
                >
                    <h2
                        className={h2_class}
                    >
                        Yesterday
                    </h2>
                    {renderConversations(groupedConversations.yesterday)}
                </div>
            )}
            {groupedConversations.lastSevenDays.length > 0 && (
                <div
                    key="lastSevenDays"
                    className={CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS}
                >
                    <h2
                        className={h2_class}
                    >
                        Last 7 Days
                    </h2>
                    {renderConversations(groupedConversations.lastSevenDays)}
                </div>
            )}
            {groupedConversations.lastMonth.length > 0 && (
                <div
                    key="lastMonth"
                    className={CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS}
                >
                    <h2
                        className={h2_class}
                    >
                        Last Month
                    </h2>
                    {renderConversations(groupedConversations.lastMonth)}
                </div>
            )}
            {Object.keys(groupedConversations.older).map(monthYear => (
                <div
                    key={"month_year_" + monthYear}
                    className={CHATBOT_CONVERSATIONS_LIST_HEADING_DIV_1_CLASS}
                >
                    <h2
                        className={h2_class}
                    >
                        {monthYear}
                    </h2>
                    {renderConversations(groupedConversations.older[monthYear])}
                </div>
            ))}
        </div>
    );
}
