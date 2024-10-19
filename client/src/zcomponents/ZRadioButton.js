import React, {Component} from 'react';

//import  'ZRadioButton.css';
export default class ZRadioButton extends React.Component {  
	state={updatedToggle:false}
	constructor(props) {
        	super(props);
		//console.log('ZRadioButton props : ' , this.props);
	}
	// insert javascript event
	render() {
		return (
			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,width:this.props.width,
				height:this.props.height,backgroundColor:this.props.whole_background_color}}>
				<div style={{position:"absolute",left:this.props.label_x,top:this.props.label_y,
					width:this.props.label_width,height:this.props.label_height,color:this.props.label_color,
					backgroundColor:this.props.label_background_color,fontSize:this.props.label_font_size,textAlign:this.props.text_align}}>
					{this.props.label}
				</div>
				<input id={this.props.id + 'button'} type="radio"  
					style={{position:"absolute",x:this.props.button_x,y:this.props.button_y,width:this.props.button_width,
					height:this.props.button_height,color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					checked={this.props.value}  
					onClick ={() => this.props.onClick()}
				/>
			</div>
		);
	}
}
// onclick={(event) => {alert("button clicked");this.props.onClick(event)} }
// button_x={20} button_y={0} button_width={25} button_height={15} button_color="#000000" button_background_color="#ffffff"
// x={340} y={65} width={60} height={35} whole_background_color="#ffffff"
// label="PCR" label_x={0} label_y={0} label_width={40} label_height={35}
// label_color="#000000" label_background_color="#ffffff" text_align="left"

/*
			<div id={this.props.id} style={{x:this.props.x,y:this.props.y,width:this.props.width,
				height:this.props.height,backgroundColor:this.props.whole_background_color}}>
				disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
				<div style={{x:this.props.label_x,y:this.props.label_y,color:this.props.label_color,
					backgroundColor:this.props.label_background_color}}>
					{this.props.label}
				</div>
				<input type="radio"  value={this.props.value} style={{x:this.props.button_x,y:this.props.button_y,
					width:this.props.button_width,height:this.props.button_height,
					color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
					id={this.props.id + 'button'}
                    checked={this.props.value}  
                    onClick={(event) => this.props.onClick(event) }
				/>
			</div>


			<label>
					<input id={this.props.id + 'button'} type="checkbox" style={{left:this.props.button_x,top:this.props.button_y,
						width:this.props.button_width,height:this.props.button_height,
						color:this.props.button_color,backgroundColor:this.props.button_background_color}}
			            disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
            			value={this.props.value}
						checked={this.props.value}  
						onClick={() => this.props.onClickCheckbox() }
            		/>
					<scan style={{fontSize:this.props.font_size,fontWeight:this.props.font_weight}}>{this.props.label}</scan>
			</label>
*/

