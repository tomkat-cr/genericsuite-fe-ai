import React from 'react';

import * as gs from "genericsuite";

const convertId = gs.dbService.convertId;
const console_debug_log = gs.loggingService.console_debug_log;
const timestampToDate = gs.dateTimestamp.timestampToDate;

import {
    loadConversation,
    deleteConversation,
} from './chatbot.db.operations.jsx';

import './ChatBot.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
    faTrash,
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(
    faTrash,
);

const debug = false;

// const dateColumn = "creation_date";
const dateColumn = "update_date";

export const ConversationList = ({
    state,
    dispatch,
    showSideBar,
}) => {
    const setErrorMsg = (errorMsg) => {
        dispatch({ type: 'SET_ERROR_MSG', payload: errorMsg });
    }

    // Handle load conversation
    const handleLoadConversation = async (conversationId, dispatch) => {
        if (!showSideBar) {
            return;
        }
        const apiResponse = await loadConversation(conversationId, dispatch);
        if (debug) console_debug_log('handleLoadConversation | apiResponse:', apiResponse);
        if (apiResponse.ok) {
            const data = {
                conversationId: conversationId,
                messages: apiResponse.response.messages,
            }
            dispatch({ type: 'GET_MESSAGES', payload: data });
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
        const apiResponse = await deleteConversation(conversationId, dispatch);
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
                    className="conversation-item align-middle flex"
                >
                    <div
                        key={`${convId}_inner_div`}
                        style={{ width: '95%'}}
                    >
                        <div
                            key={`${convId}_desc_outter_div`}
                            style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                        >
                            <button
                                key={`${convId}_desc_button`}
                                onClick={() => handleLoadConversation(convId, dispatch)}
                                title={timestampToDate(conversation[dateColumn], true, " ", false)}
                            >
                                <div
                                    key={`${convId}_desc_inner_div`}
                                    style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                                >
                                    {fixTitle(conversation.title)}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        key={`${convId}_delete_div`}
                        style={{ width: '5%'}}
                    >
                        <button
                            key={`${convId}_delete_button`}
                            type="button"
                            onClick={() => confirmDeleteConversation(convId, dispatch, conversation.title)}
                            className="ml-2 mb-1 bg-blue-500 text-white p-0 rounded close"
                        >
                            <FontAwesomeIcon icon="trash" size='xs' />
                        </button>
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
            style={{ display: (state.conversationListToggle ? '' : 'none') }}
        >
            {groupedConversations.today.length > 0 && (
                <div key="today">
                    <h2>Today</h2>
                    {renderConversations(groupedConversations.today)}
                </div>
            )}
            {groupedConversations.yesterday.length > 0 && (
                <div key="yesterday">
                    <h2>Yesterday</h2>
                    {renderConversations(groupedConversations.yesterday)}
                </div>
            )}
            {groupedConversations.lastSevenDays.length > 0 && (
                <div key="lastSevenDays">
                    <h2>Last 7 Days</h2>
                    {renderConversations(groupedConversations.lastSevenDays)}
                </div>
            )}
            {groupedConversations.lastMonth.length > 0 && (
                <div key="lastMonth">
                    <h2>Last Month</h2>
                    {renderConversations(groupedConversations.lastMonth)}
                </div>
            )}
            {Object.keys(groupedConversations.older).map(monthYear => (
                <div key={"month_year_" + monthYear}>
                    <h2>{monthYear}</h2>
                    {renderConversations(groupedConversations.older[monthYear])}
                </div>
            ))}
        </div>
    );
}
