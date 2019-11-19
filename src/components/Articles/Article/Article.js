import React from 'react'
import './Article.scss'
import Wrapper from '../../../hoc/Wrapper'
import redSunset from '../../../assets/images/red-sunset.jpg'
import riverBirdge from '../../../assets/images/river-and-bridge.jpg'
const article = (props) => (
    <Wrapper>
        <div className="article">
            <figure className="figure">
                <img src={riverBirdge} alt="" className="figure__img"/>
                <figcaption className="figure__caption">Caption text</figcaption>
            </figure>
        </div>
    </Wrapper>
)
export default article;