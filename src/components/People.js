import React, { Component } from 'react';


function filterDuration(duration) {
    let startDate = new Date(duration[0]+"-1");
    let startYear = startDate.getFullYear();
    let startMonth = startDate.toLocaleString('default', { month: 'short' });
    if(duration.length === 1) {
        return startMonth + " " + startYear + " - Present";
    } else {
        let endDate = new Date(duration[1]+"-1");
        let endYear = endDate.getFullYear();
        let endMonth = endDate.toLocaleString('default', { month: 'short' });
        return startMonth + " " + startYear + " - " + endMonth + " " + endYear;
    }
}

export default class People extends Component {
    render() {
        return (
            <div className="container">
                <div className="tabs">
                    {this.props.people.map(person => (
                        <button onClick={() => this.props.displayButton(person.id)} className="tab-button">{person.name.toUpperCase()}</button>
                    ))}
                </div>

                <div className="display">
                    {this.props.current.map(current => (
                        <div className="stats">
                            <p className="role">{current.role}</p>
                            <p className="name">{current.name}</p>
                            <p className="duration">{filterDuration(current.duration)}</p>
                            <ul>
                                {current.bulletPoints.map(point => (
                                    <li>{point}</li>
                                ))}
                            </ul>
                            <button className="more-info-btn">More Info</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
