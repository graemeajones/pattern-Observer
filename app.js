// Imports
import NumberPublisher from './NumberPublisher.js';
//import GraemeDisplay from './DisplayGraeme.js';

// Instantiate publisher
const numberPublisher = new NumberPublisher("RandomIntegerRandomInterval");

// Instantiate observers and subscribe
//const graeme = new GraemeDisplay('Graeme');
//numberPublisher.registerSubscriber(graeme);

// Run publisher
numberPublisher.run();

// Terminate publisher and display results
const interval = 10000; // Ten seconds
setTimeout(() => numberPublisher.stop(), interval);
//setTimeout(() => graeme.display(), interval + 100);
console.log("app.js completed");
