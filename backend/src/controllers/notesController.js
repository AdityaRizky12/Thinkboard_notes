import Notes from "../models/Notes.js"


export async function getAllNotes(_,res) {
   try {
      const notes = await Notes.find().sort({createdAt: -1}) //newest first
      res.status(200).json(notes)
   } catch (error) {
      console.error("Eror in getAllNotes", error)
      res.status(500).json({message: "Internal server Error"})
   }
}

export async function getNotesById(req,res) {
  try {
   const note = await Notes.findById(req.params.id)
   if(!note) return res.status(404).json({message: "Note not found"})
   res.json(note)
  } catch (error) {
   console.error("Eror in getAllNotes", error)
      res.status(500).json({message: "Internal server Error"})
  }
}

 export async function createdNotes(req,res) {
  try {
      const {title, content} = req.body
      const note = new Notes({title,content})
      const saveNote = await note.save()
      res.status(201).json(saveNote)
  } catch (error) {
         console.error("Eror in CreatedNotes", error)
      res.status(500).json({message: "Internal server Error"})
  }
}

 export async function updateNotes(req,res) {
   try {
      const {title,content} = req.body
     const updateNote = await Notes.findByIdAndUpdate(req.params.id,{title,content}, {
      new: true
     })
      if(!updateNote) return res.status(404).json({message: "Note not found"})

      res.status(200).json(updateNote)
   } catch (error) {
        console.error("Eror in UpdateNotes", error)
      res.status(500).json({message: "Internal server Error"})
   }
}

export async function deleteNotes(req,res) {
   try {
      const deleteNote = await Notes.findByIdAndDelete(req.params.id)
      if(!deleteNote) return res.status(404).json({message: "Note not found"})
      res.status(200).json({message: "Note delete successfully"})
   } catch (error) {
        console.error("Eror in DeleteNotes", error)
      res.status(500).json({message: "Internal server Error"})
   }
}