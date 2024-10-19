import React, {Component, useState, useEffect, useContext} from 'react';
import './App.css';

import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { GridApi, SelectionChangedEvent, GridOptions } from 'ag-grid-community';
//import '@ag-grid-community/core/dist/styles/ag-grid.css';
//import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

import {getTraceViewIsDrawing, setTraceViewIsDrawing, ClearTraceviewSampleSet,AddToTraceviewSampleSet,MakeTraceview_Test2}
from './TraceDisplaySimple';

import getApiUrl from './GetApiUrl';
import './TraceDisplay.css';
import ZEditText from './zcomponents/ZEditText';
import ZTextButton from './zcomponents/ZTextButton';
import ZCheckbox from './zcomponents/ZCheckbox2';
import ZRadioButton from './zcomponents/ZRadioButton';
import DirectoryModal from './directorymodal';
import isThisQuarter from 'date-fns/esm/isThisQuarter';

var traceViewIsDrawing = false;
export default Ab1Scoring;

/*
Sequence of Process:
1) Init - useEffect(()=>{},[]);
  load config file
2) Click "Scoring" or "View Trace"
  scoring and load file list if file list is empty or the parent direct of file is different the curren dir path
  toggle Scoring and View Trace page
3) Click Pass or Fail check box
  Update filtered file list and scoring list if file list length > 0
*/

function UniAmp() {

  const columnDefs = [
    {headerName:"Name",headerClass:"grid-header-left",
      field:"name",hide:false,width:500,sortable:false,checkboxSelection:false,editable:false,valueSetter:function (params) {params.data.name= params.newValue;return true;},suppressNavigable:false,
      editable:false, 
      "cellStyle":{
        'textAlign':'left',
      },
    },
    {headerName:"Scoring",
      headerClass:"grid-header-right",
      field:"scoring",hide:false,width:160,sortable:false,checkboxSelection:false,editable:false,valueSetter:function (params) {params.data.scoring= params.newValue;return true;},suppressNavigable:false,
      editable:false, 
      "cellStyle":{
        'textAlign':'right',
      },
    }
  ]

  let buttonClicked = false;
  const api_url = getApiUrl();

  useEffect(() => {
  },[]);

  const retrievedData = ()=>{
  }


  const onExcel =()=> {
//    alert("onExcel");
    if(scoringFilteredRetList.length>0) {
      let the_api_url = api_url + "/save_json_to_xlsx";
      fetch(the_api_url, {
        headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'},
//            agent: httpsAgent,
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
            'dir_path': dirPath,
            'scoring_list': scoringFilteredRetList,
        })
      })
      .then(response =>response.json())
      .then(data => {
          console.log("data",data);
          console.log("status",data.status);
//            alert("data");
//            alert(data);
      })
      .catch(err => {
        alert('fetch err-11:' + err);
      });
    }
  }

