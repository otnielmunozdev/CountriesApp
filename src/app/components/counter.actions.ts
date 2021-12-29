import { Action } from "@ngrx/store";

export const CLICKCARD = '[count] ClickCard'; 
export const CLICKFILTER = '[count] ClickFilter'; 
export const CLICKCARDFILTERLOCATION = '[count] ClickFilterCardLocation'; 
export const CLICKCARDFILTEREPISODE = '[count] ClickFilterCardEpisode'; 

export class ClickCardAction implements Action{
    readonly type = CLICKCARD;
}

export class ClickFilterAction implements Action{
    readonly type = CLICKFILTER;
}

export class ClickFilterCardLocationAction implements Action{
    readonly type = CLICKCARDFILTERLOCATION;
}

export class ClickFilterCardEpisodeAction implements Action{
    readonly type = CLICKCARDFILTEREPISODE;
}