import { useState, useEffect } from "react";
import queryCharacter from "@/pages/api/character";
import FirstSection from "@/components/FirstSection";
import { useRecoilState } from "recoil";
import { searchInputState } from "@/lib/recoil";
import Card from "@/components/Card";

export default function Home() {
  const { getCharactersListByLocationID } = queryCharacter();
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  const parsedSearchInput = parseInt(searchInput);
  const { loading, data } = getCharactersListByLocationID(parsedSearchInput);
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
      <FirstSection text={!loading ? data.location.name : "Loading..."} />
      <div style={{ backgroundColor: "#5AAD80", paddingTop: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            paddingRight: "3rem",
            paddingLeft: "3rem",
          }}
        >
          {!showCards
            ? Array.from({ length: 4 }).map((_, index) => (
                <Card
                  skeletonFlag={true}
                  id={index}
                />
              ))
            : showCards &&
              data?.location?.residents?.map((character) => (
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
