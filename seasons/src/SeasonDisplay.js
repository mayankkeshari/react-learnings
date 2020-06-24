import './SeasonDisplay.css';
import React from 'react';

const SeasonConfig = {
    summer: {
        text: 'Summer: Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Winter: Burr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) => {
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const iconName = SeasonConfig[season].iconName;
    const iconClass = `massive ${iconName} icon`;

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconClass} icon-left`}></i>
            <h1>{SeasonConfig[season].text}</h1>
            <i className={`${iconClass} icon-right`}></i>
        </div>
    )
}
export default SeasonDisplay;