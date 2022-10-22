export interface Config {
    images: ImageConfigration,
    change_keys: string[]
}

interface ImageConfigration {
    base_url: string,
    secure_base_url: string,
    backdrop_sizes: string[],
    logo_sizes: string[],
    poster_sizes: string[],
    profile_sizes: string[],
    still_sizes: string[]
}