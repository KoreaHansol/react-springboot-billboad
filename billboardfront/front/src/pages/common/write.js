import { Component }  from "react";
import {FormControl, FormHelperText, Input, InputLabel, TextField, Button} from '@material-ui/core';
import { post } from "../../common/axios";
import axios from "axios";
import { withRouter } from "react-router-dom";
class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            file:null,
        }
    }
    componentDidMount() {
        this.props.defaultForm && this.setState({
            title: this.props.defaultForm.title,
            body: this.props.defaultForm.body
        })
    }
    handleChange = (e) => {
        e.target.name === "title" && 
        this.setState({
            title: e.target.value,
        },() => {
            this.props.callback && this.props.callback(this.state)
        })

        e.target.name === "body" &&
        this.setState({
            body: e.target.value,
        },() => {
            this.props.callback && this.props.callback(this.state)
        })

        e.target.name === "file" && 
        this.setState({
            file:  e.target.files[0],
        },() => {
            this.props.callback && this.props.callback(this.state)
        })
    }

    fileAxios = (data) => {
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('boardID', data)
        axios({
            method: 'post',
            headers: { "Content-Type": "multipart/form-data" },
            url: "Community/fileUpload",
            data: formData,
        })
        .then(data => {
            alert('추가완료')
            this.props.history.push("/Community");
        })
        .catch(err => console.log(err))
    }

    onButtonClick = () => {
        if( this.state.title <= 0 || this.state.body <= 0) {
            return;
        }
        axios({
            method: 'post',
            url: "Community/write",
            data:  this.state,
        })
        .then(data => {
            this.fileAxios(data)
        })
        .catch(err => console.log(err))

        // 파일 업로드

        
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <FormControl
                    style={{ width: "100%" }}>
                    <InputLabel htmlFor="my-input">제목</InputLabel>
                    <Input
                        name="title"
                        aria-describedby="my-helper-text"
                        onChange={this.handleChange}
                        defaultValue={ this.props.defaultForm && this.props.defaultForm.title }
                        error={this.state.title <= 0 ? true : false }
                        />
                    <FormHelperText id="my-helper-text">제목을 적어주세요.</FormHelperText>
                </FormControl>
                <br/>
                <TextField
                    style={{marginTop: "20px", width: "100%"}}
                    autoFocus
                    error={this.state.body <= 0 ? true : false }
                    helperText="내용을 적어주세요"
                    label="내용"
                    multiline
                    rows={10}
                    type="text"
                    variant="outlined"
                    onChange={this.handleChange}
                    name="body"
                    defaultValue={ this.props.defaultForm && this.props.defaultForm.body }
                    />
                <br/>
                    <InputLabel htmlFor="my-input">이미지</InputLabel>
                    <input type="file" name="file" onChange={this.handleChange}/>
                <br/>
                {!this.props.defaultForm && <Button variant="contained" color="primary" style={{marginTop:"20px"}} onClick={this.onButtonClick}>
                    글쓰기
                </Button>}
            </div>
        )
    }
}

export default withRouter(Write);
