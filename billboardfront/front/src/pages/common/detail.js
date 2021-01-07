import { Component }  from "react";
import {FormControl, FormHelperText, Input, InputLabel, TextField, Button} from '@material-ui/core';
import { get, post } from "../../common/axios";
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
import Write from "./write";
import { withRouter } from "react-router-dom";

import axios from "axios";
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            isUlt: false,
            callbackForm: {}
        }

    }
    componentDidMount() {
        get(window.location.pathname)
        .then(data => {
            this.setState({
                detail: data,
                callbackForm: {
                    title:data.title,
                    body:data.body,
                    id: data.id,
                    regData: data.regData
                }
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
    onButtonClick = (e) => {
       

        e.target.name === "ult" &&
        this.setState({
            isUlt: !this.state.isUlt,
        })

        if (e.target.name === "ultcomple" && this.state.callbackForm) {
            console.log("수정완료", this.state.callbackForm)
            if( this.state.callbackForm.title <= 0 || this.state.callbackForm.body <= 0) {
                return;
            }
            axios({
                method: 'post',
                url: "Community/ult",
                data:  this.state.callbackForm,
            })
            .then(data => {
               alert(data.data)
               this.props.history.push("/Community");
            })
            .catch(err => console.log(err))
        }


        if(e.target.name === "delete") {
            console.log(this.state.detail.id)
            axios({
                method: 'post',
                url: "Community/delete",
                data:  {
                    id: this.state.detail.id,
                },
                contentType: 'application/json',
            })
            .then(data => {
               alert(data.data)
               this.props.history.push("/Community");
            })
            .catch(err => console.log(err))
        }
    }

    btnStyle = {
        ult: {
            backgroundColor: "#3f51b5", border: "none",
            color: "white",
            padding: "10px 20px",
            textalign: "center",
            cursor: "pointer",
            display: "inline-block",
            fontsize: "16px"
        },
        dlt: {
            backgroundColor: "#3f51b5", border: "none",
            color: "white",
            cursor: "pointer",
            marginLeft: "10px", 
            padding: "10px 20px",
            textalign: "center",
            display: "inline-block",
            fontsize: "16px"
        }
        
    }

    callback = (e) => {
        const { id, title, body, regData } = this.state.detail
        this.setState({
            callbackForm: {
                title:e.title,
                body:e.body,
                id: id,
                regData: regData
            }
        })
    }
    render() {
        const { id, title, body, regData } = this.state.detail
        const classes = this.useStyles;
        console.log("this", this.state.callbackForm)
        return (
            <div>
                 
                {this.state.isUlt ? <Write defaultForm={this.state.detail} callback={this.callback}/> :
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
                }
                <br/>
                { !this.state.isUlt ? 
                    <div><button onClick={this.onButtonClick} name="ult" style={this.btnStyle.ult}>수정</button>
                    <button onClick={this.onButtonClick} name="delete" style={this.btnStyle.dlt}>삭제</button></div> :
                    <div><button onClick={this.onButtonClick} name="ultcomple" style={this.btnStyle.ult}>수정완료</button>
                   </div>
                }
               
            </div>
        )
    }
}

export default withRouter(Detail);
