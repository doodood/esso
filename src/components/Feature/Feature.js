import React from 'react'
import './Feature.scss'
import Wrapper from '../../hoc/Wrapper'
import { Icon } from "react-icons-kit";

const feature = (props) => (
    <Wrapper>
        <div className="feature">
        <div className="feature__content-icon">
            <Icon icon={props.icon} size={45} className="feature__icon" />
        </div>
            <h4 className="feature__title">{props.title}</h4>
            <div className="feature__content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero velit ipsum dolor sit, amet consectetur adipisicing elit. Libero velit.
            </div>
        </div>
    </Wrapper>
)
export default feature;