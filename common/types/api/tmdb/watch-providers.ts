export interface WatchProviders {
    id: number;
    results: WatchProviderRegions;
}

export interface WatchProviderRegions {
    AD: WatchProviderOptions;
    AL: WatchProviderOptions;
    AR: WatchProviderOptions;
    AT: WatchProviderOptions;
    AU: WatchProviderOptions;
    BA: WatchProviderOptions;
    BE: WatchProviderOptions;
    BG: WatchProviderOptions;
    BO: WatchProviderOptions;
    BR: WatchProviderOptions;
    CA: WatchProviderOptions;
    CH: WatchProviderOptions;
    CL: WatchProviderOptions;
    CO: WatchProviderOptions;
    CR: WatchProviderOptions;
    CZ: WatchProviderOptions;
    DE: WatchProviderOptions;
    DK: WatchProviderOptions;
    DO: WatchProviderOptions;
    EC: WatchProviderOptions;
    EE: WatchProviderOptions;
    EG: WatchProviderOptions;
    ES: WatchProviderOptions;
    FI: WatchProviderOptions;
    FR: WatchProviderOptions;
    GB: WatchProviderOptions;
    GR: WatchProviderOptions;
    GT: WatchProviderOptions;
    HK: WatchProviderOptions;
    HN: WatchProviderOptions;
    HR: WatchProviderOptions;
    HU: WatchProviderOptions;
    ID: WatchProviderOptions;
    IE: WatchProviderOptions;
    IN: WatchProviderOptions;
    IS: WatchProviderOptions;
    IT: WatchProviderOptions;
    JP: WatchProviderOptions;
    KR: WatchProviderOptions;
    LI: WatchProviderOptions;
    LT: WatchProviderOptions;
    LV: WatchProviderOptions;
    MK: WatchProviderOptions;
    MT: WatchProviderOptions;
    MX: WatchProviderOptions;
    MY: WatchProviderOptions;
    NL: WatchProviderOptions;
    NO: WatchProviderOptions;
    NZ: WatchProviderOptions;
    PE: WatchProviderOptions;
    PH: WatchProviderOptions;
    PL: WatchProviderOptions;
    PT: WatchProviderOptions;
    PY: WatchProviderOptions;
    RO: WatchProviderOptions;
    RS: WatchProviderOptions;
    SE: WatchProviderOptions;
    SG: WatchProviderOptions;
    SI: WatchProviderOptions;
    SK: WatchProviderOptions;
    SM: WatchProviderOptions;
    TH: WatchProviderOptions;
    TW: WatchProviderOptions;
    US: WatchProviderOptions;
    UY: WatchProviderOptions;
    VE: WatchProviderOptions;
    ZA: WatchProviderOptions;
}

export interface WatchProviderOptions {
    link?: string;
    buy?: WatchProvider[];
    flatrate?: WatchProvider[];
    rent?: WatchProvider[];
}

export interface WatchProvider {
    display_priority?: number;
    logo_path?: string;
    provider_id?: number;
    provider_name?: string;
}

export type WatchProviderType = "movie" | "tv";