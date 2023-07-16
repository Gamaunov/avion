import { fetchTicket } from 'entities/TicketMenu';
import { Path } from 'entities/TicketMenu/model/types/path';
import { useEffect } from 'react';

import Pobeda from 'shared/assets/pobeda.svg';
import RedWings from 'shared/assets/red-wings.svg';
import S7 from 'shared/assets/s7-airlines.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	useAppDispatch,
	useAppSelector,
} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import cls from './Ticket.module.scss';

interface TicketProps {
	className?: string;
}
export const Ticket = ({ className }: TicketProps) => {
	const { isLoading, error } = useAppSelector((state) => state.ticket);
	const ticket = useAppSelector((state) => state.ticket.ticket);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const limit = 3;
		const search = Path.TICKET;
		dispatch(fetchTicket({ limit, search }));
	}, [dispatch]);

	return (
		<div className={classNames(cls.Ticket, {}, [className])}>
			{isLoading ? (
				<>
					<Skeleton className={cls.skeleton} />
					<Skeleton className={cls.skeleton} />
					<Skeleton className={cls.skeleton} />
				</>
			) : (
				ticket.map((ticket) => (
					<div
						key={ticket.id}
						className={classNames(cls.TicketInner, {}, [className])}
					>
						<div className={cls.priceDestTime}>
							<span className={cls.price}>{ticket.price} P</span>
							<span className={cls.title}>{ticket.destination}</span>
							<span>{ticket.time}</span>
						</div>
						<div className={cls.time}>
							<span className={cls.title}>В пути</span>
							<span>{ticket.destinationTime}</span>
						</div>
						<div className={cls.companyTrans}>
							{ticket.company === 'RED WINGS' && (
								<RedWings className={cls.company} />
							)}
							{ticket.company === 'ПОБЕДА' && (
								<Pobeda className={cls.company} />
							)}
							{ticket.company === 'AIRLINES' && <S7 className={cls.company} />}

							<span className={cls.title}>Пересадки</span>
							<span>{ticket.transfer}</span>
						</div>
					</div>
				))
			)}
			{error && <h2>An error occured: {error}</h2>}
		</div>
	);
};
