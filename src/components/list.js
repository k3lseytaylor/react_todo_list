import React from 'react';

export default props =>{
	const list = props.list.map((item,index) => {
		return <li className="list-group-item" key={index}>{item.title}   <buton className="btn btn-outline-danger">DELETO TOE DOUGH FROM DAH TOE DOUGH LISTO!</buton></li>
	})
	return (

		<div>
		 	<ul className="list-group">
		 		{list}
		 	</ul>	
		</div>

		)
}