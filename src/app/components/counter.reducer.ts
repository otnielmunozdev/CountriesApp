import { Action } from '@ngrx/store';
import { CLICKCARD, CLICKCARDFILTEREPISODE, CLICKCARDFILTERLOCATION, CLICKFILTER } from './counter.actions';


export function countReducerCard(state:number = 0, action: Action){
    switch (action.type) {
        case CLICKCARD:
            return state = state + 1;   
        default:
            return state;
    }
}


export function countReducerFilter(state:number = 0, action: Action){
    switch (action.type) {
        case CLICKFILTER:
            return state = state + 1;   
        default:
            return state;
    }
}

export function countReducerFilterClickLocation(state:number = 0, action: Action){
    switch (action.type) {
        case CLICKCARDFILTERLOCATION:
            return state = state + 1;   
        default:
            return state;
    }
}

export function countReducerFilterClickEpisode(state:number = 0, action: Action){
    switch (action.type) {
        case CLICKCARDFILTEREPISODE:
            return state = state + 1;   
        default:
            return state;
    }
}


