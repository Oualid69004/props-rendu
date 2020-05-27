import React, { Component } from "react";
import "./styles.css";
import Vegeta from "./componenets/Vegeta";
import Goku from "./componenets/Goku";
import Addhits from "./componenets/AddHits";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <div className="row">
          <Addhits
            render={(hits, addOne, algerien) =>
              algerien.vegeta && (
                <Vegeta hits={hits} addOne={addOne} name="Vegeta" />
              )
            }
          />
          <Addhits
            render={(hits, addOne, algerien) =>
              algerien.goku && <Goku hits={hits} addOne={addOne} name="Goku" />
            }
          />
        </div>
      </div>
    );
  }
}
export default App;
