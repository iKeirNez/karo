import React from 'react';
import moment from "moment";

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    }
    
    componentDidMount() {
        fetch("/api/jobs")
            .then(res => res.json())
            .then(data => this.initJobs(data));
    }
    
    initJobs(jobs) {
        for (let job of jobs) {
            job.$start = moment(job.start);
            job.$end = job.end ? moment(job.end) : null;
        }
        
        jobs.sort(function compareStarts(a, b) {
            return b.$start - a.$start
        });
        
        this.setState({ jobs: jobs });
        console.log("initJobs {0}", jobs);
    }
    
    renderPositions() {
        return this.state.jobs.map(job => (
            <div className="item" key={job.id}>
                <h3 className="title">{job.position} <span className="place"> <a href="#">{job.company}</a></span> <span className="year">({job.$start.format("MMMM YYYY")} - {job.$end ? job.$end.format("MMMM YYYY") : "Present"})</span></h3>
                <p>{job.description}</p>
            </div>
        ));
    }
    
    render() {
        return (
            <div className={this.props.className}>
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                    {this.renderPositions()}
                </div>
            </div>
        );
    }
}

export default Jobs;