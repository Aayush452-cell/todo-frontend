import React,{useState,useEffect} from "react";
import AddButton from "../components/AddButton";
import ListItem from '../components/ListItem';

const NotesListPage = () => {

  let [notes,setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);
  
  let getAllNotes =  async () => {
    setInterval(getNotes, 1000);
  }

  let getNotes = async () => {
    let response = await fetch('https://quicknotestodo.herokuapp.com/api/notes');
    let data = await response.json();
    console.log(data);
    setNotes(data);
  }

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9872; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((note,index) => (
            <ListItem key={index} note={note}/>
        ))}
      </div>

      <AddButton />
    </div>
  );
};

export default NotesListPage;
