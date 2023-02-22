// displays message to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');
// set encoding to utf-8 encoding
process.stdin.setEncoding('utf8');
// reading user input from the console
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  // check user input
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
// exit message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
