import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import MyFace from '../MyFace/MyFace'
import { useScroll, useTransform, motion } from 'framer-motion'

const Header = () => {

  const { scrollY } = useScroll();
 const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  const phrases = [
    'developer',
    'engineer',
    'data scientist',
    'designer'
  ];

  const scrambleChars = '01{}[]<>+-=*/%$#@!&^';
  const scrambleRef = useRef(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    let interval;
    let timeout;

    const scrambleText = (text) => {
      const iterations = 20;
      let scrambled = text.split('').map(() => getRandomChar()).join('');
      scrambleRef.current.textContent = scrambled;

      interval = setInterval(() => {
        scrambled = scrambled
          .split('')
          .map((char, i) => {
            if (frame > i + Math.floor(iterations / text.length)) return text[i];
            return getRandomChar();
          })
          .join('');

        scrambleRef.current.textContent = scrambled;
        frame++;

        if (frame > iterations) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            const next = (currentPhraseIndex + 1) % phrases.length;
            setCurrentPhraseIndex(next);
          }, 300); // Pause after full phrase appears
        }
      }, 10);
    };

    const getRandomChar = () => {
      return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
    };

    if (scrambleRef.current) {
      scrambleText(phrases[currentPhraseIndex]);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentPhraseIndex]);

  return (
    <motion.div className='header-div' style={{opacity}}>
      <div className="left">
        <div className="my-name">
          <span className="glitch-layer" data-text="SHREYA">SHREYA</span>&nbsp;
          <span className="glitch-layer" data-text="MOHANTY">MOHANTY</span>
        </div>
        <p><span className="scramble" ref={scrambleRef}></span></p>
      </div>
      <div className="right">
        <MyFace />
      </div>
    </motion.div>
  )
}

export default Header;