# MongoDB

MongoDB is a popular NoSQL document database that offers flexibility, scalability, and high performance for handling large volumes of unstructured or semi-structured data.

## Basic CRUD functions

### Create

```js
// Inserts a single document
db.collection.insertOne({
    name: "John",
    age: 30,
    city: "New York",
});

// Inserts multiple documents
db.collection.insertMany([
    {
        name: "John",
        age: 30,
        city: "New York",
    },
    {
        name: "Jane",
        age: 25,
        city: "Los Angeles",
    },
]);
```

### Read

```js
// Returns a single document
db.collection.find({ name: "John", age: { $gt: 30 } });

// Returns all documents that match the query
db.collection.findMany([{ name: "John" }, { name: "Jane" }]);
```

### Update

```js
// Updates a single document
db.collection.updateOne(
    { name: "John" },
    {
        $set: {
            age: 31,
        },
    },
    // If does not exist, upserts inserts a new document
    { upsert: true }
);

// Updates all documents that match the query and increments the age by 1
db.collection.updateMany(
    { name: "John" },
    {
        $inc: {
            age: 1,
        },
    }
);
```

### Delete

```js
// Deletes a single document and returns the deleted document
db.collection.findOneAndDelete({ name: "John" });

// Deletes all documents that match the query
db.collection.deleteMany({ name: "Mary" });
```

### Count

```js
// Returns the number of documents that match the query
db.collection.count({ name: "John" });
```

## Basic Query Operators

```js
db.collection.find({ name: "John", age: { $gt: 30 } });
db.collection.find({ name: "John", age: { $lt: 30 } });
db.collection.find({ name: "Mary", age: { $eq: 30 } });
db.collection.find({ name: { $ne: "John" } });
db.collection.find({ name: { $in: ["John", "Mary"] } });
db.collection.find({ name: { $nin: ["John", "Mary"] } });
```

## Logical Operators

```js
// AND - $and
db.collection.find({
    name: "John",
    $and: [{ age: { $gt: 30 } }, { age: { $lte: 40 } }],
});
```

```js
// OR - $or
db.collection.find({
    name: "John",
    $or: [{ age: { $eq: 30 } }, { age: { $eq: 40 } }],
});
```

```js
// NOT - $not
db.collection.find({
    name: "John",
    $not: { age: { $eq: 30 } },
});
```

## Sorting

```js
// Ascending order - 1
db.collection.find({ name: "John" }).sort({ age: 1 }).limit(5);

// Descending order - -1
db.collection.find({ name: "John" }).sort({ age: -1 }).limit(5);
```

## Projections

```js
// Projects only the specified fields - true or false
db.collection.find({ name: "John" }).project({ name: 1, age: false });
```

## Indexing

```js
// Creates an index on the specified field
db.collection.createIndex({ name: 1 });

// Creates an unique index on the specified field
db.collection.createIndex({ name: 1 }, { unique: true });
```

## Aggregation

```js
db.collection.aggregate([
    {
        $match: {
            name: "John",
        },
    },
    {
        $group: {
            _id: "$name",
            count: { $sum: 1 },
        },
    },
]);

db.collection.aggregate([
    {
        // Match all documents where the type is "Dog"
        $match: {
            type: "Dog",
        },
    },
    {
        // Group the documents by the "type" fields
        $bucket: {
            groupBy: "$age",
            boundaries: [0, 30, 50],
            default: "Other",
            output: {
                count: { $sum: 1 },
            },
        },
    },
    {
        $sort: {
            count: -1,
        },
    },
]);
```
