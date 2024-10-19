import React, {Component} from 'react';

export default class ZCheckbox extends React.Component {  
	state={updatedToggle:false}
    	constructor(props) {
       	super(props);
		//console.log('ZCheckBox props : ' , this.props);
	}
	// insert javascript event
	render() {
		return (
			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,width:this.props.width}} >
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
			</div>
		);
	}
}

/*
            onBlur = {() =>this.props.onBlur()}
export default function App() {
  const ref = useRef(null);

  const handleClick = () => {
    if (ref.current.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
  };

  return (
    <div>
      <label htmlFor="subscribe">
        <input ref={ref} type="checkbox" id="subscribe" name="subscribe" />
        Subscribe
      </label>

      <br />

      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      Select your pizza topping:
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Paneer
      </div>
      <div className="result">
        Above checkbox is {isChecked ? "checked" : "un-checked"}.
      </div>
    </div>
  );
}


*/