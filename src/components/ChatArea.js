import React, { useEffect, useState } from 'react';
import './ChatArea.css';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';
import {  inputchatone, inputchattwo } from '../action/inputaction';
import DisplayArea from './DisplayArea';
import {DropzoneDialog} from 'material-ui-dropzone'
import {app} from '../base';
const db=app.firestore()

function ChatArea() {
    const [fileUrl,setFileUrl]=useState(null);
    const [users,setUsers]=useState([])
    const [input1,setInput1]=useState("")
    const [input2,setInput2]=useState("")
    const [photo,setPhoto]=useState({open:false,files:[]})
    const [photo2,setPhoto2]=useState({open:false,files:[]})
    
    const dispatch = useDispatch()
    const handleSubmitterRight=e=>{
        e.preventDefault();
        dispatch(inputchatone(input1))
        setInput1("")
       
    }

    
    const handleSubmitterLeft=e=>{
        e.preventDefault();
        dispatch(inputchattwo(input2))
        setInput2("")
    }
     const RightHandler=(e)=>{
         setInput1(e.target.value)
     }
     const LeftHandler=(e)=>{
        setInput2(e.target.value)
    }
    const handleOpen=()=>{
        setPhoto({open:true})
    }
    const handleSave=(files)=>{ 
        setPhoto({
            
            files:files,
            open:false,
        })
    }
    
    const handleClose=()=>{
        setPhoto({open:false})
    }
    const handleOpen2=()=>{
        setPhoto2({open:true})
    }
    const handleSave2= async (files)=>{
        setPhoto2({
            
            files:files,
            open:false,
        })
        const file=files[0];
        const storageRef=app.storage().ref();
        const fileRef=storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
       
        
    }
    
    const handleClose2=()=>{
        setPhoto2({open:false})
    }
    const handleSubmitPhotoOne=e=>{
        e.preventDefault();
    }
    const handleSubmitPhotoTwo=e=>{
        e.preventDefault();
    }
    useEffect(()=>{
        const fetchUsers=async()=>{
            const usersCollection= await db.collection("users").get()
            setUsers(usersCollection.docs.map(doc=>{
                return doc.data()
            }))
        }
        fetchUsers()
    },[])
    
    return (

        <div className='chatarea'>
            
            <div className='scroll'>
            <DisplayArea/>
            </div>
            <div className="input">
            <div className='inputbox_div'>
            <input value={input1} onChange={RightHandler} type="text" placeholder='Type a message' size="48.5" className="input_box"/>
            <i onClick={handleOpen} style={{marginLeft:"330px"}} type="file" class="fa fa-paperclip "></i>
            <i onClick={handleSubmitPhotoOne} class="fa fa-upload" style={{marginLeft:"300px"}}></i>
            <DropzoneDialog
                    open={photo.open}
                    onSave={handleSave}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp','image/*']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={handleClose}
    
                />
            {users.map((user)=>{
                return <li><img width="50" src={user.avatar} alt={user.name}/></li>
            })}
            <SendIcon variant="contained" color="secondary" onClick={handleSubmitterRight} className='sendIcon' style={{ fontSize:20 }}/>
            </div>
            <div className='inputbox_div'>
            <input value={input2} onChange={LeftHandler} type="text" placeholder='Type a message' size="48.5" className="input_box"/>
            <i onClick={handleOpen2} class="fa fa-paperclip " style={{marginLeft:"330px"}}></i>
            <i onClick={handleSubmitPhotoTwo} class="fa fa-upload" style={{marginLeft:"300px"}}></i>
            <DropzoneDialog
                    open={photo2.open}
                    onSave={handleSave2}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={handleClose2}
                />
            <SendIcon variant="contained" color="primary" onClick={handleSubmitterLeft} className='sendIcon' style={{ fontSize:20 }}/>
            </div>
            </div>
            
        </div>
    )
}

export default ChatArea
