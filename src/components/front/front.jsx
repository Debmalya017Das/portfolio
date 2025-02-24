import React from 'react';
import SplitText from '../split';

function Front() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <p className="text-white text-2xl">I'm</p>
      <h1 className="text-4xl font-bold">
        <SplitText
          text="Debmalya Das"
          className="text-4xl font-bold"
          delay={0.1}
          animationFrom={{ opacity: 0, y: 50 }}
          animationTo={{ opacity: 1, y: 0 }}
          easing={[0.33, 1, 0.68, 1]} 
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </h1>
      <p className="text-xl">
        <SplitText
          text="Building web projects and learning stuff"
          className="text-xl"
          delay={0.1}
          animationFrom={{ opacity: 0, y: 50 }} 
          animationTo={{ opacity: 1, y: 0 }} 
          easing={[0.33, 1, 0.68, 1]}
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </p>
    </div>
  );
}

export default Front;