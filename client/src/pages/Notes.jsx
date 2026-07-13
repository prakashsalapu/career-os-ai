import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Trash2, Edit2, Save, X, BookOpen, Loader } from 'lucide-react';

const Notes = () => {
  const { token } = useAuth();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get('/api/notes', config);
      setNotes(res.data);
    } catch (error) {
      console.error('Failed to fetch notes', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchNotes();
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentNote.title || !currentNote.content) return;

    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      if (editingId) {
        const res = await axios.put(`/api/notes/${editingId}`, currentNote, config);
        setNotes(notes.map(n => n._id === editingId ? res.data : n));
      } else {
        const res = await axios.post('/api/notes', currentNote, config);
        setNotes([res.data, ...notes]);
      }
      setIsFormOpen(false);
      setCurrentNote({ title: '', content: '' });
      setEditingId(null);
    } catch (error) {
      console.error('Error saving note', error);
    }
  };

  const handleEdit = (note) => {
    setCurrentNote({ title: note.title, content: note.content });
    setEditingId(note._id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`/api/notes/${id}`, config);
      setNotes(notes.filter(n => n._id !== id));
    } catch (error) {
      console.error('Error deleting note', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64"><Loader className="animate-spin text-indigo-500" size={32} /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="text-indigo-400" /> My Notes
          </h2>
          <p className="text-slate-400 text-sm mt-1">Keep track of your interview prep, important concepts, and ideas.</p>
        </div>
        <button 
          onClick={() => {
            setCurrentNote({ title: '', content: '' });
            setEditingId(null);
            setIsFormOpen(true);
          }}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-white font-medium transition-colors"
        >
          <Plus size={18} /> New Note
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">{editingId ? 'Edit Note' : 'Create Note'}</h3>
            <button onClick={() => setIsFormOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text"
              placeholder="Note Title"
              value={currentNote.title}
              onChange={e => setCurrentNote({...currentNote, title: e.target.value})}
              className="w-full bg-[#0B0F19] border border-[#1e293b] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
              required
            />
            <textarea 
              placeholder="Write your note here... (Markdown supported mentally)"
              value={currentNote.content}
              onChange={e => setCurrentNote({...currentNote, content: e.target.value})}
              className="w-full bg-[#0B0F19] border border-[#1e293b] rounded-xl px-4 py-3 text-white h-40 resize-none focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
            <div className="flex justify-end gap-3">
              <button 
                type="button" 
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-white font-medium transition-colors"
              >
                <Save size={18} /> Save Note
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.length === 0 ? (
          <div className="col-span-full py-12 text-center border-2 border-dashed border-[#1e293b] rounded-2xl text-slate-500">
            No notes yet. Create one to get started!
          </div>
        ) : (
          notes.map(note => (
            <div key={note._id} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 hover:border-indigo-500/30 transition-colors group relative flex flex-col h-64">
              <h4 className="text-lg font-semibold text-white mb-2 truncate pr-12">{note.title}</h4>
              <p className="text-slate-400 text-sm mb-4 line-clamp-4 flex-1 break-words whitespace-pre-wrap">{note.content}</p>
              <div className="text-xs text-slate-500 mt-auto">
                {new Date(note.updatedAt).toLocaleDateString()}
              </div>

              <div className="absolute top-4 right-4 flex opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                <button 
                  onClick={() => handleEdit(note)} 
                  className="p-1.5 bg-slate-800 hover:bg-indigo-500 text-slate-300 hover:text-white rounded-lg transition-colors"
                >
                  <Edit2 size={14} />
                </button>
                <button 
                  onClick={() => handleDelete(note._id)} 
                  className="p-1.5 bg-slate-800 hover:bg-red-500 text-slate-300 hover:text-white rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
