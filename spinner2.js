const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}`); 
  }, 200 * i);
} // do we need \n?