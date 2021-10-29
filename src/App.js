import React, {Component} from "react";
import store from "./store";
import {getData} from "./reducer";
import ListComponent from "./ListComponent";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = store.getState()

        this.changeValue = this.changeValue.bind(this);
        this.addValue = this.addValue.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.refreshData = this.refreshData.bind(this)
    }

    changeValue(e) {
        let action = {
            type: "change",
            value: e.target.value
        };
        this.setState({
            inputValue: action.value
        })
        store.dispatch(action)

    }

    addValue() {
        let action = {
            type: "add",
        };
        this.setState({inputValue: ""})
        store.dispatch(action)
    }

    deleteItem(id) {
        console.log(id)
        store.dispatch({type: "delete_item", payload: {id}})
    }

    refreshData() {
        store.dispatch(getData())
    }

    componentDidMount() {
        store.dispatch(getData())
    }

    render() {
        return (
            <div>
                {/*<input type="text"*/}
                {/*       onChange={this.changeValue}*/}
                {/*       value={this.state.inputValue}*/}
                {/*       placeholder={this.state.inputValue}/>*/}
                {/*<button onClick={this.addValue}>添加</button>*/}
                {/*{this.state.list.map((item, index) => (*/}
                {/*    <div key={index} style={{border: "1px solid #000", padding: "10px"}}>*/}
                {/*        title:{item.title}<br/>*/}
                {/*        description:{item.description}*/}
                {/*        <button onClick={() => this.deleteItem(index)}>删除</button>*/}
                {/*    </div>*/}
                {/*))}*/}

                <ListComponent
                    list={this.state.list}
                    deleteItem={this.deleteItem}
                    getData={this.refreshData}
                />
            </div>
        );
    }

}