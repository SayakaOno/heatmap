import React from 'react';
import h337 from 'heatmapjs';

class App extends React.Component {
  heatmapRef = React.createRef();

  componentDidMount() {
    let heatmap = h337.create({
      container: this.heatmapRef.current
    });
    heatmap.setData({
      max: 5,
      data: [
        { x: 0, y: 0, value: 1 },
        { x: 100, y: 100, value: 2 },
        { x: 200, y: 200, value: 3 },
        { x: 300, y: 300, value: 4 },
        { x: 400, y: 400, value: 5 }
      ]
    });
  }

  render() {
    return (
      <div ref={this.heatmapRef} style={{ width: 500, height: 500 }}></div>
    );
  }
}

export default App;
