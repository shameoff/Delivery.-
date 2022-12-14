import React, {useEffect, useState} from "react";
import Select from "react-select";
import {Button, Container} from "react-bootstrap";

const availableCategories = [
    {value: "Pizza", label: "Пицца"},
    {value: "Wok", label: "Вок"},
    {value: "Soup", label: "Супы"},
    {value: "Dessert", label: "Десерты"},
    {value: "Drink", label: "Напитки"}
]

const availableSortTypes = [
    {value: "NameAsc", label: "По алфавиту А-Я"},
    {value: "NameDesc", label: "По алфавиту Я-А"},
    {value: "PriceAsc", label: "По возрастанию цены"},
    {value: "PriceDesc", label: "По убыванию цены"},
    {value: "RatingAsc", label: "По возрастанию рейтинга"},
    {value: "RatingDesc", label: "По убыванию рейтинга"}

]

function Filter(props) {
    const [currentCategories, setCurrentCategories] = useState([])
    const [isVegetarian, setVegetarian] = useState(false)
    const [sorting, setSorting] = useState("NameAsc")

    return (
        <Container className="bg-light rounded-3 d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center">
            {/*ФИЛЬТРЫ КАТЕГОРИЙ*/}
            <div className="d-block m-2">
                <Select
                    placeholder={"Показывать только:"}
                    isMulti
                    name="categoriesToShow"
                    options={availableCategories}
                    className="foodType-multiSelect"
                    onChange={state => setCurrentCategories(state)}
                />
            </div>

            {/*CОРТИРОВКА*/}
            <div className="d-block m-2">
                <Select
                    placeholder={"Сортировать "}
                    options={availableSortTypes}
                    defaultValue={"А-Я"}
                    onChange={selected  => setSorting(selected.value)}
                />
            </div>


            {/*ВЕГАНСКАЯ ЛИ ЕДА?*/}
            <div className="d-block m-2">
                <div className="form-check form-switch text-wrap">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" role="switch"
                               checked={isVegetarian}
                               onChange={event => setVegetarian(!isVegetarian)}/>
                        Показать еду только для веганов
                    </label>
                </div>
            </div>
            </div>
            <div className="m-2 w-auto">
                <Button variant="primary" onClick={event => props.onSubmit(
                    {
                        sorting: `${sorting}`,
                        categories: currentCategories.map(e => e.value),
                        ...(isVegetarian && {vegetarian: isVegetarian})
                    }
                )}>
                    Применить
                </Button>
            </div>
        </Container>)
}

export default Filter