import { Item } from "../Item/Item";


const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];
const WIDTH = 120



export function List() {
    return (
        <>
            <button className={`bg-transparent border border-solid border-salmon p-3 rounded 
            cursor-pointer w-[${WIDTH}px] text-salmon trasition-colors m-8 hover:text-white hover:bg-salmon`}
                onClick={()=>alert(`Liczba emoji: ${emojis.length}`)}>
                Pokaż liczbę emoji
            </button>

            <ul className="flex flex-col gap-8 p-[30px]">
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji} />
                ))}
            </ul>
        </>
    );
}
