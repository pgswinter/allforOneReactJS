import React from 'react';
import Button from '../../_containers/buttons.container';
import NewsItem from '../../_containers/news-item.container';
import Loading from '../../_containers/loading.container';

class Home extends React.Component{
    render(){
        return <div>
            {/* <Loading /> */}
            {/* <Button /> */}
            <NewsItem />
        </div>
    }
}

export default Home;