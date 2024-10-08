
import { useState } from 'react';

export function Plot(){
    const [isSpoilerShown, setisSpoilerShown] = useState(false);
    const [isWarningShown, setisWarningShown] = useState(true);

    function handleShownSpoilerClick() {
        setisSpoilerShown(!isSpoilerShown);
        setisWarningShown(false);
      };
    
    function handleCloseWarningClick(){
        setisWarningShown(false);
      }
    
    return(

        <>
            <h2>Fabuła:</h2>
            {isWarningShown && (<p>Uwaga opis fabuły zawiera spoiler 
                    <button onClick={handleCloseWarningClick}>X</button></p>
            )}
            <p>Dobrzy walcza ze zlymi. Trzeba wylaczyc pole silowe</p>
            {isSpoilerShown ? 
            (<p>Vader okazuje się być ojcem Luka</p>
            ) : (
                <button onClick={handleShownSpoilerClick}>Pokaż spoiler</button>)
            }
        </>
    )
}