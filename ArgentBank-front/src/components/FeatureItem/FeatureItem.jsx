// import React from "react";
import PropTypes from 'prop-types';
import '@components/FeatureItem/FeatureItem.scss';

const FeatureItem = ({ icon, altText, title, description }) => {
    return (
        <div className="feature-item">
            <img src={icon} alt={altText} className="feature-item__icon" />
            <h3 className="feature-item__title">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    icon: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeatureItem;