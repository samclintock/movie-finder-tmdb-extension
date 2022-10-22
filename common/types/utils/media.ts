import type { MediaType } from "../api/tmdb/media-type";

export interface MediaImageOptions {
    name: string,
    config: {
        baseUrl: string,
        posterSizes: string[],
        profileSizes: string[]
    },
    imageType: "search" | "media",
    mediaType: MediaType,
    posterPath?: string,
    profilePath?: string
}