import { Component }  from "react";
import {FormControl, FormHelperText, Input, InputLabel, TextField, Button} from '@material-ui/core';
import { get } from "../../common/axios";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }

    }
    componentDidMount() {
        get(window.location.pathname)
        .then(data => {
            this.setState({
                detail: data
            });
        })
        .catch(err => console.log(err))

    }

    useStyles = makeStyles((theme) => ({
        table: {
            minWidth: 650,
          },
          bullet: {
              display: 'inline-block',
              margin: '0 2px',
              transform: 'scale(0.8)',
          },
          title: {
              fontSize: 14,
          },
          pos: {
              arginBottom: 12,
        },
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
          },
        },
    }));
    render() {
        const { id, title, body, regData } = this.state.detail
        const classes = this.useStyles;
        return (
            <div>
                 <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>번호 : {id}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>제목 : {title}</TableCell>
                            </TableRow>
                            <TableRow>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {body}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableRow>
                            <TableRow>
                                <TableCell>날짜 : {regData}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                
            </div>
        )
    }
}

export default Detail;
