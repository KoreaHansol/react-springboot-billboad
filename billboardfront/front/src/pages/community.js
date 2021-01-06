import { Component }  from "react";
import { get } from "../common/axios";

class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        console.log("componentDidMount", get("/test"))
        this.setState({
           list: get("/test")
        });
    }
    render() {
        return (
            <div>
                {this.state.list}
            </div>
        )
    }
}

export default Community;
