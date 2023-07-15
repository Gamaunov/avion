import { createAsyncThunk } from '@reduxjs/toolkit';
import { TicketSchema } from 'entities/TicketMenu';

// import { getTicketsPageLimit } from 'entities/TicketMenu/model/selectors/ticketPageSelector';

// import { ThunkConfig } from 'app/store/types/StateSchema';

// import {TicketState} from "entities/TicketMenu/model/reducer/TicketSlice";

interface FetchTicketListProps {
	page?: number;
}
// export const fetchTicket = createAsyncThunk<
// 	TicketState[],
// 	FetchTicketListProps,
// 	ThunkConfig<string>
// >(
// 	'ticket/fetchTicket',
// 	async function (props, thunkApi) {
// 		const { extra, rejectWithValue, getState } = thunkApi;
// 		const { page = 1 } = props;
// 		const limit = getTicketsPageLimit(getState());
// 		const response = await fetch('http://localhost:8000/ticket?_limit=3');
//
// 		if (!response.ok) {
// 			return rejectWithValue('Server Error!');
// 		}
//
// 		const data = await response.json();
// 		return data;
// 	}
// );
export const fetchTicket = createAsyncThunk<
	TicketSchema[],
	undefined,
	{ rejectValue: string }
>('ticket/fetchTicket', async function (_, { rejectWithValue }) {
	const response = await fetch('http://localhost:8000/ticket?_limit=3');

	if (!response.ok) {
		return rejectWithValue('Server Error!');
	}

	const data = await response.json();
	return data;
});
