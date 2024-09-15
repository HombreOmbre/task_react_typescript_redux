import classes from './ErrorComponent.module.css';

export const ErrorComponent = () => {
    return (
        <div className={classes.errorContainer}>
            <h1 className={classes.mainTxt}>Error...</h1>
            <p className={classes.secondaryTxt}>Something gone wrong!</p>
        </div>
    );
}