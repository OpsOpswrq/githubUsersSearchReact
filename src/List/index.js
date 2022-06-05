import React,{Component} from "react";
import Item from "../Item";
import PubSub from 'pubsub-js'
class List extends Component{
    state = {
        users:[], // users初始化为数组
        isFirst:true, // 是否为第一次打开页面
        isLoading:false, // 标识是否处于加载中
        err:'' // 存储相关的错误信息
    }
    componentDidMount() { // 初始化状态
        this.token = PubSub.subscribe('changeState',(_,stateObj)=>{ // 订阅消息
            this.setState(stateObj) // 还是直接传递值
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            // 最强三元表达式
            <div>
                {
                    isFirst?<h2>欢迎使用</h2>:
                        isLoading?<h2>Loading...</h2>:
                            err ? <h2>{err}</h2>:
                                users.map((element)=>{
                                    return (<Item key={element.id} user={element}/>)
                                })
                }
            </div>
        )
    }
}
export default List;