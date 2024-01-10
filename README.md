# tdd-nodejs-katas

# About the Katas
**SPOILER**
If you haven't completed the Katas before and you don't want the solutions, don't go into the exercise folders.

# Properties of Good Tests
**Fast:** Should run within milliseconds
**Isolated:** No dependency on other tests
**Repeatable:** Doesn't require an initial state (i.e. no need to set-up anything prior)
**Timely:** Test is written when we need it.

# Core Principle
**Red** Write a failing test
**Green** Write the minimal code required to pass the test
**Refactor** Improve the quality of the code.

# Key Rules
**Only one failing test at a time**
You can't write any more tests unless the every other test is green
**Tests drive implementation**
You can't wite code that is unrelated to the test.

# Other Things to consider
**Don't Repeat Yourself (DRY)**
If you find yourself repeating code, can you optimise it? 
**Simplest passing code**
Remember, you want the simplest passing code. But you will refactor this. Eventually your tests should drive an algorithm, thus forcing you to implement real-life, business usecases. 