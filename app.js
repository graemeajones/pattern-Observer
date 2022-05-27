// Imports
import NumberPublisher from './NumberPublisher.js';
import EugeneDisplay from './EugeneDisplay.js';

// Instantiate publisher
const numberPublisher = new NumberPublisher("RandomIntegerRandomInterval");

// Instantiate observers and subscribe
const eugene = new EugeneDisplay('Eugene');
numberPublisher.registerSubscriber(eugene);

// Run publisher
numberPublisher.run();

// Terminate publisher and display results
const interval = 10000; // Ten seconds
setTimeout(() => numberPublisher.stop(), interval);
setTimeout(() => eugene.display(), interval + 100);
console.log("app.js completed");
