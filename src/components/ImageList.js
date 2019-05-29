import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }
}));

const ImageList = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={200} cols={3}>
                {props.images.map(image => (
                    <GridListTile key={image.id} cols={1}>
                        <img src={image.urls.regular} alt={image.description} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default ImageList;