import React, {Component, useState, useEffect, useContext,useCallback} from 'react';
import ReactDom from "react-dom";
import {ResponseWindowOk} from './Modals';

import files from './files.json';
import Directory from './Directory';
import "./Directory.css";
import 'devextreme/dist/css/dx.light.css';
import getApiUrl from './GetApiUrl';
import TreeView, { TreeViewTypes } from 'devextreme-react/tree-view';

import service, { dataType,items } from './data.js';
import "./styles.css";

const products = service.getItem();
const api_url = getApiUrl();

const DirectoryModal = ({modalTitle,dirPath,setShowModal,setParent})=> {
    const [okTitle, setModalTitle] = useState("OK");
    const onButtonClick = (button_name)=> {
    }
    const [selectByClick, setSelectByClick] = useState(true);
    const [selectionMode, setSelectionMode] = useState("single");
    const [showCheckBoxesMode, setShowCheckBoxesMode] = useState(false);
    const [currentRootDir,setCurrentRootDir] = useState(dirPath);
//    const [dirList, setDirList] = useState([{id:'1',name:dirPath,expanded: true,}]);
    const [dirList, setDirList] = useState([]);
    /*
    const syncSelection = useCallback((treeView) => {
        const synData = treeView.getSelectedNodes()
          .map((node) => node.itemData);
          console.log("synData",synData);
      }, []);
    */

    const treeViewSelectionChanged = useCallback((e:TreeViewTypes.SelectionChangedEvent) => {
//            console.log("e.component",e.component);
        const selectedNodes = e.component.getSelectedNodes();
        let item = {};
        if(selectedNodes.length>0) {
            item = selectedNodes[0].itemData;
            setParent(dirPath + '\\' + item.name);
            setShowModal(false);
        }
//        syncSelection(e.component);
      }, []);

    const toParentDir = ()=>{
        for(let i=currentRootDir.length-2; i>=0; i--) {
            if(currentRootDir[i]=='\\') {
                let tmp_root = currentRootDir.substring(0,i);
//                alert(tmp_root);
                setParent(tmp_root);
                setShowModal(false);
                break;
            }
        }
    }  
    const api_url = getApiUrl();
	useEffect(() => {
        let tmp_list = [];
        let root = {id:'1',name:dirPath,expanded:true};
            console.log("useEffect []-dirList",dirList);
    //    tmp_list.push(root);
        if(dirList.length===0)
            tmp_list.push(root);
            fetch(api_url + "/get_sub_dir_and_ab1_list?"+"dir_path=" + dirPath)
            .then(response => response.json())
            .then(data => {
                if(data.length>0) {
                    console.log("data",data)
                    for(let i=0;i<data.length;i++) {
                        let item_tmp = {id:'1_1',name:'',parent_id:'1'};
                        item_tmp.id = '1_' + (i+1).toString();
                        item_tmp.parent_id = '1';
                        item_tmp.name = data[i];
                        tmp_list.push(item_tmp);
                    }
                    setDirList(tmp_list);
                }
            });
    },[]);

    
	useEffect(() => {
        console.log("dirList",dirList);
        console.log("items",items);
    },[dirList]);
    

    return ReactDom.createPortal(
        <div className="container" >
            <div className="modal" style={{left:0,top:0,width:550,height:500,backgroundColor:"#ffffff"}}>
                <div style={{position:'absolute',left:-20,top:10,width:80,height:30}}>
                    <button onClick={() => toParentDir()}>..</button>
                </div>
                <div style={{position:'absolute',left:460,top:10,width:80,height:30}}>
                    <button onClick={() => {setShowModal(false);}}>X</button>
                </div>
                <div style={{position:'absolute',left:60,top:20,width:400,height:400}}>
                    <TreeView 
                        id="treeView"
                        dataSource={dirList}
                        dataStructure="plain"
                        keyExpr="id"
                        displayExpr="name"
                        parentIdExpr="parent_id"
                        selectByClick={selectByClick}
                        onSelectionChanged={treeViewSelectionChanged}
                    />
                </div>
            </div>
        </div>,
         document.getElementById("portal")
    );
}
//                     <Directory files={directoryList} />
export default DirectoryModal;

