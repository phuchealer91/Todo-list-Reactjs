import React from 'react';
import './App.css';
// import TrafficLight from './components/TrafficLight';
import TodoList from './components/TodoList';
import tick from './img/tick.svg';
import check2 from './img/check2.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoItems: [
        { title: "Hom nay troi dep qua 1", isStatus: false },
        { title: "Hom nay troi dep qua 2", isStatus: true },
        { title: "Hom nay troi dep qua 3", isStatus: true },
        { title: "Hom nay troi dep qua 4", isStatus: true }
      ]
    }
    this.ClearALL = this.ClearALL.bind(this);
  }
  //C1
  // return (event) =>{
  //   const isStatus = item.isStatus;
  //   const {TodoItems} = this.state;
  //   const index = TodoItems.indexOf(item);
  //   this.setState({
  //     TodoItems:[
  //       ...TodoItems.slice(0,index),
  //     {
  //       ...item,
  //       isStatus: !isStatus
  //     },
  //     ...TodoItems.slice(index+1)
  //     ]
  //     // TodoItems : TodoItems.map(items => items !== item ? {...item} : {...item,isStatus : !isStatus} )
  //   });
  // }
  //C2
  onClickItem = (item) => {
    return (event) => {
      const isStatus = item.isStatus;
      const { TodoItems } = this.state;
      const index = TodoItems.indexOf(item);
      this.setState({
        TodoItems: [
          ...TodoItems.slice(0, index),
          {
            ...item,
            isStatus: !isStatus
          },
          ...TodoItems.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp = (event) => {
    if (event.keyCode === 13) {
      const text = event.target.value;
      if (!text.trim()) {
        return;
      }
      this.setState({
        TodoItems: [
          { title: text, isStatus: false },
          ...this.state.TodoItems
        ]
      })
      this.node.value = '';
    }
  }
  // Click check all
  onClickAll = () => {
    const { TodoItems } = this.state;
    this.setState({
      TodoItems: TodoItems.map(i => { return { title: i.title, isStatus: false } })
    })
  }
// Click gach bo tat ca
  onClickAll2 = () => {
    const { TodoItems } = this.state;
    this.setState({
      TodoItems: TodoItems.map(i => { return { title: i.title, isStatus: true } })
    })
  }
  // ClearItem = (item) => {
  //   const index = TodoItems.indexOf(item);
  //   const { TodoItems } = this.state;
  //   return this.setState({ TodoItems: [...TodoItems].splice(index, 1) })
  // }
// delete all
  ClearALL(){
      this.setState({
        TodoItems: []
      })
    }
    // delete item
    removeItem = (item)=>{
        return (event) =>{
          if(item.isStatus === true && window.confirm('Ban co chac xoa khong?')){
          this.setState({
            TodoItems: this.state.TodoItems.filter(i => i !== item)  
        })
      }
    };
        }
  
  render() {
    const { TodoItems } = this.state;
    return (
      <div className="App">
        {/* <TrafficLight /> */}
        <div className="header">
          <img src={tick} width={32} onClick={this.onClickAll} alt="Click all"/>
          <img src={check2} width={32} onClick={this.onClickAll2} alt="Click fail all"/>
          <input
            type="text"
            placeholder="Add item here...."
            onKeyUp={this.onKeyUp}
            ref={(node) => { this.node = node }}
          />
        </div>
        {
          TodoItems.map((item, index) =>
            <TodoList 
            key={index} 
            item={item} 
            onClick={this.onClickItem(item)} 
            ClearItem={this.removeItem(item)}
            />
            //this.onClickItem duoc goi tai thoi diem render , neu truyen tham so vao thi se
            //render gia tri item luc click
          )
        }
        <div className="Statuss">
          <button className="btn btn-primary" onClick={this.ClearALL} >Clear Item</button>
        </div>
      </div>
    );
  }

}



export default App;
