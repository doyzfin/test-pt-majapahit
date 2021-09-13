import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataUser } from "../redux/actions/getdata";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
    console.log(this.props.getData.data);
  }

  getData = () => {
    this.props.getDataUser().then((res) => {
      this.setState({ data: res.action.payload.data });
    });
  };
  render() {
    return (
      <div class="container">
        <div class="row">
          {this.props.getData.data.map((item, index) => {
            return (
              <div
                class="col-sm-3"
                key={index}
                style={{ marginBottom: "10px" }}
              >
                <div
                  class="card"
                  style={{
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: "3px 3px #0404",
                  }}
                >
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{ height: "90px", textAlign: "center" }}
                    >
                      {item.title}
                    </h5>
                    <hr />
                    <p class="card-text">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getData: state.getData,
});

const mapDispatchToProps = { getDataUser };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
