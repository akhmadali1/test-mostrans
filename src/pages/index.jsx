import { useState, useEffect } from 'react';
import queryCharacter from '@/pages/api/character';
import FirstSection from '@/components/FirstSection';
import Card from '@/components/Card';

export default function Home() {
  const { getAllCharactersList } = queryCharacter();
  const { loading, data } = getAllCharactersList();
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (!loading) {
      timeoutId = setTimeout(() => {
        setShowCards(true);
      }, 1000); // Set timeout duration in milliseconds
    }
    return () => clearTimeout(timeoutId);
  }, [loading]);

  return (
    <>
      <FirstSection />
      <div style={{ backgroundColor: '#5AAD80', paddingTop: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem', paddingRight: '3rem', paddingLeft: '3rem' }}>
        {!showCards
            ? Array.from({ length: 4 }).map((_, index) => (
                <Card
                  skeletonFlag={true}
                  id={index}
                />
              ))
            : showCards &&
              data?.characters?.results?.map((character) => (
                <Card
                  skeletonFlag={false}
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  type={character.type}
                  locationName={character.location.name}
                />
              ))}
        </div>
      </div>
    </>
  );
}
