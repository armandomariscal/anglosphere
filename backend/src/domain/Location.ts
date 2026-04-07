export interface Location {
    id: string;
    name: string;
    type: string;
    slug: string;
    parent: string | null;
    code?: string;
}