import React, {useEffect, useState} from "react";

import {Button, Container} from "react-bootstrap";

function Filter(props) {
    const [sortDirection, setSortDirection] = useState("Asc")
    const [categories, setCategories] = useState({
        "Pizza": false,
        "Wok": false,
        "Soup": false,
        "Dessert": false,
        "Drink": false
    })
    const [isVegetarian, setVegetarian] = useState({yes: false, no: false})
    const [sortType, setSortType] = useState("Name")

    function onChange(event) {
        console.log(event.target.value)
    }

    useEffect(() => {

    }, [sortDirection, categories, isVegetarian])

    return (
        <Container className="w-25 m-3 p-3 bg-light rounded-3">
            <h5>Фильтры:</h5>
            {/*CОРТИРОВКА*/}
            <div className="d-block">
                <h6>Сортировать по:</h6>
                <div className="d-flex justify-content-between me-3">
                    <div>
                        <div className="form-check">
                            <label className="form-check-label">
                                цене
                                <input className="form-check-input" type="radio" name="sortTypeRadio" value="Price"
                                       checked={sortType === "Price"}
                                       onChange={event => setSortType(event.target.value)}/>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                названию
                                <input className="form-check-input" type="radio" name="sortTypeRadio" value="Name"
                                       checked={sortType === "Name"}
                                       onChange={event => setSortType(event.target.value)}/>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                рейтингу
                                <input className="form-check-input" type="radio" name="sortTypeRadio" value="Rating"
                                       checked={sortType === "Rating"}
                                       onChange={event => setSortType(event.target.value)}/>
                            </label>
                        </div>
                    </div>

                    <div>
                        <div className="form-check">
                            <label className="form-check-label">
                                возрастанию
                                <input className="form-check-input" type="radio" name="sortDirectionRadio" value="Asc"
                                       checked={sortDirection === "Asc"}
                                       onChange={event => setSortDirection(event.target.value)}/>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                убыванию
                                <input className="form-check-input" type="radio" value="Desc" name="sortDirectionRadio"
                                       checked={sortDirection === "Desc"}
                                       onChange={event => setSortDirection(event.target.value)}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/*ФИЛЬТРЫ КАТЕГОРИЙ*/}
            <div className="d-block mt-2">
                <h6>Категории: </h6>
                <div className="d-flex flex-wrap justify-content-between">
                    {Object.keys(categories).map((value, key) => {
                        return (
                            <div className="form-check" key={key}>
                                <label className="form-check-label">
                                    {value}
                                    <input className="form-check-input" type="checkbox" value={`${value}`}
                                           checked={categories[`${value}`]}
                                           onChange={event => setCategories(
                                               {
                                                   ...categories,
                                                   [value]: !categories[`${value}`]
                                               }
                                           )}/>
                                </label>
                            </div>)
                    })}
                </div>
            </div>

            {/*ВЕГАНСКАЯ ЛИ ЕДА?*/}
            <div className="d-block">
                <h6>Вегетерианское? </h6>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="True" checked={isVegetarian.yes}
                               onChange={event => setVegetarian({...isVegetarian, yes: !isVegetarian.yes})}/>
                        Да
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="False" checked={isVegetarian.no}
                               onChange={event => setVegetarian({...isVegetarian, no: !isVegetarian.no})}/>
                        Нет
                    </label>
                </div>
            </div>

            <div className="mt-3">
                <Button variant="secondary" onClick={event => props.onChange(
                    {
                        sorting: `${sortType}${sortDirection}`,
                        categories: Object.keys(categories).filter(value => categories[value]),
                        ...(isVegetarian.yes !== isVegetarian.no && {vegetarian: isVegetarian.yes})
                    }
                )}>
                    Применить
                </Button>
            </div>
        </Container>)
}

export default Filter