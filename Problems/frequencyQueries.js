/**
 You are given q queries. Each query specifies an operation that needs to be performed on an (initially empty) collection of integers. Each query has one of three possible forms:
[1, x]: Insert x into your collection.
[2, y]: Delete a single occurrence of y from your collection. Note that we might get delete queries for elements that aren't in the collection.
[3, z] : Check if any integer present in the collection occurs with a frequency of z. If such an integer occurs with the specified frequency in the collection, this operation outputs 1 . If no such integer occurs with the specified frequency in the collection, this operation outputs 0 .

The queries are given in the form of a 2D array queries of size q where queries[i][0] contains the operation and queries[i][1] contains the operation's input value.
 */

// Nested loop is O(n^2). Look for a way to make it O(n), possibly by creating a lookup map of frequencies.
// Space complexity: O(n)

function frequencyQueries(queries) {
  let result = [];
  let map = {};
  for (let i = 0; i < queries.length; i++) {
    const [operation, value] = queries[i];
    if (operation === 1) {
      if (!map[value]) {
        map[value] = 1;
      } else {
        map[value] += 1;
      }
    } else if (operation === 2) {
      if (map[value]) {
        map[value] -= 1;
      } else if (operation === 3) {
        let z = value;
        if (Object.values(map).includes(z)) {
          result.push(1);
        } else {
          result.push(0);
        }
      }
    }
    return result;
  }
}

frequencyQueries([
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2],
]);
