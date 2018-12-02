import React from 'react';
import { connect } from 'react-redux';

let Loading = ({loading}) => (
    loading ?
    <div style={{ textAlign: 'center' }}>
    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt='loading' />
    <h1>LOADING</h1>
    </div> :
    null
)

const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;