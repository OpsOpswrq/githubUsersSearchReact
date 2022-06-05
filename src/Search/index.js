import React,{Component} from "react";
// import axios from "axios";
import PubSub from "pubsub-js";
class Search extends Component{
    search = async ()=>{
        const {keyWord:{value:val}} = this // keyWord没有赋值，也就是没有具体的值，这个是连续赋值，在这个中还可以改名字
        PubSub.publish('changeState',{isFirst:false,isLoading:true})
        //#region   // 折叠代码确定一个区域
        // axios.request({
        //     method:'get',
        //     url:`/api/search/users?q=${val}` // 仅限在本地的服务器下可以这样省略网站头
        // }).then((res)=>{
        //     PubSub.publish('changeState',{isLoading:false,users:res.data.items})
        // },(err)=>{
        //     PubSub.publish('changeState',{err:err.message,isLoading:false})
        // })
        //#endregion
        //#region
        // fetch(`/api/search/users2?q=${val}`).then((res)=>{
        //     // 链接服务器成功了
        //     return res.json()
        // })//(_)=>{
        // //     // 链接服务器失败了
        // //     return new Promise(()=>{}) // 返回初始状态的promise实例，使得这步不能实现的，就不再往下走了
        // // }
        // .then((res)=>{
        //     // 获取数据成功了
        //     PubSub.publish('changeState',{isLoading:false,users:res.items})
        // })//(err)=>{
        // //     // 获取数据失败了
        // //     // PubSub.publish('changeState',{err:err.message,isLoading:false})
        // // })
        // .catch((err)=>{ // 统一处理错误
        //     PubSub.publish('changeState',{err:err.message,isLoading:false})
        // })
        //#endregion
        try{
            const res = await fetch(`/api/search/users2?q=${val}`)
            const data = await res.json()
            PubSub.publish('changeState',{isLoading:false,users:data.items})
        }catch (err){
            PubSub.publish('changeState',{err:err.message,isLoading:false})
        }
    }
    render() {
        return (
            <div>
                <input ref={element=>{this.keyWord=element}} type='text' name='username' placeholder='请输入用户名'/>
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
export default Search;