import React, { useEffect } from 'react'

const console_debug_log = require("genericsuite").loggingService.console_debug_log;

const debug = false;

export const GoToTheBottom = ({ elementId, elementsToRender }) => {
    const objDiv = document.getElementById(elementId);
    if (debug) {
        console_debug_log(`GoToTheBottom (${elementId}) | objDiv:`, objDiv)
    }
    useEffect(() => {
        if (objDiv && elementsToRender !== '') {
            // objDiv.scrollIntoView(false);
            objDiv.scrollTop = objDiv.scrollHeight;
            if (debug) {
                console_debug_log(`GoToTheBottom (${elementId}) | objDiv.scrollTop: ${objDiv.scrollTop} | objDiv.scrollHeight: ${objDiv.scrollHeight}`)
            }
            // Sometimes it needs a second change, specially when the object is being populated
            // objDiv.scrollTop = objDiv.scrollHeight;
        }
    }, [objDiv, elementsToRender, elementId]);
    return (<></>);
}
