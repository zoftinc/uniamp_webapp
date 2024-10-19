import React, {Component} from 'react';

export default class ZAutoCompleteEditText extends React.Component {  
	state={updatedToggle:false}
	constructor(props) {
        	super(props);
	}
	componentDidUpdate(prevProps) {
		console.log("ZAutoCompleteEditText this.props.dataList",this.props.dataList)
	}
	render() {
		return (
			<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,width:this.props.width,
				height:this.props.height,backgroundColor:this.props.whole_background_color}}>
				<div style={{position:"absolute",left:this.props.label_x,top:this.props.label_y,color:this.props.label_color,
					backgroundColor:this.props.label_background_color,textAlign:this.props.text_align}}>
					{this.props.label}
				</div>
				<div>
				<input id={this.props.id + 'button'} type="text"  style={{position:"absolute",left:this.props.button_x,top:this.props.button_y,width:this.props.button_width,
					height:this.props.button_height,color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
					value={this.props.value}
					list={this.props.id + 'autocomplete'} 
					autoComplete="on" 
					onChange={(text) => this.props.onchange_func(text.target.value)} 
					onBlur = {() =>this.props.onBlur()}
				/>
				<datalist id={this.props.id + 'autocomplete'}
					position="relative"
				>
				{this.props.dataList.map((value,i)=>
					<option key={value} value={value} />
				)}
				</datalist>
				</div>
			</div>
		);
	}
}



/* 
				<datalist id={this.props.id + 'autocomplete'}
				>
				{this.props.dataList.map((value,i)=>
					<option value={value}>{value}</option>
				)}
				</datalist>


   <div>
    <input
     value={this.state.color}
     list="hair-color"
     onChange={e => this.handleChange(e)}
    />
    <datalist id="hair-color">
     {[this.options.map(
      item => <option key={item} value={item} />
     )]}
    </datalist>
   </div>



			</div>
                	{this.props.dataList.map((item,i)=>
						{this.props.selected === i?
							<option value={this.props.item.value} selected >{item.description}</option>
						:
							<option value={this.props.item.value} >{item.description}</option>
						}
					)}
        <div class="text-container">
            <input type="text" list="programmingLanguages" 
                        placeholder="Enter Here" />
            <datalist id="programmingLanguages">
                <option value="Objective C">Objective C</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                <option value="Cobol">Cobol</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Pascal">Pascal</option>
                <option value="Perl">Perl</option>
                <option value="R">R</option>
                <option value="Swift">Swift</option>
            </datalist>
        </div>
*/
