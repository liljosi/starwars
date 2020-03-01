import React from 'react';
import { Image } from 'react-native';
import Luke from '../../images/luke.jpeg';
import Beru from '../../images/beru.jpeg';
import Biggs from '../../images/bigs.jpeg';
import C3po from '../../images/c3po.jpeg';
import Darth from '../../images/darth.jpeg';
import Leia from '../../images/leia.jpg';
import Obi from '../../images/obi.jpeg';
import Owen from '../../images/owen.jpeg';
import R2d2 from '../../images/r2d2.jpeg';
import R5d4 from '../../images/r5d4.jpeg';
import Logo from '../../images/logo.png';
import styles from './imageStyles';

const images = {
  'Luke Skywalker': Luke,
  'Beru Whitesun lars': Beru,
  'Biggs Darklighter': Biggs,
  'C-3PO': C3po,
  'Darth Vader': Darth,
  'Leia Organa': Leia,
  'Obi-Wan Kenobi': Obi,
  'Owen Lars': Owen,
  'R2-D2': R2d2,
  'R5-D4': R5d4,
  'logo': Logo,
};

const characterImage = ({type, style, mode}) => (
  <Image style={styles[style]} source={images[type]} resizeMode={mode} />
);

export default characterImage;