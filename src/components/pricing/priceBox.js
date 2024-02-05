import { useState } from "react";

const PriceBox = () => {
    const [selectedPlan, setSelectedPlan] = useState('Monthly');

    const handleTabClick = (tab) => {
        setSelectedPlan(tab);
    };
    return (
        <>
            <div className="price_box_section">
                <div className="uk-margin">
                    <div
                        className={`button_tab ${selectedPlan === 'Monthly' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Monthly')}
                    >
                        Monthly
                    </div>
                    <div
                        className={`button_tab ${selectedPlan === 'Yearly' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Yearly')}
                    >
                        Yearly
                    </div>
                </div>
                <div className="price_box_inner">
                    <div className={`item_box_section ${selectedPlan === 'Monthly' ? 'is-selected' : ''}`}>
                        <div className="item_box is-selected">
                            <div className="recommend_card">We Recommend</div>
                            <div className="item_inner_box">
                                <p className="main_tt">Essentials</p>
                                <div className="plan-card__pricing">
                                    <p className="stat">Starts at</p>
                                    <p className="model__value">₹ 2,500</p>
                                    <p className="model__below">/ month, billed monthly</p>
                                </div>
                                <a href="https://erphome.azurewebsites.net/auth/login" className="button_strat" target="_blank">Get started now</a>
                                <div className="cio-plan-card__details">
                                    <ul>
                                        <li>1000 Records Limit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_inner_box">
                                <p className="main_tt">Premium</p>
                                <div className="plan-card__pricing">
                                    <p className="stat">Starts at</p>
                                    <p className="model__value">₹ 4,000</p>
                                    <p className="model__below">/ month, billed annually </p>
                                </div>
                                <a href="https://erphome.azurewebsites.net/auth/login" target="_blank" className="button_strat_get">Get a demo</a>
                                <div className="cio-plan-card__details">
                                    <ul>
                                        <li>Unlimited Usage and Advanced features of scanning the document</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`item_box_section ${selectedPlan === 'Yearly' ? 'is-selected' : ''}`}>
                        <div className="item_box is-selected">
                            <div className="recommend_card">We Recommend</div>
                            <div className="item_inner_box">
                                <p className="main_tt">Essentials</p>
                                <div className="plan-card__pricing">
                                    <p className="stat">Starts at</p>
                                    <p className="model__value">₹ 25,000</p>
                                    <p className="model__below">/ Year, billed yearly</p>
                                </div>
                                <a href="https://erphome.azurewebsites.net/auth/login" target="_blank" className="button_strat">Get started now</a>
                                <div className="cio-plan-card__details">
                                    <ul>
                                        <li>1000 Records Limit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_inner_box">
                                <p className="main_tt">Premium</p>
                                <div className="plan-card__pricing">
                                    <p className="stat">Starts at</p>
                                    <p className="model__value">₹ 40,000</p>
                                    <p className="model__below">/ Year, billed annually </p>
                                </div>
                                <a href="https://erphome.azurewebsites.net/auth/login" target="_blank" className="button_strat_get">Get a demo</a>
                                <div className="cio-plan-card__details">
                                    <ul>
                                        <li>Unlimited Usage and Advanced features of scanning the document</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceBox;