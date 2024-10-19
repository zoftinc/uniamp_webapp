import React, {Component} from 'react';

export default class ZAutoCompleteEditText2 extends React.Component {  
	state={updatedToggle:false}
	constructor(props) {
        	super(props);
			this.textSelect = React.createRef();
			this.toClickTextSelect = this.toClickTextSelect.bind(this);
	}
	componentDidUpdate(prevProps) {
		console.log("ZAutoCompleteEditText this.props.dataList",this.props.dataList)
	}
	toClickTextSelect() {
		this.textSelect.current.click();
	}
	render() {
		return (
		<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,width:this.props.width,
			height:this.props.height,backgroundColor:this.props.whole_background_color}}>
			<div style={{position:"absolute",left:this.props.label_x,top:this.props.label_y,
				width:this.props.label_width,height:this.props.label_height,color:this.props.label_color,
				backgroundColor:this.props.label_background_color,fontSize:this.props.label_font_size}}>
				{this.props.label}
			</div>
			<input id={this.props.id + 'button'} type="text"  style={{position:"absolute",left:this.props.button_x,top:this.props.button_y,width:this.props.button_width,
				height:this.props.button_height,color:this.props.button_color,backgroundColor:this.props.button_background_color}}
				disabled={(this.props.disabled===undefined||this.props.disabled===false)?false:true}
				value={this.props.value_search}
				onClick={this.toClickTextSelect}
				onChange={(text) => this.props.onchange_func_search(text.target.value)}
				onBlur = {()=>{}}
			/>
			<select id={this.props.id + 'select'}
				style={{position:"absolute",left:this.props.button_x,top:this.props.button_y + this.props.button_height + 5,
				width:this.props.button_width,height:this.props.button_height,
				color:this.props.button_color,backgroundColor:this.props.button_background_color}}
				ref={this.textSelect}
				value={this.props.value_select}
				onChange = {(newVal) =>  {this.props.onchange_func_select(newVal.target.value);}}
				onBlur={() => this.props.onBlur() }>
				{this.props.dataList.map((item,i)=>
						<option value={item.id} >{item.name}</option>
				)}
			</select> 
		</div>
	)
	}
}

// export default ZAutoCompleteEditText2;

/*
		<div id={this.props.id} style={{position:"absolute",left:this.props.x,top:this.props.y,width:this.props.width,
				height:this.props.height,backgroundColor:this.props.whole_background_color}}>
				<div style={{position:"absolute",left:this.props.label_x,top:this.props.label_y,color:this.props.label_color,
					backgroundColor:this.props.label_background_color,textAlign:this.props.text_align}}>
					{this.props.label}
				</div>
				<div>
				<input id={this.props.id + 'button'} type="text"  style={{position:"absolute",left:this.props.button_x,top:this.props.button_y,width:this.props.button_width,
					height:this.props.button_height,color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					value={this.props.value}
					list={this.props.id + 'autocomplete'} autoComplete="on" 
					onChange={(text) => this.props.onchange_func(text.target.value)} 
					onBlur = {() =>this.props.onBlur()}
				/>
				<datalist id={this.props.id + 'autocomplete'}
				>
				{this.props.data_list.map((value,i)=>
						<option value={value}>{value}</option>
				)}
				</datalist>
				</div>
			</div>

				{this.props.dataList.map((value,i)=>{
					return (
						<option value={value}>{value}</option>
					);
				})}
					style={{left:this.props.button_x,leftMargin:50}}
x={650} y={10} width={150} height={90} whole_background_color="#ffffff"
label="Institution" label_x={10} label_y={0} label_color="#000000" label_background_color="#ffffff"
button_x={10} button_y={20} button_width={150} button_height={30} button_color="#000000" button_background_color="ffffff"

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
					onChange = {(newVal) =>  {this.props.onchange_func(newVal.target.value);}}
					onBlur={() => this.props.onBlur() }>
                	{this.props.dataList.map((item,i)=>
							<option value={this.props.item.value} >{item.description}</option>
					)}
            	</select> 
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


/*
		<input type="text" ref={item_name_ref} onClick={(e)=>{item_name_ref.current.value=""}}  
			defaultValue = {props.selectedRecord.item_name} list="item_name_list"/>
		<datalist id="item_name_list">
			{  
				productsName.map((item,index)=>{
				return  <option key={uuid()} value={item.item_name} />;
				})
			}
		</datalist>

				<input id={this.props.id + 'button'} type="text"  style={{position:"absolute",left:this.props.button_x,top:this.props.button_y,width:this.props.button_width,
					height:this.props.button_height,color:this.props.button_color,backgroundColor:this.props.button_background_color}}
					value={this.props.value}
					list={this.props.id + 'autocomplete'} 
					autoComplete="on" 
					onChange={(text) => this.props.onchange_func(text.target.value)} 
					onBlur = {() =>this.props.onBlur()}
				/>
				<datalist id={this.props.id + 'autocomplete'}
					<option value="value1">value1</option>
					<option value="value2">value2</option>
					<option value="value3">value3</option>
					<option value="value4">value4</option>
					<option value="value5">value5</option>
					<option value="value6">value6</option>
					<option value="value7">value7</option>
					<option value="value8">value8</option>
					<option value="value9">value9</option>
					<option value="value10">value10</option>

				>
				{this.props.dataList.map((item,i)=>{
						let keys = Object.keys(item);
						return <option value={item[keys[0]]}>{keys[0]}</option>
					}
				)}
				</datalist>

				{this.props.dataList.map((value,i)=>
					<option key={value} value={value} />
				)}

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
*/


/* 
				{this.props.dataList.map((value,i)=>{
					return (
						<option value={value}>{value}</option>
					);
				})}
					style={{left:this.props.button_x,leftMargin:50}}
x={650} y={10} width={150} height={90} whole_background_color="#ffffff"
label="Institution" label_x={10} label_y={0} label_color="#000000" label_background_color="#ffffff"
button_x={10} button_y={20} button_width={150} button_height={30} button_color="#000000" button_background_color="ffffff"

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
					onChange = {(newVal) =>  {this.props.onchange_func(newVal.target.value);}}
					onBlur={() => this.props.onBlur() }>
                	{this.props.dataList.map((item,i)=>
							<option value={this.props.item.value} >{item.description}</option>
					)}
            	</select> 
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
