import React from 'react';
import classes from "./Conditions.module.css"


const conditions = (props) => {
    return (



        <div className={classes.Wrapper}>

            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

            {props.loading && <div className={classes.Loader} />}

            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>It is currently {Math.round(props.responseObj.main.temp)}{props.unit==='imperial' ? <span>&#8457;</span> : <span>&#8451;</span>}  outside with {props.responseObj.weather[0].description}.</p>
                </div>
            : null
            }
        </div>
    )
}

export default conditions;