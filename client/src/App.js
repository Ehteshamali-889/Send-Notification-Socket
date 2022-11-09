
import {useEffect} from 'react'
import io from "socket.io-client";
import Swal from 'sweetalert2'

const socket = io.connect("http://localhost:3001");
function App() {
  const Send=()=>{
    socket.emit("sendnotficiation","hi");
  }
  useEffect(()=>{
    socket.on("receive_message", (data) => {
      // Swal.fire(
      //   'Call!',
      //   'User A is Calling!',
      //   'Attend',
      //   'Reject'
      // )
      Swal.fire({
        icon: 'success',
        title: 'Call',
        text: 'User A is Calling!',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          ' Accept!',
        cancelButtonText:
          'Reject',
      })
    });
    
  },[socket])
  return (
    <div className="App">
      <button onClick={Send}>Send Notification</button>
    </div>
  );
}

export default App;
