import './pagination.scss'
interface InterfaceProps {
    currentPage: number,
    paginateUp: () => void,
    paginateDown: () => void,
}
export const Pagination = ({currentPage, paginateUp, paginateDown}: InterfaceProps) => {

    return (
        <div className="pagination">
            <div className="pagination__item pagination__left"
                    onClick={paginateDown}>
            </div>
            <div className="pagination__item">{currentPage}</div>
            <div className="pagination__item pagination__right"
                    onClick={paginateUp}>
            </div>
        </div>
    );
};