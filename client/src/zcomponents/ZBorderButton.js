//import  'ZBorderButton.css'
import React, {Component} from 'react';

export default class ZBorderButton extends React.Component {  
	state={updatedToggle:false}
	constructor(props) {
        	super(props);
		//console.log('ZBorderButton: ',props);
	}
	// insert javascript event
	render() {
		return (
			<div style={{left:this.props.x,top:this.props.y,width:this.props.width,height:this.props.height,
				color:this.props.color,backgroundColor:this.props.whole_background_color,cursor:"pointer"}}   
                onClick={(event) =>   this.props.onclick_func(this.props.value)  } >
				disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
				<span 	style={{color:this.props.button_font_color }}  >
					{this.props.button_text}
				</span>
			</div>
		);
	}
}
