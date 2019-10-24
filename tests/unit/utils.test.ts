import { expect } from 'chai';
import {arrayFromOut, getPage} from "../../back/src/utils";

describe('arrayFromOut', () => {
  it(`normal out`, () => {
    const out = `line 1
line 2
line 3
`;
    const result = arrayFromOut(out);
    const expectResult = ['line 1', 'line 2', 'line 3'];
    expect(result).to.eql(expectResult);
  });

  it(`empty out`, () => {
    const out = ``;
    const result = arrayFromOut(out);
    const expectResult = [];
    expect(result).to.eql(expectResult);
  });
});

describe('getPage', () => {
  it(`only with pages parameter`, () => {
    const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const result = getPage(pages);
    expect(result).to.eql(pages);
  });

  it(`first page`, () => {
    const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const result = getPage(pages, 3, 1);
    const expectResult = ['1', '2', '3'];
    expect(result).to.eql(expectResult);
  });

  it(`last page`, () => {
    const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const result = getPage(pages, 5, 2);
    const expectResult = ['6', '7', '8', '9', '10'];
    expect(result).to.eql(expectResult);
  });

  it(`empty pages`, () => {
    const pages = [];
    const result = getPage(pages, 5, 2);
    const expectResult = [];
    expect(result).to.eql(expectResult);
  });

  it(`take more than there is`, () => {
    const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const result = getPage(pages, 5, 4);
    const expectResult = [];
    expect(result).to.eql(expectResult);
  });
});