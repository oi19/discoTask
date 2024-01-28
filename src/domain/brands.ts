import { DetailedSectorItem } from "./sectors"

export interface BrandsList {
    count: number | null,
    next: string | null,
    previous: string | null,
    results: [],
    description: string | null,
    slug: string | null,
    meta_tag: string | null,
    meta_title: string | null,
    meta_description: string | null,
    phone_numbers: string | null
}

export interface BrandItem {
    id: number | null,
    title: string | null,
    thumbnail: string | null,
    thumbnail_web: string | null,
    background: string | null,
    background_web: string | null,
    sector: {},
    categories: []
}

export interface DetailedBrandItem {
    id: number | null,
    title: string | null,
    thumbnail: string | null,
    thumbnail_web: string | null,
    background: string | null,
    background_web: string | null,
    sector: DetailedSectorItem,
    categories: [],
    description: string | null,
    slug: string | null,
    meta_tag: string | null,
    meta_title: string | null,
    meta_description: string | null,
    phone_numbers: string | null
}