import React from 'react';
import Story1 from './components/stories/Story1';
import Story2 from './components/stories/Story2';
import Story3 from './components/stories/Story3';
import Slogan from './components/Slogan';
import "../node_modules/video-react/dist/video-react.css"
import DividerStory from './components/dividers/DividerStory';
import Navbar from './components/Navbar';
import WhoAreWe from './components/WhoAreWe';
import MovieGalleryYoutube from './components/MovieGalleryYoutube';
import DividerVideo from './components/dividers/DividerVideo'
import DividerImageGallery from './components/dividers/DividerImageGallery'
import AnimatedSlider from './components/AnimatedSlider'
import DividerMessage from './components/dividers/DividerMessage'
import WaveBorder from './components/dividers/WaveBorder'
import DividerInfo from './components/dividers/DividerInfo'
import InfoGraphic from './components/InfoGraphic'
import SurveySlider from './components/surveys/SurveySlider'
import SurveyBubble from './components/surveys/SurveyBubble';

function App() {
  return (
    <>
      <Navbar />
      <Slogan id="section1" />
      <DividerStory id="section2" />
      <Story1 />
      <Story2 />
      <Story3 />
      <WhoAreWe id='section3' />
      <DividerInfo />
      <InfoGraphic />
      <WaveBorder
        upperColor='#1B152B'
        lowerColor="#efeeee"
        animationNegativeDelay={2}
      />
      <div className='container-light'>
        <DividerVideo id='section4' />
        <MovieGalleryYoutube />
        <DividerImageGallery />
        <AnimatedSlider />
        <DividerMessage id='section5' />
        <SurveyBubble />
        <SurveySlider />
      </div>

    </>
  );
}

export default App;
