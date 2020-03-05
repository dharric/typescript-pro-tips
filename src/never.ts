function error(): never {
    throw Error("failed!");
}
function neverFinish(): never {
    while(true) {}
}

function processSomeString(msg: string): string | never {
    if(msg) {
        // do some string work here
        return "I finished processing your string.";
    }
    throw Error("no message given error!");
}
console.log(processSomeString(""));