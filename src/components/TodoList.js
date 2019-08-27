import React from 'react';
import classnames from 'classnames';
import './Todo.css';
import check0 from '../img/check0.svg';
import check1 from '../img/check1.svg';
 class TodoList extends React.Component {
    //  constructor(props){
    //      super(props);
    //      this.onClickItem = this.onClickItem.bind(this);
    //  }
    // onClickItem(){
    //     this.props.item.isStatus = !this.props.item.isStatus;
    // }
    render(){
        const {item,onClick,ClearItem} = this.props;
        let url = check1;
        if(item.isStatus){
            url = check0;
        }
        return(
            <div className={classnames('todo',{check: item.isStatus})} >
                <img src={url} width={32} onClick={onClick} alt="Click"/>
                <p>{item.title}</p>
                <div className="Statuss">
                <button className="btn btn-danger" onClick={ClearItem}>X</button>
                </div>
           </div>
            
        )
    }
 }
export default TodoList;
