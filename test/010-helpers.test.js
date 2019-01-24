import { expect } from 'chai';
import { convertToArray } from '../helpers';

describe('HELPER TEST SUITE', () => {
  describe('convertToArray test suite', () => {
    it('Should convert a string to an array', (done) => {
      const result = convertToArray('Science');
      expect(result[0]).to.equal('Science');
      expect(Array.isArray(result)).to.equal(true);
      done();
    });

    it('Should convert an object to an array', (done) => {
      const result = convertToArray({ name: 'science' });
      expect(Array.isArray(result)).to.equal(true);
      done();
    });

    it('Should return the same input if an array is supplied', (done) => {
      const result = convertToArray(['Science']);
      expect(result[0]).to.equal('Science');
      done();
    });

    it('Should not throw up a TypeError when no input is supplied', (done) => {
      const result = convertToArray();
      expect(typeof (result)).to.equal('object');
      done();
    });
  });
});