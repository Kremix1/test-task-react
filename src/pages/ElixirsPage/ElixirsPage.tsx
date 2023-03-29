import {useFetchElixirs} from "../../assets/hooks/useFetchElixirs";
import React, {useState} from "react";
import {Loading} from "../../Components/Loading/Loading";
import {ElixirItem} from "../../Components/ElixirItem/ElixirItem";
import './elixirsPage.scss'
import {Pagination} from "../../Components/Pagination/Pagination";
import {useFinder} from "../../assets/hooks/useFinder";
import {Filters} from "../../Components/Filters/Filters";

export const ElixirsPage = () => {
    const {loading, elixirs} = useFetchElixirs()
    const {currentElixirs, currentPage, input, paginateUp, paginateDown, findElixir} = useFinder(elixirs)
    const [filters, setFilters] = useState(false)

    return (
        <>
            {loading && <Loading/>}
            {!loading &&
                <div className="main-page">
                    {!filters &&
                        <>
							<div className="main-page__list">
								<h1 className="main-page__header">Elixir's from Harry Potter World</h1>
								<div
									className="main-page__open-filters"
									onClick={() => setFilters(true)}
								>
									<div></div>
									<h3>Фильтры</h3>
								</div>
                                {currentElixirs.map((elixir) =>
                                    <ElixirItem key={elixir.id} elixir={elixir} />
                                )}
								<Pagination
									currentPage={currentPage}
									paginateUp={paginateUp}
									paginateDown={paginateDown}
								/>
							</div>
                        </>
                    }
                    <div className={filters ? 'main-page__filters show-filters' : 'main-page__filters'}>
                        <Filters
                            filters={filters}
                            setFilters={setFilters}
                            input={input!}
                            findElixir={findElixir}
                        />
                    </div>
                </div>
            }
        </>
    );
}