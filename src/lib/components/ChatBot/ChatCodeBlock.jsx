import React from 'react';

///////////////////////////

// https://github.com/react-syntax-highlighter/react-syntax-highlighter

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD
// "Prism" has more supported languages and the most intenresting, comprared with  "HLJS"

import { Prism, Light } from 'react-syntax-highlighter';
import { vscDarkPlus as shStyleforPrism } from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';
import { grayscale as shStyleForLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/index.js';

///////////////////////////

import * as gs from "genericsuite";

const LinkifyText = gs.ui.LinkifyText;
const CopyButton = gs.ui.CopyButton;
const renderMarkdownContent = gs.ui.renderMarkdownContent;

const prismLanguajes = getPrismLanguajes();

export const ChatCodeBlock = ({ children, shType = "prism" }) => {
    // Regular expression to match code blocks enclosed in ```
    const codeRegex = /```([\s\S]*?)```/g;

    // Split content into parts with and without code blocks
    const parts = children.split(codeRegex);

    return (
        <>
            {parts.map((part, index) => {
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
                    return (
                        <div key={`${index}-other`}>
                            {renderMarkdownContent(part)}
                        </div>
                    );
                } else {
                    // Handle code blocks
                    let content = part.trim();
                    let language = content.split('\n')[0];
                    
                    // Special handling for plaintext
                    if (language === 'plaintext') {
                        content = content.substring(language.length + 1).trim();
                        return (
                            <div key={`${index}-plaintext`}>
                                {renderMarkdownContent(content)}
                            </div>
                        );
                    }

                    content = content.substring(language.length + 1).trim();
                    return (
                        <div key={`${index}-content-wrapper`}>
                            <div 
                                style={{ position: 'relative' }}
                            >
                                <div
                                    key={`${index}-language`}
                                    style={{
                                        backgroundColor: 'rgb(30, 30, 30)',
                                        color: 'wheat',
                                        marginTop: '10px',
                                        padding: '10px',
                                        overflowX: 'auto',
                                    }}
                                >
                                    {language}
                                </div>
                                <div key={`${index}-content`}>
                                    {shType === "prism" && prismLanguajes.includes(language) ? (
                                        <Prism
                                            language={language}
                                            style={shStyleforPrism}
                                            wrapLongLines={true}
                                        >
                                            {content}
                                        </Prism>
                                    ) : (
                                        // If the language is not in the prismLanguajes list, it's not a language, it's a comment...
                                        // So Prism is not good for comments because it doesn't wrap long lines even if wrapLongLines is true, and Light does
                                        <Light
                                            language={language}
                                            style={shStyleForLight}
                                            wrapLongLines={true}
                                        >
                                            {content}
                                        </Light>
                                    )}
                                    <CopyButton text={content} />
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

function getPrismLanguajes() {
    return [
        'abap',
        'abnf',
        'actionscript',
        'ada',
        'agda',
        'al',
        'antlr4',
        'apacheconf',
        'apex',
        'apl',
        'applescript',
        'aql',
        'arduino',
        'arff',
        'asciidoc',
        'asm6502',
        'asmatmel',
        'aspnet',
        'autohotkey',
        'autoit',
        'avisynth',
        'avroIdl',
        'avro-idl',
        'bash',
        'basic',
        'batch',
        'bbcode',
        'bicep',
        'birb',
        'bison',
        'bnf',
        'brainfuck',
        'brightscript',
        'bro',
        'bsl',
        'c',
        'cfscript',
        'chaiscript',
        'cil',
        'clike',
        'clojure',
        'cmake',
        'cobol',
        'coffeescript',
        'concurnas',
        'coq',
        'cpp',
        'crystal',
        'csharp',
        'cshtml',
        'csp',
        'cssExtras',
        'css-extras',
        'css',
        'csv',
        'cypher',
        'd',
        'dart',
        'dataweave',
        'dax',
        'dhall',
        'diff',
        'django',
        'dnsZoneFile',
        'dns-zone-file',
        'docker',
        'dot',
        'ebnf',
        'editorconfig',
        'eiffel',
        'ejs',
        'elixir',
        'elm',
        'erb',
        'erlang',
        'etlua',
        'excelFormula',
        'excel-formula',
        'factor',
        'falselang',
        'false',
        'firestoreSecurityRules',
        'firestore-security-rules',
        'flow',
        'fortran',
        'fsharp',
        'ftl',
        'gap',
        'gcode',
        'gdscript',
        'gedcom',
        'gherkin',
        'git',
        'glsl',
        'gml',
        'gn',
        'goModule',
        'go-module',
        'go',
        'graphql',
        'groovy',
        'haml',
        'handlebars',
        'haskell',
        'haxe',
        'hcl',
        'hlsl',
        'hoon',
        'hpkp',
        'hsts',
        'http',
        'ichigojam',
        'icon',
        'icuMessageFormat',
        'icu-message-format',
        'idris',
        'iecst',
        'ignore',
        'inform7',
        'ini',
        'io',
        'j',
        'java',
        'javadoc',
        'javadoclike',
        'javascript',
        'javastacktrace',
        'jexl',
        'jolie',
        'jq',
        'jsExtras',
        'js-extras',
        'jsTemplates',
        'js-templates',
        'jsdoc',
        'json',
        'json5',
        'jsonp',
        'jsstacktrace',
        'jsx',
        'julia',
        'keepalived',
        'keyman',
        'kotlin',
        'kumir',
        'kusto',
        'latex',
        'latte',
        'less',
        'lilypond',
        'liquid',
        'lisp',
        'livescript',
        'llvm',
        'log',
        'lolcode',
        'lua',
        'magma',
        'makefile',
        'markdown',
        'markupTemplating',
        'markup-templating',
        'markup',
        'matlab',
        'maxscript',
        'mel',
        'mermaid',
        'mizar',
        'mongodb',
        'monkey',
        'moonscript',
        'n1ql',
        'n4js',
        'nand2tetrisHdl',
        'nand2tetris-hdl',
        'naniscript',
        'nasm',
        'neon',
        'nevod',
        'nginx',
        'nim',
        'nix',
        'nsis',
        'objectivec',
        'ocaml',
        'opencl',
        'openqasm',
        'oz',
        'parigp',
        'parser',
        'pascal',
        'pascaligo',
        'pcaxis',
        'peoplecode',
        'perl',
        'phpExtras',
        'php-extras',
        'php',
        'phpdoc',
        'plsql',
        'powerquery',
        'powershell',
        'processing',
        'prolog',
        'promql',
        'properties',
        'protobuf',
        'psl',
        'pug',
        'puppet',
        'pure',
        'purebasic',
        'purescript',
        'python',
        'q',
        'qml',
        'qore',
        'qsharp',
        'r',
        'racket',
        'reason',
        'regex',
        'rego',
        'renpy',
        'rest',
        'rip',
        'roboconf',
        'robotframework',
        'ruby',
        'rust',
        'sas',
        'sass',
        'scala',
        'scheme',
        'scss',
        'shellSession',
        'shell-session',
        'smali',
        'smalltalk',
        'smarty',
        'sml',
        'solidity',
        'solutionFile',
        'solution-file',
        'soy',
        'sparql',
        'splunkSpl',
        'splunk-spl',
        'sqf',
        'sql',
        'squirrel',
        'stan',
        'stylus',
        'swift',
        'systemd',
        't4Cs',
        't4-cs',
        't4Templating',
        't4-templating',
        't4Vb',
        't4-vb',
        'tap',
        'tcl',
        'textile',
        'toml',
        'tremor',
        'tsx',
        'tt2',
        'turtle',
        'twig',
        'typescript',
        'typoscript',
        'unrealscript',
        'uorazor',
        'uri',
        'v',
        'vala',
        'vbnet',
        'velocity',
        'verilog',
        'vhdl',
        'vim',
        'visualBasic',
        'visual-basic',
        'warpscript',
        'wasm',
        'webIdl',
        'web-idl',
        'wiki',
        'wolfram',
        'wren',
        'xeora',
        'xmlDoc',
        'xml-doc',
        'xojo',
        'xquery',
        'yaml',
        'yang',
        'zig',
    ];
}
