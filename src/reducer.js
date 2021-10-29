import axios from "axios";

const defaultStore = {
    inputValue: "请输入",
    list: []
};

const reducer = (state = defaultStore, action) => {

    switch (action.type) {
        case "change":
            state.inputValue = action.value;
            return state
        case "add":
            console.log(state, action)
            state.list.push({title: state.inputValue});
            state.inputValue = "";
            return state;
        case "get_list":
            state.list = action.payload
            return state
        case "delete_item":
            let index = 0;
            state.list.map((item, i) => {
                if (item.id === action.payload.id) {
                    index = i
                }
            })
            state.list.splice(index, 1)
            return state
        default:
            return state;

    }
}

export const getData = () => {
    return (dispatch) => {
        axios.get("http://127.0.0.1:4523/mock/389130/list").then(res => {
            console.log(res)
            const action = {
                type: "get_list",
                payload: res.data.list
            }
            dispatch(action)
        })
    }
}

export default reducer