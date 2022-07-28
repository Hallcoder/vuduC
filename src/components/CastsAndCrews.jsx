import React from 'react';
import CastOrCrew from './CastOrCrew';
import Header from './common/Header';
function CastsAndCrews({directorList,actors}) {
    let dirImage = 'https://images2.vudu.com/person/787911-142';
    return (  
         <div className='flex flex-col h-[50vh] w-10/12 m-auto '>
            <Header title={"Cast & Crew"}/>
            <div className="flex overflow-x-scroll">
            <CastOrCrew image={dirImage} name={directorList[0].name} role={'director'} />
            {actors.map(c => {
                return <CastOrCrew image={c.image ? c.image:null} name={c.name} role={c.asCharacter}/>
            })}
            </div>
         </div>
    );
}

export default CastsAndCrews;