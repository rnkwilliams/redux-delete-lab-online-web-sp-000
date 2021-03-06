import React from "react";
import Band from "./Band";

class Bands extends React.Component {

  renderBands = () => {
    return this.props.bands.map((band) => (
      <Band key={band.id} {...band} deleteBand={this.props.deleteBand} />
    ));
  };

  render() {
    return (
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

export default Bands;
