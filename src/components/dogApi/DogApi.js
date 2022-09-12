import React from "react";

class DogApi extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      breeds: [],
      selectedBreed: "",
      selectedBreedImages: [],
    };
  }

  asd = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((r) => r.json())
      .then((d) => {
        this.setState({
          breeds: Object.keys(d.message),
        });
      });
  };

  componentDidMount() {
    this.asd();
    // const res = await fetch("https://dog.ceo/api/breeds/list/all");
    // const data = await res.json();
    // this.setState({
    //   breeds: Object.keys(data.message),
    // });
  }

  onBreedClick = async (b) => {
    this.setState({
      selectedBreed: b,
    });
    const r = await fetch(`https://dog.ceo/api/breed/${b}/images`);
    const d = await r.json();
    this.setState({
      selectedBreedImages: d.message,
    });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          {this.state.breeds.map((b) => (
            <div
              onClick={() => {
                this.onBreedClick(b);
              }}
            >
              {b}
            </div>
          ))}
        </div>
        <div>
          {this.state.selectedBreed && (
            <div>
              <h3>{this.state.selectedBreed}</h3>
              {this.state.selectedBreedImages
                .filter((el, i) => i < 5)
                .map((image) => (
                  <img
                    style={{ width: 100 }}
                    src={image}
                    alt="dog"
                    key={image}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DogApi;
