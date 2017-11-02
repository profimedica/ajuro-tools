// JS way: 
'use strict';
/* JS way: "test": "mocha --reporter spec" */

// JS way: var expect = require('chai').expect;
import { expect } from 'chai';
import 'ts-node';

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

describe('#MyDummyTest', () => {
    it('sould convert be true!', () => {
        const result = true;
        expect(result).to.equal(true);
    });
});


