
import  'ZStaticText.css'

export default class ZStaticText extends React.Component {  
	state={updatedToggle:false}
	constructor(props) {
        	super(props);
	}
	render() {
		return (
			<div id={this.props.id} className="gid_0134_cell_001" align={this.props.align}
			disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
			style={{position:"absolute",marginLeft:this.props.left,top:this.props.top,width:this.props.width,height:this.props.height,backgroundColor:this.props.background_color, color:this.props.font_color}} >
				<span id={this.props.id + '_001'} style={{color:this.props.font_color,fontFamily:this.props.font_family,fontSize:this.props.font_size,fontWeight:this.props.font_Weight}}>{this.props.value}</span>
			</div>



		);
	}
}
