
type SkillType = {
    name : string,
    percent : number,
}

export default function Skill( { name , percent } : SkillType ){
    return (
        <div id="skill">
            <span className="fs-6 my-1">{name}</span>
            <div id="percent-wrapper">
                <p id="percent" style={{ width : `${percent}%`}}></p>
            </div>
            <div className="py-0 m-0 text-end">
                <span>{percent}%</span>
            </div>
        </div>
    )
}