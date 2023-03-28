import {useElixirs} from "../../hooks/fetchElixirs";
import React from "react";
import {Loading} from "../../Components/Loading/Loading";
import {ElixirItem} from "../../Components/ProductItem/ElixirItem";
import './elixirsPage.scss'
import {Pagination} from "../../Components/Pagination/Pagination";

export const ElixirsPage = () => {
    //TODO: Создать хук usePagination в который отдать нужные и там просчитать
    const {loading, currentElixirs, findElixir, input, currentPage, paginateUp, paginateDown} = useElixirs()

    return (
        <>
            {loading && <Loading/>}
            {!loading &&
                <div className="main-page">
                    <div className="main-page__list">
                    <h1 className="main-page__header">Elixir's from Harry Potter World</h1>
                    {currentElixirs.map((elixir) =>
                        <ElixirItem key={elixir.id} elixir={elixir} />
                    )}
                    <Pagination
                        currentPage={currentPage}
                        paginateUp={paginateUp}
                        paginateDown={paginateDown}
                    />
					</div>
                    <div className="main-page__filters">
                        <h2>Фильтры</h2>
                        <div className="main-page__filters__item">
                            <span className='main-page__lorem'>Название</span>
                            <div className="find">
								<input className="main-page__filters__find" value={input} onChange={(e) => findElixir(e)}/>
                            </div>
						</div>
                        <div className="main-page__filters__item">
                            <span className='main-page__lorem'>Ингредиенты</span>
                            <select>
                                <option>Корешки</option>
                                <option>Вершки</option>
                                <option>Горшки</option>
                            </select>
						</div>
                        <div className="main-page__filters__item">
							<span className='main-page__lorem'>Сложность</span>
                            <form>
                                <input type="radio" id="Абобка"/>
                                <label htmlFor='Абобка'>Абобка</label>
                                <input type="radio" id="БИБА!"/>
                                <label htmlFor='БИБА!'>БИБА!</label>
                                <input type="radio" id="ЗАЛУПА"/>
                                <label htmlFor='ЗАЛУПА'>ЗАЛУПА</label>
                            </form>
						</div>
                    </div>
                </div>
            }

        </>
    );
}