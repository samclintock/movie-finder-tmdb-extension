import type * as utilTypes from "../../../common/types/utils";

export const getMediaImagePath = (options: utilTypes.MediaImageOptions): string => {
    if (!options)
        return "";
    
    if (!(options.posterPath || options.profilePath))
        return "";
    
    const { config } = options;
    
    if (!(config?.baseUrl && config?.posterSizes && config?.profileSizes))
        return "";
    
    let posterPath: string;
    let profilePath: string;

    if (options.imageType === "search") {
        [posterPath] = config.posterSizes;
        [profilePath] = config.profileSizes;
    } else if (config.posterSizes.length >= 4 && config.profileSizes.length >= 4) {
        posterPath = config.posterSizes[3];
        profilePath = config.posterSizes[3];
    }

    if (!(posterPath && profilePath))
        return "";
    
    switch (options.mediaType) {
        case "movie":
        case "tv":
            return `${config.baseUrl}${posterPath}${options.posterPath}`;
        case "person":
            return `${config.baseUrl}${profilePath}${options.profilePath}`;
        default:
            return "";
    }
}