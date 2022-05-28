// Imports
import NumberPublisher from './NumberPublisher.js';
import TugDisplay from './TugDisplay.js';
import EugeneDisplay from './EugeneDisplay.js';
import GraemeDisplay from './GraemeDisplay.js';

// Instantiate publisher
const numberPublisher = new NumberPublisher("RandomIntegerRandomInterval");

// Instantiate observers and subscribe
const tug = new TugDisplay('Tug');
const eugene = new EugeneDisplay('Eugene');
const graeme = new GraemeDisplay('Graeme');
numberPublisher.registerSubscriber(tug);
numberPublisher.registerSubscriber(eugene);
graeme.subscribeTo(numberPublisher);

// Run publisher
numberPublisher.run();

// Terminate publisher and display results
const interval = 10000; // Ten seconds
setTimeout(() => numberPublisher.stop(), interval);
setTimeout(() => tug.display(), interval + 100);
setTimeout(() => eugene.display(), interval + 100);
setTimeout(() => graeme.display(), interval + 100);
console.log("app.js completed");
