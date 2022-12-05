import React, {useState} from "react";

import {Container} from "react-bootstrap";

function Filter(props) {
    const [params, setParams] = useState({
        sorting: "PriceDesc",
        categories: ["wok", "pizza"],
        vegetarian: false,
    })

    return (
        <Container className="w-25 m-5 p-2 bg-light rounded-3">
            <h5>Фильтры:</h5>
            <div className="d-block">
                <h6>Сортировать по:</h6>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sortTypeRadio" value="price"/>
                        <label className="form-check-label">цене</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sortTypeRadio" value="name"/>
                        <label className="form-check-label">названию</label>
                    </div>
                </div>

                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sortDirectionRadio" value="asc"/>
                        <label className="form-check-label">возрастанию</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="desc" name="sortDirectionRadio"/>
                        <label className="form-check-label">убыванию</label>
                    </div>
                </div>
            </div>


            <div className="d-block">
                <h6>Категория</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="pizza"/>
                    <label className="form-check-label">Pizza</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="wok"/>
                    <label className="form-check-label">Wok</label>
                </div>
            </div>


            <div>
                <h6>Вегетерианское? </h6>
                <div>
                    <div className="form-radio">
                        <input className="form-check-input" type="checkbox" name="isVegetarian" value="True"
                               id="flexCheckDefault"/>
                        <label className="form-check-label">Да</label>
                    </div>
                    <div className="form-radio">
                        <input className="form-check-input" type="checkbox" name="isVegetarian" value="False"
                               id="flexCheckChecked"/>
                        <label className="form-check-label">Нет</label>
                    </div>
                </div>
            </div>
        </Container>)
}

export default Filter