return (
  <div className="App">
  <div style={{position:"absolute",top:0,width:2000,height:2000,backgroundColor:"#ffffff"}}>
    <div style={{position:"absolute",left:20,top:0,width:1650,height:50}}>
      <div style={{position:"absolute",left:250,top:5,width:600,height:30}}>
        <span style={{color:"#000000", fontSize:25,fontWeight:"bold"}}  >
          Ab1 File Scoring --
        </span>
        <span style={{color:"#000000", fontSize:20,fontWeight:"bold"}}  >
          &nbsp; Zoft, Inc. ver 03-20240201 
        </span>
      </div>
      <div style={{position:"absolute",left:140,top:42,width:600,height:30}}>
        <span style={{color:"#000000", fontSize:15,fontWeight:"bold"}}  >
          Minimum Sequence Length
        </span>
      </div>
      <ZTextButton id="030102datapage15"
            x={0} y={65} width={70} height={25} whole_background_color="#ffffff" 
            border_style="1px solid #000000"
            button_text="Scoring" label_background_color="#ffffff"
            button_font_size={15}
            button_font_color="#000000" button_background_color="#ffffff"
            onButtonClick = {() => { onScoring()}}
      />
      <ZTextButton id="030102datapage15"
            x={80} y={65} width={50} height={25} whole_background_color="#ffffff" 
            border_style="1px solid #000000"
            button_text="Excel" label_background_color="#ffffff"
            button_font_size={15}
            button_font_color="#000000" button_background_color="#ffffff"
            onButtonClick = {() => { onExcel()}}
      />
      <ZTextButton id="030102datapage15"
            x={140} y={65} width={85} height={25} whole_background_color="#ffffff" 
            border_style="1px solid #000000"
            button_text="View Trace" label_background_color="#ffffff"
            button_font_size={15}
            button_font_color="#000000" button_background_color="#ffffff"
            onButtonClick = {() => { onViewTrace()}}
      />
      <ZCheckbox id="030102detail13"
          x={235} y={65} width={60} height={35} whole_background_color="#ffffff"
          label="Pass" label_x={0} label_y={0} label_width={40} label_height={35}
          label_color="#000000" label_background_color="#ffffff" text_align="left"
          button_x={20} button_y={0} button_width={25} button_height={15} button_color="#000000" button_background_color="#ffffff"
          value={showPass}
          onClickCheckbox = {() => { setShowPass(!showPass)}}
          onBlur = {()=>{}}
      />
      <ZCheckbox id="030102detail13"
          x={285} y={65} width={60} height={35} whole_background_color="#ffffff"
          label="Fail" label_x={0} label_y={0} label_width={40} label_height={35}
          label_color="#000000" label_background_color="#ffffff" text_align="left"
          button_x={20} button_y={0} button_width={25} button_height={15} button_color="#000000" button_background_color="#ffffff"
          value={showFail}
          onClickCheckbox = {() => { setShowFail(!showFail)}}
          onBlur = {()=>{}}
      />
      <ZRadioButton id="030102radiobutton"
          x={340} y={65} width={60} height={35} whole_background_color="#ffffff"
          label="PCR" label_x={0} label_y={0} label_width={40} label_height={35}
          label_color="#000000" label_background_color="#ffffff" text_align="left"
          button_x={10} button_y={0} button_width={15} button_height={15} button_color="#000000" button_background_color="#ffffff"
          value={pcrOrPlasmid===pcrScoring?1:0}
          onClick = {() => {setPcrOrPlasmid(pcrScoring);setMinWindowSize(minPcrWindowSize)}}
          onBlur = {()=>{}}
      />
      <ZEditText id="pcr_min_sequence"
          x={400} y={65} width={100} height={20} whole_background_color="#ffffff" 
          button_x={0} button_y={0} button_width={55} button_height={20} button_color="#000000" button_background_color="ffffff"
          value={minPcrWindowSize}
          onchange_func = {(text) => updateWindowSize(pcrScoring,text)}
          onBlur= {() => {}}
      />
      <ZRadioButton id="030102radiobutton"
          x={470} y={65} width={100} height={35} whole_background_color="#ffffff"
          label="Plasmid" label_x={0} label_y={0} label_width={40} label_height={35}
          label_color="#000000" label_background_color="#ffffff" text_align="left"
          button_x={50} button_y={0} button_width={15} button_height={15} button_color="#000000" button_background_color="#ffffff"
          value={pcrOrPlasmid===plasmidScoring?1:0}
          onClick = {() => {setPcrOrPlasmid(plasmidScoring);setMinWindowSize(minPlasmidWindowSize)}}
      />
      <ZEditText id="pcr_min_sequence"
          x={550} y={65} width={100} height={20} whole_background_color="#ffffff" 
          button_x={0} button_y={0} button_width={55} button_height={20} button_color="#000000" button_background_color="ffffff"
          value={minPlasmidWindowSize}
          onchange_func = {(text) => updateWindowSize(plasmidScoring,text)}
          onBlur= {() => {}}
      />

      <ZTextButton id="030102datapage15"
          x={630} y={65} width={75} height={25} whole_background_color="#ffffff" 
          border_style="1px solid #000000"
          button_text="Folder" label_background_color="#ffffff"
          button_font_size={15}
          button_font_color="#000000" button_background_color="#ffffff"
          onButtonClick = {() => { setShowModalDirectory(true)}}
      />
      <ZEditText id="dirPath"
          x={715} y={65} width={600} height={20} whole_background_color="#ffffff" 
          label="" label_x={0} label_y={0} label_width={100} label_height={0}
          label_font_size={12} label_color="#000000" label_background_color="#ffffff"  text_align="center"
          button_x={0} button_y={0} button_width={650} button_height={20} button_color="#000000" button_background_color="ffffff"
          value={dirPath}
          onchange_func = {(text) => { setDirPath(text)}}
          onBlur= {() => {}}
      />
      {showDataSheet ?
      <div style={{position:"absolute",left:20,top:100,width:1650,height:1000}}>
        <AgGridReact 
          rowData={scoringFilteredRetList} 
          columnDefs={columnDefs}
        />
      </div>
      :
      <div style={{position:"absolute",left:20,top:100,width:1650,height:2000}}>
        <div id="gid_0292_cell_001" >					
          <div id = "gid_0292_cell_001_object_001_PlateGraphResults" >
          </div>
        </div>
      </div>
    }
    </div>
    {showModalDirectory ? <DirectoryModal title={modalTitle} dirPath={dirPath} setShowModal={setShowModalDirectory} setParent={setDirPath} /> : null}
  </div>
  </div>
);
}
