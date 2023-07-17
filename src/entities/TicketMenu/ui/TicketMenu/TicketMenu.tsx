import { fetchTicket } from 'entities/TicketMenu';
import { Path } from 'entities/TicketMenu/model/types/path';
import { Ticket } from 'entities/TicketMenu/ui/Ticket/Ticket';
import { TicketMenuOptions } from 'entities/TicketMenu/ui/TicketMenuOptions/TicketMenuOptions';
import { TicketMenuSidebar } from 'entities/TicketMenu/ui/TicketMenuSidebar/TicketMenuSidebar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import cls from './TicketMenu.module.scss';

interface TicketMenuProps {
	className?: string;
}
export const TicketMenu = ({ className }: TicketMenuProps) => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const [leftBtnActive, setLeftBtnActive] = useState(false);
	const [centerBtnActive, setCenterBtnActive] = useState(false);
	const [rightBtnActive, setRightBtnActive] = useState(false);
	const handleBtnLeft = () => {
		setLeftBtnActive((prev) => !prev);
		setCenterBtnActive(false);
		setRightBtnActive(false);
		const limit = 3;
		const search = Path.CHEAPEST;
		dispatch(fetchTicket({ limit, search }));
	};
	const handleBtnCenter = () => {
		setLeftBtnActive(false);
		setRightBtnActive(false);
		setCenterBtnActive((prev) => !prev);
		const limit = 3;
		const search = Path.FASTEST;
		dispatch(fetchTicket({ limit, search }));
	};
	const handleBtnRight = () => {
		setLeftBtnActive(false);
		setCenterBtnActive(false);
		setRightBtnActive((prev) => !prev);
		const limit = 3;
		const search = Path.OPTIMAL;
		dispatch(fetchTicket({ limit, search }));
	};
	const [loadMoreBtn, setLoadMoreBtn] = useState(false);

	const handleLoadMore = () => {
		setLoadMoreBtn(true);
		const limit = 9;
		const search = Path.TICKET;
		dispatch(fetchTicket({ limit, search }));
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
				<Button
					onClick={handleLoadMore}
					disabled={loadMoreBtn}
					className={classNames(cls.loadMoreBtn, {}, [className])}
				>
					{t('Загрузить еще билеты')}
				</Button>
			</div>
		</main>
	);
};
