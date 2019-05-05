import React, { Component } from "react";
import Immutable from "immutable";

class Demo extends Component {
  render() {
    const list = Immutable.List(["Rui", "Misaki", "Hina"]);
    const list2 = list.set(1, "Alisa Amiella");
    const map = Immutable.Map({
      name: "Rui Tachibana",
      age: 19
    });
    // const nested = Immutable.Map({
    //   waifus: Immutable.List({
    //     Immutable.Map({ name:"Alisa Illinichina Amiella", from:"God Eater"}),Immutable.Map({ name:"Kaga Kouko", from:"Golden Time" })
    //   })
    // });
    const easyNested = Immutable.fromJS({
      waifus: [
        { name: "Kanon Nakagawa", from: "TWGOK" },
        { name: "Haqua", from: "TWGOK S2" }
      ]
    });
    return (
      // list2.get(2),
      //map.get("name", "age")

      // easyNested
      //   .get("waifus")
      //   .get(1)
      //   .get("name")

      // easyNested
      //   .get("waifus")
      //   .get(0)
      //   .set("name", "Chihiro")

      easyNested.setIn(["waifus", 0, "name"], "Chihiro")
    );
  }
}

export default Demo;
