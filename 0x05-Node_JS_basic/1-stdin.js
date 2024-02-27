process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
  const name = input.trim();

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
