import React, { useState, useContext } from 'react';
import ArrowSvg from "../../svg/formArrowSvg";
import InputMask from 'react-input-mask';
import { AppContext } from '../../context/context';
import {LoadingOutlined} from '@ant-design/icons';

const Request = ({ color, formId }) => {
    const prefixes = [
        "27)",
        "00)",
        "08)",
        "05)",
        "71)",
        "76)",
        "77)",
        "01)",
        "02)",
        "75)",
        "78)",
        "07)",
        "47)",
        "06)",
        "18)",
        "26)",
        "25)",
        "74)",
        "64)",
        "63)",
        "60)",
        "62)",
        "21) 31",
        "25) 32",
        "10) 33",
        "24) 38",
        "11) 43",
        "10) 36",
        "23) 44",
        "16) 38",
        "26) 41",
        "18) 39",
        "12) 31",
        "11) 33",
        "18) 37",
        "10) 31",
        "23) 46",
        "21) 3",
        "21) 3",
        "29) 2",
        "13) 2",
        "10) 37",
        "18) 41",
        "27) 57",
        "13) 37",
        "27) 2",
        "14) 40",
        "24) 33",
        "14) 30",
        "16) 44",
        "15) 33",
        "25) 40",
        "26) 33",
        "17) 2",
        "16) 41",
        "25) 42",
        "10) 30",
        "16) 43",
        "12) 2",
        "14) 53",
        "22) 37",
        "22) 36",
        "13) 45",
        "36) 22",
        "27) 73",
        "16) 40",
        "28) 38",
        "10) 36",
        "22) 46",
        "13) 42",
        "26) 35",
        "18) 40",
        "29) 32",
        "25) 31",
        "15) 38",
        "15) 44",
        "23) 38",
        "23) 41",
        "16) 30",
        "14) 43",
        "23) 51",
        "15) 31",
        "15) 31",
        "12) 33",
        "23) 47",
        "23) 31",
        "11) 31",
        "14) 34",
        "16) 48",
        "11) 34",
        "11) 41",
        "11) 38",
        "21) 47",
        "16) 42",
        "16) 33",
        "27) 75",
        "16) 47",
        "10) 40",
        "10) 43",
        "16) 35",
        "24) 31",
        "11) 38",
        "24) 35",
        "29) 34",
        "26) 34",
        "28) 32",
        "28) 31",
        "10) 34",
        "10) 2",
        "23) 51",
        "18) 31",
        "25) 34",
        "14) 35",
        "24) 37",
        "23) 40",
        "14) 55",
        "16) 32",
        "23) 35",
        "12) 34",
        "18) 32",
        "28) 37",
        "11) 44",
        "25) 39",
        "14) 37",
        "13) 33",
        "28) 41",
        "27) 72",
        "14) 41",
        "28) 36",
        "21) 2",
        "10) 32",
        "14) 54",
        "14) 52",
        "26) 44",
        "11) 45",
        "22) 52",
        "13) 42",
        "21) 46",
        "27) 71",
        "23) 42",
        "14) 56",
        "18) 33",
        "27) 77",
        "15) 36",
        "25) 36",
        "21) 44",
        "15) 42",
        "28) 42",
        "23) 48",
        "18) 38",
        "16) 2",
        "16) 37",
        "26) 36",
        "15) 43",
        "14) 2",
        "16) 2",
        "26) 31",
        "12) 37",
        "22) 51",
        "23) 39",
        "29) 37",
        "24) 2",
        "24) 22",
        "25) 47",
        "15) 46",
        "28) 43",
        "14) 33",
        "22) 39",
        "12) 39",
        "16) 46",
        "15) 41",
        "13) 31",
        "12) 36",
        "25) 32",
        "12) 38",
        "26) 42",
        "21) 48",
        "25) 41",
        "27) 79",
        "23) 53",
        "15) 35",
        "14) 48",
        "21) 49",
        "27) 52",
        "18) 2",
        "11) 30",
        "15) 2",
        "15) 44",
        "10) 39",
        "23) 36",
        "14) 31",
        "15) 35",
        "11) 40",
        "23) 33",
        "21) 37",
        "28) 39",
        "25) 37",
        "26) 37",
        "14) 51",
        "28) 40",
        "10) 63",
        "26) 39",
        "15) 33",
        "22) 2",
        "15) 34",
        "23) 37",
        "15) 32",
        "15) 38",
        "16) 45",
        "16) 39",
        "23) 34",
        "11) 42",
        "15) 36",
        "27) 74",
        "28) 2",
        "15) 46",
        "26) 2",
        "26) 22",
        "14) 36",
        "11) 39",
        "28) 35",
        "25) 30",
        "21) 3",
        "12) 30",
        "23) 43",
        "24) 36",
        "15) 37",
        "21) 38",
        "26) 38",
        "21) 53",
        "14) 39",
        "25) 38",
        "25) 33",
        "14) 45",
        "14) 44",
        "27) 70",
        "10) 35",
        "21) 54",
        "11) 2",
        "22) 30",
        "18) 34",
        "23) 2",
        "28) 33",
        "28) 34",
        "11) 32",
        "14) 42",
        "29) 38",
        "13) 41",
        "13) 36",
        "11) 36",
        "27) 76",
        "11) 37",
        "15) 35",
        "15) 36",
        "27) 78",
        "13) 55",
        "23) 45",
        "18) 36",
        "25) 35",
        "25) 44",
        "21) 56",
        "10) 38",
        "25) 48",
        "23) 32",
        "29) 31",
        "24) 32",
        "25) 46",
        "16) 31",
        "26) 43",
        "13) 46",
        "22) 57",
        "25) 2",
        "16) 36",
        "18) 7",
        "13) 34",
        "15) 43"
    ];

    function containsStringFromArray(inputString) {
        for (const str of prefixes) {
            if (inputString.includes(str)) {
                return true;
            }
        }
        return false;
    }

    const [isLoading, setIsLoading] = useState(false);
    const { toggleSuccessPage } = useContext(AppContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);

    const [nameErr, setNameErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const [agrErr, setAgrErr] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source')??"/";
    const utmMedium = urlParams.get('utm_medium')??"/";
    const utmCampaign = urlParams.get('utm_campaign')??"/";
    const utmContent = urlParams.get('utm_content')??"/";
    const utmTerm = urlParams.get('utm_term')??"/";
    const utmPlatform = urlParams.get('utm_platform')??"/";
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        var formData = new FormData();

        if (name === "") {
            setNameErr(true);
            setIsLoading(false);
            return;
        }

        if (phone.trim().length !== "+6 (674) 636 46 34".length || !containsStringFromArray(phone)) {
            setPhoneErr(true);
            setIsLoading(false);
            return;
        }

        if (agreement === false) {
            setAgrErr(true);
            setIsLoading(false);
            return;
        }
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("checkbox", agreement);
        formData.append("form_id", formId);
        formData.append("gclid", window.gid);
        formData.append("utm_source", utmSource);
        formData.append("utm_medium", utmMedium);
        formData.append("utm_campaign", utmCampaign);
        formData.append("utm_content", utmContent);
        formData.append("utm_term", utmTerm);
        formData.append("utm_platform", utmPlatform);
        formData.append("fullurl", window.location.href);

        // var formDataString = Object.fromEntries(formData);
        // console.log(formDataString);
        fetch('https://ramscity.kz/send.php', {
            method: 'POST',
            body: formData,
        })
            // .then((response) => response.json())
            .then((data) => {
                setName("");
                setPhone("");
                setAgreement(false);
                // Handle the response from the backend
                // console.log(data);
                toggleSuccessPage();
            })
            .catch((error) => {
                setName("");
                setPhone("");
                setAgreement(false);
                // Handle errors
                console.error(error);
                setIsLoading(false);
                // toggleSuccessPage();
            });
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const arrowColor = isHovered ? '#E76B47' : color;

    return (
        <form onSubmit={handleSubmit}>
            <div className='text'>
                <label htmlFor="name">Имя</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Введите имя'
                    value={name}
                    onChange={(e) => { setName(e.target.value); setNameErr(false) }}
                // required
                />
                <div className="error">
                    {nameErr ? "Вы должны заполнить данное поле" : ""}
                </div>
            </div>
            <div className='text'>
                <label htmlFor="phone">Телефон</label>
                <InputMask mask="+7 (799) 999-99-99" maskChar=" "
                    type="text" id='phone'
                    placeholder='Введите номер'
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setPhoneErr(false) }}
                // required
                />
                <div className="error">
                    {phoneErr ? "Неверный номер телефона" : ""}
                </div>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="key" value="value"
                        checked={agreement}
                        onChange={(e) => { setAgreement(e.target.checked); setAgrErr(false) }}
                    />
                    <div><span>Я согласен(а) на обработку моих персональных данных.</span></div>
                </label>
                <div className="error">
                    {agrErr ? "Вы должны быть согласны на обработку данных" : ""}
                </div>
            </div>
            <button onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} type="submit" disabled={isLoading}>{isLoading ? <LoadingOutlined /> : 'Отправить'} <ArrowSvg color={arrowColor} className="arrow" /></button>
        </form>
    )
}

export default Request;