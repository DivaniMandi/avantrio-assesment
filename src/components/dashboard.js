import React from 'react';
import './dashboard.css';
import { sidebarIcons } from './sidebarIcons';
import { Button } from 'reactstrap';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import dotIcon from './images/dotIcon.png';
import map from './images/map.png';

const styles = {
    tabs: {
        background: '#fff',
        borderBottom: '1px solid black'
    },
    tabs1: {
        background: '#fff',
        borderBottom: '1px solid black',

    },
    slide: {
        padding: 15,
        minHeight: 460,
        color: '#fff',
    },
};

class dashboard extends React.Component {

    state = {
        index: 0,
    };

    handleChange = (event, value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {

        const { index } = this.state;

        return (
            <div className="wrapper" >
                <div className="row">
                    <div className="column1">
                        <div className="sidebar">
                            <ul className="sidebarList">
                                {sidebarIcons.map((val, key) => {
                                    return (
                                        <li
                                            className="row"
                                            key={key}
                                            onClick={() => (window.location.pathname = val.link)}>
                                            <div>{val.icon}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="row" style={{ height: '75px' }}>
                            <div className="column3" style={{ width: '50%' }}>
                                <h2 style={{ paddingTop: '20px', paddingLeft: '50px', fontSize: '25px', fontWeight: 'bold', color: '#253244' }}>Monitor</h2>
                            </div>
                            <div className="column4" style={{ width: '50%', }}>
                                <Button variant="primary" className="custom-btn">Message</Button>
                                <span className="dot">SOS</span>
                            </div>
                        </div>
                        <hr style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto', borderWidth: '2px' }}></hr>
                        <div className="row" style={{ height: '700px' }}>
                            <div className="column5" style={{ width: '30%' }}>
                                <div className="card">
                                    <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
                                        <Tab label="STAFF" />
                                        <Tab label="EMPLOYEE" />
                                    </Tabs>
                                    <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                                        <div style={Object.assign({}, styles.slide, styles.slide1)}>
                                            <Button variant="primary" className="custom-btn2">
                                                <span className="dot2" style={{ backgroundColor: '#ff78c0' }}>J</span>
                                                Jaison Burnatte
                                        <div className="image"><img src={dotIcon} alt="fireSpot" /></div>
                                            </Button>
                                            <Button variant="primary" className="custom-btn2">
                                                <span className="dot2" style={{ backgroundColor: '#936db8' }}>A</span>
                                                Ali Akbhar
                                        <div className="image"><img className="image" src={dotIcon} alt="fireSpot" /></div>
                                            </Button>
                                            <Button variant="primary" className="custom-btn2">
                                                <span className="dot2" style={{ backgroundColor: '#7299ff' }}>C</span>
                                                Clifford Shan
                                        <div className="image"><img className="image" src={dotIcon} alt="fireSpot" /></div>
                                            </Button>
                                            <Button variant="primary" className="custom-btn2">
                                                <span className="dot2" style={{ backgroundColor: '#75ffd4' }}>M</span>
                                                Mickey Mouse
                                        <div className="image"><img className="image" src={dotIcon} alt="fireSpot" /></div>
                                            </Button>
                                        </div>
                                        <div style={Object.assign({}, styles.slide, styles.slide2)}>
                                            Employee names
                                        </div>
                                    </SwipeableViews>
                                </div>
                            </div>
                            <div className="column6" style={{ width: '70%' }}>
                                <div className="row" style={{ height: '300px'}}>
                                    <div className="card-2">
                                        <img className="image1" src={map} alt="fireSpot" />
                                    </div>
                                </div>
                                <div className="row" style={{ height: '60%'}}>
                                    <div className="card-2">
                                        <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
                                           <Tab label="History (Jaison Burnette)" />
                                            <Tab label="All" />
                                            <Tab label="Location" />
                                            <Tab label="Message" />
                                            <Tab label="Alert" />
                                        </Tabs>
                                        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                                        <div style={Object.assign({}, styles.slide, styles.slide3)}>
                                                Jaison
                                            </div>
                                            <div style={Object.assign({}, styles.slide, styles.slide4)}>
                                                jhyjujh
                                            </div>
                                            <div style={Object.assign({}, styles.slide, styles.slide5)}>
                                                Location
                                        </div>
                                            <div style={Object.assign({}, styles.slide, styles.slide6)}>
                                                Message
                                            </div>
                                            <div style={Object.assign({}, styles.slide, styles.slide7)}>
                                                Alert
                                            </div>
                                        </SwipeableViews>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default dashboard;
