import Header from "./Header";
import Area from "./Area";
import Grid from "./Grid";
import Skill from "./Skill";
import Tag from "./TagClass";
import Link from "./Link";

export default function Card({ elem }) {
  return (
    <div key={elem.id} className={"pc-card"}>
      <Header
        name={elem.name}
        lastname={elem.lastname}
        avatar={elem.avatar}
        jobPosition={elem.jobPosition}
        company={elem.company}
      />
      <Area title={null}>{elem.description}</Area>
      <Area title={"Skills"}>
        <Grid>
          {elem.skills.map((skill, index) => {
            return <Skill name={skill.name} level={skill.level} />;
          })}
        </Grid>
      </Area>

      <Area title={"Favourites"}>
        {Object.keys(elem.favourites).map((favName, index) => {
          return (
            <Tag
              key={favName + "_" + index}
              name={elem.favourites[favName].name}
              icon={elem.favourites[favName].icon}
              type={{ size: "big" }}
            />
          );
        })}
      </Area>

      <Area title={"Links"}>
        {elem.links.map((link, index) => {
          return <Link key={link.name + "_" + index} link={link} />;
        })}
      </Area>
    </div>
  );
}
