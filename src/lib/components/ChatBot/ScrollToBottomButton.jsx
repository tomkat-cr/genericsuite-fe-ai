import React, { useEffect } from 'react'

import * as gs from "genericsuite";

import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';
import {
    SCROLL_TO_BOTTOM_BUTTON_DIV_1_CLASS,
    SCROLL_TO_BOTTOM_BUTTON_DIV_2_CLASS,
    SCROLL_TO_BOTTOM_BUTTON_DIV_3_CLASS,
    SCROLL_TO_BOTTOM_BUTTON_FLOAT_CLASS,
    SCROLL_TO_BOTTOM_BUTTON_ICON_CLASS
} from '../../constants/class_name_constants.jsx';
// import "./ScrollToBottomButton.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faArrowDown,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faArrowDown,
// );

const GsIcons = gs.IconsLib.GsIcons;
const console_debug_log = gs.loggingService.console_debug_log;

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
            className={SCROLL_TO_BOTTOM_BUTTON_DIV_1_CLASS}
        >
            <div
                className={SCROLL_TO_BOTTOM_BUTTON_DIV_2_CLASS}
            >
                <div
                    className={SCROLL_TO_BOTTOM_BUTTON_DIV_3_CLASS}
                >
                    <button
                        onClick={scrollToBottom}
                        className={SCROLL_TO_BOTTOM_BUTTON_FLOAT_CLASS}
                    >
                        <i
                            // className="a fa-plus my-float"
                            className={SCROLL_TO_BOTTOM_BUTTON_ICON_CLASS}
                        >
                            {/* <FontAwesomeIcon icon='arrow-down' size='lg'/> */}
                            <GsIcons
                                icon='arrow-down'
                                size='lg'
                                additionalIconsFn={iconsLibAiExtras}
                            />
                        </i>
                    </button>
                </div>
            </div>
        </div>
    )
}

const showButton = (element) => (
    // 'visible' and 'hidden' cannot be VISIBLE_CLASS and HIDDEN_CLASS constants, should remain as those fixed strings...
    ((element && element.scrollHeight > element.scrollTop+element.clientHeight) ? 'visible' : 'hidden')
);

const showDebugInfo = (element, elementId) => {
    if (debug && element) {
        console_debug_log(` ScrollToBottomButton (${elementId}) | showButton: ${showButton(element)} | element.scrollTop: ${element.scrollTop} | element.scrollHeight: ${element.scrollHeight} |  element.clientHeight: ${ element.clientHeight} | element.offsetHeight: ${element.offsetHeight}`);
    }
}
