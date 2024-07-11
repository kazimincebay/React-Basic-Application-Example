import React, { Component } from "react";
import Kazim from "./Kazim";
import PropTypes from "prop-types";
import Form from "./Form";

class Arakatman extends Component {
  static propTypes = {
    dizim: PropTypes.array.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
  }
  static defaultProps = {
    name:"KAzimm"
  }
  render() {
    const name = this.props.name;
    const elements = this.props.dizim.map((dizim) => (
      <Kazim key={dizim.id} newsData={dizim} />
    ));
    return (
      <div>
        {elements}
        {name}
        <Form addNews={this.props.addNews}/>
      </div>
    );
  }
}
export default Arakatman;
