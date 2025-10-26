import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/AxiosInstance";

const initialState = {
    notes: []
};

export const fetchNotes = createAsyncThunk(
    "getAllNotes",
    async () => {
        const response = await axiosInstance.get();
        return response.data.payload;
    }

)

export const createNote = createAsyncThunk(
    "createNote",
    async (note) => {
        const response = await axiosInstance.post("", note);
        return response.data.payload;
    }
)

export const deleteNote = createAsyncThunk(
    "deleteNote",
    async (id) => {
        const response = await axiosInstance.delete(`/delete/${id}`);
        return id;
    }
)

export const updateNote = createAsyncThunk(
    "updateNote",
    async ({ id, title, content }) => {
        const response = await axiosInstance.put(`/update/${id}`, { title, content });
        return response.data.payload;
    }
)

export const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            state.notes = action.payload;
        }),
            builder.addCase(createNote.fulfilled, (state, action) => {
                state.notes.push(action.payload);
            }),
            builder.addCase(deleteNote.fulfilled, (state, action) => {
                state.notes = state.notes.filter((note) => note.id !== action.payload);
            }),
            builder.addCase(updateNote.fulfilled, (state, action) => {
                state.notes = state.notes.map((note) => {
                    if (note.id === action.payload.id) {
                        return action.payload;
                    }
                    return note;
                });
            })



    }
}
);
export default noteSlice.reducer;
export const { } = noteSlice.actions;
