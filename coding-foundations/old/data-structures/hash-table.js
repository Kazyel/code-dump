/*
  Hash Table

  A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

  Hash tables are good for fast lookups, with Big O of O(1) for insertion and deletion and for lookups, with Big O of O(1) for average case and O(n) for worst case.

*/

// Objects are like hash tables in that they can map keys to values.
console.log("\nObjects:")
const hashObject = new Object();

hashObject['a'] = 1;
hashObject['b'] = 2;
hashObject['c'] = 3;

for (let [key, value] of Object.entries(hashObject)) {
  if (hashObject.hasOwnProperty(key)) {
    console.log("Key: " + key + ", Value: " + value);
  }
}

// Maps are also like hash tables in that they can map keys to values
// but without some downsides of objects and with some pre-built methods.
console.log("\nMaps:")
const mapHash = new Map();

mapHash.set('a', 1);
mapHash.set('b', 2);
mapHash.set('c', 3);

console.log(mapHash.get('a')); // 1
console.log(mapHash.get('b')); // 2
console.log(mapHash.get('c')); // 3

mapHash.delete('a');

console.log(mapHash.get('a')); // undefined

console.log(mapHash)
mapHash.clear();
console.log(mapHash)

