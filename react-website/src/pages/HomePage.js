import React from 'react';
import BigText from '../components/BigText';
import Carousel from '../components/Carousel';

export default function HomePage(props){
    return(
        <div>
        <BigText title={props.title} subTitle={props.subTitle} text={props.text} />
        <Carousel />
        </div>
    );
}