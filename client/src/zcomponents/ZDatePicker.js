import React, {Component} from 'react';
import DatePicker from "react-datepicker";

export default class ZEditText2 extends React.Component {  
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
				<DatePicker id={this.props.id + 'button'} type="text"  style={{x:this.props.button_x,y:this.props.button_y,width:this.props.button_width,
					height:this.props.button_height,color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					onChange={() => this.props.onchange_func()}
					onBlur = {() =>this.props.onblur()}
					selected={this.props.value}
					dateFormat="MM/dd/yyyy"
				/>
			</div>
		);
	}
}
/*
            <div id="03010106" style={{position:"absolute",left:770,top:0,width:100,height:9,backgroundColor:"#ffffff"}}>
                <scan style={{position:"absolute",left:0,top:0}}>
                    Start Date
                </scan>
                <div style={{position:"absolute",left:0,top:20}}>
                    <DatePicker
                        selected={input_parm.dateStart}
                        onChange={handleStartDateChange}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
            </div>
*/