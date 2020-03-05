let acceptApiResult: undefined | null | Array<string>;

acceptApiResult = undefined;
console.log(acceptApiResult);

acceptApiResult = null;
console.log(acceptApiResult);

acceptApiResult = new Array<string>();
acceptApiResult.push("A");
acceptApiResult.push("B");
console.log(acceptApiResult);