export function LikesCoutner({numberOfLikes, onLikeButtonClick, onLoveButtonClick}){
    
    

    return <>
            <h2>Licznik polubień: {numberOfLikes}</h2>
            <button onClick={onLikeButtonClick}>Lubie to!</button>
            <button onClick={onLoveButtonClick}>Kocham to!</button>
    </>

}