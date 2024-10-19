//--From Design Tool--
import 'ZLookupRadioButton.css';

//import ZCheckbox from 'api/layout/301.js'
import ZRadioButton from 'ZRadioButton.js'

export default class ZLookupRadioButton extends React.Component {  
	state = {
		row: [
			{col:[
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
				{id:'',value:'',dataMode:''},
			]},
			],
		checked: this.props.checked ,
		}


    componentDidMount() {
	 console.log("ZLookup with RadioButton-Component Mount for QC (Plate-Well): " ,  this.props.plate_id, this.props.well_id, this.props.checked)

        this.retrieveData();


	 this.setState({ ...this.state, checked: this.props.checked })
    }

    make_action_string(){
	 var action_string = JSON.parse('[{gui_id:334},{col:"plate_id",value:1},{col:"well_id",value:25}]') ;
	 for (let i = 0; i < action_string.length; i++) {
		console.log(' action_string : ' + action_string.gui_id   );
	 }
    }	

    retrieveData = async () => {
        // console.log("		Retrieving Data for Gui_id: " , gui_id );  
        var newButtons = []
	 let true_key 
	 let check_status 
		let debug_text =  '{[{"gui_id":' + this.props.parentGui + '}, [{"col_name":"' + this.props.col1 + '", "value":' + this.props.value1 + '},{"col_name":"' + this.props.col2 + '", "value":' + this.props.value2 + '}]] }';
		console.log('ZLookup with RadioButton:' + debug_text);


		fetch(`/api/React/usp_react_token_based_pass_through`, {
       		method: 'POST',
       		headers: {'Content-Type': 'application/json',},
      				body: JSON.stringify({
      		 		"auth_token": window.auth_token,
        			"gui_id": this.props.parentGui,
				"input": '{"usp_name":"usp_react_web_lookup_retrieve","input_data":' + '[{"gui_id":' + this.props.parentGui + '}, [{"col_name":"' + this.props.col1 + '", "value":' + this.props.value1 + '},{"col_name":"' + this.props.col2 + '", "value":' + this.props.value2 + '}]] }' ,
       			}),
     			})

            .then((response) => response.json())
            .then((responseJson) => {
                let statusCopy = Object.assign({}, this.state)
                let the_data = JSON.parse(responseJson.output); 
		  let data_len = JSON.parse(responseJson.output)
		  console.log("ZLookup with RadioButton retrieved the_data = " + data_len.length + responseJson.output);	
                for (let i = 0; i < data_len.length; i++) {
                    statusCopy.row[the_data[i].r].col[i].id = the_data[i].i;
                    statusCopy.row[the_data[i].r].col[i].value = the_data[i].v;
                    statusCopy.row[the_data[i].r].col[i].dataMode = the_data[i].d;

		          const title = the_data[i].v
		          const key = the_data[i].i
		          const stat = the_data[i].d
		          console.log("		this.state.row["+ the_data[i].r + "].col[" + i + "].value = " +  the_data[i].v + " , status = " +  stat, + " , Key = " + key, + " , state.checked = " + this.state.checked);

			   const id = "gid_0335_cell_001_object_00" + key + "_QC_Status"	
			   const id_instance = "gid_0335_cell_001_object_00" + key + "_QC_Status_instance"	

			   if ( this.state.checked > 0 ) { this.state.checked === key ? check_status = true : check_status = false }
			   //else { stat === 1 ? check_status = true : check_status = false }	

			   console.log(' check_status: ' , key , this.state.checked, check_status )
			   let label_len = 6*title.length;
			   newButtons.push(<ZRadioButton id = { id_instance}  value = {title}  val = {key}  checked = {check_status}  width={label_len} onClick= {(e)=>{this.onClick(key)}} /> )
			   //newButtons.push(title)	
			   if (stat == 1) {
				true_key = key;
			   }


                }
                this.setState(statusCopy);
		  this.setState({ ...this.state, checked: true_key });
       	  //setButtons(newButtons)
        	  console.log("Open Menus : ", newButtons);

        		var listObj = newButtons.map(function(name){
	                        return <div>{name}</div>;
	                      })
	
	


//		const menuContainer = document.getElementById('gid_0335_cell_001')
		 console.log("ZLookup this.props.id=" + this.props.id)
		const mountPoint = document.getElementById(this.props.id)
		ReactDOM.unmountComponentAtNode(mountPoint)
		ReactDOM.render(listObj, mountPoint)
            })
            .catch((error) => {
                console.error(error);
            });
    }

 	
	onClick=(e)=>{
       	//console.log("		onClick :" + e );
		this.setState({ ...this.state, checked: e })
		this.onChangeTextHandler(e,0,5)
	}

	onChangeTextHandler =(text,r,c) => {
	     //console.log("		onChangeTextHandler-text:", text)
	     let update_string = "";	
	     //'[{"update_value":1}, [{"col_name":"plate_id", "value":1},{"col_name":"well_id", "value":25}]]'	 
			/*
                         update_string = update_string + '{"r":"' + r + '","c":"0","v":"' + this.props.plate_id + '"},'; // plate_id column
                         update_string = update_string + '{"r":"' + r + '","c":"3","v":"' + this.props.well_id + '"},'; //well_id column
			    update_string = update_string + '{"r":"' + r.toString() + '","c":"' + c.toString() + '","v":"' + text + '"}'; //updated column
			*/

		update_string = update_string + '{"update_value":' + text + '}, [{"col_name":"' + this.props.col1 + '", "value":' + this.props.value1 + '},{"col_name":"' + this.props.col2 + '", "value":' + this.props.value2 + '}]'
              this.updateData(update_string);
	}

	updateData(update_string) {
	 //console.log("		Updating the status for Plate/Well/Gui_id: " ,  this.props.plate_id, this.props.well_id, this.props.parentGui)
	 console.log("		update_string: " ,   '{"usp_name":"usp_react_web_update","input_data":[' + update_string + ']}' )

		fetch(`/api/React/usp_react_token_based_pass_through`, {
       		method: 'POST',
       		headers: {'Content-Type': 'application/json',},
      				body: JSON.stringify({
      		 		"auth_token": window.auth_token,
        			"gui_id": this.props.parentGui,
        			"input": '{"usp_name":"usp_react_web_lookup_update","input_data":[' + update_string + ']}' ,
       			}),
     			})

            .then((response) => response.json())
            .then((responseJson) => { 
		  console.log(" 	Update = "  + responseJson.output);
             })
            .catch((error) => {
                console.error(error);
            });
		 
 		this.retrieveData();
 	}

//-----Render Script-----
render(){
console.log("ZLookup with RadioButton : this.props.id" + this.props.id + ' this.props.class=' + this.props.class + ' this.state.checked:', this.state.checked);

	return  (
		
/* BEGINING RENDERING CODE */
		
		<div id={this.props.id} className={this.props.class} style={{left:130}}>
		</div>
		
/* ENDING RENDERING CODE */
		

		);


	}
}

