
import React from 'react';
import {connect} from 'react-redux';
import {getNews} from '../redux/actions'

let Button = ({getNews}) => <div>
    <button onClick={getNews}>Press to see news</button>
</div>

const mapDispatchToProps = {
    getNews: getNews,
}

Button = connect(null, mapDispatchToProps)(Button);

export default Button;