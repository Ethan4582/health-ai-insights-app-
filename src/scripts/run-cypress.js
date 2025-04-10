
const { spawn } = require('child_process');
const path = require('path');

// Get the command line arguments
const args = process.argv.slice(2);
const command = args[0] || 'open'; // Default to 'open' if no command is provided

// Determine the Cypress binary path
const cypressBin = path.resolve(__dirname, '../../node_modules/.bin/cypress');

// Spawn the Cypress process
const cypress = spawn(cypressBin, [command], {
  stdio: 'inherit', // Pipe stdout/stderr to the parent process
  shell: true
});

// Handle process exit
cypress.on('close', (code) => {
  console.log(`Cypress process exited with code ${code}`);
  process.exit(code);
});

console.log(`Running Cypress with command: ${command}`);
