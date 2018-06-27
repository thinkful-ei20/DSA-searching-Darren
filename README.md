Searching and Tree Traversal Drills
Create a Github repo called DSA-Searching. Save all this work in the repo and submit the repo via the submission box at the end of this lesson.

For this exercise 1 and 2, you will be using a searching algorithm to search for an item in a dataset. You will be testing the efficiency of the two searching algorithm, Linear search and Binary search. You will also have UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server side to this program. All of this should be done using React.

linear search
Given the following dataset, find out how many tries did it take to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches did it take to do so.

89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5

Binary search
Use the same front end and the dataset from the previous exercise for this one. Use array.sort to sort the dataset. Then implement Binary search to find a particular value in the dataset. Display how many tries it takes to search a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches did it takes to do so.

Find a book
Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?

Tree traversal
Using your Binary Search Tree class, create a Binary Search Tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Implement in-order, pre-order, and post-order functions. Check your answers:

A Pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

InOrder: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

Max profit
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day, and sell the shares on one of the following days, write an algorithm to work out what the maximum profit you could make would be.

Egg drop
This is fun exercise to do - make this an optional one after you are done with all the exercises above Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors you should drop the eggs from to find this out in the most efficient way. Once you have understood the question and made some attempts to solve the problem, here is some reading to do before you start coding. http://datagenetics.com/blog/july22012/index.html