import 'ZTabControl.css';

import ZTextButton from 'ZTextButton.js'

import {selectTabpage} from 'api/site/zoft_utils.js';

export default class ZTabControl extends React.Component {  
//	  state = { hWidth: props.tabHeader.width };
	constructor(props) {
	  super(props);
	 console.log('props', props)
	  console.log('props.component_div_id', props.component_div_id);
	  console.log('props.titleList', props.titleList);
	  // Don't call this.setState() here!

//	  this.handleClick = this.handleClick.bind(this);
	}

	onClickButton = (tabindex) =>
	{	let buttonIdList = [];
		let tabheaderIdList = [];
		let tabpageIdList = [];
		for(let i=0;i<this.props.componentList.length;i++) {
/*
			buttonIdList.push(this.props.component_div_id + '_tabheader_' + i.toString() + '_button_' + this.props.suffix);
			tabheaderIdList.push(this.props.component_div_id + '_tabheader_' + i.toString() + '_' + this.props.suffix);
			tabpageIdList.push(this.props.component_div_id + '_tabpage_' + i.toString() + '_' + this.props.suffix);
*/

			buttonIdList.push('pid_0520_cell_001_tabheader_' + i.toString() + '_button_' + this.props.suffix);
			tabheaderIdList.push('pid_0520_cell_001_tabheader_' + i.toString() + '_' + this.props.suffix);
			tabpageIdList.push('pid_0520_cell_001_tabpage_' + i.toString() + '_' + this.props.suffix);

		}
		console.log('buttonIdList', buttonIdList)  
		console.log('tabheaderIdList', tabheaderIdList)  
		console.log('tabpageIdList', tabpageIdList)  
		selectTabpage(tabindex, buttonIdList, tabheaderIdList, tabpageIdList, this.props.selectedColor , this.props.unSelectedColor);
		console.log('tabindex' + tabindex.toString());
       }
//-----Render Script-----
/*
	<div className={i===0?"pid_0520_cell_001_tabpage_display":"pid_0520_cell_001_tabpage_none"}
*/
render(){
return  (
/* BEGINING RENDERING CODE */
<div id={this.props.component_div_id} className="pid_0520_cell_001" style={this.props.tabDim}>
	<div className="pid_0520_cell_001_tabheader" id={this.props.component_div_id + '_tabheader'} style={this.props.tabHeader}>
		{this.props.titleList.map((title, i)=>{
			let unitTabWidth = this.props.tabHeader.width/this.props.titleList.length;	
			let unitTabHeight = this.props.tabHeader.height/this.props.titleList.length;	
			let theLeft = unitTabWidth*i;
			let theTop = unitTabHeight*i;
			console.log('theLeft', theLeft);
			 return (
				<div className="pid_0520_cell_001_tabheader_001" 
							id={'pid_0520_cell_001_tabheader_' + i.toString() + '_' + this.props.suffix} 
							style={{"left":this.props.orientation==='H'?theLeft:0,
								    "top":this.props.orientation==='H'?0:theTop,
								 "width":this.props.orientation==='H'?unitTabWidth:this.props.tabHeader.width,
								"height":this.props.orientation==='H'?this.props.tabHeader.height:unitTabHeight,
						 backgroundColor:i===0?this.props.selectedColor:this.props.unSelectedColor}}
				>
					<ZTextButton
						 id = {'pid_0520_cell_001_tabheader_' + i.toString() + '_button_' + this.props.suffix }
						 innerClass = {this.props.orientation==='H'?'pid_0520_cell_001_tabheader_button':'pid_0520_cell_001_tabheader_button_vertical'}
						 value = {this.props.titleList[i]}
						 font_color = {'#000000'}
						 background_color = {i===0?this.props.selectedColor:this.props.unSelectedColor}
						 font_size = {14}
						 onclick_func= {()=>{this.onClickButton(i)}}
					/>				
				</div>
			)

		}
)}	
	</div>
	{this.props.componentList.map((component,i)=>	

		<div className={i===0?"pid_0520_cell_001_tabpage_display":"pid_0520_cell_001_tabpage_none"}
					id={'pid_0520_cell_001_tabpage_' + i.toString() + '_' + this.props.suffix}
				   style={{"left":0,"top":this.props.tabHeader.height,"width":this.props.tabDim.width,"height":this.props.tabDim.height-this.props.tabHeader.height}}

		>
			{component}
		</div>

	)}


</div>

/* ENDING RENDERING CODE */

		);
	}
}

