import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
	const res = await axios.post('http://localhost:5000/api/user/update', user);
	return res.data;
})
export const deleteUser2 = createAsyncThunk("users/delete", async (user) => {
	const res = await axios.post('http://localhost:5000/api/user/delete', user);
	return res.data;
})

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userInfo: {
			name: 'john', email: 'john@gmail.com'
		},
		error: undefined,
	},
	reducers: {
		// udpate: (state, action) => {
		// 	state.name = action.payload.name;
		// 	state.email = action.payload.email;
		// }

		// updateStart: (state, action) => {
		// 	state.pending = true;
		// },
		// updateSuccess: (state, action) => {

		// 	state.pending = false;
		// 	state.userInfo = action.payload;
		// },
		// updateError: (state) => {
		// 	state.pending = false;
		// 	state.error = true;
		// }

		// thunk way
	},
	extraReducers: (builder) => {
		builder.addCase(updateUser2.pending, (state) => {
			state.pending = true
		})
		builder.addCase(updateUser2.fulfilled, (state, action) => {
			state.pending = false
			state.userInfo = action.payload;
		})
		builder.addCase(updateUser2.rejected, (state, action) => {
			debugger;
			state.pending = false;
			state.error = action.error?.message;
		})
		// [updateUser2.pending]: (state) => {
		// 	state.pending = true
		// 	state.error = false
		// },
		// [updateUser2.fulfilled]: (state, action) => {
		// 	state.pending = false
		// 	state.userInfo = action.payload;
		// },
		// [updateUser2.rejected]: (state) => {
		// 	state.pending = false
		// 	state.error = true;
		// },

		// [deleteUser2.pending]: (state) => {
		// 	state.pending = true
		// 	state.error = false
		// },
		// [deleteUser2.fulfilled]: (state, action) => {
		// 	state.pending = false
		// 	state.userInfo = action.payload;
		// },
		// [deleteUser2.rejected]: (state) => {
		// 	state.pending = false
		// 	state.error = true;
		// }
	}

})

export const { updateStart, updateSuccess, updateError, } = userSlice.actions;
export default userSlice.reducer;