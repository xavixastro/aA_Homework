import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import Root from './root';
import GiphysIndex from './giphys_index'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});

class GiphysSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({searchTerm: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchGiphys(this.state.searchTerm)
    }

    render(){
        

        return (
            <div>
                <input onChange={this.handleChange} type="text"/>
                <button onClick={this.handleSubmit}>Submit</button>
                <GiphysIndex giphys={this.props.giphys} />
            </div>
        )
    }
}

export default GiphysSearch;