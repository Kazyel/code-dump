# Redis

Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs, geospatial indexes, and streams.

## Basic CRUD functions

### Set

```sql
/* Sets a value */
SET name "Kazyel"

/* Sets multiple values */
MSET score:brazil 100 score:usa 90
```

### Get

```sql
/* Gets a value */
GET name

/* Gets multiple values */
MGET score:brazil score:usa
```

### Increment & Decrement

```sql
/* Increments a value */
INCR counter
INCRBY counter 5

/* Decrements a value */
DECR counter
DECRBY counter 5
```

### Exists

```sql
/* Checks if a key exists */
EXISTS name
EXISTS score:brazil
```

### Delete

```sql
/* Deletes a key */
DEL name
DEL score:brazil
```

## Namespaces

```sql
/* Sets a value in the "user" namespace */
SET user:kazyel:city "New York"
SET user:isabelle:city "Los Angeles"
```

```sql
/* Gets a value in the "user" namespace */
GET user:"value":city
```

## Redis Commands

### NX

```sql
/* Sets a value if it does not exist */
SET name "Kazyel" NX
```

### XX

```sql
/* Sets a value if it does exist */
SET name "Kazyel" XX

```

### TTL - Time To Live

```sql
/* Sets a key with a TTL of 1 hour in seconds */
SET user:name "Kazyel" EX 3600
```

## Data Types

Redis supports the following data types:

-   Strings
-   Lists
-   Sets
-   Sorted Sets
-   Hashes
-   Bitmaps
-   HyperLogLogs
-   Geospatial Indexes
-   Streams

### Arrays / Lists

```sql
/* Pushing to a list */
RPUSH notifications:user:kazyel "New message" "New message 2" "New message 3"

/* Returning elements from a list */
LRANGE notifications:user:kazyel 0 -1

/* Popping elements from the start of a list */
LPOP notifications:user:kazyel

/* Popping elements from the end of a list */
RPOP notifications:user:kazyel
```

### Hashes

```sql
/* Setting a hash */
HMSET user:kazyel name "Kazyel" age 30

/* Getting a hash */
HGET user:kazyel
HGETALL user:kazyel
```

### Sets

```sql
/* Adding elements to a set */
SADD colors "red" "blue" "green"

/* Getting all elements from a set */
SMEMBERS colors

/* Removing elements from a set */
SREM colors "red" "green"

/* Checking if an element exists in a set */
SISMEMBER colors "red"
```
