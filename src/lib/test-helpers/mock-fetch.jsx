import React from "react";

// export function mockFetch(data: any, headers: any = null) {
//     if (!headers) {
//         headers = {'Content-Type': 'application/json'};
//     }
//     return jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true,
//         json: () => data,
//         headers: new Headers(headers),
//         text: () => Promise.resolve(JSON.stringify(data)),
//         status: 200,
//         statusText: '',
//       }),
//     );
// }

export function mockGenericsuite() {
    return {
        // Emulate a logged-in user
        authenticationService: {
            currentUserValue: {
              token: 'Mocked token',
            }
        },
        // To fix the error: "TypeError: (0 , _authenticationService.getUserData) is not a function"
        getUserData: () => Promise.resolve({
            error: false,
            error_message: null,
            resultset: {
                _id: 'mockedUserId',
                first_name: 'Mocked firstName',
                last_name: 'Mocked lastName',
                superuser: 0,
            }
        }),
        getCurrentUserData: () => Promise.resolve({resultset: {
            error: false,
            error_message: null,
            resultset: {
                _id: 'mockedUserId',
                first_name: 'Mocked firstName',
                last_name: 'Mocked lastName',
                superuser: 0,
            }
        }}),
        // Emulate images handling
        spark: 'mockedSparkIcon.svg',
        // Emulate console_debug_log
        loggingService: {
            console_debug_log: jest.fn(),
        },
        // Constants
        classNameConstants: {
            BUTTON_LISTING_CLASS: '',
            HIDDEN_CLASS: '',
        },
        generalConstants: {
            imageDirectory: '/mocked/image/directory/',
        },
        // Utilities
        dbService:{
            dbApiService: {
                getOne: jest.fn(),
                getAll: jest.fn(),
                convertId: jest.fn(),
            },
        },
        ui: {
            toggleIdVisibility: jest.fn(),
            isMobileDevice: jest.fn(),
        },
        media: {
            getMediaTypeToRecord: jest.fn(),
            mediaSupported: jest.fn(),
        },
        errorAndReenter: {
            formatCaughtError: jest.fn(),
        },
        genericEditorUtilities: {
            defaultValue: jest.fn(),
        },
        responseHandlersService: {
            usePlainFetch: jest.fn(),
        },
        blobFilesUtilities: {
            getFilenameFromContentDisposition: jest.fn(),
            responseHasFile: jest.fn(),
        },
        dateTimestamp: {
            timestampToDate: jest.fn(),
        },
        urlParams: {
            getUrlParams: () => ({
                q: null,
            }),
        },
        // Emulate genericsuite's componnents
        UserContext: {
            useUser: () => ({
                currentUser: {
                    firstName: 'Mocked firstName',
                    lastName: 'Mocked lastName',
                },
            })
        },
        AppContext: {
            useAppContext: () => ({
                componentMap: {
                    Chatbot: () => (
                        <div>Mocked Chatbot component</div>
                    ),
                },
                theme: {
                    background: '',
                }
            }),
        },
        IconsLib: {
            GsIcons: () => (''),
        },
        App: jest.fn().mockImplementation(
            ({ children }) => (
                <div>{children}</div>
            )
        ),
        HomePage: jest.fn().mockImplementation(
            ({ children }) => (
                <div>{children}</div>
            )
        ),
        ModalPopUp: {
            ModalPopUp: jest.fn(),
        },
        waitAnimationUtility: {
            WaitAnimation: jest.fn(),
        },
        dictUtilities: {
            mergeDicts: jest.fn(),
        },
        idUtilities: {
            getUuidV4: jest.fn(),
            convertId: jest.fn(),
        },
    };
};