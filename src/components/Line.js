import React from "react";

export default class Line extends React.Component {
  

  LineAutoWidth = async () => {
    let wd =  this.props.n * 135 - 110;
    document.getElementById("line-div").style.width = wd+'px';
  };

  componentDidMount() {
    this.LineAutoWidth();
  }

  render() {
    return (
      <div className="line-div" id="line-div">
        <div className="line"></div>
      </div>
    );
  }
}
