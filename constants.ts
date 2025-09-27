import type { Story, Author, Artwork } from './types';

export const CURRENT_USER_ID = '3';

export const INITIAL_AUTHORS: Record<string, Author> = {
  '1': { id: '1', name: 'Elara Vance', avatarUrl: 'https://picsum.photos/seed/elara/100/100', bio: 'Chronicler of distant stars and forgotten futures.', followers: 1234, following: 56 },
  '2': { id: '2', name: 'Kaelen Rourke', avatarUrl: 'https://picsum.photos/seed/kaelen/100/100', bio: 'Scribe of ancient woods and whispered magic.', followers: 2890, following: 12 },
  '3': { id: '3', name: 'User123', avatarUrl: 'https://picsum.photos/seed/user/100/100', bio: 'Share your creative journey...', followers: 15, following: 22 },
};


export const MOCK_STORIES: Story[] = [
  {
    id: '1',
    title: 'The Last Stargazer',
    subtitle: 'A tale of cosmic loneliness and discovery.',
    content: `In the silent expanse of the void, Orion was the last of his kind. For centuries, he had piloted the Stardust Drifter, a vessel cobbled together from the remnants of a forgotten civilization. His mission was simple: to find a star that hadn't yet died. Every day was a meticulous routine of system checks, trajectory calculations, and long, quiet hours staring into the star-dusted abyss. One cycle, a signal unlike any he had ever encountered pierced the silence. It was faint, rhythmic, and impossibly ancient. It sang a song of water, and earth, and life. Hope, a feeling long dormant, flickered in his chest. He adjusted his course, the Stardust Drifter turning its nose towards a tiny, blue-green jewel in a sea of darkness. The journey would be long, but for the first time in an age, Orion wasn't just surviving; he was heading home.`,
    author: INITIAL_AUTHORS['1'],
    coverUrl: 'https://picsum.photos/seed/stargazer/800/600',
    genre: 'Sci-Fi',
    likes: 125,
    rating: 9.2,
    createdAt: '2024-07-21T10:00:00Z',
    wordCount: 168,
  },
  {
    id: '2',
    title: 'Whispers of the Old Wood',
    subtitle: 'Where ancient trees hold ancient secrets.',
    content: `The Old Wood was a place of deep shadows and deeper silence. Locals said the trees whispered to those who knew how to listen. Anya, a skeptic and a botanist, came to study its unique flora, not its folklore. But as she ventured further, the woods began to feel... sentient. The wind in the leaves sounded like hushed conversations. Moss grew in patterns resembling archaic symbols. One afternoon, she stumbled upon a clearing where a single, colossal oak stood. Its bark was carved with faces, each one telling a story of a time long past. As she touched the weathered surface, a wave of images flooded her mind—of forgotten kings, of wild magic, of a pact made between man and forest. She realized the whispers weren't just stories; they were memories, and the Old Wood was their library.`,
    author: INITIAL_AUTHORS['2'],
    coverUrl: 'https://picsum.photos/seed/oldwood/800/600',
    genre: 'Fantasy',
    likes: 240,
    rating: 9.8,
    createdAt: '2024-07-20T14:30:00Z',
    wordCount: 172,
  },
];

export const MOCK_ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    title: 'Stardust Drifter Concept',
    description: 'Early concept sketch for the main vessel in "The Last Stargazer". Explored a more organic, whale-like design.',
    imageUrl: 'https://picsum.photos/seed/stardust-drifter/1024/768',
    author: INITIAL_AUTHORS['1'],
    tags: ['concept art', 'sci-fi', 'spaceship'],
    likes: 345,
    rating: 98, // sum of ratings (e.g., 10 ratings of avg 9.8)
    ratingCount: 10,
    createdAt: '2024-07-22T11:00:00Z',
    privacy: 'public',
  },
  {
    id: 'art-2',
    title: 'The Whispering Oak',
    description: 'A digital painting of the central oak from "Whispers of the Old Wood". I tried to capture its ancient and sentient nature.',
    imageUrl: 'https://picsum.photos/seed/whispering-oak/768/1024',
    author: INITIAL_AUTHORS['2'],
    tags: ['fantasy art', 'digital painting', 'nature'],
    likes: 512,
    rating: 145, // sum of ratings (e.g., 15 ratings of avg 9.66)
    ratingCount: 15,
    createdAt: '2024-07-21T18:45:00Z',
    privacy: 'public',
  },
  {
    id: 'art-3',
    title: 'Cosmic Jewel',
    description: 'The blue-green planet, a beacon of hope.',
    imageUrl: 'https://picsum.photos/seed/cosmic-jewel/1024/1024',
    author: INITIAL_AUTHORS['1'],
    tags: ['sci-fi', 'planet', 'abstract'],
    likes: 180,
    rating: 45,
    ratingCount: 5,
    createdAt: '2024-07-23T09:20:00Z',
    privacy: 'public',
  }
];


export const GENRE_TAGS = ['Sci-Fi', 'Fantasy', 'Mystery', 'Thriller', 'Romance', 'Historical', 'Horror'];