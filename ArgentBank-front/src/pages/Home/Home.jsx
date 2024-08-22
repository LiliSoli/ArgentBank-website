import Hero from '@components/Hero/Hero';
import featureData from '@data/features.json';
import FeatureItem from '@components/FeatureItem/FeatureItem';
import '@pages/Home/Home.scss';

const Home = () => {
    return (
        <main>
            <Hero />

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
        </main>

    )
}

export default Home