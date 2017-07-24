import React,{ Component } from 'react';
import List from './list';
import Add from './add_todo';
import {todo_data} from'./dummy_data.js'



class App extends Component{
	constructor(props){
		super(props);


		this.state = {
			list: todo_data
		}
	}

	addTodo(item){
		const { list } = this.state;

		this.setState({
			list: [item, ...list]
		});
	}

	deleteItem(index){
		const { list } = this.state;
		list.splice(index, 1);

		this.setState({
			list:[...list]
		});
	}


	render(){
		return(    
			<div className="container">
    			<h1>Todo List</h1>
    			<Add add={(i)=>this.addTodo(i)}/>
    			<List list={this.state.list} 
    			onDelete ={(index)=> this.deleteItem(index)}/>
   			 </div>
    	);
	}
}



export default App;
