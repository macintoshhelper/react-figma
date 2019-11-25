import * as React from 'react';
import { render, subscribeOnPluginMessages } from '../../../src';
import { App } from './App';

(() => {
    onmessage = message => {
        subscribeOnPluginMessages(message);
    };

    render(<App />, null);
})();