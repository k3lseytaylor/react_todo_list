import React from 'react';

export default props =>{
	const list = props.list.map((item,index) => {
		return (<li 
		className="list-group-item" 
		key={index}>{item.title}   
		<button className="btn btn-outline-danger" onClick={()=>props.onDelete(index)}>DELETO TOE DOUGH FROM DAH TOE DOUGH LISTO!</button>
		</li>)
	})
	return (

		<div>
		 	<ul className="list-group">
		 		{list}
		 	</ul>	
		</div>

		)
}