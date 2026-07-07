const questions = [
  // ======================== EASY ========================
  {
    id: 1,
    difficulty: "easy",
    category: "forEach",
    answerType: "multiple-choice",
    title: "Log Each Product Name",
    business:
      "You work at an e-commerce store. You need to print every product name in the catalog to the console.",
    question: "Which forEach call correctly logs each product name?",
    code: `const products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'];`,
    options: [
      "products.forEach(product => console.log(product))",
      "products.forEach((product, i) => console.log(i))",
      "products.forEach(() => console.log('product'))",
      "products.forEach(product => console.log('product'))",
    ],
    correctAnswer: "products.forEach(product => console.log(product))",
    answerShort: "forEach passes each element as the first argument to the callback.",
    answer: `products.forEach(product => console.log(product));`,
    explanation: `<strong>forEach</strong> calls a function once for each element in the array. The callback receives the current element as the first argument. Here \`product\` takes the value of each item in turn. <span class="highlight">forEach always returns undefined</span> — it is used for side effects like logging, not for building a new array.`,
  },
  {
    id: 2,
    difficulty: "easy",
    category: "forEach",
    answerType: "multiple-choice",
    title: "Log Names with Index",
    business:
      "You are building a leaderboard and need to display each player name with their rank number.",
    question: "Which forEach call correctly logs each name with rank (1-indexed)?",
    code: `const players = ['Alice', 'Bob', 'Charlie', 'Diana'];`,
    options: [
      "players.forEach((name, index) => console.log(index + 1 + ': ' + name))",
      "players.forEach(name => console.log('1: ' + name))",
      "players.forEach((name, i) => console.log(i + ': ' + name))",
      "players.forEach((name, index) => console.log(index + ': ' + name))",
    ],
    correctAnswer: "players.forEach((name, index) => console.log(index + 1 + ': ' + name))",
    answerShort: "forEach passes the element and index (0-based) as arguments. Add 1 for display.",
    answer: `players.forEach((name, index) => console.log(index + 1 + ': ' + name));`,
    explanation: `<strong>forEach</strong> passes up to three arguments: the element, the index, and the original array. The second parameter \`index\` gives us the position (0-based), so we add 1 for a human-readable rank. <span class="highlight">Always check your index is 0-based before displaying to users!</span>`,
  },
  {
    id: 3,
    difficulty: "easy",
    category: "map",
    answerType: "multiple-choice",
    title: "Double the Prices",
    business:
      'A store is running a "double value" promotion. You need to create a new price list where every price is doubled.',
    question: "What does prices.map(price => price * 2) return?",
    code: `const prices = [10, 25, 50, 100, 200];`,
    options: [
      "[20, 50, 100, 200, 400]",
      "[10, 25, 50, 100, 200]",
      "[12, 27, 52, 102, 202]",
      "undefined",
    ],
    correctAnswer: "[20, 50, 100, 200, 400]",
    answerShort: "map creates a new array where each element is the callback's return value.",
    answer: `const doubled = prices.map(price => price * 2);
console.log(doubled); // [20, 50, 100, 200, 400]`,
    explanation: `<strong>map</strong> creates a <span class="highlight">brand new array</span> of the same length, where each element is the return value of the callback. The original array is never modified. This is a pure function pattern — given the same input, it always produces the same output with no side effects.`,
  },
  {
    id: 4,
    difficulty: "easy",
    category: "map",
    answerType: "multiple-choice",
    title: "Format Usernames",
    business:
      "You have a list of user emails. You need to extract the username (the part before @) for display purposes.",
    question: 'What does emails.map(email => email.split("@")[0]) return?',
    code: `const emails = ['alice@company.com', 'bob@company.com', 'charlie@company.com'];`,
    options: [
      "['alice', 'bob', 'charlie']",
      "['alice@company.com', 'bob@company.com', 'charlie@company.com']",
      "['company.com', 'company.com', 'company.com']",
      "['alice@', 'bob@', 'charlie@']",
    ],
    correctAnswer: "['alice', 'bob', 'charlie']",
    answerShort: "split('@') splits at @; [0] takes the first part (before @).",
    answer: `const usernames = emails.map(email => email.split('@')[0]);
console.log(usernames); // ['alice', 'bob', 'charlie']`,
    explanation: `<strong>map</strong> transforms each element. We split each email string at "@" and take the first part ([0]). This pattern of <span class="highlight">extracting a derived value</span> from existing data is extremely common in real apps — converting API data to display formats.`,
  },
  {
    id: 5,
    difficulty: "easy",
    category: "filter",
    answerType: "multiple-choice",
    title: "Find Expensive Items",
    business: 'A store wants to show a "Premium" section containing only items priced $50 or more.',
    question: "How many items does filter return when using item.price >= 50?",
    code: `const items = [
  { name: 'Notebook', price: 15 },
  { name: 'Backpack', price: 80 },
  { name: 'Shoes', price: 120 },
  { name: 'Pen', price: 5 }
];`,
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    answerShort: "Backpack (80) and Shoes (120) are >= 50. Notebook (15) and Pen (5) are excluded.",
    answer: `const premium = items.filter(item => item.price >= 50);
console.log(premium);
/* [
  { name: 'Backpack', price: 80 },
  { name: 'Shoes', price: 120 }
] */`,
    explanation: `<strong>filter</strong> creates a new array containing only elements where the callback returns <span class="highlight">truthy</span> (true). The callback receives each element and must return a boolean condition. Filter never changes the original array — it's a pure operation. Items that don't match are simply excluded.`,
  },
  {
    id: 6,
    difficulty: "easy",
    category: "filter",
    answerType: "multiple-choice",
    title: "Active Users Only",
    business:
      "You manage a user database and need to generate a report of only active (non-deactivated) accounts.",
    question: "How many users does filter return when using user.active as the condition?",
    code: `const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true },
  { name: 'Diana', active: false }
];`,
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    answerShort:
      "filter keeps elements where the callback returns truthy. Only Alice and Charlie are active.",
    answer: `const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// [{ name: 'Alice', active: true }, { name: 'Charlie', active: true }]`,
    explanation: `When the condition is a simple boolean property, <span class="highlight">you can return it directly</span> without comparing to true. \`user.active\` is already truthy/falsy. <strong>filter</strong> keeps items with truthy returns. This pattern is used constantly in dashboards, admin panels, and reporting systems.`,
  },
  {
    id: 7,
    difficulty: "easy",
    category: "find",
    answerType: "multiple-choice",
    title: "Find First In-Stock Item",
    business:
      "A customer wants to buy headphones. Show the first in-stock headphone from the inventory.",
    question: "What does find return for a matching in-stock headphone?",
    code: `const inventory = [
  { id: 1, name: 'Headphones', inStock: false },
  { id: 2, name: 'Headphones', inStock: true },
  { id: 3, name: 'Headphones', inStock: true }
];`,
    options: [
      "{ id: 2, name: 'Headphones', inStock: true }",
      "{ id: 1, name: 'Headphones', inStock: false }",
      "[{ id: 2, ... }, { id: 3, ... }]",
      "undefined",
    ],
    correctAnswer: "{ id: 2, name: 'Headphones', inStock: true }",
    answerShort: "find returns the FIRST element where the callback returns true, then stops.",
    answer: `const available = inventory.find(item => item.name === 'Headphones' && item.inStock);
console.log(available); // { id: 2, name: 'Headphones', inStock: true }`,
    explanation: `<strong>find</strong> returns the <span class="highlight">first element</span> that makes the callback return true, then stops searching immediately. If nothing matches, it returns <span class="highlight">undefined</span>. Unlike filter (which returns ALL matches), find short-circuits for performance and only gives you one result.`,
  },
  {
    id: 8,
    difficulty: "easy",
    category: "find",
    answerType: "multiple-choice",
    title: "Find User by ID",
    business: "When a user logs in, you need to look up their full profile by user ID.",
    question: "What does find return when searching for id === 3?",
    code: `const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' }
];`,
    options: [
      "{ id: 3, name: 'Charlie' }",
      "{ id: 2, name: 'Bob' }",
      "[{ id: 3, name: 'Charlie' }]",
      "undefined",
    ],
    correctAnswer: "{ id: 3, name: 'Charlie' }",
    answerShort: "find returns the element itself (not an array) when a match is found.",
    answer: `const user = users.find(u => u.id === 3);
console.log(user); // { id: 3, name: 'Charlie' }`,
    explanation: `<strong>find</strong> is ideal for <span class="highlight">lookup by unique identifier</span> like IDs, usernames, or email addresses. It's more semantic than using a loop and break. Always handle the case where find returns undefined — the user might not exist.`,
  },
  {
    id: 9,
    difficulty: "easy",
    category: "includes",
    answerType: "multiple-choice",
    title: "Check if Item Exists",
    business:
      "A shopping cart feature needs to check if a specific product SKU is already in the cart array before adding it again.",
    question: 'What does cart.includes("SKU-123") return?',
    code: `const cart = ['SKU-456', 'SKU-789', 'SKU-123', 'SKU-111'];`,
    options: ["true", "false", "3", "undefined"],
    correctAnswer: "true",
    answerShort: "includes returns true if the value exists in the array, false otherwise.",
    answer: `const hasItem = cart.includes('SKU-123');
console.log(hasItem); // true`,
    explanation: `<strong>includes</strong> uses <span class="highlight">Strict Equality (===)</span> to check if a value exists in the array. It returns a boolean. It's perfect for primitive values like strings and numbers. For objects, it checks reference equality — not deep equality.`,
  },
  {
    id: 10,
    difficulty: "easy",
    category: "indexOf",
    answerType: "multiple-choice",
    title: "Find Position of Item",
    business:
      "A task management app needs to find where a specific task is in the list so it can be moved or edited.",
    question: 'What index does indexOf return for "Write report"?',
    code: `const tasks = ['Email client', 'Design mockup', 'Write report', 'Review code'];`,
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
    answerShort: "indexOf returns the 0-based index of the first occurrence, or -1 if not found.",
    answer: `const idx = tasks.indexOf('Write report');
console.log(idx); // 2`,
    explanation: `<strong>indexOf</strong> returns the <span class="highlight">first index</span> where the element is found, or <span class="highlight">-1</span> if not found. Like includes, it uses strict equality. The returned index is 0-based, so position 2 means the third item. Always check for -1 before using the index to avoid unexpected behavior.`,
  },
  {
    id: 11,
    difficulty: "easy",
    category: "some",
    answerType: "multiple-choice",
    title: "Any VIP Customers?",
    business:
      "A loyalty program offers free shipping if at least one item in the cart is VIP-tier ($100+).",
    question: "Does some return true for prices >= 100?",
    code: `const cartPrices = [25, 45, 60, 120, 30];`,
    options: ["true", "false"],
    correctAnswer: "true",
    answerShort: "some returns true if AT LEAST ONE element passes the condition (120 is >= 100).",
    answer: `const hasVip = cartPrices.some(price => price >= 100);
console.log(hasVip); // true`,
    explanation: `<strong>some</strong> tests if <span class="highlight">at least one</span> element passes the condition. It short-circuits and stops as soon as it finds a match. Returns true if any element passes, false if none do. Think of it as "is there at least one?" — perfect for validation.`,
  },
  {
    id: 12,
    difficulty: "easy",
    category: "every",
    answerType: "multiple-choice",
    title: "All Products in Stock?",
    business:
      "Before processing an order, you must verify that every single item in the order is in stock.",
    question: "Does every return true when checking qty > 0?",
    code: `const order = [
  { product: 'Laptop', qty: 5 },
  { product: 'Mouse', qty: 0 },
  { product: 'Keyboard', qty: 3 }
];`,
    options: ["true", "false"],
    correctAnswer: "false",
    answerShort: "every returns false because Mouse has qty: 0, which fails the condition.",
    answer: `const allInStock = order.every(item => item.qty > 0);
console.log(allInStock); // false (Mouse has 0)`,
    explanation: `<strong>every</strong> tests if <span class="highlight">ALL elements</span> pass the condition. It also short-circuits — the moment one item fails, it returns false. If the array is empty, it returns true (vacuously true). This is critical for order processing, form validation, and permission checks.`,
  },
  {
    id: 13,
    difficulty: "easy",
    category: "sort",
    answerType: "multiple-choice",
    title: "Sort Scores Ascending",
    business: "A teacher wants to display test scores from lowest to highest.",
    question: "What is the result of sort((a, b) => a - b) on [88, 42, 100, 73, 95, 61]?",
    code: `const scores = [88, 42, 100, 73, 95, 61];`,
    options: [
      "[42, 61, 73, 88, 95, 100]",
      "[100, 95, 88, 73, 61, 42]",
      "[42, 61, 73, 88, 95, 100]",
      "[88, 42, 100, 73, 95, 61]",
    ],
    correctAnswer: "[42, 61, 73, 88, 95, 100]",
    answerShort: "a - b sorts ascending. sort((a,b) => b - a) would sort descending.",
    answer: `scores.sort((a, b) => a - b);
console.log(scores); // [42, 61, 73, 88, 95, 100]`,
    explanation: `<strong>sort</strong> with a compare function: if the result is <span class="highlight">negative</span>, a comes first; <span class="highlight">positive</span>, b comes first; <span class="highlight">zero</span>, order unchanged. <span class="highlight">Important: sort mutates the original array!</span> Always make a copy first: \`[...arr].sort()\` if you need to preserve the original. Default sort converts to strings, which gives incorrect numeric results.`,
  },
  {
    id: 14,
    difficulty: "easy",
    category: "sort",
    answerType: "multiple-choice",
    title: "Sort Names Alphabetically",
    business: "A contacts app needs to display names in alphabetical order.",
    question: 'What is the result of names.sort() on ["Zara", "Anna", "Mike", "Bob", "Eve"]?',
    code: `const names = ['Zara', 'Anna', 'Mike', 'Bob', 'Eve'];`,
    options: [
      "['Anna', 'Bob', 'Eve', 'Mike', 'Zara']",
      "['Zara', 'Mike', 'Eve', 'Bob', 'Anna']",
      "['Anna', 'Bob', 'Eve', 'Mike', 'Zara']",
      "['Zara', 'Anna', 'Mike', 'Bob', 'Eve']",
    ],
    correctAnswer: "['Anna', 'Bob', 'Eve', 'Mike', 'Zara']",
    answerShort: "Default sort converts to strings and sorts alphabetically (Unicode order).",
    answer: `names.sort();
console.log(names); // ['Anna', 'Bob', 'Eve', 'Mike', 'Zara']`,
    explanation: `Without a compare function, <strong>sort</strong> converts elements to strings and sorts by <span class="highlight">Unicode code point order</span>. For simple alphabetical string sorting, this works great. But beware: uppercase letters (65-90) come before lowercase (97-122). For case-insensitive sort, use \`.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))\`.`,
  },
  {
    id: 15,
    difficulty: "easy",
    category: "reduce",
    answerType: "multiple-choice",
    title: "Calculate Total Revenue",
    business: "A cash register needs to sum up all sales from the day to get total revenue.",
    question: "What is the sum of [450, 230, 810, 120, 560, 375] using reduce?",
    code: `const dailySales = [450, 230, 810, 120, 560, 375];`,
    options: ["2545", "2540", "2645", "2544"],
    correctAnswer: "2545",
    answerShort: "Reduce iterates and accumulates: 450 + 230 + 810 + 120 + 560 + 375 = 2545.",
    answer: `const total = dailySales.reduce((sum, sale) => sum + sale, 0);
console.log(total); // 2545`,
    explanation: `<strong>reduce</strong> executes a reducer function on each element, accumulating the result. The first argument is the <span class="highlight">accumulator</span> (previous value), the second is the current element. The <span class="highlight">initial value (0)</span> is passed as the second argument to reduce. Without an initial value, the first element is used as the accumulator and iteration starts from index 1. Always provide an initial value to avoid errors with empty arrays!`,
  },
  {
    id: 16,
    difficulty: "easy",
    category: "reduce",
    answerType: "text",
    title: "Concatenate Tags",
    business:
      "A blog needs to join all tags for a post into a single comma-separated string for SEO metadata.",
    question: 'Type the output of tags.join(", ") for the given array.',
    code: `const tags = ['javascript', 'arrays', 'coding', 'tutorial'];`,
    correctAnswer: "javascript, arrays, coding, tutorial",
    answerShort:
      "join combines all elements with the separator between them. Much simpler than reduce for this!",
    answer: `const tagString = tags.reduce((acc, tag, i) => 
  i === 0 ? tag : acc + ', ' + tag, '');
console.log(tagString); // 'javascript, arrays, coding, tutorial'`,
    explanation: `Here <strong>reduce</strong> builds a string progressively. We check if it's the first item (index 0) to avoid a leading comma. A simpler alternative is <span class="highlight">join</span>: \`tags.join(', ')\`. This shows why knowing multiple methods lets you choose the cleanest approach for each situation.`,
  },
  {
    id: 17,
    difficulty: "easy",
    category: "push",
    answerType: "multiple-choice",
    title: "Add Item to Cart",
    business:
      'A customer clicks "Add to Cart". You need to add the product to the shopping cart array.',
    question: 'After cart.push("Tablet"), what does cart look like?',
    code: `let cart = ['Laptop', 'Mouse'];`,
    options: [
      "['Laptop', 'Mouse', 'Tablet']",
      "['Tablet', 'Laptop', 'Mouse']",
      "['Laptop', 'Mouse']",
      "['Laptop', 'Mouse', 'Tablet']",
    ],
    correctAnswer: "['Laptop', 'Mouse', 'Tablet']",
    answerShort: "push adds to the END of the array and mutates the original.",
    answer: `cart.push('Tablet');
console.log(cart); // ['Laptop', 'Mouse', 'Tablet']`,
    explanation: `<strong>push</strong> adds one or more elements to the <span class="highlight">end</span> of an array and returns the new length. <span class="highlight">push mutates the original array</span>. In React or state-driven frameworks, you'd use spread instead: \`[...cart, 'Tablet']\` to create a new array.`,
  },
  {
    id: 18,
    difficulty: "easy",
    category: "pop",
    answerType: "multiple-choice",
    title: "Undo Last Action",
    business:
      'A text editor has an "undo" feature that removes the last action from the history stack.',
    question: 'What does pop() return from ["typed A", "typed B", "typed C", "deleted D"]?',
    code: `const history = ['typed A', 'typed B', 'typed C', 'deleted D'];`,
    options: ["'deleted D'", "'typed C'", "['typed A', 'typed B', 'typed C']", "4"],
    correctAnswer: "'deleted D'",
    answerShort: "pop removes and RETURNS the last element. The array is mutated to remove it.",
    answer: `const lastAction = history.pop();
console.log(lastAction); // 'deleted D'
console.log(history); // ['typed A', 'typed B', 'typed C']`,
    explanation: `<strong>pop</strong> removes the <span class="highlight">last</span> element from an array and <span class="highlight">returns it</span>. The array is mutated (shortened by one). If the array is empty, pop returns undefined without error. This makes it perfect for stack data structures (Last-In-First-Out).`,
  },
  {
    id: 19,
    difficulty: "easy",
    category: "shift",
    answerType: "multiple-choice",
    title: "Process Queue (First Come, First Served)",
    business:
      "A ticket system processes customers in order. Remove the first person from the waiting queue.",
    question: "What does shift() return and what is left in the queue?",
    code: `const queue = ['Alice', 'Bob', 'Charlie', 'Diana'];`,
    options: [
      "Returns 'Alice'; queue becomes ['Bob', 'Charlie', 'Diana']",
      "Returns 'Alice'; queue becomes ['Alice', 'Bob', 'Charlie']",
      "Returns 'Diana'; queue becomes ['Alice', 'Bob', 'Charlie']",
      "Returns 'Bob'; queue becomes ['Alice', 'Charlie', 'Diana']",
    ],
    correctAnswer: "Returns 'Alice'; queue becomes ['Bob', 'Charlie', 'Diana']",
    answerShort: "shift removes and returns the FIRST element. All others shift down.",
    answer: `const served = queue.shift();
console.log(served); // 'Alice'
console.log(queue); // ['Bob', 'Charlie', 'Diana']`,
    explanation: `<strong>shift</strong> removes the <span class="highlight">first</span> element and returns it. All remaining elements shift down one index. This is O(n) — every element has to be re-indexed. For large queues, consider a proper queue implementation or use an index pointer instead.`,
  },
  {
    id: 20,
    difficulty: "easy",
    category: "unshift",
    answerType: "multiple-choice",
    title: "Add Priority Task to Top",
    business:
      "A project manager needs to add a high-priority task to the very beginning of the task list.",
    question: 'After unshift("URGENT: Fix login bug"), what does tasks look like?',
    code: `let tasks = ['Design homepage', 'Write tests', 'Deploy v2'];`,
    options: [
      "['URGENT: Fix login bug', 'Design homepage', 'Write tests', 'Deploy v2']",
      "['Design homepage', 'Write tests', 'Deploy v2', 'URGENT: Fix login bug']",
      "['Design homepage', 'URGENT: Fix login bug', 'Write tests', 'Deploy v2']",
      "['URGENT: Fix login bug', 'Design homepage', 'Write tests']",
    ],
    correctAnswer: "['URGENT: Fix login bug', 'Design homepage', 'Write tests', 'Deploy v2']",
    answerShort: "unshift adds to the BEGINNING of the array. All existing elements shift right.",
    answer: `tasks.unshift('URGENT: Fix login bug');
console.log(tasks);
// ['URGENT: Fix login bug', 'Design homepage', 'Write tests', 'Deploy v2']`,
    explanation: `<strong>unshift</strong> adds one or more elements to the <span class="highlight">beginning</span> of an array and returns the new length. Like shift, this is O(n) because all existing elements must shift right. For frequent front-insertions, consider a different data structure.`,
  },
  {
    id: 21,
    difficulty: "easy",
    category: "slice",
    answerType: "multiple-choice",
    title: "Show First 3 Items (Pagination)",
    business:
      "A product listing page shows 3 items per page. Extract the first 3 items for page 1.",
    question: "What does slice(0, 3) return?",
    code: `const products = ['Shirt', 'Pants', 'Hat', 'Socks', 'Shoes', 'Belt'];`,
    options: [
      "['Shirt', 'Pants', 'Hat']",
      "['Shirt', 'Pants', 'Hat', 'Socks']",
      "['Socks', 'Shoes', 'Belt']",
      "['Shirt', 'Pants']",
    ],
    correctAnswer: "['Shirt', 'Pants', 'Hat']",
    answerShort: "slice(start, end) — start is inclusive, end is exclusive. Original is unchanged.",
    answer: `const page1 = products.slice(0, 3);
console.log(page1); // ['Shirt', 'Pants', 'Hat']`,
    explanation: `<strong>slice(start, end)</strong> returns a <span class="highlight">shallow copy</span> of a portion from start (inclusive) to end (exclusive). The original array is <span class="highlight">never modified</span>. This is perfect for pagination: page N would be \`.slice((N-1) * size, N * size)\`. Negative indices count from the end!`,
  },
  {
    id: 22,
    difficulty: "easy",
    category: "splice",
    answerType: "multiple-choice",
    title: "Remove a Specific Item",
    business: "A user wants to remove a product from their wishlist by its index position.",
    question: "After splice(2, 1), what is the wishlist?",
    code: `let wishlist = ['Camera', 'Watch', 'Speaker', 'Tablet'];`,
    options: [
      "['Camera', 'Watch', 'Tablet']",
      "['Camera', 'Watch', 'Speaker']",
      "['Camera', 'Watch', 'Speaker', 'Tablet']",
      "['Camera', 'Tablet']",
    ],
    correctAnswer: "['Camera', 'Watch', 'Tablet']",
    answerShort: "splice(2, 1) removes 1 element at index 2. splice MUTATES the original array.",
    answer: `wishlist.splice(2, 1);
console.log(wishlist); // ['Camera', 'Watch', 'Tablet']`,
    explanation: `<strong>splice</strong> is the Swiss Army knife of array modifications. The first argument is the start index, the second is the delete count. <span class="highlight">splice mutates the original array</span> and returns the removed elements as a new array. Unlike slice, splice changes the original — don't confuse them!`,
  },
  {
    id: 23,
    difficulty: "easy",
    category: "concat",
    answerType: "multiple-choice",
    title: "Combine Two Departments",
    business:
      "Two departments (Engineering and Design) are merging. Combine their employee lists into one.",
    question: "What does engineering.concat(design) return?",
    code: `const engineering = ['Alice', 'Bob', 'Charlie'];
const design = ['Diana', 'Eve'];`,
    options: [
      "['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']",
      "['Diana', 'Eve', 'Alice', 'Bob', 'Charlie']",
      "['Alice', 'Bob', 'Charlie']",
      "[['Alice', 'Bob', 'Charlie'], ['Diana', 'Eve']]",
    ],
    correctAnswer: "['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']",
    answerShort: "concat merges arrays without mutating originals. Think [...eng, ...design].",
    answer: `const allEmployees = engineering.concat(design);
console.log(allEmployees);
// ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']`,
    explanation: `<strong>concat</strong> merges two or more arrays into a <span class="highlight">new array</span> without modifying the originals. It can also accept individual values: \`arr.concat(1, 2, [3, 4])\`. The spread operator \`[...engineering, ...design]\` is a modern alternative that achieves the same result.`,
  },
  {
    id: 24,
    difficulty: "easy",
    category: "join",
    answerType: "multiple-choice",
    title: "Build CSV Row",
    business:
      'You need to export a list of customer names to a CSV file format: "name1,name2,name3..."',
    question: 'What does customers.join(",") return?',
    code: `const customers = ['Acme Corp', 'Globex Inc', 'Initech', 'Umbrella Co'];`,
    options: [
      "'Acme Corp,Globex Inc,Initech,Umbrella Co'",
      "'Acme Corp Globex Inc Initech Umbrella Co'",
      "'Acme Corp, Globex Inc, Initech, Umbrella Co'",
      "Acme Corp,Globex Inc,Initech,Umbrella Co",
    ],
    correctAnswer: "'Acme Corp,Globex Inc,Initech,Umbrella Co'",
    answerShort: "join combines elements with the separator string between them. Default is comma.",
    answer: `const csv = customers.join(',');
console.log(csv); // 'Acme Corp,Globex Inc,Initech,Umbrella Co'`,
    explanation: `<strong>join</strong> combines all elements into a string with a <span class="highlight">separator</span> between them. If no separator is given, it defaults to comma. Perfect for CSV export, URL query strings, display lists, and natural language formatting (e.g., join with "and" for a list like "A, B and C").`,
  },
  {
    id: 25,
    difficulty: "easy",
    category: "reverse",
    answerType: "multiple-choice",
    title: "Show Latest Transactions First",
    business:
      "A banking app displays transactions newest-first. The data comes in oldest-first; reverse it for display.",
    question: "What is the result of [...transactions].reverse()?",
    code: `const transactions = ['Jan 1', 'Feb 14', 'Mar 8', 'Apr 20'];`,
    options: [
      "['Apr 20', 'Mar 8', 'Feb 14', 'Jan 1']",
      "['Jan 1', 'Feb 14', 'Mar 8', 'Apr 20']",
      "['Jan 1', 'Feb 14', 'Mar 8', 'Apr 20']",
      "['Apr 20', 'Mar 8', 'Feb 14', 'Jan 1']",
    ],
    correctAnswer: "['Apr 20', 'Mar 8', 'Feb 14', 'Jan 1']",
    answerShort:
      "[...arr] creates a copy, then reverse() reverses in place. Always copy before reverse!",
    answer: `const recentFirst = [...transactions].reverse();
console.log(recentFirst); // ['Apr 20', 'Mar 8', 'Feb 14', 'Jan 1']`,
    explanation: `<strong>reverse</strong> reverses the array <span class="highlight">in place</span> (mutates the original). We spread \`[...transactions]\` to create a copy first, then reverse the copy. This preserves the original data. Always copy before reversing unless you want to mutate the source!`,
  },
  {
    id: 26,
    difficulty: "easy",
    category: "flat",
    answerType: "multiple-choice",
    title: "Flatten Category Tree",
    business:
      "An e-commerce site has nested category arrays. You need a flat list of all subcategories.",
    question: "What does flat() return (default depth 1)?",
    code: `const categories = [['Electronics', 'Phones'], ['Clothing'], ['Books', ['Fiction', 'NonFiction']]];`,
    options: [
      "['Electronics', 'Phones', 'Clothing', 'Books', ['Fiction', 'NonFiction']]",
      "['Electronics', 'Phones', 'Clothing', 'Books', 'Fiction', 'NonFiction']",
      "[['Electronics', 'Phones'], ['Clothing'], ['Books', ['Fiction', 'NonFiction']]]",
      "['Electronics', 'Phones', 'Clothing', 'Books']",
    ],
    correctAnswer: "['Electronics', 'Phones', 'Clothing', 'Books', ['Fiction', 'NonFiction']]",
    answerShort:
      "flat(1) flattens one level. 'Books' array is still nested. Use flat(2) or flat(Infinity).",
    answer: `const flatCategories = categories.flat();
console.log(flatCategories);
// ['Electronics', 'Phones', 'Clothing', 'Books', ['Fiction', 'NonFiction']]`,
    explanation: `<strong>flat(depth)</strong> creates a new array with sub-array elements concatenated. Default depth is 1. Our array has 2 levels of nesting for 'Books', so depth 1 doesn't fully flatten it. Use \`flat(2)\` or <span class="highlight">Infinity</span> for unknown depth. flat does not mutate the original.`,
  },
  {
    id: 27,
    difficulty: "easy",
    category: "Array.isArray",
    answerType: "multiple-choice",
    title: "Validate API Response",
    business:
      "An API might return either an array of users or a single object on error. You must check before processing.",
    question: "What does Array.isArray([1,2,3]) return?",
    code: `const apiResponse = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];`,
    options: ["true", "false", "undefined", "'array'"],
    correctAnswer: "true",
    answerShort:
      "Array.isArray is the ONLY reliable way to check for arrays. typeof says 'object'.",
    answer: `if (Array.isArray(apiResponse)) {
  console.log('Processing', apiResponse.length, 'users');
} else {
  console.log('Error: expected an array');
}`,
    explanation: `<strong>Array.isArray()</strong> is the <span class="highlight">only reliable way</span> to check if something is an array. \`typeof arr\` returns "object" (not helpful). \`instanceof Array\` fails across iframes and different realms. Array.isArray works correctly in all contexts. Always validate API data before calling array methods!`,
  },
  {
    id: 28,
    difficulty: "easy",
    category: "Array.from",
    answerType: "multiple-choice",
    title: "Convert Arguments to Array",
    business:
      "A logging function receives an unknown number of arguments and needs to convert them to a proper array for processing.",
    question: 'What does Array.from("hello") return?',
    code: `function logAll() {
  const args = Array.from(arguments);
  console.log(args);
}
logAll('error', 'user 5', 'timeout');`,
    options: ["['h', 'e', 'l', 'l', 'o']", "['hello']", "['h', 'e', 'l', 'o']", "'hello'"],
    correctAnswer: "['h', 'e', 'l', 'l', 'o']",
    answerShort:
      "Array.from converts iterables (strings, Set, Map) and array-like objects to arrays.",
    answer: `function logAll() {
  const args = Array.from(arguments);
  console.log(args); // ['error', 'user 5', 'timeout']
}`,
    explanation: `<strong>Array.from()</strong> converts <span class="highlight">iterable or array-like</span> objects to a real array. Array-like objects have a length property and indexed elements (like arguments, NodeList, or strings). It also accepts a map function: \`Array.from('hello', char => char.toUpperCase())\`.`,
  },
  {
    id: 29,
    difficulty: "easy",
    category: "Array.of",
    answerType: "multiple-choice",
    title: "Create Array from Values",
    business:
      "A function receives individual product IDs and must create an array from them to query the database.",
    question: "What does Array.of(101, 202, 303, 404) return?",
    code: `const result = Array.of(101, 202, 303, 404);`,
    options: ["[101, 202, 303, 404]", "[101]", "Array(4)", "undefined"],
    correctAnswer: "[101, 202, 303, 404]",
    answerShort:
      "Array.of creates an array from its arguments. Unlike Array(5) which creates empty slots.",
    answer: `const productIds = Array.of(101, 202, 303, 404);
console.log(productIds); // [101, 202, 303, 404]`,
    explanation: `<strong>Array.of()</strong> creates a new array from its arguments, regardless of number or type. Unlike \`new Array(5)\` which creates an empty array of length 5, \`Array.of(5)\` creates \`[5]\`. This eliminates the confusing behavior of the Array constructor.`,
  },
  {
    id: 30,
    difficulty: "easy",
    category: "fill",
    answerType: "multiple-choice",
    title: "Initialize Scoreboard",
    business:
      "A game starts with 10 players all having a score of 0. Create and initialize the scoreboard.",
    question: "What does new Array(3).fill(0) return?",
    code: `const scores = new Array(10);`,
    options: [
      "[0, 0, 0]",
      "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]",
      "[undefined, undefined, undefined]",
      "0",
    ],
    correctAnswer: "[0, 0, 0]",
    answerShort:
      "fill(value) sets all elements to the given value. Mutates the array and returns it.",
    answer: `const scores = new Array(10).fill(0);
console.log(scores); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`,
    explanation: `<strong>fill(value, start?, end?)</strong> fills an array with a static value. It <span class="highlight">mutates the original array</span> and returns it. Be careful: filling with objects fills all slots with the <span class="highlight">same reference</span> — changing one changes all! For unique objects, use \`Array.from({length: 10}, () => ({}))\`.`,
  },
  {
    id: 31,
    difficulty: "easy",
    category: "keys",
    title: "Get All Indices",
    business:
      "You have a sparse array from a database query and need to know which positions have data.",
    question: "Use keys() to get an iterator of all indices, then convert to array.",
    code: `const data = ['a', , 'c', , 'e']; // sparse array`,
    answer: `const indices = Array.from(data.keys());
console.log(indices); // [0, 1, 2, 3, 4]`,
    explanation: `<strong>keys()</strong> returns an <span class="highlight">Array Iterator</span> containing the keys (indices) of the array. Even sparse array slots have keys! To get only non-empty indices, combine with filter: \`data.map((v,i) => v !== undefined ? i : -1).filter(i => i !== -1)\`.`,
  },
  {
    id: 32,
    difficulty: "easy",
    category: "values",
    answerType: "text",
    title: "Iterate Over Values",
    business:
      "You need to iterate over a Set-like array using the values iterator for a custom loop.",
    question: "Type the output of Array.from(items.values()).",
    code: `const items = ['Apple', 'Banana', 'Cherry'];`,
    correctAnswer: "['Apple', 'Banana', 'Cherry']",
    answerShort: "values() returns an iterator. Array.from converts it to a real array.",
    answer: `const valuesArray = Array.from(items.values());
console.log(valuesArray); // ['Apple', 'Banana', 'Cherry']`,
    explanation: `<strong>values()</strong> returns a new Array Iterator that yields each value. This is similar to using for...of or forEach, but gives you an iterator object you can pass around, useful for <span class="highlight">lazy evaluation</span> and custom iteration patterns.`,
  },
  {
    id: 33,
    difficulty: "easy",
    category: "entries",
    answerType: "text",
    title: "Get Index-Value Pairs",
    business:
      "A data analyst needs both the position and value of each data point for a scatter plot.",
    question:
      "What is the first entry [index, value] from data.entries()? Type your answer (e.g., [index, value]).",
    code: `const data = [10, 20, 30, 40];`,
    correctAnswer: "[0, 10]",
    answerShort: "entries() returns [index, value] pairs. First entry: index 0, value 10.",
    answer: `const entries = Array.from(data.entries());
console.log(entries); // [[0, 10], [1, 20], [2, 30], [3, 40]]`,
    explanation: `<strong>entries()</strong> returns an iterator of <span class="highlight">[index, value]</span> pairs. This is useful when you need both the key and value simultaneously, like when creating charts, tables, or when you need to destructure both in a for...of loop: \`for (const [i, v] of arr.entries())\`.`,
  },
  {
    id: 34,
    difficulty: "easy",
    category: "findIndex",
    answerType: "multiple-choice",
    title: "Find Position of First Defective",
    business: "A quality control system needs the index of the first failed test in a batch.",
    question: "What index does findIndex return for the first test with passed: false?",
    code: `const tests = [
  { id: 'T1', passed: true },
  { id: 'T2', passed: true },
  { id: 'T3', passed: false },
  { id: 'T4', passed: false }
];`,
    options: ["2", "3", "0", "-1"],
    correctAnswer: "2",
    answerShort: "findIndex returns the index (0-based) of the first match. T3 is at index 2.",
    answer: `const idx = tests.findIndex(t => !t.passed);
console.log(idx); // 2`,
    explanation: `<strong>findIndex</strong> works like find but returns the <span class="highlight">index</span> instead of the element. Returns <span class="highlight">-1</span> if no element matches. This is useful for splice operations, for reordering UI lists, or when you need to know WHERE something is, not just what it is.`,
  },
  {
    id: 35,
    difficulty: "easy",
    category: "flatMap",
    answerType: "multiple-choice",
    title: "Expand Order Quantities",
    business:
      "An order system has items with quantities. You need to expand each item into individual line items for the packing slip.",
    question: "Use flatMap to expand each item into an array of its quantity, then flatten.",
    code: `const order = [
  { product: 'Shirt', qty: 2 },
  { product: 'Hat', qty: 1 },
  { product: 'Socks', qty: 3 }
];`,
    answer: `const lines = order.flatMap(item => Array(item.qty).fill(item.product));
console.log(lines);
// ['Shirt', 'Shirt', 'Hat', 'Socks', 'Socks', 'Socks']`,
    explanation: `<strong>flatMap</strong> is map followed by flat(1) in one step. Each callback returns an array, and flatMap flattens one level. This is incredibly useful when each input element produces <span class="highlight">zero, one, or multiple</span> output elements. If you return an empty array [], the element is effectively removed.`,
  },

  // ======================== MEDIUM ========================
  {
    id: 36,
    difficulty: "medium",
    category: "map",
    title: "Complete Order Summary",
    business:
      "An e-commerce order shows item name, quantity, and unit price. You must compute a summary with line totals.",
    question: 'Use map to add a "total" field (qty * price) to each order item.',
    code: `const orderItems = [
  { name: 'Laptop', qty: 1, price: 1200 },
  { name: 'Mouse', qty: 2, price: 25 },
  { name: 'Keyboard', qty: 1, price: 80 }
];`,
    answer: `const withTotals = orderItems.map(item => ({
  ...item,
  total: item.qty * item.price
}));
console.log(withTotals);
// [
//   { name: 'Laptop', qty: 1, price: 1200, total: 1200 },
//   { name: 'Mouse', qty: 2, price: 25, total: 50 },
//   { name: 'Keyboard', qty: 1, price: 80, total: 80 }
// ]`,
    explanation: `Here we use <strong>map</strong> to transform objects while preserving existing properties via the <span class="highlight">spread operator (...item)</span>, then adding a computed field. This is the most common real-world pattern for map: taking data from an API and enriching it with computed values for display.`,
  },
  {
    id: 37,
    difficulty: "medium",
    category: "map",
    title: "Generate Product URLs",
    business: "A CMS needs to generate SEO-friendly URLs for all products using their name and ID.",
    question:
      'Use map to create URL slugs: "/product/{id}-{name}" with name lowercased and spaces replaced by hyphens.',
    code: `const products = [
  { id: 1, name: 'Wireless Mouse' },
  { id: 2, name: 'USB-C Hub' },
  { id: 3, name: 'Laptop Stand' }
];`,
    answer: `const urls = products.map(p => 
  '/product/' + p.id + '-' + p.name.toLowerCase().replace(/\\s+/g, '-')
);
console.log(urls);
// ['/product/1-wireless-mouse', '/product/2-usb-c-hub', '/product/3-laptop-stand']`,
    explanation: `This demonstrates <strong>map</strong> with string transformation chaining: \`.toLowerCase().replace()\`. The regex <span class="highlight">\\s+</span> matches all whitespace. In real apps, you'd also handle special characters, encodeURIComponent, and ensure uniqueness. This pattern powers URL generation in most CMS and e-commerce platforms.`,
  },
  {
    id: 38,
    difficulty: "medium",
    category: "filter",
    answerType: "multiple-choice",
    title: "Advanced Product Filtering",
    business:
      'A search filter shows products that are in stock, belong to "Electronics" category, AND cost less than $500.',
    question: "How many products pass all three filter conditions?",
    code: `const products = [
  { name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
  { name: 'Mouse', category: 'Electronics', price: 25, inStock: true },
  { name: 'Desk', category: 'Furniture', price: 300, inStock: true },
  { name: 'Keyboard', category: 'Electronics', price: 450, inStock: false },
  { name: 'Headphones', category: 'Electronics', price: 150, inStock: true }
];`,
    options: ["2", "3", "4", "1"],
    correctAnswer: "2",
    answerShort:
      "Mouse and Headphones: inStock, Electronics, price < 500. Laptop too expensive, Desk wrong category, Keyboard out of stock.",
    answer: `const result = products.filter(p => 
  p.inStock && p.category === 'Electronics' && p.price < 500
);
console.log(result);
// [{ name: 'Mouse', category: 'Electronics', price: 25, inStock: true },
//  { name: 'Headphones', category: 'Electronics', price: 150, inStock: true }]`,
    explanation: `Multiple conditions in <strong>filter</strong> are combined with <span class="highlight">&&</span> (AND logic). Each condition is evaluated left-to-right with short-circuit evaluation — if \`inStock\` is false, the remaining conditions are skipped. For complex filtering, extract the condition into a named function for readability.`,
  },
  {
    id: 39,
    difficulty: "medium",
    category: "filter",
    title: "Remove Duplicate Entries",
    business:
      "An imported CSV had duplicate customer emails. You need a clean deduplicated list based on email.",
    question: "Use filter with index to keep only the first occurrence of each email.",
    code: `const customers = [
  { email: 'alice@co.com', name: 'Alice' },
  { email: 'bob@co.com', name: 'Bob' },
  { email: 'alice@co.com', name: 'Alice' },
  { email: 'charlie@co.com', name: 'Charlie' },
  { email: 'bob@co.com', name: 'Bob' }
];`,
    answer: `const unique = customers.filter((c, i, arr) => 
  i === arr.findIndex(x => x.email === c.email)
);
console.log(unique);
// 3 items: Alice, Bob, Charlie`,
    explanation: `The trick: for each element, \`findIndex\` returns the index of the <span class="highlight">first occurrence</span>. If the current index matches, this is the first time we've seen this email. If not, it's a duplicate. This is O(n²) — for large datasets, use a <span class="highlight">Set</span> or a <span class="highlight">Map</span> (O(n)).`,
  },
  {
    id: 40,
    difficulty: "medium",
    category: "filter",
    title: "Date Range Filter",
    business:
      "A booking system needs to show all reservations falling within a specific date range.",
    question: 'Use filter to find bookings between "2024-06-01" and "2024-06-30".',
    code: `const bookings = [
  { guest: 'Alice', date: '2024-05-20' },
  { guest: 'Bob', date: '2024-06-15' },
  { guest: 'Charlie', date: '2024-06-28' },
  { guest: 'Diana', date: '2024-07-05' }
];`,
    answer: `const start = new Date('2024-06-01');
const end = new Date('2024-06-30');
const juneBookings = bookings.filter(b => {
  const d = new Date(b.date);
  return d >= start && d <= end;
});
console.log(juneBookings); // Bob and Charlie`,
    explanation: `Date filtering with <strong>filter</strong> requires converting strings to Date objects for comparison. Always parse dates in the callback or pre-compute parsed dates. Use <span class="highlight">ISO 8601 format (YYYY-MM-DD)</span> for reliable date parsing. For complex date logic, consider libraries like date-fns or dayjs.`,
  },
  {
    id: 41,
    difficulty: "medium",
    category: "reduce",
    answerType: "multiple-choice",
    title: "Group Sales by Region",
    business: "A sales team wants to see total revenue grouped by region for a quarterly report.",
    question: "What is the total sales amount for the North region after the reduce?",
    code: `const sales = [
  { region: 'North', amount: 5000 },
  { region: 'South', amount: 3000 },
  { region: 'North', amount: 2000 },
  { region: 'East', amount: 4000 },
  { region: 'South', amount: 1500 }
];`,
    options: ["7000", "5000", "2000", "4500"],
    correctAnswer: "7000",
    answerShort:
      "North appears twice: 5000 + 2000 = 7000. The accumulator starts as {} and builds the sum.",
    answer: `const byRegion = sales.reduce((acc, sale) => {
  acc[sale.region] = (acc[sale.region] || 0) + sale.amount;
  return acc;
}, {});
console.log(byRegion); // { North: 7000, South: 4500, East: 4000 }`,
    explanation: `This is the <span class="highlight">groupBy</span> pattern using reduce. The accumulator starts as an empty object \`{}\`. For each sale, we check if the region key exists — if not, \`acc[sale.region] || 0\` gives 0 (falsy fallback). Then we add the amount. This is a fundamental data aggregation pattern used in reporting across all industries.`,
  },
  {
    id: 42,
    difficulty: "medium",
    category: "reduce",
    title: "Build Lookup Map (ID → User)",
    business:
      "You have a user list and need O(1) lookups by ID for a chat application where messages reference user IDs.",
    question: "Use reduce to create a map object: { [id]: user }.",
    code: `const users = [
  { id: 101, name: 'Alice', email: 'alice@co.com' },
  { id: 102, name: 'Bob', email: 'bob@co.com' },
  { id: 103, name: 'Charlie', email: 'charlie@co.com' }
];`,
    answer: `const userMap = users.reduce((map, user) => {
  map[user.id] = user;
  return map;
}, {});
console.log(userMap[102]); // { id: 102, name: 'Bob', ... }`,
    explanation: `Converting an array to a <span class="highlight">lookup dictionary</span> is one of the most practical reduce patterns. Instead of \`.find()\` (O(n) each time), you build the map once (O(n)) and then look up in O(1). This is essential for chat apps, real-time dashboards, and any system with relational data.`,
  },
  {
    id: 43,
    difficulty: "medium",
    category: "reduce",
    title: "Count Occurrences",
    business:
      "A support team wants to see how many tickets fall into each category to identify the most common issues.",
    question: "Use reduce to count how many products exist in each category.",
    code: `const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Mouse', category: 'Electronics' },
  { name: 'Jeans', category: 'Clothing' },
  { name: 'Sofa', category: 'Furniture' },
  { name: 'Keyboard', category: 'Electronics' }
];`,
    answer: `const counts = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { Electronics: 3, Clothing: 2, Furniture: 1 }`,
    explanation: `This <span class="highlight">frequency counter</span> pattern is used everywhere: counting page visits, word frequency in documents, product category distribution, etc. The logic: for each item, increment the count for its category, initializing to 0 if it doesn't exist yet. Same pattern as groupBy but counting instead of summing.`,
  },
  {
    id: 44,
    difficulty: "medium",
    category: "some",
    answerType: "multiple-choice",
    title: "Permission Check: Any Admin Online?",
    business:
      "A system admin dashboard needs to show a warning if any admin user is currently logged in across all sessions.",
    question: "Does some return true when checking for admin AND active?",
    code: `const sessions = [
  { user: 'Alice', role: 'user', active: true },
  { user: 'Bob', role: 'admin', active: false },
  { user: 'Charlie', role: 'user', active: true },
  { user: 'Diana', role: 'admin', active: true }
];`,
    options: ["true", "false"],
    correctAnswer: "true",
    answerShort:
      "some returns true because Diana is admin AND active. Bob is admin but NOT active.",
    answer: `const adminOnline = sessions.some(s => s.role === 'admin' && s.active);
console.log(adminOnline); // true (Diana is admin and active)`,
    explanation: `<strong>some</strong> with compound conditions. It returns true as soon as it finds Diana (admin + active). Bob is admin but not active, so some continues searching. This <span class="highlight">short-circuiting</span> makes some very efficient for large datasets — it stops at the first match.`,
  },
  {
    id: 45,
    difficulty: "medium",
    category: "every",
    answerType: "multiple-choice",
    title: "All Form Fields Valid?",
    business:
      "A form validation system must ensure ALL required fields have been filled before enabling the submit button.",
    question: "Does every return true when checking required fields for non-empty values?",
    code: `const formFields = [
  { name: 'email', value: 'a@b.com', required: true },
  { name: 'password', value: 'secret123', required: true },
  { name: 'phone', value: '', required: true },
  { name: 'bio', value: 'Hello!', required: false }
];`,
    options: ["true", "false"],
    correctAnswer: "false",
    answerShort:
      "phone is required but empty, so every returns false. bio is not required, so it's not checked.",
    answer: `const valid = formFields
  .filter(f => f.required)
  .every(f => f.value.trim() !== '');
console.log(valid); // false (phone is empty)`,
    explanation: `Chaining <strong>filter</strong> then <strong>every</strong>: first we get only required fields, then we check each one has a non-empty value. The <span class="highlight">.trim()</span> handles whitespace-only inputs. This is the exact pattern used in form validation libraries, ensuring the submit button is only enabled when all constraints pass.`,
  },
  {
    id: 46,
    difficulty: "medium",
    category: "sort",
    title: "Sort by Multiple Criteria",
    business:
      "An employee directory should sort by department first, then by salary descending within each department.",
    question: "Use sort to order by department (alphabetically), then salary (highest first).",
    code: `const employees = [
  { name: 'Alice', dept: 'Engineering', salary: 120000 },
  { name: 'Bob', dept: 'Design', salary: 90000 },
  { name: 'Charlie', dept: 'Engineering', salary: 150000 },
  { name: 'Diana', dept: 'Design', salary: 95000 },
  { name: 'Eve', dept: 'Engineering', salary: 110000 }
];`,
    answer: `employees.sort((a, b) => {
  if (a.dept !== b.dept) return a.dept.localeCompare(b.dept);
  return b.salary - a.salary;
});
console.log(employees);
// Design: Diana, Bob | Engineering: Charlie, Alice, Eve`,
    explanation: `For <span class="highlight">multi-criteria sorting</span>, compare the first criterion. If they differ (a.dept !== b.dept), return that comparison. If they're the same, fall through to the second criterion. Use <span class="highlight">localeCompare</span> for string sorting (handles accents, case), and subtraction for numeric. This mirrors SQL's ORDER BY dept ASC, salary DESC.`,
  },
  {
    id: 47,
    difficulty: "medium",
    category: "sort",
    title: "Sort by Date (Newest First)",
    business: "A news feed must display articles with the most recent publication date first.",
    question: "Use sort to order articles by date descending (newest first).",
    code: `const articles = [
  { title: 'JS Tips', date: '2024-03-15' },
  { title: 'CSS Grid', date: '2024-06-01' },
  { title: 'React Hooks', date: '2024-01-10' },
  { title: 'Node v20', date: '2024-04-22' }
];`,
    answer: `articles.sort((a, b) => new Date(b.date) - new Date(a.date));
console.log(articles);
// CSS Grid, Node v20, JS Tips, React Hooks`,
    explanation: `Subtracting Date objects coerces them to <span class="highlight">milliseconds since epoch</span>. \`b.date - a.date\` puts newer dates first (descending). For ascending (oldest first): \`a.date - b.date\`. The ISO date string "2024-06-01" parses reliably in most modern JS engines.`,
  },
  {
    id: 48,
    difficulty: "medium",
    category: "find",
    title: "Find with Complex Condition",
    business:
      "A hotel booking system needs to find the first available room matching guest preferences: non-smoking, at least 2 beds, under $200/night.",
    question: "Use find to locate the first room matching all criteria.",
    code: `const rooms = [
  { id: 1, smoking: true, beds: 1, price: 150 },
  { id: 2, smoking: false, beds: 1, price: 180 },
  { id: 3, smoking: false, beds: 2, price: 220 },
  { id: 4, smoking: false, beds: 2, price: 190 }
];`,
    answer: `const match = rooms.find(r => 
  !r.smoking && r.beds >= 2 && r.price < 200
);
console.log(match); // { id: 4, smoking: false, beds: 2, price: 190 }`,
    explanation: `<strong>find</strong> stops at the first match. Room 2 has 1 bed (fails beds >= 2). Room 3 is over $200. Room 4 passes all three conditions. In a real booking system, you'd also check availability dates and sort by price before using find.`,
  },
  {
    id: 49,
    difficulty: "medium",
    category: "splice",
    title: "Replace an Item",
    business:
      "A user wants to update their shipping address in the address book at a specific position.",
    question: "Use splice to replace the item at index 1 with a new address.",
    code: `let addresses = [
  { label: 'Home', street: '123 Main St' },
  { label: 'Work', street: '456 Oak Ave' },
  { label: 'Cottage', street: '789 Pine Ln' }
];
const newAddress = { label: 'Office', street: '321 Elm St' };`,
    answer: `addresses.splice(1, 1, newAddress);
console.log(addresses);
// [Home, Office, Cottage]`,
    explanation: `<strong>splice(start, deleteCount, ...items)</strong> can simultaneously remove and add elements. Here we delete 1 item at index 1 and insert the new address in its place. This is the go-to method for <span class="highlight">in-place array modifications</span> like reordering lists, replacing items, or inserting at specific positions.`,
  },
  {
    id: 50,
    difficulty: "medium",
    category: "slice",
    title: "Pagination with Page Numbers",
    business: "A blog shows 5 posts per page. Extract the correct slice for page 3.",
    question: "Use slice to get posts for page 3 (5 per page, pages are 1-indexed).",
    code: `const posts = Array.from({length: 15}, (_, i) => 'Post ' + (i + 1));
const pageSize = 5;
const pageNum = 3;`,
    answer: `const start = (pageNum - 1) * pageSize;
const pagePosts = posts.slice(start, start + pageSize);
console.log(pagePosts); // ['Post 11', 'Post 12', 'Post 13', 'Post 14', 'Post 15']`,
    explanation: `Pagination formula: <span class="highlight">start = (page - 1) * size</span>. Page 3 starts at index 10 (2*5) and ends at 15 (exclusive). Since posts has 15 items (0-14), slice returns 'Post 11' through 'Post 15'. For page 4, slice would return an empty array — handle this gracefully in your UI.`,
  },
  {
    id: 51,
    difficulty: "medium",
    category: "flatMap",
    title: "Extract All Tags from Posts",
    business:
      "A blog needs a tag cloud showing all tags used across all posts, flattened into one list.",
    question: "Use flatMap to extract all tags from all posts into a single array.",
    code: `const posts = [
  { title: 'Post 1', tags: ['js', 'arrays'] },
  { title: 'Post 2', tags: ['react', 'js'] },
  { title: 'Post 3', tags: ['css', 'design', 'react'] }
];`,
    answer: `const allTags = posts.flatMap(p => p.tags);
console.log(allTags); // ['js', 'arrays', 'react', 'js', 'css', 'design', 'react']`,
    explanation: `<strong>flatMap</strong> is perfect when each element produces an array and you want everything in one flat list. With just map you'd get <span class="highlight">[['js','arrays'], ['react','js'], ...]</span> (nested), requiring an additional .flat(). flatMap does both in one efficient pass. Add \`...new Set(allTags)\` to deduplicate!`,
  },
  {
    id: 52,
    difficulty: "medium",
    category: "forEach",
    title: "Send Bulk Notifications",
    business: "A marketing system needs to send a notification email to every subscribed user.",
    question: "Use forEach to log (simulate sending) a notification to each subscribed user.",
    code: `const users = [
  { name: 'Alice', email: 'alice@co.com', subscribed: true },
  { name: 'Bob', email: 'bob@co.com', subscribed: false },
  { name: 'Charlie', email: 'charlie@co.com', subscribed: true }
];`,
    answer: `users.forEach(u => {
  if (u.subscribed) {
    console.log('Email sent to ' + u.email + ': Check out our sale!');
  }
});`,
    explanation: `<strong>forEach</strong> with a side effect and a condition inside. Each subscribed user gets a simulated email. In real code, this would call an email API. forEach is ideal when you need to <span class="highlight">perform an action for each element</span> but don't need to build a new array. Note: you can't break out of forEach — use for...of if you need early termination.`,
  },
  {
    id: 53,
    difficulty: "medium",
    category: "includes",
    answerType: "multiple-choice",
    title: "Check Multiple Conditions",
    business:
      'A shipping calculator needs to check if the selected country is in the "free shipping" zone list.',
    question: 'Does freeShippingCountries.includes("Canada") return true?',
    code: `const freeShippingCountries = ['USA', 'Canada', 'Mexico'];
const customerCountry = 'Canada';`,
    options: ["true", "false"],
    correctAnswer: "true",
    answerShort: "includes is case-sensitive. 'Canada' === 'Canada' → true.",
    answer: `const isFree = freeShippingCountries.includes(customerCountry);
console.log(isFree); // true`,
    explanation: `<strong>includes</strong> on an array of allowed values is a clean alternative to multiple || conditions. Instead of \`country === 'USA' || country === 'Canada' || ...\`, use \`allowed.includes(country)\`. This is <span class="highlight">declarative, readable, and easy to update</span> — just add or remove from the array.`,
  },
  {
    id: 54,
    difficulty: "medium",
    category: "reduce",
    answerType: "multiple-choice",
    title: "Calculate Average Rating",
    business: "A product page shows the average customer rating. Compute it from all reviews.",
    question: "What is the average rating: (5 + 3 + 4 + 5 + 2) / 5?",
    code: `const reviews = [
  { user: 'Alice', rating: 5 },
  { user: 'Bob', rating: 3 },
  { user: 'Charlie', rating: 4 },
  { user: 'Diana', rating: 5 },
  { user: 'Eve', rating: 2 }
];`,
    options: ["3.8", "3.6", "4.0", "4.2"],
    correctAnswer: "3.8",
    answerShort: "Sum = 19. 19 / 5 = 3.8. Reduce to sum, then divide by length.",
    answer: `const total = reviews.reduce((sum, r) => sum + r.rating, 0);
const avg = total / reviews.length;
console.log(avg); // 3.8`,
    explanation: `Two-step process: <strong>reduce</strong> to sum all ratings, then <span class="highlight">divide by the length</span>. Always check for empty arrays to avoid division by zero: \`reviews.length ? total / reviews.length : 0\`. For integer averages, consider rounding: \`Math.round(avg * 10) / 10\` for 1 decimal place.`,
  },
  {
    id: 55,
    difficulty: "medium",
    category: "map",
    title: "Format Currency Display",
    business:
      "An accounting dashboard shows financial amounts. Format raw numbers as currency strings ($1,234.56).",
    question: "Use map to format each amount as USD currency string.",
    code: `const amounts = [1234.5, 50, 999999.99, 0.75];`,
    answer: `const formatted = amounts.map(a => 
  '$' + a.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
);
console.log(formatted);
// ['$1,234.50', '$50.00', '$999,999.99', '$0.75']`,
    explanation: `<strong>toLocaleString</strong> handles <span class="highlight">number formatting according to locale rules</span> — thousands separators, decimal places, and currency symbols. This is much better than manual formatting. Combine with <strong>map</strong> to transform an entire dataset's display format in one clean pass.`,
  },
  {
    id: 56,
    difficulty: "medium",
    category: "reduce",
    title: "Flatten Nested Array (Custom)",
    business:
      "An analytics tool collects event data in nested arrays from multiple sources. You need a single flat list.",
    question: "Use reduce to flatten a 2-level nested array into a single array.",
    code: `const nested = [[1, 2], [3, [4, 5]], [6]];`,
    answer: `const flat = nested.reduce((acc, val) => 
  acc.concat(Array.isArray(val) ? val : [val]), []);
console.log(flat); // [1, 2, 3, [4, 5], 6]`,
    explanation: `This custom flatten with <strong>reduce</strong> concatenates each element into the accumulator. We check if each value is an array with <span class="highlight">Array.isArray</span> before concatenating. Note this only handles one level of nesting — for deep flattening, you'd need a recursive version (see Hard section).`,
  },
  {
    id: 57,
    difficulty: "medium",
    category: "map",
    title: "Extract Specific Keys",
    business:
      "An API returns user objects with 20 fields, but the profile page only needs name, email, and avatar URL.",
    question: "Use map to extract only the required fields from each user.",
    code: `const users = [
  { id: 1, name: 'Alice', email: 'alice@co.com', age: 28, phone: '555-0101', avatar: 'alice.jpg' },
  { id: 2, name: 'Bob', email: 'bob@co.com', age: 35, phone: '555-0102', avatar: 'bob.jpg' }
];`,
    answer: `const profiles = users.map(u => ({
  name: u.name,
  email: u.email,
  avatar: u.avatar
}));
console.log(profiles);
// [{ name: 'Alice', email: 'alice@co.com', avatar: 'alice.jpg' }, ...]`,
    explanation: `<strong>Map with object destructuring</strong> to select only the fields you need. This is called <span class="highlight">projection</span> — you project a subset of properties. This reduces data transfer, avoids exposing sensitive fields (like phone), and creates clean DTOs (Data Transfer Objects) for the frontend.`,
  },
  {
    id: 58,
    difficulty: "medium",
    category: "filter",
    title: "Filter by Search Query",
    business:
      "A search bar on an e-commerce site needs to filter products whose name matches a user-entered query.",
    question: 'Use filter to find products whose name includes "Pro" (case-insensitive).',
    code: `const products = [
  { name: 'MacBook Pro', price: 2499 },
  { name: 'iPad Air', price: 599 },
  { name: 'iPhone Pro Max', price: 1099 },
  { name: 'Apple Watch', price: 399 }
];
const query = 'Pro';`,
    answer: `const results = products.filter(p => 
  p.name.toLowerCase().includes(query.toLowerCase())
);
console.log(results);
// MacBook Pro, iPhone Pro Max`,
    explanation: `<span class="highlight">Case-insensitive search</span>: convert both the data and the query to lowercase before using includes. This pattern powers autocomplete, search bars, and filter inputs. For better performance with large datasets, consider debouncing the input and using index-based search (like lunr.js or flexsearch).`,
  },
  {
    id: 59,
    difficulty: "medium",
    category: "reduce",
    title: "Find Min and Max",
    business:
      "A stock trading dashboard needs the 52-week high and low prices from daily closing price data.",
    question: "Use reduce to find both the minimum and maximum values in one pass.",
    code: `const prices = [145.3, 152.8, 138.9, 161.2, 149.7, 157.4, 143.1];`,
    answer: `const { min, max } = prices.reduce((acc, price) => ({
  min: Math.min(acc.min, price),
  max: Math.max(acc.max, price)
}), { min: Infinity, max: -Infinity });
console.log(min, max); // 138.9 161.2`,
    explanation: `This reduce accumulates an object with both min and max. Initialize min to <span class="highlight">Infinity</span> (so any number is smaller) and max to <span class="highlight">-Infinity</span> (so any number is larger). Using <span class="highlight">Math.min/Math.max</span> for comparison. One pass through the array — O(n) instead of two separate O(n) calls to Math.min and Math.max on the whole array.`,
  },
  {
    id: 60,
    difficulty: "medium",
    category: "map",
    title: "Convert Object Array to Select Options",
    business:
      "A form dropdown needs an array of { value, label } options from product data for a <select> element.",
    question: "Use map to convert products to dropdown options { value: id, label: name }.",
    code: `const products = [
  { id: 1, name: 'Wireless Mouse' },
  { id: 2, name: 'Mechanical Keyboard' },
  { id: 3, name: 'USB-C Hub' }
];`,
    answer: `const options = products.map(p => ({
  value: p.id,
  label: p.name
}));
console.log(options);
// [{ value: 1, label: 'Wireless Mouse' }, ...]`,
    explanation: `This <span class="highlight">data normalization</span> pattern converts API data to the format your UI components expect. The { value, label } shape is the standard for most form libraries (React Select, Ant Design, Material-UI). This separation of concerns keeps API code and UI code independent.`,
  },
  {
    id: 61,
    difficulty: "medium",
    category: "slice",
    title: "Get Last N Items",
    business: "A dashboard shows the most recent 5 notifications from the activity log.",
    question: "Use slice with a negative index to get the last 5 items.",
    code: `const notifications = [
  'Login', 'Logout', 'Purchase', 'Refund', 'Review',
  'Share', 'Like', 'Comment', 'Follow', 'Unfollow'
];`,
    answer: `const recent5 = notifications.slice(-5);
console.log(recent5); // ['Share', 'Like', 'Comment', 'Follow', 'Unfollow']`,
    explanation: `<span class="highlight">Negative indices in slice</span> count from the end: \`-5\` means "5 from the end". \`slice(-5)\` is equivalent to \`slice(length-5, length)\`. This is a clean, idiomatic way to get the last N items without computing the starting index manually.`,
  },
  {
    id: 62,
    difficulty: "medium",
    category: "concat",
    title: "Merge with Deduplication",
    business:
      "You have two user lists from different sources that may overlap. Merge without duplicates.",
    question: "Use concat and filter to merge arrays keeping only unique names.",
    code: `const listA = ['Alice', 'Bob', 'Charlie'];
const listB = ['Bob', 'Diana', 'Eve', 'Charlie'];`,
    answer: `const merged = listA.concat(listB.filter(name => !listA.includes(name)));
console.log(merged); // ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']`,
    explanation: `We concat listA with a <span class="highlight">filtered version of listB</span> that excludes items already in listA. This is O(n*m) — for large lists, use a Set: \`[...new Set([...listA, ...listB])]\` for O(n+m) performance. The Set approach is usually preferred in modern JavaScript.`,
  },
  {
    id: 63,
    difficulty: "medium",
    category: "every",
    title: "Validate All Emails",
    business:
      "A bulk email tool must verify that every email address in the import list has a valid format before sending.",
    question: "Use every with a regex test to validate all emails.",
    code: `const emails = ['alice@co.com', 'bob@co.com', 'charlie@co', 'diana@co.com'];`,
    answer: `const allValid = emails.every(e => 
  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(e)
);
console.log(allValid); // false (charlie@co has no TLD)`,
    explanation: `<strong>every</strong> with a <span class="highlight">regex validation</span>. The regex checks for: characters before @, characters between @ and ., and characters after the dot. 'charlie@co' has no dot, so it fails. For production, use a robust email validation library — regex alone can't catch all edge cases, but this pattern works for basic validation.`,
  },
  {
    id: 64,
    difficulty: "medium",
    category: "sort",
    title: "Custom Sort by Status Priority",
    business:
      "A task board sorts tasks by status priority: Critical > High > Medium > Low > Backlog.",
    question: "Use sort with a priority mapping to order tasks by severity.",
    code: `const tasks = [
  { title: 'Fix bug', status: 'High' },
  { title: 'Deploy', status: 'Critical' },
  { title: 'Refactor', status: 'Low' },
  { title: 'Update docs', status: 'Medium' },
  { title: 'Cleanup', status: 'Backlog' }
];`,
    answer: `const priority = { Critical: 1, High: 2, Medium: 3, Low: 4, Backlog: 5 };
tasks.sort((a, b) => priority[a.status] - priority[b.status]);
console.log(tasks);
// Deploy, Fix bug, Update docs, Refactor, Cleanup`,
    explanation: `<span class="highlight">Priority mapping</span> is a clean way to sort by a non-alphabetical custom order. We define a rank for each status, then subtract the ranks. This pattern works for any custom ordering: order statuses, ticket severity, shipping methods, subscription tiers — anything with a defined hierarchy.`,
  },
  {
    id: 65,
    difficulty: "medium",
    category: "flatMap",
    title: "Generate Calendar Dates",
    business:
      "A booking system needs to generate individual date slots from a date range for each room.",
    question: "Use flatMap to expand each month range into individual dates.",
    code: `const reservations = [
  { room: '101', dates: ['2024-06-01', '2024-06-02'] },
  { room: '102', dates: ['2024-06-03'] },
  { room: '103', dates: [] }
];`,
    answer: `const allReservations = reservations.flatMap(r => 
  r.dates.map(d => ({ room: r.room, date: d }))
);
console.log(allReservations);
// [{ room: '101', date: '2024-06-01' }, { room: '101', date: '2024-06-02' }, { room: '102', date: '2024-06-03' }]`,
    explanation: `<strong>flatMap</strong> with a nested map: for each reservation, we map each date to a { room, date } object, then flatMap flattens all these arrays into one. Room 103 produces an empty array which effectively removes it. This is the <span class="highlight">cartesian product</span> pattern — expanding one-to-many relationships.`,
  },
  {
    id: 66,
    difficulty: "medium",
    category: "findIndex",
    title: "Find and Update in Place",
    business:
      "A real-time collaboration app needs to find a document by ID and update its content.",
    question: "Use findIndex to locate the document, then update it via index.",
    code: `let documents = [
  { id: 'doc1', content: 'Hello' },
  { id: 'doc2', content: 'World' },
  { id: 'doc3', content: 'Foo' }
];
const updateId = 'doc2';
const newContent = 'Updated World';`,
    answer: `const idx = documents.findIndex(d => d.id === updateId);
if (idx !== -1) {
  documents[idx] = { ...documents[idx], content: newContent };
}
console.log(documents);
// doc2 now has content 'Updated World'`,
    explanation: `<strong>findIndex</strong> returns the index (or -1). We then use bracket notation to update in place using the <span class="highlight">spread operator</span> to preserve other properties while overriding content. Always check for -1! In state management (like React), you'd create a new array instead of mutating.`,
  },
  {
    id: 67,
    difficulty: "medium",
    category: "filter",
    title: "Remove Falsy Values",
    business:
      "A data cleaning pipeline needs to strip out all null, undefined, 0, and empty string entries from a dataset.",
    question: "Use filter with Boolean to remove all falsy values.",
    code: `const data = ['Apple', '', null, 'Banana', undefined, 0, 'Cherry', false];`,
    answer: `const clean = data.filter(Boolean);
console.log(clean); // ['Apple', 'Banana', 'Cherry']`,
    explanation: `<span class="highlight">filter(Boolean)</span> is a concise idiom. Boolean is a function that returns true for truthy values and false for falsy (false, 0, '', null, undefined, NaN). So filter(Boolean) keeps only truthy values. This is commonly used after splitting strings or parsing CSV to remove empty entries.`,
  },
  {
    id: 68,
    difficulty: "medium",
    category: "some",
    title: "Check for Overdue Tasks",
    business:
      "A project dashboard needs to show a red alert if any task is past its due date and not completed.",
    question: "Use some to check if any task is overdue (dueDate < today AND !completed).",
    code: `const tasks = [
  { title: 'Design', dueDate: '2024-06-10', completed: true },
  { title: 'Develop', dueDate: '2024-06-15', completed: false },
  { title: 'Test', dueDate: '2024-07-01', completed: false }
];
const today = new Date('2024-06-20');`,
    answer: `const hasOverdue = tasks.some(t => 
  !t.completed && new Date(t.dueDate) < today
);
console.log(hasOverdue); // true (Develop is overdue)`,
    explanation: `Task "Design" is completed, so skipped. Task "Develop" is not completed and due June 15 < June 20 — overdue! The moment some finds this, it returns true without checking "Test". This real-time <span class="highlight">overdue check</span> is used in project management tools like Jira, Trello, and Asana.`,
  },
  {
    id: 69,
    difficulty: "medium",
    category: "map",
    title: "Add Sequential IDs",
    business:
      "An imported CSV has items without IDs. You need to assign a unique sequential ID to each.",
    question: "Use map with index to add an id field (starting from 1).",
    code: `const items = [
  { name: 'Item A' },
  { name: 'Item B' },
  { name: 'Item C' }
];`,
    answer: `const withIds = items.map((item, i) => ({
  ...item,
  id: i + 1
}));
console.log(withIds);
// [{ name: 'Item A', id: 1 }, { name: 'Item B', id: 2 }, ...]`,
    explanation: `The <span class="highlight">index parameter</span> in map is useful for generating sequences, assigning positions, or creating rank numbers. Adding 1 because indices are 0-based but IDs should be 1-based for user display. This pattern is used in data import, spreadsheet processing, and ordering operations.`,
  },
  {
    id: 70,
    difficulty: "medium",
    category: "reduce",
    title: "Partition Array (Split by Condition)",
    business:
      'A customer support system splits tickets into "VIP" (priority customers) and "Regular" for different queues.',
    question: "Use reduce to partition users into two groups: admin and non-admin.",
    code: `const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'Diana', role: 'user' }
];`,
    answer: `const partitioned = users.reduce((acc, u) => {
  acc[u.role === 'admin' ? 0 : 1].push(u);
  return acc;
}, [[], []]);
console.log(partitioned[0]); // admins
console.log(partitioned[1]); // users`,
    explanation: `<span class="highlight">Partitioning</span> splits an array into two groups. The accumulator is <span class="highlight">[[], []]</span> — two empty arrays. The ternary determines which group to push into. This is more efficient than two separate filter calls (which would iterate twice). The result is [matching, non-matching].`,
  },

  // ======================== HARD ========================
  {
    id: 71,
    difficulty: "hard",
    category: "reduce",
    title: "Build Department Hierarchy",
    business:
      "A large org chart needs to group employees by department, then by team within each department.",
    question:
      "Use reduce to create a nested grouping: { Engineering: { Frontend: [...], Backend: [...] }, Design: {...} }.",
    code: `const employees = [
  { name: 'Alice', dept: 'Engineering', team: 'Frontend' },
  { name: 'Bob', dept: 'Engineering', team: 'Backend' },
  { name: 'Charlie', dept: 'Engineering', team: 'Frontend' },
  { name: 'Diana', dept: 'Design', team: 'UI' },
  { name: 'Eve', dept: 'Design', team: 'UX' }
];`,
    answer: `const org = employees.reduce((acc, emp) => {
  if (!acc[emp.dept]) acc[emp.dept] = {};
  if (!acc[emp.dept][emp.team]) acc[emp.dept][emp.team] = [];
  acc[emp.dept][emp.team].push(emp);
  return acc;
}, {});
console.log(org);
// Engineering: { Frontend: [Alice, Charlie], Backend: [Bob] }
// Design: { UI: [Diana], UX: [Eve] }`,
    explanation: `<strong>Nested grouping with reduce</strong>. We check and create each level of the hierarchy lazily. This pattern scales to any depth — you could group by dept > team > role > seniority. This is the <span class="highlight">multi-level groupBy</span> that powers organizational charts, reporting dashboards, and data warehousing ETL pipelines.`,
  },
  {
    id: 72,
    difficulty: "hard",
    category: "reduce",
    title: "E-commerce Cart Total with Tax & Discounts",
    business:
      "An e-commerce checkout calculates the cart total with 8% tax, a 10% discount on subtotals > $100, and per-item shipping.",
    question:
      "Use reduce to compute the final total. Rules: subtotal = sum(qty * price). If subtotal > 100, apply 10% discount. Add 8% tax. Add $5 shipping per unique product.",
    code: `const cart = [
  { product: 'Laptop', qty: 1, price: 999 },
  { product: 'Mouse', qty: 2, price: 25 },
  { product: 'USB Cable', qty: 3, price: 10 }
];`,
    answer: `const subtotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
const discount = subtotal > 100 ? subtotal * 0.1 : 0;
const afterDiscount = subtotal - discount;
const tax = afterDiscount * 0.08;
const shipping = cart.length * 5;
const total = afterDiscount + tax + shipping;
console.log(total);`,
    explanation: `This is a <span class="highlight">multi-step calculation</span> that mirrors real e-commerce pricing engines. We use reduce for the base subtotal, then apply business rules sequentially. In production, each step (discount, tax, shipping) would be a separate, testable function. This separation makes the logic <span class="highlight">auditable and maintainable</span> for finance compliance.`,
  },
  {
    id: 73,
    difficulty: "hard",
    category: "reduce",
    title: "Transaction Ledger with Running Balance",
    business:
      "A bank account needs a running balance after each transaction (deposit or withdrawal) for the statement.",
    question: 'Use reduce to add a "balance" field after each transaction, starting from 1000.',
    code: `const transactions = [
  { type: 'deposit', amount: 500 },
  { type: 'withdrawal', amount: 200 },
  { type: 'deposit', amount: 300 },
  { type: 'withdrawal', amount: 150 }
];
const initialBalance = 1000;`,
    answer: `const withBalances = transactions.reduce((acc, t) => {
  const prevBalance = acc.length > 0 ? acc[acc.length - 1].balance : initialBalance;
  const newBalance = t.type === 'deposit' ? prevBalance + t.amount : prevBalance - t.amount;
  acc.push({ ...t, balance: newBalance });
  return acc;
}, []);
console.log(withBalances);
// [{deposit,500, balance:1500}, {withdrawal,200, balance:1300}, ...]`,
    explanation: `This <span class="highlight">running balance</span> pattern is used in accounting, banking, and inventory systems. The accumulator is an array, not a scalar — we build a new array with each transaction augmented with the running total. The previous balance is the last element's balance <span class="highlight">(acc[acc.length - 1])</span> or the initial balance for the first transaction.`,
  },
  {
    id: 74,
    difficulty: "hard",
    category: "filter",
    title: "Implement Pagination with Search",
    business:
      "An API endpoint needs to filter products by search query AND category, then paginate the results.",
    question: "Chain filter (search + category) then slice (page 2, 3 per page).",
    code: `const products = [
  { name: 'Wireless Mouse', category: 'Electronics' },
  { name: 'Gaming Mouse', category: 'Electronics' },
  { name: 'Office Chair', category: 'Furniture' },
  { name: 'USB Mouse Pad', category: 'Accessories' },
  { name: 'Bluetooth Speaker', category: 'Electronics' },
  { name: 'Desk Lamp', category: 'Furniture' },
  { name: 'Mouse Trap', category: 'Home' }
];
const search = 'mouse', category = 'all', page = 2, size = 3;`,
    answer: `const filtered = products.filter(p => {
  const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
  const matchCat = category === 'all' || p.category === category;
  return matchSearch && matchCat;
});
const pageStart = (page - 1) * size;
const paged = filtered.slice(pageStart, pageStart + size);
console.log(paged);
// ['USB Mouse Pad'] (page 2 of results matching "mouse")`,
    explanation: `A realistic <span class="highlight">search + filter + pagination pipeline</span>. Step 1: filter by both search text (case-insensitive) and category. Step 2: slice for the requested page. The <span class="highlight">filtered</span> variable is reusable to show "Showing X of Y results". This architecture is how most e-commerce search endpoints work under the hood.`,
  },
  {
    id: 75,
    difficulty: "hard",
    category: "reduce",
    title: "Advanced Data Validation Pipeline",
    business:
      "An ETL pipeline validates imported data. Each row must pass multiple rules. Collect all errors per row.",
    question: "Use reduce to validate each user and collect all error messages for invalid ones.",
    code: `const data = [
  { name: 'Alice', email: 'alice@co.com', age: 25 },
  { name: 'Bob', email: 'invalid-email', age: 17 },
  { name: '', email: 'charlie@co.com', age: 30 },
  { name: 'Diana', email: 'diana@co.com', age: 12 }
];`,
    answer: `function validate(user) {
  const errors = [];
  if (!user.name || user.name.trim() === '') errors.push('Name is required');
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(user.email)) errors.push('Invalid email');
  if (user.age < 18) errors.push('Must be 18 or older');
  return errors;
}
const results = data.reduce((acc, user) => {
  const errors = validate(user);
  if (errors.length > 0) {
    acc.errors.push({ user: user.name || '(no name)', errors });
  } else {
    acc.valid.push(user);
  }
  return acc;
}, { valid: [], errors: [] });
console.log(results);`,
    explanation: `This <span class="highlight">validation pipeline</span> accumulates results into two buckets: valid rows and error rows with messages. The validator function returns an array of error strings — if empty, the row is valid. This pattern is used in <span class="highlight">data import wizards, CSV uploads, form batch validation, and ETL jobs</span> where you need to report all errors at once rather than failing on the first one.`,
  },
  {
    id: 76,
    difficulty: "hard",
    category: "sort",
    title: "Custom Sort: Featured Items First",
    business:
      "An online store shows featured products first, then remaining products sorted by rating descending.",
    question: "Use sort: featured items first (by name), then non-featured by rating.",
    code: `const products = [
  { name: 'Laptop', featured: false, rating: 4.5 },
  { name: 'Mouse', featured: true, rating: 4.0 },
  { name: 'Keyboard', featured: false, rating: 4.8 },
  { name: 'Monitor', featured: true, rating: 4.2 },
  { name: 'Headphones', featured: false, rating: 3.9 }
];`,
    answer: `products.sort((a, b) => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  if (a.featured && b.featured) return a.name.localeCompare(b.name);
  return b.rating - a.rating;
});
console.log(products);
// Monitor, Mouse, Keyboard, Laptop, Headphones`,
    explanation: `Three-tier sort: 1) Featured items first (boolean sort: featured = -1 → comes first). 2) Among featured, sort by name A-Z. 3) Among non-featured, sort by rating descending. This <span class="highlight">prioritized sorting</span> powers search results, news feeds, and recommendation engines where business rules determine display order.`,
  },
  {
    id: 77,
    difficulty: "hard",
    category: "custom",
    hasCodeEditor: true,
    title: "Implement Custom Map Function",
    business:
      "To understand how map works internally, implement your own version and use it with test data.",
    question: "Write a function myMap(arr, callback) that works like Array.prototype.map.",
    code: `function myMap(arr, callback) {
  // implement this
}
const nums = [1, 2, 3];
const doubled = myMap(nums, x => x * 2);
console.log(doubled); // should be [2, 4, 6]`,
    answer: `function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}`,
    explanation: `<strong>Custom map implementation</strong>: 1) Create an empty result array. 2) Loop through the original array. 3) Call the callback with (element, index, originalArray). 4) Push the return value. This teaches that <span class="highlight">map is fundamentally a loop that builds a new array</span>. Understanding this helps debug map issues — the callback's return value IS the new element.`,
  },
  {
    id: 78,
    difficulty: "hard",
    category: "custom",
    hasCodeEditor: true,
    title: "Implement Custom Filter Function",
    business:
      "Internalize how filter works by building your own. Useful when you need a filter variant (like filter with async).",
    question: "Write a function myFilter(arr, callback) that works like Array.prototype.filter.",
    code: `function myFilter(arr, predicate) {
  // implement this
}
const nums = [1, 2, 3, 4, 5, 6];
const evens = myFilter(nums, x => x % 2 === 0);
console.log(evens); // should be [2, 4, 6]`,
    answer: `function myFilter(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}`,
    explanation: `<strong>Custom filter</strong>: Same structure as map, but instead of always pushing, we only push when <span class="highlight">predicate returns truthy</span>. The key insight: filter keeps elements, not callback return values. The callback is a <span class="highlight">test</span> — it decides whether each element belongs in the result.`,
  },
  {
    id: 79,
    difficulty: "hard",
    category: "custom",
    hasCodeEditor: true,
    title: "Implement Custom Reduce Function",
    business:
      "Writing reduce from scratch deepens understanding of accumulators, critical for complex data aggregation.",
    question: "Write a function myReduce(arr, callback, initialValue) like Array.prototype.reduce.",
    code: `function myReduce(arr, callback, initialValue) {
  // implement this
}
const nums = [1, 2, 3, 4, 5];
const sum = myReduce(nums, (a, b) => a + b, 0);
console.log(sum); // 15`,
    answer: `function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}`,
    explanation: `<strong>Custom reduce</strong> is the most complex: 1) If initialValue is provided, use it as accumulator and start at index 0. 2) If not, use arr[0] as accumulator and start at index 1. 3) Each iteration, <span class="highlight">reassign accumulator to the callback's return value</span>. 4) Return the final accumulator. This shows why reduce without initialValue throws on empty arrays — there's no arr[0] to use!`,
  },
  {
    id: 80,
    difficulty: "hard",
    category: "flat",
    hasCodeEditor: true,
    title: "Deep Flatten Recursively",
    business:
      "A CMS stores nested comment threads of arbitrary depth. You need to flatten them for a flat list view.",
    question: "Write a recursive function to flatten an array of any depth.",
    code: `const deeplyNested = [1, [2, [3, [4, 5]]], 6, [7, [8, [9]]]];
function deepFlatten(arr) {
  // implement this
}`,
    answer: `function deepFlatten(arr) {
  return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? deepFlatten(val) : val), []);
}
console.log(deepFlatten(deeplyNested));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
    explanation: `<strong>Recursive deep flatten</strong>: For each element, check <span class="highlight">Array.isArray(val)</span>. If it is, call deepFlatten on it recursively (which returns a flat array). If not, wrap it in [val]. Then concat into the accumulator. Base case: arrays with no nested arrays just concat their values. This is the reduce version; you can also use \`.flat(Infinity)\` but building it yourself teaches recursion.`,
  },
  {
    id: 81,
    difficulty: "hard",
    category: "reduce",
    title: "Array Intersection (Common Items)",
    business:
      "A recommendation engine needs to find products that are common across two user shopping lists.",
    question: "Use reduce to find items that exist in both arrays.",
    code: `const listA = ['Apple', 'Banana', 'Cherry', 'Dates'];
const listB = ['Banana', 'Dates', 'Elderberry', 'Fig'];`,
    answer: `const intersection = listA.reduce((common, item) => {
  if (listB.includes(item)) common.push(item);
  return common;
}, []);
console.log(intersection); // ['Banana', 'Dates']`,
    explanation: `For each item in listA, check if listB includes it. If so, add to the common array. <span class="highlight">O(n*m)</span> — for large arrays, use a Set: \`const setB = new Set(listB); listA.filter(item => setB.has(item))\` for O(n+m). This pattern is used in <span class="highlight">recommendation systems, A/B test analysis, and data reconciliation</span>.`,
  },
  {
    id: 82,
    difficulty: "hard",
    category: "some",
    title: "Fraud Detection: Unusual Pattern",
    business:
      "A fraud detection system flags a transaction if ANY of the following are true: amount > 3x average, foreign country, or multiple transactions in 1 minute.",
    question: "Use some to check if any transaction exceeds 3x the average transaction amount.",
    code: `const transactions = [50, 25, 30, 200, 45, 35, 28, 500, 40];`,
    answer: `const avg = transactions.reduce((s, t) => s + t, 0) / transactions.length;
const threshold = avg * 3;
const hasFraud = transactions.some(t => t > threshold);
console.log(avg, threshold, hasFraud);
// avg: ~105.9, threshold: ~317.7, hasFraud: true (500 > 317.7)`,
    explanation: `This <span class="highlight">anomaly detection</span> pattern: compute average, set threshold at 3x, then use <strong>some</strong> to check if any transaction exceeds it. Transaction 500 is flagged. In production, you'd use <span class="highlight">Z-score or IQR</span> for robust outlier detection, and the threshold multiplier would be tuned based on historical data.`,
  },
  {
    id: 83,
    difficulty: "hard",
    category: "filter",
    title: "Clean Data: Remove Outliers",
    business:
      "A sensor network collects temperature readings. Outliers (more than 2 standard deviations from mean) need removal.",
    question:
      "Use filter to remove outliers: values farther than 2 standard deviations from the mean.",
    code: `const temps = [22, 23, 21, 22, 99, 23, 22, 21, 22, 23, 150, 22];`,
    answer: `const mean = temps.reduce((s, t) => s + t, 0) / temps.length;
const variance = temps.reduce((s, t) => s + (t - mean) ** 2, 0) / temps.length;
const stdDev = Math.sqrt(variance);
const cleaned = temps.filter(t => Math.abs(t - mean) <= 2 * stdDev);
console.log(cleaned);
// [22, 23, 21, 22, 23, 22, 21, 22, 23, 22] (99 and 150 removed)`,
    explanation: `Step 1: calculate mean with reduce. Step 2: calculate variance (average of squared differences). Step 3: standard deviation = sqrt(variance). Step 4: filter out values where <span class="highlight">|value - mean| > 2 * stdDev</span>. This is the standard <span class="highlight">statistical outlier removal</span> used in data science, sensor processing, and financial analytics. Values 99 and 150 are clearly anomalous.`,
  },
  {
    id: 84,
    difficulty: "hard",
    category: "reduce",
    title: "Build Nested Comment Tree",
    business:
      "A blog has comments that can reply to other comments (parentId). You need to build a nested tree structure.",
    question:
      "Use reduce to convert a flat comment list into a nested tree using parentId references.",
    code: `const comments = [
  { id: 1, text: 'Great post!', parentId: null },
  { id: 2, text: 'Thanks!', parentId: 1 },
  { id: 3, text: 'I disagree', parentId: null },
  { id: 4, text: 'Why?', parentId: 3 },
  { id: 5, text: 'Because...', parentId: 4 },
  { id: 6, text: 'Nice!', parentId: 1 }
];`,
    answer: `function buildTree(comments) {
  const map = {};
  const roots = [];
  comments.forEach(c => { map[c.id] = { ...c, replies: [] }; });
  comments.forEach(c => {
    if (c.parentId) {
      map[c.parentId].replies.push(map[c.id]);
    } else {
      roots.push(map[c.id]);
    }
  });
  return roots;
}
console.log(JSON.stringify(buildTree(comments), null, 2));
// Two root comments, each with nested replies`,
    explanation: `Two-pass approach: 1) Create a <span class="highlight">lookup map</span> of all comments with empty replies arrays. 2) For each comment, if it has a parent, push it into the parent's replies; otherwise, it's a root. This O(n) algorithm builds trees from flat data — used in <span class="highlight">forums, Reddit-style threads, org charts, and category trees</span>.`,
  },
  {
    id: 85,
    difficulty: "hard",
    category: "reduce",
    title: "SQL-Style GROUP BY with Aggregates",
    business:
      "A reporting dashboard needs SQL-style aggregation: group by department with count, avg salary, and total salary.",
    question: "Use reduce to group employees by department with aggregate metrics.",
    code: `const employees = [
  { name: 'Alice', dept: 'Engineering', salary: 120000 },
  { name: 'Bob', dept: 'Design', salary: 90000 },
  { name: 'Charlie', dept: 'Engineering', salary: 150000 },
  { name: 'Diana', dept: 'Design', salary: 95000 },
  { name: 'Eve', dept: 'Engineering', salary: 110000 }
];`,
    answer: `const report = employees.reduce((acc, emp) => {
  if (!acc[emp.dept]) acc[emp.dept] = { count: 0, totalSalary: 0, avgSalary: 0 };
  acc[emp.dept].count++;
  acc[emp.dept].totalSalary += emp.salary;
  acc[emp.dept].avgSalary = acc[emp.dept].totalSalary / acc[emp.dept].count;
  return acc;
}, {});
console.log(report);
// Engineering: { count: 3, totalSalary: 380000, avgSalary: 126666.67 }
// Design: { count: 2, totalSalary: 185000, avgSalary: 92500 }`,
    explanation: `This <span class="highlight">SQL GROUP BY equivalent</span> with reduce. Each group accumulates count and total, and we compute running average. In production, you'd separate aggregation into steps: group, then compute aggregates. This pattern is the foundation of <span class="highlight">business intelligence dashboards, payroll reports, and analytics engines</span>.`,
  },
  {
    id: 86,
    difficulty: "hard",
    category: "sort",
    title: "Sort with Natural Language Order",
    business:
      'A file browser shows files sorted naturally: "file2" comes before "file10" (not "file10" before "file2" like default sort).',
    question: "Use sort with a custom comparator for natural (human) sorting order.",
    code: `const files = ['file10.txt', 'file2.txt', 'file1.txt', 'file20.txt', 'file3.txt'];`,
    answer: `function naturalCompare(a, b) {
  const regex = /(\\d+)|(\\D+)/g;
  const partsA = a.match(regex);
  const partsB = b.match(regex);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    if (!partsA[i]) return -1;
    if (!partsB[i]) return 1;
    const numA = parseInt(partsA[i], 10);
    const numB = parseInt(partsB[i], 10);
    if (!isNaN(numA) && !isNaN(numB)) {
      if (numA !== numB) return numA - numB;
    } else {
      const cmp = partsA[i].localeCompare(partsB[i]);
      if (cmp !== 0) return cmp;
    }
  }
  return 0;
}
files.sort(naturalCompare);
console.log(files);
// ['file1.txt', 'file2.txt', 'file3.txt', 'file10.txt', 'file20.txt']`,
    explanation: `<span class="highlight">Natural sort</span> splits strings into text/number segments and compares numerically where possible. This is essential for file browsers, version tag sorting (v1.0, v1.10), and any UI where humans expect intuitive ordering. The complexity comes from handling mixed text+number patterns correctly.`,
  },
  {
    id: 87,
    difficulty: "hard",
    category: "chaining",
    title: "Complex Data Pipeline",
    business:
      "An analytics system needs to process raw event data: filter valid events, transform to metrics, group by type, and compute averages.",
    question: "Chain filter → map → reduce to process events.",
    code: `const events = [
  { type: 'click', value: 1, valid: true },
  { type: 'scroll', value: 3, valid: true },
  { type: 'click', value: 2, valid: false },
  { type: 'hover', value: 1, valid: true },
  { type: 'scroll', value: 5, valid: true },
  { type: 'click', value: 4, valid: true },
  { type: 'hover', value: 2, valid: true }
];`,
    answer: `const result = events
  .filter(e => e.valid)
  .map(e => ({ type: e.type, value: e.value }))
  .reduce((acc, e) => {
    if (!acc[e.type]) acc[e.type] = { count: 0, total: 0, avg: 0 };
    acc[e.type].count++;
    acc[e.type].total += e.value;
    acc[e.type].avg = acc[e.type].total / acc[e.type].count;
    return acc;
  }, {});
console.log(result);
// click: { count: 2, total: 5, avg: 2.5 }
// scroll: { count: 2, total: 8, avg: 4 }
// hover: { count: 2, total: 3, avg: 1.5 }`,
    explanation: `This <span class="highlight">data pipeline</span> demonstrates the power of method chaining: <strong>filter</strong> removes invalid data, <strong>map</strong> projects only needed fields, <strong>reduce</strong> aggregates by type with running averages. Each stage transforms the data and passes it to the next. This is how <span class="highlight">data engineering pipelines, ETL jobs, and analytics systems</span> process data — each step is a pure transformation.`,
  },
  {
    id: 88,
    difficulty: "hard",
    category: "some",
    title: "Detect Data Integrity Issues",
    business:
      "A data migration tool must check if any records have NULL values in required fields before importing.",
    question:
      "Use some with Object.values to check if any user has a null/undefined required field.",
    code: `const users = [
  { id: 1, name: 'Alice', email: 'alice@co.com' },
  { id: 2, name: null, email: 'bob@co.com' },
  { id: 3, name: 'Charlie', email: undefined },
  { id: 4, name: 'Diana', email: 'diana@co.com' }
];`,
    answer: `const hasIssues = users.some(u => 
  Object.values(u).some(v => v === null || v === undefined)
);
console.log(hasIssues); // true`,
    explanation: `<span class="highlight">Nested some</span>: outer some iterates users, inner some iterates the values of each user object. <code>Object.values(u)</code> returns an array of all property values. If any value is null/undefined, the inner some returns true, which makes the outer some also return true. This is used in <span class="highlight">data quality checks, ETL validation, and database migration tools</span>.`,
  },
  {
    id: 89,
    difficulty: "hard",
    category: "chaining",
    title: "Employee Performance Review Calculator",
    business:
      "HR needs a performance summary: filter by department, sort by rating, compute bonus eligibility (rating > 4.0 gets 15% bonus), and format for export.",
    question: "Chain filter, sort, map to calculate bonuses.",
    code: `const employees = [
  { name: 'Alice', dept: 'Engineering', salary: 100000, rating: 4.5 },
  { name: 'Bob', dept: 'Engineering', salary: 80000, rating: 3.8 },
  { name: 'Charlie', dept: 'Design', salary: 90000, rating: 4.2 },
  { name: 'Diana', dept: 'Engineering', salary: 95000, rating: 4.8 },
  { name: 'Eve', dept: 'Design', salary: 85000, rating: 3.5 }
];`,
    answer: `const bonusSummary = employees
  .filter(e => e.dept === 'Engineering')
  .sort((a, b) => b.rating - a.rating)
  .map(e => ({
    name: e.name,
    rating: e.rating,
    bonus: e.rating > 4.0 ? e.salary * 0.15 : 0,
    totalComp: e.salary + (e.rating > 4.0 ? e.salary * 0.15 : 0)
  }));
console.log(bonusSummary);
// Diana (bonus: 14250), Alice (bonus: 15000), Bob (bonus: 0)`,
    explanation: `A complete <span class="highlight">HR processing pipeline</span>: 1) Filter to Engineering dept. 2) Sort by rating descending. 3) Map to compute bonus (15% if rating > 4.0) and total compensation. Each step is a pure function. This pattern is used in <span class="highlight">payroll systems, performance reviews, and compensation planning tools</span> where data flows through defined transformation stages.`,
  },
  {
    id: 90,
    difficulty: "hard",
    category: "reduce",
    title: "Financial Portfolio Tracker",
    business:
      "An investment portfolio tracks multiple stocks. Calculate total value, % return, and asset allocation.",
    question: "Use reduce to compute portfolio summary from individual holdings.",
    code: `const portfolio = [
  { ticker: 'AAPL', shares: 10, buyPrice: 150, currentPrice: 180 },
  { ticker: 'GOOGL', shares: 5, buyPrice: 2800, currentPrice: 3100 },
  { ticker: 'TSLA', shares: 8, buyPrice: 200, currentPrice: 250 },
  { ticker: 'AMZN', shares: 3, buyPrice: 3300, currentPrice: 2900 }
];`,
    answer: `const summary = portfolio.reduce((acc, stock) => {
  const cost = stock.shares * stock.buyPrice;
  const value = stock.shares * stock.currentPrice;
  const gain = value - cost;
  const returnPct = ((value / cost) - 1) * 100;
  acc.totalCost += cost;
  acc.totalValue += value;
  acc.totalGain += gain;
  acc.holdings.push({
    ticker: stock.ticker,
    value,
    returnPct: Math.round(returnPct * 100) / 100,
    allocation: 0 // computed next
  });
  return acc;
}, { totalCost: 0, totalValue: 0, totalGain: 0, holdings: [] });
// Compute allocation %
summary.holdings.forEach(h => {
  h.allocation = Math.round((h.value / summary.totalValue) * 10000) / 100;
});
console.log(summary);
// totalValue, totalGain, and each holding's % allocation`,
    explanation: `A <span class="highlight">portfolio analysis</span> using reduce to accumulate totals while building detailed holdings. After reduce, we compute the <span class="highlight">allocation percentage</span> for each holding (the percentage of total portfolio value). This two-pass pattern (aggregate then normalize) is used in <span class="highlight">investment platforms, retirement calculators, and wealth management tools</span>.`,
  },
  {
    id: 91,
    difficulty: "hard",
    category: "map",
    title: "API Response Normalization",
    business:
      "A mobile app gets different API response formats from v1 and v2 endpoints. Normalize to a unified format.",
    question:
      "Use map to convert mixed-format API data into a standard { id, fullName, contact } shape.",
    code: `const apiData = [
  { userId: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@co.com' },
  { id: 2, name: 'Bob Johnson', email: 'bob@co.com' },
  { userId: 3, firstName: 'Charlie', lastName: 'Brown', email: null }
];`,
    answer: `const normalized = apiData.map(u => ({
  id: u.id || u.userId,
  fullName: u.name || (u.firstName + ' ' + u.lastName),
  contact: u.email || 'No email on file'
}));
console.log(normalized);
// [{ id: 1, fullName: 'Alice Smith', contact: 'alice@co.com' }, ...]`,
    explanation: `<span class="highlight">API normalization</span> handles inconsistent data shapes from different API versions or microservices. We use <span class="highlight">short-circuit evaluation</span> (\`u.id || u.userId\`) to handle different field names, template strings for computed names, and fallback values for missing data. This is essential when integrating with third-party APIs or legacy systems.`,
  },
  {
    id: 92,
    difficulty: "hard",
    category: "flatMap",
    title: "Shopping Cart: Expand Bundle Products",
    business:
      "An e-commerce system sells bundles that contain multiple products. When a bundle is purchased, you must expand it into individual items for the warehouse.",
    question: "Use flatMap to expand bundles into individual products.",
    code: `const cart = [
  { product: 'T-Shirt', qty: 2, bundle: null },
  { product: 'Starter Pack', qty: 1, bundle: ['Mouse Pad', 'USB Cable', 'Stickers'] },
  { product: 'Mug', qty: 3, bundle: null }
];`,
    answer: `const warehouse = cart.flatMap(item => {
  if (item.bundle) {
    return item.bundle.map(b => ({ product: b, qty: item.qty }));
  }
  return { product: item.product, qty: item.qty };
});
console.log(warehouse);
//  [{ T-Shirt, 2 }, { Mouse Pad, 1 }, { USB Cable, 1 }, { Stickers, 1 }, { Mug, 3 }]`,
    explanation: `<strong>flatMap</strong> is ideal when each element can produce <span class="highlight">one or more</span> output elements. Regular items return a single object, bundles return an array of objects that flatMap flattens. This pattern handles <span class="highlight">product bundles, subscription plans with multiple services, and package deals</span> in e-commerce systems.`,
  },
  {
    id: 93,
    difficulty: "hard",
    category: "reduce",
    title: "Sliding Window Average",
    business:
      "A stock market chart needs a 5-day moving average to show price trends and smooth out daily volatility.",
    question: "Use reduce to compute a 5-day simple moving average (SMA) from daily prices.",
    code: `const prices = [10, 12, 11, 13, 14, 15, 14, 16, 18, 17];`,
    answer: `const windowSize = 5;
const sma = prices.reduce((acc, _, i) => {
  if (i >= windowSize - 1) {
    const sum = prices.slice(i - windowSize + 1, i + 1)
      .reduce((s, p) => s + p, 0);
    acc.push(sum / windowSize);
  }
  return acc;
}, []);
console.log(sma);
// [12, 13, 13.4, 14.4, 15.4, 16]`,
    explanation: `<strong>Sliding window</strong>: once we have enough elements (i >= 4), slice a window of 5 prices and average them. Each step slides the window forward by one. This <span class="highlight">moving average</span> is a fundamental <span class="highlight">technical analysis</span> tool. Performance note: O(n*window) — for large datasets, use an incremental algorithm (add new, subtract old) for O(n).`,
  },
  {
    id: 94,
    difficulty: "hard",
    category: "reduce",
    title: "Implement Array Chunking",
    business:
      "An API has a limit of 3 items per request. You need to split a large array into chunks of 3.",
    question: "Use reduce to split the array into chunks of size 3.",
    code: `const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`,
    answer: `const chunkSize = 3;
const chunks = items.reduce((acc, item, i) => {
  const chunkIndex = Math.floor(i / chunkSize);
  if (!acc[chunkIndex]) acc[chunkIndex] = [];
  acc[chunkIndex].push(item);
  return acc;
}, []);
console.log(chunks);
// [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]`,
    explanation: `<span class="highlight">Chunking</span> divides an array into sub-arrays of a given size. The key: <code>Math.floor(i / chunkSize)</code> determines which chunk each element belongs to. This is used for <span class="highlight">batch API requests, pagination of large datasets, parallel processing, and UI grid layouts</span>. Also useful for rate-limited operations.`,
  },
  {
    id: 95,
    difficulty: "hard",
    category: "sort",
    title: "Stable Sort by Color (Custom Order)",
    business:
      "A task management app has a Kanban board. Tasks must be sorted by priority color: Red (urgent) > Yellow > Green > Blue. Tasks with the same color preserve their original order (stable sort).",
    question: "Use sort with a color priority map, maintaining stability for equal priorities.",
    code: `const tasks = [
  { title: 'Fix crash', color: 'Red' },
  { title: 'Add feature', color: 'Green' },
  { title: 'Update docs', color: 'Blue' },
  { title: 'Security patch', color: 'Red' },
  { title: 'Refactor', color: 'Yellow' },
  { title: 'Bug #42', color: 'Green' }
];`,
    answer: `const colorOrder = { Red: 1, Yellow: 2, Green: 3, Blue: 4 };
// Stable sort: when equal, original order is preserved
tasks.sort((a, b) => colorOrder[a.color] - colorOrder[b.color]);
console.log(tasks.map(t => t.title));
// Fix crash, Security patch, Refactor, Add feature, Bug #42, Update docs`,
    explanation: `<span class="highlight">Stable sort</span> (guaranteed in ES2019+): when the compare function returns 0, the original relative order is preserved. Both "Fix crash" and "Security patch" are Red, and they remain in their original order. This is critical for <span class="highlight">multi-pass sorting, leaderboards, and UI lists</span> where secondary sorting criteria might be applied later.`,
  },
  {
    id: 96,
    difficulty: "hard",
    category: "every",
    title: "Check All Conditions Met",
    business:
      "A loan application system must verify that ALL of the following are true: credit score > 650, income > 40000, debt ratio < 0.4, and age >= 18.",
    question: "Use every to check a single applicant passes all conditions.",
    code: `const applicant = { creditScore: 720, income: 55000, debtRatio: 0.35, age: 30 };

const conditions = [
  { test: a => a.creditScore > 650, name: 'Credit score' },
  { test: a => a.income > 40000, name: 'Income' },
  { test: a => a.debtRatio < 0.4, name: 'Debt ratio' },
  { test: a => a.age >= 18, name: 'Age' }
];`,
    answer: `const approved = conditions.every(cond => cond.test(applicant));
console.log(approved); // true`,
    explanation: `This pattern uses an array of rule objects, each with a <span class="highlight">test function and a name</span>, then runs them all with <strong>every</strong>. This is a <span class="highlight">rules engine pattern</span> — you can add, remove, or reorder rules without changing the logic. Used in <span class="highlight">loan approvals, insurance underwriting, form validation, and feature flag systems</span>. For rejected applications, chain with filter to show which rules failed.`,
  },
  {
    id: 97,
    difficulty: "hard",
    category: "reduce",
    title: "Frequency Analysis with Ranking",
    business:
      "A content platform analyzes which tags are most popular. Count tag usage and rank them by frequency.",
    question: "Use reduce to count tags, then sort into ranked order.",
    code: `const posts = [
  { title: 'Post 1', tags: ['js', 'react', 'css'] },
  { title: 'Post 2', tags: ['js', 'node', 'react'] },
  { title: 'Post 3', tags: ['css', 'design'] },
  { title: 'Post 4', tags: ['js', 'react', 'node', 'css'] },
  { title: 'Post 5', tags: ['design'] }
];`,
    answer: `const tagCount = posts
  .flatMap(p => p.tags)
  .reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
const ranked = Object.entries(tagCount)
  .sort((a, b) => b[1] - a[1])
  .map(([tag, count], i) => ({ rank: i + 1, tag, count }));
console.log(ranked);
// 1: js (3), 2: react (3), 3: css (3), 4: node (2), 5: design (2)`,
    explanation: `Three-step pipeline: 1) <strong>flatMap</strong> to collect all tags into a flat array. 2) <strong>reduce</strong> to count occurrences. 3) <code>Object.entries()</code> to convert to array, <strong>sort</strong> by count descending, then <strong>map</strong> to add rank. This <span class="highlight">frequency analysis with ranking</span> is used in <span class="highlight">trending topics, keyword clouds, and popular products</span> features.`,
  },
  {
    id: 98,
    difficulty: "hard",
    category: "chaining",
    title: "Real-Time Dashboard Data Aggregation",
    business:
      "A real-time analytics dashboard processes web traffic data: filter bot traffic, group by page, count visits, and return top 3 pages.",
    question:
      "Chain filter → flatMap → reduce → sort → slice to find top 3 most visited (non-bot) pages.",
    code: `const visits = [
  { page: '/home', isBot: false, timestamp: 1 },
  { page: '/about', isBot: false, timestamp: 2 },
  { page: '/home', isBot: true, timestamp: 3 },
  { page: '/pricing', isBot: false, timestamp: 4 },
  { page: '/home', isBot: false, timestamp: 5 },
  { page: '/about', isBot: false, timestamp: 6 },
  { page: '/contact', isBot: false, timestamp: 7 },
  { page: '/pricing', isBot: false, timestamp: 8 },
  { page: '/home', isBot: false, timestamp: 9 },
  { page: '/faq', isBot: false, timestamp: 10 }
];`,
    answer: `const topPages = visits
  .filter(v => !v.isBot)
  .reduce((acc, v) => {
    acc[v.page] = (acc[v.page] || 0) + 1;
    return acc;
  }, {});
const top3 = Object.entries(topPages)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3)
  .map(([page, count], i) => ({ rank: i + 1, page, visits: count }));
console.log(top3);
// 1: /home (3), 2: /about (2), 3: /pricing (2)`,
    explanation: `This is a <span class="highlight">real analytics pipeline</span>: 1) Filter out bot traffic (isBot). 2) Reduce to count visits per page. 3) Convert to array with <code>Object.entries</code>, sort by count descending, take top 3, and format. This is exactly how <span class="highlight">Google Analytics, Mixpanel, and custom dashboards</span> compute "most visited pages" — filtering, grouping, aggregating, sorting, and limiting.`,
  },
  {
    id: 99,
    difficulty: "hard",
    category: "reduce",
    title: "Inventory Stock Alert System",
    business:
      'An inventory system needs to identify products that need reordering. Rules: if category is "Perishable", threshold is 50; otherwise threshold is 10. Also flag anything below its threshold.',
    question:
      'Use reduce to categorize products into "ok" and "reorder" based on dynamic thresholds.',
    code: `const inventory = [
  { name: 'Milk', qty: 15, category: 'Perishable' },
  { name: 'Bread', qty: 60, category: 'Perishable' },
  { name: 'Laptop', qty: 5, category: 'Electronics' },
  { name: 'Mouse', qty: 12, category: 'Electronics' },
  { name: 'Cheese', qty: 3, category: 'Perishable' }
];`,
    answer: `const threshold = { Perishable: 50, Electronics: 10, default: 20 };
const alerts = inventory.reduce((acc, item) => {
  const limit = threshold[item.category] || threshold.default;
  const status = item.qty < limit ? 'reorder' : 'ok';
  acc[status].push({ ...item, limit, status });
  return acc;
}, { ok: [], reorder: [] });
console.log(alerts);
// reorder: Milk (15 < 50), Laptop (5 < 10), Cheese (3 < 50)
// ok: Bread (60 >= 50), Mouse (12 >= 10)`,
    explanation: `This <span class="citation">inventory alert system</span> uses a <span class="highlight">threshold map</span> where different categories have different reorder points. <strong>Reduce</strong> partitions items into two groups with enriched data (limit and status). This pattern powers <span class="highlight">inventory management, supply chain systems, and automated reordering</span> in warehouses and retail.`,
  },
  {
    id: 100,
    difficulty: "hard",
    category: "custom",
    hasCodeEditor: true,
    title: "Pipeline Builder: Compose Array Methods",
    business:
      "A data science tool lets users chain operations dynamically. Build a pipeline that applies a sequence of transformations.",
    question:
      "Build a Pipeline class where you can .add(filter/map/sort) stages and .execute(data).",
    code: `class Pipeline {
  constructor() {
    this.stages = [];
  }
  add(fn) { this.stages.push(fn); return this; }
  execute(data) {
    // implement this
  }
}
// Example: filter even → double → sort descending
const p = new Pipeline();
p.add(arr => arr.filter(x => x % 2 === 0));
p.add(arr => arr.map(x => x * 2));
p.add(arr => arr.sort((a, b) => b - a));
console.log(p.execute([1, 2, 3, 4, 5, 6]));
// should be [12, 8, 4]`,
    answer: `class Pipeline {
  constructor() {
    this.stages = [];
  }
  add(fn) { this.stages.push(fn); return this; }
  execute(data) {
    return this.stages.reduce((currentData, stage) => stage(currentData), data);
  }
}
const p = new Pipeline();
p.add(arr => arr.filter(x => x % 2 === 0));
p.add(arr => arr.map(x => x * 2));
p.add(arr => arr.sort((a, b) => b - a));
console.log(p.execute([1, 2, 3, 4, 5, 6])); // [12, 8, 4]`,
    explanation: `This <strong>Pipeline</strong> pattern demonstrates <span class="highlight">function composition</span>. Each stage is a function that takes an array and returns a transformed array. <strong>reduce</strong> applies each stage sequentially, passing the result of one as input to the next. This is the architecture behind <span class="highlight">data pipelines, Unix pipes, middleware systems, and build tools like Gulp and Webpack</span>. The <code>.add()</code> returns <code>this</code> for method chaining.`,
  },
  {
    id: 101,
    difficulty: "hard",
    category: "every",
    title: "Cross-Reference Data Consistency",
    business:
      "An order processing system must verify that every product ID in an order exists in the product catalog before fulfilling.",
    question: "Use every to check all order product IDs exist in the catalog Set.",
    code: `const catalog = new Set([101, 102, 103, 104, 105]);
const order = { id: 'ORD-001', items: [101, 103, 999, 105] };`,
    answer: `const allExist = order.items.every(id => catalog.has(id));
console.log(allExist); // false (999 is not in catalog)`,
    explanation: `Combining <strong>every</strong> with a <span class="highlight">Set for O(1) lookup</span>. The Set provides fast \`.has()\` checks. every returns false the moment it hits 999 (not in catalog). This is much more efficient than using <code>.includes()</code> on an array (O(n²) vs O(n)). This pattern is critical for <span class="highlight">order validation, reference integrity, and data consistency checks</span> in distributed systems.`,
  },
  {
    id: 102,
    difficulty: "hard",
    category: "reduce",
    title: "Calendar Event Conflict Detection",
    business:
      "A scheduling app needs to detect overlapping events. Use reduce to find all conflicts.",
    question: "Use reduce to find pairs of events that overlap (end > next start).",
    code: `const events = [
  { title: 'Meeting', start: 10, end: 11 },
  { title: 'Lunch', start: 12, end: 13 },
  { title: 'Workshop', start: 10.5, end: 12 },
  { title: 'Coffee', start: 11, end: 11.5 },
  { title: 'Break', start: 14, end: 15 }
];`,
    answer: `events.sort((a, b) => a.start - b.start);
const conflicts = events.reduce((acc, event, i) => {
  for (let j = i + 1; j < events.length; j++) {
    if (event.end > events[j].start) {
      acc.push({ event1: event.title, event2: events[j].title });
    } else {
      break; // Since sorted, no more overlaps possible
    }
  }
  return acc;
}, []);
console.log(conflicts);
// [{ Meeting x Workshop }, { Meeting x Coffee }, { Workshop x Coffee }]`,
    explanation: `After sorting by start time, we use <strong>reduce</strong> with a nested loop. Because events are sorted, we can <span class="highlight">break early</span> when event.end <= next.start — no further events can overlap. This <span class="highlight">O(n log n)</span> approach (due to sort) is much more efficient than checking all pairs <span class="highlight">O(n²)</span>. Used in <span class="highlight">calendar apps, resource booking systems, and project schedulers</span>.`,
  },
  {
    id: 103,
    difficulty: "hard",
    category: "reduce",
    title: "Markov Chain Text Generator",
    business:
      "A chatbot needs to generate text suggestions based on learned word patterns from previous conversations.",
    question:
      "Use reduce to build a Markov chain: map each word to the list of words that follow it.",
    code: `const text = "the cat sat the cat ran the dog sat".split(' ');`,
    answer: `const markov = text.reduce((chain, word, i, arr) => {
  if (i < arr.length - 1) {
    chain[word] = chain[word] || [];
    chain[word].push(arr[i + 1]);
  }
  return chain;
}, {});
console.log(markov);
// { the: ['cat', 'cat', 'dog'], cat: ['sat', 'ran'], sat: ['the', null], ran: ['the'] }`,
    explanation: `This builds a <span class="highlight">word transition map</span> (Markov chain). For each word (except the last), record the next word. "the" is followed by "cat" twice and "dog" once. This data structure is used in <span class="highlight">text prediction, autocomplete, chatbots, and procedural text generation</span>. To generate text: start with a word, randomly pick a next word, repeat.`,
  },
];

