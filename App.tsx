import React, { useState } from 'react';
import Header from './components/Header';
import { LibraryView } from './components/LibraryView';
import { WriteView } from './components/WriteView';
import { StoryView } from './components/StoryView';
import { ProfileView } from './components/ProfileView';
import { ArtworkView } from './components/ArtworkView';
import type { Story, View, Author, Artwork } from './types';
import { MOCK_STORIES, INITIAL_AUTHORS, CURRENT_USER_ID, MOCK_ARTWORKS } from './constants';
import { ThemeProvider } from './hooks/useTheme';

const App: React.FC = () => {
const [stories, setStories] = useState<Story[]>(MOCK_STORIES);
const [artworks, setArtworks] = useState<Artwork[]>(MOCK_ARTWORKS);
const [authors, setAuthors] = useState<Record<string, Author>>(INITIAL_AUTHORS);
const [followingIds, setFollowingIds] = useState<Set<string>>(new Set(['1'])); // Mock: current user follows author '1'
const [currentView, setCurrentView] = useState<View>({ type: 'library' });
const [currentUser, setCurrentUser] = useState<Author | null>(null);

const handleLogin = () => {
// Simulate signing in with Google and fetching profile info
const simulatedGoogleProfile = {
name: 'CreativeUser',
avatarUrl: '[https://picsum.photos/seed/googleuser/100/100](https://picsum.photos/seed/googleuser/100/100)'
};
handleUpdateProfile(CURRENT_USER_ID, simulatedGoogleProfile);
setCurrentUser({ ...authors[CURRENT_USER_ID], ...simulatedGoogleProfile });
};

const handleLogout = () => {
setCurrentUser(null);
setCurrentView({ type: 'library' });
};

const handleSaveStory = (storyToSave: Story, isPublishing: boolean) => {
setStories(prevStories => {
const existingIndex = prevStories.findIndex(s => s.id === storyToSave.id);
if (existingIndex > -1) {
const updatedStories = [...prevStories];
updatedStories[existingIndex] = storyToSave;
return updatedStories;
} else {
return [...prevStories, storyToSave];
}
});
if (isPublishing) {
setCurrentView({ type: 'story', storyId: storyToSave.id });
}
};

const handleSaveArtwork = (artworkToSave: Artwork) => {
setArtworks(prevArtworks => {
const existingIndex = prevArtworks.findIndex(a => a.id === artworkToSave.id);
if (existingIndex > -1) {
const updatedArtworks = [...prevArtworks];
updatedArtworks[existingIndex] = artworkToSave;
return updatedArtworks;
} else {
return [...prevArtworks, artworkToSave];
}
});
};

const handleUpdateProfile = (authorId: string, data: Partial<Author>) => {
const updatedAuthor = { ...authors[authorId], ...data };

```
setAuthors(prev => ({
  ...prev,
  [authorId]: updatedAuthor,
}));

if (currentUser?.id === authorId) {
  setCurrentUser(updatedAuthor);
}

setStories(prevStories => prevStories.map(story => 
  story.author.id === authorId ? { ...story, author: updatedAuthor } : story
));

setArtworks(prevArtworks => prevArtworks.map(artwork => 
  artwork.author.id === authorId ? { ...artwork, author: updatedAuthor } : artwork
));
```

};

const handleFollowToggle = (targetAuthorId: string) => {
if (!currentUser) return; // Must be logged in to follow
const newFollowingIds = new Set(followingIds);
const isCurrentlyFollowing = newFollowingIds.has(targetAuthorId);

```
setAuthors(prev => {
  const newAuthors = { ...prev };
  const currentUserData = { ...newAuthors[currentUser.id] };
  const targetUserData = { ...newAuthors[targetAuthorId] };

  if (isCurrentlyFollowing) {
    newFollowingIds.delete(targetAuthorId);
    currentUserData.following -= 1;
    targetUserData.followers -= 1;
  } else {
    newFollowingIds.add(targetAuthorId);
    currentUserData.following += 1;
    targetUserData.followers += 1;
  }

  newAuthors[currentUser.id] = currentUserData;
  newAuthors[targetAuthorId] = targetUserData;
  setCurrentUser(currentUserData);
  
  // Also update stories in place
  setStories(prevStories => prevStories.map(story => {
    if (story.author.id === currentUser.id) return { ...story, author: currentUserData };
    if (story.author.id === targetAuthorId) return { ...story, author: targetUserData };
    return story;
  }));
  
  setArtworks(prevArtworks => prevArtworks.map(artwork => {
    if (artwork.author.id === currentUser.id) return { ...artwork, author: currentUserData };
    if (artwork.author.id === targetAuthorId) return { ...artwork, author: targetUserData };
    return artwork;
  }));

  return newAuthors;
});

setFollowingIds(newFollowingIds);
```

};

const renderView = () => {
switch (currentView.type) {
case 'write':
if (!currentUser) return <LibraryView stories={stories} artworks={artworks} setView={setCurrentView} />;
const storyToEdit = stories.find(s => s.id === currentView.storyId);
return <WriteView onSave={handleSaveStory} existingStory={storyToEdit} currentUser={currentUser} />;
case 'story':
const storyToShow = stories.find(s => s.id === currentView.storyId);
return storyToShow ? <StoryView story={storyToShow} setView={setCurrentView} /> : <LibraryView stories={stories} artworks={artworks} setView={setCurrentView} />;
case 'artwork':
const artworkToShow = artworks.find(a => a.id === currentView.artworkId);
return artworkToShow ? <ArtworkView artwork={artworkToShow} setView={setCurrentView} /> : <LibraryView stories={stories} artworks={artworks} setView={setCurrentView} />;
case 'profile':
const profileAuthor = authors[currentView.authorId];
if (!profileAuthor) return <LibraryView stories={stories} artworks={artworks} setView={setCurrentView} />;
return (
<ProfileView
author={profileAuthor}
currentUser={currentUser}
stories={stories.filter(s => s.author.id === profileAuthor.id)}
artworks={artworks.filter(a => a.author.id === profileAuthor.id)}
allAuthors={Object.values(authors)}
isFollowing={currentUser ? followingIds.has(profileAuthor.id) : false}
onFollowToggle={handleFollowToggle}
onSaveProfile={handleUpdateProfile}
onSaveArtwork={handleSaveArtwork}
setView={setCurrentView}
/>
);
case 'library':
default:
return <LibraryView stories={stories} artworks={artworks} setView={setCurrentView} />;
}
};

return ( <ThemeProvider> <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans transition-colors duration-300"> <Header 
       setView={setCurrentView} 
       currentUser={currentUser}
       onLogin={handleLogin}
       onLogout={handleLogout}
     /> <main className="container mx-auto px-4 py-8">
{renderView()} </main> </div> </ThemeProvider>
);
};

export default App;
