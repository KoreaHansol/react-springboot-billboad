import React, { Component }  from "react";
import { get } from "../../common/axios";
import { Button } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../component/Title';
import { Link } from 'react-router-dom';

class CommunityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        get("/Community")
        .then(data => {
            this.setState({
                list: data
            });
        })
        .catch(err => console.log(err))

    }
    render() {
        return (
            <div>
                <Title>게시글</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell align="right">날짜</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.list.map((row) => (
                                <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>
                                            <Link to={`/Community/detail/${row.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                <div>{row.title}</div>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="right">{row.regData}</TableCell>
                                </TableRow>
                           
                        ))}
                    </TableBody>
                </Table>


                <Link to="/Community/write"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button variant="contained" color="primary" style={{marginTop:"20px"}}>
                        글쓰기
                    </Button>
                </Link>
            </div>
        )
    }
}

export default CommunityList;
