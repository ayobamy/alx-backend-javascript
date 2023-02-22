process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});

process.stdin.on('end', () => {
  process.stdin.write('This important software is now closing\n');
});
