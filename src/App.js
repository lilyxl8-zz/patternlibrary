import React, { Component } from 'react';
import Tag from 'gumdrops/Tag';
import Button from 'gumdrops/Button';
import LayoutContainer from 'gumdrops/LayoutContainer';
import Row from 'gumdrops/Row';
import Column from 'gumdrops/Column';
import Card from 'gumdrops/Card';
import Toggle from 'gumdrops/Toggle';
import LoadingDots from 'gumdrops/LoadingDots';

const emptyFn = () => {};

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <LayoutContainer onClick={emptyFn}>
          <Row>
          <Column md={4}>
            <Card
              className="-p-a-2"
            >
              <Button
                context="primary"
                onClick={emptyFn}
                className=""
                style={{}}
              >
                <i className="fa fa-check -m-r-2" />
                Great Success
              </Button>
              <br />
              <Tag
                context="primary"
                hasOption
                onClick={emptyFn}
                onOptionClick={emptyFn}
                optionLabel="Delete Tag"
                style={{}}
                text="Sample Text"
              />
            </Card>
          </Column>
          <Column md={4}>
            <Card
              option="underlined"
              className="-p-a-2"
            >
            <Toggle
              label="Default Toggle"
              className=""
              style={{}}
              onChange={emptyFn}
            />
            </Card>
          </Column>
          <Column md={4}>
            <Card
              option="underlined"
              className="-p-a-2"
            >
            <LoadingDots
              className="-p-a-5"
              style={{}}
            />
            </Card>
          </Column>
          </Row>
        </LayoutContainer>
      </div>
    );
  }
}

export default App;
