//--From Design Tool--
import 'ZCheckboxList.css';

import ZCheckbox from 'ZCheckbox.js'

export default class ZCheckboxList extends React.Component {  
	state = {	
			selection_list:[],
	}
	constructor(props) {
		super(props);
	}

    componentDidMount() {
	this.setState({ ...this.state, selection_list:this.props.selection_list})
	 console.log("ZCheckboxList-Component Mount: " ,  this.props.selected_id, this.props.well_id,this.props.selection_list)
    }

	onClick=(id)=>{
		let statusCopy = Object.assign({}, this.state)

/*
		for(let i=0;i<statusCopy.selection_list.length;i++) {
			if(statusCopy.selection_list[i].id===id) {
				statusCopy.selection_list[i].checked = !statusCopy.selection_list[i].checked
				break;
			}
		}
		this.setState(statusCopy);
		this.props.onchange_func(id)
*/
	}	

//-----Render Script-----
	//console.log("ZLookup with RadioButton : this.props.id" + this.props.id + ' this.props.class=' + this.props.class + ' this.state.checked:', this.state.checked);
/* BEGINING RENDERING CODE */
		
	render() {
		console.log('ZCheckboxList render() this.state.selected_id,this.props.selection_list',this.state.selected_id, this.props.selection_list)
		return (
			<div id="gid_0433_cell_001"  style={{backgroundColor:this.props.background_color,width:this.props.width, height:this.props.height }}  >
				disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
				{this.state.selection_list.map((item, i)=>
					<ZCheckbox id = { "gid_0433_cell_001_object_00" + (i + 1).toString() + "_status"}  value = {item.description} checked = {item.checked}  width={this.props.item_width*i} onClick= {(e)=>{this.onClick(item.id)}} />
				)}
			</div>
		);
	}		
/* ENDING RENDERING CODE */
}

