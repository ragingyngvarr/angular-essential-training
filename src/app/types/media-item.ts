export type Medium = 'Movies' | 'Series';

export interface MediaItem {
    id: number;
    name: string;
    medium: Medium;
    category: string;
    year: number;
    watchedOn: Date;
    isFavorite: boolean;
}
