function makeChange(amount) {
  // Validate input
  if (amount <= 0 || amount >= 100 || !Number.isInteger(amount)) {
    throw new Error('Invalid input: Amount must be a positive integer less than 100.');
  }

  // Initialize variables to count each coin
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of quarters
  quarters = Math.floor(amount / 25);
  amount %= 25;

  // Calculate the number of dimes
  dimes = Math.floor(amount / 10);
  amount %= 10;

  // Calculate the number of nickels
  nickels = Math.floor(amount / 5);
  amount %= 5;

  // The remaining amount is in pennies
  pennies = amount;

  // Create and return the result object
  const result = {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies,
  };

  return result;
}

// Examples
console.log(makeChange(47)); // Output: { "q": 1, "d": 2, "n": 0, "p": 2 }
console.log(makeChange(24)); // Output: { "q": 0, "d": 2, "n": 0, "p": 4 }
