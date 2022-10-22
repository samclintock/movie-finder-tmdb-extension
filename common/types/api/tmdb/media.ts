import type { Movie } from "./movie";
import type { TVShow } from "./tv-show";
import type { Person } from "./person";

export interface Media {
    movie: Movie,
    tvShow: TVShow,
    person: Person
}