import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

import ReanimatedAnimationsBackground from '@site/src/components/ReanimatedAnimations/ReanimatedAnimationsBackground';
import ReanimatedAnimationsSection from '@site/src/components/ReanimatedAnimations/ReanimatedAnimationsSection';
import GyroscopeExample from '@site/src/components/ReanimatedExamples/GyroscopeExample';
import SpringBasicExample from '../../components/ReanimatedExamples/SpringBasicExample';
import DecayBasicExample from '../../components/ReanimatedExamples/DecayBasicExample';
import FadeTileExample from '../../components/ReanimatedExamples/FadeTileExample';
import SharedElementExample from '../ReanimatedExamples/SharedElementExample';
import KeyboardExample from '../ReanimatedExamples/KeyboardExample';

const sections = [
  {
    title: 'Animations',
    body: 'Animate every React Native prop on iOS, Android and the Web up to 120 fps.',
    code: `function App() {
      const width = useSharedValue(100);
      const handlePress = () => {
        width.value = withSpring(width.value + 50);
      };
      return <Animated.View style={{ ...styles.box, width }} />
     }`,
    component: <SpringBasicExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation',
  },
  {
    title: 'Gestures',
    body: 'Gesture smoothly thanks to Reanimated’s integration with React Native Gesture Handler.',
    code: `import { Gesture, GestureDetector } from “react-native-gesture-handler”;
 
      function App() {
        const pan = Gesture.Pan();

        return (
          <GestureDetector gesture={pan}>
            <Animated.View />
        </GestureDetector>
        );
      }`,
    component: <DecayBasicExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/handling-gestures',
  },
  {
    title: 'Layout animations',
    body: 'Animate views when they are added and removed from the view hierarchy. Just like that.',
    code: `function App() {
      return <Animated.View entering={FadeIn} exiting={FadeOut} />;
    }`,
    component: <FadeTileExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations',
  },
  {
    title: 'Sensor-based animations',
    body: 'Connect your animations to a gyroscope or accelerometer with just one hook. It’s that easy.',
    code: `const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);

    useDerivedValue(() => {
      const { x, y, z } = gyroscope.sensor.value;
    });`,
    component: <GyroscopeExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/device/useAnimatedSensor',
  },
  {
    title: 'Keyboard-based animations',
    body: 'Create animations based on the device keyboard state and position.',
    code: `function App() {
      const keyboard = useAnimatedKeyboard();
      const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: -keyboard.height.value }],
      });
      //...
     }`,
    component: <KeyboardExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/device/useAnimatedKeyboard',
  },
  {
    title: 'Shared Element Transitions',
    body: 'Seamlessly animate elements between navigation screens with a single line of code.',
    code: `function App() {
      <Animated.View
       sharedTransitionTag="hero-element"
      />
    }`,
    component: <SharedElementExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview',
  },
];

const ReanimatedAnimations = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;

      const sectionHeight = window.innerHeight;

      const currentSection =
        containerTop < 100 &&
        Math.abs(containerTop) < (sections.length - 0.75) * sectionHeight
          ? Math.floor(Math.abs(containerTop) / (sectionHeight - 75))
          : -1;

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <ReanimatedAnimationsBackground>
      <div className={styles.animationsContainer}>
        <div>
          <h3>Play with the animations!</h3>
          <h5>
            Check out the animations and check how you can implement it to your
            product.
          </h5>
        </div>
        <div ref={containerRef}>
          {sections.map((section, idx) => (
            <ReanimatedAnimationsSection
              title={section.title}
              body={section.body}
              code={section.code}
              component={section.component}
              docsLink={section.docsLink}
            />
          ))}
        </div>
        <div
          className={`${styles.dotsContainer} ${
            activeSection !== -1 ? styles.showDots : ''
          }`}>
          {sections.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.dot} ${
                activeSection === idx && styles.active
              }`}
            />
          ))}
        </div>
      </div>
    </ReanimatedAnimationsBackground>
  );
};

export default ReanimatedAnimations;