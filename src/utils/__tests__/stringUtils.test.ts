import { stringUtils } from '../stringUtils';


describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize first letter', () => {
    expect(stringUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
    expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
    expect(stringUtils.capitalizeFirstLetter('ana Maria')).toBe('Ana Maria');
    expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
    });

   it('should string empty or null', () => {
     expect(stringUtils.capitalizeFirstLetter('')).toBe('');
   });
   it('should remove leading and trailing spaces', () => {
    expect(stringUtils.capitalizeFirstLetter(' ana maria ')).toBe('Ana Maria');
   });
  });

  describe('getFirstName', () => {
    it('should return first name', () => {
      expect(stringUtils.getFirstName('ana maria')).toBe('Ana');
    });

    it('should string empty or null', () => {
      expect(stringUtils.getFirstName('')).toBe('');
    });
  });
});
