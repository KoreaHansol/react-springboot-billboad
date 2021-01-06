import { Component }  from "react";
import { get } from "../common/axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

class CommunityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        get("/test")
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
                                <TableCell>{row.title}</TableCell>
                                <TableCell align="right">{row.regData}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        )
    }
}

export default CommunityList;
