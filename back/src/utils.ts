const {exec} = require('child_process');
const {RESPONSE} = require('./config');

export const execCommand = (
    command,
    callbackOut = x => x,
    callbackErr = callbackOut,
    options = {},
) =>
    exec(command, options, (err, out) =>
        err
            ? callbackErr(err) && console.log(err)
            : callbackOut(out)
    );

export const execCommandWithRes = (
    command: string,
    res,
    callbackOut = (x: Object) => x,
    callbackErr = RESPONSE.NO_ROUT(res),
    options = {},
) =>
    execCommand(
        command,
        json => res.json(callbackOut(json)),
        callbackErr,
        options,
    );

export const arrayFromOut = (out: string | Object) =>
    typeof out === 'string'
        ? out
            .split('\n')
            .slice(0, -1)
        : out;

export const getPage = (
    array: string[],
    pageSize: number = array.length,
    pageNumber = 1
) =>
    array.splice((pageNumber - 1) * pageSize, pageSize);