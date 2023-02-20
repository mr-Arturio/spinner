setTimeout(() => {
  process.stdout.write('\r| '); //'\r' - returning cursor to the beginning
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ '); // Spaces are added after the character so that the cursor moves far enough away from our animation
}, 300);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 500);

setTimeout(() => {
  // Need to escape the backlash since it's a special character.
  process.stdout.write('\r\\ ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\ ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 1900);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 2100);

setTimeout(() => {
  process.stdout.write('\n');
}, 2100);