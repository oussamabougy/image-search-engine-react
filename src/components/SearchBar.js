import React from 'react';
import {
    TextField,
    Button,
    CircularProgress
 } from '@material-ui/core';

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        let { loading } = this.props;
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
                        disabled={loading}
                    />
                    <Button size="large" variant="contained" type="submit" color="primary">
                        {loading ? 
                            <CircularProgress size={20} style={{color: "white"}} />
                            : "Search"
                        }
                    </Button>
                </form>
            </div>
        );
    }
}

export default SearchBar;