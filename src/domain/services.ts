export interface ServiceList {
    count: number | null,
    next: boolean | null,
    previous: boolean | null,
    results: [] | null
}

export interface serviceItem {
    id: number | null,
    created: string | null,
    modified: string | null,
    name: string | null,
    name_en: string | null,
    name_ar: string | null
}