import { createAsyncThunk } from '@reduxjs/toolkit';
import { TicketSchema } from 'entities/TicketMenu';

import { api } from 'shared/api/api';

export const fetchTicket = createAsyncThunk<
	TicketSchema[],
	{ limit: number; search: string },
	{ rejectValue: string }
>(
	'ticket/fetchTicket',
	async function ({ limit, search }, { rejectWithValue }) {
		const response = await fetch(`${api}/${search}?_limit=${limit}`);

		if (!response.ok) {
			return rejectWithValue('Server Error!');
		}

		const data = await response.json();
		return data;
	}
);
