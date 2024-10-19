import React, {Component} from 'react';

export default class ZDropdownList extends React.Component {  
	state={updatedToggle:false}
	constructor(props) {
        	super(props);
	}
	render() {
		return (
			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,width:this.props.width,
				height:this.props.height,backgroundColor:this.props.whole_background_color}}
				disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
				>
				<div style={{position:"absolute",left:this.props.label_x,top:this.props.label_y,
					width:this.props.label_width,height:this.props.label_height,color:this.props.label_color,
					backgroundColor:this.props.label_background_color,fontSize:this.props.label_font_size,textAlign:this.props.text_align}}>
					{this.props.label}
				</div>
				<select id={this.props.id + 'button'} style={{position:"absolute",left:this.props.button_x,top:this.props.button_y,
					width:this.props.button_width,height:this.props.button_height,
					color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
					value={this.props.value}
					onChange = {(newVal) =>  {this.props.onchange_func(newVal.target.value);}}
					onBlur={() => this.props.onBlur() }>
							<option value="DEFAULT" ></option>
                	{this.props.dataList.map((item,i)=>
							<option value={item.id} >{item.name}</option>
					)}
            	</select> 
			</div>
		);
	}
}

/*
				<select id={this.props.id + 'button'} style={{position:"absolute",left:this.props.button_x,top:this.props.button_y,
					width:this.props.button_width,height:this.props.button_height,
					color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					value={this.props.value}
					onChange = {(newVal) =>  {this.props.onchange_func(newVal.target.value);}}
					onBlur={() => this.props.onBlur() }>
							<option value={this.props.value} selected></option>
                	{this.props.dataList.map((item,i)=>
							<option value={item.id} >{item.name}</option>
					)}
            	</select> 

			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,width:this.props.width,
				height:this.props.height,backgroundColor:this.props.whole_background_color}}>
				<div style={{position:"absolute",left:this.props.label_x,top:this.props.label_y,
					width:this.props.label_width,height:this.props.label_height,color:this.props.label_color,
					backgroundColor:this.props.label_background_color,fontSize:this.props.label_font_size}}>
					{this.props.label}
				</div>
				<select id={this.props.id + 'button'} style={{position:"absolute",left:this.props.button_x,top:this.props.button_y,
					width:this.props.button_width,height:this.props.button_height,
					color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					value={this.props.value}
					onChange = {(newVal) =>  {this.props.onchange_func(newVal.target.value);}}
					onBlur={() => this.props.onBlur() }>
							<option value="DEFAULT" ></option>
                	{this.props.dataList.map((item,i)=>
							<option value={item.id} >{item.name}</option>
					)}
            	</select> 
			</div>
*/

/*
							<option value={this.props.value} selected></option>

<option value="DEFAULT" ></option>
*/