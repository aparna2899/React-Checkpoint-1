import React from 'react';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      activities: [],
      data: [],
      datesSelected: [],
    };
  }

  handleInput = ({ target }) => {
    let { value } = target;
    this.setState({
      input: value,
    });
  };
  handleClick = () => {
    // let { data, input } = this.state;
    // data.push(input);
    // this.setState({
    //   data: data,
    //   input: '',
    // });
    let { activities, input } = this.state;
    let activity = {};
    activity.name = input;
    activities.push(activity);
    this.setState({
      input: '',
      activities: activities,
    });
  };
  handleDelete = (index) => {
    let { data } = this.state;
    if (index > -1) {
      data.splice(index, 1);
    }
    this.setState({
      data: data,
    });
  };
  handleSelect = (date, index, daysArr) => {
    let { datesSelected } = this.state;
    datesSelected.push(date);
    this.setState({
      datesSelected: datesSelected,
    });
    // let { activities } = this.state;
    // activities[index].days = [];
    // activities[index].days.push(daysArr);
    // this.setState({
    //   activities: activities,
    // });
  };
  render() {
    return (
      <div className="container center">
        <h1>Monthly Activity Tracker!</h1>

        <input
          placeholder="e.g.coding"
          onChange={this.handleInput}
          value={this.state.input}
        ></input>
        <button type="submit" onClick={this.handleClick}>
          Add Activity
        </button>
        <Card
          data={this.state.activities}
          handleDelete={this.handleDelete}
          handleSelect={this.handleSelect}
          datesSelected={this.state.datesSelected}
        />
      </div>
    );
  }
}

export default App;
