import { expect } from 'chai';
import {createMessageObject, createMessageObjectString} from "../../back/src/configUtils";
import {IWithMessage} from "../../back/src/types";

describe('createMessageObject', () => {
  it(`right format`, () => {
    const messageValue = 'hello';
    const message: IWithMessage = {message: messageValue};
    const result = createMessageObject(messageValue);
    expect(result).to.eql(message);
  });
});

describe('createMessageObjectString', () => {
  it(`right format`, () => {
    const messageValue = 'hello';
    const message: IWithMessage = {message: messageValue};
    const result = createMessageObjectString(messageValue);
    expect(result).to.equal(JSON.stringify(message));
  });
});