import formatAddress from '../../src/helpers/formatAddress';

describe('formatAdress', () => {
  it('returns the formatted address', () => {
    const addressObject = {
      street1: '123 Main Street',
      street2: 'Apartment 456',
      city: 'Atlanta',
      state: 'GA',
      zip: '30307',
    };

    const result = formatAddress(addressObject);
    const expected = '123 Main Street\nApartment 456\nAtlanta, GA 30307';

    expect(result).toEqual(expected);
  });

  it('returns formated address without street2', () => {
    const addressObject = {
      street1: '123 Main Street',
      city: 'Atlanta',
      state: 'GA',
      zip: '30307',
    };

    const result = formatAddress(addressObject);
    const expected = '123 Main Street\nAtlanta, GA 30307';
    expect(result).toEqual(expected);
  });
});
