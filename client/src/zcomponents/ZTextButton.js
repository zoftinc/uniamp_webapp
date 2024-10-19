import React, {Component} from 'react';
//import  'ZTextButton.css'

export default class ZTextButton extends React.Component {  
	state={updatedToggle:false}
	constructor(props) {
        	super(props);
		//console.log('ZTextButton: ',props);
	}
	render() {
		return (
			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,
				width:this.props.width,height:this.props.height,
				color:this.props.color,border:this.props.border_style,borderRadius:'5px',
				backgroundColor:this.props.whole_background_color,textAlign:'center',cursor:"pointer"}}   
				disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
                onClick={(e) =>{(this.props.disabled===undefined||this.props.disabled===false)?this.props.onButtonClick():e.preventDefault()}} 
			>
				<span style={{fontSize:this.props.button_font_size, color:this.props.button_font_color,backgroundColor:this.props.label_background_color,fontWeight:"bold" }}  >
					{this.props.button_text}
				</span>
			</div>
		);
	}
}


/*
<script>
  const myDiv = document.getElementById("myDiv")
  myDiv.addEventListener("click", e => {
    e.preventDefault()
  })
</script>


 border-radius: 25px;
  background: #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;

  			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,
				width:this.props.width,height:this.props.height,
				color:this.props.color,border:this.props.border_style,borderRadius:'5px',
				backgroundColor:this.props.whole_background_color,textAlign:'center'}}   
                onClick={(event) =>this.props.onButtonClick()  } >
				<span style={{color:this.props.button_font_color,backgroundColor:this.props.label_background_color }}  >
					{this.props.button_text}
				</span>
			</div>


			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,
				width:this.props.width,height:this.props.height,
				color:this.props.color,borderColor:this.props.border_color, 
				backgroundColor:this.props.whole_background_color,textAlign:'center'}}   
                onClick={(event) =>this.props.onButtonClick()  } >
				<span style={{color:this.props.button_font_color,backgroundColor:this.props.label_background_color }}  >
					{this.props.button_text}
				</span>
			</div>
 */