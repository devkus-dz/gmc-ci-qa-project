# CI/QA and Version Control Project

## Project Overview

This project is a simple ES6 JavaScript Calculator. I built it to learn and practice professional software development skills: **Version Control (Git)**, **Continuous Integration (CI)**, and **Quality Assurance (QA)**.

## Steps I Completed

### 1. Quality Assurance (QA)

To make sure my code is high quality, I used two main tools:

- **Jest (Unit Testing):** I wrote a `Calculator.test.js` file to test my math logic. This proves my `add`, `subtract`, and `multiply` functions give the correct answers.
- **ESLint (Linter):** I configured ESLint to read my code and find messy style issues or missing variables. This keeps the code clean and easy to read.

### 2. Version Control (Git & GitHub)

I used Git to save my work and collaborate safely.

- I created a GitHub repository and linked it to my local project.
- I used **Branches** to work on new ideas safely. For example, I created a `feature-multiply` branch to add multiplication without breaking the `main` code.
- I opened a **Pull Request (PR)** on GitHub to review the new code before merging it together.

### 3. Continuous Integration (CI Pipeline)

I set up an automated robot using **GitHub Actions**.

- I created a `.github/workflows/ci.yml` file.
- Now, every time I push code to GitHub, the CI pipeline automatically installs Node.js, runs my ESLint linter, and runs my Jest unit tests.
- If the code is good, I get a green checkmark. If there is a bug, the pipeline fails and stops me from merging bad code.

---

## Short Reflection Report

### What challenges did you face while learning Git, CI, and QA tools?

The biggest challenge was understanding how all these different tools connect to each other. Learning Git commands like `commit`, `push`, and `pull` was confusing at first because you have to remember the exact right order to type them. Also, setting up the Continuous Integration (CI) pipeline was tricky. The YAML file for GitHub Actions is very sensitive. If you miss one space or use the wrong indentation, the automatic robot will not understand the instructions and it will crash.

### How did the CI pipeline help streamline the development process?

The CI pipeline made the coding process much faster and much safer. Before setting up the CI pipeline, I had to remember to manually type `npm run test` and `npm run lint` every single time I changed a file. With GitHub Actions, a robot does this for me automatically every time I push new code to GitHub. If I make a mistake, the pipeline gives a red error and stops the bad code from joining the main project. This saved a lot of time and worry.

### How did version control and QA practices improve the collaboration and quality of your code?

Version control (Git) makes teamwork very easy. By using "branches," I could build a new feature (like the multiplication function) safely in my own space without breaking the working `main` branch. Quality Assurance (QA) tools drastically improved my code. The ESLint linter forced me to write clean, organized code without basic mistakes. The Jest unit tests proved that my math logic actually worked. By using Pull Requests, all my code was automatically tested by the CI robot and reviewed before it was finally merged.
