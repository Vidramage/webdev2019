import React from 'react';
import {DB} from '../database/codehawke';

export default class Course extends React.Component {  
    render() {
        let data = DB;
        return (
            <div>
                {data.courses.map((obj, key) => {
                    return (
                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">{obj.title}</h3>
                            <div className="subheading mb-3">{obj.level}</div>
                                <p>{obj.description}</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <a href={obj.url}><span className="text-primary">View More</span></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}