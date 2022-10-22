export interface TVShowCreatedBy {
    id?: number;
    credit_id?: string;
    name?: string;
    gender?: number;
    profile_path?: string;
}

export interface TVShowGenre {
    id?: number;
    name?: string;
}

export interface TVShowLastEpisodeToAir {
    air_date?: string;
    episode_number?: number;
    id?: number;
    name?: string;
    overview?: string;
    production_code?: string;
    runtime?: number;
    season_number?: number;
    show_id?: number;
    still_path?: string;
    vote_average?: number;
    vote_count?: number;
}

export interface TVShowNetwork {
    id?: number;
    name?: string;
    logo_path?: string;
    origin_country?: string;
}

export interface TVShowProductionCompany {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
}

export interface TVShowProductionCountry {
    iso_3166_1?: string;
    name?: string;
}

export interface TVShowSeason {
    air_date?: string;
    episode_count?: number;
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: string;
    season_number?: number;
}

export interface TVShowSpokenLanguage {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
}

export interface TVShow {
    adult?: boolean;
    backdrop_path?: string;
    created_by?: TVShowCreatedBy[];
    episode_run_time?: number[];
    first_air_date?: string;
    genres?: TVShowGenre[];
    homepage?: string;
    id?: number;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: TVShowLastEpisodeToAir;
    name?: string;
    next_episode_to_air?: any;
    networks?: TVShowNetwork[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: TVShowProductionCompany[];
    production_countries?: TVShowProductionCountry[];
    seasons?: TVShowSeason[];
    spoken_languages?: TVShowSpokenLanguage[];
    status?: string;
    tagline?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
}