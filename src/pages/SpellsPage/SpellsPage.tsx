import {useFetchSpells} from "../../assets/hooks/useFetchSpells";
import React, {useState} from "react";
import {Loading} from "../../Components/Loading/Loading";
import {SpellItem} from "../../Components/SpellItem/SpellItem";
import './spellPage.scss'
import {Pagination} from "../../Components/Pagination/Pagination";
import {useFinder} from "../../assets/hooks/useFinder";
import {Filters} from "../../Components/Filters/Filters";

export const SpellsPage = () => {
    const {loading, spells} = useFetchSpells()
    const {currentSpells, currentPage, input, paginateUp, paginateDown, findSpell} = useFinder(spells)
    const [filters, setFilters] = useState(false)

    return (
        <>
            {loading && <Loading/>}
            {!loading &&
                <div className="main-page">
                    {!filters &&
                        <>
							<div className="main-page__list">
								<h1 className="main-page__header">Заклинания из мира Гарри Поттера</h1>
								<div
									className="main-page__open-filters"
									onClick={() => setFilters(true)}
								>
									<div></div>
									<h3>Фильтры</h3>
								</div>
                                {currentSpells.map((spell) =>
                                    <SpellItem key={spell.id} spell={spell} />
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
							findSpell={findSpell}
                        />
                    </div>
                </div>
            }
        </>
    );
}