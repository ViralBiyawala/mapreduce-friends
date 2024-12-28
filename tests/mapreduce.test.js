// tests/mapreduce.test.js

const mapreduce = require('../src/mapreduce');

describe('mapreduce function', () => {
  
  test('should return common friends for each pair of friends', () => {
    const friends = [
      ['A', 'B'],
      ['A', 'C'],
      ['A', 'D'],
      ['B', 'C'],
      ['B', 'D'],
      ['C', 'D']
    ];

    const expected = {
      'AB': ['C', 'D'],
      'AC': ['B', 'D'],
      'AD': ['B', 'C'],
      'BC': ['A', 'D'],
      'BD': ['A', 'C'],
      'CD': ['A', 'B']
    };

    expect(mapreduce(friends)).toEqual(expected);
  });

  test('should return empty object for no friends data', () => {
    const friends = [];
    const expected = {};
    expect(mapreduce(friends)).toEqual(expected);
  });

  test('should return empty arrays if there are no common friends between any pair', () => {
    const friends = [
      ['A', 'B'],
      ['C', 'D']
    ];

    const expected = {
      'AB': [],
      'CD': []
    };

    expect(mapreduce(friends)).toEqual(expected);
  });

  test('should handle case when some pairs have no mutual friends', () => {
    const friends = [
      ['A', 'B'],
      ['B', 'C'],
      ['C', 'D']
    ];

    const expected = {
      'AB': [],
      'BC': [],
      'CD': []
    };

    expect(mapreduce(friends)).toEqual(expected);
  });

  test('should handle single pair input correctly', () => {
    const friends = [
      ['A', 'B'],
      ['B', 'A']
    ];

    const expected = {
      'AB': []
    };

    expect(mapreduce(friends)).toEqual(expected);
  });

  test('should return arrays pairs of non lexical common friends exist for any pair', () => {
    const friends = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C']
    ];

    const expected = {
      'AB': ['C'],
      'AC': ['B'],
      'BC': ['A']
    };

    expect(mapreduce(friends)).toEqual(expected);
  });

});
