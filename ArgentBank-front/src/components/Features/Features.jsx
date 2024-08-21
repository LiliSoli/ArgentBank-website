// import React from "react";
import featureData from '@data/features.json';
import FeatureItem from '@components/Features/FeatureItem/FeatureItem';
import '@components/Features/Features.scss';

const Features = () => {
    return (
        <div className="features">
            <h2 className="sr-only">Features</h2>
            
            {featureData.map((feature, index) => (
                <FeatureItem
                    key={index}
                    icon={feature.icon}
                    altText={feature.altText}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
};

export default Features