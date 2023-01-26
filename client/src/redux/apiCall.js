import axios from "axios"
import { updateError, updateStart, updateSuccess } from "./userSlice"

export const updateUser = async (user, dispatch) => {
	dispatch(updateStart())
	console.log('pending')
	try {

		const res = await axios.post('http://localhost:5000/api/user/update', user)

		dispatch(updateSuccess(res.data))
		console.log('done')

	} catch (error) {
		dispatch(updateError())
		console.log('error')
	}
}