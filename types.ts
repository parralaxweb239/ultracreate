export interface Author {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  following: number;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  author: Author;
  coverUrl: string;
  genre: string;
  likes: number;
  rating: number;
  createdAt: string;
  wordCount: number;
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: Author;
  tags: string[];
  likes: number;
  rating: number; // Sum of all ratings
  ratingCount: number; // Number of ratings given
  createdAt: string;
  privacy: 'public' | 'private';
}

export interface Comment {
  id: string;
  author: Pick<Author, 'id' | 'name' | 'avatarUrl'>;
  text: string;
  createdAt: string;
}

export type View =
  | { type: 'library' }
  | { type: 'write'; storyId?: string }
  | { type: 'story'; storyId: string }
  | { type: 'artwork'; artworkId: string }
  | { type: 'profile'; authorId: string };

export interface Correction {
  original: string;
  suggestion: string;
  reason: string;
}

export interface SafetyAnalysisResponse {
  isSafe: boolean;
  reason: string;
}

export interface OriginalityAnalysisResponse {
  isOriginal: boolean;
  reason: string;
}