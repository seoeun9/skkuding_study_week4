import { data } from "../data.js"

interface PokemonItemProps {
    setClicked: React.Dispatch<React.SetStateAction<boolean>>; // 부모에서 받은 setClicked
  }

export default function PokemonItem({ setClicked }: PokemonItemProps){
    function CreateCard(){
            return(
                <div className="container">
                    {data.map((item, index) => (
                        <div 
                            className="item"    
                            key={index}     
                            onClick={ () => {
                                window.localStorage.setItem("pr_item", JSON.stringify(item));
                                setClicked(true);
                            }}>                            
                            <img src={`images/${item.name}.png`} alt={`${item.name}`}></img>
                            <text>
                                <div className="h2">
                                    <b>{item.name}</b><br />
                                </div>
                            Height : {item.height} <br />
                            Weight : {item.weight} <br />
                            Types : {item.types}
                            </text>
                        </div>
                    ))};
                </div>
            );
        }
    return (
        <CreateCard />
    );
};