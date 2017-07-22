import React,{ Component } from 'react';



class Add extends Component{
	constructor(props){
		super(props);

		this.state={
			form:{
				title:'',
				description:''
			}
		}
	}


	handleChange(e){
		console.log('event: ', e.target.value);
		const { value,name} = e.target;
		const { form } = this.state	

		form[name] = value;

		this.setState({
			form:{...form}
		});
	}


	addItem(e){
		e.preventDefault();
		const { form } = this.state;
		console.log('Form Submitted', form);
		this.props.add(form);
	}
	render(){
		const { form } = this.state;
		return(
			<div className="my-3">
				<form className="for-inline" onSubmit={(e)=> this.addItem(e)}>
					<div className="form-group">
					<span>
					<label>Title</label>
					</span>
					<input name="title" onChange= {(e) => this.handleChange(e)} value={ form.title } className="form-control mx-3"/>

					</div>

					<div className="form-group">
					<span>
					<label>Description</label>
					</span>
					<input name="description" onChange= {(e) => this.handleChange(e)} value={ form.description } className="form-control mx-3"/>

					</div>

					<button className="btn btn-outline-info" >ADD TOE DOUGH TO DAH TOE DOUGH LISTO!</button>

					
				</form>
			</div>
			)
	}
}

export default Add;