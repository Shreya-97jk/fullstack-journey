// ── Topic 1: const / let / var ──────────────────────────────
const greeting = "hello";
let counter = 0;
counter = counter + 1;

console.log(greeting, counter);

// ── Topic 2: === (strict equality) ──────────────────────────
console.log(1 == "1");   // true  ← JS converts types, dangerous
console.log(1 === "1");  // false ← strict: value AND type must match
console.log(1 === 1);    // true

// ── Topic 3: Arrow functions ─────────────────────────────────
// Python:  def add(a, b): return a + b
const add = (a: number, b: number): number => a + b;

// Python:  def greet(name): return f"Hello {name}"
const greet = (name: string): string => `Hello ${name}`;

// Multi-line (needs curly braces + explicit return)
const multiply = (a: number, b: number): number => {
  const result = a * b;
  return result;
};

console.log(add(2, 3));
console.log(greet("Shreya"));
console.log(multiply(4, 5));


// ── Topic 4: Template literals ───────────────────────────────
const name = "Shreya";
const score = 20;

// Python: f"Hello {name}, you scored {score}"
const message = `Hello ${name}, you scored ${score}`;

// Multi-line string (no \n needed)
const multiLine = `Line one
Line two
Line three`;

console.log(message);
console.log(multiLine);


// ── Topic 5: Array methods ───────────────────────────────────
const nums = [1, 2, 3, 4, 5];

// map — transform every item (like Python list comprehension)
// Python: [x * 2 for x in nums]
const doubled = nums.map(n => n * 2);

// filter — keep items that pass a test
// Python: [x for x in nums if x > 2]
const bigOnes = nums.filter(n => n > 2);

// find — first item that passes (Python: next(x for x in nums if x > 2))
const firstBig = nums.find(n => n > 2);

// forEach — loop with no return value (Python: for x in nums: print(x))
nums.forEach(n => console.log("item:", n));

// reduce — collapse to one value (Python: sum(nums) or functools.reduce)
const total = nums.reduce((acc, n) => acc + n, 0);

console.log(doubled);
console.log(bigOnes);
console.log(firstBig);
console.log(total);


// ── Topic 6: Destructuring ───────────────────────────────────
// Array destructuring (Python: a, b, c = [1, 2, 3])
const [first, second, third] = [1, 2, 3];
console.log(first, second, third);

// Object destructuring (Python: no direct equivalent)
const user = { name: "Shreya", age: 25, city: "Kolkata" };
const { name: userName, age } = user;
console.log(userName, age);

// Destructuring in function params
const printUser = ({ name, age }: { name: string; age: number }) => {
  console.log(`${name} is ${age}`);
};
printUser(user);


// ── Topic 7: async / await ───────────────────────────────────
// Python: async def fetch(): await something()
// JS/TS: same keywords, same idea

const wait = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

const fetchData = async (): Promise<string> => {
  console.log("fetching...");
  await wait(100); // pretend network call
  return "data arrived";
};

const main = async () => {
  const result = await fetchData();
  console.log(result);
};

main();


// ── Topic 8: import / export ─────────────────────────────────
// In JS/TS, every file is a module.
// You export things you want other files to use.

// Named export (most common):
export const PI = 3.14;
export const square = (n: number): number => n * n;

// Default export (one per file):
export default function welcome(name: string) {
  return `Welcome, ${name}`;
}

// To USE these in another file you'd write:
// import welcome, { PI, square } from "./scratch";

// Python equivalent:
// from scratch import PI, square

console.log(PI);
console.log(square(4));
console.log(welcome("Shreya"));


// ── Topic 10: TypeScript basics ──────────────────────────────

// interface — shape of an object (like a Python dataclass)
interface User {
  name: string;
  age: number;
  email?: string; // ? means optional
}

// type — similar to interface, used for unions/aliases
type Status = "active" | "inactive" | "banned";

// Typing function params and return values
const createUser = (name: string, age: number): User => {
  return { name, age };
};

const getStatus = (user: User): Status => {
  if (user.age < 18) return "inactive";
  return "active";
};

const u = createUser("Shreya", 25);
console.log(u);
console.log(getStatus(u));