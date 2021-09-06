import React from 'react';

const Button2 = () => {
    return (
        <div className = "table">
            <table className = "table-responsive">
                <thead>
                    <tr>
                        <th colSpan = "10"><h1>Dates competitions</h1></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>10h-11h</th>
                        <th>11h-12h</th>
                        <th>13h - 14h</th>
                        <th>15h - 16h</th>
                        <th>16h - 17h</th>
                        <th>17h - 18h</th>
                        <th>18h - 19h</th>
                        <th>19h - 20h</th>
                        <th>20h - 21h</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lundi</td>
                        <td data-label = "10h - 11h"></td>
                        <td data-label = "11h - 12h" ></td>
                        <td data-label = "12h - 13h" ></td>
                        <td data-label = "15h - 16h"></td>
                        <td data-label = "16h - 17h" ></td>
                        <td data-label = "17h - 18h" ></td>
                        <td data-label = "18h - 19h"></td>
                        <td data-label = "19h - 20h"></td>
                        <td data-label = "20h - 21h"></td>
                    </tr>
                    <tr>
                        <td>Mardi</td>
                        <td data-label = "10h - 11h"></td>
                        <td data-label = "11h - 12h"></td>
                        <td data-label = "12h - 13h"></td>
                        <td data-label = "15h - 16h"></td>
                        <td data-label = "16h - 17h"></td>
                        <td data-label = "17h - 18h" ></td>
                        <td data-label = "18h - 19h"></td>
                        <td data-label = "19h - 20h"></td>
                        <td data-label = "20h - 21h"></td>
                    </tr>
                    <tr>
                        <td>Mercredi</td>
                        <td data-label = "10h - 11h"></td>
                        <td data-label = "11h - 12h"></td>
                        <td data-label = "12h - 13h" ></td>
                        <td data-label = "15h - 16h"></td>
                        <td data-label = "16h - 17h" className = "cours">16h - 17h</td>
                        <td data-label = "17h - 18h" className = "cours">17h - 18h</td>
                        <td data-label = "18h - 19h"></td>
                        <td data-label = "19h - 20h"></td>
                        <td data-label = "20h - 21h"></td>
                    </tr>
                    <tr>
                        <td>Jeudi</td>
                        <td data-label = "10h - 11h"></td>
                        <td data-label = "11h - 12h" ></td>
                        <td data-label = "12h - 13h" ></td>
                        <td data-label = "15h - 16h"></td>
                        <td data-label = "16h - 17h" ></td>
                        <td data-label = "17h - 18h" ></td>
                        <td data-label = "18h - 19h"></td>
                        <td data-label = "19h - 20h"></td>
                        <td data-label = "20h - 21h"></td>
                    </tr>
                    <tr>
                        <td>Vendredi</td>
                        <td data-label = "10h - 11h"></td>
                        <td data-label = "11h - 12h" ></td>
                        <td data-label = "12h - 13h" ></td>
                        <td data-label = "15h - 16h"></td>
                        <td data-label = "16h - 17h" className = "cours">16h - 17h</td>
                        <td data-label = "17h - 18h" className = "cours">17h - 18h</td>
                        <td data-label = "18h - 19h"></td>
                        <td data-label = "19h - 20h"></td>
                        <td data-label = "20h - 21h"></td>
                    </tr>
                    <tr>
                        <td>Samedi</td>
                        <td data-label = "10h - 11h" className = "cours">10h - 11h</td>
                        <td data-label = "11h - 12h" className = "cours">11h - 12h</td>
                        <td data-label = "12h - 13h"></td>
                        <td data-label = "15h - 16h"></td>
                        <td data-label = "16h - 17h"></td>
                        <td data-label = "17h - 18h"></td>
                        <td data-label = "18h - 19h"></td>
                        <td data-label = "19h - 20h"></td>
                        <td data-label = "20h - 21h"></td>
                    </tr>
                </tbody>
            </table>
            <div className = "Map">
                <div className = "img">
                <img src = "./images/simplon.png"></img>
                </div>
                <div className = "par">
                <p>33 Bd du Général Leclerc <br /> 59100 Roubaix</p> <br />
                <h3>Contact</h3>
                <p>aikido@simplon.co</p>
                <p>+33 6 66 66 66 66</p>
                </div>
            </div>
        </div>
    );
};

export default Button2;