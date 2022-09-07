import React from 'react';

class Card extends React.Component {
  render() {
    let arr = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
    ];
    let daysArr = [];
    let { data, handleDelete, handleSelect, datesSelected } = this.props;
    return (
      <ul>
        {data.map((activity, index) => (
          <li className="card flex justify-between align-center">
            <div className="activity-box flex-25">
              <h2>{activity.name}</h2>
              <p>September</p>
            </div>
            <ul className="calender flex flex-wrap flex-85">
              {arr.map((date) => (
                <>
                  {/* {daysArr.push({ id: date, isDone: false })} */}
                  <li
                    className={datesSelected.includes(date) ? 'selected' : ''}
                    onClick={() => handleSelect(date, index, daysArr)}
                  >
                    {date}
                  </li>
                </>
              ))}
            </ul>
            <div className="close-btn" onClick={() => handleDelete(index)}>
              x
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Card;

//
