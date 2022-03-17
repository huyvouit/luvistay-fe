import React from "react";
import './boxBooking.scss'

const BoxBooking = () => {
    return <div className="boxbooking">
        <section className="boxbooking-section">
            <form className="boxbooking-section-form">
                <div className="boxbooking-section-form-item">
                    <p className="check">
                        <label>
                            Check-in: <abbr title="Formatted as dd/mm/yyy">*</abbr>
                        </label>
                        <br />
                        <input autoComplete="off" required="required" type="text" placeholder="Check-in Date" inputmode="none"></input>
                    </p>
                    <p className="check">
                        <label>
                            Check-out: <abbr title="Formatted as dd/mm/yyy">*</abbr>
                        </label>
                        <br />
                        <input autoComplete="off" required="required" type="text" placeholder="Check-out Date" inputmode="none"></input>
                    </p>
                    <p class="">
                        <label > Adults: </label>
                        <br />
                        <select name="mphb_adults">
                            <option value="1" selected="selected"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            <option value="8"> 8</option>
                            <option value="9"> 9</option>
                            <option value="10"> 10</option>
                            <option value="11"> 11</option>
                            <option value="12"> 12</option>
                            <option value="13"> 13</option>
                            <option value="14"> 14</option>
                            <option value="15"> 15</option>
                        </select>
                    </p>
                    <p className="">
                        <label > Children: </label>
                        <br />
                        <select name="mphb_children">
                            <option value="0" selected="selected"> 0</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            <option value="8"> 8</option>
                            <option value="9"> 9</option>
                            <option value="10"> 10</option>
                        </select>
                    </p>
                </div>
                <p className="boxbooking-section-form-submit"> <input type="submit" class="button" value="Search"/></p>
            </form>
        </section>
    </div>;
};

export default BoxBooking;
