import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from 'entities/TicketMenu/model/reducer/TicketSlice';

const store = configureStore({
	reducer: {
		ticket: ticketReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
