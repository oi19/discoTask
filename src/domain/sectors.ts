export interface SectorsList {
    count: number | null,
    next: boolean | null,
    previous: boolean | null,
    results: [] | null
}

export interface SectorItem {
    value: string | null,
    label: string | null,
    slug: string | null,
    image: string | null,
    meta_tag: string | null,
    meta_title: string | null,
    meta_description: string | null,
    description: string | null
}

export interface DetailedSectorItem {
    id: string | null,
    title: string | null,
    title_en: string | null,
    title_ar: string | null,
    slug: string | null,
    slug_ar: string | null,
    published: boolean | null,
    publish_date: string | null,
    un_publish_date: string | null,
    image: string | null,
    meta_tag: string | null,
    meta_tag_en: string | null,
    meta_tag_ar: string | null,
    meta_description: string | null,
    meta_description_en: string | null,
    meta_description_ar: string | null,
    meta_title: string | null,
    meta_title_en: string | null,
    meta_title_ar: string | null,
    description: string | null,
    description_en: string | null,
    description_ar: string | null
}