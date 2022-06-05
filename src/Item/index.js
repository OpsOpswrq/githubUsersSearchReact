import React,{Component} from "react";
import PropTypes from "prop-types";
class Item extends Component{
    static propsTypes = {
        user:PropTypes.object.isRequired,
    }
    render() {
        const {user} = this.props
        return (
            <div>
                {/*下面的属性需要配套使用*/}
                <a href={user.html_url} target='_blank' rel="noreferrer">
                    <img src={user.avatar_url} style={{width:'100px'}} alt='profile'/><br/>
                    <span>{user.login}</span>
                </a>
            </div>
        )
    }
}
export default Item;