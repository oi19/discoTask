import { DetailedBrandItem } from "./brands"
import { CategoryItem } from "./categories"

export interface Offers {
    count: number | null,
    next: string | null,
    previous: string | null,
    results: []
}

export interface OFFERS_ITEM {
    id: number | null,
    thumbnail: string | null,
    thumbnail_web: string | null,
    background: string | null,
    background_web: string | null,
    is_online: boolean | null,
    promo_code: string | null,
    title: string | null,
    product_label: string | null,
    price: number | null,
    expiry_date: string | null,
    description: string | null,
    brand: DetailedBrandItem,
    category: CategoryItem,
    slug: string | null,
    audience: any,
}