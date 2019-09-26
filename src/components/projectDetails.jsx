import React from "react";
import { Carousel } from "react-materialize";
import "materialize-css";
const Detalies = () => {
  return (
    <div>
      <Carousel
        options={{ fullWidth: false, indicators: true }}
        className="white-text center"
      >
        <div className="red">
          <h2>First Panel</h2>
          <p>This is your first panel</p>
        </div>
        <div className="amber">
          <h2>Second Panel</h2>
          <p>This is your second panel</p>
        </div>
        <div className="green">
          <h2>Third Panel</h2>
          <p>This is your third panel</p>
        </div>
        <div className="blue">
          <h2>Fourth Panel</h2>
          <p>This is your fourth panel</p>
        </div>
      </Carousel>
    </div>
    // <Footer
    //   copyrights="&copy 2015 Copyright Text"
    //   moreLinks={<a />}
    //   links={<ul />}
    //   className="example"
    // >
    //   <h5 className="white-text">Footer Content</h5>
    //   <p className="grey-text text-lighten-4">
    //     You can use rows and columns here to organize your footer content.
    //   </p>
    // </Footer>
  );
};

export default Detalies;
