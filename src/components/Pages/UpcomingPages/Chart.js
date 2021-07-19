import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack } from 'victory';
const myDataset = [
  [
        { x: "a", y: 1 },
        { x: "b", y: 2 },
        { x: "c", y: 3 },
        { x: "d", y: 2 },
        { x: "e", y: 1 },
        { x: "f", y: 1 },
        { x: "g", y: 1 },
        { x: "h", y: 1 },
        { x: "i", y: 1 }, 
        { x: "j", y: 1 },
        { x: "k", y: 1 },
        { x: "l", y: 1 },
        { x: "m", y: 1 }

  ],
  [
        { x: "a", y: 1 },
        { x: "b", y: 1 },
        { x: "c", y: 3 },
        { x: "d", y: 2 },
        { x: "e", y: 1 },
        { x: "f", y: 1 },
        { x: "g", y: 1 },
        { x: "h", y: 1 },
        { x: "i", y: 1 }, 
        { x: "j", y: 1 },
        { x: "k", y: 1 },
        { x: "l", y: 1 },
        { x: "m", y: 1 }
  ],
  [
        { x: "a", y: 1 },
        { x: "b", y: 5 },
        { x: "c", y: 3 },
        { x: "d", y: 2 },
        { x: "e", y: 1 },
        { x: "f", y: 1 },
        { x: "g", y: 1 },
        { x: "h", y: 1 },
        { x: "i", y: 1 }, 
        { x: "j", y: 1 },
        { x: "k", y: 1 },
        { x: "l", y: 1 },
        { x: "m", y: 1 }
  ]
];

class Chart extends React.Component {
  // This is an example of a function you might use to transform your data to make 100% data
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100 };
      });
    });
  }

  render() {
    const dataset = this.transformData(myDataset);
    return (
      <div>
        <VictoryChart height={this.props.height } width={this.props.width } domainPadding={{ x: 30, y: 20 }} >
            <VictoryStack colorScale={["aquamarine", "mediumslateblue", "cyan"]} >
              {dataset.map((data, i) => {
                return <VictoryBar data={data} key={i}/>;
              })}
            </VictoryStack>
            <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}%`} />
            <VictoryAxis tickFormat={["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" ]} />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;