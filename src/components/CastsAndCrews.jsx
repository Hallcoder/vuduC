import React from 'react';
import CastOrCrew from './CastOrCrew';
import Header from './common/Header';
function CastsAndCrews({directorList,actors,starList}) {
    let dirImage = 'https://images2.vudu.com/person/787911-142';
    return (  
         <div className='flex flex-col h-[50vh] w-10/12 m-auto '>
            <Header title={"Cast & Crew"}/>
            <div className="flex overflow-x-scroll">
            <CastOrCrew image={dirImage} name={directorList && directorList.length !==0 ? directorList[0].name:'G.O.A.T'} role={'director'} />
            {actors && actors.map(c => {
                return <CastOrCrew image={c.image ? c.image:null} name={c.name} role={c.asCharacter}/>
            })}
            {starList && starList.map(c => {
                return <CastOrCrew image={c.image} name={c.name} role={'dummy boy'} />
            })}
            </div>
         </div>
    );
}

export default CastsAndCrews;