import { Component }  from "react";
import {FormControl, FormHelperText, Input, InputLabel, TextField, Button} from '@material-ui/core';
import { post } from "../../common/axios";
import axios from "axios";
class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        }
    }
    handleChange = (e) => {
        console.log(this.state)
        e.target.name === "title" &&
        this.setState({
            title: e.target.value,
        })

        e.target.name === "body" &&
        this.setState({
            body: e.target.value,
        })
    }

    onButtonClick = () => {
        post("/Community/write", this.state)
    }
    render() {
        return (
            <div>
                <FormControl
                    style={{ width: "100%" }}>
                    <InputLabel htmlFor="my-input">제목</InputLabel>
                    <Input
                        name="title"
                        aria-describedby="my-helper-text"
                        onChange={this.handleChange}/>
                    <FormHelperText id="my-helper-text">제목을 적어주세요.</FormHelperText>
                </FormControl>
                <br/>
                <TextField
                    style={{marginTop: "20px", width: "100%"}}
                    autoFocus
                    // error={this.state.data.customer === "" ? true : false }
                    helperText="내용을 적어주세요"
                    label="내용"
                    multiline
                    rows={10}
                    type="text"
                    variant="outlined"
                    onChange={this.handleChange}
                    name="body"
                    // defaultValue={data.customer} />
                />

                <Button variant="contained" color="primary" style={{marginTop:"20px"}} onClick={this.onButtonClick}>
                    글쓰기
                </Button>
            </div>
        )
    }
}

export default Write;
