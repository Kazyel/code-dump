/**
 *  Proxy
 * 
 *  Proxy is a design pattern that provides a surrogate or placeholder for another object 
 *  to control access to it.
 * 
 *  In JavaScript, the proxy pattern is implemented using the Proxy class.
 * 
 *  The Proxy class has a get and set traps, which are functions that intercept property access operations.
 *  The get trap is used to intercept property access operations and return a value, 
 *  while the set trap is used to intercept property assignment operations and set a value.
 */

const movieInterstellar = {
    title: "Interstellar",
    genre: "Science Fiction",
    year: 2014,
    description:
        "Interstellar is a science fiction film directed by Christopher Nolan in 2014. The film is based on the novel of the same name by Matthew McConaughey.",
};

const proxy = {
    get: (target, propKey) => {
        console.log(`\nThe movie ${target.title} is ${target[propKey]}.`);
    },
    set: (target, propKey, value) => {
        console.log(
            `Setting ${propKey} to ${value} on the film ${target.title}...`
        );
        return Reflect.set(target, propKey, value);
    },
};

const movieProxy = new Proxy(movieInterstellar, proxy);

console.log(movieProxy.title);
movieProxy.title = "Interstellar (2014)";
console.log(movieProxy.title);

const styles = {};
const getHandler = {
    get: (target, prop) => {
        return (value) => {
            if (typeof value !== "undefined") {
                target[prop] = value;
                return new Proxy(target, getHandler);
            }
            return target[prop];
        };
    },
};

const proxiedStyles = new Proxy(styles, getHandler);
proxiedStyles.color("#101010").background("#fefefe").margin("4px 8px");

console.log(proxiedStyles.color());
console.log(proxiedStyles.background());
console.log(proxiedStyles.margin());
