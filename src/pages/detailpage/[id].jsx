import { useCharacterByID } from "@/pages/api/character";
import FirstSection from '@/components/FirstSection';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const routerID = router.query.id;
  const parsedSearchInput = parseInt(routerID);
  const { loading,error, data } = useCharacterByID(parsedSearchInput);

  return (
    <>
      <FirstSection image={data?.character?.image} text={!loading ? data?.character?.name : "Loading..."}/>
      <div style={{paddingTop: '2rem', paddingRight: '3rem', paddingLeft: '3rem', color:'#5AAD80' }}>
        <h3 style={{color:'#038E43'}}>Status Type</h3>
        <p style={{fontWeight:400}}>{data?.character?.status} {data?.character?.type ? ` - ${data?.character?.type}` : ''}</p>
        <h3 style={{color:'#038E43'}}>Location</h3>
        <p style={{fontWeight:400}}>{data?.character?.location.name}</p>
        <h3 style={{color:'#038E43'}}>First Seen In</h3>
        <p style={{fontWeight:400}}>{data?.character?.origin.name}</p>
        <h3 style={{color:'#038E43'}}>Episode</h3>
        <p style={{fontWeight:400}}>{data?.character?.episode.map(e => e.name).join(', ')}</p>
      </div>
    </>
  );
}
