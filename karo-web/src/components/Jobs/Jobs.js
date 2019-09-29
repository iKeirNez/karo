import React from 'react';

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
            .then(data => this.setState({ jobs: data }))
    }
    
    createPositions() {
        return this.state.jobs.map(job => (
            <div className="item">
                <h3 className="title">{job.position} <span className="place"> <a href="#">{job.company}</a></span> <span className="year">({job.start} - {job.end})</span></h3>
                <p>{job.description}</p>
            </div>
        ));
    }
    
    render() {
        return (
            <div className={this.props.className}>
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                    {this.createPositions()}
                </div>
            </div>
        );
    }
}

export default Jobs;