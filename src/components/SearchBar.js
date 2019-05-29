import React from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={e => this.onFormSubmit(e)}>
                    <TextField
                        fullWidth
                        id="outlined-name"
                        label="Image Search"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;