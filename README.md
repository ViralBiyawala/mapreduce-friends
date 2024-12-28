# MapReduce Friends

This project demonstrates how to apply a map-reduce style approach to process friendship data, returning the common friends for each user pair.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run tests using `npm test`.

## Functions

- `setup`: Converts a list of friend pairs into an object mapping each user to their friends.
- `mapper`: Maps the friends into key-value pairs.
- `group`: Groups the mappings by unique keys.
- `reducer`: Reduces the groupings by finding common friends.
- `mapreduce`: Combines all the steps to return the final reduced data.

## Example

Input:
```javascript
const friends = [
  ['A', 'B'],
  ['A', 'C'],
  ['A', 'D'],
  ['B', 'C'],
  ['B', 'D'],
  ['C', 'D']
];
const result = mapreduce(friends);
console.log(result);
