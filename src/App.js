import React, { Component } from 'react';
import Tag from 'gumdrops/Tag';
import Button from 'gumdrops/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Button
          context="primary"
          onClick={() => {}}
          className=""
          style={{}}
        >
        <i className="fa fa-check -m-r-2" />
        Great Success
        </Button>
        <Tag
          context="primary"
          hasOption
          onClick={() => {}}
          onOptionClick={() => {}}
          optionLabel="Delete Tag"
          style={{}}
          text="Sample Text"
        />
      </div>
    );
  }
}

export default App;