// ======================== APP LOGIC ========================
let currentIndex = 0;
let filteredQuestions = [...questions];
let answerRevealed = false;
let currentUser = null;
let userProgress = { currentIndex: 0, answers: {}, lastQuestionId: null };

function getStorageKey(name) {
  return 'arrayMastery_' + name;
}

function loadAllUsers() {
  try {
    const raw = localStorage.getItem('arrayMastery_users');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveAllUsers(users) {
  localStorage.setItem('arrayMastery_users', JSON.stringify(users));
}

function loadUserData(name) {
  try {
    const raw = localStorage.getItem(getStorageKey(name));
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveUserData(name, data) {
  localStorage.setItem(getStorageKey(name), JSON.stringify(data));
}

function handleNameSubmit() {
  const input = document.getElementById('nameInput');
  const name = input.value.trim();
  if (!name) {
    document.getElementById('nameError').style.display = 'block';
    return;
  }
  document.getElementById('nameError').style.display = 'none';
  startSession(name);
}

function startSession(name) {
  currentUser = name;
  document.getElementById('nameOverlay').classList.add('hidden');

  const saved = loadUserData(name);
  const users = loadAllUsers();
  users[name] = (users[name] || 0) + 1;
  saveAllUsers(users);

  if (saved) {
    userProgress = saved;
    applyFilters();
    if (saved.currentIndex > 0) {
      currentIndex = Math.min(saved.currentIndex, filteredQuestions.length - 1);
    }
  } else {
    userProgress = { currentIndex: 0, answers: {}, lastQuestionId: null };
    currentIndex = 0;
  }

  document.getElementById('userBadge').textContent = name;
  render();
  saveProgress();
}

function saveProgress() {
  if (!currentUser) return;
  userProgress.currentIndex = currentIndex;
  userProgress.lastQuestionId = filteredQuestions[currentIndex] ? filteredQuestions[currentIndex].id : null;
  saveUserData(currentUser, userProgress);
}

function showNameOverlay() {
  document.getElementById('nameOverlay').classList.remove('hidden');
  const savedUsersDiv = document.getElementById('savedUsers');
  const list = document.getElementById('savedUsersList');
  const users = loadAllUsers();
  const names = Object.keys(users).filter(n => n !== currentUser);
  if (names.length > 0) {
    savedUsersDiv.style.display = 'block';
    list.innerHTML = names.map(n =>
      '<button class="saved-user-btn" onclick="startSession(\'' + n.replace(/'/g, "\\'") + '\')">' +
      n + '<span class="sub">' + (loadUserData(n) ? 'resume' : 'new') + '</span></button>'
    ).join('');
  } else {
    savedUsersDiv.style.display = 'none';
  }
  document.getElementById('nameInput').value = '';
}

function clearAllData() {
  if (!confirm('Clear all saved progress for all users?')) return;
  const users = loadAllUsers();
  Object.keys(users).forEach(name => {
    try { localStorage.removeItem(getStorageKey(name)); } catch {}
  });
  localStorage.removeItem('arrayMastery_users');
  document.getElementById('savedUsersList').innerHTML = '';
  document.getElementById('savedUsers').style.display = 'none';
  currentUser = null;
  userProgress = { currentIndex: 0, answers: {}, lastQuestionId: null };
  currentIndex = 0;
  applyFilters();
}

function trackAnswer(questionId, isCorrect) {
  if (!currentUser) return;
  userProgress.answers[questionId] = isCorrect ? 'correct' : 'wrong';
  updateStats();
  saveProgress();
}

function updateStats() {
  if (!currentUser) return;
  const answers = Object.values(userProgress.answers);
  const answered = answers.length;
  const correct = answers.filter(a => a === 'correct').length;
  document.getElementById('answeredCount').textContent = answered;
  document.getElementById('correctCount').textContent = correct;
}

function restoreAnswerState(q) {
  if (!currentUser || !userProgress.answers[q.id]) return;

  const feedback = document.getElementById("quizFeedback");
  const status = userProgress.answers[q.id];
  const isCorrect = status === 'correct';

  if (q.answerType === "multiple-choice" && q.options) {
    const allOpts = document.querySelectorAll(".quiz-option");
    allOpts.forEach((o) => {
      o.className = "quiz-option";
      o.disabled = true;
      if (q.options[parseInt(o.dataset.idx)] === q.correctAnswer) {
        o.classList.add(isCorrect ? "correct" : "reveal-correct");
      }
    });
    feedback.className = "quiz-feedback show " + (isCorrect ? "correct" : "wrong");
    feedback.innerHTML = isCorrect
      ? "Correct! Well done."
      : 'Not quite. The correct answer is: <span class="correct-answer">' +
        q.correctAnswer + "</span>";
    if (q.answerShort) {
      feedback.innerHTML += '<div class="explanation-preview">' + q.answerShort + "</div>";
    }
  } else if (q.answerType === "text") {
    feedback.className = "quiz-feedback show " + (isCorrect ? "correct" : "wrong");
    feedback.innerHTML = isCorrect
      ? "Correct! Well done."
      : 'Not quite. The correct answer is: <span class="correct-answer">' +
        q.correctAnswer + "</span>";
    if (q.answerShort) {
      feedback.innerHTML += '<div class="explanation-preview">' + q.answerShort + "</div>";
    }
  }
}

function getCategories() {
  const cats = [...new Set(questions.map((q) => q.category))];
  return cats;
}

function init() {
  const catSelect = document.getElementById("categoryFilter");
  getCategories().forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c.charAt(0).toUpperCase() + c.slice(1);
    catSelect.appendChild(opt);
  });

  document.getElementById("totalCount").textContent = questions.length;
  document.getElementById("easyCount").textContent = questions.filter(
    (q) => q.difficulty === "easy",
  ).length;
  document.getElementById("mediumCount").textContent = questions.filter(
    (q) => q.difficulty === "medium",
  ).length;
  document.getElementById("hardCount").textContent = questions.filter(
    (q) => q.difficulty === "hard",
  ).length;

  document.getElementById("difficultyFilter").addEventListener("change", applyFilters);
  document.getElementById("categoryFilter").addEventListener("change", applyFilters);
  document.addEventListener("keydown", handleKeydown);
  document.getElementById("nameInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") handleNameSubmit();
  });

  applyFilters();

  const users = loadAllUsers();
  const savedNames = Object.keys(users);
  if (savedNames.length > 0) {
    showNameOverlay();
  }
  document.getElementById("nameOverlay").classList.remove("hidden");
}

function applyFilters() {
  const diff = document.getElementById("difficultyFilter").value;
  const cat = document.getElementById("categoryFilter").value;

  filteredQuestions = questions.filter((q) => {
    const matchDiff = diff === "all" || q.difficulty === diff;
    const matchCat = cat === "all" || q.category === cat;
    return matchDiff && matchCat;
  });

  currentIndex = 0;
  answerRevealed = false;
  render();
}

function render() {
  if (filteredQuestions.length === 0) {
    document.getElementById("questionMeta").innerHTML =
      '<span style="color:#94a3b8">No questions match filters.</span>';
    document.getElementById("questionTitle").textContent = "";
    document.getElementById("businessContext").style.display = "none";
    document.getElementById("questionText").textContent = "";
    document.getElementById("codeBlock").style.display = "none";
    document.getElementById("codeEditorSection").style.display = "none";
    document.getElementById("answerContent").classList.remove("show");
    document.getElementById("answerToggle").style.display = "none";
    document.getElementById("prevBtn").disabled = true;
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("progressInfo").textContent = "0 / 0";
    document.getElementById("questionIdDisplay").textContent = "";
    return;
  }

  const q = filteredQuestions[currentIndex];
  const meta = document.getElementById("questionMeta");
  const ansStatus = currentUser && userProgress.answers[q.id];
  const statusBadge = ansStatus
    ? '<span class="badge" style="background:' + (ansStatus === 'correct' ? '#065f4620;color:#34d399;border-color:#065f46' : '#7f1d1d20;color:#f87171;border-color:#7f1d1d') + '">' + ansStatus + '</span>'
    : '';
  meta.innerHTML = `
    <span class="badge ${q.difficulty}">${q.difficulty}</span>
    <span class="badge category">${q.category}</span>
    <span class="badge id">#${q.id}</span>
    ${statusBadge}
  `;

  document.getElementById("questionTitle").textContent = q.title;

  const bc = document.getElementById("businessContext");
  bc.innerHTML = "<strong>Business Context:</strong> " + q.business;
  bc.style.display = "block";

  document.getElementById("questionText").textContent = q.question;

  const codeBlock = document.getElementById("codeBlock");
  if (q.code) {
    codeBlock.style.display = "block";
    codeBlock.textContent = q.code;
  } else {
    codeBlock.style.display = "none";
  }

  const editorSection = document.getElementById("codeEditorSection");
  const answerToggle = document.getElementById("answerToggle");
  if (q.hasCodeEditor) {
    editorSection.style.display = "block";
    document.getElementById("codeEditor").value = "";
    document.getElementById("codeOutput").textContent = "";
    answerToggle.style.display = "none";
  } else {
    editorSection.style.display = "none";
    answerToggle.style.display = "inline-block";
  }

  renderQuiz(q);

  document.getElementById("answerContent").classList.remove("show");
  answerRevealed = false;
  document.getElementById("answerToggle").textContent = "Show Answer";

  const total = filteredQuestions.length;
  document.getElementById("progressInfo").textContent = currentIndex + 1 + " / " + total;
  document.getElementById("progressBar").style.width = ((currentIndex + 1) / total) * 100 + "%";
  document.getElementById("questionIdDisplay").textContent =
    "Question " + (currentIndex + 1) + " of " + total;

  document.getElementById("prevBtn").disabled = currentIndex === 0;
  document.getElementById("nextBtn").disabled = currentIndex === total - 1;

  updateStats();
  restoreAnswerState(q);
}

function revealAnswer() {
  const q = filteredQuestions[currentIndex];
  if (!q) return;

  const content = document.getElementById("answerContent");
  const toggle = document.getElementById("answerToggle");

  if (answerRevealed) {
    content.classList.remove("show");
    toggle.textContent = "Show Answer";
    answerRevealed = false;
  } else {
    let html = "";
    if (q.answer) {
      html += "<pre>" + q.answer + "</pre>";
    }
    html += '<div class="explanation">' + q.explanation + "</div>";
    content.innerHTML = html;
    content.classList.add("show");
    toggle.textContent = "Hide Answer";
    answerRevealed = true;
  }
}

function showAnswer() {
  revealAnswer();
}

function runCode() {
  const code = document.getElementById("codeEditor").value;
  const output = document.getElementById("codeOutput");
  output.className = "code-output";

  try {
    const result = eval(code);
    output.textContent = result !== undefined ? result : "Code ran successfully (no return value)";
    output.className = "code-output";
  } catch (err) {
    output.textContent = "Error: " + err.message;
    output.className = "code-output error";
  }
}

function nextQuestion() {
  if (currentIndex < filteredQuestions.length - 1) {
    currentIndex++;
    answerRevealed = false;
    render();
    saveProgress();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    answerRevealed = false;
    render();
    saveProgress();
  }
}

function renderQuiz(q) {
  const quizArea = document.getElementById("quizArea");
  const optionsDiv = document.getElementById("quizOptions");
  const textDiv = document.getElementById("quizTextInput");
  const feedback = document.getElementById("quizFeedback");
  feedback.classList.remove("show");
  feedback.className = "quiz-feedback";

  if (q.answerType === "multiple-choice" && q.options) {
    quizArea.style.display = "block";
    optionsDiv.style.display = "block";
    textDiv.style.display = "none";
    optionsDiv.innerHTML = q.options
      .map(
        (opt, i) =>
          '<button class="quiz-option" data-idx="' +
          i +
          '" onclick="selectAnswer(this, ' +
          i +
          ')">' +
          opt +
          "</button>",
      )
      .join("");
  } else if (q.answerType === "text") {
    quizArea.style.display = "block";
    optionsDiv.style.display = "none";
    textDiv.style.display = "flex";
    document.getElementById("textAnswer").value = "";
  } else {
    quizArea.style.display = "none";
  }
}

function selectAnswer(el, idx) {
  const q = filteredQuestions[currentIndex];
  if (!q || !q.options) return;
  const feedback = document.getElementById("quizFeedback");
  const allOpts = document.querySelectorAll(".quiz-option");
  allOpts.forEach((o) => {
    o.className = "quiz-option";
    o.disabled = false;
  });
  const isCorrect = q.options[idx] === q.correctAnswer;
  el.classList.add(isCorrect ? "correct" : "wrong");
  allOpts.forEach((o) => {
    o.disabled = true;
  });
  if (isCorrect) {
    allOpts.forEach((o) => {
      if (o !== el && q.options[parseInt(o.dataset.idx)] === q.correctAnswer)
        o.classList.add("reveal-correct");
    });
  } else {
    allOpts.forEach((o) => {
      if (q.options[parseInt(o.dataset.idx)] === q.correctAnswer) o.classList.add("correct");
    });
  }
  feedback.className = "quiz-feedback show " + (isCorrect ? "correct" : "wrong");
  feedback.innerHTML = isCorrect
    ? "Correct! Well done."
    : 'Not quite. The correct answer is: <span class="correct-answer">' +
      q.correctAnswer +
      "</span>";
  if (q.answerShort) {
    feedback.innerHTML += '<div class="explanation-preview">' + q.answerShort + "</div>";
  }
  trackAnswer(q.id, isCorrect);
}

function checkTextAnswer() {
  const q = filteredQuestions[currentIndex];
  if (!q) return;
  const input = document.getElementById("textAnswer");
  const feedback = document.getElementById("quizFeedback");
  if (!q.correctAnswer) return;
  const isCorrect = input.value.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
  feedback.className = "quiz-feedback show " + (isCorrect ? "correct" : "wrong");
  feedback.innerHTML = isCorrect
    ? "Correct! Well done."
    : 'Not quite. The correct answer is: <span class="correct-answer">' +
      q.correctAnswer +
      "</span>";
  if (q.answerShort) {
    feedback.innerHTML += '<div class="explanation-preview">' + q.answerShort + "</div>";
  }
  trackAnswer(q.id, isCorrect);
}

function handleKeydown(e) {
  if (e.key === "ArrowRight") nextQuestion();
  if (e.key === "ArrowLeft") prevQuestion();
  if (e.key === "Enter" && e.ctrlKey) runCode();
}

document.addEventListener("DOMContentLoaded", init);
