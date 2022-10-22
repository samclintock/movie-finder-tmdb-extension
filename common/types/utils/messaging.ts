import type * as tmdbTypes from "../api/tmdb";

export type SendMessageName = 
    | "Movie"
    | "TV"
    | "Person"
    | "Search"
    | "Config";

export type SendMessageData = {
    Movie: number;
    TV: number;
    Person: number;
    Search: string;
    Config: undefined;
}

export type SendMessageResponse = {
    Movie: tmdbTypes.Movie | undefined;
    TV: tmdbTypes.TVShow | undefined;
    Person: tmdbTypes.Person | undefined;
    Search: tmdbTypes.Search | undefined;
    Config: tmdbTypes.Config | undefined;
}