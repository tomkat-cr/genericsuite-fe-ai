import React, { useState, useEffect } from 'react';

import * as gs from "genericsuite";

const useUser = gs.UserContext.useUser;
const console_debug_log = gs.loggingService.console_debug_log;

const debug = false;

export const HomePage = ({ children }) => {
    if (debug) console_debug_log('>>>> genericsuite-fe-ai HomePage <<<<');
    const { currentUser } = useUser();
    return (
        <gs.HomePage>
            <>
                {!currentUser &&
                    (<p><a href="/#/login">Please Sign-in</a></p>)
                }
                {currentUser &&
                    (<p>Hi {currentUser.firstName}! Welcome to the GenericSuite FE AI (frontend version)</p>)
                }
            </>
            {children}
        </gs.HomePage>
    );
}
