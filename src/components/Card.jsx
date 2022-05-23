export default function Card({ elem }) {
  return (
    <div key={elem.id} className={"pc-card"}>
      <div>
        <img src={"./img/" + elem.avatar} width="60px" alt={elem.name} />
        <h3>
          {elem.name} {elem.lastname}
        </h3>
      </div>
      <div>
        {elem.jobPosition} @ {elem.company}
      </div>
      <div>{elem.description}</div>

      <h3>Skills</h3>
      <ul>
        {elem.skills.map((skill, index) => {
          return (
            <li key={skill.name + "_" + index}>
              <i>{skill.name}</i> ({skill.level} / 5),{" "}
            </li>
          );
        })}
      </ul>

      <h3>Favourites</h3>
      <ul>
        {Object.keys(elem.favourites).map((favName, index) => {
          return (
            <li key={favName + "_" + index}>
              My favourite {favName} is {elem.favourites[favName].name}
            </li>
          );
        })}
      </ul>

      <h3>Links</h3>
      <div>
        {elem.links.map((link, index) => {
          return (
            <span key={link.name + "_" + index}>
              <a href={link.url}>{link.name}</a>{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
