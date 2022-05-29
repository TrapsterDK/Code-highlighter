(function(){
    //https://github.com/TrapsterDK/prism-map-language-to-extension
    //simple language to extension map
    let language_code_to_extension_map = {
        "abap": [
            "abap"
        ],
        "abnf": [
            "abnf"
        ],
        "actionscript": [
            "as"
        ],
        "ada": [
            "adb",
            "ada",
            "ads"
        ],
        "agda": [
            "agda"
        ],
        "al": [
            "al"
        ],
        "antlr4": [
            "g4",
            "g"
        ],
        "apacheconf": [
            "apacheconf",
            "vhost"
        ],
        "apex": [
            "cls"
        ],
        "apl": [
            "apl",
            "dyalog"
        ],
        "applescript": [
            "applescript",
            "scpt"
        ],
        "aql": [
            "aql"
        ],
        "arduino": [
            "ino"
        ],
        "arff": [
            "arff"
        ],
        "armasm": [
            "asm",
            "s"
        ],
        "arturo": [
            "art"
        ],
        "asciidoc": [
            "asciidoc",
            "adoc",
            "asc"
        ],
        "asm6502": [
            "asm",
            "s"
        ],
        "asmatmel": [
            "asm",
            "s"
        ],
        "aspnet": [
            "aspx",
            "cshtml",
            "vbhtml"
        ],
        "autohotkey": [
            "ahk",
            "ahkl"
        ],
        "autoit": [
            "au3"
        ],
        "avisynth": [
            "avs"
        ],
        "avro-idl": [
            "avdl",
            "avpr",
            "avsc"
        ],
        "awk": [
            "awk",
            "auk",
            "gawk",
            "mawk",
            "nawk"
        ],
        "bash": [
            "sh",
            "bash",
            "bats",
            "cgi",
            "command",
            "fcgi",
            "ksh",
            "sh.in",
            "tmux",
            "tool",
            "zsh"
        ],
        "basic": [],
        "batch": [
            "bat",
            "cmd",
            "btm"
        ],
        "bbcode": [],
        "bicep": [
            "bicep"
        ],
        "birb": [
            "birb",
            "bird"
        ],
        "bison": [
            "bison"
        ],
        "bnf": [
            "bnf"
        ],
        "brainfuck": [
            "b",
            "bf"
        ],
        "brightscript": [
            "brs"
        ],
        "bro": [
            "bro"
        ],
        "bsl": [],
        "c": [
            "c",
            "cats",
            "h",
            "idc",
            "w"
        ],
        "cfscript": [
            "cfm",
            "cfc"
        ],
        "chaiscript": [],
        "cil": [],
        "clike": [],
        "clojure": [
            "clj",
            "boot",
            "cl2",
            "cljc",
            "cljs",
            "cljs.hl",
            "cljscm",
            "cljx",
            "hic"
        ],
        "cmake": [
            "cmake",
            "cmake.in"
        ],
        "cobol": [
            "cob",
            "cbl",
            "ccp",
            "cobol",
            "cpy"
        ],
        "coffeescript": [
            "coffee",
            "_coffee",
            "cake",
            "cjsx",
            "cson",
            "iced"
        ],
        "concurnas": [
            "conc"
        ],
        "cooklang": [
            "cook"
        ],
        "coq": [
            "coq",
            "v"
        ],
        "cpp": [
            "cpp",
            "c++",
            "cc",
            "cp",
            "cxx",
            "h",
            "h++",
            "hh",
            "hpp",
            "hxx",
            "inc",
            "inl",
            "ipp",
            "tcc",
            "tpp"
        ],
        "crystal": [
            "cr"
        ],
        "csharp": [
            "cs",
            "cake",
            "cshtml",
            "csx"
        ],
        "cshtml": [
            "cshtml"
        ],
        "csp": [
            "csp"
        ],
        "css": [
            "css"
        ],
        "css-extras": [],
        "csv": [
            "csv"
        ],
        "cue": [
            "cue"
        ],
        "cypher": [
            "cypher",
            "cyp"
        ],
        "d": [
            "d",
            "di"
        ],
        "dart": [
            "dart"
        ],
        "dataweave": [],
        "dax": [
            "dax"
        ],
        "dhall": [
            "dhall"
        ],
        "diff": [
            "diff",
            "patch"
        ],
        "django": [],
        "dns-zone-file": [
            "zone"
        ],
        "docker": [
            "dockerfile"
        ],
        "dot": [
            "dot"
        ],
        "ebnf": [
            "ebnf"
        ],
        "editorconfig": [
            "editorconfig"
        ],
        "eiffel": [
            "e"
        ],
        "ejs": [
            "ejs"
        ],
        "elixir": [
            "ex",
            "exs"
        ],
        "elm": [
            "elm"
        ],
        "erb": [
            "erb"
        ],
        "erlang": [
            "erl",
            "es",
            "escript",
            "hrl",
            "xrl",
            "yrl"
        ],
        "etlua": [
            "etlua"
        ],
        "excel-formula": [
            "xlsx",
            "xls"
        ],
        "factor": [
            "factor"
        ],
        "false": [],
        "firestore-security-rules": [],
        "flow": [
            "flow"
        ],
        "fortran": [
            "f90",
            "f",
            "f03",
            "f08",
            "f77",
            "f95",
            "for",
            "fpp"
        ],
        "fsharp": [
            "fs",
            "fsi",
            "fsx"
        ],
        "ftl": [
            "ftl"
        ],
        "gap": [
            "g",
            "gap",
            "gd",
            "gi",
            "tst"
        ],
        "gcode": [
            "g",
            "gco",
            "gcode"
        ],
        "gdscript": [
            "gd"
        ],
        "gedcom": [
            "gedcom"
        ],
        "gettext": [
            "po"
        ],
        "gherkin": [
            "feature"
        ],
        "git": [
            "git"
        ],
        "glsl": [
            "glsl",
            "fp",
            "frag",
            "frg",
            "fs",
            "fsh",
            "fshader",
            "geo",
            "geom",
            "glslv",
            "gshader",
            "shader",
            "vert",
            "vrx",
            "vsh",
            "vshader"
        ],
        "gml": [
            "gml"
        ],
        "gn": [
            "gn"
        ],
        "go": [
            "go"
        ],
        "go-module": [],
        "gradle": [
            "gradle"
        ],
        "graphql": [
            "graphql"
        ],
        "groovy": [
            "groovy",
            "grt",
            "gtpl",
            "gvy"
        ],
        "haml": [
            "haml",
            "haml.deface"
        ],
        "handlebars": [
            "handlebars",
            "hbs"
        ],
        "haskell": [
            "hs",
            "hsc"
        ],
        "haxe": [
            "hx",
            "hxsl"
        ],
        "hcl": [
            "hcl",
            "tf"
        ],
        "hlsl": [
            "hlsl",
            "fx",
            "fxh",
            "hlsli"
        ],
        "hoon": [],
        "hpkp": [],
        "hsts": [],
        "http": [
            "http"
        ],
        "ichigojam": [],
        "icon": [],
        "icu-message-format": [],
        "idris": [
            "idr",
            "lidr"
        ],
        "iecst": [
            "cst"
        ],
        "ignore": [
            "ignore",
            "gitignore",
            "hgignore",
            "npmignore"
        ],
        "inform7": [
            "ni",
            "i7x"
        ],
        "ini": [
            "ini",
            "cfg",
            "prefs",
            "pro",
            "properties"
        ],
        "io": [
            "io"
        ],
        "j": [
            "ijs"
        ],
        "java": [
            "java"
        ],
        "javadoc": [],
        "javadoclike": [],
        "javascript": [
            "js",
            "_js",
            "bones",
            "es",
            "es6",
            "frag",
            "gs",
            "jake",
            "jsb",
            "jscad",
            "jsfl",
            "jsm",
            "jss",
            "njs",
            "pac",
            "sjs",
            "ssjs",
            "sublime-build",
            "sublime-commands",
            "sublime-completions",
            "sublime-keymap",
            "sublime-macro",
            "sublime-menu",
            "sublime-mousemap",
            "sublime-project",
            "sublime-settings",
            "sublime-theme",
            "sublime-workspace",
            "sublime_metrics",
            "sublime_session",
            "xsjs",
            "xsjslib"
        ],
        "javastacktrace": [],
        "jexl": [],
        "jolie": [],
        "jq": [],
        "js-extras": [],
        "js-templates": [],
        "jsdoc": [],
        "json": [
            "json",
            "geojson",
            "lock",
            "topojson"
        ],
        "json5": [
            "json5"
        ],
        "jsonp": [
            "jsonp"
        ],
        "jsstacktrace": [],
        "jsx": [
            "jsx"
        ],
        "julia": [
            "jl"
        ],
        "keepalived": [],
        "keyman": [
            "kmp"
        ],
        "kotlin": [
            "kt",
            "ktm",
            "kts"
        ],
        "kumir": [],
        "kusto": [],
        "latex": [
            "tex",
            "aux",
            "bbx",
            "bib",
            "cbx",
            "cls",
            "dtx",
            "ins",
            "lbx",
            "ltx",
            "mkii",
            "mkiv",
            "mkvi",
            "sty",
            "toc"
        ],
        "latte": [
            "latte"
        ],
        "less": [
            "less"
        ],
        "lilypond": [
            "ly",
            "ily"
        ],
        "linker-script": [
            "ld"
        ],
        "liquid": [
            "liquid"
        ],
        "lisp": [
            "lsp",
            "lisp"
        ],
        "livescript": [
            "ls",
            "_ls"
        ],
        "llvm": [
            "ll"
        ],
        "log": [
            "log"
        ],
        "lolcode": [
            "lol"
        ],
        "lua": [
            "lua",
            "fcgi",
            "nse",
            "pd_lua",
            "rbxs",
            "wlua"
        ],
        "magma": [
            "magma",
            "mag"
        ],
        "makefile": [
            "mak",
            "d",
            "mk",
            "mkfile"
        ],
        "markdown": [
            "md",
            "markdown",
            "mkd",
            "mkdn",
            "mkdown",
            "ron"
        ],
        "markup": [
            "html",
            "htm",
            "html.hl",
            "inc",
            "st",
            "xht",
            "xhtml",
            "svg",
            "xml",
            "ant",
            "axml",
            "ccxml",
            "clixml",
            "cproject",
            "csl",
            "csproj",
            "ct",
            "dita",
            "ditamap",
            "ditaval",
            "dll.config",
            "dotsettings",
            "filters",
            "fsproj",
            "fxml",
            "glade",
            "gml",
            "grxml",
            "iml",
            "ivy",
            "jelly",
            "jsproj",
            "kml",
            "launch",
            "mdpolicy",
            "mm",
            "mod",
            "mxml",
            "nproj",
            "nuspec",
            "odd",
            "osm",
            "plist",
            "pluginspec",
            "props",
            "ps1xml",
            "psc1",
            "pt",
            "rdf",
            "rss",
            "scxml",
            "srdf",
            "storyboard",
            "stTheme",
            "sublime-snippet",
            "targets",
            "tmCommand",
            "tml",
            "tmLanguage",
            "tmPreferences",
            "tmSnippet",
            "tmTheme",
            "ts",
            "tsx",
            "ui",
            "urdf",
            "ux",
            "vbproj",
            "vcxproj",
            "vssettings",
            "vxml",
            "wsdl",
            "wsf",
            "wxi",
            "wxl",
            "wxs",
            "x3d",
            "xacro",
            "xaml",
            "xib",
            "xlf",
            "xliff",
            "xmi",
            "xml.dist",
            "xproj",
            "xsd",
            "xul",
            "zcml"
        ],
        "markup-templating": [],
        "matlab": [
            "matlab",
            "m"
        ],
        "maxscript": [
            "ms",
            "mcr"
        ],
        "mel": [
            "mel"
        ],
        "mermaid": [
            "mermaid",
            "mmd"
        ],
        "mizar": [
            "miz",
            "voc"
        ],
        "mongodb": [
            "bson",
            "ns"
        ],
        "monkey": [
            "monkey"
        ],
        "moonscript": [
            "moon"
        ],
        "n1ql": [
            "n1ql"
        ],
        "n4js": [],
        "nand2tetris-hdl": [],
        "naniscript": [
            "nani"
        ],
        "nasm": [
            "asm",
            "s"
        ],
        "neon": [
            "neon"
        ],
        "nevod": [
            "np"
        ],
        "nginx": [
            "nginxconf",
            "vhost"
        ],
        "nim": [
            "nim"
        ],
        "nix": [
            "nix"
        ],
        "nsis": [
            "nsi",
            "nsh"
        ],
        "objectivec": [
            "m",
            "h"
        ],
        "ocaml": [
            "ml",
            "eliom",
            "eliomi",
            "ml4",
            "mli",
            "mll",
            "mly"
        ],
        "odin": [
            "odin"
        ],
        "opencl": [
            "cl",
            "opencl"
        ],
        "openqasm": [],
        "oz": [
            "oz"
        ],
        "parigp": [],
        "parser": [],
        "pascal": [
            "pas",
            "dfm",
            "dpr",
            "inc",
            "lpr",
            "pp"
        ],
        "pascaligo": [],
        "pcaxis": [],
        "peoplecode": [],
        "perl": [
            "pl",
            "al",
            "cgi",
            "fcgi",
            "perl",
            "ph",
            "plx",
            "pm",
            "pod",
            "psgi",
            "t"
        ],
        "php": [
            "php",
            "aw",
            "ctp",
            "fcgi",
            "inc",
            "php3",
            "php4",
            "php5",
            "phps",
            "phpt"
        ],
        "php-extras": [],
        "phpdoc": [],
        "plant-uml": [
            "plantuml",
            "pu"
        ],
        "plsql": [
            "pls",
            "pck",
            "pkb",
            "pks",
            "plb",
            "plsql",
            "sql"
        ],
        "powerquery": [
            "mez"
        ],
        "powershell": [
            "ps1",
            "psd1",
            "psm1"
        ],
        "processing": [
            "pde"
        ],
        "prolog": [
            "pl",
            "pro",
            "prolog",
            "yap"
        ],
        "promql": [],
        "properties": [
            "properties"
        ],
        "protobuf": [
            "proto",
            "pb"
        ],
        "psl": [
            "psl"
        ],
        "pug": [
            "pug"
        ],
        "puppet": [
            "pp"
        ],
        "pure": [
            "pd"
        ],
        "purebasic": [
            "pb",
            "pbi"
        ],
        "purescript": [
            "purs"
        ],
        "python": [
            "py",
            "bzl",
            "cgi",
            "fcgi",
            "gyp",
            "lmi",
            "pyde",
            "pyp",
            "pyt",
            "pyw",
            "rpy",
            "tac",
            "wsgi",
            "xpy"
        ],
        "q": [
            "q"
        ],
        "qml": [
            "qml",
            "qbs"
        ],
        "qore": [
            "q",
            "qm",
            "qtest"
        ],
        "qsharp": [
            "qsharp"
        ],
        "r": [
            "r",
            "rd",
            "rsx"
        ],
        "racket": [
            "rkt",
            "rktd",
            "rktl",
            "scrbl"
        ],
        "reason": [
            "re",
            "rei"
        ],
        "regex": [],
        "rego": [],
        "renpy": [
            "rpy"
        ],
        "rescript": [],
        "rest": [
            "rest"
        ],
        "rip": [
            "rip"
        ],
        "roboconf": [],
        "robotframework": [
            "robot"
        ],
        "ruby": [
            "rb",
            "builder",
            "fcgi",
            "gemspec",
            "god",
            "irbrc",
            "jbuilder",
            "mspec",
            "pluginspec",
            "podspec",
            "rabl",
            "rake",
            "rbuild",
            "rbw",
            "rbx",
            "ru",
            "ruby",
            "thor",
            "watchr"
        ],
        "rust": [
            "rs",
            "rs.in"
        ],
        "sas": [
            "sas"
        ],
        "sass": [
            "sass"
        ],
        "scala": [
            "scala",
            "sbt",
            "sc"
        ],
        "scheme": [
            "scm",
            "sld",
            "sls",
            "sps",
            "ss"
        ],
        "scss": [
            "scss"
        ],
        "shell-session": [
            "sh-session"
        ],
        "smali": [
            "smali"
        ],
        "smalltalk": [
            "st",
            "cs"
        ],
        "smarty": [
            "tpl"
        ],
        "sml": [
            "sml"
        ],
        "solidity": [
            "sol"
        ],
        "solution-file": [
            "sln"
        ],
        "soy": [
            "soy"
        ],
        "sparql": [
            "sparql",
            "rq"
        ],
        "splunk-spl": [
            "spl"
        ],
        "sqf": [
            "sqf",
            "hqf"
        ],
        "sql": [
            "sql",
            "cql",
            "ddl",
            "inc",
            "prc",
            "tab",
            "udf",
            "viw"
        ],
        "squirrel": [
            "nut"
        ],
        "stan": [
            "stan"
        ],
        "stata": [
            "do",
            "ado",
            "doh",
            "ihlp",
            "mata",
            "matah",
            "sthlp"
        ],
        "stylus": [
            "styl"
        ],
        "supercollider": [
            "sc",
            "scd"
        ],
        "swift": [
            "swift"
        ],
        "systemd": [],
        "t4-cs": [],
        "t4-templating": [],
        "t4-vb": [],
        "tap": [
            "tap"
        ],
        "tcl": [
            "tcl",
            "adp",
            "tm"
        ],
        "textile": [
            "textile"
        ],
        "toml": [
            "toml"
        ],
        "tremor": [
            "tremor",
            "trickle"
        ],
        "tsx": [
            "tsx"
        ],
        "tt2": [
            "tt2"
        ],
        "turtle": [
            "ttl"
        ],
        "twig": [
            "twig"
        ],
        "typescript": [
            "ts",
            "tsx"
        ],
        "typoscript": [],
        "unrealscript": [
            "uc"
        ],
        "uorazor": [],
        "uri": [],
        "v": [
            "v"
        ],
        "vala": [
            "vala",
            "vapi"
        ],
        "vbnet": [
            "vbnet",
            "vb"
        ],
        "velocity": [
            "vm"
        ],
        "verilog": [
            "v",
            "veo"
        ],
        "vhdl": [
            "vhdl",
            "vhd",
            "vhf",
            "vhi",
            "vho",
            "vhs",
            "vht",
            "vhw"
        ],
        "vim": [],
        "visual-basic": [
            "vb",
            "bas",
            "cls",
            "frm",
            "frx",
            "vba",
            "vbhtml",
            "vbs"
        ],
        "warpscript": [
            "warp"
        ],
        "wasm": [
            "asm",
            "s"
        ],
        "web-idl": [
            "webidl"
        ],
        "wgsl": [
            "wgsl"
        ],
        "wiki": [],
        "wolfram": [
            "mathematica",
            "cdf",
            "m",
            "ma",
            "mt",
            "nb",
            "nbp",
            "wl",
            "wlt"
        ],
        "wren": [
            "wren"
        ],
        "xeora": [],
        "xml-doc": [],
        "xojo": [
            "xojo_code",
            "xojo_menu",
            "xojo_report",
            "xojo_script",
            "xojo_toolbar",
            "xojo_window"
        ],
        "xquery": [
            "xquery",
            "xq",
            "xql",
            "xqm",
            "xqy"
        ],
        "yaml": [
            "yml",
            "reek",
            "rviz",
            "sublime-syntax",
            "syntax",
            "yaml",
            "yaml-tmlanguage"
        ],
        "yang": [
            "yang"
        ],
        "zig": [
            "zig"
        ]
    }

    function get_language_from_extension(ext) {
        for (const [key, value] of Object.entries(language_code_to_extension_map)) {
            if(value.includes(ext)) return key;
        }

        return null
    }

    function get_extension_for_language(ext) {
        if(!language_code_to_extension_map.hasOwnProperty(ext)) return null
        if(language_code_to_extension_map[ext].length <= 0) return null
        return language_code_to_extension_map[ext][0]
    }

    //export function
    window.get_language_from_extension = get_language_from_extension
    window.get_extension_for_language = get_extension_for_language
})()