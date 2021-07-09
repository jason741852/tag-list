import { validateTagName } from '../validateTagName';

describe('validateTagName', () => {
  it('should return true if name is valid', () => {
    const testString = 'abcdef abcdef';
    expect(validateTagName(testString)).toBeTruthy();
  });

  it('should return false if name contains +', () => {
    const testString = 'abcdef+abcdef';
    expect(validateTagName(testString)).toBeFalsy();
  });

  it('should return false if name contains ,', () => {
    const testString = 'abcdef,abcdef';
    expect(validateTagName(testString)).toBeFalsy();
  });
});
