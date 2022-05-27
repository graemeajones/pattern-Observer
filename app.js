// Imports
import NumberPublisher from './NumberPublisher.js';
import TugDisplay from './TugDisplay.js';

// Instantiate publisher
const numberPublisher = new NumberPublisher("RandomIntegerRandomInterval");

// Instantiate observers and subscribe
const tug = new TugDisplay('Tug');
numberPublisher.registerSubscriber(tug);

// Run publisher
numberPublisher.run();

// Terminate publisher and display results
const interval = 10000; // Ten seconds
setTimeout(() => numberPublisher.stop(), interval);
setTimeout(() => tug.display(), interval + 100);
console.log("app.js completed");
