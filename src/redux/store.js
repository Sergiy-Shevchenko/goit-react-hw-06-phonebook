import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { reducer } from './reduser';

const enhancher = devToolsEnhancer();

export const store = createStore(reducer, enhancher);

console.log(store.getState());
