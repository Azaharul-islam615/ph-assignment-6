

#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

## ⚙️ Functionalities 

1.var, let এবং const এর পার্থক্য
JavaScript-এ ভ্যারিয়েবল ডিক্লেয়ার করার জন্য var, let এবং const ব্যবহারর করি। var ফাংশন-স্কোপড এবং এটিকে বারবার declare করা যায়, এবং এটার  মানও পরিবর্তন করা যায়। । অন্যদিকে let হলো ব্লক-স্কোপড, মানে হলো এটি শুধু  ব্লকের মধ্যেই কাজ করে। এটিকে নতুন করে  declare করা যায় না, তবে এর মান পরিবর্তন করা যায়। আর const হলো ব্লক-স্কোপড, যেটিকে একবার declare করার পর  মান পরিবর্তন করা যায় না। 


২।map(), forEach(), এবং filter() এর পার্থক্য

 array এর সাথে কাজ করার জন্য তিনটি গুরুত্বপূর্ণ ফাংশ্ন হলো map(), forEach() এবং filter()। map() প্রতিটি element এর উপর কাজ করে এবং একটি নতুন array return করে। 
  forEach() প্রতিটি element এর উপর loop চালায় কিন্তু নতুন কোনো array return করে না,  আর filter() একটি শর্তের (condition) ভিত্তিতে নতুন array তৈরি করে যেখানে শুধু শর্ত পূরণকারী element গুলো থাকে।যারা শর্ত পূরন করে তাদেরকে এরে আকারে প্রকাশ করে

  ৩।Arrow Functions (ES6)
ES6 এ arrow function হলো function লেখার জন্য একটি ছোট এবং সহজ প্রক্রিয়া। এখানে function ওয়ার্ড ব্যবহার করার প্রয়োজন হয় না। Arrow function সাধারণত এক লাইনের ফাংশনের জন্য বেশি ব্যবহার করা হয়। এটা সাধারন ফাংশনের চেয়ে আলাদা এটাতে => এই চিনহ ব্যবহার করা হয়,এটা একটি পেরামিটার থাকলে () দেয়া লাগে না


৪।Destructuring Assignment (ES6)
Destructuring হলো এমন একটি পদ্ধতি যা দিয়ে array বা object থেকে সহজে মান বের করা যায়। উদাহরণস্বরূপ, একটি array থেকে মান বের করতে [a, b] = numbers লেখা যায়। একইভাবে object থেকে key অনুযায়ী মান নেওয়া যায় যেমন {name, age} = user। এর কারনে কোড ছোট ও সহজ হয়,এটা দারা ডিরেকট এরে অথবা অব্জেক্ট এর প্রোপার্টির ভেলু এক্সেস করা যায়

৫।Template Literals (ES6)
Template literals হলো string লেখার জন্য ES6 ব্যবহ্রত নতুন ফিচার যা backtick (`) ্নামেও ডাকা হয় । এটি দিয়ে যত খুশি তত লাইন সহজে লেখা যায়। পাশাপাশি ${} ব্যবহার করে string এর মধ্যে সরাসরি variable মান  বসানো যায়। যেখানে অন্য স্ট্রিং এক্টার সাথে আরেক্টার একসাথে করতে প্লাস চিনহ ব্যাবহার করা হই কিন্তু এটাতে লাগে না
