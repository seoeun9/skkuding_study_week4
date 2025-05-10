export default function PokemonDetail(){
    const item = JSON.parse(window.localStorage.getItem("pr_item") ?? "{}");
    const info_Data = [
        ["Name", item.name],
        ["Height", item.height],
        ["Weight", item.weight],
        ["Types", item.types.join(", ")],
        ["Base Experience", item["base-Experience"]],
        ["Abilities", item.abilities.join(", ")],
        ["HP", item.hp],
        ["Attack", item.attack],
        ["Defense", item.defense],
        ["Special Attack", item["special-attack"]],
        ["Speed", item.speed]
    ];

    return (
            <div className="body">
                <div className="img-wrapper">
                    <img src={`${process.env.PUBLIC_URL}/images/${item.name}.png`} alt={item.name} />
                </div>
                <table className="infoTable">
                    <tbody>
                        {info_Data.map((item, index) => (
                        <tr>
                            <td>
                                <b>{item[0]}</b>
                            </td>
                            <td>
                                {item[1]}
                            </td>
                        </tr>                    
        ))}
                    </tbody>
                </table>
            </div>
    );
}
