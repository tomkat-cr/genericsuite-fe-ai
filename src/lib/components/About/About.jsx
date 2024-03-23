import React from 'react'

import * as gs from "genericsuite";

// const GsAbout = gs.About;
const GsAboutBody = gs.AboutBody;
const console_debug_log = gs.loggingService.console_debug_log;

const debug = false;

export const AboutBody = ({ children }) => {
    if (debug) console_debug_log('>>>> genericsuite-fe-ai AboutBody <<<<');
    return (
        <GsAboutBody>
            <>
                <p>
                    Welcome to GenericSuite AI, a comprehensive software solution designed to enhance your productivity and streamline your workflows. This repository contains the frontend part of GenericSuite AI, equipped with AI ChatBot tools, a customizable CRUD editor, login interface and a suite of tools to kickstart your development process.
                </p>
                <p>
                    2024-03-11 | Carlos J. Ramirez
                </p>
                {children}
            </>
        </GsAboutBody>
    )
}
