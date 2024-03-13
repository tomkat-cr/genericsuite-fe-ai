import React, { useEffect } from 'react'

import * as gs from "genericsuite";
const console_debug_log = gs.loggingService.console_debug_log;

import "./ScrollToBottomButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
    faArrowDown,
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(
    faArrowDown,
);

const debug = false;

export const ScrollToBottomButton = ({ elementId, elementsToRender }) => {
    const element = document.getElementById(elementId);

    const scrollToBottom = () => {
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    };

    useEffect(() => {
        if (element && elementsToRender !== '') {
            // let lastScrollTop =
            //     element.scrollY || element.scrollTop;
            element.addEventListener(
                'scroll',
                function handleScroll() {
                    // const scrollTopPosition =
                    //     element.scrollY || element.scrollTop;
                    // if (scrollTopPosition > lastScrollTop) {
                    //     console.log('scrolling down');
                    // } else if (scrollTopPosition < lastScrollTop) {
                    //     console.log('scrolling up');
                    // }
                    // lastScrollTop =
                    //     scrollTopPosition <= 0 ? 0 : scrollTopPosition;
                    showDebugInfo(element, elementId);
                    const buttonElement = document.getElementById('scroll-overfolw-button');
                    buttonElement.style.visibility=(showButton(element));    
                },
                false,
            );
        }
    }, [element, elementsToRender, elementId]);

    showDebugInfo(element, elementId);
    return (
        <div
            id='scroll-overfolw-button'
            style={{visibility: showButton(element)}}
        >
            <button
                onClick={scrollToBottom}
                className="float"
            >
                    <i className="a fa-plus my-float">
                        <FontAwesomeIcon icon='arrow-down' size='lg'/>
                    </i>
            </button>
        </div>
    )
}

const showButton = (element) => (
    ((element && element.scrollHeight > element.scrollTop+element.clientHeight) ? 'visible' : 'hidden')
);

const showDebugInfo = (element, elementId) => {
    if (debug && element) {
        console_debug_log(` ScrollToBottomButton (${elementId}) | showButton: ${showButton(element)} | element.scrollTop: ${element.scrollTop} | element.scrollHeight: ${element.scrollHeight} |  element.clientHeight: ${ element.clientHeight} | element.offsetHeight: ${element.offsetHeight}`);
    }
}
