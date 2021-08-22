const index_browsermodern = require("./index-browsermodern.es")
// @ponicode
describe("index_browsermodern.defineProperty", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.defineProperty("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "/dummy_name", "Dillenberg", { writable: false, configurable: false, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.defineProperty("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "dummyname", "Dillenberg", { writable: false, configurable: true, enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.defineProperty("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "dummyName", "elio@example.com", { writable: true, configurable: false, enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.defineProperty("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "dummy_name", "Elio", { writable: true, configurable: true, enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.defineProperty("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "dummyName123", "Dillenberg", { writable: false, configurable: false, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.defineProperty(undefined, "", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.defineGetter", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.defineGetter(false, "dummyName123", "District", { configurable: false, enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.defineGetter(false, "dummyName", "Future", { configurable: false, enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.defineGetter(false, "dummyName", "Corporate", { configurable: true, enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.defineGetter(true, "dummyName", "Legacy", { configurable: false, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.defineGetter(false, "dummyName", "Corporate", { configurable: false, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.defineGetter(false, "", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.defineSetter", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.defineSetter("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "$dummy_name", "Corporate", { configurable: true, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.defineSetter("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "DUMMYNAME", "District", { configurable: true, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.defineSetter("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "dummyName", "Legacy", { configurable: false, enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.defineSetter("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "dummyName123", "Legacy", { configurable: false, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.defineSetter("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "dummy_name", "Legacy", { configurable: true, enumerable: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.defineSetter(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.defineLazyProperty", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyProperty(false, "DUMMYNAME", "callback detected, not supported yet", { enumerable: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyProperty(false, "/dummy_name", "callback detected, not supported yet", { enumerable: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyProperty(true, "dummyName", "callback detected, not supported yet", { enumerable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyProperty(false, "$dummy_name", "callback detected, not supported yet", { enumerable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyProperty(true, "dummyName123", "callback detected, not supported yet", { enumerable: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyProperty(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.defineLazyConstant", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyConstant(true, "$dummy_name", "callback detected, not supported yet", { enumerable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyConstant(true, "dummy_name", "callback detected, not supported yet", { enumerable: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyConstant(true, "dummy_name", "callback detected, not supported yet", { enumerable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyConstant(false, "dummyname", "callback detected, not supported yet", { enumerable: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyConstant(false, "DUMMYNAME", "callback detected, not supported yet", { enumerable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.defineLazyConstant(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.definePrototypeProperty", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeProperty({ prototype: 0 }, "dummyName", "Elio", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeProperty({ prototype: 1 }, "dummyname", "Dillenberg", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeProperty({ prototype: -100 }, "dummy_name/", "Elio", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeProperty({ prototype: -100 }, "$dummy_name", "elio@example.com", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeProperty({ prototype: 1 }, "$dummy_name", "Dillenberg", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeProperty(undefined, "", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.definePrototypeConstant", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeConstant({ prototype: 0 }, "$dummy_name", "Dillenberg", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeConstant({ prototype: -5.48 }, "dummy_name", "elio@example.com", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeConstant({ prototype: 100 }, "dummyName", "Dillenberg", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeConstant({ prototype: 1 }, "dummyName", "Dillenberg", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeConstant({ prototype: 1 }, "dummy_name/", "Dillenberg", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeConstant({ prototype: NaN }, "", "", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.definePrototypeGetter", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeGetter({ prototype: -100 }, "dummyname", "Future", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeGetter({ prototype: 0 }, "DUMMYNAME", "Legacy", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeGetter({ prototype: -100 }, "/dummy_name", "Legacy", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeGetter({ prototype: 0 }, "dummyName123", "Legacy", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeGetter({ prototype: -100 }, "dummyName123", "Legacy", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeGetter(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.definePrototypeSetter", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeSetter({ prototype: 0 }, "dummy_name/", "Legacy", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeSetter({ prototype: 0 }, "dummyname", "District", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeSetter({ prototype: 1 }, "dummy_name", "Corporate", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeSetter({ prototype: 100 }, "dummy_name", "Future", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeSetter({ prototype: 0 }, "DUMMYNAME", "Future", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeSetter({ prototype: Infinity }, "", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.definePrototypeLazyProperty", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyProperty({ prototype: 1 }, "dummyName", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyProperty({ prototype: 0 }, "DUMMYNAME", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyProperty({ prototype: 0 }, "dummyname", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyProperty({ prototype: -100 }, "dummyname", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyProperty({ prototype: 100 }, "dummyName123", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyProperty(undefined, "", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.definePrototypeLazyConstant", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyConstant({ prototype: -100 }, "/dummy_name", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyConstant({ prototype: 0 }, "$dummy_name", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyConstant({ prototype: -5.48 }, "dummyname", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyConstant({ prototype: -100 }, "dummyName123", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyConstant({ prototype: 1 }, "DUMMYNAME", "callback detected, not supported yet", ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.definePrototypeLazyConstant({ prototype: NaN }, undefined, undefined, ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.defineProperties", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.defineProperties(true, { key4: -5.48, 7: 100 }, { configurable: "Elio", writable: "dedicated", enumerable: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.defineProperties(true, { key4: 0, 7: 1 }, { configurable: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.defineProperties(true, { key4: -100, 7: 0 }, { configurable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.defineProperties(false, { key4: 1, 7: -100 }, { writable: "methodical", enumerable: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.defineProperties(true, { key4: -100, 7: -100 }, { configurable: "elio@example.com", writable: "logistical", enumerable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.defineProperties(undefined, { key4: -Infinity, 7: -Infinity }, { enumerable: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index_browsermodern.defineConstants", () => {
    test("0", () => {
        let callFunction = () => {
            index_browsermodern.defineConstants(true, true, { enumerable: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index_browsermodern.defineConstants(true, false, { enumerable: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index_browsermodern.defineConstants(false, true, { enumerable: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index_browsermodern.defineConstants(false, true, { enumerable: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index_browsermodern.defineConstants(false, false, { enumerable: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index_browsermodern.defineConstants(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
