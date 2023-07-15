import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TicketSchema } from 'entities/TicketMenu';
import { fetchTicket } from 'entities/TicketMenu/model/service/TicketService';

export interface TicketState {
	ticket: TicketSchema[];
	isLoading: boolean;
	error: string | null;
	// pagination
	// page: number;
	// limit?: number;
	// hasMore: boolean;

	// _inited: boolean;
}

const initialState: TicketState = {
	ticket: [],
	isLoading: false,
	error: null,
	// page: 1,
	// hasMore: true,
};

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTicket.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchTicket.fulfilled, (state, action) => {
				state.ticket = action.payload;
				state.isLoading = false;
			})
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export default ticketSlice.reducer;

function isError(action: AnyAction) {
	return action.type.endsWith('rejected');
}
