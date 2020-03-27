// EM

import EventEmitter from 'events';

const evenEmitter = new EventEmitter()

evenEmitter.on('change', () => {
    console.log('Something has changed');
});

evenEmitter.emit('change');
evenEmitter.emit('change');
evenEmitter.emit('change');