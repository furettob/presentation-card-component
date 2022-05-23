import { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Skill extends Component {
  render() {
    return (
      <div className="pc-skill">
        <span className="pc-skill__name">{this.props.name} </span>
        <span className="pc-skill__level">
          <i className={"fa fa-star-o"} /> {this.props.level}
        </span>
      </div>
    );
  }
}

export default Skill;
