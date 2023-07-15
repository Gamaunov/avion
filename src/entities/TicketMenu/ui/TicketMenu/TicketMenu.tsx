import { fetchTicket } from 'entities/TicketMenu';
import { Ticket } from 'entities/TicketMenu/ui/Ticket/Ticket';
import { TicketMenuOptions } from 'entities/TicketMenu/ui/TicketMenuOptions/TicketMenuOptions';
import { TicketMenuSidebar } from 'entities/TicketMenu/ui/TicketMenuSidebar/TicketMenuSidebar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { classNames } from 'shared/lib/classNames/classNames';
import {
	useAppDispatch,
	useAppSelector,
} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import cls from './TicketMenu.module.scss';

interface TicketMenuProps {
	className?: string;
}
export const TicketMenu = ({ className }: TicketMenuProps) => {
	const { t } = useTranslation();

	const ticket = useAppSelector((state) => state.ticket.ticket);
	const dispatch = useAppDispatch();

	const [leftBtnActive, setLeftBtnActive] = useState(true);
	const [centerBtnActive, setCenterBtnActive] = useState(false);
	const [rightBtnActive, setRightBtnActive] = useState(false);
	const handleBtnLeft = () => setLeftBtnActive((prev) => !prev);
	const handleBtnCenter = () => setCenterBtnActive((prev) => !prev);
	const handleBtnRight = () => setRightBtnActive((prev) => !prev);

	const handleLoadMore = () => {
		// dispatch(fetchTicket(3));
	};

	return (
		<main className={classNames(cls.TicketMenu, {}, [className])}>
			<TicketMenuSidebar className={cls.mediaD} />
			<div className={cls.ticketInner}>
				<div className={cls.options}>
					<Button
						className={classNames(cls.optionBtn, {}, [
							cls.btnLeft,
							leftBtnActive ? cls.activeBtn : '',
						])}
						onClick={handleBtnLeft}
					>
						{t('Самый дешевый')}
					</Button>
					<Button
						className={classNames(cls.optionBtn, {}, [
							cls.btnCenter,
							centerBtnActive ? cls.activeBtn : '',
						])}
						onClick={handleBtnCenter}
					>
						{t('Самый быстрый')}
					</Button>
					<Button
						className={classNames(cls.optionBtn, {}, [
							cls.btnRight,
							rightBtnActive ? cls.activeBtn : '',
						])}
						onClick={handleBtnRight}
					>
						{t('Самый оптимальный')}
					</Button>
				</div>
				<TicketMenuOptions className={cls.mediaM} />

				<Ticket />
				<Button className={cls.loadMoreBtn} onClick={handleLoadMore}>
					Загрузить еще билеты
				</Button>
			</div>
		</main>
	);
};
