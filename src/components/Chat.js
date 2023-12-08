import { Container, TextField } from '@mui/material'
import React, {useState} from 'react'
import Loader from './Loader'
import firebase from 'firebase'

const Chat = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth) 
  const [value, setValue] = useState('')
  const [messages, loading]  = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )


  const sendMessage = async () => {
      firestore.collection('messages').add({
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              text: value,
              createdAt:firebase.firestore.FieldValue.serverTimestamp()
      })
      setValue('')
  }

  if(loading) {
    return <Loader/>
  }




  return (
    <Container>
       <Grid container
                style={{height: window.innerHeight - 50, marginTop: 5}}
                justify={"center"}
                >
                  <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                        {messages.map(e =>
                              <div style={{
                                margin: 10,
                                border: user.uid === e.uid ? '2px solid green' : '2px dashed red',
                                marginLeft: user.uid === e.uid ? 'auto' : '10px',
                                width: 'fit-content',
                                padding: 5
                              }}>
                                  <Grid container>
                                        <Avatar src={e.photoURL}/>
                                        <div>{e.displayName}</div>
                                  </Grid>
                                  <div>{e.text}</div>
                              </div>
                        )

                        }   
                  </div>
                  <Grid
                                container
                                direction={"column"}
                                alignItems={'flex-end'}
                                style={{width: '80%'}}  
                            >

                              <TextField
                              fullWidth
                              rowsMax={2} 
                              variant='outlined'
                              value={value}
                              onChange={e => setValue(e.target.value)}
                              />
                              <Button onClick={sendMessage}  variant="outlined">Отправить</Button>
                            </Grid>
                </Grid>
    </Container>
  )
}

export default Chat