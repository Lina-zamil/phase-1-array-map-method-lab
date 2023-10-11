const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const words = tutorials.map(tutorial => tutorial.split(" "))
  const capitlizeWords = words.map(tutorial => tutorial.map(el => el.charAt(0).toUpperCase() + el.slice(1)))
  const tutorialsCapitlized = capitlizeWords.map(el => el.join(" "))
  return tutorialsCapitlized
}
console.log(titleCased());


